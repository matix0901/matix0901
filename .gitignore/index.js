const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjkyMTcwOTE5ODI0NzE5ODcy.Xnqo0A.xr6GMdoy0hkbv826tcRwp_VaO8w")

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("683493291551227907").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " !")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("683493291551227907").send("sniff... " + user.user.username + " a quitté le serveur !")
})

client.on("message", message=>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("Bonjour " + message.author.username + " !")
    }
});
