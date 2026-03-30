---
slug: /
---

# Welcome to MOS-Docs

**MOS** (Modular Operating System) is a lightweight, web-based management system for servers and homelabs — built on **Devuan Linux**.

It's designed for **small, energy-efficient home servers**, delivering a modern interface with maximum functionality and zero bloat.

---

## 🚀 Getting Started

Ready to try MOS? Here's how to begin:

| Section | Description |
|---------|-------------|
| **Overview** | Learn about MOS and its core features in this guide |
| **Quick Start** | Get up and running in minutes with our step-by-step guides |
| **Documentation** | Deep dive into all aspects of MOS |

### Quick Start Guides

| Guide | Description |
|-------|-------------|
| [WebUI Overview](/docs/Quick-Start/WebUI-Overview) | Learn how to navigate the MOS interface |
| [Network Configuration](/docs/Quick-Start/Start-Network-Configuration) | Set up your network interfaces (DHCP or static) |
| [Storage Pool Setup](/docs/Quick-Start/Create-a-Storage-Pool) | Create your first storage pool with mergerfs and SnapRAID |
| [First Container](/docs/Quick-Start/Start-the-First-Container) | Deploy your first Docker container |

---

## 🎯 What Makes MOS Special?

| Feature | Description |
|---------|-------------|
| **Modular Virtualization** | Support for Docker, LXC, and VMs out of the box |
| **Smart Storage** | Built-in mergerfs and SnapRAID for flexible, protected storage |
| **Privacy First** | No telemetry, no tracking, no data collection. Everything runs locally |
| **Energy Efficient** | Lightweight OS based on Devuan for home servers |

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
| **Discord Community** | [Join our Discord](https://discord.com/invite/fcTMbuygTV) |
| **Report Issues** | [GitHub Issues](https://github.com/J000K3R/mos-docs-staging/issues) |
| **Releases & Changelog** | [GitHub Releases](https://github.com/J000K3R/mos-docs-staging/releases) |

---

## 📚 Documentation Structure

MOS documentation is organized by topic:

| Category | Topics |
|----------|--------|
| **Installation** | [Create bootable media, VM testing, releases](/docs/Installation/) |
| **Getting Start** | [WebUI, network, storage, containers, VMs](/docs/Quick-Start/) |
| **System Management** | [Settings, cron, logs, MOS HUB, notify](/docs/System-Management/) |
| **Network** | [Interfaces, bonds, routing, firewall](/docs/Network/) |
| **Storage** | [Pools, filesystems, shares, snapshots](/docs/category/storage) |
| **Virtualization** | [Docker, LXC, VM management](/docs/Virtualization/) |
| **Users & Access** | [User creation, permissions, roles](/docs/User-Management/) |
| **API** | [REST API, WebSocket, authentication](/docs/API/) |
| **Advanced Usage** | [Docker host access, boot scripts, migration](/docs/Advanced%20Usage/) |

---

## 📦 Related Repositories

### 🖥️ MOS Releases
- **[MOS Releases](https://github.com/ich777/mos-releases)**

### 📚 MOS Documentation
- **[MOS Docs](https://github.com/J000K3R/mos-docs-staging)**

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
