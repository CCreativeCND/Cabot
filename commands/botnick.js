const config = require("../botdata/config.json");

module.exports = {
	name: 'botnick',
	description: 'Change\'s the bot\'s nickname in the server',
  usage: '<nickname>',
  perms: 'MANAGE_NICKNAMES',
  category: 'CORE',
	async execute(client, message, args, guildConf) {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.react(config.denyEmoji);

    message.guild.members.get(client.user.id).setNickname(args.join(" "));
    message.delete().catch(O_o=>{});
	},
};