let handler = async m => m.reply(`
Fitur Add Di hapus karena nomor bot rawan terkena banned
`.trim()) // Tambah sendiri kalo mau
handler.help = ['add']
handler.tags = ['group']
handler.command = /^(add)$/i

module.exports = handler