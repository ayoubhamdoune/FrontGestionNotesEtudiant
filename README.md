# Système de Gestion des Notes des Étudiants

## Description
Ce projet est une application web complète de gestion des notes des étudiants, développée avec Angular pour le frontend et Spring Boot pour le backend. Elle permet aux établissements scolaires de gérer les étudiants, les enseignants, les matières, et les notes, tout en proposant des suggestions d'orientation en fin d'année scolaire, basées sur les performances académiques des étudiants.

### Fonctionnalités principales
- **Gestion des étudiants** : Ajout, modification, et suppression des informations des étudiants (nom, classe, niveau, etc.).
- **Gestion des matières** : Associer des matières aux classes et aux enseignants.
- **Gestion des notes** : Saisie et consultation des notes des étudiants pour chaque matière.
- **Proposition d'orientation** : Génération de suggestions d'orientation pour chaque étudiant en fin d'année en fonction de ses notes.
- **Gestion des enseignants** : Ajout, modification, et suppression des enseignants et de leurs matières.

## Architecture du projet
Le projet est divisé en deux parties :
1. **Frontend (Angular)** : 
   - Interface utilisateur pour la gestion des étudiants, enseignants, matières, et notes.
   - Appels API vers le backend pour l'interaction avec la base de données.
   
2. **Backend (Spring Boot)** : 
   - Gestion des routes API pour les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les étudiants, enseignants, matières et notes.
   - Base de données pour stocker les informations.

## Technologies utilisées
- **Frontend** : Angular, TypeScript, HTML, CSS
- **Backend** : Spring Boot, Java
- **Base de données** : MySQL (ou autre SGBD relationnel)
- **Outils de build** : Maven

## Installation et utilisation

### Prérequis
- **Node.js** et **npm** installés pour l'Angular.
- **Java JDK 11+** pour le backend Spring Boot.
- **MySQL** ou une autre base de données configurée pour stocker les données.

### Étapes d'installation
1. **Clonez le projet** :
    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    ```

2. **Frontend (Angular)** :
    - Allez dans le répertoire `frontend` :
      ```bash
      cd frontend
      ```
    - Installez les dépendances :
      ```bash
      npm install
      ```
    - Démarrez l'application Angular :
      ```bash
      ng serve
      ```

3. **Backend (Spring Boot)** :
    - Allez dans le répertoire `backend` :
      ```bash
      cd backend
      ```
    - Modifiez le fichier `application.properties` pour configurer votre base de données MySQL :
      ```properties
      spring.datasource.url=jdbc:mysql://localhost:3306/nom_de_votre_base
      spring.datasource.username=votre_username
      spring.datasource.password=votre_password
      ```
    - Compilez et démarrez l'application Spring Boot :
      ```bash
      mvn spring-boot:run
      ```

4. **Accès à l'application** :
   - Ouvrez votre navigateur et accédez à `http://localhost:4200` pour utiliser l'application.

## Contribution
Les contributions sont les bienvenues ! Si vous souhaitez améliorer le projet, n'hésitez pas à ouvrir une pull request ou à soumettre des suggestions dans la section issues.

## Auteurs
- **Ayoub Hamdoune**
- **Driss Echouikhi**
- **Oussama Azouggarh**

## License
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
