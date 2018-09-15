const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login("NDQ3NzUxMzY0NzY1MDI0MjU3.DnzUcA.RvAu_pOQeoKYrvSe7c6JNqNytlY");


client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("MCAstérix  | 1.12.2")
});


client.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');

    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FFCC33") 
        .setTitle("Atonservix ! :robot:")
        .setDescription("Voici toutes les commandes:")
        .addField("!aide", "Affiche toutes les commandes pour t'aider.")
        .addField("!plan", "Affiche le plan pour te guider dans le parc.")
        .addField("!news", "Soyez au courrant de toutes les nouveautés.")
        .addField("!formulaire", "Don du lien du __dernier__ formulaire de recrutement.")
        .addField("!infos", "Informations relatives au serveur et au bot.")
        .setFooter("Version 1.0")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide.")
    }

    if(message.content === prefix +"infos") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#FFCC33")
        .setTitle("Atonservix ! :robot:")
        .addField("Nom:", `${client.user.tag}`, true)
        .addField("Descriminateur du bot:", `#${client.user.discriminator}`)
        .addField("Nombres de membres:", message.guild.members.size)
        .addField("Nombre de catégories et de salons:", message.guild.channels.size)
        .setFooter("Version 1.0")
        message.channel.sendMessage(info_embed)

    }
    
    if(message.content === prefix + "plan"){
        message.reply("Atonservix ! :robot:")
        message.channel.send("https://www.parcasterix.fr/preparez-votre-visite/plan-interactif-parc")

    }

    if(message.content === prefix + "news"){
        message.reply("Atonservix ! :robot:")
        message.channel.send("Le défi de César est bientôt disponible !")

    }

    if(message.content === prefix + "formulaire"){
        message.reply("Atonservix ! :robot:")
        message.channel.send("https://docs.google.com/forms/d/e/1FAIpQLSezCpyYnqeC4nP4fdNmFjynh62nRoMGZEb0Z4o1-dRu7wiaQw/viewform")

    }

});
