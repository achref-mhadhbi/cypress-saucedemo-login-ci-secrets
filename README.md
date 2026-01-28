# cypress-saucedemo-login-ci-secrets

Ce projet démontre l'intégration de tests Cypress dans un pipeline **CI/CD** et l'utilisation des variables d'environnement. 

## 🌟 Points Forts du Projet

* **GitHub Actions CI :** Automatisation des tests à chaque cycle de push.
* **Cypress.env Implementation :** Gestion flexible des configurations via les variables d'environnement.
* **Cypress.env Implementation :** Utilisation des variables d'environnement pour la flexibilité des tests.

## 🛠️ Stack Technique

* **Framework :** Cypress
* **CI/CD :** GitHub Actions
* **Reporting :** Mochawesome (HTML)
* **Cible :** Sauce Demo (Swag Labs)

## ⚠️ Sécurité & Bonnes Pratiques

Dans ce dépôt spécifique :
1. Le fichier `cypress.env.json` est **volontairement inclus** pour servir d'exemple pédagogique et montrer comment Cypress récupère les données.
2. **Attention :** Dans un environnement professionnel, ce fichier doit toujours être listé dans le `.gitignore`.
3. Pour la partie **CI**, les identifiants sont injectés via les **GitHub Secrets** pour garantir une sécurité totale.

## 🚀 Installation et Utilisation

### 1. Cloner le projet
git clone [https://github.com/achref-mhadhbi/cypress-saucedemo-login-ci-secrets.git](https://github.com/achref-mhadhbi/cypress-saucedemo-login-ci-secrets.git)

### 2. Installer les dépendances
npm install

### 3. Lancer les tests
npx cypress open
