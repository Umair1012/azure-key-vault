# 🚀 Node.js & Azure SDK Setup Guide

This project demonstrates how to install the latest version of Node.js, npm, and Azure SDK packages on Ubuntu Linux.

---

# ⚡ Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

---

# 🔧 Install Curl

```bash
sudo apt install -y curl
```

---

# 🟢 Install Latest Node.js & npm

```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
```

---

# ✅ Verify Installation

```bash
node -v
npm -v
```

Example Output:

```bash
v24.x.x
11.x.x
```

---

# ☁️ Install Azure SDK Packages

Install Azure Identity and Azure Key Vault packages:

```bash
npm install @azure/identity @azure/keyvault-secrets chalk ora boxen dotenv
```

---

# 📦 Initialize Node.js Project (Optional)

```bash
npm init -y
```

# 📦 Create .env

```bash
KEY_VAULT_NAME=myKeyVault123
SECRET_NAME=DbPassword
```

---

# 📚 Installed Packages

| Package | Description |
|----------|-------------|
| `@azure/identity` | Azure authentication library |
| `@azure/keyvault-secrets` | Azure Key Vault secrets SDK |

---

# 🛠️ Full Installation Command

```bash
sudo apt update && sudo apt upgrade -y && \
sudo apt install -y curl && \
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - && \
sudo apt install -y nodejs && \
node -v && npm -v && \
npm install @azure/identity @azure/keyvault-secrets
```

---

# 📁 Project Structure

```bash
project/
│── package.json
│── node_modules/
│── index.js
│── README.md
```

---

# 🚀 Technologies Used

- Node.js
- npm
- Azure SDK
- Azure Key Vault
- Ubuntu Linux

---

# 👨‍💻 Author

By Miseacademy Team

---
