---
sidebar_label: 🔧 Create Bootable Media
sidebar_position: 1
---

# 🔧 Create Bootable Media

The installation process is intentionally kept simple.
Follow these steps to prepare a bootable USB drive:

---

### 1. 🖴 Prepare the USB Stick

Format a USB stick as **FAT32** and set the label/name to `MOS`.

:::note
Minimum recommended size: **8 GB** (16 GB recommended to be on the safe side).
:::

#### Windows

1. Insert the USB stick
2. Open **File Explorer** → right-click the USB drive → **Format...**
3. Set **File system** to `FAT32`
4. Set **Volume label** to `MOS`
5. Click **Start**

#### macOS

:::warning
The macOS Finder format option does **not** set the bootable flag correctly. Use the Terminal method below.
:::

1. Insert the USB stick
2. Open **Terminal**
3. Find your USB device identifier:
   ```bash
   diskutil list
   ```
   (Look for your USB stick, e.g., `/dev/disk5`)
4. Format with MBR and FAT32:
   ```bash
   diskutil partitionDisk /dev/diskX MBR fat32 "MOS" 100%
   ```
   Replace `/dev/diskX` with your actual device identifier.

#### Linux

1. Insert the USB stick
2. Find your USB device (e.g., `/dev/sdb`):
   ```bash
   lsblk
   ```
3. Format with FAT32:
   ```bash
   sudo mkfs.vfat -F 32 -n "MOS" /dev/sdX1
   ```
   Replace `/dev/sdX1` with your actual device partition.

   Or use `parted`/`gparted` GUI to create a partition table with MBR and format as FAT32.

---

### 2. ⬇️ Download the Installation Files

Download the latest version of the system (`.zip` archive) from the [Releases](https://github.com/ich777/mos-releases/releases) page — Assets section.

---

### 3. 📦 Extract the Files

Extract the downloaded archive directly onto the USB stick.

:::note
No additional imaging tools or software are required.
:::

---

### 4. 🔌 Boot from the USB Stick

Insert the USB stick into the target machine, select it in the boot menu, and the installation process can begin immediately.

---

### 5. ✅ Complete the Setup

A network connection will be needed to access the WebUI to set initial account passwords.

Access the WebUI via:

```
http://MOS-IP/
```

---

:::note
While a USB stick is recommended, you can also use an external hard drive or card reader as long as it is formatted as FAT32.
:::

---

_Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information._
