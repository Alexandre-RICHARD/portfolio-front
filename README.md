# TryHard but SlowRun - Le front

Bonjour, bienvenue sur mon gros projet. J'avais envie de réunir tous mes projets sur un seul site, de tout rendre tout bien, tout joli, en plus de m'en faire un portfolio. À l'heure où j'écris ces lignes, la partie portfolio n'est pas encore fini mais ça avance bien et cela me permet de me confronter à tellement de problématique et donc d'apprentissage que je me sens progressé vite.

Voici [le site](http://alexandre-richard.fr) en question

## Historique des version

### Version 0

<details>

### build 0 - 0.0.1 `1er juillet 2022`

-   Création des répertoire Github

### build 1 - 0.1.0 `3 juillet 2022`

-   Mise en place des premiers fichiers, test ok, prêt à coder

### build 2 - 0.1.1 `3 juillet 2022`

-   Update Readme (penser à prendre l'habitude avant de push)

### build 3 - 0.2.0 `4 juillet 2022`

-   Réflexion intense et installation quasi complète de tous les outils me semblant nécessaire du react-modèle.
-   Les deux projets (front/back) sont prêts à être commencés, l'environnement de travail est terminé.

### build 4 - 0.2.1 `4 juillet 2022`

-   Petit patch, retrait de dotenv sur le front et légère correction de commentaires

### build 5 - 0.3.0 `5 juillet 2022`

-   Début du projet, fin de la construction du plateau d'échecs terminé.
-   Tout est en javascript commun

### build 6 - 0.4.0 `6 juillet 2022`

-   Plateau terminé avec chaque pièce placé au bon endroit avec des SVG. - Récupération de données depuis le back.
-   Fichier http et baseUrl crées.
-   Prochaine étape, les mouvements des pièces

### build 7 - 0.5.0 `7 juillet 2022`

-   Début de la gestion des mouvements de chaque pièces.
-   Normalement pions terminées => 1/6.
-   Quelques morceaux temporaires ajoutés, à pas oublier.
-   Début de la construction des events et de la récupération des mouvements possibles.

### build 8 - 0.6.0 `9 juillet 2022`

-   Jeux d'échecs fonctionnel visuellement parlant.
-   Reste encore des règles à implémenter.
-   Prochaine étape, rangement, coup de propre.
-   Gros progrès, grosse fierté

### build 9 - 0.6.1 `10 juillet 2022`

-   Beaucoup de micro-correction, de factorisation (avec un peu de dynamisme)
-   Optimisation des appels d'API et mise en forme

### build 10 - 0.6.2 `10 juillet 2022`

-   Le précédent Readme n'avait pas été enregistré. C'est tout.

### build 11 - 0.6.3 `10 juillet 2022`

-   Encore un peu de factorisation et fonction unique pour la gestion des mouvements

### build 12 - 0.6.4 `12 juillet 2022`

-   Quelques modifs
-   Ajout d'un check définitif des cases Highlight si besoin
-   Tri des async/await/promise/then

### build 13 - 0.6.7 `19 juillet 2022`

-   Rattrapage des versionning du back
-   Modification de la manière de construire les Readme

### build 14 - 0.6.8 `21 juillet 2022`

-   Retrait des liens dans les SVGs des pièces.
-   Renommage des IDs des SVG
-   Création et stylisation de la modal pour le choix de la pièce lors de la transformation du pion
-   Diverses changements et applications de variables dans le SASS
-   Rajout d'une fonction intermédiaire avant l'envoi d'un moves au back pour gérer le choix de la pièce lors de la transformation du pion
-   Changement dans l'obtention du mouvement concerné par le choix effectué par le joueur. Plus simple, plus de boucle.
-   Gestion de la récupération du choix de pièce et rajout à l'objet envoyé au back

### build 15 - 0.6.9 `6 août 2022`

-   Très léger changement du checked true permettant de surligner les cases par défaut.

### build 16 - 0.6.10 `9 août 2022`

-   Rajout du plugin "syntax jsx" pour babel
-   Rajout du parser vue.js pour Eslint
-   Rajout du loader pour vue.js dans la config webpack
-   Changement et dispatch de l'output de Webpack pour régler le problème de compilation et insertion des fichiers
-   Complétion du plugin HtmlWebpackPlugin
-   Rajout de la règle pour le JSX pour la prise en compte des différents types de fichiers
-   Création d'un point de départ pour le projet en vue.js
-   Changement dans la prise en compte du favicon pour qu'il soit reconnu partout
-   Rajout de l'URL online à rendre unique à chaque upload

### build 17 - 0.6.11 `10 août 2022`

-   Débuggage d'EsLint qui ne fonctionnait plus après l'ajout de vue-eslint-parser
-   Ajout des sourceMap pour sass-loader
-   Remise en vue.js du projet
-   Déplacement des premiers fichiers vue en vue ^^ de faire une organisation propre
-   Création d'un fichier SCSS temporaire afin de rassembler les styles du jeu d'échecs temporaires

### build 18 - 0.6.12 `10 août 2022`

-   Modification de l'indentation générale du projet avec 12 pour les fichiers et 4 dedans.

### build 19 - 0.7.0 / 0.7.1 `14 août 2022`

-   Passage en Version 0.7 car l'installation de vue me permet de passer à la seconde grosse partie
-   Rajout de config et vue.config.js dans l'Eslint ignore
-   Changement de la commande serve pour être compatible avec le reload et vue router
-   Les fichiers webpack ont une indentation de 4
-   Rajout de HistoryAPIFallBack true dans le dev config
-   Rajout de vue router
-   Création des futurs logos du site
-   Création des vues qui seront centrales et légères stylisations primaires
-   Router terminés et fonctionnelles pour les routes primaires
-   Création du store avec VueX, nouvellement appelé Penia et intégration des liens avec

### build 20 - 0.7.2 `14 août 2022`

-   Déplacement et renommage du fichier z.http -> requestTest.http dans un dossier temporaire pour les fichiers qui seront utiles plus tard lors du rassemblement de tous les morceaux de projets
-   Déplacement des fichiers scss du jeu d'échecs en zone temporaire
-   Déplacements des deux logos en zone temporaire
-   Déplacement des 5 fichiers .js et du fichiers html gérant le jeu d'échec en zone temporaire
-   Déplacement de "HistoryAPIFallBack" de webpack.dev.config.js ailleurs pour éviter le doublon de dev-server
-   Début des annotations dans index.js (entrée de l'application), index.html, le router, l'index.scss et du PortfolioStore
-   Le fichier index.scss, point d'entrée des styles utilisés précédemment comporte des importations qui ne seront plus utiles et qui ont été indiquées
-   Renommage du mainRouter en router. Gestion de toutes les routes améliorées avec l'ajout de la notion de children et des routers nommés
-   Réorganisation des vues. Renommage du dossier components en dossier views.
-   Création de sous-dossiers :
    -   Primary qui regroupent les 4 pages principales : Home ; Portfolio ; Try Hard but Slow Run et 404 (Not Found)
    -   Portfolio qui va regoruper les 4 vues différentes
    -   TryHard qui regroupera toutes ses vues
    -   Parts qui regroupent tous les sous-composants réutilisables
-   Création de la vue HomePage pour permettre la redirection vers soit le protfolio, soit le projet TryHard but SlowRun
-   Création des pages principales pour les deux parties du site

### build 21 - 0.7.3 `14 août 2022`

-   Supression de vue.congfig.js qui ne servait visiblement à rien
-   Achèvement d'annoter tous les fichiers qui le méritait

### build 22 - 0.7.4 `16 août 2022`

-   Changement dans les liens créé par les router-link avec l'abandon des paths et l'utilisation direct des noms des routes

### build 23 - 0.7.5 `16 août 2022`

-   Rajout d'un SVG pour faire un boutton Revenir à l'accueil en permanance
-   Configuration et utilisation de Prettier sur tous le projet

### build 24 - 0.7.6 `16 août 2022`

-   Test et début d'apprivoisement du SVG en template

### build 25 - 0.7.7 `17 août 2022`

-   Rassemblement de tous les styles des views dans un même nouveau fichier portfolio.scss

### build 26 - 0.7.8 `17 août 2022`

-   Changement d'une règle EsLint
-   Mise en gitignore du dossier .temp/ contenant les fichiers temporaires ou inutiles
-   Quelques changements d'organisations dans les fichiers scss
-   Toutes la refonte du style pour s'adapter à la nouvelle hiérarchie des fichiers
-   Création des icones en svg nécessaires à l'affichage du responsive
-   Nombreux changements dans les vues visant à reprendre au fur et à mesure la nouvelle façon de créer le site (aller on prie pour que cette idée soit pas mal)

### build 27 - 0.8.0 `17 août 2022`

-   Oops, failli faire un giga fail avec les commit/push mais c'est rattrapé. Rajout d'une clé GPG pour vérifié les commits
-   Mise en git ignore des fichiers non nécessaires sur Github

### build 28 - 0.8.1 `17 août 2022`

-   Supression d'un commentaire dans le html original pour ne pas qu'il apparassent dans le chrome dev
-   Gros changement dans le router. Il n'y aura plus de page intermédiaire pour tryhard ou portfolio et les router se situeront dans la home page
-   Renommmage de quelques fichiers pour encore améliorer la lisibilité de l'arborescence
-   Le reset.css est devenu un fichier scss
-   Supression du portfolio.scss. Il est à présent divisé en 5 partie, le header et les 4 parties différentes du portfolio
-   Remise de la font dans l'index.scss de base, ça ne sert à rien de l'indiquer ailleurs
-   Le fichier app.vue contient désormais le header ainsi que le router principal qui lui servira à diriger vers les grandes zones, au nombre de 3 pour l'instant
-   Le header est fini. Les liens login et register ne fonctionnent pas encore, et la modal responsive n'est pas faite

### build 29 - 0.8.2 `20 août 2022`

-   Rajout d'une variable path dans la meta des routes pour être affiché dans le BreadCrumb
-   Déplacement de toutes les variables SCSS dans un fichier séparé
-   Création du BreadCrumb qui se fait automatiquement et stylisation

### build 30 - 0.8.3 `20 août 2022`

-   Rajout du loader pour pdf
-   Finition de la page d'accueil du portfolio mais non stylisé encore
-   Suppression du console.log inutile
-   Sur index.scss, min-width mis en 400px
-   Correction d'un léger bug du BreadCrumb et mise d'un name sur la route intermédiaire du portfolio

### build 31 - 0.8.4 `20 août 2022`

-   Petite amélioration du Readme.md

### build 32 - 0.8.5 `23 août 2022`

-   Résolution du problème du white screen au recharhement de la page avec un lien avancé
-   Ajout d'un fichier .htaccess qui sert à paramétrer le serveur en partie, à redirigé le http vers https, à inscrire le html/index.html comme point d'entrée et à rediriger toutes les requêtes de html vers ce fichier (très très content d'avoir trouvé la réponse à ce problème problématique)

### build 33 - 0.8.6 `24 août 2022`

-   Stylisation et correction de la page pfHome
-   Rajout d'une div page-background pour avoir un bon background en ayant notre contenu à 1000px

### build 34 - 0.8.7 `27 août 2022`

-   Rajout du .htaccess dans le gitignore
-   Modification d'un commentaire dans la config Webpack
-   Mise en dossier du fichier html et favicon d'origine.
-   Remplacement des 3 projets mis en avant par des vrais données et vraies images
-   Suppression de la partie commentées du Router
-   Changement dans le Store pour prendre en compte les liens et les boutons/modals dans les liens
-   Léger changement dans le style du Header
-   Changement dans le style de la page, mise en appliation des variables
-   Mise en fonction du bouton pour Copier le lien Discord
-   Changement du nom du composant TopLinks

### build 35 - 0.8.8 `27 août 2022`

-   Rajout d'une petite inscription du build et de la version directement sur la page

### build 36 - 0.8.9 `27 août 2022`

-   Déplacement et rangement de tous les fichiers de styles et mise à jour des importations
-   Mise dans le store des liens pour les modals
-   Amélioration du reset.scss pour avoir encore plus de contrôle sur le style de certains élements
-   Mise en variables de toutes les couleurs utilisés dans le style
-   Mise en variables de certaines tailles de texte
-   Révision du style pour le header
-   Les transitions sont désormais hérités à tous le projets pour avoir des changements plus fluides (0.4s)
-   Le header change quand on scroll vers le bas
-   Mise en "temporaire" donc suppression des icônes non utilisés
-   Suppression de quelques div et règles CSS non utilisées
-   Les liens de modals générés par composant ne portent plus la fonction, ce qui générait une erreur mais une valeurs qui sera appliquée à une seule fonction commune.
-   Le props link n'est plus indispensable et a une valeur par défaut
-   La div représentant le contenu de la page principale est désormais une balise "main"

### build 37 - 0.8.10 `27 août 2022`

-   Rétablissement du .htaccess car impossible de le supprimer du projet en l'ignorant de git

### build 38 - 0.8.11 `27 août 2022`

-   Ressuppression et mise en gitignore de .htaccess car nouvelle idée
-   Rajout d'un dossier .copy pour les potentiels fichiers type "public" mais qui doivent être ignorés sur le commit

### build 39 - 0.8.12 `29 août 2022`

-   Tentative de trouver d'autres couleurs agréables changeables facilement grace au variables SCSS. À suivre
-   Le padding de la page est réduit en dessous de 700px de large
-   Factorisation et nombreux changements dans le portfolio.scss
-   Quelques changements dans le portfolioHome

### build 40 - 0.8.13 `29 août 2022`

-   Stylisation des différents boutons en hover avec utilisation d'un faux contenu en before pour que les boutons/liens ne changent pas de taille après
-   Ajout d'attribut title pour chaque afin de faire correspondre le contenu en CSS

### build 41 - 0.8.14 `29 août 2022`

-   Création d'un début de modal dynamique à l'aide de Pinia. Elle s'ouvre dans 3 cas et se ferme en cliquant à côté
-   Changement du nom des modals dans le store d'origine et création d'un nouveau store

### build 42 - 0.8.15 `3 septembre 2022`

-   Suppression du try/catch(error) pour le copy en clipboard
-   Mise à jour du CV et donc du lien
-   Création de la modal du Menu avec les liens dedans
-   Gestion de l'ouverture et de la fermeture de la menuModal
-   Factorisation et amélioration de l'ouverture et de la fermeture des accountModal
-   Léger Hover sur le SVG du Menu
-   Stylisation de la modal du Menu

### build 43 - 0.8.16 `4 septembre 2022`

-   Rajout d'un petit message "copié" quand on clique sur le boutton du Discord pour copier le pseudo

### build 44 - 0.8.17 `7 septembre 2022`

-   Reprise de la structure du projet pour y implémenterma nouvelle manière de voir le site, ces deux facettes et ainsi mieux reprendre la création de celui-ci car cela commençait à bloquer
-   Mise en .temp, donc sortis du projet tous les fichiers sauf ceux nécessaire à une reprise à zéro du projet
-   Retrait de .htaccess du dossier .copy et remise dans le dossier public. Effectivement, je suis parevenu à le .gitignorer
-   Renommmagede ces quelques fichiers initiaux pour qu'ils soient plus clairs et ainsi moins me perdre dans la suite (mine de rien, l'organisation des fichiers est un petit casse-tête)

### build 45 - 0.9.0 `9 septembre 2022`

-   Dossier styles/base renommé Base
-   Grosse refonte du site en repartant de zéro et en remettant ce qui a déjà été fait en l'adaptant
-   Instauration d'un site en 3 parties avec Home, Portfolio et TryHard
-   Restructuration du Header pour s'y adapter
-   Rajout d'une variable section dans la meta des routes pour identifier quelle section du site est utilisée
-   Mise en place d'une partie pour changer le thème du site
-   Pour cela, le header comporte des petits boutons sur la gauche et dans le futur, dans la modalMenu pour les petits écrans
-   Aussi, le store comporte les différentes variables de thème de couleur et les variables en css pure (pas en scss) sont changés
-   Séparation des données de liens en 3. POur les 3 parties différentes comme cela, les liens du header correspondent à la partie mais avec toujours la possibilité de revenir au menu de 2 manières
-   Mise dans une pseudo-classe :root les variables d'origine. Peut-être le futur fera que le choix du thème sera enregistré dans un cookie
-   Remplacement de toutes les appels de variales scss par les nouvelles en css var(--###)
-   Quelques animations sur le header
-   Refonte des @media-queries et ajustement
-   accountModal déplacé dans le fichier App.vue d'origine
-   Rajout de la fonction sectionChanger pour gérer le changement de section du site avec les différents Router-Link
-   Remise en place de tous les composants d'avant sauf la page PortfolioHome
-   Instauration des fichiers de composants pour les futures pages

### build 46 - 0.9.1 `9 septembre 2022`

-   Remise des images utilisé dans pfHome
-   Remise de pfHome et le début de pfContact que j'avais commencé
-   Adaptation des styles pour correspondre au nouvelles variables de couleurs
-   Rajout d'une animation pour le petit span "copié" qui apparait à la suite du clic sur un boutton de copie

### build 47 - 0.9.2 `10 septembre 2022`

-   Petit correctif pour mettre les couleurs de Background et de title sur chaque couche d'élément qui avait besoin pour ne pas être en retard lors des transition

### build 48 - 0.9.3 `11 septembre 2022`

-   Synchronisation entre les noms de fichiers vue et des fichiers scss ainsi que leur organisation
-   Mise du NotFound dans un 4ème router-view nommé Other
-   Retrait de deux lignes dans la template SVG du menu-header-icon
-   Tentative de faire un habillage avec des vagues animés, bien avancé mais remis à plus tard

### build 49 - 0.9.4 `13 septembre 2022`

-   Changement dans l'eslintIgnore pour ignorer le nouveau webpack.config.js
-   Mise à jour des packages NPM
-   Dans package.json, mise à jour des commandes start et build
-   Combinaison des 3 fichiers de config de webpack pour optimiser et mieux gérer/comprendre les paramètres webpack
-   Suppression du fichier paths et imbication de son contenu (que le nécessaire) dans le nouveau fichier
-   Changement de la gestion dev/prod avec des variables d'environnement provenant des commandes npm run
-   Changement de la gestion des fichiers/requête d'image en mettant type="asset" géré par webpack 5
-   Suppression du dossier assets
-   Déplacement du favicon dans src/images
-   Déplacement de toutes les images dans src/images
-   Déplacement d'index.html à la racine du dossier source
-   Début de personnalisation de la page 404
-   Première partie de l'animation 404 réalise avec la Dolorean de retour vers le futur
-   Déplacement de la vue NotFound dans un router dédié
-   Création d'un fichier (peut-être temporaire) scss pour être le point d'entrée

### build 50 - 0.9.5 `13 septembre 2022`

-   Push de deux fichier non validé par erreur

### build 51 - 0.9.6 `13 septembre 2022`

-   La hauteur minimal n'est plus sur le page-container mais sur le page-background maintenant
-   Déplacement du NotFound sur le bloc supérieur, dans le page-background
-   Stylisation finie de la transition 404 > Other
-   Mise en place du toggle lors du clic de la Dolorean

### build 52 - 0.9.7 `13 septembre 2022`

-   Utilisation de Prettier sur tous les fichiers du projets pour unformiser le code et avoir un projet plus propre
-   Préservation du index.scss de base mais déplacement à la racine du dossier source pour avoir html/js/css au même endroit

### build 53 - 0.9.8 `14 septembre 2022`

-   Petite modification dans le background image du fire (NotFound) pour que la hauteur soit de 15px, avec le repeat et la proportion conservé

### build 54 - 0.9.9 `14 septembre 2022`

-   Petite mise à jour du NotFound pour qu'il s'adaptent correctement au changement de couleur du thème. CAD, mettre la propriétés background à chaque élément

### build 55 - 0.9.10 `14 septembre 2022`

-   Création d'un composant dédier à la palette de couleur/thème
-   Les liens account du header ne sont plus en width 100% au dessus de 820px pour laisser place aux autres liens
-   Correction de quelques couleurs lors des transitions
-   Ajout d'une flèche dans la modal du menu avec "retour à l'accueil", agtandi par rapport au reste
-   Suppression du @media responsive 700 pixels et transfert sur les 820px
-   La stylisation de la palette à son propre fichier avec des styles séparés pour le header et le menu-modal

### build 56 - 0.9.11 `15 septembre 2022`

-   Changement dans le router pour que portfolio et tryhard ne soit plus enfant de home afin que home soit indépendante en terme de contenu
-   Dans Breadcrumb, changement de 1 à 0 pour la recherche de route.matched afin de gérer le changement de section pour l'affichage des liens
-   Déplacement des deux router secondaires pour les mettre dans app plutôt que dans homePage afin de pouvoir avoir une page séparée

### build 57 - 0.9.12 `17 septembre 2022`

-   La stylisation de page-container et page-background est maintenant sur _index.scss pour simplifier et unifier le style de HomePage
-   Création et stylisation de la page HomePage avec un jeu de Mastermind fonctionnel

### build 58 - 0.9.13 `17 septembre 2022`

-   Création d'une div pour entouré chaque ligne du mastermind et se séparer de la width sur l'élément parent
-   Changement du border-radius pour éliminer le petit effet moche
-   Mise du header en z-index 1 pour qu'il passe par dessus le contenu de la page

### build 59 - 0.9.14 `20 septembre 2022`

-   Changement de deux couleurs pour le mode light
-   Rajout d'une image servant de photo 'officielle'
-   Première partie de la page Curriculum, toujours en construction

### build 60 - 0.9.15 `20 septembre 2022`

-   Finition du style des expérience profesionnelles
-   Rajout de petite div pour pouvoir faire une box-shadow à moitié caché
-   Mise en place de z-index 10 pour le header et les account Modal

### build 61 - 0.9.16 `20 septembre 2022`

-   Quelques corrections dans le textes, que ce soit le contenu ou l'orthographe
-   Rajout d'une petite marge pour chaque grosse box du Curriculum

### build 62 - 0.9.17 `21 septembre 2022`

-   Fin de la stylisation pour la catégories "expériences profesionnelles"
-   Découverte d'un petit bug global au site assez compliqué à comprendre, remis à plus tard car vraiment pas gênant

### build 63 - 0.9.18 `21 septembre 2022`

-   Quelques factorisations dans le SCSS de la page CV du Portfolio
-   Fin de la stylisation primaire de la page CV du Portfolio
-   Finition du contenu de la page CV du Portfolio
-   Mise du contenu du CV en array

### build 64 - 0.9.19 `22 septembre 2022`

-   Rajout d'un petit encadré comme le projet versionning pour afficher en direct le prix de l'Etherum
-   Contient également en direct le gain ou la perte que je fais

### build 65 - 0.9.20 `22 septembre 2022`

-   Rajout de la partie vente de l'Etherum et également de l'affichage de la croissance avec un pourcentage

### build 66 - 0.9.21 `24 septembre 2022`

-   Rajout de formulaire pour rentrer directement les prix dans la page gain et ainsi rendre l'outil utilisable à souhait
-   Interface primaire mais suppression du petit encadré en bas à gauche et présence uniquement de la page via /gain
-   Rajout de la route correspondante dans le router

### build 67 - 0.9.22 `29 septembre 2022`

-   Grosse mise à jour après pas mal de jours sans avoir trop avancé, remise sur le projet plein pot
-   Mise à jour des package npm
-   La page "gain" consacré à mes petites expérience lié à l'Etherum, le résultat va venir changer le titre de la page pour une meilleure visibilité
-   Tentative de mettre le package-lock.json en .gitignore
-   Pour la page contact, création et mise en dossier des logo des différents launcher
-   Les informations des différents contacts sont maintenant dans le store plutôt que dans le script car...
-   ...les 3 liens dans la page d'accueil du portfolio sont gérés par le même composant que la page contact
-   Création, dynamisation, stylisation et finition de la page contact - partie liens
-   Rajout d'un petit logo copie pour indiquer à l'utilisateur que c'est possible
-   Les liens sont tous générés dynamiquement
-   Adaptation vis-à-vis de la recherche des logos car gérés en assets par webpack et convertis en base64
-   Prise en compte du responsive
-   Suppression de l'effet du hover sur les liens de contact de la page d'accueil du portfolio

### build 68 - 0.9.23 `29 septembre 2022`

-   Mise à jour du logo de Gog, le launcher afin de le rendre plus distingable
-   Mise en place d'un fichier baseUrl.js pour les futures et très prochaines relation avec la BDD
-   Mise en place d'un formulaire de contact avec récupération des données et envoi en back, l'envoi du mail derrière n'est pas encore fonctionnel

### build 69 - 0.9.24 `5 octobre 2022`

-   Changement dans la gestion de l'affichage des projets
-   Remplacement des images d'illustration par un placeholder qui sera remplacé une fois plus de 3 projets incorporés
-   Mise à jour des packages NPM
-   Rajout d'une route dédiée au projet détaillée avec donc une route par projet
-   Rajout de la liste des projets avec leurs détails dans le store de Pinia
-   Création et utilisation d'un même composant pour créer le container et les différentes div de projets que ce soit sur la page projet ou sur la page Home
-   Suppression de la template des projets dans pfHome et du style correspondant pour le remplacer par l'appel du composant dynamique
-   Dans pfHome, l'affichage des projets est rendu aléatoire, 3 projets parmi tous sont affichés dans un ordre aléatoire
-   Changement de la valeur d'un coefficient dans EhterumFollow.vue 0.999 -> 0.99747
-   Initialisation et préparation à la création de la page de détails de chaque projet

### build 70 - 0.9.25 `5 octobre 2022`

-   Rajout d'un dossier large pour les images d'illustration de projets afin d'avoir des images légères à charger lors de l'aperçu de tous
-   Le breadcrumb n'a plus de z-index qui était inutile
-   Modification des données de projets pour les rendre plus précise et rendre le côté temporaire des 2 projets factices plus clair
-   Changement de la variable number passé au projectContainer de null à 0 pour la page pfProject
-   Création et stylisation de la page ProjectDetails qui permet d'accéder à tous les détails d'un projet

### build 71 - 0.9.26 `6 octobre 2022`

-   Ajout de <base href="/"> dans le document HTML de base pour contrer les problèmes de redirection et de recherche de ressources
-   Problème du lien pour le portfolio project réglé

### build 72 - 0.9.27 `7 octobre 2022`

-   Création du contenu de la modal Account avec deux formulaire semi-dynamique de connexion ou d'inscription
-   Stylisation basique de ces formulaires
-   Changement du nom de toutes les variables formulaires pour le formulaire de contact
-   Ajout de autocomplete pour chaque input

### build 73 - 0.9.28 `10 octobre 2022`

-   Changement de la fonction gérant la fermeture de la modal de compte afin qu'elle puisse gérer le changement de modal entre connexion et inscription
-   Changement dans l'objet qui contient les valeurs des 6 inputs en remplacement le null par une string vide
-   Création d'un système de stockage de message d'erreur lors de l'analyse des value d'input
-   Objet fonction avec les 6 fonctions de tests pour chaque input uniquement lors du submit
-   Rajout de diverse conditions à travers les regex pour valider ou nom les valeurs entrées par l'user
-   Affichage des messages d'erreurs sous les différents input
-   Ajout d'un bouton pour changer d'une modal à l'autre si déjà un compte : inscription -> connexion ; si pas de compte connexion -> inscription
-   Modification de l'opacité du cache de la modal
-   Rajout d'une largeur minimum pour la modal même si normalement, 350px n'est jamais atteind
-   Augmentation de la largeur de la bordure de la modal
-   Stylisation des messages d'erreur et du bouton de changement de modal
-   Les boutons submit des formulaire ont maintenant une bordure invisible pour prévoir la taille définitive lors du hover

### build 74 - 0.9.29 `11 octobre 2022`

-   Factorisation importante des 6 inputs des modals de connexion
-   Renommage d'une classe CSS : password-error-box -> error-box
-   Création d'un composant gérant la création des inputs
-   Supression des consoles.log inutiles
-   Création d'une fonction changeInputValue qui va recevoir les emit du composant enfant pour changer les valeurs d'input
-   Installation de l'appel des 6 input via le nouveau composant
-   Utilisation de la fonction emit permettant de transmettre une données du fils au parent lors du trigger d'un event

### build 75 - 0.9.30 `11 octobre 2022`

-   Ajout d'une fonction détectant la perte de focus de chacun des input
-   Une nouvelle fonction emit existe ainsi dans le sous-composant
-   Cette fonction appelle le test spécifique de cet input
-   Ainsi, les tableaux d'erreurs sont maintenant vidés dans les sous-fonction plutôt que dans les fonction submit
-   La vérification du passwordConfirmation ne fait plus appel à deux paramètres de fonction mais à un seul et va chercher le mot de passe d'origine dans l'object spécifique
-   Supression des deux videurs d'array
-   Ajout d'un return true or false pour chaque test afin de pouvoit styliser les input selon ce simple résultat
-   Rajout d'un style léger pour les input afin de reconnaître le fait qu'il soit ou non correctement remplis

</details>

## Les problèmes du site actuellement

-   Quand on recharge en étant sur l'une des sections, les liens ne sont pas les bons car la fonction chargées de mettre la bonne section au chargement est cassé
-   La barre de défilement sur la droite change la taille du site en fonction des pages
-   En dessous de 417 px, et jusqu'au 400 minimum que j'ai défini, il y a un sliding horizontal et je ne comprend pas quel élément fait déborder le contenu de la page
-   Sur mobile, les caractères fléchés sont différent, à changer.
-   Sur mobile, petit bug lors du changement de thème
-   Sur mobile, Le mastermind a un petit problème d'overflow, sûrement à cause des caractères utilisées
-   En cliquant sur un lien intrasite, nous ne sommes pas remis tout en haut de la page

## Les features à venir

-   Rajouter un bouton Page d'Accueil dans le BreadCrumb quand il n'y est pas
-   Une petite modal sur la gauche de l'écran, un peu discrète mais ayant pour fonction de justement lister les fonctionnalités à venir
-   Bulle d'info sur le Mastermind pour expliquer les règles (simple, certes, mais nécessaires)
-   Rajouter un bouton pour recommencer
-   Rajouter un "petit quelque chose" quand le joueur à trouver la bonne combinaison
-   Bouton démarrer avec potentiellement choix de la longueur du code à trouver
-   Il y aurait chaque jour un mastermind à faire
-   Rajouter un scroll molette pour changer les nombres, ainsi qu'une animation au changement en mode carroussel
-   Rendre les modals account fonctionnel et faire une base de compte à lier avec le back
-   Essayer de mettre les images de Projets et autres en BDD
-   Réfléchir davantage sur les thèmes et les valider à un moment ou à un autre
-   Les données de projets seront par la suite récupérer en base de données
-   Les sections vont disparaître au profite d'un système de navigation avec apparition des liens en hover
-   Intégrer ma liste de jeux
-   Le wiki des dinosaures dans ARK
-   Les outils que j'ai fait pour ARK à Intégrer
-   The Journal
-   Tenter de créer un système de génération de carte aléatoire avec système de GPS menant au plus court chemin
-   Générateur de page aléatoire stylisé
-   Changer le PDF du CV pour qu'il soit lisible avec le bon lecteur PDF
-   Gérer le login/register
-   Rajouter les mentions légales, la protection des données utilisateurs et gloabalement, un footer indiquant ce genre d'informations. Noté l'hébergeur aussi.
-   Faire une review du code d'un peu tout
-   Importer le jeu d'échec
-   Refaire le texte de la page d'accueil
-   Le breadCrumb doit disparaitre dans le coin 404