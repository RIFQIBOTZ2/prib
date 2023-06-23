let handler = async m => m.reply(`
Fitur Kick Di hapus karena nomor bot rawan terkena banned
`.trim()) // Tambah sendiri kalo mau
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick)$/i

module.exports = handler