# TP: Tests End-to-End

Ce fichier décrit les tests end-to-end réalisés sur l'application pour garantir son bon fonctionnement. Ces tests vérifient que les différentes pages et interactions fonctionnent comme prévu.

Ce fichier a été conçu dans le cadre de la matière **Validation de logiciels** lors de ma deuxième année à l'**IMT Mines Alès**.

Sujet : https://docs.google.com/document/d/1xoCOmLl0jSQwOmduMqfDmPGFQmrPlhaBQ6iLXwlNZXE/edit?tab=t.0

---

## Table des matières

1. [Tests des scénarios End-to-End](#tests-des-scénarios-end-to-end)
   - [admin.js](#adminjs)
   - [contact.js](#contactjs)
   - [feedback.js](#feedbackjs)
   - [geo.js](#geojs)
   - [pricing.js](#pricingjs)

---

## Tests des scénarios End-to-End

### admin.js

#### Scenario 1 : Réaliser une authentification valide et accéder à la page Admin
- **case 1** : Je vais à l'URL de la page de login (`http://127.0.0.1:9090/login`).
- **case 2** : J’entre le login `admin`.
- **case 3** : J’entre le mot de passe `admin`.
- **case 4** : Je clique sur le bouton "connexion".
- **case 5** : J’attends que l’application charge la page "Admin".
- **expect** : Je vérifie que l’URL est bien `http://127.0.0.1:9090/admin` et que la table contenant les éléments "dates", "authors", "messages" est présente.

#### Scenario 2 : Réaliser une déconnexion via le bouton "Déconnecté"
- **case 1** : Je vais à l'URL de la page de login et je me connecte avec les identifiants `admin` et `admin`.
- **case 2** : Je clique sur le bouton "Déconnecté".
- **case 3** : J’attends que l’application me redirige vers la page de login.
- **expect** : Je vérifie que l'URL est maintenant `http://127.0.0.1:9090/login`.

#### Scenario 3 : Tentative de connexion avec des identifiants invalides
- **case 1** : Je vais à l'URL de la page de login.
- **case 2** : J’entre un login invalide (`invalidUser`).
- **case 3** : J’entre un mot de passe invalide (`invalidPassword`).
- **case 4** : Je clique sur le bouton "connexion".
- **expect** : Je vérifie dans les logs de la console qu’une erreur 403 est retournée.

---

### contact.js

#### Scenario 1 : Accéder à la page Contact
- **case 1** : Je vais à l'URL de la page de contact (`http://127.0.0.1:9090/contact`).
- **expect** : Je vérifie que l'URL est bien `http://127.0.0.1:9090/contact`, que le titre "CONTACTEZ-NOUS" et le formulaire sont présents.

#### Scenario 2 : Soumettre un formulaire de contact valide
- **case 1** : Je vais à l'URL de la page de contact.
- **case 2** : Je remplis le formulaire avec des informations valides (prénom, nom, téléphone, email, dates, message).
- **case 3** : Je clique sur le bouton "Envoyer".
- **expect** : Je vérifie que l'URL contient `/contact` et que le bouton "Envoyer" est toujours visible.

#### Scenario 3 : Soumettre un formulaire de contact avec des champs requis manquants
- **case 1** : Je vais à l'URL de la page de contact.
- **case 2** : Je laisse les champs obligatoires vides (prénom, nom, téléphone, email, dates).
- **case 3** : Je clique sur le bouton "Envoyer".
- **expect** : Je vérifie que les champs obligatoires sont marqués comme requis et que l'URL contient `/contact`.

---

### feedback.js

#### Scenario 1 : Vérifier le bon affichage de la page de feedback
- **case 1** : Je vais à l'URL de la page de feedback (`http://127.0.0.1:9090/feedback`).
- **expect** : Je vérifie que le titre "IDEALEMENT SITUE", le texte "30 mètres de la plage" et le formulaire sont visibles.

#### Scenario 2 : Soumettre un feedback avec succès
- **case 1** : Je vais à l'URL de la page de feedback.
- **case 2** : Je remplis le formulaire de feedback avec un nom et un message valides.
- **case 3** : Je clique sur le bouton "Envoyer".
- **expect** : Je vérifie que le feedback soumis est bien affiché sur la page.

#### Scenario 3 : Vérifier l'affichage des feedbacks reçus
- **case 1** : Je vais à l'URL de la page de feedback.
- **expect** : Je vérifie que les feedbacks précédemment soumis sont affichés avec le bon nom et le bon message.

#### Scenario 4 : Vérifier l'affichage du compteur de feedbacks
- **case 1** : Je vais à l'URL de la page de feedback.
- **expect** : Je vérifie que le nombre de feedbacks est correctement affiché.

---

### geo.js

#### Scenario 1 : Vérifier que la page de localisation se charge correctement
- **case 1** : Je vais à l'URL de la page de localisation (`http://127.0.0.1:9090/geo`).
- **expect** : Je vérifie que l'URL est bien `http://127.0.0.1:9090/geo` et que le titre "IDEALEMENT SITUE" ainsi que les éléments de la page sont visibles (image, carte, etc.).

---

### pricing.js

#### Scenario 1 : Vérifier que la page de tarification se charge correctement
- **case 1** : Je vais à l'URL de la page de tarification (`http://127.0.0.1:9090/pricing`).
- **expect** : Je vérifie que le titre "UN PRIX POUR" et le texte "TOUTES LES SAISONS" sont présents, et que les éléments de la page sont visibles.

---

## Résultats

| Scénario                          | Résultat   | Détails                                     |
|-----------------------------------|------------|---------------------------------------------|
| admin.js - Authentification valide | ✅ Passé    | L'administrateur se connecte avec succès.  |
| admin.js - Déconnexion valide     | ✅ Passé    | L'utilisateur est déconnecté correctement. |
| admin.js - Authentification invalide | ✅ Passé    | Erreur 403 affichée dans les logs. |
| contact.js - Accès page Contact   | ✅ Passé    | La page de contact se charge correctement. |
| contact.js - Soumettre formulaire valide | ✅ Passé    | Formulaire soumis avec succès. |
| contact.js - Soumettre formulaire avec champs manquants | ✅ Passé    | Champs obligatoires marqués comme requis. |
| feedback.js - Vérifier affichage page Feedback | ✅ Passé    | La page de feedback se charge correctement. |
| feedback.js - Soumettre feedback avec succès | ✅ Passé    | Feedback soumis et affiché correctement. |
| feedback.js - Vérifier affichage feedbacks reçus | ✅ Passé    | Les feedbacks sont correctement affichés. |
| feedback.js - Vérifier affichage compteur feedbacks | ✅ Passé    | Le compteur de feedbacks est correct. |
| geo.js - Vérifier page localisation | ✅ Passé    | La page de localisation se charge correctement. |
| pricing.js - Vérifier page tarification | ✅ Passé    | La page de tarification se charge correctement. |

"✨ PASSED. 68 total assertions (18.224s)"

Rapport HTML : .\tests_output\nightwatch-html-report\index.html

---

## Exécution des tests

Les tests ont été réalisés avec **Nightwatch.js**. Pour exécuter les tests, utilisez la commande suivante :

```bash
npx nightwatch
```

Chaque test garantit que l'application fonctionne comme prévu pour les scénarios spécifiques. Si un test échoue, il est important de vérifier les logs pour identifier les erreurs spécifiques et y remédier.

---

## Remerciements

Merci d'avoir pris le temps de consulter ce README. Si vous avez des questions ou des suggestions, n'hésitez pas à les partager.