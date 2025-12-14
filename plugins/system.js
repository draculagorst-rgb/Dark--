const { command } = require("../lib/events");

// --- PING ---
command(
  {
    pattern: "ping",
    fromMe: false,
    desc: "Check bot latency",
    type: "main",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.reply("Testing Ping...");
    const end = new Date().getTime();
    await message.reply(📍 *Pong!* ${end - start}ms);
  }
);

// --- MENU ---
command(
  {
    pattern: "menu",
    fromMe: false,
    desc: "Show menu",
    type: "main",
  },
  async (message, match) => {
    await message.reply("Loading Menu...");
    // ASCII menu content here
  }
);

// --- AUTOPROMOTE ---
command(
  {
    pattern: "autopromote",
    fromMe: true,
    desc: "Become admin",
    type: "owner",
  },
  async (message) => {
    if (!message.isGroup) return;
    await message.client.groupParticipantsUpdate(message.jid, [message.sender], "promote");
    await message.reply("⚡ *You are now Admin!*");
  }
);
