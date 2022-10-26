// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

//! CHANGE après ça
// On nomme notre Store et on l'exporte
export const useMainStore = defineStore("Main", {
    state: () => ({
        account: {
            connected: false,
            nickname: null,
            mail: null,
            token: null,
        },
        theme: {
            selected: "classic",
            classic: {
                backgroundColor: "#0f0e17",
                smoothBackgroundColor: "#242230",
                titleColor: "#fffffe",
                textColor: "#a7a9be",
                textShadowColor: "#0f0e178e",
                headerColor: "#f25f4c",
                buttonColorOne: "#ff8906",
                buttonColorTwo: "#e53170",
            },
            modern: {
                backgroundColor: "#16161a",
                smoothBackgroundColor: "#28282e",
                titleColor: "#fffffe",
                textColor: "#94a1b2",
                textShadowColor: "#16161a8e",
                headerColor: "#5a8ef0",
                buttonColorOne: "#825af0",
                buttonColorTwo: "#72757e",
            },
            light: {
                backgroundColor: "#fffffe",
                smoothBackgroundColor: "#d1d1d1",
                titleColor: "#00214d",
                textColor: "#1b2d45",
                textShadowColor: "#fffffe8e",
                headerColor: "#ff5470",
                buttonColorOne: "#26d6c7",
                buttonColorTwo: "#d6bc26",
            },
            dark: {
                backgroundColor: "#16161a",
                smoothBackgroundColor: "#232325",
                titleColor: "#fffffe",
                textColor: "#a7a9be",
                textShadowColor: "#16161a8e",
                headerColor: "#7f5af0",
                buttonColorOne: "#2cb67d",
                buttonColorTwo: "#72757e",
            },
        },
        headerLinks: [
            {
                id: 0,
                type: "link",
                content: "Accueil",
                link: "PortfolioHome",
            },
            {
                id: 1,
                type: "link",
                content: "Curriculum",
                link: "PortfolioCurriculum",
            },
            {
                id: 2,
                type: "link",
                content: "Projets",
                link: "PortfolioProject",
            },
            {
                id: 3,
                type: "link",
                content: "Contact",
                link: "PortfolioContact",
            },
        ],
        headerModals: [
            // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
            { id: 0, type: "modal", content: "Connexion", link: "login" },
            { id: 1, type: "modal", content: "Inscription", link: "register" },
        ],
        modalData: {
            open: false,
            type: null,
        },
        projectList: [
            {
                id: 1,
                title: "Portfolio",
                link: "portfolio",
                linkAccess: "Home",
                abstract:
                    "Le site sur lequel vous vous trouvez, toujours en construction, toujours plus d'idée que j'ai envie d'intégrer. Il me sert de Portfolio, de CV mais également de site sur lequel hébergé et placer mes différentes idées.",
                description:
                    "J'ai créé ce site pour pleins de raisons différentes. La première étant de m'en servir de portfolio à montrer aux recruteurs. Aussi, j'ai toujours pour objectif de m'améliorer, d'apprendre de nouvelles choses et d'approfondir mes connaissances. Cet exercice est parfait pour cela car je rencontre énormément de problématique que j'aime essayer de résoudre seul. Aussi, je trouvais ça intéressant de faire un site à mon nom. J'y travaille depuis le 1er août, à mon rythme, en le faisant d'abord par envie mais je prend toujours du plaisir à y retourner et à tenter de l'améliorer.",
                features: [
                    "La possibilité de changer le thème du site. Une fonction va venir changer les propriétes stockées dans le :root en css à partir de données stockées dans le Store de Pinia.",
                    "Un breadCrumb, cette barre qui indique le chemin sur lequel on se trouve actuellement construit facilement à partir de useRoute de Vue Router.",
                    "Un mastermind en page d'accueil, petit jeu dans lequel il faut trouver un nombre mystère avec des indices donnés à chaque essai.",
                    "Création du site totalement avec Vue.JS. Je trouve ce framework plus simple à apprendre mais également bien plus intuitif à utiliser en combinaison avec Pinia et Vue Router.",
                    "La possibilité de copier différentes informations depuis les liens situés dans Contact.",
                    "La possibilité de s'inscrire avec les informations classiques pour. Le mot de passe n'est pas enregistré en clair.",
                    "La possibilité de changer d'adresse-mail, de mot de passe et d'accéder à ses informations personnelles.",
                    // "Un formulaire de contact ayant pour but de rentrer des informations et qu'en validant, un mail me soit automatiquement envoyé. Je n'ai pas encore trouvé le moyen d'accomplir ceci sans passer par un service payant.",
                ],
            },
            {
                id: 2,
                title: "Jeu d'échecs",
                link: "chess",
                linkAccess: "Chess",
                abstract:
                    "Le jeu d'échec que j'ai créé de toute pièce. Il est jouable pour le moment seul et il manque quelques détails pour que les véritables règles des échecs soient respectées. A pour but d'être jouable en ligne.",
                description:
                    "Il s'agit d'un jeu d'échec que j'avais créé à l'origine durant mes études au sein d'O'clock. Quasiment terminé, je l'avais délaissé pour me concentrer sur les dernières semaines de cours. C'est par celui-ci que j'ai décidé de commencer ce projet de portfolio en le reprenant du début. Il n'est pour le moment pas encore tout à fait terminé et n'est jouable qu'en solo, mais quand j'aurai intégré la connexion au site et les différentes fonctionnalités de websocket, je ferai en sorte que deux joueurs puissent créer une partie, personnaliser leur règles et jouer l'un contre l'autre. La sauvegarde des parties et des statistiques sont également prévues.",
                features: [
                    "Gestion des différentes pièces à partir de case dynamiques comportant plusieurs informations.",
                    "Les mouvements sont calculés côté serveur afin que les joueurs ne puissent tricher en réalisant des coups impossibles.",
                    "Un mode permettant de mettre en surbrillance toutes les pièces capable de bouger",
                    "Un indicateur montrant le nombre de coups possible pour le joueur dont c'est le tour actuellement",
                ],
            },
            {
                id: 3,
                title: "PROJET FACTICE 1",
                link: "facticeprojectone",
                linkAccess: "/facticeprojectone",
                abstract:
                    "Texte de remplissage pour le projet factice numéro 1 en attendant d'avoir intégré plus de projet/jeux au site dans le but d'en avoir au moins 4 affichés pour le moment",
                description:
                    "Texte de remplissage pour le projet factice numéro 1 en attendant que j'ai intégré plus de projet/jeux au site dans le but d'en avoir au moins 4 affichés pour le moment",
                features: [
                    "Features inexistante 1",
                    "Features inexistante 2",
                    "Features inexistante 3",
                    "Features inexistante 4",
                    "Features inexistante 5",
                    "Features inexistante 6",
                ],
            },
            {
                id: 4,
                title: "PROJET FACTICE 2",
                link: "facticeprojecttwo",
                linkAccess: "/facticeprojecttwo",
                abstract:
                    "Texte de remplissage pour le projet factice numéro 2 en attendant d'avoir intégré plus de projet/jeux au site dans le but d'en avoir au moins 4 affichés pour le moment",
                description:
                    "Texte de remplissage pour le projet factice numéro 2 en attendant que j'ai intégré plus de projet/jeux au site dans le but d'en avoir au moins 4 affichés pour le moment",
                features: [
                    "Features inexistante 1",
                    "Features inexistante 2",
                    "Features inexistante 3",
                    "Features inexistante 4",
                    "Features inexistante 5",
                    "Features inexistante 6",
                ],
            },
        ],
        contactList: [
            {
                id: 1,
                copyId: "https://linkedin.com/in/alexandre-richard-dev4",
                type: "link",
                section: "pro",
                title: "LinkedIn",
                content: "alexandre-richard-dev4",
            },
            {
                id: 2,
                copyId: "discord",
                type: "copy",
                section: "pro",
                title: "Discord",
                content: "Shadowmere#5754",
            },
            {
                id: 3,
                copyId: "https://github.com/Alexandre-RICHARD",
                type: "link",
                section: "pro",
                title: "Github",
                content: "Alexandre-RICHARD",
            },
            {
                id: 4,
                copyId: "mail",
                type: "copy",
                section: "pro",
                title: "Mail",
                content: "alexandre.richard.dev@gmail.com",
            },
            {
                id: 5,
                copyId: "steam",
                type: "copy",
                section: "games",
                title: "Steam",
                content: "197365780",
            },
            {
                id: 6,
                copyId: "gog",
                type: "copy",
                section: "games",
                title: "Gog",
                content: "Shadowmere_Swift",
            },
            {
                id: 7,
                copyId: "epic",
                type: "copy",
                section: "games",
                title: "Epic Games",
                content: "Shadowmere_Swift",
            },
            {
                id: 8,
                copyId: "rockstar",
                type: "copy",
                section: "games",
                title: "Rockstar Games",
                content: "Shadowmere_Swift",
            },
            {
                id: 9,
                copyId: "uplay",
                type: "copy",
                section: "games",
                title: "Uplay",
                content: "ShadowmereSwift",
            },
            {
                id: 10,
                copyId: "origin",
                type: "copy",
                section: "games",
                title: "Origin",
                content: "Shadowmere_Swift",
            },
            {
                id: 11,
                copyId: "xbox",
                type: "copy",
                section: "games",
                title: "Xbox Live",
                content: "ShadowmereSwift",
            },
            {
                id: 12,
                copyId: "playstation",
                type: "copy",
                section: "games",
                title: "PlayStation",
                content: "Andromeda-CTZ",
            },
        ],
    }),
});
//! CHANGE avant ça
