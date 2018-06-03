const Discord = require('discord.js')
const pickRandom = require('pick-random')

const client = new Discord.Client()
const tokens = require('./secret/tokens.json')

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setActivity('Clinical Psychology')
})

client.on('message', async message => {
  // ignore other bots
  if (message.author.bot) return

  const channel = message.channel
  const content = message.content.toLowerCase()

  if (content.includes('jp') || content.includes('jordan') || content.includes('peterson') || content.includes('iq')) {
    channel.send(pickRandom([
      "I don't think that you have any insight whatsoever into your capacity for good until you have some well-developed insight into your capacity for evil.",
      "If you can't understand why someone is doing something, look at the consequences of their actions, whatever they might be, and then infer the motivations from their consequences. ",
      "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it.",
      'The purpose of life is finding the largest burden that you can bear and bearing it.',
      `If you fulfill your obligations everyday you don't need to worry about the future.`,
      `To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order.`,
      `If you don't say what you think then you kill your unborn self.`,
      `Intolerance of others’ views (no matter how ignorant or incoherent they may be) is not simply wrong; in a world where there is no right or wrong, it is worse: it is a sign you are embarrassingly unsophisticated or, possibly, dangerous.`,
      `Don’t use language instrumentally`,
      `It took untold generations to get you where you are. A little gratitude might be in order.`,
      `If you're going to insist on bending the world to your way, you better have your reasons.`,
      `The things that pose the greatest threats to your survival are the most real things.`,
      `Our choices determine the destiny of the world. By making a choice, you alter the structure of reality.`,
      `There are some games you don't get to play unless you are all in.`,
      `That's pure narcissism by the way.`
    ]))
  }
})

client.login(tokens.discordToken)