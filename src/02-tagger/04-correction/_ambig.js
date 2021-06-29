module.exports = {
  // adverbs than can be adjectives
  adverbAdjective: ['dark', 'bright', 'flat', 'light', 'soft', 'pale', 'dead', 'dim', 'faux', 'little', 'wee', 'sheer', 'most', 'near', 'good', 'extra', 'all'],
  // names that are dates
  personDate: ['april', 'june', 'may', 'jan', 'august', 'eve'],
  // names that may be months
  personMonth: ['january', 'april', 'may', 'june', 'jan', 'sep'],
  // names that are adjectives
  personAdjective: ['misty', 'rusty', 'dusty', 'rich', 'randy', 'young'],

  // names that are verbs
  personVerb: ['pat', 'wade', 'ollie', 'will', 'rob', 'buck', 'bob', 'mark', 'jack'],

  // names that are verbs
  personPlace: ['darwin', 'hamilton', 'paris', 'alexandria', 'houston', 'kobe', 'santiago', 'salvador', 'sydney', 'victoria'],

  // names that are nouns
  personNoun: [
    'art',
    'baker',
    'berg',
    'bill',
    'brown',
    'charity',
    'chin',
    'christian',
    'cliff',
    'daisy',
    'dawn',
    'dick',
    'dolly',
    'faith',
    'franco',
    'gene',
    'green',
    'hall',
    'hill',
    'holly',
    'hope',
    'jean',
    'jewel',
    'joy',
    'kelvin',
    'king',
    'kitty',
    'lane',
    'lily',
    'melody',
    'mercedes',
    'miles',
    'olive',
    'penny',
    'ray',
    'reed',
    'robin',
    'rod',
    'rose',
    'sky',
    'summer',
    'trinity',
    'van',
    'viola',
    'violet',
    'wang',
    'white',
  ],
}

Object.keys(module.exports).forEach(k => {
  module.exports[k] = module.exports[k].join('|')
})
console.log(module.exports)
