const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to MOS',
    },
    {
      type: 'category',
      label: '📦 Installation',
      items: [
        { type: 'doc', id: 'Installation/Create-Bootable-Media', label: 'Create Bootable Media' },
      ],
    },
    {
      type: 'category',
      label: '🧭 Getting Started',
      items: [
        { type: 'doc', id: 'Quick-Start/WebUI-Overview', label: 'WebUI Overview' },
        { type: 'doc', id: 'Quick-Start/Start-Network-Configuration', label: 'Start Network Configuration' },
        { type: 'doc', id: 'Quick-Start/Create-Storage-Pool', label: 'Create a Storage Pool' },
        { type: 'doc', id: 'Quick-Start/Start-the-First-Container', label: 'Start the First Container' },
        { type: 'doc', id: 'Quick-Start/Create-the-First-Shares', label: 'Start the First Container' },
        { type: 'doc', id: 'Quick-Start/Create-the-First-VM', label: 'Start the First Container' },
      
      ],
    },
  ],
};

export default sidebars;
