const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94781876282"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94781876282' 
global.devs = '94781876282';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5GUkkreHREVndqb09ZSmtoSzhSczR3KzZKUzhhWmNKalA5Ryt6ZmtGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTVMN3JGZzdmWkJDNER2WXcxWGgxbytCcTNIM1luR3J4M1FjdisrVFhGYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQStmWmoweWl3S05ZM21wVEcrZmhtMDJzampQcHRwVFc5akJvS1BnMEYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4emkvTVRaWDRvNVF1U1NrRERLQ0FVZldTQ283UFozK25NU2JFNHpJRTBvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGaTN3QUM5YW5MdDhWbFljeUp6dHJJRVR1VTdwQWxzRGNsRlZ4ZGNsR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYyeDVZUFFlNG9QZUFZckpxWmx4aDNiYlN6NWJGc3ZBeXIvL0xvSHAwbTQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbE5LMDA2MmR3REhCV2pyM3NRc0VBc3d1UEpEN1V3cnM3SnYvcGkvQXZLcXBNY2JjcGpBZ0JnVUpnRnVEeE45WUpkUXl5UTU4V3c4UitNZ3ZpbEZDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM2LCJhZHZTZWNyZXRLZXkiOiJES1g3RlNOZ0phRnQ0blJBdG5Wc0FzZDRZb0dScW5aSTNWQzZpZkhKTkxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJESFNTZnNIRlJTbWV2SUJfbnZOR0xnIiwicGhvbmVJZCI6ImJjNzNhZTc5LTI0ZWMtNDIxYy1hYmZhLTUwYjY4OTEwMWNmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bFpqYjR0TU5KbTNRcjdwM3N4L0tlR0dMWnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBvYWNlbGh5VXRqTE5pT1RCQU5BZERBNjJ3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rT212TUdFUDdSNnJJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFFK0tlM09ZOFROQ2JDNTU4dXJ5Ukg3dFpybkpTdjRRUDNNSkxldGlPUkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9Nc2x6MVE3cVlNK3p2UlBnKzVTNC8xSHhvNFM3eVkzSzI4NVk2T2xIQTdWYnV5bDFHbzVqMG1Ma2JaVFR2aG1KUlZ4NC9mcVRVMHNYVWJUTWhBdEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5a0g1WTVmTXlUdDAvY1gzOFE3eER0Tkd4VTBqT2pTczZTTStSd05iM1hnNWhIeHpKejhDWEFqWjduTC9pNDVKcnRldjM0OTFYZit3QTFIc0FmSWdDUT09In0sIm1lIjp7ImlkIjoiOTQ3ODE4NzYyODI6MjVAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODE4NzYyODI6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFJQaW50em1QRXpRbXd1ZWZMcThrUis3V2E1eVVyK0VEOXpDUzNyWWprUSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzIxNzUzOH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'RN',
  packname:  process.env.PACK_NAME || 'RN',
   
  botname:   process.env.BOT_NAME === undefined ? "Resiya-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Resandu Nimsara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
