const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
  pattern: "alive",
  react: "🌐",
  desc: "Check bot online or no.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // Send image and caption
    await conn.sendMessage(from, {
      image: {
        url: config.ALIVE_IMG
      },
      caption: config.ALIVE_MSG,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363189714152560@newsletter',
          newsletterName: 'SILENT-SOBX-MD',
          serverMessageId: 143
        }
      }
    }, {
      quoted: mek
    })

    // Send audio
    await conn.sendMessage(from, {
      audio: {
        url: 'https://github.com/SILENTLOVER40/SOBX-MD_DATABASE/raw/refs/heads/main/autovoice/AUD-20241110-WA0009.m4a'
      },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363189714152560@newsletter',
          newsletterName: 'SILENT-SOBX-MD',
          serverMessageId: 143
        }
      }
    }, {
      quoted: mek
    })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
