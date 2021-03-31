module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        message.channel.send(`Pingity pong! The ping latency from you to me is around **${Date.now() - message.createdTimestamp} MS*. And the API latency's about **${Math.round(client.ws.ping)} MS.** 🏓`); // Send a message to discord with the data);
    },
};