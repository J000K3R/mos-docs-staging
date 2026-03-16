/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to MOS', // overrides default title
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [], // ← empty for now — you’ll add documents later
    },
  ],
};

export default sidebars;