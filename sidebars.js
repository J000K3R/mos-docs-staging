const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to MOS',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        { type: 'doc', id: 'Quick-Start/WebUI-Overview', label: 'WebUI Overview' },
        { type: 'doc', id: 'Quick-Start/Start-Network-Configuration', label: 'Start Network Configuration' },
        { type: 'doc', id: 'Quick-Start/Create-Storage-Pool', label: 'Create a Storage Pool' },
      ],
    },
  ],
};

export default sidebars;