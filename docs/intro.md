---
slug: /
description: "MOS (Modular Operating System) is a lightweight, web-based management system for servers and homelabs. Built on Devuan Linux with Docker, LXC, VM, and ZFS support."
---

# 📚 Welcome to MOS-Docs

**MOS** (Modular Operating System) is a lightweight, web-based management system for servers and homelabs — built on **Devuan Linux**.

It's designed for **small, energy-efficient home servers**, delivering a modern interface with maximum functionality and zero bloat.

---

## 🚀 Quick Start

New to MOS? Follow these steps to get up and running:

| Step | Guide | Description |
|------|-------|-------------|
| 1️⃣ | [Create Bootable Media](/docs/Installation/Create-Bootable-Media) | Create a USB stick or VM image to boot MOS |
| 2️⃣ | [First Walkthrough](/docs/Installation/First-Walkthrough) | Complete initial setup (root password, network, storage) |
| 3️⃣ | [WebUI Overview](/docs/Dashboard/WebUI-Overview) | Learn the MOS interface and navigation |
| 🧪 | [Test in VM](/docs/Installation/Testing-MOS-in-a-Virtual-Machine) | Try MOS in a virtual machine first (optional) |
| 🔧 | [ARM Support (Experimental)](/docs/Installation/ARM-Support) | Install MOS on ARM devices (Orange Pi, Raspberry Pi, etc.) |

---

## 🧭 Core Areas

Quick access to the main documentation sections — matching the MOS WebUI sidebar.

| Area | Documentation | What you'll find |
|------|---------------|------------------|
| 🖥️ | [Dashboard](/docs/Dashboard/WebUI-Overview) | WebUI overview, navigation, dashboard panels, plugin widgets |
| 💾 | [Disks](/docs/Disks/SMART) | S.M.A.R.T. monitoring, disk health, temperature thresholds |
| 🗄️ | [Pools](/docs/Pools/Create-Storage-Pool) | Storage pools, mergerfs, SnapRAID, Btrfs, ZFS |
| 📂 | [Shares](/docs/Shares/Create-the-First-Shares) | SMB/NFS shares, permissions, access control |
| 🛍️ | [MOS Hub](/docs/MOS-Hub/MOS-Hub-Settings) | App store for Docker templates, Compose templates & plugins |
| 🐳 | [Docker](/docs/Docker/Docker-Service) | Docker containers, images, networks, volumes |
| 📦 | [LXC](/docs/LXC/LXC-Service) | Linux Containers, system-level isolation |
| 🖥️ | [VMs](/docs/VMs/VM-Service) | Virtual machines with KVM/QEMU, GPU/USB passthrough |
| 🧩 | [Plugins & Drivers](/docs/Plugins/Drivers) | Hardware drivers, plugin development |
| ⚙️ | [Settings](/docs/Settings/System-Settings) | System config, updates, network, users, cron, logs, tokens |
| 🔌 | [API](/docs/API/MOS-API-Overview) | REST API, WebSocket, rate limits, authentication |

---

## ✨ Features

### 📊 Monitoring & Status

CPU, RAM, disks, temperatures, network — compact and directly accessible from the dashboard. Real-time updates without page reloads.

### 🗄️ Storage, Pools & Shares

Oversee disks and pools, manage shares — without losing context. Built-in mergerfs and SnapRAID for flexible, protected storage.

### 👤 Users & Profile

User management, profile settings, language, and UI preferences — all centralized in one interface. Role-based permissions for shares and services.

### 🐳 Container & Virtualization

Docker, LXC, and VMs accessible from one place — depending on which MOS services are active. Deploy containers via Docker or MOS Hub templates.

### 🖥️ Web Terminal & Tools

Quick checks and actions directly in the browser — no need to switch between tools constantly. Built-in file browser and terminal.

### 🔔 Notifications

Important events in real-time — with badge and toaster notifications by priority. Forward alerts to Discord, Gotify, Pushover, or PushBits.

### 🧩 Plugins & Extensibility

The interface stays lean — additional functionality comes through modular plugins. Drivers, tools, and custom plugins from the MOS Hub.

### ⚙️ Settings & Services

System and service settings bundled: System, Network, Hardware, Virtualization, Logs, Token, and more.

### 🌍 Multilingual & Theme

UI texts via i18n, light/dark mode, and customizable colors — matching your setup.

---

## 🎯 Typical Use Cases

### 🏠 Homeserver / NAS

- Check resources and storage pools quickly
- Keep an eye on shares and users
- Use remote mounts and Hub services
- Energy-efficient 24/7 operation

### 🧪 Dev / Lab

- Docker, LXC, and VMs in one place
- Web terminal for quick checks
- Plugins for project-specific tasks
- Test environments with snapshots and rollback

---

## ❓ FAQ

### What is MOS?

MOS is a web-based management interface for servers/systems: monitoring, storage, user management, services, containers/VMs, notifications, and tools — as a client to the MOS API.

### Is there an ARM64 build?

Yes — ARM64 builds are available, but currently still experimental. See [ARM Support](/docs/Installation/ARM-Support).

### Which services and platforms are supported?

MOS is service-oriented: Dashboard, Disks/Pools/Shares, Users, Docker, LXC, VM, Web Terminal, and optional modules (e.g. Hub/Remote Mounting). Visibility depends on active services.

### How do I install and run MOS?

Typical deployments run as a Web UI behind HTTPS / reverse proxy. The UI itself is static; it communicates with a MOS backend API (e.g. `/api/v1`) and a notification WebSocket. See [Installation](/docs/Installation/Create-Bootable-Media).

### How is access and security handled?

Authentication is token-based; operation behind TLS and reverse proxy is recommended. Principles: least privilege, regular updates, and monitoring of logs/notifications. See [Token](/docs/Settings/Token) and [API Overview](/docs/API/MOS-API-Overview).

### How do plugins and extensions work?

Functionality remains modular: plugins extend views and API functions. The UI shows only registered/activated plugins and modules. See [Plugins & Drivers](/docs/Plugins/Drivers) and [Plugin Development](/docs/Plugins/MOS-Plugin-Development-Guide).

### How do I get updates and maintain MOS?

Updates affect backend and UI separately. Follow the project repo for releases. See [Update System](/docs/Settings/Update-System) and [Release Notes](/docs/Release-Notes/Overview).

### Is MOS Open Source?

Yes, MOS is (and will remain) open source under the GNU AGPLv3 (see LICENSE in the repo).

### Where can I get help or contribute?

Issues, PRs, and discussions via the project repository. For installation questions, the README/docs and community channels are the first point of contact.

---

## 🎯 What Makes MOS Special?

| Feature | Description |
|---------|-------------|
| **Modular Virtualization** | Support for Docker, LXC, and VMs out of the box |
| **Smart Storage** | Built-in mergerfs and SnapRAID for flexible, protected storage |
| **Privacy First** | No telemetry, no tracking, no data collection. Everything runs locally |
| **Energy Efficient** | Lightweight OS based on Devuan for home servers |
| **No Hidden Services** | No telemetry, no forced cloud services or dependencies |
| **Modular by Design** | Activate only the features you need with plugins |

---

## 👥 Who Is MOS For?

MOS is designed for:

- **Homelab enthusiasts** who want full control over their infrastructure
- **Privacy-focused users** who refuse telemetry and cloud dependencies
- **Developers and self-hosters** looking for a modern, lightweight platform
- **Resource-constrained environments** where every MHz and MB counts

---

## 🔒 Open Source & Privacy

**MOS is and will always remain fully open source** under the **GNU AGPLv3 license**.

We believe in:

- **Transparency**: All code is publicly available on GitHub
- **Privacy**: No telemetry, no tracking, no data collection
- **Modularity**: Install only what you need — nothing extra

---

## 📦 MOS Components

MOS is built from multiple open-source components:

| Layer | Technology |
|-------|------------|
| **Base OS** | Devuan Linux (systemd-free, Debian-based) |
| **Virtualization** | Docker, LXC, QEMU/KVM |
| **Storage** | mergerfs, SnapRAID, ZFS support |
| **Web Interface** | Vue 3 + Vuetify + REST API + WebSocket |

---

## 🌐 Get Involved

| Resource | Link |
|----------|------|
| **MOS Website** | [mos-official.net](https://mos-official.net) |
| **Discord Community** | [Join our Discord](https://discord.com/invite/fcTMbuygTV) |
| **Matrix Channel** | [Join our Matrix](https://matrix.to/#/#mos_official:matrix.org) |
| **Reddit** | [r/MOS_official_net](https://www.reddit.com/r/MOS_official_net/) |
| **X (Twitter)** | [@mos_offi](https://x.com/mos_offi) |
| **Report Issues** | [GitHub Issues](https://github.com/ich777/mos-docs/issues) |
| **Releases & Changelog** | [GitHub Releases](https://github.com/ich777/mos-releases) |

---

## 🌟 Support MOS

MOS is and will always remain **free and open source**. If you'd like to support the project, you can make a donation to help us continue development.

| Resource | Link |
|----------|------|
| **Support Project** | [Support MOS](/docs/Support-MOS/Support_MOS) |

---

### 🖥️ MOS Releases
- **[MOS Releases](https://github.com/ich777/mos-releases)**

### 📚 MOS Documentation
- **[MOS Docs](https://github.com/ich777/mos-docs)**

### 🎨 Frontend and API
- **[MOS Frontend](https://github.com/ich777/mos-frontend)**
- **[MOS API](https://github.com/ich777/mos-api)**

### 💾 Base OS
- **[MOS Kernel](https://github.com/ich777/mos-kernel)**
- **[MOS rootfs](https://github.com/ich777/mos-rootfs)**

### 🐳 Base Packages
- **[MOS Docker](https://github.com/ich777/mos-moby)**
- **[MOS LXC](https://github.com/ich777/mos-lxc)**
- **[MOS QEMU](https://github.com/ich777/mos-qemu)**

### 🔧 MOS Specific Packages
- **[MOS Notify](https://github.com/ich777/mos-notify)**
- **[MOS image-sha](https://github.com/ich777/mos-image-sha)**
- **[MOS SnapRAID](https://github.com/ich777/mos-snapraid)**
- **[MOS docker-watchdog](https://github.com/ich777/mos-docker-watchdog)**

### 💾 MOS Misc Custom Repositories
- **[MOS GRUB](https://github.com/ich777/mos-grub)**

---

_Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information._
