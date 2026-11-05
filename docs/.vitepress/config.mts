import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Next in AI',
  description: 'IS 117005 portfolio research on emerging technology careers',
  base: '/is117005-portfolio-research/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Explore careers', link: '/research/' },
      { text: 'About this project', link: '/about' },
    ],
    sidebar: [
      { text: 'Research', items: [
        { text: 'Career landscape', link: '/research/' },
        { text: 'Role profiles', link: '/research/roles' },
        { text: 'NY / NJ job examples', link: '/research/jobs' },
        { text: 'Sources & method', link: '/research/sources' },
      ]},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
    ],
    footer: { message: 'IS 117005 · Portfolio research', copyright: 'Student research project' },
  },
})
