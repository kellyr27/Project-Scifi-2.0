/**
 * Types
 * 1 - Indicates Single Movie
 * 2 - Indicates Multiple Movies (e.g. Sequels and Trilogies)
 */

export const movies = {
    0: {
        titles: ['Planet of the Apes'],
        runtime: 112,
        releaseYears: '1969',
        genres: ["Science Fiction","Adventure","Drama", "Action"],
        description: `In the 1969 sci-fi classic "Planet of the Apes", astronaut Colonel Taylor crashes on a planet dominated by intelligent apes who enslave primitive humans. As he challenges their society, shocking truths about the planet and humanity's fate are revealed, leading to a gripping and thought-provoking climax with an iconic twist.`,
        otherImages: ["/img/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg", "/img/pNlDNGmEPx9zt00zoPhP2VUuITv.jpg", "/img/zRo7v3syLG19ZaLxZRFRLN1L9iX.jpg"],
        coverImages: ["/img/fqf2LjNRkRQaPfXRDxt1yS2i7z.jpg"]
    }, 
    1: {
        titles: ['Alien', 'Aliens'],
        runtime: null,
        releaseYears: '1979 - 1986',
        genres: ["Science Fiction","Horror"],
        description: `The Alien movie franchise is a gripping sci-fi horror saga. It begins with Ridley Scott's "Alien," where a commercial spaceship encounters a deadly extraterrestrial creature. Sigourney Weaver's iconic Ellen Ripley leads the battle against relentless Xenomorphs across sequels, offering intense suspense, thrilling action, and exploring humanity's struggle against a terrifying, hostile force.`,
        otherImages: ["/img/3NZ5y4oLwvm1KF99m0DPQoqpEAP.jpg", "/img/cEobq5QrnOJjO6giDs8q4RxmMKh.jpg", "/img/ryjmULUTAHrGtCily5GMhWSvuI0.jpg", "/img/sJfDC6aPHO8xAHJ8FDvte9TQxbG.jpg", "/img/zO10n5QUiiU2g5cAIDofGVcBeBM.jpg"],
        coverImages: ["/img/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg", "/img/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"]
    }, 
    2: {
        titles: ['2001: A Space Odyssey'],
        runtime: 149,
        releaseYears: '1968',
        genres: ["Science Fiction","Mystery", "Adventure"],
        description: `"2001: A Space Odyssey" is a landmark science fiction film directed by Stanley Kubrick. Spanning from prehistoric Earth to space exploration, it follows a mysterious monolith's influence on human evolution and the discovery of an enigmatic signal near Jupiter. A visual and philosophical masterpiece exploring the mysteries of existence and evolution.`,
        otherImages: [],
        coverImages: []
    }, 
    3: {
        titles: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
        runtime: null,
        releaseYears: '1977 - 1983',
        genres: ["Science Fiction","Adventure", "Action"],
        description: `The original Star Wars trilogy, consisting of "A New Hope," "The Empire Strikes Back," and "Return of the Jedi," is an epic space opera saga. It follows the heroic journey of Luke Skywalker and his allies as they battle the tyrannical Galactic Empire, experiencing epic lightsaber duels, iconic characters, and a timeless battle between good and evil.`,
        otherImages: [],
        coverImages: []
    }, 
    4: {
        titles: ['Soylent Green'],
        runtime: 97,
        releaseYears: '1973',
        genres: ["Science Fiction", "Thriller"],
        description: `"Soylent Green" is a dystopian thriller set in an overpopulated, ecologically devastated future. Detective Thorn investigates a murder that leads him to uncover a horrifying truth about the government's food source, Soylent Green. With societal decay and ethical questions, the film delves into environmental concerns and the consequences of unchecked corporate power.`,
        otherImages: null,
        coverImages: null
    },
    5: {
        titles: ['The Terminator', 'Terminator 2: Judgment Day'],
        runtime: null,
        releaseYears: '1984 - 1991',
        genres: ["Action","Thriller","Science Fiction"],
        description: `
        The Terminator franchise is a sci-fi saga of relentless machines and time travel. It follows Sarah Connor and her son John, future saviors of humanity, pursued by killer cyborgs from a post-apocalyptic future. With thrilling action and themes of fate, technology, and humanity's survival, it's a gripping battle across time.`,
        otherImages: null,
        coverImages: null
    },
    6: {
        titles: ['A Clockwork Orange'],
        runtime: 136,
        releaseYears: '1971',
        genres: ["Science Fiction","Drama"],
        description: `"A Clockwork Orange" is a provocative dystopian film directed by Stanley Kubrick. It follows Alex, a delinquent who undergoes an experimental rehabilitation to suppress his violent tendencies. Examining free will, ethics, and the dark underbelly of society, the film presents a disturbing exploration of behavior control and the human psyche.`,
        otherImages: null,
        coverImages: null
    },
    7: {
        titles: ['The Thing'],
        runtime: 109,
        releaseYears: '1982',
        genres: ["Horror", "Mystery", "Science Fiction"],
        description: `"The Thing" is a gripping sci-fi horror directed by John Carpenter. In an Antarctic research station, a shape-shifting alien terrorizes a group of isolated scientists. Suspicion and paranoia mount as they struggle to identify the imposter, blurring the lines between friend and foe. A chilling tale of fear, survival, and distrust.`,
        otherImages: null,
        coverImages: null
    },
    8: {
        titles: ['Jurassic Park'],
        runtime: 127,
        releaseYears: '1993',
        genres: ["Adventure", "Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    9: {
        titles: ['Blade Runner'],
        runtime: 117,
        releaseYears: '1982',
        genres: ["Science Fiction","Drama", "Thriller"],
        description: `"Jurassic Park" is a thrilling adventure directed by Steven Spielberg. A billionaire's vision of a dinosaur theme park turns deadly when prehistoric creatures escape and wreak havoc. As chaos erupts, a group fights to survive the rampaging beasts, showcasing the awe and danger of resurrected life in this iconic dinosaur spectacle.`,
        otherImages: null,
        coverImages: null
    },
    10: {
        titles: ['The Time Machine'],
        runtime: 103,
        releaseYears: '1960',
        genres: ["Science Fiction","Adventure","Action"],
        description: `"The Time Machine" (1960) is a classic sci-fi film based on H.G. Wells' novel. Scientist George travels to the distant future, encountering evolving societies and witnessing Earth's transformation. He races against time, confronting progress and decay, to rescue a civilization and fulfill his own destiny. A timeless journey through ages.`,
        otherImages: null,
        coverImages: null
    },
    11: {
        titles: ['Donnie Darko'],
        runtime: 113,
        releaseYears: '2001',
        genres: ["Science Fiction","Fantasy","Drama","Mystery"],
        description: `"Donnie Darko" is a mind-bending psychological drama. Troubled teenager Donnie is plagued by visions of a menacing rabbit that predicts the world's end. As he navigates a mysterious alternate reality, the film delves into time travel, fate, and the blurred lines between sanity and madness, leaving audiences questioning reality.`,
        otherImages: null,
        coverImages: null
    },
    12: {
        titles: ['The Man from Earth'],
        runtime: 87,
        releaseYears: '2007',
        genres: ["Science Fiction","Drama"],
        description: `"The Man from Earth" is an intriguing sci-fi drama. A college professor reveals to colleagues that he's a prehistoric immortal, sparking intense debates on history, religion, and the nature of humanity. Set almost entirely in a single room, the film captivates with its thought-provoking dialogue and philosophical exploration of immortality.`,
        otherImages: null,
        coverImages: null
    },
    13: {
        titles: ['Moon'],
        runtime: 97,
        releaseYears: '2009',
        genres: ["Science Fiction","Drama"],
        description: `"Moon" is a mesmerizing sci-fi film. Astronaut Sam Bell, stationed alone on a lunar base, uncovers unsettling truths about his identity and purpose. Amid isolation and discovery, the film delves into ethics, identity, and the consequences of corporate greed, creating a hauntingly atmospheric exploration of humanity and technology.`,
        otherImages: null,
        coverImages: null
    },
    14: {
        titles: ['28 Days Later...'],
        runtime: 113,
        releaseYears: '2002',
        genres: ["Horror","Thriller","Science Fiction"],
        description: `"28 Days Later" is a gripping horror-thriller. A man awakens from a coma to find a post-apocalyptic London overrun by raging zombies. As he joins survivors in a desperate bid for safety, the film explores humanity's resilience, morality, and the harrowing consequences of a virus-induced collapse, delivering intense suspense and survivalism.`,
        otherImages: null,
        coverImages: null
    },
    15: {
        titles: ['Predestination'],
        runtime: 97,
        releaseYears: '2014',
        genres: ["Science Fiction","Thriller"],
        description: `"Predestination" is a mind-bending time travel thriller. A temporal agent embarks on a complex mission to prevent a terrorist's devastating attack. Twists and paradoxes unfold as identities intertwine, blurring lines between past, present, and future. The film offers a riveting exploration of causality, identity, and the intricacies of time travel.`,
        otherImages: null,
        coverImages: null
    },
    16: {
        titles: ['Cube'],
        runtime: 90,
        releaseYears: '1997',
        genres: ["Thriller","Science Fiction", "Mystery"],
        description: `"Cube" is a suspenseful sci-fi horror. Strangers wake in a bewildering maze of deadly traps, struggling to escape while unraveling the enigma of their confinement. As tensions rise, the film probes human nature under extreme stress, delivering a tense, claustrophobic experience that questions trust, motives, and the price of survival.`,
        otherImages: null,
        coverImages: null
    },
    17: {
        titles: ['Coherence'],
        runtime: 89,
        releaseYears: '2013',
        genres: ["Thriller","Science Fiction"],
        description: `"Coherence" is a mind-bending thriller. During a dinner party, a passing comet triggers a series of eerie events, fracturing reality and relationships. As tensions mount, the group navigates parallel universes and their doppelgängers, blurring lines between identity and alternate realities. A gripping exploration of uncertainty, paranoia, and cosmic anomalies.`,
        otherImages: null,
        coverImages: null
    },
    18: {
        titles: ['A Scanner Darkly'],
        runtime: 100,
        releaseYears: '2006',
        genres: ["Animation","Science Fiction", "Thriller"],
        description: `
        "A Scanner Darkly" is a dystopian sci-fi film. Undercover cop Bob Arctor navigates a drug-ridden world, battling addiction and surveilling himself. As identities blur and paranoia intensifies, the film explores government control, addiction's grip, and the fragility of perception, delivering a visually distinct and thought-provoking examination of reality and deception.`,
        otherImages: null,
        coverImages: null
    },
    19: {
        titles: ['Another Earth'],
        runtime: 92,
        releaseYears: '2011',
        genres: ["Drama","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    20: {
        titles: ['Primer'],
        runtime: 77,
        releaseYears: '2004',
        genres: ["Science Fiction","Drama","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    21: {
        titles: ['I Am Mother'],
        runtime: 113,
        releaseYears: '2019',
        genres: ["Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    22: {
        titles: ['Time Lapse'],
        runtime: 104,
        releaseYears: '2014',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    23: {
        titles: ['Europa Report'],
        runtime: 97,
        releaseYears: '2013',
        genres: ["Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    24: {
        titles: ['ARQ'],
        runtime: 88,
        releaseYears: '2016',
        genres: ["Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    25: {
        titles: ['OtherLife'],
        runtime: 96,
        releaseYears: '2017',
        genres: ["Science Fiction","Crime","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    26: {
        titles: ['Infinity Chamber'],
        runtime: 103,
        releaseYears: '2016',
        genres: ["Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    27: {
        titles: ['Circle'],
        runtime: 87,
        releaseYears: '2015',
        genres: ["Science Fiction","Mystery","Drama","Thriller","Horror"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    28: {
        titles: ['Inception'],
        runtime: 148,
        releaseYears: '2010',
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    29: {
        titles: ['Interstellar'],
        runtime: 169,
        releaseYears: '2014',
        genres: ["Action","Science Fiction","Adventure"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    30: {
        titles: ['Blade Runner 2049'],
        runtime: 164,
        releaseYears: '2017',
        genres: ["Science Fiction","Drama"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    31: {
        titles: ['Her'],
        runtime: 126,
        releaseYears: '2013',
        genres: ["Romance","Science Fiction","Drama"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    32: {
        titles: ['The Martian'],
        runtime: 144,
        releaseYears: '2015',
        genres: ["Drama","Adventure","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    33: {
        titles: ['Arrival'],
        runtime: 116,
        releaseYears: '2016',
        genres: ["Drama","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    34: {
        titles: ['Edge of Tomorrow'],
        runtime: 113,
        releaseYears: '2014',
        genres: ["Action","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    35: {
        titles: ['Rogue One'],
        runtime: 133,
        releaseYears: '2016',
        genres: ["Action","Adventure","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    36: {
        titles: ['Ex Machina'],
        runtime: 108,
        releaseYears: '2014',
        genres: ["Drama","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    37: {
        titles: ['Rise of the Planet of the Apes'],
        runtime: 105,
        releaseYears: '2011',
        genres: ["Thriller","Action","Drama","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    38: {
        titles: ['Source Code'],
        runtime: 93,
        releaseYears: '2011',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    39: {
        titles: ['Looper'],
        runtime: 119,
        releaseYears: '2012',
        genres: ["Action","Thriller","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    40: {
        titles: ['Ready Player One'],
        runtime: 140,
        releaseYears: '2018',
        genres: ["Science Fiction","Adventure","Action"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    41: {
        titles: ['10 Cloverfield Lane'],
        runtime: 103,
        releaseYears: '2016',
        genres: ["Thriller","Science Fiction","Drama","Horror"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    42: {
        titles: ['Snowpiercer'],
        runtime: 126,
        releaseYears: '2013',
        genres: ["Action","Science Fiction","Drama"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    43: {
        titles: ['Annihilation'],
        runtime: 115,
        releaseYears: '2018',
        genres: ["Science Fiction","Horror"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    44: {
        titles: ['Eternal Sunshine of the Spotless Mind'],
        runtime: 108,
        releaseYears: '2004',
        genres: ["Science Fiction","Drama","Romance"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    45: {
        titles: ['District 9'],
        runtime: 112,
        releaseYears: '2009',
        genres: ["Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    46: {
        titles: ['Children of Men'],
        runtime: 109,
        releaseYears: '2006',
        genres: ["Drama","Action","Thriller","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    47: {
        titles: ['Star Trek'],
        runtime: 127,
        releaseYears: '2009',
        genres: ["Science Fiction","Action","Adventure"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    48: {
        titles: ['Serenity'],
        runtime: 119,
        releaseYears: '2005',
        genres: ["Science Fiction","Action","Adventure","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    49: {
        titles: ['Minority Report'],
        runtime: 145,
        releaseYears: '2002',
        genres: ["Action","Thriller","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    50: {
        titles: ['Equilibrium'],
        runtime: 107,
        releaseYears: '2002',
        genres: ["Action","Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    51: {
        titles: ['Sunshine'],
        runtime: 107,
        releaseYears: '2007',
        genres: ["Science Fiction","Thriller","Horror"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    52: {
        titles: ['I Am Legend'],
        runtime: 101,
        releaseYears: '2007',
        genres: ["Drama","Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    53: {
        titles: ['A.I. Artificial Intelligence'],
        runtime: 146,
        releaseYears: '2001',
        genres: ["Drama","Science Fiction","Adventure"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    54: {
        titles: ['The Mist'],
        runtime: 126,
        releaseYears: '2007',
        genres: ["Horror","Science Fiction","Thriller"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    55: {
        titles: ['I, Robot'],
        runtime: 115,
        releaseYears: '2004',
        genres: ["Action","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    56: {
        titles: ['Triangle'],
        runtime: 99,
        releaseYears: '2009',
        genres: ["Horror","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    57: {
        titles: ['War of the Worlds'],
        runtime: 116,
        releaseYears: '2005',
        genres: ["Adventure","Thriller","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    58: {
        titles: ['The Matrix'],
        runtime: 136,
        releaseYears: '1999',
        genres: ["Action","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    59: {
        titles: ['Gattaca'],
        runtime: 106,
        releaseYears: '1997',
        genres: ["Thriller","Science Fiction","Mystery","Romance"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    60: {
        titles: ['Dark City'],
        runtime: 100,
        releaseYears: '1998',
        genres: ["Mystery","Science Fiction"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    61: {
        titles: ['Contact'],
        runtime: 150,
        releaseYears: '1997',
        genres: ["Drama","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    62: {
        titles: ['The Thirteenth Floor'],
        runtime: 100,
        releaseYears: '1999',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    63: {
        titles: ['eXistenZ'],
        runtime: 97,
        releaseYears: '1999',
        genres: ["Action","Thriller","Science Fiction","Horror"],
        description: null,
        otherImages: null,
        coverImages: null
    },
    64: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    65: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    66: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    67: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    68: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    69: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    70: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    71: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    72: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    73: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    74: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    75: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    76: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    77: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    78: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    79: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    80: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    81: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    82: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    83: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    84: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    85: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    86: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    87: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    88: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    89: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    90: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    91: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    92: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    93: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    94: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    95: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    96: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    97: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    98: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    99: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    100: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    101: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    },
    102: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: null,
        coverImages: null
    }
}

// {
//     titles: [''],
//     runtime: null,
//     releaseYears: null,
//     genres: null,
//     description: null,
//     otherImages: null,
//     coverImages: null
// }