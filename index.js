const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login('MTQ1OTYyOTY0MTIyMzM3MjgxMw.GLiP9W.rAeUgGA-oR5zzQlYC6ixnbv7YsmNIWNltlMyjM');  // Replace with your bot token
