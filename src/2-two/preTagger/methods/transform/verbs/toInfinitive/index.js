import rules from './_transform.js'
import guess from './_guess.js'

/** it helps to know what we're conjugating from */
const guessTense = function (str) {
  let three = str.substr(str.length - 3)
  if (guess.hasOwnProperty(three) === true) {
    return guess[three]
  }
  let two = str.substr(str.length - 2)
  if (guess.hasOwnProperty(two) === true) {
    return guess[two]
  }
  let one = str.substr(str.length - 1)
  if (one === 's') {
    return 'PresentTense'
  }
  return null
}

// lookup known irregular verb forms
const fromIrreg = function (str, model) {
  let irregs = model.two.irregularVerbs
  let keys = Object.keys(irregs)
  for (let i = 0; i < keys.length; i++) {
    let forms = Object.keys(irregs[keys[i]])
    for (let o = 0; o < forms.length; o++) {
      if (str === irregs[keys[i]][forms[o]]) {
        return keys[i]
      }
    }
  }
}

// transform verb from regular expressions
const fromReg = function (str, tense) {
  tense = tense || guessTense(str)
  if (tense && rules[tense]) {
    for (let i = 0; i < rules[tense].length; i++) {
      const rule = rules[tense][i]
      if (rule.reg.test(str) === true) {
        return str.replace(rule.reg, rule.to)
      }
    }
  }
}

const toInfinitive = function (str, model, tense) {
  if (!str) {
    return ''
  }
  // pull-apart phrasal verb 'fall over'
  let [verb, particle] = str.split(/ /)
  // 1. look at known irregulars
  let inf = fromIrreg(verb, model)
  // 2. give'r!
  inf = inf || fromReg(verb, tense) || verb
  // stitch phrasal back on
  if (particle) {
    inf += ' ' + particle
  }
  return inf
}
export default toInfinitive

// import model from '../../../../model/index.js'
// console.log(toInfinitive('designed', model))