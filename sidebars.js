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
        { type: 'doc', id: 'Installation/Testing-MOS-in-a-Virtual-Machine', label: 'Testing MOS in a Virtual Machine' },
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
        { type: 'doc', id: 'Quick-Start/Create-the-First-Shares', label: 'Create the First Shares' },
        { type: 'doc', id: 'Quick-Start/Create-the-First-VM', label: 'Create the First VM' },
      ],
    },
    {
      type: 'category',
      label: '🚀 System Startup',
      items: [
        { type: 'doc', id: 'System-Startup/Pre-Start-Script', label: 'Pre-Start Script' },
      ],
    },
  ],
};

export default sidebars;
