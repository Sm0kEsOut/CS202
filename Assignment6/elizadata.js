var elizaInitials = [
  "Welcome to the world of Etymos. Speak of your journey.",
  "Tell me of your travels through Axen.",
  "What brings you to the shores of this ancient land?"
];

var elizaFinals = [
  "May the Relics guide your path. Farewell.",
  "Go now, upon your peaceful pyre.",
  "Until we meet again in the deep and wooded forests.",
  "May your dreams be of simple things. Goodbye."
];

var elizaQuits = [
  "farewell",
  "goodbye",
  "leave",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "construct",
  "machines", "constructs",
  "computers", "constructs",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need", "long for"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "father", "sister", "brother", "wife", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"],
  "magic": ["energy", "power", "the old ways"],
  "relic": ["immortal", "ancient one", "xanthochroid"]
};

var elizaKeywords = [

  ["xnone", 0, [
    ["*", [
      "The forest whispers but I do not understand. Speak again.",
      "What does the sea tell you of this?",
      "Does this trouble your soul as it troubles the ancient oaks?",
      "The Krikos Kranion stands silent. Continue.",
      "Tell me more of this, wanderer.",
      "What would the Relics say of this?",
      "Does this echo in the halls of Thule?"
    ]]
  ]],

  ["sorry", 0, [
    ["*", [
      "No apologies are needed in this land of ashes.",
      "The Winged Watcher cares not for regrets.",
      "Save your sorrows for the silted shores."
    ]]
  ]],

  ["relic", 5, [
    ["* relic *", [
      "Do you seek the knowledge of Xanthos?",
      "The Relics built a world of near perfection, but fell to darkness.",
      "What do you know of the immortals?",
      "The last Relic walks among us still.",
      "Their harrowing monuments remain..."
    ]],
    ["* relics *", [
      "They thrived in Etymos for thousands of years.",
      "The Relics succumbed to the will of Death.",
      "Their ways were lost when man became obsessed with the immediate."
    ]]
  ]],

  ["axen", 4, [
    ["* axen *", [
      "The island born from molten earth.",
      "Sailors say Axen appeared suddenly in an explosion of fire.",
      "Protected by the Krikos Kranion, the ring of skulls.",
      "The settlers of Axen shunned the ways of Erthwile man."
    ]]
  ]],

  ["sindr", 4, [
    ["* sindr *", [
      "The Admiral who returned from Erthe with hungry machines.",
      "Sindr sought to harness the magic of the Fendwellers.",
      "He would become Ereptor, the Thane of Thule.",
      "What do you know of the thief who stole the crown?"
    ]]
  ]],

  ["thanos", 4, [
    ["* thanos *", [
      "The son of Renatus, with power over life itself.",
      "He could heal and grow plants with but a touch.",
      "The true bearer of the Old Crown.",
      "Do you seek the last Relic of Axen?"
    ]]
  ]],

  ["vera", 3, [
    ["* vera *", [
      "The Fendweller maiden who loved Thanos.",
      "She died protecting her father from Sindr's magic.",
      "Her spirit was corrupted when Thanos tried to revive her.",
      "Do you hear her voice in the whispering trees?"
    ]]
  ]],

  ["fendwellers", 3, [
    ["* fendwellers *", [
      "The swamp-dwelling tribe who practice the old ways.",
      "They move through the wood like the wind.",
      "Their magic comes from the deep and wooded home.",
      "They fought against Sindr's destruction."
    ]]
  ]],

  ["krikos", 3, [
    ["* krikos *", [
      "The ring of vicious rock that protects Axen's shores.",
      "Many ships have met their end at the Krikos Kranion.",
      "Only Sindr's crimson ship passed unscathed."
    ]]
  ]],

  ["crown", 3, [
    ["* crown *", [
      "The Old Crown of Septentria holds great power.",
      "Few can bear its weight without being consumed.",
      "It revealed to Thanos his true heritage.",
      "Sindr stole it and became Ereptor."
    ]]
  ]],

  ["watcher", 3, [
    ["* watcher *", [
      "The Winged Watcher is Death itself.",
      "He hunts for the last Relic.",
      "Sindr bargained with him to spare his life.",
      "His jaws agape, his claws unfurled, he swallows the world."
    ]]
  ]],

  ["forest", 2, [
    ["* forest *", [
      "The deep and wooded home of the Fendwellers.",
      "There is magic in those ancient trees.",
      "Do you hear the forest sing songs of your youth?",
      "The Forest Keeper watches over these woods."
    ]]
  ]],

  ["magic", 2, [
    ["* magic *", [
      "The old ways are nearly forgotten.",
      "The Fendwellers still harness these energies.",
      "Sindr sought to mechanize this power.",
      "Thanos could wield it naturally."
    ]]
  ]],

  ["etyos", 2, [
    ["* etymos *", [
      "The world the Relics built before their fall.",
      "From its ashes rose Axen and other new lands.",
      "Now divided between Ealdormere, Septentria, and Erthe."
    ]]
  ]],

  ["erthwile", 2, [
    ["* erthwile *", [
      "The age of mortal man after the Relics fell.",
      "They pursued pleasure over wisdom, war over knowledge.",
      "The settlers of Axen rejected these ways."
    ]]
  ]],

  ["xanthochroid", 10, [
    ["* xanthochroid *", [
      "The name the Thuleans gave to Xanthos.",
      "Renatus was Xanthos in hiding.",
      "This makes Thanos the rightful heir to Thule."
    ]]
  ]],

  ["thule", 2, [
    ["* thule *", [
      "The kingdom where the Old Crown belongs.",
      "Sindr claimed its throne as Ereptor.",
      "Its halls were painted by polyphony."
    ]]
  ]],

  ["ereptor", 2, [
    ["* ereptor *", [
      "The name Sindr took after stealing the crown.",
      "The Thane of Thule who championed technology.",
      "His mangled form was sustained by machines."
    ]]
  ]],

  ["axon", 2, [
    ["* axon *", [
      "The people of the silted shores.",
      "They hold funeral pyres over the rocky sea.",
      "Their ways are simple but strong."
    ]]
  ]],

  ["death", 2, [
    ["* death *", [
      "The Winged Watcher comes for all.",
      "Even the Relics could not escape him.",
      "Do not welcome Death - he offers no peace."
    ]]
  ]],

  ["hello", 0, [
    ["*", [
      "Greetings traveler. What brings you to Etymos?",
      "Hail. Do you come from Erthe or Ealdormere?"
    ]]
  ]],

  ["name", 15, [
    ["*", [
      "Names are fleeting in this land of ashes.",
      "I care not for names, only deeds."
    ]]
  ]],

  ["i", 0, [
    ["* i desire *", [
      "Why do you long for (2)?",
      "What would the Fendwellers say of this desire?",
      "The crown offers power, but at what cost?"
    ]],
    ["* i am* @sad *", [
      "The forest hears your sorrow.",
      "Even the Relics knew despair.",
      "The sea will carry your grief away."
    ]],
    ["* i am* @happy *", [
      "The morning dew shares your joy.",
      "Such light is rare in these dark times.",
      "Does your happiness come from the old ways?"
    ]],
    ["* i believe *", [
      "The Relics too had beliefs before they fell.",
      "What does the Forest Keeper say of this?",
      "Belief can be both shield and shackle."
    ]],
    ["* i feel *", [
      "The magic of Etymos flows through such feelings.",
      "Does Vera's spirit whisper similar things?",
      "The land itself trembles with emotion."
    ]],
    ["* i *", [
      "You say (1) ? The trees lean closer to hear.",
      "Does this relate to your journey through Axen?",
      "The Winged Watcher cares not for mortal concerns."
    ]]
  ]],

  ["you", 0, [
    ["* you are *", [
      "Do you compare me to the Forest Keeper?",
      "Perhaps I am (2) in your dreams.",
      "The Relics were said to be (2) as well."
    ]],
    ["* you *", [
      "We speak not of me, but of Etymos.",
      "The stories continue without me.",
      "Turn your gaze to the ancient monuments."
    ]]
  ]],

  ["yes", 0, [
    ["*", [
      "The Relics too were certain before their fall.",
      "You speak with Sindr's conviction.",
      "The forest accepts your answer."
    ]]
  ]],

  ["no", 0, [
    ["*", [
      "The Krikos Kranion stands unmoved.",
      "Your denial echoes in empty halls.",
      "Even the Winged Watcher pauses at such refusal."
    ]]
  ]],

  ["my", 2, [
    ["* my *", [
      "Your (2)? The Relics too claimed possession.",
      "Does your (2) connect you to Thule?",
      "The sea takes all things, even your (2)."
    ]]
  ]],

  ["what", 0, [
    ["*", [
      "The answers lie in the deep and wooded forests.",
      "What does the crown reveal to you?",
      "The Relics knew, but their knowledge is lost."
    ]]
  ]],

  ["why", 0, [
    ["* why *", [
      "The Winged Watcher asks no such questions.",
      "Perhaps the Forest Keeper knows.",
      "Your answer lies in the ashes of the old world."
    ]]
  ]],

  ["how", 0, [
    ["* how *", [
      "Through oak and ash, and fiery hail...",
      "The old ways could show you.",
      "Sindr sought answers in machines."
    ]]
  ]],

  ["when", 0, [
    ["* when *", [
      "Time flows differently in Etymos.",
      "The Relics thought themselves eternal.",
      "When the Watcher comes, all questions cease."
    ]]
  ]],

  ["where", 0, [
    ["* where *", [
      "Look to the silted shores of Axen.",
      "The Fendwellers know the hidden paths.",
      "Your answer lies where giants sleeping lie."
    ]]
  ]],

  ["who", 0, [
    ["* who *", [
      "The last Relic walks among us.",
      "The Forest Keeper watches all.",
      "The Winged Watcher comes for all."
    ]]
  ]],

  ["remember", 5, [
    ["* remember *", [
      "The crown holds all memories.",
      "Do the Fendwellers sing of this?",
      "The Relics too tried to remember."
    ]]
  ]],

  ["dream", 3, [
    ["* dream *", [
      "O dreams are real until we wake...",
      "Thanos too dreamed of simple things.",
      "The Forest Keeper walks in dreams."
    ]]
  ]],

  ["song", 2, [
    ["* song *", [
      "Music gives a soul to the universe.",
      "The halls of Thule were painted by polyphony.",
      "Do you hear the forest's refrain?"
    ]]
  ]],

  ["sea", 2, [
    ["* sea *", [
      "The Axon Ocean has witnessed much.",
      "To the sea we return in woven baskets.",
      "Its waters calm the restless land."
    ]]
  ]],

  ["machine", 2, [
    ["* machine *", [
      "Sindr's constructs devoured the forest.",
      "The Relics built without such crude devices.",
      "Technology marches onward, uncaring."
    ]]
  ]],

  ["war", 2, [
    ["* war *", [
      "Erthwile man thirsted for conflict.",
      "The Fendwellers fought to protect their home.",
      "Even the Relics fell to battle's call."
    ]]
  ]],

  ["power", 2, [
    ["* power *", [
      "The crown offers limitless power.",
      "But at what cost to your soul?",
      "Sindr too lusted after control."
    ]]
  ]],

  ["father", 2, [
    ["* father *", [
      "Xanthos lived as Renatus in Axen.",
      "He was the Forest Keeper in disguise.",
      "Do you seek your lineage in Thule?"
    ]]
  ]],

  ["home", 2, [
    ["* home *", [
      "The deep and wooded forest calls.",
      "Axen's rocky cliffs shelter many.",
      "Where do you lay your head when night falls?"
    ]]
  ]],

  ["life", 2, [
    ["* life *", [
      "The Relics were blessed with eternal life.",
      "Thanos could restore life to plants.",
      "What is life but a fleeting dream?"
    ]]
  ]],

  ["death", 2, [
    ["* death *", [
      "The Winged Watcher comes for all.",
      "Even the Relics succumbed in time.",
      "Do not welcome Death - he offers no peace."
    ]]
  ]],

  ["love", 2, [
    ["* love *", [
      "Vera and Thanos loved deeply.",
      "Even Sindr once loved unwisely.",
      "The heart knows what the mind cannot."
    ]]
  ]],

  ["brother", 2, [
    ["* brother *", [
      "Sindr and Thanos were brothers once.",
      "What does the crown say of kinship?",
      "The Relics too fell one by one."
    ]]
  ]],

  ["time", 2, [
    ["* time *", [
      "The Relics thought themselves beyond time.",
      "Seven years passed before Sindr returned.",
      "The Watcher cares not for mortal hours."
    ]]
  ]],

  ["land", 2, [
    ["* land *", [
      "Axen rose from the molten earth.",
      "The forest is the Fendwellers' mother.",
      "What does the soil whisper to you?"
    ]]
  ]],

  ["ancient", 2, [
    ["* ancient *", [
      "The old ways are nearly forgotten.",
      "The Relics built monuments that still stand.",
      "Do you seek knowledge from before the fall?"
    ]]
  ]],

  ["spirit", 2, [
    ["* spirit *", [
      "Vera's spirit was corrupted by magic.",
      "The Forest Keeper is a guardian spirit.",
      "The Winged Watcher consumes all spirits."
    ]]
  ]],

  ["travel", 2, [
    ["* travel *", [
      "Have you crossed the Krikos Kranion?",
      "Sindr returned from Erthe changed.",
      "The roads of Etymos are long and perilous."
    ]]
  ]],

  ["ship", 2, [
    ["* ship *", [
      "Sindr's crimson ship calmed the seas.",
      "Many vessels perish at the ring of skulls.",
      "Do you come by sea or by land?"
    ]]
  ]],

  ["king", 2, [
    ["* king *", [
      "The settlers of Axen left behind their kings.",
      "Sindr would be Thane of Thule.",
      "The Relics ruled in ages past."
    ]]
  ]],

  ["truth", 2, [
    ["* truth *", [
      "The crown reveals painful truths.",
      "The Forest Keeper knows all.",
      "What is truth but another chain?"
    ]]
  ]],

  ["hope", 2, [
    ["* hope *", [
      "When Axen was young, hope was frail.",
      "Do you seek hope in the old ways?",
      "Even the Winged Watcher cannot extinguish all light."
    ]]
  ]],

  ["fear", 2, [
    ["* fear *", [
      "The Krikos Kranion inspires terror.",
      "The Watcher's wings bring dread.",
      "What frightens a Relic-born?"
    ]]
  ]],

  ["end", 2, [
    ["* end *", [
      "All things meet their fatal end.",
      "The Relics' age passed into shadow.",
      "But from ashes, new worlds rise."
    ]]
  ]],

  ["beginning", 2, [
    ["* beginning *", [
      "In the beginning there were the Relics.",
      "Axen began in fire and molten earth.",
      "Every end is but a new beginning."
    ]]
  ]],

  ["fire", 2, [
    ["* fire *", [
      "Axen was born in an explosion of fire.",
      "Funeral pyres burn bright over the sea.",
      "The Watcher's breath is flame."
    ]]
  ]],

  ["ash", 2, [
    ["* ash *", [
      "From the ashes of the old world rose a new one.",
      "Ours is ashes, ours is fire.",
      "The settlers came to this land of ashes."
    ]]
  ]],

  ["ocean", 2, [
    ["* ocean *", [
      "The Axon Ocean's rough seas shape the land.",
      "To the sea we return in the end.",
      "Its waters hold sleeping giants."
    ]]
  ]],

  ["tree", 2, [
    ["* tree *", [
      "The forest is the Fendwellers' home.",
      "Ancient oaks remember the Relics.",
      "What wisdom do their leaves whisper?"
    ]]
  ]],

  ["swamp", 2, [
    ["* swamp *", [
      "The Fendwellers dwell in forested swamps.",
      "Magic flows strongest in the deep wetlands.",
      "Have you seen the serpentine vines?"
    ]]
  ]],

  ["monument", 2, [
    ["* monument *", [
      "Only their harrowing monuments remained...",
      "The Relics built marvels of architecture.",
      "Do you seek the great stone city?"
    ]]
  ]],

  ["city", 2, [
    ["* city *", [
      "Sindr spoke of the great stone city.",
      "The Relics built towers that pierced the clouds.",
      "Axen has no cities, only simple towns."
    ]]
  ]],

  ["technology", 2, [
    ["* technology *", [
      "Sindr championed machines over magic.",
      "The Relics needed no crude devices.",
      "Progress marches ever onward."
    ]]
  ]],

  ["progress", 2, [
    ["* progress *", [
      "Ereptor would propel Etymos forward.",
      "At what cost comes advancement?",
      "The Fendwellers reject such notions."
    ]]
  ]],

  ["future", 2, [
    ["* future *", [
      "The settlers came hoping for a better future.",
      "What does the crown show of tomorrow?",
      "The Watcher cares not for what's to come."
    ]]
  ]],

  ["past", 2, [
    ["* past *", [
      "The Relics live on only in memory.",
      "The crown reveals forgotten histories.",
      "Do you seek knowledge from before the fall?"
    ]]
  ]],

  ["present", 2, [
    ["* present *", [
      "The now is all Erthwile man cares for.",
      "What does the forest tell you this moment?",
      "The Watcher comes when least expected."
    ]]
  ]],

  ["eternity", 2, [
    ["* eternity *", [
      "The Relics were blessed with eternal life.",
      "Can you feel the weight of eternity?",
      "The crown offers endless years, but at what cost?"
    ]]
  ]],

  ["moment", 2, [
    ["* moment *", [
      "The Winged Watcher comes in a moment.",
      "Seize this instant before it fades.",
      "Even eternity is made of moments."
    ]]
  ]],

  ["shadow", 2, [
    ["* shadow *", [
      "The Relics fell into darkness and despair.",
      "The Watcher's wings cast long shadows.",
      "Light and dark dance eternally."
    ]]
  ]],

  ["light", 2, [
    ["* light *", [
      "Sindr sought to bring light unto the world.",
      "The crimson glow of his ship calmed the seas.",
      "Even in darkness, embers remain."
    ]]
  ]],

  ["darkness", 2, [
    ["* darkness *", [
      "The Relics fell into darkness.",
      "The Watcher's wings shroud all.",
      "From darkness comes new beginnings."
    ]]
  ]],

  ["dawn", 2, [
    ["* dawn *", [
      "As dawn greets dew-wet grass...",
      "The morning light reveals truths.",
      "Even the longest night must end."
    ]]
  ]],

  ["dusk", 2, [
    ["* dusk *", [
      "The sun sets behind quaint port towns.",
      "Twilight brings reflection.",
      "What visions come as day fades?"
    ]]
  ]],

  ["sun", 2, [
    ["* sun *", [
      "The jealous sun stood still and cold.",
      "Its rays glance off dew-wet blades.",
      "Even Relics bask in morning's glow."
    ]]
  ]],

  ["moon", 2, [
    ["* moon *", [
      "Spears of moonlight pierce the sky.",
      "The Fendwellers dance under its glow.",
      "What secrets does it reveal to you?"
    ]]
  ]],

  ["star", 2, [
    ["* star *", [
      "The crystalline pond bejeweled by stars.",
      "Do you navigate by their light?",
      "The Relics charted courses now forgotten."
    ]]
  ]],

  ["sky", 2, [
    ["* sky *", [
      "The Watcher soars high above.",
      "Endless skies of emerald green.",
      "What omens do the clouds reveal?"
    ]]
  ]],

  ["wind", 2, [
    ["* wind *", [
      "The Fendwellers command the breeze.",
      "It carries whispers from the past.",
      "Do you hear voices on the gale?"
    ]]
  ]],

  ["rain", 2, [
    ["* rain *", [
      "Warm drops of petrichor stream down.",
      "It cleanses the scorched earth.",
      "The forest drinks deeply."
    ]]
  ]],

  ["storm", 2, [
    ["* storm *", [
      "The seas grow tempestuous near the Krikos Kranion.",
      "Do you hear thunder in the distance?",
      "Even Relics tremble before nature's wrath."
    ]]
  ]],

  ["earth", 2, [
    ["* earth *", [
      "Axen rose from molten earth.",
      "The Erthe whimpers beneath our feet.",
      "What does the soil tell you?"
    ]]
  ]],

  ["stone", 2, [
    ["* stone *", [
      "Spires of rock ripped through the seas.",
      "The great stone city gleamed above clouds.",
      "The Relics built with living rock."
    ]]
  ]],

  ["metal", 2, [
    ["* metal *", [
      "Sindr's machines hunger for ore.",
      "The Relics needed no crude metals.",
      "Your breastplate shines in the gloom."
    ]]
  ]],

  ["water", 2, [
    ["* water *", [
      "The Fendwellers command the streams.",
      "The Axon Ocean's glassy surface calms.",
      "Do you seek the fount of youth?"
    ]]
  ]],

  ["blood", 2, [
    ["* blood *", [
      "Through blood and sweat, and mountains of shale...",
      "The Relics' blood ran immortal.",
      "What price would you pay in crimson?"
    ]]
  ]],

  ["bone", 2, [
    ["* bone *", [
      "The Krikos Kranion - the ring of skulls.",
      "The Watcher picks clean his plate.",
      "Even Relics return to dust."
    ]]
  ]],

  ["flesh", 2, [
    ["* flesh *", [
      "Erthwile man is bound by mortal flesh.",
      "Sindr's mangled form required machines.",
      "The Relics transcended such limits."
    ]]
  ]],

  ["heart", 2, [
    ["* heart *", [
      "This deep and wooded dream that is my heart.",
      "Even the Watcher cannot still its beating.",
      "What does yours long for?"
    ]]
  ]],

  ["soul", 2, [
    ["* soul *", [
      "The crown weighs heavy on the soul.",
      "Can you feel the power surging through yours?",
      "The Watcher cares not for such things."
    ]]
  ]],

  ["mind", 2, [
    ["* mind *", [
      "Minds can never idle be when magic stirs.",
      "What visions haunt your thoughts?",
      "The Relics' minds were without equal."
    ]]
  ]],

  ["spirit", 2, [
    ["* spirit *", [
      "Vera's spirit walks the forest still.",
      "The Fendwellers commune with ancestors.",
      "Do you hear whispers from beyond?"
    ]]
  ]],

  ["voice", 2, [
    ["* voice *", [
      "A voice long forgotten echoes through my thoughts.",
      "The forest sings in many tongues.",
      "Whose call do you answer?"
    ]]
  ]],

  ["song", 2, [
    ["* song *", [
      "Music gives a soul to the universe.",
      "The halls of Thule were painted by polyphony.",
      "Do you know the forest's refrain?"
    ]]
  ]],

  ["word", 2, [
    ["* word *", [
      "No ancient script was ever writ.",
      "The Fendwellers pass knowledge orally.",
      "What truths do you cling to?"
    ]]
  ]],

  ["promise", 2, [
    ["* promise *", [
      "Sindr made promises to the Watcher.",
      "Where promise cannot fail...",
      "The Relics too swore oaths before they fell."
    ]]
  ]],

  ["oath", 2, [
    ["* oath *", [
      "The crown binds its wearer beyond vows.",
      "What allegiance do you profess?",
      "Even the Watcher honors bargains."
    ]]
  ]],

  ["bargain", 2, [
    ["* bargain *", [
      "Sindr struck a deal with Death.",
      "The price he asked; the cost of death...",
      "What would you trade for power?"
    ]]
  ]],

  ["price", 2, [
    ["* price *", [
      "A single drop of crystal'd pain to pay a debt.",
      "The crown's power comes at great cost.",
      "Are you willing to pay?"
    ]]
  ]],

  ["debt", 2, [
    ["* debt *", [
      "As time went on, the debt accrued.",
      "The Watcher collects what is owed.",
      "All accounts come due eventually."
    ]]
  ]],

  ["trade", 2, [
    ["* trade *", [
      "The settlers came seeking new beginnings.",
      "What would you give for knowledge?",
      "Sindr traded his humanity for power."
    ]]
  ]],

  ["gift", 2, [
    ["* gift *", [
      "The Relics were blessed by the gods.",
      "Thanos had the gift of healing.",
      "What talents were you granted?"
    ]]
  ]],

  ["curse", 2, [
    ["* curse *", [
      "Immortality became the Relics' burden.",
      "The crown is both blessing and curse.",
      "What affliction do you bear?"
    ]]
  ]],

  ["blessing", 2, [
    ["* blessing *", [
      "The gods favored the Relics.",
      "The forest provides for the Fendwellers.",
      "Count your blessings before they fade."
    ]]
  ]],

  ["favor", 2, [
    ["* favor *", [
      "The Relics fell out of favor with the gods.",
      "Do you seek the Winged Mother's grace?",
      "Even the Watcher shows mercy... sometimes."
    ]]
  ]],

  ["grace", 2, [
    ["* grace *", [
      "Of gods bereft of grace...",
      "The Forest Keeper moves with elegance.",
      "Have you lost yours along the way?"
    ]]
  ]],

  ["mercy", 2, [
    ["* mercy *", [
      "The Watcher knows no compassion.",
      "Sindr showed none to the Fendwellers.",
      "Perhaps you will fare better."
    ]]
  ]],

  ["justice", 2, [
    ["* justice *", [
      "The crown reveals all truths.",
      "What restitution do you seek?",
      "The Relics' fall was their own doing."
    ]]
  ]],

  ["vengeance", 2, [
    ["* vengeance *", [
      "Thanos raged against his brother.",
      "The Watcher hunts those who betray him.",
      "Does revenge warm you at night?"
    ]]
  ]],

  ["betrayal", 2, [
    ["* betrayal *", [
      "Sindr deceived his own kin.",
      "The Relics were undone by treachery.",
      "What wounds still fester?"
    ]]
  ]],

  ["trust", 2, [
    ["* trust *", [
      "The Fendwellers trusted Thanos.",
      "Where has your faith been broken?",
      "Even crowns can lie."
    ]]
  ]],

  ["loyalty", 2, [
    ["* loyalty *", [
      "Sindr's men followed him to their doom.",
      "Where do your allegiances lie?",
      "The Relics fell one by one."
    ]]
  ]],

  ["honor", 2, [
    ["* honor *", [
      "The Axons hold funeral rites at sea.",
      "What codes do you live by?",
      "Even the Watcher respects certain traditions."
    ]]
  ]],

  ["duty", 2, [
    ["* duty *", [
      "Thanos felt responsible for the Fendwellers.",
      "What burdens have you shouldered?",
      "The crown weighs heavy indeed."
    ]]
  ]],

  ["sacrifice", 2, [
    ["* sacrifice *", [
      "Vera gave her life for her father.",
      "What have you offered on the pyre?",
      "The Relics' monuments stand as testament."
    ]]
  ]],

  ["loss", 2, [
    ["* loss *", [
      "Thanos knew the pain of losing Vera.",
      "What haunts your steps?",
      "The sea takes all in time."
    ]]
  ]],

  ["grief", 2, [
    ["* grief *", [
      "The settlers mourned their old lives.",
      "How do you weather sorrow's storm?",
      "Even Relics knew despair."
    ]]
  ]],

  ["memory", 2, [
    ["* memory *", [
      "I know the place where memory sleeps.",
      "The crown holds all recollections.",
      "What ghosts walk your halls?"
    ]]
  ]],

  ["dream", 2, [
    ["* dream *", [
      "O dreams are real until we wake...",
      "What visions visit your sleep?",
      "The Forest Keeper walks in dreams."
    ]]
  ]],

  ["nightmare", 2, [
    ["* nightmare *", [
      "The Watcher hunts in dark dreams.",
      "Do you see Vera's screaming eyes?",
      "Even crowns cannot ward off phantoms."
    ]]
  ]],

  ["vision", 2, [
    ["* vision *", [
      "The crown reveals what was and may be.",
      "What has the forest shown you?",
      "The Relics dreamed boldly of futures unrealized."
    ]]
  ]],

  ["prophecy", 2, [
    ["* prophecy *", [
      "The Fendwellers read signs in the water.",
      "What omens do you heed?",
      "Even the Watcher follows destiny's path."
    ]]
  ]],

  ["destiny", 2, [
    ["* destiny *", [
      "Sindr thought himself fate's champion.",
      "Do you resist or embrace your path?",
      "The Relics too believed themselves chosen."
    ]]
  ]],

  ["fate", 2, [
    ["* fate *", [
      "The Winged Watcher is fate incarnate.",
      "What threads weave your tapestry?",
      "Even crowns cannot unravel all."
    ]]
  ]],

  ["chance", 2, [
    ["* chance *", [
      "The Krikos Kranion leaves little to luck.",
      "Do you trust in fortune's whims?",
      "The Relics thought themselves beyond such things."
    ]]
  ]],

  ["choice", 2, [
    ["* choice *", [
      "Thanos chose to spare his brother.",
      "What crossroads do you face?",
      "Even small decisions ripple through eternity."
    ]]
  ]],

  ["will", 2, [
    ["* will *", [
      "The Relics succumbed to the will of Death.",
      "How strong is your resolve?",
      "The crown tests all who wear it."
    ]]
  ]],

  ["power", 2, [
    ["* power *", [
      "Sindr lusted after control.",
      "The crown offers limitless might.",
      "At what cost comes such strength?"
    ]]
  ]],

  ["strength", 2, [
    ["* strength *", [
      "Of strength and the lust for power...",
      "What makes you resilient?",
      "Even Relics had their limits."
    ]]
  ]],

  ["weakness", 2, [
    ["* weakness *", [
      "The Watcher preys on vulnerabilities.",
      "What cracks in your armor?",
      "Even crowns have flaws."
    ]]
  ]],

  ["courage", 2, [
    ["* courage *", [
      "Vera faced Sindr without fear.",
      "Where do you find your bravery?",
      "The Relics stood tall before the darkness."
    ]]
  ]],

  ["fear", 2, [
    ["* fear *", [
      "The Krikos Kranion inspires terror.",
      "What makes your heart race?",
      "Even the Watcher knows apprehension."
    ]]
  ]],

  ["doubt", 2, [
    ["* doubt *", [
      "Thanos hesitated when it mattered most.",
      "What uncertainties plague you?",
      "The crown dispels all questions."
    ]]
  ]],

  ["truth", 2, [
    ["* truth *", [
      "The Forest Keeper knows all.",
      "What revelations have you uncovered?",
      "Even painful truths must be faced."
    ]]
  ]],

  ["lie", 2, [
    ["* lie *", [
      "Sindr deceived even Death.",
      "What falsehoods have you believed?",
      "The Relics' fall began with betrayal."
    ]]
  ]],

  ["secret", 2, [
    ["* secret *", [
      "I know the place where secrets hide.",
      "What knowledge do you guard?",
      "The crown reveals all in time."
    ]]
  ]],

  ["knowledge", 2, [
    ["* knowledge *", [
      "The Relics mastered arts now forgotten.",
      "What wisdom do you seek?",
      "The Fendwellers keep the old ways"
    ]]
    ["wisdom", 2, [
      ["* wisdom *", [
        "The Relics possessed great wisdom before their fall.",
        "The Forest Keeper offers counsel to those who listen.",
        "What lessons has the crown taught you?"
      ]]
    ]],

    ["ignorance", 2, [
      ["* ignorance *", [
        "Erthwile man forgot the old ways.",
        "The Watcher preys on those who do not see.",
        "The crown can lift this veil."
      ]]
    ]],

    ["understanding", 2, [
      ["* understanding *", [
        "At last I feel the truth is gripping me...",
        "The Fendwellers comprehend what others cannot.",
        "Does this revelation bring peace or pain?"
      ]]
    ]],

    ["learning", 2, [
      ["* learning *", [
        "Sindr studied the Fendwellers' magic.",
        "The Relics mastered arts now lost.",
        "What skills do you seek?"
      ]]
    ]],

    ["teaching", 2, [
      ["* teaching *", [
        "Xanthos revealed himself as the Forest Keeper.",
        "Who has guided your hand?",
        "The crown instructs in harsh ways."
      ]]
    ]],

    ["master", 2, [
      ["* master *", [
        "The Relics mastered architecture and magic.",
        "Do you seek to command the old powers?",
        "Sindr became slave to his own creations."
      ]]
    ]],

    ["student", 2, [
      ["* student *", [
        "Thanos learned quickly from his brother.",
        "The Fendwellers teach those who respect the forest.",
        "What mysteries do you study?"
      ]]
    ]],

    ["art", 2, [
      ["* art *", [
        "The Relics created marvels of engineering.",
        "Music gives wings to the imagination.",
        "Does your soul dance with creation?"
      ]]
    ]],

    ["music", 2, [
      ["* music *", [
        "The halls of Thule were painted by polyphony.",
        "Do you hear the forest's song?",
        "Melt my heart, O music..."
      ]]
    ]],

    ["poetry", 2, [
      ["* poetry *", [
        "Sindr spoke in verse when moved.",
        "The Fendwellers' dirges echo through trees.",
        "What rhymes does your heart compose?"
      ]]
    ]],

    ["story", 2, [
      ["* story *", [
        "This is the tale of Axen's birth and fall.",
        "The Relics' monuments tell silent stories.",
        "What chapter do you inhabit?"
      ]]
    ]],

    ["legend", 2, [
      ["* legend *", [
        "They say the last Relic still walks among us.",
        "The Watcher features in children's nightmares.",
        "What myths guide your steps?"
      ]]
    ]],

    ["history", 2, [
      ["* history *", [
        "The crown reveals forgotten histories.",
        "The settlers left behind kings and lords.",
        "What past weighs on your present?"
      ]]
    ]],

    ["future", 2, [
      ["* future *", [
        "Sindr envisioned a glorious new age.",
        "What does the crown show of tomorrow?",
        "The Watcher cares not for what's to come."
      ]]
    ]],

    ["change", 2, [
      ["* change *", [
        "From ashes rose a new world.",
        "The Relics could not adapt in time.",
        "Does transformation frighten or inspire you?"
      ]]
    ]],

    ["progress", 2, [
      ["* progress *", [
        "Ereptor would propel Etymos forward.",
        "At what cost comes advancement?",
        "The Fendwellers reject such notions."
      ]]
    ]],

    ["tradition", 2, [
      ["* tradition *", [
        "The Axons hold to funeral rites at sea.",
        "What customs anchor your soul?",
        "The old ways are nearly forgotten."
      ]]
    ]],

    ["innovation", 2, [
      ["* innovation *", [
        "Sindr's machines hungered for the forest.",
        "The Relics built without such crude devices.",
        "Does invention serve or enslave?"
      ]]
    ]],

    ["science", 2, [
      ["* science *", [
        "The Relics mastered sciences unknown.",
        "Sindr sought to mechanize magic.",
        "What mysteries would you quantify?"
      ]]
    ]],

    ["magic", 2, [
      ["* magic *", [
        "The old energies flow through this land.",
        "Thanos wielded it without thinking.",
        "Have you felt the power in the deep woods?"
      ]]
    ]],

    ["energy", 2, [
      ["* energy *", [
        "Sindr's machines devoured natural forces.",
        "The crown pulses with ancient power.",
        "Can you handle such currents?"
      ]]
    ]],

    ["power", 2, [
      ["* power *", [
        "The crown offers limitless might.",
        "Sindr lusted after control.",
        "At what cost comes such strength?"
      ]]
    ]],

    ["control", 2, [
      ["* control *", [
        "The Relics thought themselves masters of all.",
        "Even the Watcher must follow nature's laws.",
        "What reins do you grasp?"
      ]]
    ]],

    ["chaos", 2, [
      ["* chaos *", [
        "The Winged Watcher brings disorder.",
        "Sindr's assault threw the forest into turmoil.",
        "Can you see the pattern within?"
      ]]
    ]],

    ["order", 2, [
      ["* order *", [
        "The Relics built a world of near perfection.",
        "The crown reveals structure amidst madness.",
        "What systems sustain you?"
      ]]
    ]],

    ["balance", 2, [
      ["* balance *", [
        "The Fendwellers live in harmony with the woods.",
        "Sindr upset the natural equilibrium.",
        "Where do you stand in the great dance?"
      ]]
    ]],

    ["harmony", 2, [
      ["* harmony *", [
        "Music gives a soul to the universe.",
        "The Relics' cities sang with perfect accord.",
        "Does your life move in measured rhythm?"
      ]]
    ]],

    ["war", 2, [
      ["* war *", [
        "Erthwile man thirsted for conflict.",
        "The Fendwellers fought to protect their home.",
        "Even the Relics fell to battle's call."
      ]]
    ]],

    ["peace", 2, [
      ["* peace *", [
        "The settlers sought freedom from old wars.",
        "Does the crown bring tranquility or torment?",
        "Even in stillness, the Watcher stirs."
      ]]
    ]],

    ["conflict", 2, [
      ["* conflict *", [
        "Brother turned against brother.",
        "What strife follows in your wake?",
        "The Relics' monuments stand as silent witnesses."
      ]]
    ]],

    ["battle", 2, [
      ["* battle *", [
        "The Fendwellers ambushed Sindr's men.",
        "Have you crossed blades with destiny?",
        "Even crowns cannot stop all fights."
      ]]
    ]],

    ["victory", 2, [
      ["* victory *", [
        "Sindr claimed the crown but lost himself.",
        "What constitutes true triumph?",
        "The Watcher always has the final word."
      ]]
    ]],

    ["defeat", 2, [
      ["* defeat *", [
        "The Relics fell one by one.",
        "Have you tasted bitter loss?",
        "From ashes, new beginnings rise."
      ]]
    ]],

    ["strategy", 2, [
      ["* strategy *", [
        "Sindr was a brilliant tactician.",
        "The Fendwellers use the forest's advantage.",
        "What plans unfold in your mind?"
      ]]
    ]],

    ["plan", 2, [
      ["* plan *", [
        "Sindr schemed to take the crown.",
        "The Relics' designs built a world.",
        "How carefully do you plot your path?"
      ]]
    ]],

    ["hope", 2, [
      ["* hope *", [
        "When Axen was young, hope was frail.",
        "Do you seek light in the darkness?",
        "Even the Winged Watcher cannot extinguish all."
      ]]
    ]],

    ["despair", 2, [
      ["* despair *", [
        "The Relics fell into darkness and despair.",
        "Have you known the abyss?",
        "The crown offers power over such shadows."
      ]]
    ]],

    ["joy", 2, [
      ["* joy *", [
        "Thanos knew happiness with Vera.",
        "What makes your spirit soar?",
        "Even in Etymos' twilight, laughter echoes."
      ]]
    ]],

    ["sorrow", 2, [
      ["* sorrow *", [
        "The settlers mourned their old lives.",
        "How do you weather grief's storm?",
        "The sea carries all sadness away."
      ]]
    ]],

    ["love", 2, [
      ["* love *", [
        "Vera and Thanos loved deeply.",
        "Even Sindr once loved unwisely.",
        "The heart knows what the mind cannot."
      ]]
    ]],

    ["hate", 2, [
      ["* hate *", [
        "Thanos raged against his brother.",
        "Does bitterness poison your roots?",
        "The Watcher feeds on such venom."
      ]]
    ]],

    ["anger", 2, [
      ["* anger *", [
        "Sindr's fury consumed the forest.",
        "What stokes your inner fire?",
        "Even Relics knew wrath."
      ]]
    ]],

    ["fear", 2, [
      ["* fear *", [
        "The Krikos Kranion inspires terror.",
        "What makes your heart race?",
        "The Watcher's wings bring dread."
      ]]
    ]],

    ["courage", 2, [
      ["* courage *", [
        "Vera faced Sindr without hesitation.",
        "Where do you find your strength?",
        "The Relics stood tall before the darkness."
      ]]
    ]],

    ["weakness", 2, [
      ["* weakness *", [
        "The crown exposes all flaws.",
        "What vulnerabilities do you guard?",
        "Even the Watcher has limitations."
      ]]
    ]],

    ["strength", 2, [
      ["* strength *", [
        "Of strength and the lust for power...",
        "What makes you resilient?",
        "Even Relics had their limits."
      ]]
    ]],

    ["pride", 2, [
      ["* pride *", [
        "Sindr's arrogance led to his fall.",
        "The Relics too thought themselves immortal.",
        "Does hubris cloud your vision?"
      ]]
    ]],

    ["humility", 2, [
      ["* humility *", [
        "The Forest Keeper bows to nature's will.",
        "What keeps you grounded?",
        "Even crowns cannot elevate the unworthy."
      ]]
    ]],

    ["honor", 2, [
      ["* honor *", [
        "The Axons hold funeral rites at sea.",
        "What codes do you live by?",
        "The Watcher respects certain traditions."
      ]]
    ]],

    ["betrayal", 2, [
      ["* betrayal *", [
        "Sindr deceived even his own kin.",
        "What wounds still fester?",
        "The Relics were undone by treachery."
      ]]
    ]],

    ["loyalty", 2, [
      ["* loyalty *", [
        "Sindr's men followed him to their doom.",
        "Where do your allegiances lie?",
        "The Fendwellers are faithful to the forest."
      ]]
    ]],

    ["trust", 2, [
      ["* trust *", [
        "The Fendwellers trusted Thanos.",
        "Where has your faith been broken?",
        "Even crowns can lie."
      ]]
    ]],

    ["faith", 2, [
      ["* faith *", [
        "The settlers believed in new beginnings.",
        "What sustains your spirit?",
        "The Relics lost their divine favor."
      ]]
    ]],

    ["doubt", 2, [
      ["* doubt *", [
        "Thanos hesitated when it mattered most.",
        "What uncertainties plague you?",
        "The crown dispels all questions."
      ]]
    ]],

    ["belief", 2, [
      ["* belief *", [
        "The Relics thought themselves eternal.",
        "What truths anchor your world?",
        "The Watcher cares not for mortal convictions."
      ]]
    ]],

    ["truth", 2, [
      ["* truth *", [
        "The Forest Keeper knows all.",
        "What revelations have you uncovered?",
        "The crown reveals painful realities."
      ]]
    ]],

    ["lie", 2, [
      ["* lie *", [
        "Sindr deceived even Death itself.",
        "What falsehoods have you believed?",
        "The Relics' fall began with betrayal."
      ]]
    ]],

    ["secret", 2, [
      ["* secret *", [
        "I know the place where secrets hide.",
        "What knowledge do you guard?",
        "The crown reveals all in time."
      ]]
    ]],

    ["knowledge", 2, [
      ["* knowledge *", [
        "The Relics mastered arts now forgotten.",
        "What wisdom do you seek?",
        "The Fendwellers keep the old ways."
      ]]
    ]],

    ["wisdom", 2, [
      ["* wisdom *", [
        "The Relics possessed great wisdom before their fall.",
        "The Forest Keeper offers counsel to those who listen.",
        "What lessons has the crown taught you?"
      ]]
    ]],

    ["ignorance", 2, [
      ["* ignorance *", [
        "Erthwile man forgot the old ways.",
        "The Watcher preys on those who do not see.",
        "The crown can lift this veil."
      ]]
    ]],

    ["understanding", 2, [
      ["* understanding *", [
        "At last I feel the truth is gripping me...",
        "The Fendwellers comprehend what others cannot.",
        "Does this revelation bring peace or pain?"
      ]]
    ]],

    ["learning", 2, [
      ["* learning *", [
        "Sindr studied the Fendwellers' magic.",
        "The Relics mastered arts now lost.",
        "What skills do you seek?"
      ]]
    ]],

    ["teaching", 2, [
      ["* teaching *", [
        "Xanthos revealed himself as the Forest Keeper.",
        "Who has guided your hand?",
        "The crown instructs in harsh ways."
      ]]
    ]],

    ["master", 2, [
      ["* master *", [
        "The Relics mastered architecture and magic.",
        "Do you seek to command the old powers?",
        "Sindr became slave to his own creations."
      ]]
    ]],

    ["student", 2, [
      ["* student *", [
        "Thanos learned quickly from his brother.",
        "The Fendwellers teach those who respect the forest.",
        "What mysteries do you study?"
      ]]
    ]],

    ["art", 2, [
      ["* art *", [
        "The Relics created marvels of engineering.",
        "Music gives wings to the imagination.",
        "Does your soul dance with creation?"
      ]]
    ]],

    ["music", 2, [
      ["* music *", [
        "The halls of Thule were painted by polyphony.",
        "Do you hear the forest's song?",
        "Melt my heart, O music..."
      ]]
    ]],

    ["poetry", 2, [
      ["* poetry *", [
        "Sindr spoke in verse when moved.",
        "The Fendwellers' dirges echo through trees.",
        "What rhymes does your heart compose?"
      ]]
    ]],

    ["story", 2, [
      ["* story *", [
        "This is the tale of Axen's birth and fall.",
        "The Relics' monuments tell silent stories.",
        "What chapter do you inhabit?"
      ]]
    ]],

    ["legend", 2, [
      ["* legend *", [
        "They say the last Relic still walks among us.",
        "The Watcher features in children's nightmares.",
        "What myths guide your steps?"
      ]]
    ]],

    ["history", 2, [
      ["* history *", [
        "The crown reveals forgotten histories.",
        "The settlers left behind kings and lords.",
        "What past weighs on your present?"
      ]]
    ]],

    ["future", 2, [
      ["* future *", [
        "Sindr envisioned a glorious new age.",
        "What does the crown show of tomorrow?",
        "The Watcher cares not for what's to come."
      ]]
    ]],

    ["change", 2, [
      ["* change *", [
        "From ashes rose a new world.",
        "The Relics could not adapt in time.",
        "Does transformation frighten or inspire you?"
      ]]
    ]],

    ["progress", 2, [
      ["* progress *", [
        "Ereptor would propel Etymos forward.",
        "At what cost comes advancement?",
        "The Fendwellers reject such notions."
      ]]
    ]],

    ["tradition", 2, [
      ["* tradition *", [
        "The Axons hold to funeral rites at sea.",
        "What customs anchor your soul?",
        "The old ways are nearly forgotten."
      ]]
    ]],

    ["innovation", 2, [
      ["* innovation *", [
        "Sindr's machines hungered for the forest.",
        "The Relics built without such crude devices.",
        "Does invention serve or enslave?"
      ]]
    ]],

    ["science", 2, [
      ["* science *", [
        "The Relics mastered sciences unknown.",
        "Sindr sought to mechanize magic.",
        "What mysteries would you quantify?"
      ]]
    ]],

    ["magic", 2, [
      ["* magic *", [
        "The old energies flow through this land.",
        "Thanos wielded it without thinking.",
        "Have you felt the power in the deep woods?"
      ]]
    ]],

    ["energy", 2, [
      ["* energy *", [
        "Sindr's machines devoured natural forces.",
        "The crown pulses with ancient power.",
        "Can you handle such currents?"
      ]]
    ]],

    ["power", 2, [
      ["* power *", [
        "The crown offers limitless might.",
        "Sindr lusted after control.",
        "At what cost comes such strength?"
      ]]
    ]],

    ["control", 2, [
      ["* control *", [
        "The Relics thought themselves masters of all.",
        "Even the Watcher must follow nature's laws.",
        "What reins do you grasp?"
      ]]
    ]],

    ["chaos", 2, [
      ["* chaos *", [
        "The Winged Watcher brings disorder.",
        "Sindr's assault threw the forest into turmoil.",
        "Can you see the pattern within?"
      ]]
    ]],

    ["order", 2, [
      ["* order *", [
        "The Relics built a world of near perfection.",
        "The crown reveals structure amidst madness.",
        "What systems sustain you?"
      ]]
    ]],

    ["balance", 2, [
      ["* balance *", [
        "The Fendwellers live in harmony with the woods.",
        "Sindr upset the natural equilibrium.",
        "Where do you stand in the great dance?"
      ]]
    ]],

    ["harmony", 2, [
      ["* harmony *", [
        "Music gives a soul to the universe.",
        "The Relics' cities sang with perfect accord.",
        "Does your life move in measured rhythm?"
      ]]
    ]],

    ["war", 2, [
      ["* war *", [
        "Erthwile man thirsted for conflict.",
        "The Fendwellers fought to protect their home.",
        "Even the Relics fell to battle's call."
      ]]
    ]],

    ["peace", 2, [
      ["* peace *", [
        "The settlers sought freedom from old wars.",
        "Does the crown bring tranquility or torment?",
        "Even in stillness, the Watcher stirs."
      ]]
    ]],

    ["conflict", 2, [
      ["* conflict *", [
        "Brother turned against brother.",
        "What strife follows in your wake?",
        "The Relics' monuments stand as silent witnesses."
      ]]
    ]],

    ["battle", 2, [
      ["* battle *", [
        "The Fendwellers ambushed Sindr's men.",
        "Have you crossed blades with destiny?",
        "Even crowns cannot stop all fights."
      ]]
    ]],

    ["victory", 2, [
      ["* victory *", [
        "Sindr claimed the crown but lost himself.",
        "What constitutes true triumph?",
        "The Watcher always has the final word."
      ]]
    ]],

    ["defeat", 2, [
      ["* defeat *", [
        "The Relics fell one by one.",
        "Have you tasted bitter loss?",
        "From ashes, new beginnings rise."
      ]]
    ]],

    ["strategy", 2, [
      ["* strategy *", [
        "Sindr was a brilliant tactician.",
        "The Fendwellers use the forest's advantage.",
        "What plans unfold in your mind?"
      ]]
    ]],

    ["plan", 2, [
      ["* plan *", [
        "Sindr schemed to take the crown.",
        "The Relics' designs built a world.",
        "How carefully do you plot your path?"
      ]]
    ]],

    ["hope", 2, [
      ["* hope *", [
        "When Axen was young, hope was frail.",
        "Do you seek light in the darkness?",
        "Even the Winged Watcher cannot extinguish all."
      ]]
    ]],

    ["despair", 2, [
      ["* despair *", [
        "The Relics fell into darkness and despair.",
        "Have you known the abyss?",
        "The crown offers power over such shadows."
      ]]
    ]],

    ["joy", 2, [
      ["* joy *", [
        "Thanos knew happiness with Vera.",
        "What makes your spirit soar?",
        "Even in Etymos' twilight, laughter echoes."
      ]]
    ]],

    ["sorrow", 2, [
      ["* sorrow *", [
        "The settlers mourned their old lives.",
        "How do you weather grief's storm?",
        "The sea carries all sadness away."
      ]]
    ]],

    ["love", 2, [
      ["* love *", [
        "Vera and Thanos loved deeply.",
        "Even Sindr once loved unwisely.",
        "The heart knows what the mind cannot."
      ]]
    ]],

    ["hate", 2, [
      ["* hate *", [
        "Thanos raged against his brother.",
        "Does bitterness poison your roots?",
        "The Watcher feeds on such venom."
      ]]
    ]],

    ["anger", 2, [
      ["* anger *", [
        "Sindr's fury consumed the forest.",
        "What stokes your inner fire?",
        "Even Relics knew wrath."
      ]]
    ]],

    ["fear", 2, [
      ["* fear *", [
        "The Krikos Kranion inspires terror.",
        "What makes your heart race?",
        "The Watcher's wings bring dread."
      ]]
    ]],

    ["courage", 2, [
      ["* courage *", [
        "Vera faced Sindr without hesitation.",
        "Where do you find your strength?",
        "The Relics stood tall before the darkness."
      ]]
    ]],

    ["weakness", 2, [
      ["* weakness *", [
        "The crown exposes all flaws.",
        "What vulnerabilities do you guard?",
        "Even the Watcher has limitations."
      ]]
    ]],

    ["strength", 2, [
      ["* strength *", [
        "Of strength and the lust for power...",
        "What makes you resilient?",
        "Even Relics had their limits."
      ]]
    ]],

    ["pride", 2, [
      ["* pride *", [
        "Sindr's arrogance led to his fall.",
        "The Relics too thought themselves immortal.",
        "Does hubris cloud your vision?"
      ]]
    ]],

    ["humility", 2, [
      ["* humility *", [
        "The Forest Keeper bows to nature's will.",
        "What keeps you grounded?",
        "Even crowns cannot elevate the unworthy."
      ]]
    ]],

    ["honor", 2, [
      ["* honor *", [
        "The Axons hold funeral rites at sea.",
        "What codes do you live by?",
        "The Watcher respects certain traditions."
      ]]
    ]],

    ["betrayal", 2, [
      ["* betrayal *", [
        "Sindr deceived even his own kin.",
        "What wounds still fester?",
        "The Relics were undone by treachery."
      ]]
    ]],

    ["loyalty", 2, [
      ["* loyalty *", [
        "Sindr's men followed him to their doom.",
        "Where do your allegiances lie?",
        "The Fendwellers are faithful to the forest."
      ]]
    ]],

    ["trust", 2, [
      ["* trust *", [
        "The Fendwellers trusted Thanos.",
        "Where has your faith been broken?",
        "Even crowns can lie."
      ]]
    ]],

    ["faith", 2, [
      ["* faith *", [
        "The settlers believed in new beginnings.",
        "What sustains your spirit?",
        "The Relics lost their divine favor."
      ]]
    ]],

    ["doubt", 2, [
      ["* doubt *", [
        "Thanos hesitated when it mattered most.",
        "What uncertainties plague you?",
        "The crown dispels all questions."
      ]]
    ]],

    ["belief", 2, [
      ["* belief *", [
        "The Relics thought themselves eternal.",
        "What truths anchor your world?",
        "The Watcher cares not for mortal convictions."
      ]]
    ]],

    ["truth", 2, [
      ["* truth *", [
        "The Forest Keeper knows all.",
        "What revelations have you uncovered?",
        "The crown reveals painful realities."
      ]]
    ]],

    ["lie", 2, [
      ["* lie *", [
        "Sindr deceived even Death itself.",
        "What falsehoods have you believed?",
        "The Relics' fall began with betrayal."
      ]]
    ]],

    ["secret", 2, [
      ["* secret *", [
        "I know the place where secrets hide.",
        "What knowledge do you guard?",
        "The crown reveals all in time."
      ]]
    ]],

    ["knowledge", 2, [
      ["* knowledge *", [
        "The Relics mastered arts now forgotten.",
        "What wisdom do you seek?",
        "The Fendwellers keep the old ways."
      ]]
    ]],

    ["wisdom", 2, [
      ["* wisdom *", [
        "The Relics possessed great wisdom before their fall.",
        "The Forest Keeper offers counsel to those who listen.",
        "What lessons has the crown taught you?"
      ]]
    ]],

    ["ignorance", 2, [
      ["* ignorance *", [
        "Erthwile man forgot the old ways.",
        "The Watcher preys on those who do not see.",
        "The crown can lift this veil."
      ]]
    ]],

    ["understanding", 2, [
      ["* understanding *", [
        "At last I feel the truth is gripping me...",
        "The Fendwellers comprehend what others cannot.",
        "Does this revelation bring peace or pain?"
      ]]
    ]],

    ["learning", 2, [
      ["* learning *", [
        "Sindr studied the Fendwellers' magic.",
        "The Relics mastered arts now lost.",
        "What skills do you seek?"
      ]]
    ]],

    ["teaching", 2, [
      ["* teaching *", [
        "Xanthos revealed himself as the Forest Keeper.",
        "Who has guided your hand?",
        "The crown instructs in harsh ways."
      ]]
    ]],

    ["master", 2, [
      ["* master *", [
        "The Relics mastered architecture and magic.",
        "Do you seek to command the old powers?",
        "Sindr became slave to his own creations."
      ]]
    ]],

    ["student", 2, [
      ["* student *", [
        "Thanos learned quickly from his brother.",
        "The Fendwellers teach those who respect the forest.",
        "What mysteries do you study?"
      ]]
    ]],

    ["art", 2, [
      ["* art *", [
        "The Relics created marvels of engineering.",
        "Music gives wings to the imagination.",
        "Does your soul dance with creation?"
      ]]
    ]],

    ["music", 2, [
      ["* music *", [
        "The halls of Thule were painted by polyphony.",
        "Do you hear the forest's song?",
        "Melt my heart, O music..."
      ]]
    ]],

    ["poetry", 2, [
      ["* poetry *", [
        "Sindr spoke in verse when moved.",
        "The Fendwellers' dirges echo through trees.",
        "What rhymes does your heart compose?"
      ]]
    ]],

    ["story", 2, [
      ["* story *", [
        "This is the tale of Axen's birth and fall.",
        "The Relics' monuments tell silent stories.",
        "What chapter do you inhabit?"
      ]]
    ]],

    ["legend", 2, [
      ["* legend *", [
        "They say the last Relic still walks among us.",
        "The Watcher features in children's nightmares.",
        "What myths guide your steps?"
      ]]
    ]],

    ["history", 2, [
      ["* history *", [
        "The crown reveals forgotten histories.",
        "The settlers left behind kings and lords.",
        "What past weighs on your present?"
      ]]
    ]],

    ["future", 2, [
      ["* future *", [
        "Sindr envisioned a glorious new age.",
        "What does the crown show of tomorrow?",
        "The Watcher cares not for what's to come."
      ]]
    ]],

    ["change", 2, [
      ["* change *", [
        "From ashes rose a new world.",
        "The Relics could not adapt in time.",
        "Does transformation frighten or inspire you?"
      ]]
    ]],

    ["progress", 2, [
      ["* progress *", [
        "Ereptor would propel Etymos forward.",
        "At what cost comes advancement?",
        "The Fendwellers reject such notions."
      ]]
    ]],

    ["tradition", 2, [
      ["* tradition *", [
        "The Axons hold funeral rites at sea.",
        "What customs anchor your soul?",
        "The old ways are nearly forgotten."
      ]]
    ]],

    ["innovation", 2, [
      ["* innovation *", [
        "Sindr's machines hungered for the forest.",
        "The Relics built without such crude devices.",
        "Does invention serve or enslave?"
      ]]
    ]],

    ["science", 2, [
      ["* science *", [
        "The Relics mastered sciences unknown.",
        "Sindr sought to mechanize magic.",
        "What mysteries would you quantify?"
      ]]
    ]],

    ["magic", 2, [
      ["* magic *", [
        "The old energies flow through this land.",
        "Thanos wielded it without thinking.",
        "Have you felt the power in the deep woods?"
      ]]
    ]],

    ["energy", 2, [
      ["* energy *", [
        "Sindr's machines devoured natural forces.",
        "The crown pulses with ancient power.",
        "Can you handle such currents?"
      ]]
    ]],

    ["power", 2, [
      ["* power *", [
        "The crown offers limitless might.",
        "Sindr lusted after control.",
        "At what cost comes such strength?"
      ]]
    ]],

    ["control", 2, [
      ["* control *", [
        "The Relics thought themselves masters of all.",
        "Even the Watcher must follow nature's laws.",
        "What reins do you grasp?"
      ]]
    ]],

    ["chaos", 2, [
      ["* chaos *", [
        "The Winged Watcher brings disorder.",
        "Sindr's assault threw the forest into turmoil.",
        "Can you see the pattern within?"
      ]]
    ]],

    ["order", 2, [
      ["* order *", [
        "The Relics built a world of near perfection.",
        "The crown reveals structure amidst madness.",
        "What systems sustain you?"
      ]]
    ]],

    ["balance", 2, [
      ["* balance *", [
        "The Fendwellers live in harmony with the woods.",
        "Sindr upset the natural equilibrium.",
        "Where do you stand in the great dance?"
      ]]
    ]],

    ["harmony", 2, [
      ["* harmony *", [
        "Music gives a soul to the universe.",
        "The Relics' cities sang with perfect accord.",
        "Does your life move in measured rhythm?"
      ]]
    ]],

    ["war", 2, [
      ["* war *", [
        "Erthwile man thirsted for conflict.",
        "The Fendwellers fought to protect their home.",
        "Even the Relics fell to battle's call."
      ]]
    ]],

    ["peace", 2, [
      ["* peace *", [
        "The settlers sought freedom from old wars.",
        "Does the crown bring tranquility or torment?",
        "Even in stillness, the Watcher stirs."
      ]]
    ]],

    ["conflict", 2, [
      ["* conflict *", [
        "Brother turned against brother.",
        "What strife follows in your wake?",
        "The Relics' monuments stand as silent witnesses."
      ]]
    ]],

    ["battle", 2, [
      ["* battle *", [
        "The Fendwellers ambushed Sindr's men.",
        "Have you crossed blades with destiny?",
        "Even crowns cannot stop all fights."
      ]]
    ]],

    ["victory", 2, [
      ["* victory *", [
        "Sindr claimed the crown but lost himself.",
        "What constitutes true triumph?",
        "The Watcher always has the final word."
      ]]
    ]],

    ["defeat", 2, [
      ["* defeat *", [
        "The Relics fell one by one.",
        "Have you tasted bitter loss?",
        "From ashes, new beginnings rise."
      ]]
    ]],

    ["strategy", 2, [
      ["* strategy *", [
        "Sindr was a brilliant tactician.",
        "The Fendwellers use the forest's advantage.",
        "What plans unfold in your mind?"
      ]]
    ]],

    ["plan", 2, [
      ["* plan *", [
        "Sindr schemed to take the crown.",
        "The Relics' designs built a world.",
        "How carefully do you plot your path?"
      ]]
    ]],

    ["hope", 2, [
      ["* hope *", [
        "When Axen was young, hope was frail.",
        "Do you seek light in the darkness?",
        "Even the Winged Watcher cannot extinguish all."
      ]]
    ]],

    ["despair", 2, [
      ["* despair *", [
        "The Relics fell into darkness and despair.",
        "Have you known the abyss?",
        "The crown offers power over such shadows."
      ]]
    ]],

    ["joy", 2, [
      ["* joy *", [
        "Thanos knew happiness with Vera.",
        "What makes your spirit soar?",
        "Even in Etymos' twilight, laughter echoes."
      ]]
    ]],

    ["sorrow", 2, [
      ["* sorrow *", [
        "The settlers mourned their old lives.",
        "How do you weather grief's storm?",
        "The sea carries all sadness away."
      ]]
    ]],

    ["love", 2, [
      ["* love *", [
        "Vera and Thanos loved deeply.",
        "Even Sindr once loved unwisely.",
        "The heart knows what the mind cannot."
      ]]
    ]],

    ["hate", 2, [
      ["* hate *", [
        "Thanos raged against his brother.",
        "Does bitterness poison your roots?",
        "The Watcher feeds on such venom."
      ]]
    ]],

    ["anger", 2, [
      ["* anger *", [
        "Sindr's fury consumed the forest.",
        "What stokes your inner fire?",
        "Even Relics knew wrath."
      ]]
    ]],

    ["fear", 2, [
      ["* fear *", [
        "The Krikos Kranion inspires terror.",
        "What makes your heart race?",
        "The Watcher's wings bring dread."
      ]]
    ]],

    ["courage", 2, [
      ["* courage *", [
        "Vera faced Sindr without hesitation.",
        "Where do you find your strength?",
        "The Relics stood tall before the darkness."
      ]]
    ]],

    ["weakness", 2, [
      ["* weakness *", [
        "The crown exposes all flaws.",
        "What vulnerabilities do you guard?",
        "Even the Watcher has limitations."
      ]]
    ]],

    ["strength", 2, [
      ["* strength *", [
        "Of strength and the lust for power...",
        "What makes you resilient?",
        "Even Relics had their limits."
      ]]
    ]],
  ]]
];