# matix0901const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    message.delete()

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Vous n'avez pas la permissions de faire cela !").then(m => m.delete(5000))
    let user = message.mentions.members.first();
    if(!user) return message.channel.send(":x: Veuillez mentionner un utilisateur valide !").then(m => m.delete(5000))
    if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.channel.send(":x: Vous ne pouvez pas exclure cet utilisateur (permissions insuffisantes").then(m => m.delete(5000))
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(":x: Veuillez indiquer une raison !")
    if(!user.kickable) return message.channel.send(":x: Cet utilisateur ne peut pas etre exclu !")
    user.kick(reason);
}

module.exports.help = {
    name: "Kick"
}
