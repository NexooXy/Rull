import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Done', author, json.url, [['waifu', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(waifu)$/i
handler.limit = true
export default handler
