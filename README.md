# Dark_MD Bot ( Based)

A customized WhatsApp bot based on the [Levanter](😋😈😋) architecture, optimized for performance with a reduced feature set.

## 🚀 Features
- Lightweight: Only essential plugins included.
- Pairing Code: Supports login via pairing code (no QR scan needed).
- Render Ready: Includes Keep-Alive server for 24/7 uptime.

## 🛠️ Installation

### 1. Deploy on Render
1. Fork this repository.
2. Create a new Web Service on Render.
3. Connect your forked repo.
4. Add Environment Variables (see below).

### 2. Manual Installation
git clone https://github.com/yourusername/dark-md-bot
cd dark-md-bot
yarn install
npm start
## ⚙️ Configuration (config.env)
Create a config.env file in the root directory:

SESSION_ID=YOUR_SESSION_ID
PREFIX=.
STICKER_PACKNAME=Dark_MD
SUDO=22900000000
VPS=true
## 📝 Commands
- .tagall - Tag everyone in group
- .kickall - Kick non-admins
- .ping - Check latency
- .menu - Show commands
- .open/close - Manage group settings

---
*Based on Levanter Bot by lyfe00011
