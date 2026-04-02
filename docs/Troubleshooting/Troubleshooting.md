---
title: Troubleshooting
sidebar_label: Troubleshooting 🛠️
sidebar_position: 1
---

# 🛠️ Troubleshooting

This page covers common issues and their solutions.
If your problem is not listed here, feel free to ask in the [Discord](https://discord.com/invite/fcTMbuygTV)

---

## 📦 Installation

### MOS does not boot from USB

**Symptoms:** System ignores the USB stick or shows a boot error.

:::tip Checklist:
- The USB stick must be formatted as **FAT32**
- The disk label must be set to exactly **`MOS`** (case-sensitive)
- MOS only supports **UEFI boot** — make sure UEFI is enabled in your BIOS and Legacy/CSM mode is disabled
- Verify the boot order in your BIOS places the USB stick first
:::

:::warning
Minimum recommended USB size is **8 GB**, 16 GB recommended.
:::

---

### WebUI is not accessible after first boot

**Symptoms:** Browsing to `http://MOS-IP/` shows nothing or times out.

**Most likely cause:** MOS was booted **without a network connection**.

A network connection is required on first boot to access the WebUI and complete the initial setup wizard (setting the root password, WebUI credentials, etc.).

:::tip Solution
1. Make sure the server is connected to your network via a cable
2. Reboot the server
3. Wait for the IP address to appear on the console screen
4. Access the WebUI via `http://MOS-IP/`
:::

---

### Wrong keyboard layout on the console

**Symptoms:** Keys produce wrong characters when typing directly on the server console (e.g. `z` and `y` are swapped, special characters are wrong).

:::tip Solution:
Set the correct keymap in the WebUI:

**Settings → System Configuration → System → Keymap**

The default keymap is `de-latin1-nodeadkeys`. Change it to match your keyboard layout and save.
:::

:::warning
This only affects the physical console keyboard layout. The WebUI is not affected by this setting.
:::

---

## 🔄 System Update

### Update error: "version parameter is required"

**Symptoms:** When trying to update MOS, the version dropdown shows `success`, `error`, `timestamp` instead of actual version numbers. Clicking OK shows the error `Update could not be initiated — version parameter is required`.

**Cause:** MOS uses the GitHub API to fetch available versions. The unauthenticated GitHub API has a rate limit. If you are behind a CGNAT or share an IP with many users, the rate limit may be exhausted.

:::tip Solution:
Create a GitHub personal access token and add it to MOS:

1. Follow the [Token documentation](/System-Management/System-Configuration/Token) to create a GitHub token
2. Add the token to MOS via **Settings → System Configuration → Token**
3. Try the update again
:::

---

## 🏬 MOS Hub

### Duplicate entries in MOS Hub

**Symptoms:** The same application (e.g. Jellyfin) appears multiple times in MOS Hub.

**Explanation:** This is expected behavior. MOS Hub is **not curated** — anyone can create and publish their own repositories. If multiple repository maintainers publish the same application, it will appear multiple times. You can identify the source by the repository name shown on each entry.

You can manage which repositories are active via **Settings → System Configuration → MOS Hub**.

---

## 🌐 Network

### Lost WebUI access after applying network changes

**Symptoms:** After changing network settings, the WebUI is no longer reachable.

**Explanation:** MOS has a built-in **60-second rollback mechanism**. After applying network changes, you must confirm the new configuration within 60 seconds by navigating to **Settings → Network Interfaces** and clicking **Accept**.

**If you did not confirm in time:**
- MOS automatically restored the previous configuration
- The WebUI is reachable again via the **old IP address**

**If the IP address changed and you confirmed:**
- Make sure you are accessing the WebUI via the **new IP address**

:::warning
Always have console (physical or SSH) access available when making network changes remotely.
:::

---

### No internet access despite network being configured

**Checklist:**
- Make sure the **IPv4 Gateway** is correctly set to your router's IP address
- Make sure at least one **DNS server** is configured (e.g. `1.1.1.1`)
- If using a static IP, verify there is no IP conflict with another device on your network
- If using `bond` mode, verify your switch supports the bonding configuration

---

## 💾 Storage / Pools

### Pools page shows "No pools available"

**Symptoms:** After first boot the Pools section is empty.

**Explanation:** This is expected on a fresh installation. Pools need to be created manually.

Refer to the [Create a Storage Pool](/Quick-Start/Create-Storage-Pool) guide to get started.

---

## 🐳 Docker

### Container fails to start

**Checklist:**
- Check the container logs in the WebUI for specific error messages
- Make sure the required ports are not already in use by another container or service
- Verify that all required paths and volumes exist on the system

---

### Docker service is not running

:::tip Solution:
Navigate to **Settings → Hardware → Docker service** and make sure Docker is enabled and started. You can also restart the Docker service from there.
:::

---

## 📦 LXC

### LXC service is not running

:::tip Solution:
Navigate to **Settings → Hardware → LXC service** and make sure LXC is enabled and started.
:::

---

## 🖥️ VMs

### VM does not start

**Checklist:**
- Make sure the VM has sufficient CPU and memory allocated
- Verify the disk image path is correct and accessible
- Check that the VM service is running via **Settings → Hardware**

---

## 💬 Still need help?

If none of the above solved your issue:

- Join the [MOS Discord](https://discord.com/invite/fcTMbuygTV) and ask in the support channel
- Open a [GitHub Issue](https://github.com/ich777/mos-releases/issues) with as much detail as possible (MOS version, steps to reproduce, error messages)

---

_Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information._