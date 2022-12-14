import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'ᴋᴀᴍᴜ ᴍᴀsɪʜ ᴅɪ ᴅᴀᴍ ɢᴀᴍᴇ ᴋᴇᴛɪᴋ *nyerah* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇʀᴀʜ'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('ᴘᴀʀᴛɴᴇʀ ᴛɪᴄ ᴛᴀᴄ ᴛᴏᴇ ᴅɪᴛᴇᴍᴜᴋᴀɴ!')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
ɪᴅ ʀᴏᴏᴍ: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Mᴇɴᴜɴɢɢᴜ @${room.game.currentTurn.split('@')[0]}
ᴋᴇᴛɪᴋ ᴀɴɢᴋᴀ 1 sᴀᴍᴘᴀɪ 9 ᴜɴᴛᴜᴋ ʙᴇʀᴍᴀɪɴ

Kᴇᴛɪᴋ *nyerah* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇʀᴀʜ
`.trim()
        if (room.x !== room.o) await conn.sendButton(room.x, str, author, ['sᴜʀʀᴇɴᴅ/ᴍᴇɴʏᴇʀᴀʜ', 'nyerah'], m, {
            mentions: conn.parseMention(str)
        })
        await conn.sendButton(room.o, str, author, ['Nyerah', 'nyerah'], m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini
${usedPrefix}${command} ${text}` : ''))
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/
handler.group = true
export default handler
