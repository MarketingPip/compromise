main things:

- esmodules
- one/two/three split
- drop IE11
- cache a sequence of matches
- better logging

* user-given lexicon is less co-ercive

```js
nlp('Dan Brown', { brown: 'Color' }).has('#Color') //false
```

this means adding your own words is less-dangerous.

---

### One

### Two

### Three

---

### Unmaintained indexes

```js
let m = nlp('the dog is nice')
let sub = m.match('is')
sub.insertAfter('really')
// t.equal(sub.out('normal')
```

### Clone/Fork

`.clone()` will copy the document data, and `.fork()` will copy the linguistic context.

a subset of a document can be cloned.

### Loop changes

- .find() does not return undefined on an empty result anymore

- .sort() does not change the document in-place anymore

### Text formats

- **normal**
  human-readable, lowercased, ascii-when-possible

- **machine**
  expanded contractions, no apostrophes,

```js
{
  text: "Spencer's",
  normal: "spencer's",
  machine: 'spencer'
},
{
  text: 're-factor',
  normal: 're-factor',
  machine: 'refactor'
}
```

```js
//matching from an array
match(['foo', 'far'])
```

- **[breaking]** - drop `.parent()` and `.parents()` chain - (use `.all()` instead)
- **[breaking]** - refactor `.out('freq')` output format - (uses `.compute('freq').terms().unique().json()` instead)
- **[breaking]** - drop array support in match methods - (use `.match().match()` instead)
- **[breaking]** - drop support for using Doc object as match input
- **[breaking]** - drop `@titleCase` alias (use @isTitleCase)
- **[breaking]** - drop '.get()' alias - use '.eq()'
- move fuzzy matching to a plugin

- **[change]** merge re-used capture-group names in one match
- **[change]** drop support for undocumented empty '.split()' methods - which used to split the parent
- **[change]** change .text('fmt') formats
- **[change]** @hasContraction is no-longer secretly-greedy. use `@hasContraction{2}`
- **[change]** .and() now does a set 'union' operation of results (no overlaps)
- **[change]** bestTag is now `.compute('tagRank')`
- **[change]** .sort() is no longer in-place (its now immutable)
- **[change]** drop undocumented options param to `.replaceWith()` method
- **[change]** add match-group as 2nd param to split methods
- **[change]** remove #FutureTense tag - which is not really a thing in english
- **[change]** .unique() no-longer mutates parent

- **[new]** .union(), .intersection(), .difference() and .complement() methods
- **[new]** .freeze(), unfreeze() - prevent a match from drifting, once parent is mutated
- **[new]** .settle() - remove overlaps in matches
- **[new]** .is() - helper-method for comparing two views
- **[new]** .none() - helper-method for returning an empty view of the document
- **[new]** .toView() method - drop back to a normal Class instance

---

### plugins

adjectives
export
hash
html
ngrams
numbers
paragraphs
pronounce
redact
scan
sentences
strict
syllables
typeahead
keypress

### search