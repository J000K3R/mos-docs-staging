import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={siteConfig.themeConfig.navbar.logo.src}
          alt={siteConfig.themeConfig.navbar.logo.alt}
          className={styles.heroLogo}
          style={{ width: '200px', marginBottom: '1rem' }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* Buttons entfernt */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for MOS – Lightweight OS for Home Servers">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8">
              <h2>What is MOS?</h2>
              <p>
                <strong>MOS</strong> (Modular Operating System) is a lightweight, web-based management system for servers and homelabs. Built on <strong>Devuan Linux</strong>, it's designed for <strong>small, energy-efficient home servers</strong>.
              </p>
              <p>
                The primary goal is to provide a simple, reliable, and low-overhead platform for <strong>virtualization, containerization, and self-hosting</strong> environments. MOS delivers a modern interface with maximum functionality.
              </p>
              <p>
                🌟 <strong>Modern Stack</strong>: Built with Vue 3, Vuetify, and a modern REST API with WebSocket support for real-time updates.
              </p>
              <p>
                🔒 <strong>Privacy First</strong>: No telemetry, no tracking, no cloud dependencies. Everything runs locally on your hardware.
              </p>
              <p>
                📦 <strong>Modular Design</strong>: Install only the services you need. The system stays lean and responsive.
              </p>
              <h3>👥 Target Audience</h3>
              <p>
                MOS is designed for homelab enthusiasts, self-hosters, developers, and anyone looking for a simple, transparent, and efficient way to manage their server without bloat or privacy concerns.
              </p>
              <h3>🔧 Key Features</h3>
              <p>
                MOS provides a comprehensive set of features including real-time monitoring, storage management, file sharing, user management, Docker/LXC/VM support, web terminal, and notifications.
              </p>
              <h3>🔒 Open Source & Privacy</h3>
              <p>
                MOS is and will always remain <strong>fully open source</strong> under the <strong>GNU AGPLv3 license</strong>. No hidden services, no telemetry, no forced cloud dependencies. Everything runs locally under your control.
              </p>
              <h3>🚀 Getting Started</h3>
              <p>
                Ready to try MOS? Start with our <strong>Quick Start Guide</strong>:
              </p>
              <ul>
                <li><a href="https://github.com/ich777/mos-docs/blob/master/Installation/Create%20Bootable%20Media.md">Installation</a> - Get started with MOS</li>
                <li><a href="https://github.com/ich777/mos-docs/blob/master/Quick%20Start/WebUI%20Overview.md">WebUI Overview</a> - First steps and interface navigation</li>
                <li><a href="https://github.com/ich777/mos-docs/blob/master/Quick%20Start/Create%20a%20Storage%20Pool.md">Create Storage Pool</a> - Set up your first storage</li>
              </ul>
              <p>
                For comprehensive documentation, visit our <strong>Documentation</strong> section or check out the <a href="https://github.com/ich777/mos-docs">MOS Documentation Repository</a> on GitHub.
              </p>
            </div>
            <div className="col col--4">
              <h3>🔗 Resources</h3>
              <h4>📚 MOS Documentation</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-docs" target="_blank" rel="noopener noreferrer">📖 MOS Docs</a></li>
              </ul>
              <h4>🎨 Frontend and API</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-frontend" target="_blank" rel="noopener noreferrer">🎨 MOS Frontend</a></li>
                <li><a href="https://github.com/ich777/mos-api" target="_blank" rel="noopener noreferrer">🔌 MOS API</a></li>
              </ul>
              <h4>💾 Base OS</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-kernel" target="_blank" rel="noopener noreferrer">💾 MOS Kernel</a></li>
                <li><a href="https://github.com/ich777/mos-rootfs" target="_blank" rel="noopener noreferrer">💾 MOS rootfs</a></li>
              </ul>
              <h4>📦 Base Packages</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-moby" target="_blank" rel="noopener noreferrer">🐳 MOS Docker</a></li>
                <li><a href="https://github.com/ich777/mos-lxc" target="_blank" rel="noopener noreferrer">📦 MOS LXC</a></li>
                <li><a href="https://github.com/ich777/mos-qemu" target="_blank" rel="noopener noreferrer">🖥️ MOS QEMU</a></li>
              </ul>
              <h4>🔧 MOS Specific Packages</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-notify" target="_blank" rel="noopener noreferrer">🔔 MOS Notify</a></li>
                <li><a href="https://github.com/ich777/mos-image-sha" target="_blank" rel="noopener noreferrer">🧩 MOS image-sha</a></li>
                <li><a href="https://github.com/ich777/mos-mergerfs" target="_blank" rel="noopener noreferrer">💾 MOS mergerfs</a></li>
                <li><a href="https://github.com/ich777/mos-snapraid" target="_blank" rel="noopener noreferrer">💾 MOS SnapRAID</a></li>
                <li><a href="https://github.com/ich777/mos-docker-watchdog" target="_blank" rel="noopener noreferrer">🐶 MOS docker-watchdog</a></li>
              </ul>
              <h4>💾 MOS Misc Custom Repositories</h4>
              <ul>
                <li><a href="https://github.com/ich777/mos-boot-files" target="_blank" rel="noopener noreferrer">💾 MOS Boot Files</a></li>
                <li><a href="https://github.com/ich777/mos-grub" target="_blank" rel="noopener noreferrer">💾 MOS GRUB</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="container margin-vert--xl text--center">
          <h2>👋 See MOS in Action</h2>
          <p className="margin-bottom--lg">Here's what the MOS WebUI looks like:</p>
          <div className="margin-bottom--xl">
            <img 
              src="https://mos-official.net/assets/dashboard_dark.png" 
              alt="MOS Dashboard" 
              className="shadow--lg"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
        
        <HomepageFeatures />
      </main>
    </Layout>
  );
}