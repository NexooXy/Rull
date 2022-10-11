let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
Welcome To Anonymous Chat

Command:
#start
⟩ untuk memulai anonymous chat

#skip
⟩ Untuk skip anonymous chat

#stop
⟩ untuk berhenti anonymous chat

#sendkontak
⟩ untuk mengirim kontak/nomor ke Anon chat

🎀 Rules:
Jangan spam
Jangan di salah gunakan
Jangan rasis/Toxic

Melanggar Rules di atas akan di block permanent 
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: '🔍 Start', id: '.start'}},
    {index: 2, quickReplyButton: {displayText: '📍 Menu', id: '.menu'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['anonymous']
handler.tags = ['anonymous']
handler.command = /^(anonymous|anonchat|Anon|chatanon)$/i

export default handler
