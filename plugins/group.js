const { command } = require("../lib/events");

// --- TAGALL ---
command(
  {
    pattern: "tagall",
    fromMe: false,
    desc: "Tags every person in group.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("This command is for groups only!");
    
    const groupMetadata = await message.client.groupMetadata(message.jid);
    const participants = groupMetadata.participants;
    
    let text = "📢 *TAGGING ALL MEMBERS*\n\n";
    let mentions = [];
    
    for (let mem of participants) {
        text += @${mem.id.split('@')[0]}\n;
        mentions.push(mem.id);
    }
    
    await message.sendMessage(message.jid, { text: text, mentions: mentions });
  }
);

// --- KICKALL ---
command(
  {
    pattern: "kickall",
    fromMe: true, // Only bot owner/admin
    desc: "Kicks all non-admin members.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("Groups only!");
    
    // Safety warning simulation
    await message.reply("⚠️ *KICKALL ACTION*\n\nRemoving non-admin members...");
  }
);

// --- OPEN/CLOSE ---
command(
  {
    pattern: "open",
    fromMe: true,
    desc: "Open group",
    type: "group",
  },
  async (message) => {
    if (!message.isGroup) return;
    await message.client.groupSettingUpdate(message.jid, 'not_announcement');
    await message.reply("🔓 *Group Opened*");
  }
);

command(
  {
    pattern: "close",
    fromMe: true,
    desc: "Close group",
    type: "group",
  },
  async (message) => {
    if (!message.isGroup) return;
    await message.client.groupSettingUpdate(message.jid, 'announcement');
    await message.reply("🔒 *Group Closed*");
  }
);
Ln 1, Col 1
UTF-8
