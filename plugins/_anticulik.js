let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*BOT ON 24 JAM & ADA FITUR STORE*
╭──「 *_SEWA BOT_* 」
│❏  1 MINGGU : IDR 3.000 (3K)
│❏  1 BULAN : IDR 6.000 (6K)
│❏  PERMANEN : IDR 10.000 (10K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  *ADA FITUR STORE*
│❏  FITUR BANYAK
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME ( OTOMATIS )
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏ https://bit.ly/LinkGrubBotz
╰────
╭─[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
│❏ wa.me/6283852843517?text=jadi+bot
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  QRIS ALL PAYMENT
╰────

*_📍BOT INI MEMAKAI PANEL BUKAN TERMUX_*
*_/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*
*_📍 BERGARANSI FULL_*



╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR 25.000 (25K)
╰────
╭─ [ FASILITAS ]
│❏ *ADA FITUR STORE*
│❏ *ADA FITUR NO INTERNET*
│ *(JIKA HP/DATA/WIFI KALIAN MATI*
│  *BOT  TTP NYALA*
│❏  *BISA REQ YG BOT FULL FITUR BUG*
│❏  CUMA SCAN QR DOANG JADI                
│     BOT + OWNER
│❏  FITUR BOT NYA BANYAK
│❏  BANYAK FITUR LANGKA
│❏  BUKAN BOT WIBUSOFT
│❏  DI SETTING IN SELLER
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
│❏  BISA JADI KANG BUG
│❏  NAMA BOT, NAMA OWNER, NOMOR.OWNER,
│     DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
│❏ wa.me/6283852843517?text=jadi+bot
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  QRIS ALL PAYMENT
╰────

*_📍BOT INI MEMAKAI PANEL BUKAN TERMUX_*
*_/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*
*_📍 BERGARANSI FULL_*
Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
