const axios = require('axios');

let Giftedd = async (m, { Gifted, sender }) => {
  const repoUrl = global.giftedApiRepo;
  const response = await axios.get(repoUrl);
  const repoData = response.data;
  const { name, forks_count, stargazers_count, html_url, created_at, updated_at, owner } = repoData;

  let giftedMess = `Hello *@${sender},*\nThis is *Muller-Xmd,* A Telegram Bot Built by *@${global.ownerUsername},* Enhanced with Amazing Features to Make Your Whatsapp Communication and Interaction Experience Amazing\n\n*ʀᴇᴘᴏ ʟɪɴᴋ:* ${global.giftedRepo}\n\n*❲❒❳ ɴᴀᴍᴇ:* ${name}\n*❲❒❳ sᴛᴀʀs:* ${stargazers_count}\n*❲❒❳ ғᴏʀᴋs:* ${forks_count}\n*❲❒❳ ᴄʀᴇᴀᴛᴇᴅ ᴏɴ:* ${new Date(created_at).toLocaleDateString()}\n*❲❒❳ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇᴅ:* ${new Date(updated_at).toLocaleDateString()}\n*❲❒❳ ᴏᴡɴᴇʀ:* ${owner.login}`;

  let giftedButtons = [
    [
      { text: 'Owner', url: `https://t.me/${global.ownerUsername}` },
    ],
    [
      { text: 'Open Repo', url: global.giftedRepo }, 
      { text: 'WaChannel', url: global.giftedWaChannel }
    ]
  ];

  Gifted.reply({ image: { url: global.botPic }, caption: giftedMess, parse_mode: 'Markdown' }, giftedButtons, m);
};

Giftedd.command = ['repo', 'sc', 'script'];
Giftedd.desc = 'Show Bot Repo';
Giftedd.category = ['general'];

module.exports = Giftedd;
