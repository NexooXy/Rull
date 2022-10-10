const rewards = {
    exp: 900000000000,
    money: 900000000000,
    limit: 900000000000,
    trash: 900000000000
    potion: 900000000000
    gold: 900000000000
    diamond: 900000000000
    legendary: 900000000000
    mythic: 900000000000
}

const cooldown = 01
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastcheat < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*HENGKER WIBU TYZ*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat|cit|ngecheat)$/i
handler.owner = true
handler.cooldown = cooldown

export default handler
