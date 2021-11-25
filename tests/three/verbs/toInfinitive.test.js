import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/verb-toInfinitive] '

test('toInfinitive:', function (t) {
  let arr = [
    ['he walked', 'he walk'],
    ['i walked', 'i walk'],
    ['we walked', 'we walk'],
    ['they walked', 'they walk'],
    ['the friends walked', 'the friends walk'],
    ['the friend walked', 'the friend walk'],
    ['our users walked', 'our users walk'],
    ['our user walked', 'our user walk'],
    ['the eye closed', 'the eye close'],
    ['the eyes closed', 'the eyes close'],
    ['their colloseum will open', 'their colloseum open'],
    ['their children will open', 'their children open'],
    ['he walks', 'he walk'],
    ['he walked', 'he walk'],
    ['he will walk', 'he walk'],
    ['he is walking', 'he walk'],
    ['he was walking', 'he walk'],
    ['i am walking', 'i walk'],
    ['he will be walking', 'he walk'],
    ['he has walked', 'he walk'],
    ['he had walked', 'he walk'],
    ['he will have walked', 'he walk'],
    ['he has been walking', 'he walk'],
    ['he had been walking', 'he walk'],
    ['he will have been walking', 'he walk'],
    ['got walked', 'walk'],
    ['was walked', 'walk'],
    ['were walked', 'walk'],
    ['i was being walked', 'i walk'],
    ['had been walked', 'walk'],
    ['have been walked', 'walk'],
    ['is walked', 'walk'],
    ['are walked', 'walk'],
    ['is being walked', 'walk'],
    ['she has been walked', 'she walk'],
    ['had been walked', 'walk'],
    ['will have been walked', 'walk'],
    ['will be walked', 'walk'],
    ['would be walked', 'walk'],
    ['would have been walked', 'walk'],
    ['is going to walk', 'walk'],
    ['did walk', 'walk'],
    ['used to walk', 'walk'],
    ['do walk', 'walk'],
    ['does walk', 'walk'],

    // want-infinitive
    // ['he wants to walk', 'he want to walk'],
    // ['he wanted to walk', 'he want to walk'],
    // ['he will want to walk', 'he want to walk'],
    // adverbs
    ['i was really not being walked', 'i really not walk'],
    ['i was not really being walked', 'i not really walk'],
    ['i was being really not walked', 'i really not walk'],
    ['i was being not really walked', 'i not really walk'],
    ['he was not going to walk', 'he not walk'],
    ['we are putting', 'we put'],

    // from particple
    ["overthrown", "overthrow"],
    ["thrown", "throw"],
    ["overgrown", "overgrow"],
    ["flown", "fly"],
    ["shown", "show"],
    ["sown", "sow"],
    ["sworn", "swear"],
    ["worn", "wear"],
    ["forgotten", "forget"],
    ["bitten", "bite"],
    ["stolen", "steal"],
    ["mistaken", "mistake"],
    ["shrunk", "shrink"],

    ["upheld", "uphold"],
    ["withheld", "withhold"],
    ["dyed", "dye"],
    ["gutted", "gut"],
    ["slotted", "slot"],
    ["allotted", "allot"],
    ["dotted", "dot"],
    ["acquitted", "acquit"],
    ["knitted", "knit"],
    ["transmitted", "transmit"],
    ["permitted", "permit"],
    ["omitted", "omit"],
    ["committed", "commit"],
    ["remitted", "remit"],
    ["emitted", "emit"],
    ["admitted", "admit"],
    ["submitted", "submit"],
    ["outfitted", "outfit"],
    ["refitted", "refit"],
    ["benefitted", "benefit"],
    ["fitted", "fit"],
    ["vetted", "vet"],
    ["persuaded", "persuade"],
    ["netted", "net"],
    ["formatted", "format"],
    ["tasted", "taste"],
    ["quoted", "quote"],
    ["consulted", "consult"],
    ["resulted", "result"],
    ["catapulted", "catapult"],
    ["defaulted", "default"],
    ["wilted", "wilt"],
    ["tilted", "tilt"],
    ["salted", "salt"],
    ["malted", "malt"],
    ["exited", "exit"],
    ["deposited", "deposit"],
    ["transited", "transit"],
    ["revisited", "revisit"],
    ["visited", "visit"],
    ["inherited", "inherit"],
    ["solicited", "solicit"],
    ["expedited", "expedite"],
    ["marketed", "market"],
    ["skyrocketed", "skyrocket"],
    ["acted", "act"],
    ["accentuated", "accentuate"],
    ["situated", "situate"],
    ["perpetuated", "perpetuate"],
    ["fluctuated", "fluctuate"],
    ["evaluated", "evaluate"],
    ["graduated", "graduate"],
    ["abbreviated", "abbreviate"],
    ["alleviated", "alleviate"],
    ["deviated", "deviate"],
    ["renegotiated", "renegotiate"],
    ["negotiated", "negotiate"],
    ["differentiated", "differentiate"],
    ["substantiated", "substantiate"],
    ["self-initiated", "self-initiate"],
    ["initiated", "initiate"],
    ["satiated", "satiate"],
    ["expropriated", "expropriate"],
    ["appropriated", "appropriate"],
    ["affiliated", "affiliate"],
    ["conciliated", "conciliate"],
    ["repudiated", "repudiate"],
    ["mediated", "mediate"],
    ["associated", "associate"],
    ["enunciated", "enunciate"],
    ["created", "create"],
    ["warehoused", "warehouse"],
    ["kissed", "kiss"],
    ["missed", "miss"],
    ["spurred", "spur"],
    ["blurred", "blur"],
    ["incurred", "incur"],
    ["occurred", "occur"],
    ["deterred", "deter"],
    ["transferred", "transfer"],
    ["conferred", "confer"],
    ["inferred", "infer"],
    ["referred", "refer"],
    ["marred", "mar"],
    ["jarred", "jar"],
    ["scarred", "scar"],
    ["barred", "bar"],
    ["scored", "score"],
    ["flavored", "flavor"],
    ["favored", "favor"],
    ["monitored", "monitor"],
    ["factored", "factor"],
    ["co-sponsored", "co-sponsor"],
    ["sponsored", "sponsor"],
    ["mirrored", "mirror"],
    ["tailored", "tailor"],
    ["anchored", "anchor"],
    ["stopped", "stop"],
    ["topped", "top"],
    ["popped", "pop"],
    ["chopped", "chop"],
    ["sipped", "sip"],
    ["outstripped", "outstrip"],
    ["stripped", "strip"],
    ["whipped", "whip"],
    ["transshipped", "transship"],
    ["worshipped", "worship"],
    ["shipped", "ship"],
    ["dipped", "dip"],
    ["stepped", "step"],
    ["tapped", "tap"],
    ["unwrapped", "unwrap"],
    ["shrinkwrapped", "shrinkwrap"],
    ["wrapped", "wrap"],
    ["strapped", "strap"],
    ["trapped", "trap"],
    ["scrapped", "scrap"],
    ["snapped", "snap"],
    ["mapped", "map"],
    ["revamped", "revamp"],
    ["stamped", "stamp"],
    ["clamped", "clamp"],
    ["helped", "help"],
    ["seeped", "seep"],
    ["reaped", "reap"],
    ["banned", "ban"],
    ["frowned", "frown"],
    ["drowned", "drown"],
    ["crowned", "crown"],
    ["browned", "brown"],
    ["renowned", "renown"],
    ["downed", "down"],
    ["wholly-owned", "wholly-own"],
    ["co-owned", "co-own"],
    ["owned", "own"],
    ["pawned", "pawn"],
    ["attuned", "attune"],
    ["tuned", "tune"],
    ["boned", "bone"],
    ["stunned", "stun"],
    ["twinned", "twin"],
    ["underpinned", "underpin"],
    ["skinned", "skin"],
    ["thinned", "thin"],
    ["spanned", "span"],
    ["panned", "pan"],
    ["scanned", "scan"],
    ["canned", "can"],
    ["intertwined", "intertwine"],
    ["entwined", "entwine"],
    ["destined", "destine"],
    ["quarantined", "quarantine"],
    ["enshrined", "enshrine"],
    ["predetermined", "predetermine"],
    ["undermined", "undermine"],
    ["examined", "examine"],
    ["mined", "mine"],
    ["outlined", "outline"],
    ["underlined", "underline"],
    ["streamlined", "streamline"],
    ["sidelined", "sideline"],
    ["inclined", "incline"],
    ["declined", "decline"],
    ["lined", "line"],
    ["machined", "machine"],
    ["imagined", "imagine"],
    ["confined", "confine"],
    ["defined", "define"],
    ["fined", "fine"],
    ["dined", "dine"],
    ["combined", "combine"],
    ["convened", "convene"],
    ["planed", "plane"],
    ["caned", "cane"],
    ["annulled", "annul"],
    ["extolled", "extol"],
    ["controlled", "control"],
    ["distilled", "distil"],
    ["levelled", "level"],
    ["travelled", "travel"],
    ["expelled", "expel"],
    ["dispelled", "dispel"],
    ["compelled", "compel"],
    ["funnelled", "funnel"],
    ["channelled", "channel"],
    ["modelled", "model"],
    ["cancelled", "cancel"],
    ["labelled", "label"],
    ["rivalled", "rival"],
    ["profiled", "profile"],
    ["scaled", "scale"],
    ["baled", "bale"],
    ["invoked", "invoke"],
    ["revoked", "revoke"],
    ["smoked", "smoke"],
    ["choked", "choke"],
    ["spiked", "spike"],
    ["mimicked", "mimic"],
    ["flaked", "flake"],
    ["baked", "bake"],
    ["guaranteed", "guarantee"],
    ["agreed", "agree"],
    ["freed", "free"],
    ["fed", "feed"],
    ["reworded", "reword"],
    ["worded", "word"],
    ["afforded", "afford"],
    ["recorded", "record"],
    ["forwarded", "forward"],
    ["rewarded", "reward"],
    ["guarded", "guard"],
    ["regarded", "regard"],
    ["discarded", "discard"],
    ["carded", "card"],
    ["bombarded", "bombard"],
    ["ended", "end"],
    ["aided", "aid"],
    ["plodded", "plod"],
    ["skidded", "skid"],
    ["embedded", "embed"],
    ["dissuaded", "dissuade"],
    ["persuaded", "persuade"],
    ["dubbed", "dub"],
    ["bobbed", "bob"],
    ["ribbed", "rib"],
    ["swabbed", "swab"],
    ["stabbed", "stab"],
    ["nabbed", "nab"],
    ['opened', 'open'],
    ["resold", "resell"],
    ["blitzed", "blitz"],
    ["overpaid", "overpay"],
    ["toasted", "toast"],
    ["marketed", "market"],
    ["skyrocketed", "skyrocket"],
    ["ticketed", "ticket"],
    ["aroused", "arouse"],
    ["espoused", "espouse"],
    ["warehoused", "warehouse"],
    ["focused", "focus"],
    ["created", "create"],
    ["acquired", "acquire"],
    ["aired", "air"],
    ["persevered", "persevere"],
    ["imprisoned", "imprison"],
    ["poisoned", "poison"],
    ["seasoned", "season"],
    ["combed", "comb"],
    ["climbed", "climb"],
    ["succumbed", "succumb"],
    ["decreed", "decree"],
    ["hacked", "hack"],
    ["clocked", "clock"],
    ["blocked", "block"],
    ["linked", "link"],
    ["tasked", "task"],
    ["reckoned", "reckon"],
    ["shouted", "shout"],
    ["poured", "pour"],
    ["grouped", "group"],
    ["aroused", "arouse"],
    ["decreed", "decree"],
    ["freed", "free"],

    // ["interpreted", "interpret"],
    // ["longed", "long"],
    // ["intervened", "intervene"],
    // ["stoned", "stone"],
    // ["phoned", "phone"],
    // ["overtaken", "overtake"],
    // ["undertaken", "undertake"],
    // ["taken", "take"],
    // ["overseen", "oversee"],
    // ["foreseen", "foresee"],
    // ["overridden", "override"],
    // ["forbidden", "forbid"],
    // ["withstood", "withstand"],
    // ["ground", "grind"],
    // ["acquired", "acquire"],
    // ["aired", "air"],
    // ["adhered", "adhere"],
    // ["ill-equipped", "ill-equip"],
    // ["equipped", "equip"],
    // ["underdeveloped", "underdevelop"],
    // ["well-developed", "well-develop"],
    // ["foreign-owned", "foreign-own"],

    ["forecasted", "forecast"],
    // ["overseen", "oversee"],
    // ["misunderstood", "misunderstand"],
    // ["unwound", "unwind"],
    ["blasted", "blast"],
    ["ignited", "ignite"],
    ["permeated", "permeate"],
    // ["recreated", "recreate"],
    ["praised", "praise"],
    ["explored", "explore"],
    ["layered", "layer"],
    ["answered", "answer"],
    ["lowered", "lower"],
    ["severed", "sever"],
    ["covered", "cover"],
    ["leaked", "leak"],
    // ["misled", "mislead"],
    ["buttered", "butter"],
    ["uttered", "utter"],
    ["cleaned", "clean"],
    ["rained", "rain"],
    ["joined", "join"],
    ["ruined", "ruin"],
    // ["postponed", "postpone"],
    // ["pondered", "ponder"],
    ["triggered", "trigger"],
    ["checkered", "checker"],
    ["slaughtered", "slaughter"],
    ["chartered", "charter"],
    ["sequestered", "sequester"],
    ["bolstered", "bolster"],
    ["mustered", "muster"],


    ['benefited', 'benefit'],
    // ['credited', 'credit'],
    ['deposited', 'deposit'],
    ['edited', 'edit'],
    ['exhibited', 'exhibit'],
    ['exploited', 'exploit'],
    ['inherited', 'inherit'],
    ['prohibited', 'prohibit'],
    ['recruited', 'recruit'],
    ['submited', 'submit'],
    ['suited', 'suit'],
    ['visited', 'visit'],
    ['vomited', 'vomit'],
    ['waited', 'wait'],

    ['cited', 'cite'],
    ['excited', 'excite'],
    ['invited', 'invite'],
    ['recited', 'recite'],


  ]
  arr.forEach(a => {
    let doc = nlp(a[0])
    doc.verbs().toInfinitive()
    t.equal(doc.text(), a[1], here + ' ' + a[0])
  })
  t.end()
})
