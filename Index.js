const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    jidDecode,
    proto,
    getContentType,
    delay
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const P = require("pino");
const config = require("./config");
const { serialize } = require("./lib/serialize");
const { Message, Image, Video, Sticker } = require("./lib/Base");
const store = makeInMemoryStore({ logger: P().child({ level: "silent", stream: "store" }) });
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config();

// Keep Alive for Render
app.get("/", (req, res) => res.send("Dark_MD Bot is Running!"));
app.listen(port, () => console.log(Server running on port ${port}));

async function start() {
    const { state, saveCreds } = await useMultiFileAuthState("session");
    const { version } = await fetchLatestBaileysVersion();
    
    console.log("Starting Connection...");
    
    const conn = makeWASocket({
        logger: P({ level: "silent" }),
        printQRInTerminal: true, // Auto-switches to pairing if USE_PAIRING_CODE is set
        auth: state,
        version,
        browser: ["Dark_MD", "Chrome", "1.0.0"],
    });

    store.bind(conn.ev);

    conn.ev.on("messages.upsert", async (m) => {
        if (m.type !== "notify") return;
        let msg = await serialize(JSON.parse(JSON.stringify(m.messages[0])), conn);
        if (!msg.message) return;
        
        // Plugin Handler Loop
        const events = require("./lib/events");
        events.commands.map(async (command) => {
            if (command.pattern && command.pattern.test(msg.body)) {
                // Execute command
                try {
                    await command.function(msg, msg.body.match(command.pattern));
                } catc
