/* eslint-disable no-console, no-unused-vars */
import nlp from './src/two.js'
import plg from './plugins/dates/src/plugin.js'
nlp.plugin(plg)

let txt = ''
// tagging/root issues June 10
txt = ``
txt = ``
txt = ` wade boggs was cool`

let doc = nlp(txt).debug()


// let matches = [
//   { match: m }
// ]
// let net = nlp.buildNet(matches)
// doc.sweep(net).view.debug()




// banks wear
// %Plural|Verb% %Noun|Verb%
// upload documents
// %Noun|Verb% %Plural|Verb% 

// let doc = nlp(`he will have been walking`).debug()
// let doc = nlp(`Bob has handled`).debug()
// doc.match('have').tag('Auxiliary')
// doc.verbs().toPresent()
// console.log(doc.has('he has really walked'))
// let net = nlp.buildNet(matches)
// console.log(net)
// console.log(net.hooks)
// let doc = nlp(txt)
// let doc = nlp(`To sit on my throne as the Prince of Bel Air`)
// let m = doc.match(net).debug()
// doc.compute('root')
// console.log(doc.text('root'))
// doc.debug()
// doc.verbs().toFutureTense()
// doc.match(net).debug()
// console.log(doc.has(net))
// doc.debug()
// console.log(doc.has('re-purpose'))

// let txt = `follow-up`
// let doc = nlp(txt)
// console.log(nlp.parseMatch('re-purpose'))
// doc.debug()
// doc.match(txt).debug()

// console.log(usedWords)
// let doc = nlp('Maris Piper potatoes')
// doc.nouns().toSingular()
// console.log(doc.text())

// nlp("Anna's eating lunch.").debug()

// let doc = nlp(`i'm good`)
// doc.verbs().toPresent()
// doc.debug()



// verbphrase parsing issue:
// let doc
// doc = nlp('i was not being walked').debug()
// doc = nlp('i was not really being walked').debug()
// doc.verbs().toInfinitive()
// doc.debug()

// dashes
// let doc = nlp('inter-species communication')
// console.log(doc.json()[0])
// doc.debug()
// let doc = nlp('counter-argument')
// console.log(doc.json()[0])
// console.log(doc.get())
// doc.match('counter-argument').debug()
// console.log(nlp.parseMatch('counter-argument'))
// console.log(nlp.parseMatch(`i've`))

// import fs from 'fs'
// let file = `/Users/spencer/data/infinite-jest/infinite-jest.txt`
// // file = `/Users/spencer/mountain/compromise/plugins/speed/tests/files/freshPrince.txt`
// let txt = fs.readFileSync(file).toString()
// let begin = new Date()
// // txt = 'his complex'
// let doc = nlp(txt).match('every single #Noun')
// // doc.debug('chunks')
// // console.log(doc.match('this').json()[0].terms)
// console.log('done')
// let end = new txt = `()`
// console.log((end.begin.getTime()) / 1000)

// let doc = nlp('one two three four')
// let m = doc.match('one two three')
// m.tag('. #Person .')
// console.log(doc._cache)
// doc.match('#Person').debug()

let net = nlp.buildNet([
  { match: 'every single #Noun' },
  { match: 'not (a|one) #Singular' },
])
console.log(net)
// let doc = nlp('i saw every single house. i met none. ')
// doc.match(net).debug()
// let m = nlp([['first.', 'foo bar']]).debug()
// let matches = [
//  { match: 'third' },
// ]
// let net = nlp.buildNet(matches)
// let doc = nlp(`first. second. third`)
// doc = doc.reverse()
// let res = doc.sweep(net)
// console.log(res.view)
// res.view.soften()
// res.view.debug()
// res.found[0].view.debug()



// txt = "should I be scared?"
// txt = "i started to get scared."


// txt = "My pants don't even fit right"
// txt = "In a baseball hat fit for a queen"
// txt = "does the different part fit together"

// txt = "License fee for beach vendors hiked"
// txt = "TTC to hike fares by 10 cents in March"

// txt = "He deserted from the Dragoons at"
// txt = "banks wear deserted look"

// txt = "CBI catches DD acting director taking bribe"
// txt = "How do I keep kissing you, and catch my breath?"

// txt = " throw stones, Dick, said Jaqueline."
// txt = "Loblaws reducing food price at Toronto stores"
// txt = "Stock prices closed higher in Stockholm"

// txt = `Upload documents`

// txt = `It sure seemed that way.`
// txt = `I am not sure when to take.`
// txt = `Pretty sure my arm is broke`
// txt = `Not sure about the details.`
// txt = `Sure you don't wanna pretzel?`
// txt = `You, you sure you need shoes?`
// txt = `Sure enough, no one was there.`
// txt = `Are you sure you wanna do this?`
// txt = `make sure that it's truly lost.`
// txt = `You sure this is what you want?`

// res.found[0].view.debug()

// doc = nlp(`first. second. third`)
// doc = doc.reverse()
// res = doc.match('third')
// console.log(res)



// console.log(res.found[0].view)

// let doc = nlp(`first. second. third`)
// doc = doc.reverse()
// let m = doc.match('third')
// m.soften()
// console.log(m)
// m.debug()



// conjugation issues
// let txt = ''
// txt = 'i will go on a boat'
// txt = `why is the doc`
// txt = 'take part'
// txt = 'fulfil'
// txt = 'outgrow'
// txt = 'prod'
// txt = 'shun'
// txt = 'slam'
// txt = 'collide'
// let doc = nlp(txt)
// doc.debug()
// console.log(doc.verbs().conjugate()[0])



// nlp('it is green and he is friendly.').sentences().toFutureTense().debug()

// isSingular bug
// nlp(`i saw the game that the Toronto Maple Leafs won`).verbs().isSingular().debug()


// contraction issue
// let txt = `doesn't there's i'd i'll`
// let doc = nlp(txt).debug()



// let doc = nlp("the exploding returns")
// console.log(nlp.parseMatch('québec'))
// doc.debug()
// const doc = nlp("Steve talked to Johnson LLC")
// doc.debug()
// Normal: some common drugs conflatin aspirin statin statins ivermectin amoxicillin augmentin