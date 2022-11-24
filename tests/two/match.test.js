import test from 'tape'
import nlp from './_lib.js'
const here = '[two/match] '

let arr = [
  ['toronto', '#City'],
  ['mexico', '#Country'],
  ['Jamaica', '#Country'],
  ['august', '#Month'],
  ['saturday', '#WeekDay'],
  ['really', '#Adverb'],
  ['each', '#Determiner'],
  ['voila', '#Expression'],
  ['new england', '#Place'],
  ['hers', '#Possessive'],
  ['onto', '#Preposition'],
  ['blvd', '#Place'],
  ['belgian', '#Demonym'],
  ['cactus', '#Singular'],
  ['cacti', '#Plural'],
  ['economy', '#Noun'],
  ['brotherhood', '#Noun'],
  ['claire', '#FemaleName'],
  ['arthur', '#MaleName'],
  ['wrote', '#PastTense'],
  ['write', '#Verb'],
  ['survive', '#Verb'],
  ['our attempt', 'our #Noun'],
  ['can attempt', 'can #Verb'],
  ["mc'adams", '#LastName'],
  ['Müller', '#LastName'],
  ['muller', '#LastName'],
  ['invest', '#Verb'],
  ['investing', '#Verb'],
  [`wallys'`, '#Possessive'],
  ['zero in', '#Verb #Particle'],
  ['glacier', '#Singular'],
  ['glaciers', '#Plural'],
  ['withers', '#PresentTense'],
  ['wither', '#Infinitive'],
  ['german', '#Demonym'],
  ['germans', '#Demonym'],
  ['germans', '#Plural'],
  ['cres', '#Abbreviation'],
  ['nucleus', '#Singular'],
  ['nuclei', '#Plural'],
  ['sting', '#Infinitive'],
  ['stung', '#PastTense'],
  ['ocean', '#Noun'],
  ['shiver all night', '#Verb all #Noun'],
  [`flanders'`, '#Possessive'],
  ['MMMCMXXIII', '#RomanNumeral'],
  // ['MIMMCMXXIII', '#Acronym'], //invalid roman numeral
  ['c.e.o', '#Acronym'],
  ['MDMA', '#Acronym'],
  ['unless', '#Condition'],
  ['funniest', '#Superlative'],
  ['sillier', '#Comparative'],
  ['the', '#Determiner'],
  ['iraqi', '#Demonym'],
  ['december', '#Date'],
  ['suddenly', '#Adverb'],
  ['shanghai', '#City'],

  ['He is in Canada', '#Pronoun #Copula #Preposition #Place'],
  ['walk the walk', '#Verb #Determiner #Noun'],
  ['Peter the man', '#Person #Determiner #Noun'],
  ['butterfly', '#Singular'],
  ['he blamed the girl', '#Pronoun #PastTense #Determiner #Singular'],
  ['his fine', '#Possessive #Noun'],
  ['city/town', '#Noun'],
  ['city/town', 'city'],
  ['city/town', 'town'],
  ['his fines', '#Possessive #Noun'],
  ['asdfefs', '#Noun'],
  ['octopus', '#Noun'],
  ['tree', '#Noun'],
  ['i', '#Noun'],

  //slang, contractions
  ['u r nice', '#Pronoun #Copula #Adjective'],
  ['canadian bacon', '#Demonym #Noun'],
  ['canadian dollar', '#Currency #Currency'],

  //possessive rules
  ["john lkjsdf's", '#Person #Possessive'],
  ["john lkjsdf's house", '#Person #Possessive #Noun'],
  ["john Lkjsdf's house", '#Person #Possessive #Noun'],
  ["john Lkjsdf's House", '#Person #Possessive #Noun'],
  ["mark's question mark", '#Possessive #Noun #Noun'],

  //question-words
  ['who is good?', '#QuestionWord #Copula #Adjective'],
  ['which is good?', '#QuestionWord #Copula #Adjective'],
  // ['bacon which is good', '#Noun #Pronoun #Copula #Adjective'],
  // ['bacon which really is good', '#Noun #Pronoun #Adverb #Copula #Adjective'],
  // ['Douglas who really is good', '#Person #Pronoun #Adverb #Copula #Adjective'],

  ['at some point', '#Preposition #Determiner #Noun'],
  ['to a point', '#Conjunction #Determiner #Noun'],
  ['well, no.', '#Expression #Expression'],

  // infinitive-noun
  [`a tv show`, '#Determiner #Noun #Noun'],
  [`send me a currency report.`, '#Infinitive #Pronoun #Determiner #Noun #Noun'],
  // [`a close watch on`, '#Determiner #Adjective #Noun #Preposition'],
  [`a surgery date of`, '#Determiner #Noun #Noun #Preposition'],
  [`A girl hit a boy.`, '#Determiner #Noun #Infinitive #Determiner #Noun'],
  [`a auto repair shop.`, '#Determiner #Noun #Noun #Noun'],

  // timezones
  ['Morocco Standard Time', '#Timezone #Timezone #Timezone'],
  ['GMT+9', '#Timezone'],
  ['3pm EST', '#Time #Timezone'],
  ['3pm eastern time', '#Time #Timezone #Timezone'],
  ['pacific standard time', '#Timezone #Timezone #Timezone'],
  ['korea daylight time', '#Timezone #Timezone #Timezone'],
  ['tuesday', '#Date'],
  ['february', '#Date'],
  ['february fifth', '#Date+'],
  ['tuesday march 5th', '#Date+'],
  // ['tuesday march 5th, 2015', '#Date+'],

  // hyphens
  ['cartoon-ish', '#Adjective'],
  ['over-joyous', '#Adjective'],
  ['walk-able', '#Adjective'],
  ['trans-national', '#Adjective'],
  ['re-create', '#Verb'],
  ['micro-computer', '#Noun'],

  // contractions
  // 't
  ["we ain't", 'we are not'],
  ["she ain't", 'she is not'],
  ["she really ain't", 'she really is not'],
  ["we really ain't", 'we really are not'],
  ["the hotels really ain't", 'the hotels really are not'],
  ["the boxer really ain't", 'the boxer really is not'],
  // 's
  [`spencer's buritto`, `spencer's buritto`],
  [`spencer's walked`, `spencer has walked`],
  [`spencer's nice`, `spencer is nice`],
  // 'd
  [`i'd really walked`, `i had really walked`],
  [`i'd really see`, `i would really see`],
  [`how'd she do`, `how did she do`],

  // punctuation
  ['truth, bravery', '@hasComma bravery'],
  ['spencer did.', 'spencer @hasPeriod'],
  ['spencer did!', 'spencer @hasExclamation'],
  ['spencer did?', 'spencer @hasQuestionMark'],
  ['spencer did...', 'spencer @hasEllipses'],
  ['no fair; i said', 'no @hasSemicolon i said'],
  ['tornado/hurricane', 'hurricane'],
  ['tornado/hurricane', 'tornado'],
  ['tornado/hurricane', '@hasSlash'],
  ['like a tornado/hurricane', 'like a @hasSlash'],
  ["he isn't going", 'he @hasContraction #Gerund'],
  ['FIFA', '@isAcronym'],
  ['spencer', '@isKnown'],

  // misc
  ['swore', '#PastTense'],
  ['tore', '#PastTense'],
  ['gore', '#Noun'],
  [`spencer's city/town & cabin`, 'spencer city and .'],
  ['city/town', 'town'],
  // ["There's holes everywhere", 'there are #Plural .'],
  ["There's an issue", 'there is #Determiner #Noun'],
  ['Let’s not forget', 'let us not #Verb'],
  ['the thing about love', '#Determiner #Noun about #Noun'],
  [`I don't get much [sleep]`, 'i do not #Infinitive much #Noun'],
  ['the cardio dance party', '#Determiner #Noun #Noun #Noun'],
  ['the mexican train hijacker', '#Determiner #Noun #Noun #Noun'],
  // ['the dining experience', '#Determiner #Noun #Noun #Noun'],
  ['the student loan default rate', '#Determiner #Noun #Noun #Noun #Noun'],
  ['the examples include Jonathan Swift', '#Determiner #Noun #Verb #Noun #Noun'],
  ['the feet kick him', '#Determiner #Noun #Verb #Noun'],
  ['the fast train', 'the #Adjective #Noun'],
  ['the faster train', 'the #Adjective #Noun'],
  ['the fastest train', 'the #Adjective #Noun'],
  ['buy the dress', '#Verb the #Noun'],
  ['security forces take', '#Noun #Noun #Verb'],
  ['they sing tribute', '#Pronoun #Verb #Noun'],
  ['they sing praises', '#Pronoun #Verb #Plural'],
  // ['they cast doubt', '#Pronoun #Verb #Noun'],
  // ['being close', '#Verb #Adjective'],
  ['take control', '#Verb #Noun'],
  ['seek progress', '#Verb #Noun'],
  ['are building dreams', '#Copula #Gerund #Plural'],
  ['my aching head', 'my #Adjective #Noun'],
  // ['Ignoring commute costs', '#Verb #Noun #Noun'],
  ['the World Trade Center', 'the #Noun #Noun #Noun'],
  // ['minimizing side reactions', '#Gerund #Noun #Noun'],
  ['would not give rise', '#Modal not #PhrasalVerb #Particle'],
  // ['it sounds like her ', 'it #Verb #Adverb her'],
  // ['side of fries ', '#Noun of #Plural'],
  ['bright side of life', '#Adjective #Noun of #Noun'],
  ['the way of love', 'the #Noun of #Noun'],
  ['daily side hustle', '#Adjective #Noun #Noun'],
  ['mask the pain', '#Verb the #Noun'],
  ['tony the tiger', '#Noun the #Noun'],

  // ['some brand of cleaner', '#Noun #Noun of #Noun'],
  // ['some sort of dog', '#Noun #Noun of #Noun'],
  ['a dog of some sort', 'a #Noun of #Adjective #Noun'],
  ['the dutch feel', '#Determiner #Noun #Noun'],
  ['the captains feel too', '#Determiner #Noun #Verb #Adverb'],
  ['the baby dump', '#Determiner #Noun #Noun'],
  ['the nurse march', '#Determiner #Noun #Noun'],
  ['date of birth', '#Noun of #Noun'],
  ['kiss of death', '#Noun of #Noun'],
  // [`drinks and food fuel shopping at new Saks`, '#Noun and #Noun #Noun #Noun at new #Noun'],
  // [`litigation costs`, '#Noun #Noun'],
  // [`the dog, whose skip was Frank`, 'the #Noun whose #Noun was #Person'],
  // [`on Microsoft operating systems,`, 'on #Noun #Noun #Noun'],
  // // [`a national security issue `, 'a #Noun #Noun #Noun'],
  // [`formal thought patterns `, '#Adjective #Noun #Plural'],
  // [`every parenting system`, 'every #Noun #Noun'],
  // [`with Scotland winning 49 matches `, 'with #Place #Gerund #Value #Plural'],
  // [`for some reason`, 'for some #Noun'],
  // [`dirty tricks`, '#Adjective #Plural'],
  // [`a press release`, '#Determiner #Noun #Noun'],
  // [`the same type of shouts`, '#Determiner same #Noun of #Plural'],
  // [`the same kind of shouts`, '#Determiner same #Noun of #Plural'],
  // [`they are essential to expand`, '#Noun #Verb #Adjective to expand'],
  // [`had a rocky release`, 'had #Determiner #Adjective #Noun'],
  // [`might get better aim`, '#Auxiliary #Verb #Comparative #Noun'],
  // [`i think tipping blows`, 'i #PresentTense #Gerund #Adjective'],
  ['dept of state', '#Noun of #Noun'],
  // [ `must-see show`,''],
  [`would look like`, '#Modal #Infinitive .'],
  [`zero in`, '#PhrasalVerb #PhrasalVerb'],
  [`it was time`, '#Noun #Copula #Noun'],
  [`I've said`, '#Pronoun have #PastTense'],
  [`I've read`, '#Pronoun have #PastTense'],
  [`provide record levels`, '#Infinitive . #Plural'],
  [`I will attach`, '#Pronoun #Verb #Verb'],
  [`Leo in 2005`, '#Noun in #Value'],
  [`June 14 Reception`, '#Date #Date #Noun'],
  [`They will mature`, '#Pronoun will #PresentTense'],
  [`putting his hand`, '#Verb #Possessive #Noun'],
  [`understand my answer`, '#Verb #Possessive #Noun'],
  [`child’s play`, '#Possessive #Noun'],
  [`he describes his brush with death`, 'he #Verb #Possessive #Noun with #Noun'],
  [`decide their fate`, '#Verb #Possessive #Noun'],
  [`take your time`, '#Verb #Possessive #Noun'],
  [`strengthen our trade relations`, '#Verb #Possessive #Noun #Plural'],
  [`i need your help`, 'i #Verb #Possessive #Noun'],
  [`have our unyielding support`, '#Verb #Possessive #Adjective #Noun'],
  // [`my dear`, '#Possessive #Noun'],
  [`My old position`, '#Possessive #Adjective #Noun'],
  [`john's whole world`, '#Possessive #Adjective #Noun'],
  [`your online profiles`, '#Possessive #Adjective #Noun'],
  [`their past mistakes`, '#Possessive #Adjective #Noun'],
  // [`Toronto's epic Instagram feed`, '#Possessive #Adjective #Noun #Noun'],
  [`in your foul shoes`, 'in #Possessive #Adjective #Noun'],
  [`MY DEAR WIFE`, '#Possessive #Adjective #Noun'],
  // [`your majesty shall`, '#Possessive #Noun #Verb'],
  [`my youthful mind`, '#Possessive #Adjective #Noun'],
  [`our full support`, '#Possessive #Adjective #Noun'],
  // [`the feminine`, `the #Noun`],
  [`the feminine form`, `the #Adjective #Noun`],
  [`health insurance reform is tricky`, `#Noun #Noun #Noun is #Adjective`],
  [`Toronto will be home to large party`, `#Noun #Verb be #Verb to #Adjective #Noun`],

  [`by number of seats.`, 'by #Noun of #Plural'],
  [`he taught debate`, 'he #Verb #Noun'],
  [`singers on stage`, '#Noun on #Noun'],
  [`in times of change, a symbol`, 'in times of #Noun a #Noun'],
  [`powerful known tornadoes.`, '#Adjective #Adjective #Plural'],
  [`beauty sleep`, '#Noun #Noun'],
  // [`the pillow floor seats`, 'the #Noun #Noun #Noun'],
  [`the mrt bus stop.`, 'the #Noun #Noun #Noun'],
  [`buck naked`, '#Adjective #Adjective'],
  [`without any recharge.`, 'without any #Noun'],
  [`(mis-fired).`, '#Verb'],
  // [`president-elect`, '#Noun'],
  // [`flower-like.`, '#Adjective'],
  [`The old Fairy's turn`, 'the #Adjective #Possessive #Noun'],
  [`more with spite than age`, 'more with #Noun than #Noun'],
  // [`another fool to roast`, 'another #Noun to #Verb'],
  [`even the humblest`, '#Adverb the #Superlative'],
  ["Steve talked to Johnson LLC", '#Person talked to #Organization #Organization'],
  ["GIC airlines", '#Organization #Organization'],
  [`charcoal chicken`, '#Noun #Noun'],

  // not roman numerals
  ['LI', '!#RomanNumeral'],
  ['DC', '!#RomanNumeral'],
  ['MD', '!#RomanNumeral'],
  ['DM', '!#RomanNumeral'],
  ['ML', '!#RomanNumeral'],

  // ambiguous 'her'
  [`I hit him hard`, '#Pronoun #Verb #Pronoun (#Adjective|#Adverb)'],
  [`I hit her hard.`, '#Pronoun #Verb #Pronoun (#Adjective|#Adverb)'],



  ['reagent', '#Noun'],
  ['ingredient', '#Noun'],
  ['convent', '#Noun'],
  ['incident', '#Noun'],
  ['rodent', '#Noun'],
  ['correspondent', '#Noun'],
  ['descendent', '#Noun'],
  ['incident', '#Noun'],
  ['macronutrient', '#Noun'],
  ['urgent', '#Adjective'],
  ['asian', '#Demonym'],
  ['belgian', '#Demonym'],
  ['albanian', '#Demonym'],
  ['rotarian', '#Noun'],
  [`m`, '#Noun'],
  [`mineralogy`, '#Noun'],
  [`microsome`, '#Noun'],
  [`postage`, '#Noun'],
  [`agent`, '#Noun'],
  [`alkaloid`, '#Noun'],
  [`hierarchy`, '#Noun'],
  [`anarchy`, '#Noun'],
  [`psychopathy`, '#Noun'],
  [`apathy`, '#Noun'],
  [`horseradish`, '#Noun'],

  ["expertise", '#Noun'],
  ["premise", '#Noun'],
  ["merchandise", '#Noun'],
  ["demise", '#Noun'],
  ["sunrise", '#Noun'],
  ["anise", '#Noun'],
  ["treatise", '#Noun'],
  ["oligopoly", '#Noun'],
  ["disassembly", '#Noun'],
  ["petal", '#Noun'],
  ["golfer", '#Noun'],
  ["wafer", '#Noun'],
  ["offer", '#Verb'],
  ["infer", '#Verb'],
  ["suffer", '#Verb'],
  ["jennifer", '#FemaleName'],

  ["hilary", '#FemaleName'],
  [`vocabulary`, '#Noun'],
  [`documentary`, '#Noun'],
  [`monetary`, '#Adjective'],
  [`solitary`, '#Adjective'],
  [`elementary`, '#Adjective'],
  [`hereditary`, '#Adjective'],
  [`military`, '#Noun'],
  [`salary`, '#Noun'],
  [`purifier`, '#Noun'],
  [`humidifier`, '#Noun'],
  [`photocopier`, '#Noun'],
  [`generalist`, '#Noun'],
  [`racist`, '#Adjective'],
  [`moist`, '#Adjective'],
  [`twist`, '#Verb'],
  [`persist`, '#Verb'],
  [`stylist`, '#Noun'],
  [`waist`, '#Noun'],
  [`gist`, '#Noun'],
  [`hobbyist`, '#Noun'],
  [`medalist`, '#Noun'],
  [`metabolite`, '#Noun'],
  [`website`, '#Noun'],
  [`polite`, '#Adjective'],
  [`exquisite`, '#Adjective'],
  [`opposite`, '#Adjective'],
  [`his spite`, 'his #Noun'],
  [`parasite`, '#Noun'],
  [`favorite`, '#Adjective'],
  [`write`, '#Verb'],
  [`chlorite`, '#Noun'],
  [`meteorite`, '#Noun'],
  [`topic`, '#Noun'],
  [`fabric`, '#Noun'],
  [`picnic`, '#Noun'],
  [`tunic`, '#Noun'],
  [`cryptic`, '#Adjective'],
  [`acoustic`, '#Adjective'],
  [`erotic`, '#Adjective'],

  ['accommodate', '#Verb'],
  ['birthdate', '#Noun'],
  ['candidate', '#Noun'],
  ['validate', '#Verb'],
  ['update', '#Verb'],
  ['devastate', '#Verb'],
  ['rotate', '#Verb'],
  ['superintendent', '#Noun'],
  ['rodent', '#Noun'],
  ['incident', '#Noun'],
  ['crescent', '#Noun'],
  ['fluorescent', '#Adjective'],
  ['satisfy', '#Verb'],
  ['bestow', '#Verb'],
  ['disinfect', '#Verb'],
  ['reflect', '#Verb'],
  ['respect', '#Verb'],
  ['detect', '#Verb'],
  ['correct', '#Adjective'],
  ['aspect', '#Noun'],
  ['minor defect', '#Adjective #Noun'],
  ['restrict', '#Verb'],
  ['depict', '#Verb'],
  ['misinterpret', '#Verb'],
  ['relaunch it', '#Verb it'],
  ['relaunched', '#PastTense'],
  ['denounce', '#Verb'],
  ['denounces', '#Verb'],
  ['denounced', '#Verb'],
  ['refocus', '#Verb'],
  ['reorder it', '#Verb it'],
  ['misinform', '#Verb'],
  ['reclaim', '#Verb'],
  ['restrike', '#Verb'],
  ['disembark', '#Verb'],
  ['debunking', '#Gerund'],
  ['debunks', '#PresentTense'],
  ['verdict', '#Noun'],
  ['product', '#Singular'],
  ['products', '#Plural'],
  ['district', '#Singular'],
  ['maze', '#Singular'],
  ['blaze it', '#Verb it'],
  ['districts', '#Plural'],
  ['quiet addict', '#Adjective #Singular'],
  ['addict them', '#Verb them'],
  ["rearrange", "#Verb"],
  ["prearrange", "#Verb"],
  ["decommission", "#Verb"],
  ["depreciable", "#Adjective"],
  ["soluble", "#Adjective"],
  ["viable", "#Adjective"],
  ["valuable", "#Adjective"],
  ["disproportionate", "#Adjective"],
  ["plentiful", "#Adjective"],
  ["unfamiliar", "#Adjective"],
  ["victory", "#Noun"],
  ["grandnephew", "#Noun"],
  ["autobiography", "#Noun"],
  ["microarray", "#Noun"],
  ["pro-business", "#Adjective"],
  // ["post-gun", "#Adjective"],

  // ["food and programs", "#Noun and #Noun"],
  ["writes and programs", "#PresentTense and #PresentTense"],
  [`revisit the unsteamed towels`, '#Infinitive the #Adjective #Plural'],

  ["macronutrient", "#Noun"],
  ["undue", "#Adjective"],
  ["he was semiskilled", "he was #Adjective"],
  ["antiwork", "#Noun"],
  ["antiaircraft", "#Noun"],
  ["kilos", "#Noun"],
  ["autolytic", "#Adjective"],
  ["introvert", "#Noun"],
  ["de-orients", "#Verb"],
  ["deduct", "#Verb"],
  ["conduct", "#Verb"],

  ["contradictory", "#Adjective"],
  ["factory", "#Noun"],
  ["satisfactory", "#Adjective"],
  ["trajectory", "#Noun"],
  ["victory", "#Noun"],

  ["merged", "#PastTense"],
  ["mentioned", "#PastTense"],
  ["aired", "#PastTense"],
  ["screeched", "#PastTense"],
  ["screeches", "#PresentTense"],
  ["intoxicates", "#PresentTense"],
  ["it intoxicated him", "it #PastTense him"],
  // 
  ["trying not", "#Gerund not"],
  ["not trying", "not #Adjective"],
  // ["wait and see", "#Infinitive and #Infinitive"],
  ["bride and groom", "#Noun and #Noun"],

  ["conditioner", "#Singular"],
  ["loner", "#Singular"],
  ["prisoner", "#Singular"],
  ["sooner", "#Comparative"],
  ["toner", "#Singular"],
  ["owner", "#Singular"],


  ["diner", "#Singular"],
  ["dinner", "#Singular"],
  ["finer", "#Comparative"],
  ["foreigner", "#Singular"],
  ["partner", "#Singular"],
  ["toner", "#Singular"],
  ["werner", "#Singular"],
  ["winner", "#Singular"],
  ["aunt brenda", "#Person+"],
  ["uncle sam", "#Person+"],
  ["it is eager to forget", "it is #Adjective to #Verb"],
  ["it is direct to ciaro", "it is #Adjective to #Noun"],


  ['corporate', '!#Verb'],
  ['lane', '#Noun'],
  ['coke', '#Noun'],
  ['hormone', '#Noun'],
  ['hardwork', '#Noun'],
  ['likewise', '!#Verb'],
  ['forth', '!#Verb'],
  ['misfortune', '#Noun'],
  ['outstanding', '#Adjective'],
  ['renowned', '#Adjective'],
  ['interstate', '#Noun'],
  ['whoever', '!#Verb'],
  ['whenever', '!#Verb'],

  ['suicide', '#Noun'],
  ['beside', '#Adjective'],
  ['peptide', '#Noun'],
  ['worldwide', '#Adjective'],
  ['dioxide', '#Noun'],
  ['decide', '#Verb'],
  ['bide', '#Verb'],
  ['slide', '#Verb'],
  ['guide', '#Verb'],
  ['reside', '#Verb'],
  ['his backside', 'his #Noun'],

  ['attic', '#Noun'],
  ['arithmetic', '#Noun'],
  ['static', '#Noun'],
  ['tic', '#Noun'],

  ['squish', '#Infinitive'],

  ['portal', '#Noun'],
  ['parish', '#Noun'],
  ['adjective', '#Noun'],
  ['attic', '#Noun'],
  ['borough', '#Noun'],
  ['cathedral', '#Noun'],
  ['constable', '#Noun'],
  ['fetish', '#Noun'],
  ['conservatory', '#Noun'],
  ['mineral', '#Noun'],
  ['caterpillar', '#Noun'],
  ['fanny', '#Noun'],
  ['arithmetic', '#Noun'],

  // person-titlecase
  ['Ollie Faroo', '#Person #Person'],
  ['Cliff Clavin', '#Person #Person'],
  ['Wade Slowagon', '#Person #Person'],
  ['Jan Thierson', '#Person #Person'],
  ['Gail Emerson', '#Person #Person'],
  ['Wade G. Slapgoop', '#Person #Acronym #Person'],
  ['june F Fobo', '#Person #Acronym #Person'],
  ['buck M. Fobo', '#Person #Acronym #Person'],
  ['crystal D. Fobo', '#Person #Acronym #Person'],
  ['West Sydney', '!#Person+'],
  ['Sydney Harbour', '!#Person+'],
  // ['June Holiday Sweeps', '!#Person+'],
  ['Cliff Climber Group', '!#Person+'],
  // ['Faith Reunion', '!#Person+'],

  [`here's`, 'here is'],
  [`there's`, 'there is'],
  [`she's`, 'she is'],
  [`it's`, 'it is'],
  [`he's`, 'he is'],
  [`that's`, 'that is'],
  [`here's`, 'here is'],
  [`there's`, 'there is'],
  [`your's`, '#Possessive'],
  [`who's`, 'who is'],
  [`what's`, 'what is'],
  [`where's`, 'where is'],
  [`why's the doc`, 'why is the doc'],
  [`when's he coming`, 'when is he .'],
  [`how's that`, 'how is that'],
  [`let's`, 'let us'],
  [`somebody else's`, '. #Possessive'],
  [`my name's john`, 'my name is .'],

  ['logic', '#Noun'],
  ["liver", '#Noun'],
  ["incentive", '#Noun'],
  ["vanish", '#Infinitive'],
  ["vanish", '#Infinitive'],

  ["a worn dress", '#Determiner #Adjective #Singular'],
  ["Anna's eating lunch", '#Possessive #Gerund #Singular'],
  ["Anna's eating was impressive", '#Possessive #Noun #Copula #Adjective'],
  ["Québec is in canada", "québec #Verb in #Country"],
  ["Québec is in canada", "quebec #Copula in canada"],

  [`the remaining claims fail`, '#Determiner #Adjective #Plural #PresentTense'],
  [`6 hurt in family dispute`, '#Value #Infinitive in #Singular #Singular'],


  ['not be until 1982 that', 'not #Verb until #Year that'],
  ['in his case 1500 cakes', 'in #Possessive #Singular !#Year #Plural'],
  ['July 13, 1996 - video', '#Date+ #Singular'],
  ['3 men from 1938 through the end of WWII', '#Cardinal #Plural from #Year through . #Singular of #Acronym'],
  ['back in 1996', 'back in #Year'],
  // ['the 1989 epic', 'the #Year #Singular'],
  ['the 1975 hit', 'the #Year #Singular'],
  ['back to 2000', 'back to #Year'],
  ['the 1923 Tokyo disaster', 'the #Year #ProperNoun+ #Singular'],
  // ['Dave Fleischer\'s 1939 version', '#Person+ #Year #Singular'],
  ['the films made in 1931 are this creaky', 'the #Plural #Verb in #Year #Copula this #Adjective'],
  ['at the 1999 Melbourne International Film Festival', 'at the #Year #ProperNoun+'],
  ['its 1993 TV remake', 'its #Year #Noun+'],
  // ['in 1999 - 2001 Ted had a crisis', 'in #Year+ #Person had a #Singular'],
  ['circa 1971', '. #Year'],
  ['Set in 1976 for no apparent reason', '#Verb in #Year for no #Adjective #Singular'],
  ['the post - 1985 Perry Mason movies', 'the post #Year #Person+ #Plural'],
  // ['the 1988 blockbuster movie', 'the #Year #Noun+'],
  ['with its 1950 beds', 'with #Possessive !#Year #Plural'],
  ['His death in 1994 went barely noticed', '#Possessive #Noun in #Year #Verb #Adverb noticed'],
  ['the films in 1972 and 1974 respectively', 'the #Plural in #Year and #Year .'],
  ['seen over 2000 studio-era sound films', '#Verb over !#Year #Noun+'],
  ['This 1925 film narrates the story', '#Determiner #Year #Noun #PresentTense the #Singular'],
  // ['my 1950 convertable', '#Possessive #Year #Singular'],

  ["always throwing stones at me", '#Adverb #Gerund #Plural at #Pronoun'],

  ["any need for a trial", 'any #Noun for a #Noun'],
  ["go kayaking in a tributary?.", '#Verb #Gerund in a #Noun'],
  ["any need for a trial.", 'any #Noun for a #Noun'],
  ["as a whole", 'as a #Noun'],
  ["he had fallen into a cold", '#Pronoun #Auxiliary #Verb into a #Noun'],
  ["taken from us in an instant", 'taken from #Pronoun in an #Noun'],
  ["the instant he walked", 'the #Noun #Pronoun #PastTense'],

  ["5 gb", '#Value #Unit'],
  ["5 kb", '#Value #Unit'],
  ["5 k", '#Value #Unit'],
  ["550 m", '#Value #Unit'],
  ["50m", '#Value #Unit'],
  ["50 miles", '#Value #Unit'],
  ["50 square miles", '#Value #Unit+'],
  ["50 miles per hour", '#Value #Unit+'],
  ["5gb", '#Value #Unit'],
  ["team gb", '#Noun !#Unit'],
  ["dr oz", '#Noun !#Unit'],
  ["wizard of oz", '#Noun of !#Unit'],
  ["downtown pa", '#Noun !#Unit'],
  ["1 ft wide", '#Cardinal #Unit wide'],
  ["1 ft. wide", '#Cardinal #Unit wide'],
  ["1-ft wide", '#Cardinal #Unit wide'],

  ["felt confused", '#PastTense #Adjective'],
  ["felt a bit confused", '#PastTense a #Noun #Adjective'],
  [`she'll come around`, '#Pronoun will #PhrasalVerb #Particle'],
  ['that\'s not swell', 'that is not #Adjective'],
  ["I was an expert", 'i was an #Noun'],
  ["definitely worth a rental.", '#Adverb #Verb a #Noun'],
  ["keeping the matter a secret", '#Gerund the #Noun a #Noun'],
  ["30/01/194", '!#Date'],
  ["peace, flowers and doves", '#Noun #Noun and #Noun'],
  ["the lady", 'the !#Honorific'],
  ["the ship's captain", 'the #Possessive !#Honorific'],
  ["count backwards", '#Imperative #Adverb'],
  ["lady jones", '#Honorific #Person'],
  ["count jones", '#Honorific #Person'],
  ["my worst miss", 'my #Adjective #Singular'],
  ["a near miss", 'a #Adjective #Singular'],
  ["that miss was horrid", 'that #Singular #Copula #Adjective'],

  // #Possessive #Noun
  [`with your hands up`, `with #Possessive #Plural up`],
  [`your keys`, `#Possessive #Plural`],
  [`life’s challenges`, `#Possessive #Plural`],
  [`My mate`, `#Possessive #Noun`],
  // anna's eating, anna's eating lunch
  // [`your craving`, `#Possessive #Noun`],
  [`I can't afford your prices`, `I can not #Verb #Possessive #Plural`],
  [`the water's edge`, `the #Possessive #Noun`],
  [`my bitches`, `#Possessive #Plural`],
  // [`demanding his rights`, `#Gerund #Possessive #Plural`],
  [`captain mistook Byron's boat`, `#Noun #PastTense #Possessive #Noun`],
  [`Our respects to Mr. Shuttleworthy`, `#Possessive #Plural to #Person+`],
  [`bread in my jar`, `#Noun in #Possessive #Singular`],
  [`Ptolemy's experiments`, `#Possessive #Plural`],
  [`She shoved her hand`, `#Pronoun #PastTense #Possessive #Singular`],
  // [`Monroe made her network TV debut`, `#Noun #Verb #Possessive #Noun+`],
  [`nurse deleted my name`, `#Noun #PastTense #Possessive #Singular`],
  [`supporting our refusing to speak`, `#Gerund #Possessive #Gerund to #Verb`],
  [`one of his reclining figures`, `one of #Possessive #Gerund #Plural`],
  // not posessive
  // [`I saw her go`, `I #PastTense !#Possessive #PresentTense`],
  // [`I watched her throw`, `I #PastTense !#Possessive #PresentTense`],

  ['well?', '#Expression'],
  ['alright!', '#Expression'],
  ['it was alright', 'it was #Adjective'],
  ['shoot', '#Expression'],
  ['shoo!', '#Expression'],
  ['hell', '#Expression'],
  ['live in hell', '#Verb in #Noun'],
  [`we gave tax reductions`, `#Pronoun #PastTense #Noun #Plural`],
  [`brand new`, `#Adverb #Adjective`],
  [`brand spanking new`, `#Adverb #Adverb #Adjective`],

  ["Right after.", '#Adverb .'],
  ["Right in", '#Adverb #Preposition'],
  ["Right angle.", '#Adjective #Noun'],
  [`The Island airport tunnel nears completion`, `the #Noun+ #PresentTense #Noun`],
  [`come have a drink`, `#Imperative #Imperative a #Singular`],
  [`come and have a drink`, `#Imperative and #Imperative a #Singular`],
  [`there are issues`, `#There #Copula #Plural`],
  [`nobody in there`, `#Noun in #Noun`],
  [`go near there`, `#Verb near #Noun`],
  [`he is always there`, `#Pronoun #Copula #Adverb #Adjective`],
  [`there it is`, `#There it is`],
  ['I ate me sandwich', '#Pronoun #Verb #Possessive #Singular'],
  [`will get discouraged`, `#Verb #Verb #Adjective`],
  [`do not get discouraged`, `#Verb #Negative #Verb #Adjective`],
  [`do not be embarrassed`, `#Verb #Negative #Verb #Adjective`],

  [`like to drink`, `#Verb to #Verb`],
  [`try to hold`, `#Verb to #Verb`],
  [`need to ask`, `#Verb to #Verb`],
  [`want to stand`, `#Verb to #Verb`],
  [`have to face`, `#Verb to #Verb`],
  [`agreeing to purchase`, `#Verb to #Verb`],
  [`continue to reform`, `#Verb to #Verb`],
  [`refused to harbour`, `#Verb to #Verb`],
  [`begin to fear`, `#Verb to #Verb`],
  // [`came to light`, `#Verb to #Noun`],
  [`i bike to work`, `i #Verb to #Noun`],
  [`bring to market`, `#Verb to #Noun`],
  [`went to sleep`, `#Verb to #Noun`],

  ['l-theanine', '#Noun'],
  ['x-ray', '#Noun'],
  ['my ex-husband', 'my #Noun'],
  ['The F-102 saw service', 'the #Noun #Verb #Noun'],
  // titlecase
  ['We Sell All Brands', '#Pronoun #Verb all #Plural'],
  ['WE SELL ALL BRANDS', '#Pronoun #Verb all #Plural'],


  // imperative
  [`[commit] to a fun activity`, '#Imperative to a #Adjective #Noun'],
  [`[Talk] to her`, '#Imperative to #Pronoun'],
  [`[Explain] to him`, '#Imperative to #Pronoun'],
  [`[Temper] your expectations`, '#Imperative your #Plural'],
  [`[Ditch] the schedule`, '#Imperative the #Noun'],
  [`Stick to doing "Bookie payouts"`, '#Imperative to #Gerund #Noun #Plural'],
  [`[Resolve] yourself`, `#Imperative #Reflexive`],

  [`[Maintain] eye contact`, `#Imperative #Singular #Singular`],
  // [`[Wear] muted or neutral colors`, `#Imperative #Adjective or #Adjective #Plural`],
  [`don't forget to clean`, `#Verb not #Imperative to #Imperative`],
  [`My very existence [is] oppressive`, `my very #Noun #Copula #Adjective`],
  [`it does [occur] sometimes`, `it #Verb #Infinitive #Adverb`],
  [`you’ll also soon [find]`, `you will #Adverb soon #Infinitive`],
  // [`you're [set]`, `#Pronoun #PresentTense #Adjective`],
  [`make her [see] that`, `#Imperative her #Infinitive that`],
  [`Bite or [lick] your lower lip`, `#Infinitive or #Infinitive #Possessive #Adjective #Singular`],
  [`[burnt] the cake`, `#Verb the #Singular`],
  [`Instagram star [captures] the silent beauty`, `#Noun+ #PresentTense the #Adjective #Singular`],
  [`go as i please`, `#Infinitive as #Pronoun #Infinitive`],
  [`the Oak tree [understood] and felt sad`, `the #Noun+ #PastTense and #PastTense #Adjective`],
  [`by asking [questions] about her`, `by #Gerund #Plural . her`],
  [`no worries`, `no #Plural`],
  [`for the first time`, `for the #Ordinal #Singular`],

  // prefixes
  [`we pre established it`, `we #Verb #PastTense it`],
  [`quickly co writing it`, `#Adverb #Verb #Gerund it`],
  [`it was really mis firing`, `it #Copula #Adverb #Verb+`],
  // [`it was pre written`, `#Pronoun #PastTense (#Verb && #Prefix) #Participle`],
  [`we will out run the monster`, `we #Verb #Prefix #Infinitive the #Singular`],
  [`it can re spawn`, `it #Modal #Prefix #Infinitive`],
  [`it was un cool`, `it #PastTense (#Prefix && #Adjective) #Adjective`],
  [`it was pre windy`, `it #PastTense (#Prefix && #Adjective) #Adjective`],

  [`could ya`, `#Modal #Pronoun`],
  [`burst out laughing`, `#Verb+`],
  [`you guys are nice`, `#Uncountable+ are #Adjective`],
  [`On [Dutch] [maps]`, `on #Demonym #Plural`],
  [`Our balanced budget will increase [funding]`, `#Possessive #Adjective #Singular will #Infinitive #Singular`],
  [`What's small brown, hairy and [wears] sunglasses`, `what is #Adjective+ and #PresentTense #Plural`],
  // [`the town sang no more`, `the #Singular is #Adjective+`],
  [`the more he yearned`, `the #Noun he #PastTense`],
  [`Give more [details]`, `#Imperative #Adjective #Plural`],
  [`this place is a [must]`, `this #Noun is a #Singular`],
  [`Only [parents] can make sure the TV is turned off`, `only #Plural #Verb #PhrasalVerb+ the #Singular #Copula #PhrasalVerb+`],
  ['repairing crumbling roads', '#Gerund #Adjective #Plural'],
  ['Helping hardworking families', '#Gerund #Adjective #Plural'],
  [`I'm practising walking`, `i am #Gerund #Noun`],
  [`The pot seen here`, `#Determiner #Singular #Participle #Uncountable`],
  [`his [ashen] gray face became [scarlet] with [rage]`, `his #Adjective+ #Noun #PastTense #Adjective with #Singular`],
  [`dance music`, `#Noun+`],
  [`bowling league`, `#Noun+`],
  [`annual dancing festival`, `#Adjective #Noun+`],
  [`[Bitches] be frustrated`, `#Plural #Verb #PastTense`],
  [`we all swam`, `#Noun #Noun #PastTense`],
  [`he ate us all`, `#Pronoun #Verb #Noun #Noun`],
  [`I might be [alone] forever`, `#Pronoun #Auxiliary #Verb #Adjective #Adverb`],
  [`It was her [favorite] book`, `it #Verb #Possessive #Adjective #Noun`],
  [`It starts off [fine]`, `it #PresentTense #PhrasalVerb #Adjective`],
  [`It works out [fine]`, `it #PresentTense #PhrasalVerb #Adjective`],
  [`the [most] [stately] [manner]`, `the #Adverb #Adjective #Singular`],
  [`The bennies were [outstanding]`, `the #Plural #Copula #Adjective`],
  [`pale as a marble statue`, '#Adjective as a . #Singular'],
  // [`as [confused] as I am`, 'as #Adjective as #Pronoun am']
  [`numerous case studies`, `#Adjective #Noun+`],
  [`quickly brought under control`, `#Adverb #PhrasalVerb+ #Noun`],
  [`This claim was settled between`, `this #Noun was #PastTense between`],
  [`expect a period of sub-standard investment`, `#Imperative a #Noun of #Adjective #Singular`],
  [`in times of war and peace`, `in #Plural of #Singular and #Uncountable`],
  // actor/person
  [`the finance minister`, `the #Actor+`],
  [`the product manager`, `the #Actor+`],
  [`the city clerk`, `the #Actor+`],
  [`the staff lawyers`, `the #Actor+`],
  [`the senior developer`, `the #Actor+`],
  [`the viola player`, `the #Actor+`],
  [`the nursary workers`, `the #Actor+`],
  [`the Safety Specialists`, `the #Actor+`],
  [`a spa manager`, `a #Actor+`],
  [`Wildlife biologists found`, `#Actor+ #Verb`],
  [`the radiologist`, `the #Actor+`],
  [`3 biochemists`, `3 #Actor+`],
  [`nurse Kelly`, `#Person+`],

  [`breaking: dogs nice`, `#Expression #Plural #Adjective`],
  [`forward: appartment price`, `#Expression #Noun+`],
  [`email: spencer@cool.com`, `#Noun #Email`],
  [`was [left] [dancing] alone`, `#Verb+ #Adjective`],
  [`where users [submit] drawings`, `#QuestionWord #Plural #Infinitive #Plural`],
  [`could be transcribed and [extended]`, `could be #PastTense and #PastTense`],
  [`self esteem has gotten [better]`, `#Noun+ #Verb #Verb #Comparative`],
  [`the many charms [which] [ravish] my soul`, `#Determiner #Adjective #Plural #Preposition #Infinitive #Possessive #Singular`],
  [`OA is [dedicated] [to] helping`, `#Acronym #Copula #PastTense #Conjunction #Gerund`],

  // imperatives
  // [`C'mon, Luisa`, `#Expression+ #Person`],
  [`Make fun of the monsters`, `#PhrasalVerb+ of the #Plural`],
  [`Waste materials are disposed`, `#Singular #Plural are #PastTense`],
  [`[Treat] UFO landings seriously`, `#Imperative #Acronym #Plural #Adverb`],
  [`Honey, would you like a snack?`, `#Noun #Modal #Pronoun #Infinitive a #Singular`],
  [`go there quickly`, `#Imperative there #Adverb`],
  [`Fill up the tank`, `#Imperative #Particle #Determiner #Singular`],

  [`I find myself singing the blues`, `#Pronoun #Infinitive #Reflexive #Gerund the #Plural`],
  [`make myself agreeable`, `#Infinitive #Reflexive #Adjective`],
  [`can i sleep`, `#Modal #Noun #Infinitive`],
  [`would you look`, `#Modal #Noun #Infinitive`],
  [`may car camp`, `#Modal #Noun #Infinitive`],
  [`you can bunny bump`, `#Pronoun #Modal #Noun #Infinitive`],
  [`The pedicurist did not massage`, `the #Actor #Verb not #Infinitive`],
  [`child care is [now] [provided] by relatives`, `#Singular+ #Copula now #PastTense #Preposition #Plural`],
  [`nick the skin`, `#Infinitive the #Noun`],
  [`I saw nick`, `i #PastTense #FirstName`],
  [`you can [grace] the cover`, `#Pronoun #Verb+ the #Noun`],
  [`[Cute] neighborhood`, `#Adjective #Singular`],
  [`do [you] eat it`, `#QuestionWord #Pronoun #Infinitive it`],
  [`does he agree`, `#QuestionWord #Pronoun #Infinitive`],
  [`he does homework`, `#Pronoun !#QuestionWord #Noun`],
  [`do they even know`, `#QuestionWord #Pronoun #Adverb #Infinitive`],
  // [`been overrun by insurgents`, `#Auxiliary #PresentTense by #Plural`],
  [`Due to weather`, `#Adjective #Conjunction #Noun`],
  [`weather the storm`, `#Verb the #Noun`],
  [`while the weather is clear`, `#Conjunction #Determiner #Noun #Copula #Adjective`],
  [`I've been told`, `i #Auxiliary !#PastTense #PastTense`],
  [`a number of breakfast dishes and desserts`, `a #Noun of #Noun+ and #Noun`],
  // hasDash
  //noun-past
  [`a bone-headed decision`, `a #Noun #Adjective #Noun`],
  [`Peer-reviewed reports`, `#Noun #Adjective #Noun`],
  [`faith-based groups`, `#Noun #Adjective #Noun`],
  [`self-absorbed bimbo`, `#Noun #Adjective #Noun`],
  [`The self-released EP`, `the #Noun #Adjective #Acronym`],
  [`much-appreciated movie`, `#Adverb #Adjective #Noun`],
  [`2-fold strategy`, `#Adjective+ #Noun`],
  // [`must-see show`, `#Adjective+ #Noun`],
  // [`pop-up shop`, `#Adjective+ #Noun`],
  [`hard-nosed veteran`, `#Adjective+ #Noun`],
  [`good-tempered and polite`, `#Adjective+ and #Adjective`],
  [`10 just-announced films`, `#Value #Adverb #Adjective #Noun`],
  [`fed-up users`, `#Adjective+ #Plural`],
  [`rapidly-changing economy`, `#Adverb #Adjective #Noun`],
  // [`the dammed-up gutters`, `the #Adjective+ #Plural`],
  // [`hard-fought victories`, `#Adjective+ #Noun`],
  [`hella-boring meeting`, `#Adverb #Adjective #Singular`],
  [`a quick-cut`, `a #Adjective #Singular`],
  // auxiliary verbs
  [`you're getting worked up`, `#Pronoun #Copula #Auxiliary #PhrasalVerb+`],
  [`before getting dressed`, `before (!#Gerund && #Auxiliary) #PastTense`],
  [`was being applied `, `#Auxiliary (!#Gerund && #Auxiliary) #PastTense`],
  // gerunds
  ['banning', '#Gerund'],
  ['my cunning', 'my #Noun'],
  ['fanning', '#Gerund'],
  ['planning', '#Gerund'],
  ['running', '#Gerund'],
  ['spanning', '#Gerund'],
  ['spinning', '#Gerund'],
  ['stunning', '#Adjective'],
  ['no soviet would go', 'no #Noun #Modal #Infinitive'],
  [`per inning pitched`, `#Preposition #Singular #PastTense`],
  [`ripping open its packaging`, `#PhrasalVerb+ #Possessive #Noun`],
  [`using roof shingles`, `#Gerund #Singular #Noun`],

  ['practicing walking', '#Gerund #Gerund'],
  ['looking annoying', '#Gerund #Adjective'],
  ['a nearly overpowering feeling', 'a #Adverb #Adjective #Noun'],
  ['Adjective meaning alluring', '#Noun #Gerund #Adjective'],
  [`I'm shaking, falling onto my knees`, 'i am #Gerund #Gerund onto my #Plural'],
  ['keep subsidizing skyrocketing tuition', '#Verb #Gerund #Adjective #Noun'],
  // [``, ``],
]
test('match:', function (t) {
  let res = []
  arr.forEach(function (a) {
    let [str, match] = a
    let doc = nlp(str).compute('tagRank')
    // doc.tagger().tagger()
    let tags = doc.json()[0].terms.map(term => term.tagRank[0])
    let msg = `'${(str + "' ").padEnd(20, ' ')}  - '${tags.join(', ')}'`
    let m = doc.match(match)

    if (m.text() !== doc.text()) {
      res.push(a[0])
    }
    t.equal(m.text(), doc.text(), here + msg)
  })
  // console.log(JSON.stringify(res, null, 2))
  t.end()
})
