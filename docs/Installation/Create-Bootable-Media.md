---
sidebar_label: 🔧 Create Bootable Media
sidebar_position: 1
---

import Terminal, { TerminalMuted, TerminalCursor, TerminalSuccess } from '@site/src/components/Terminal';
import CMD, { CMDCursor } from '@site/src/components/CMD';

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

<Terminal title="user@Mac:~">
$ diskutil list
/dev/disk0 (internal):
   #:  TYPE NAME          SIZE       IDENTIFIER
   0:  GUID_partition...  500.1 GB   disk0

/dev/disk5 (external, physical):
   #:  TYPE NAME          SIZE       IDENTIFIER
   0:  FDisk_partition...  14.9 GB   disk5
   1:  DOS_FAT_32 NO NAME  14.9 GB   disk5s1

<TerminalMuted>← your USB stick is /dev/disk5</TerminalMuted>
</Terminal>

4. Format with MBR and FAT32 — replace `/dev/diskX` with your actual device identifier:

<Terminal title="user@Mac:~">
$ diskutil partitionDisk /dev/disk5 MBR fat32 "MOS" 100%
Started partitioning on disk5
Unmounting disk
Creating the partition map
Waiting for partitions to activate
Formatting disk5s1 as MS-DOS (FAT32) with name MOS
512 bytes per physical sector
/dev/rdisk5s1: 29337600 sectors in 917425 FAT32 clusters
Initialized /dev/rdisk5s1 as a 512 MB volume
Mounting disk
Finished partitioning on disk5
/dev/disk5 (external, physical):
   #:  TYPE NAME          SIZE       IDENTIFIER
   0:  FDisk_partition...  14.9 GB   disk5
   1:  DOS_FAT_32 MOS      14.9 GB   disk5s1
<TerminalCursor />
</Terminal>

#### Linux

1. Insert the USB stick
2. Find your USB device:

<Terminal title="user@linux:~">
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 500.1G  0 disk
├─sda1   8:1    0   512M  0 part /boot
└─sda2   8:2    0 499.6G  0 part /
sdb      8:16   1  14.9G  0 disk
└─sdb1   8:17   1  14.9G  0 part
<TerminalMuted>← your USB stick is /dev/sdb</TerminalMuted>
</Terminal>

3. Format with FAT32:

<Terminal title="user@linux:~">
$ sudo mkfs.vfat -F 32 -n "MOS" /dev/sdb1
mkfs.fat 4.2 (2021-01-31)
<TerminalSuccess>mkfs.vfat: success</TerminalSuccess>
<TerminalCursor />
</Terminal>

:::tip
You can also use `parted` or the `gparted` GUI to create an MBR partition table and format as FAT32.
:::

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
