# ---------------------------------------
# Étape 1 : Builder l'application
# ---------------------------------------
# On part d'une image Node légère (Alpine)
FROM node:24-alpine AS builder

ARG VITE_COMMIT_SHA

ENV VITE_COMMIT_SHA=$VITE_COMMIT_SHA

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances (Optimisation du cache Docker)
# Si package.json ne change pas, Docker ne refera pas le 'npm ci'
COPY package*.json ./

# Installer les dépendances proprement
RUN npm ci

# Copier le reste du code source
COPY . .

# Construire l'application (Génère le dossier /dist)
RUN npm run build

# ---------------------------------------
# Étape 2 : Servir avec Nginx
# ---------------------------------------
# On repart d'une image vierge et ultra-légère
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape précédente (builder)
# vers le dossier par défaut de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port 80 (Standard HTTP)
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]