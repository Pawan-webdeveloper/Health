# 🏥 HealthPass

> Store, manage, and share your health credentials securely on the blockchain — accessible anywhere, anytime.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![Blockchain](https://img.shields.io/badge/Blockchain-Enabled-green?logo=ethereum)](https://ethereum.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://health-6cce-8jyaj6amw-pawan572893-gmailcoms-projects.vercel.app/)

---

## 🌐 Live Demo

👉 **[https://health-6cce-8jyaj6amw-pawan572893-gmailcoms-projects.vercel.app/](https://health-6cce-8jyaj6amw-pawan572893-gmailcoms-projects.vercel.app/)**

Deployed on [Vercel](https://vercel.com/). No setup required — just connect your Web3 wallet and start managing your health credentials.

---

## 📋 Overview

**HealthPass** is a decentralized health credential management platform that leverages blockchain technology to store and retrieve medical records, prescriptions, vaccination history, and other health documents. By storing credentials on-chain, HealthPass ensures that your health data is tamper-proof, always available, and under your full control — no single point of failure, no intermediary.

Whether you're at a hospital, crossing a border, or visiting a new doctor, your verified health credentials are just a wallet connect away.

---

## ✨ Features

- **Blockchain Storage** — Health credentials are stored immutably on-chain, ensuring authenticity and tamper resistance.
- **Instant Access** — Retrieve your credentials in seconds from anywhere in the world without relying on a central server.
- **Decentralized Identity** — You own your data. No hospital, insurer, or third party controls your records.
- **Secure Sharing** — Share specific credentials with healthcare providers using time-limited or permission-gated access.
- **Verifiable Records** — All credentials are cryptographically signed and verifiable by any authorized party.
- **Modern UI** — Clean, responsive interface built with React and Tailwind CSS for a seamless user experience.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| Blockchain | Ethereum / EVM-compatible chain |
| Wallet Integration | MetaMask / Web3 wallet |
| Linting | ESLint |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Web3 wallet browser extension (e.g., [MetaMask](https://metamask.io/))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Pawan-webdeveloper/Health.git

# 2. Navigate into the project directory
cd Health

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized production build will be output to the `dist/` folder.

---

## 📁 Project Structure

```
Health/
├── public/
│   └── images/          # Static assets and images
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages/routes
│   ├── utils/           # Blockchain & helper utilities
│   └── main.jsx         # Application entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🔗 How It Works

1. **Connect Wallet** — Users connect their Web3 wallet (e.g., MetaMask) to authenticate their identity.
2. **Upload Credentials** — Health documents (e.g., prescriptions, lab reports, vaccination records) are uploaded and stored on-chain.
3. **Access Anywhere** — Credentials can be retrieved instantly by the owner using their wallet from any device.
4. **Share Securely** — Users can grant healthcare providers temporary or permanent access to specific records via smart contract permissions.
5. **Verify Instantly** — Third parties can verify the authenticity of any credential directly on the blockchain without needing to contact the issuer.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing ESLint configuration before submitting.

---

## 👤 Author

**Pawan** — [@Pawan-webdeveloper](https://github.com/Pawan-webdeveloper)

---

> *HealthPass — Because your health data should be as portable as you are.*
