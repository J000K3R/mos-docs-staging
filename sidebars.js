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
        { type: 'doc', id: 'System-Startup/Post-Start-Script', label: 'Post-Start Script' },
        { type: 'doc', id: 'System-Startup/Pool-Mount-Scripts', label: 'Pool Mount Scripts' },
      ],
    },
    {
      type: 'category',
      label: '⚙️ System Management',
      items: [
        {
          type: 'category',
          label: '💻 System Configuration',
          items: [
            { type: 'doc', id: 'System-Management/System-Configuration/System-Settings', label: 'System Settings' },
            { type: 'doc', id: 'System-Management/System-Configuration/Cron-Jobs', label: 'Cron Jobs' },
            { type: 'doc', id: 'System-Management/System-Configuration/Logs', label: 'Logs' },
            { type: 'doc', id: 'System-Management/System-Configuration/MOS-Hub', label: 'MOS-Hub' },
            { type: 'doc', id: 'System-Management/System-Configuration/Notify', label: 'Notify' },
            { type: 'doc', id: 'System-Management/System-Configuration/Token', label: 'Token' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🗂️ Virtualization',
      items: [
        { type: 'doc', id: 'Virtualization/Docker-Service', label: 'Docker Service' },
        { type: 'doc', id: 'Virtualization/LXC-Service', label: 'LXC Service' },
        { type: 'doc', id: 'Virtualization/VM-Service', label: 'VM Service' },
      ],
    },
    {
      type: 'category',
      label: '🌐 Network',
      items: [
        { type: 'doc', id: 'Network/Network-Configuration', label: 'Network Configuration' },
      ],
    },
  ],
};
export default sidebars;
