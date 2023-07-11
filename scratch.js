/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)

nlp.verbose('tagger')
let arr = [

  // verbs
  // `The couple wed in a traditional church`,
  // `Fish surface to breathe in oxygen`,
  // `The NGO sponsors educational programs`,
  // `The bakery smells like freshly baked bread.`,
  // `Don't let one mistake ruin your day.`,
  // `The hammer pounds the nail`,
  // `He is trying to perfect his piano skills.`,
  // `They will fast before`,
  // `They forgot to bill me`,
  // `The news is broadcast at 6 p.m.`,
  // `She is determined to attain her fitness goals.`,
  // `The seal barks to communicate with others.`,
  // `He always tries to best his personal records.`,
  // `Please bill me for the dinner tonight.`,
  // `The plumber will bill you for the repairs.`,
  // `They forgot to bill me for the subscription.`,
  // `I will bill you for the work done.`,
  // `The bomb exploded, causing widespread damage.`,
  // `How much does this shirt cost?`,

  // 'of'
  // 'A slice of heaven',
  // `Please dispose of your trash properly.`,
  // `They are planning to dispose of the company's assets.`,
  // `I dream of becoming a doctor one day.`,
  // `They dream of owning their own business.`,

  // `The hammer pounds the nail into the wood.`,
  // `I couldn't help but sob when I heard the sad news.`,
  // `The old man stoops to pet the cat.`,
  // `The teacher welcomes questions from students.`,

  // noun|verb|adjective:
  // 'average',
  // 'welcome',

  // 'advertising'

  // 'gets compounded',
  // 'always gets flirted with',


  // 'reports stated',
  // nouns
  // `She manages the company's social media accounts.`,//account/noun 
  // `The company invested a lot of money in advertising.`,//advertising/noun 
  // 'The lower the reins, the stronger the action',
  // 'Ideas are welcome',
  // 'days the average American receives each Year',
  // 'and its sprawling metropolis.',
  // 'She shoved her hand under my mouth',
  // `I watch a lot of cooking channels on YouTube.`,//channel/noun 
  // `The police arrested the criminal yesterday.`,//criminal/noun 
  // `Can you provide more details about the project?`,//detail/noun 
  // `I love the attention to detail in this design.`,//detail/noun 
  // `The company received funding for its new project.`,//funding/noun 
  // `I love playing video games with my friends.`,//game/noun 
  // `The giant towered over the city, casting a long shadow.`,//giant/noun 
  // `They paid off their student loans after graduation.`,//loan/noun 
  // `My sister is a minor and still goes to high school.`,//minor/noun 

  // %Adj|Noun% %Noun|Verb%
  `He turned off the television screen before leaving.`,//screen/noun 
  'investigating unfair trade practices',
  `She is a senior studying computer science.`,//senior/noun 
  `The little girl has short hair.`,//short/noun 
  `I need to fix the kitchen sink.`,//sink/noun 
  `I am scared of snakes, they're so creepy.`,//snake/noun 
  `Can you help me with this spell?`,//spell/noun 
  `The magician performed an incredible magic spell.`,//spell/noun 
  `Her stay in the city was short but memorable.`,//stay/noun 
  `She is seeking emotional support after the loss.`,//support/noun 
  `The suspect denied any involvement in the crime.`,//suspect/noun 
  `The company set ambitious sales targets.`,//target/noun 
  `The children enjoyed their Halloween treats.`,//treat/noun 
  `His first try at cooking ended in disaster.`,//try/noun 
  `I always make good use of my time.`,//use/noun 
  `I enjoy taking long walks in the park.`,//walk/noun 
  `There was a warning about heavy rain.`,//warning/noun 
  `He threw a coin into the well.`,//well/noun 
  `She ordered a plate of buffalo wings at the restaurant.`,//wing/noun 
  `The sun provides light during the day.`,//light/noun 
  `She turned on the light in the room.`,//light/noun 
  `The light in the room was very bright.`,//light/noun 
  `Turn off the light when you leave.`,//light/noun 
  `The forest is filled with tall trees and lush woods.`,//wood/noun 


  // adjectives
  `He is always accommodating to his guests.`,//accommodating/adjective   
  `The company offers advanced training programs for employees.`,//advanced/adjective   
  `The sunset over the ocean looked absolutely amazing.`,//amazing/adjective   
  `The comedian's jokes were incredibly amusing and had everyone in stitches.`,//amusing/adjective   
  `He is known for his anarchist views.`,//anarchist/adjective   
  `The loud music was really annoying.`,//annoying/adjective   
  `The constant interruptions during the movie were annoying.`,//annoying/adjective   
  `I need a back pillow for my chair.`,//back/adjective   
  `I find history classes to be boring and uninteresting.`,//boring/adjective   
  `He wore a bright orange shirt to the party.`,//bright/adjective   
  `My mother is always caring and supportive.`,//caring/adjective   
  `The doctor provided caring and empathetic treatment.`,//caring/adjective   
  `Learning a new language can be challenging.`,//challenging/adjective   
  `Solving complex math problems can be challenging.`,//challenging/adjective   
  `Playing chess against a skilled opponent can be challenging.`,//challenging/adjective   
  `Skiing down a steep slope can be challenging.`,//challenging/adjective   
  `The cookies were soft and chewy.`,//chewy/adjective   
  `The steak was too tough and not chewy enough.`,//chewy/adjective   
  `The candy bar had a deliciously chewy texture.`,//chewy/adjective   
  `The bread was stale and not chewy at all.`,//chewy/adjective   
  `We're getting close to the finish line.`,//close/adjective   
  `The book's characters are compelling and relatable.`,//compelling/adjective   
  `The artist's work is visually compelling and unique.`,//compelling/adjective   
  `The instructions for this game are confusing.`,//confusing/adjective   
  `The road signs in this town are confusing.`,//confusing/adjective   
  `The new computer program is confusing to use.`,//confusing/adjective   
  `I find the English language confusing sometimes.`,//confusing/adjective   
  `The company offers continuing professional development programs.`,//continuing/adjective   
  `The subway is always crowded during rush hour.`,//crowded/adjective   
  `The beach was crowded with tourists on a sunny day.`,//crowded/adjective   
  `The fox used cunning tactics to catch its prey.`,//cunning/adjective   
  `The thief used cunning methods to steal the valuable painting.`,//cunning/adjective   
  `With his cunning smile, he convinced them to trust him.`,//cunning/adjective   
  `The movie was filled with daring stunts and action.`,//daring/adjective   
  `The food at the restaurant was disappointing, it lacked flavor.`,//disappointing/adjective   
  `The concert was disappointing, the singer was off-key.`,//disappointing/adjective   
  `The weather on our vacation was disappointing, it rained every day.`,//disappointing/adjective   
  `He was so drunk that he couldn't walk straight.`,//drunk/adjective   
  `He acted foolishly while he was drunk.`,//drunk/adjective   
  `I don't like being around drunk people.`,//drunk/adjective   
  `I wake up early every morning.`,//early/adjective   
  `Her flight was delayed, arriving early evening.`,//early/adjective   
  `The bakery opens early in the morning.`,//early/adjective   
  `The room is empty, there are no chairs or tables.`,//empty/adjective   
  `The glass was empty, so I refilled it with water.`,//empty/adjective   
  `Her warm smile and kind nature are truly endearing.`,//endearing/adjective   
  `The character's quirky behavior makes them endearing to the audience.`,//endearing/adjective   
  `The ancient ruins are enduring symbols of history.`,//enduring/adjective   
  `She felt faint after running for an hour.`,//faint/adjective   
  `She has fair hair and blue eyes.`,//fair/adjective   
  `He always plays fair in sports.`,//fair/adjective   
  `The restaurant gave us free dessert after the meal.`,//free/adjective   
  `The pizza had a greasy layer on top.`,//greasy/adjective   
  `He wiped his hands on a greasy cloth.`,//greasy/adjective   
  `Her hair became greasy after not washing it.`,//greasy/adjective   
  `The mechanic had greasy hands from working on the car.`,//greasy/adjective   
  `The holy book is sacred to believers.`,//holy/adjective   
  `The holy man blessed the crowd with peace.`,//holy/adjective   
  `The holy site is a place of worship.`,//holy/adjective   
  `The holy water is used for baptisms.`,//holy/adjective   
  `The puppy looked innocent with its big, round eyes.`,//innocent/adjective   
  `His speeches are always inspiring and motivate me.`,//inspiring/adjective   
  `The sunset over the ocean was truly inspiring.`,//inspiring/adjective   
  `The art exhibition was filled with inspiring works.`,//inspiring/adjective   
  `The internet provides instant access to information.`,//instant/adjective   
  `The driver checked his left mirror before turning.`,//left/adjective   
  `My left shoe is missing!`,//left/adjective   
  `She has long, blonde hair.`,//long/adjective   
  `The rainforest is home to many lush plants.`,//lush/adjective   
  `She walked through the lush green meadow.`,//lush/adjective   
  `The kids were being mean to each other.`,//mean/adjective   
  `He has a medium build and is quite strong.`,//medium/adjective   
  `It is important to have strong moral values.`,//moral/adjective   
  `The movie explores complex moral dilemmas.`,//moral/adjective   
  `Her waist looked narrow in the dress.`,//narrow/adjective   
  `His comments about her appearance were offensive.`,//offensive/adjective   
  `The movie contains offensive language and violence.`,//offensive/adjective   
  `She found his behavior towards her offensive.`,//offensive/adjective   
  `He was given an official warning for breaking the rules.`,//official/adjective   
  `I left the window open for fresh air.`,//open/adjective   
  `He looks pale because he is sick.`,//pale/adjective   
  `Her pale blue eyes sparkled with excitement.`,//pale/adjective   
  `The princess wore a pointy hat to the party.`,//pointy/adjective   
  `The mountain peak had a pointy shape.`,//pointy/adjective   
  `The witch's nose was long and pointy.`,//pointy/adjective   
  `The pencil has a pointy tip.`,//pointy/adjective   
  `The hotel room was pricy but luxurious.`,//pricy/adjective   
  `Eating at that restaurant can be pricy.`,//pricy/adjective   
  `This brand of shoes is known to be pricy.`,//pricy/adjective   
  `The new restaurant in town has promising reviews.`,//promising/adjective   
  `I don't tolerate racist comments.`,//racist/adjective   
  `She was accused of making racist remarks.`,//racist/adjective   
  `We need to address the issue of racist behavior.`,//racist/adjective   
  `He was criticized for his racist beliefs.`,//racist/adjective   
  `The seasoned chef prepared a delicious meal.`,//seasoned/adjective   
  `She is a seasoned traveler and knows the best places to visit.`,//seasoned/adjective   
  `The seasoned politician delivered a powerful speech.`,//seasoned/adjective   
  `He is a seasoned player and always performs well.`,//seasoned/adjective   
  `I find it shocking that people still believe that.`,//shocking/adjective   
  `The price of the stock has been stable for months.`,//stable/adjective   
  `He keeps his emotions stable in stressful situations.`,//stable/adjective   
  `The bridge is built on stable foundations.`,//stable/adjective   
  `The bride looked stunning in her white dress.`,//stunning/adjective   
  `The super cute puppy is playing in the park.`,//super/adjective   
  `It was surprising to see her there.`,//surprising/adjective   
  `Her sudden arrival was surprising to everyone.`,//surprising/adjective   
  `He became testy after waiting in line for hours.`,//testy/adjective   
  `Her testy remark upset everyone at the meeting.`,//testy/adjective   
  `The testy customer complained about the slow service.`,//testy/adjective   
  `She had a testy response to his question.`,//testy/adjective   
  `Working a full day can be tiring.`,//tiring/adjective   
  `The problem is trifling and can be easily solved.`,//trifling/adjective   
  `Don't waste your time on trifling matters.`,//trifling/adjective   
  `She dismissed his trifling comment with a wave of her hand.`,//trifling/adjective   
  `I'm tired of dealing with trifling people.`,//trifling/adjective   
  `The ground was wet after the rain.`,//wet/adjective   




  // 'he tries to improve her English',
  // 'he learns to play tennis',
  'he learns to code',
  'he tried to code',
  'he travelled around the world',
  'he thought about toronto',

  // 'gets paid',
  // 'gets drunk',
  // 'becoming involved',
  // 'becoming entangled',


  '(The cat) jumped onto the counter. [It] knocked over a glass.',

  'The waiter emptied the water ',
  'can\'t help but fork',
  // 'poviding care',
  'We take walks in the park.',
  'the tree will grow',
  'They listen to music on their way to work.',
  // `find just one law abiding citizen`,
  // 'sensationally',
  // 'catch',
  // 'teach',
  // 'buy',
  // 'break',
  // 'sink',
  // 'know',
  // 'run',
  // 'swim',
  // 'sea of japan',
  // 'adriadic sea',
  // 'more broken promises',
  // 'cheerful',
  // 'secure',
  // 'we will convert',
  // 'matchmaking',
  // "would be amusing",
  // "would be outstanding",

  // 'please do not speak',
  // 'is a tough read',
  // 'spot on',
  // 'up to date',
  // 'sleepier',
  // 'guiltier',
  // 'clean',

  // 'drunk',
  // 'hearty',
  // 'holy',
  // 'leery',

  // 'solitary',
  // 'cynically',
  // 'hairy',
  // 'richest',

  // 'jet',

  // "sittin",
  // "ridin",
  // "jus",
  // "allergic",
  // "listed",

  // "quo",
  // "triple",
  // "foremost",
  // "friends",
  // "guys",

  // "playin",
  // "waitin",
  // "gettin",
  // "comin",
  // "livin",
  // "sayin",
  // "doin",
  // "lovin",


  // "tone",
  // "shore",

  // "i drive to the cottage",
  // "He will study biology in college.",
  // "drive",
  // "vie",
  // "convoluted",
  // "rooted",
  // "trumpeted",

  // "wad",
  // "sub",



  // 'overtime',


  // "small fragment",

  // 'manufacturing',
  // 'stream',
  // 'cave',
  // 'what companies are doing is',


]
let doc = nlp(arr[0]).debug()
// let p = doc.pronouns().debug().refersTo().debug()
console.log(doc.verbs().conjugate())
// doc.match('{sway/verb}').debug()



// // doc.verbs().toPastParticiple()
// console.log(doc.verbs().conjugate())
// doc.verbs().debug()

// console.log(doc.text())
// console.log(doc.compute('root').text('root'))
// console.log(doc.json({ root: true })[0])


// let doc = nlp('she ran to the sea to see what he could see')
// doc.sentences().subjects().debug()
// let m = doc.match('[<date>#Value] [<month>#Month]')
// m.debug()
// m.groups().date.debug()
// m.groups().month.debug()


// console.log(nlp.parseMatch('[<month>#Month] [<date>#Value] [<year>#Year]?'))
// console.log(nlp.parseMatch('[<month>#Month] [<date>#Value] [<year>#Year?]'))
// let m = doc.match('[<month>#Month] [<date>#Value] [<year>#Year]?')
// console.log(m.groups())



