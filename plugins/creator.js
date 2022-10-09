let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ʙᴏᴛ

ʀᴜʟʟ:
@${nomorown.split`@`[0]}


ʀᴜʟᴇs:
ᴊᴀɴɢᴀɴ ᴄʜᴀᴛ ᴀɴᴇʜ ᴀɴᴇʜ ᴋᴇ ᴏᴡɴᴇʀ ʙᴏᴛ
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ᴋᴇ ᴏᴡɴᴇʀ ʙᴏᴛ
ᴊᴀɴɢᴀɴ ᴄᴀʟʟ ᴏᴡɴᴇʀ ʙᴏᴛ

ᴄ ʟ ᴏ ᴜ ᴅ      ʙ ᴏ ᴛ
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `No Bio`
  let teks = 'ᴘɪʟɪʜ ᴅɪ ʙᴀᴡᴀʜ'
const sections = [
   {
	title: `░ ⃞ׄ🪄 ᴏᴡɴᴇʀ  !! ⥽`,
	rows: [
	    {title: "ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ", rowId: ".owner nomor"},
	]
    },{
	title: `░ ⃞ׄ🪄 Support  !! ⥽`,
	rows: [
	    {title: "ᴅᴏɴᴀsɪ", rowId: ".owner nomor"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *ᴄʀᴇᴀᴛᴏʀ* ${htka}`,
  buttonText: "ᴄʟɪᴄᴋ !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator|pemilikbot|ownerbot|creatorbot|nomorowner|rull)/i

export default handler
