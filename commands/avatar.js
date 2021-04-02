module.exports = {
    name: "avatar",
    description: "Sends user's avatar.",
    execute(message, args, client, Discord) {
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Avatar`)
        setImage(member.displayAvatarUrl())
        message.channel.send(embed)
    },
};