//console.log("sup");

//let visions = ["word0", "word1", "word2"];

//console.log();

let visions =
[
    "It's weird that all my feelings are made of chemical reations", "smiling gets weirder the more you think about it.", "plase AIR in LUNGS.", "Nothing is NORMAL until I don't CRY every time something \"normal\" happens.", "READ MORE BOOKS*", "recatalog HOME LIBRARY", "MANIFEST ATTENTION TO LOVELINESS. -> N, too.", "Thanks for making TAR a #1 New York Times BESTSELLER!", "*And fewer hot takes.", "How HAPPY Joyce must have felt when writing \"Love loves to love LOVE\".", "I hope you like the Anthropocene Reviewed!", "People.", "GARDEN?", "RELENTLESS INCREMENTALISM", "MANIFEST ongoingness.", "Live. Laugh. Locate keys.", "everyone reading this is ALIVE", "ROCKS.", "schadenfreude is an OVERRATED schaden", "dance like everyone is watching.", "DFTBA", "Only thing to do is \"RADIATE MERCY\" - Sarah Manguso", "COWS.", "almost everything is unknown.", "MANIFEST RADICAL EMPATHY", "don't forget to PUBLISH Book in 15 days.", "consider in gratitude the first two words of \"Smallpox\" wikipedia article: \"SMALLPOX WAS.\"", "\"So is it just a whole book of TINY ESSAYS?\" - Alice", "breathe. again. ad infinitum.", "DRAGONS", "figure out what TAR is about, then pretend you knew ALL ALONG", "veni.vidi. WELTSCHMERZ.", "the more you think about humans, the weirder we get.", "Steady...", "MANIFEST PATIENT CALM NOW", "investigate spelling of MEZMERIZED.", "Get real quiet you can HEAR HOPE WHISPERING", "Break GROUND", "What a long, strange trip it's BEEN", "till SOIL", "The more you think about it, the weirder dirt becomes", "this, the one world we all belong to", "MANIFEST FOUR STRAIGHT WIMBELDON WINS !!??", "imagine BEING a hamster. Got it? Clear in your mind? Now, imagine being a human being.", "How weird is WIND?", "Research whether HASHTAGS are stil HAPPENING", "\"Art is where what we survive survives.\" - KAVEH AKBAR", "You've got this. You can get it done", "In a HARD world, softness is a kind of HEROISM.", "SYSTEMS", "not how but WHY", "MANIFEST SERENITY", "I forgot about HALLEY'S COMET for like 10 years, but now I think about it every day.", "Invest in TULIPS+HUMAN JOY", "COVID vaccines are SAFE, EFFECTIVE, and our best tool for ENDING THIS THING.", "Make attention INTENTIONAL", "HOPE is also like a perhaps hand coming carefully out of NOWHERE", "Manifest no typos in book.", "I feel like squirrels used to be more afraid.", "Plant Bean Garden.", "SPRING like a perhaps hand coming carefully out of NOWHERE", "DON'T SIGN NAME", "Stop making changes to book", "Live Laugh LUMBAR SUPPORT", "\"Not having a care in the world\" seems kind of terrible!!", "Manifest SECOND shot in ARM!", "MAKE LIFE IRL AGAIN", "think about \"the snow doesn't give a soft white damn whom it touches\"", "intentionally BLANK but by writing it not actually", "Unironic Enthusiasm for SUNSETS", "Sign name REPEATEDLY", "Be PATIENT with people who IMAGINE that grammar is immutable", "MANIFEST SHOT IN ARM", "keep GOING", "random NOUN", "The way how when you have been inside for a very long time, the air outside feels ALIVE with wind.", "Dinosaurs lived on Earth 800x longer tha humans have lived on Earth", "HANK + CORNDOG", "Place VACCINE into ARM", "MANIFEST HAIRCUT", "COFFEE?", "perch in the soul and insg the tune without the words and NEVER STOP AT ALL.", "avoid COVID and DESPAIR with equal TENACITY", "Furby comeback?", "QUARRANTINAVERSARY", "SOCKS??", "Sign NAME live on YOUTUBE", "Stare at Joan Mitchell paintings until it FEELS LIKE YOU COULD WALK INTO THEM - and then do.", "MANIFEST SPRING", "Perseverence? PERSEVEARENCE?! Persaverance?? PERSEVERANCE!! Yay, MARS!! (no humans until 2028)", "Investigate the song \"Fishy ON ME.\"", "SQUARE", "Repeated AUTOGRAPHS", "Hibernation?", "new typography STRATEGIES???", "beautifully FOOLISH project for AWESOME", "ALL HAIL WEST TEXAS", "MANIFEST slower rates of RNA MUTATION", "Literally nothing more radical right now than radical hope.", "cheezy NIBBLES", "Fight the creeping sense of dread with TEMPORAL THINGS", "Clean glasses DAILY", "Chargers that CHARGE", "STRONGER and more EQUITABLE healthcare systems", "Find out why Oklahoma is on my vision BOARD??", "DEADLINE!!!", "Manifest live action Penguins of MADAGASCAR", "Be more like Joanne ROGERS", "Find out what a VISION BOARDS actually IS.", "Spell Lemmings PROPERLY", "More AWESOME less SUCK", "Force Self to be MORE SERENE", "Candles?", "CURE FINGER", "Manifest peaceful transition of power in USA", "Why not SAVE two birds and a STONE?", "Sign name 10,000 times", "Read BOOKS not TWEETS", "Donate for PIH", "Review LEMMIGS", "Micro CAPSULES", "Dreams where you find a hidden ROOM", "Bring back emphasis on certain WORDS", "Manifest Birds with ARMS", "Convince GEESE to MIGRATE", "Spend less time staring into the ABYSS", "Earnest Enthusiasm about Superior Fish Beings AND OTHER", "Use dry erase board in more VIDEOS", "Fundraise for MCOE", "Get Vaccine into ARM", "KEEP AFC Wimbledon in league one by sheer force of WILL", "Manifest Cats Sequel", "Finish Book of Extremely in-depth Yelp reviews"
];

function visionGen() {
    let randVision = Math.floor(Math.random() * visions.length);
    console.log(`Today's Vision: ${visions[randVision]}`);
    console.log(`Total Visions: ${visions.length}`);
    document.body.innerHTML = "<h1>" + visions[randVision] + "</h1>"
}

//let randVision = Math.floor(Math.random() * visions.length);
visionGen();
// hi