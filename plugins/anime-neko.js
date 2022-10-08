import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Done`, json.url, json.url, [['Next', usedPrefix + command]], m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
export default handler
