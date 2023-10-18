import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search';

module.exports = {
    lang: 'fr-FR',
    title: 'PhasmoWiki',
    description: 'Documentation pour Phasmophobia',

    head: [
        ['meta', { name: 'theme-color', content: '#3aa675' }]
    ],

    plugins: [
        searchPlugin({
            hotKeys: ["/"],
            locales: {
                "/": {
                    placeholder: "Rechercher",
                },
            },
        }), 
    ],

    theme: defaultTheme({
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "Entités",
                collapsible: false,
                children: [
                    { link: "/entities/banshee.md", text: "Banshee" },
                    { link: "/entities/cauchemar.md", text: "Cauchemar" },
                    { link: "/entities/demon.md", text: "Démon" },
                    { link: "/entities/djinn.md", text: "Djinn" },
                    { link: "/entities/esprit.md", text: "Esprit" },
                    { link: "/entities/fantome.md", text: "Fantôme" },
                    { link: "/entities/goryo.md", text: "Goryo" },
                    { link: "/entities/hantu.md", text: "Hantu" },
                    { link: "/entities/mimic.md", text: "Le Mimic" },
                    { link: "/entities/jumeaux.md", text: "Les Jumeaux" },
                    { link: "/entities/myling.md", text: "Myling" },
                    { link: "/entities/obake.md", text: "Obake" },
                    { link: "/entities/ombre.md", text: "Ombre" },
                    { link: "/entities/oni.md", text: "Oni" },
                    { link: "/entities/onryo.md", text: "Onryo" },
                    { link: "/entities/poltergeist.md", text: "Poltergeist" },
                    { link: "/entities/raiju.md", text: "Raiju" },
                    { link: "/entities/revenant.md", text: "Revenant" },
                    { link: "/entities/spectre.md", text: "Spectre" },
                    { link: "/entities/yokai.md", text: "Yokai" },
                    { link: "/entities/yurei.md", text: "Yurei" },
                ]
            },
        ]
    }),
}