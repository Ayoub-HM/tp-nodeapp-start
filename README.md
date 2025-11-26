# TP CI/CD : DevOps Pipeline

## 📝 Contexte & Scénario

Vous venez d'être recruté en tant qu'ingénieur DevOps Lead dans une startup technologique. L'équipe de développement a créé une application React (celle utilisée en TP), mais le processus de déploiement est chaotique: tout est manuel, les tests sont souvent oubliés, et les déploiements en production cassent souvent le site.

**Votre mission (si vous l'acceptez):** Construire une "Usine Logicielle" (Pipeline CI/CD) robuste, sécurisée et optimisée sur GitLab pour automatiser le cycle de vie de l'application, du code jusqu'à la production.

---

## Objectifs Techniques (Le Cahier des Charges)

Votre pipeline `.gitlab-ci.yml` devra respecter les contraintes suivantes :

### 1. Gestion du Code (Git)

- Vous travaillerez sur une branche de fonctionnalité (ex: `feature/pipeline-setup`).
- Vous simulerez une **Merge Request** vers `main` pour valider votre travail.
- **Contrainte :** Aucun secret (token, mot de passe) ne doit apparaître en clair dans le code.

### 2. Intégration Continue (CI)

- **Workflow :** Le pipeline doit se lancer à chaque push.
- **Jobs :**
  - `lint` : Vérification du code (ESLint).
  - `test` : Tests unitaires (Vitest).
  - `build` : Compilation de l'application React.
- **Optimisation :**
  - Le Job `build` doit exposer le dossier `build/` sous forme d'**Artifact**.
  - Les jobs `lint` et `test` doivent s'exécuter en **parallèle**.

### 3. Déploiement Continu (CD) - "La Livraison"

- **Environnement Staging (Pré-prod) :**
  - Déploiement **Automatique** sur la branche `main` (Vercel / Netlify).
  - L'application doit afficher le numéro de version (Commit SHA). C'est possible en utilisant la variable d'environnement **VITE_COMMIT_SHA**.

### Bonus "Expert DevOps"

- **Rapport de Tests :** Configurer l'intégration des rapports JUnit dans l'interface de Merge Request GitLab.
- Intégrer un stage de securité (DevSecOps) en utilisant [Gitlab SAST](https://docs.gitlab.com/user/application_security/sast/)
- **Notifications :** Envoyer une notification (Discord/Slack/Email) en cas d'échec du pipeline (via `after_script` ou intégration native)

## 📤 Livrables attendus

Les étudiants devront fournir :

1.  L'URL de leur dépôt GitLab (le projet doit être en "Public").
2.  L'adresse de votre site (Netlify ou Vercel)
