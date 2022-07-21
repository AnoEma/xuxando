const TelegramBot = require('node-telegram-bot-api');

//const token = '5317064793:AAFRYYDn5VJvu54xRlnYN_bNGABFbJcxZKk';
const token = '5339424367:AAFw0pHRxe_FDNZxvO24bB6WQa-aCJeTF-w';

const bot = new TelegramBot(token, {polling: true});

const contId = -1001699646709;

bot.onText(/\/echo (.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1];

  console.log(chatId);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/saudacao (.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1];

  console.log(chatId);

  bot.sendMessage(contId, resp);
});




bot.on('message', (msg) => {
  
  const chatId = msg.chat.id;
  var textMsg = msg.text;

  const regexpSize = /([0-9]+) - ([0-9]+)/;
  const regexpSizeUnico = /([0-9])/;
  const url = 'https://www.bet365.com/#/AVR/B24/K';


  const macthTimeUnico = textMsg.match(regexpSizeUnico);
  const macthTime = textMsg.match(regexpSize);
 

  var xuxa = null;
  var teste = null;

  
  if(macthTimeUnico == null){
    console.log("Valor está nulo " + macthTime +" "+ new Date);

   if(macthTimeUnico != null){
     console.log("Mundaça de valor " + macthTime + "para "+ macthTimeUnico)

     xuxa = textMsg.replace(macthTimeUnico[0], 'teste');

     const macthMoto = xuxa.match(regexpSize);

     teste = "🏍 Alerta Família Speed 🏍 \n" 
            + '⏱ Minuto ⇨ '+ macthTimeUnico[0] +'\n'
            + '🏍 Apostar nos pilotos ⇨  '+ macthMoto[0] + '\n'
            + 'Link -> '+ url + '\n\n'
            + 'Manda um coração ou joinha se acertou familia';
    }else{
    return;
    }
  }
  else{
    console.log("Mact Time " + macthTime[0])
  xuxa = textMsg.replace(macthTime[0], 'teste');
  const macthMoto = xuxa.match(regexpSize);

  teste = "🏍 Alerta Família Speed 🏍 \n" 
          + '⏱ Minuto ⇨ '+ macthTime[0] +'\n'
          + '🏍 Apostar nos pilotos ⇨  '+ macthMoto[0] + '\n'
          + 'Link -> '+ url + '\n\n'
          + 'Manda um coração ou joinha se acertou familia';
  }

  console.log("Enviando dados " + new Date);

  bot.sendMessage(contId, teste);
});