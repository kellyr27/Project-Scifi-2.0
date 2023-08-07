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
        otherImages: ["/img/movies/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg", "/img/movies/pNlDNGmEPx9zt00zoPhP2VUuITv.jpg", "/img/movies/zRo7v3syLG19ZaLxZRFRLN1L9iX.jpg"],
        coverImages: ["/img/movies/fqf2LjNRkRQaPfXRDxt1yS2i7z.jpg"]
    }, 
    1: {
        titles: ['Alien', 'Aliens'],
        runtime: null,
        releaseYears: '1979 - 1986',
        genres: ["Science Fiction","Horror"],
        description: `The Alien movie franchise is a gripping sci-fi horror saga. It begins with Ridley Scott's "Alien," where a commercial spaceship encounters a deadly extraterrestrial creature. Sigourney Weaver's iconic Ellen Ripley leads the battle against relentless Xenomorphs across sequels, offering intense suspense, thrilling action, and exploring humanity's struggle against a terrifying, hostile force.`,
        otherImages: ["/img/movies/3NZ5y4oLwvm1KF99m0DPQoqpEAP.jpg", "/img/movies/cEobq5QrnOJjO6giDs8q4RxmMKh.jpg", "/img/movies/ryjmULUTAHrGtCily5GMhWSvuI0.jpg", "/img/movies/sJfDC6aPHO8xAHJ8FDvte9TQxbG.jpg", "/img/movies/zO10n5QUiiU2g5cAIDofGVcBeBM.jpg"],
        coverImages: ["/img/movies/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg", "/img/movies/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"]
    }, 
    2: {
        titles: ['2001: A Space Odyssey'],
        runtime: 149,
        releaseYears: '1968',
        genres: ["Science Fiction","Mystery", "Adventure"],
        description: `"2001: A Space Odyssey" is a landmark science fiction film directed by Stanley Kubrick. Spanning from prehistoric Earth to space exploration, it follows a mysterious monolith's influence on human evolution and the discovery of an enigmatic signal near Jupiter. A visual and philosophical masterpiece exploring the mysteries of existence and evolution.`,
        otherImages: ['/img/movies/fiHd5qVQftiDyVEGvM3NcFwWcnj.jpg','/img/movies/6gyZF4SeifiUUYDELkCS8nOqsu2.jpg','/img/movies/vCkC4lHpJZNVUGzdWAF09UKK8by.jpg'],
        coverImages: ['/img/movies/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg']
    }, 
    3: {
        titles: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
        runtime: null,
        releaseYears: '1977 - 1983',
        genres: ["Science Fiction","Adventure", "Action"],
        description: `The original Star Wars trilogy, consisting of "A New Hope," "The Empire Strikes Back," and "Return of the Jedi," is an epic space opera saga. It follows the heroic journey of Luke Skywalker and his allies as they battle the tyrannical Galactic Empire, experiencing epic lightsaber duels, iconic characters, and a timeless battle between good and evil.`,
        otherImages: ['/img/movies/zgLadRY6f8Ydgf9sKpiq3tPYBUM.jpg','/img/movies/aJCtkxLLzkk1pECehVjKHA2lBgw.jpg','/img/movies/8snreMaPUZGebY97SaCTA4bWq9o.jpg','/img/movies/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg'],
        coverImages: ['/img/movies/2l05cFWJacyIsTpsqSgH0wQXe4V.jpg','/img/movies/jQYlydvHm3kUix1f8prMucrplhm.jpg','/img/movies/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg']
    }, 
    4: {
        titles: ['Soylent Green'],
        runtime: 97,
        releaseYears: '1973',
        genres: ["Science Fiction", "Thriller"],
        description: `"Soylent Green" is a dystopian thriller set in an overpopulated, ecologically devastated future. Detective Thorn investigates a murder that leads him to uncover a horrifying truth about the government's food source, Soylent Green. With societal decay and ethical questions, the film delves into environmental concerns and the consequences of unchecked corporate power.`,
        otherImages: ['/img/movies/87WZirHQG4SjSdBpBjGHwmWyDBE.jpg','/img/movies/b7ATgNqE84WrGKq7Y8JtrnAuAS8.jpg'],
        coverImages: ['/img/movies/5nbkShkOEXUoKVhaX0XG41wyBkq.jpg']
    },
    5: {
        titles: ['The Terminator', 'Terminator 2: Judgment Day'],
        runtime: null,
        releaseYears: '1984 - 1991',
        genres: ["Action","Thriller","Science Fiction"],
        description: `The Terminator franchise is a sci-fi saga of relentless machines and time travel. It follows Sarah Connor and her son John, future saviors of humanity, pursued by killer cyborgs from a post-apocalyptic future. With thrilling action and themes of fate, technology, and humanity's survival, it's a gripping battle across time.`,
        otherImages: ['/img/movies/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg','/img/movies/ahUaAgnkFu7QlBh5h4LCNeaSurV.jpg'],
        coverImages: ['/img/movies/5M0j0B18abtBI5gi2RhfjjurTqb.jpg','/img/movies/hzXSE66v6KthZ8nPoLZmsi2G05j.jpg']
    },
    6: {
        titles: ['A Clockwork Orange'],
        runtime: 136,
        releaseYears: '1971',
        genres: ["Science Fiction","Drama"],
        description: `"A Clockwork Orange" is a provocative dystopian film directed by Stanley Kubrick. It follows Alex, a delinquent who undergoes an experimental rehabilitation to suppress his violent tendencies. Examining free will, ethics, and the dark underbelly of society, the film presents a disturbing exploration of behavior control and the human psyche.`,
        otherImages: ['/img/movies/saVD6OJmNEr5YlOGIEeZd8LxViK.jpg','/img/movies/bR4U9n9YnZOvBUhOUNl316UNEyh.jpg','/img/movies/yIonSXf1jdNihhK8PssxO6KCIfz.jpg'],
        coverImages: ['/img/movies/4sHeTAp65WrSSuc05nRBKddhBxO.jpg']
    },
    7: {
        titles: ['The Thing'],
        runtime: 109,
        releaseYears: '1982',
        genres: ["Horror", "Mystery", "Science Fiction"],
        description: `"The Thing" is a gripping sci-fi horror directed by John Carpenter. In an Antarctic research station, a shape-shifting alien terrorizes a group of isolated scientists. Suspicion and paranoia mount as they struggle to identify the imposter, blurring the lines between friend and foe. A chilling tale of fear, survival, and distrust.`,
        otherImages: ['/img/movies/2AaztbdbQQZs3JqD3GM4DGrniLw.jpg','/img/movies/gl8jhRWV8k7yDEJLp51qtrV9FM0.jpg'],
        coverImages: ['/img/movies/tzGY49kseSE9QAKk47uuDGwnSCu.jpg']
    },
    8: {
        titles: ['Jurassic Park'],
        runtime: 127,
        releaseYears: '1993',
        genres: ["Adventure", "Science Fiction"],
        description: `"Jurassic Park" is a thrilling adventure directed by Steven Spielberg. A billionaire's vision of a dinosaur theme park turns deadly when prehistoric creatures escape and wreak havoc. As chaos erupts, a group fights to survive the rampaging beasts, showcasing the awe and danger of resurrected life in this iconic dinosaur spectacle.`,
        otherImages: ['/img/movies/rlBeIag79rHz0qxMuHFLWwd3nLh.jpg','/img/movies/86FXPjGWjrqKmmLszHow0KbI0Gd.jpg','/img/movies/1TvNazsE9WvRIxxeZkvL7IVVgzD.jpg'],
        coverImages: ['/img/movies/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg']
    },
    9: {
        titles: ['Blade Runner'],
        runtime: 117,
        releaseYears: '1982',
        genres: ["Science Fiction","Drama", "Thriller"],
        description: `"Blade Runner" is a neo-noir sci-fi. In a dystopian future, detective Deckard hunts rogue bioengineered humans known as replicants. As he questions humanity, morality, and identity, the film delves into the blurred line between artificial and natural life, crafting a visually atmospheric and philosophically rich narrative of existential contemplation.`,
        otherImages: ['/img/movies/3nNnzo1JT3TDQJVpAfKRVBHqmsy.jpg','/img/movies/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg'],
        coverImages: ['/img/movies/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg']
    },
    10: {
        titles: ['The Time Machine'],
        runtime: 103,
        releaseYears: '1960',
        genres: ["Science Fiction","Adventure","Action"],
        description: `"The Time Machine" (1960) is a classic sci-fi film based on H.G. Wells' novel. Scientist George travels to the distant future, encountering evolving societies and witnessing Earth's transformation. He races against time, confronting progress and decay, to rescue a civilization and fulfill his own destiny. A timeless journey through ages.`,
        otherImages: ['/img/movies/iti1FT35lH4QVn3pRfM9LL0zxkd.jpg','/img/movies/ziWJQ9z9W3POj8eLtnrCUWyHiSa.jpg'],
        coverImages: ['/img/movies/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg']
    },
    11: {
        titles: ['Donnie Darko'],
        runtime: 113,
        releaseYears: '2001',
        genres: ["Science Fiction","Fantasy","Drama","Mystery"],
        description: `"Donnie Darko" is a mind-bending psychological drama. Troubled teenager Donnie is plagued by visions of a menacing rabbit that predicts the world's end. As he navigates a mysterious alternate reality, the film delves into time travel, fate, and the blurred lines between sanity and madness, leaving audiences questioning reality.`,
        otherImages: ['/img/movies/npVlvuV5UkUGcnjErXJ9AiUfECR.jpg','/img/movies/bhyURcwJVlW0nnlGrUPQwckVGyI.jpg'],
        coverImages: ['/img/movies/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg']
    },
    12: {
        titles: ['The Man from Earth'],
        runtime: 87,
        releaseYears: '2007',
        genres: ["Science Fiction","Drama"],
        description: `"The Man from Earth" is an intriguing sci-fi drama. A college professor reveals to colleagues that he's a prehistoric immortal, sparking intense debates on history, religion, and the nature of humanity. Set almost entirely in a single room, the film captivates with its thought-provoking dialogue and philosophical exploration of immortality.`,
        otherImages: ['/img/movies/xUgh4cJm1M7KpEbIQJp1q69Ea96.jpg', '/img/movies/4w9M5NfMOfyr4nDULjKpyJ9wsob.jpg'],
        coverImages: ['/img/movies/V086R82gNgWrotaXZFO4JhdgB1.jpg']
    },
    13: {
        titles: ['Moon'],
        runtime: 97,
        releaseYears: '2009',
        genres: ["Science Fiction","Drama"],
        description: `"Moon" is a mesmerizing sci-fi film. Astronaut Sam Bell, stationed alone on a lunar base, uncovers unsettling truths about his identity and purpose. Amid isolation and discovery, the film delves into ethics, identity, and the consequences of corporate greed, creating a hauntingly atmospheric exploration of humanity and technology.`,
        otherImages: ['/img/movies/1Vn5HZEfhwb8aNrcENf6bUsb5cx.jpg','/img/movies/rr13caKC8NcwDXQQy16hhEzaeNv.jpg','/img/movies/xvNNdKrQo57gEEndrqoqZSzEjNj.jpg'],
        coverImages: ['/img/movies/35IU0Mq0zFsN1mYwDGts5mKc77n.jpg']
    },
    14: {
        titles: ['28 Days Later...'],
        runtime: 113,
        releaseYears: '2002',
        genres: ["Horror","Thriller","Science Fiction"],
        description: `"28 Days Later" is a gripping horror-thriller. A man awakens from a coma to find a post-apocalyptic London overrun by raging zombies. As he joins survivors in a desperate bid for safety, the film explores humanity's resilience, morality, and the harrowing consequences of a virus-induced collapse, delivering intense suspense and survivalism.`,
        otherImages: ['/img/movies/ydM0duz7VAQMALTPtL35L0LerOt.jpg','/img/movies/veUl0QT8swshQ9Dz0fQ1k6ZkthD.jpg'],
        coverImages: ['/img/movies/sQckQRt17VaWbo39GIu0TMOiszq.jpg']
    },
    15: {
        titles: ['Predestination'],
        runtime: 97,
        releaseYears: '2014',
        genres: ["Science Fiction","Thriller"],
        description: `"Predestination" is a mind-bending time travel thriller. A temporal agent embarks on a complex mission to prevent a terrorist's devastating attack. Twists and paradoxes unfold as identities intertwine, blurring lines between past, present, and future. The film offers a riveting exploration of causality, identity, and the intricacies of time travel.`,
        otherImages: ['/img/movies/u5JKxjMuKk0dVXqmS4e4gHo8pfg.jpg','/img/movies/fbQX0aMu6RvMWnIUE3WFJ4ddP0K.jpg'],
        coverImages: ['/img/movies/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg']
    },
    16: {
        titles: ['Cube'],
        runtime: 90,
        releaseYears: '1997',
        genres: ["Thriller","Science Fiction", "Mystery"],
        description: `"Cube" is a suspenseful sci-fi horror. Strangers wake in a bewildering maze of deadly traps, struggling to escape while unraveling the enigma of their confinement. As tensions rise, the film probes human nature under extreme stress, delivering a tense, claustrophobic experience that questions trust, motives, and the price of survival.`,
        otherImages: ['/img/movies/1AZz3SSYB3i9FOfc8r3enewSsRM.jpg','/img/movies/zsV5rQrQBAUZEouMg25L5Mu1OfN.jpg','/img/movies/fxDdCpbgNnjR6jONF4blLMXlVaB.jpg'],
        coverImages: ['/img/movies/iNwm6fpDqQ4WjwhYI8EW6LPklod.jpg']
    },
    17: {
        titles: ['Coherence'],
        runtime: 89,
        releaseYears: '2013',
        genres: ["Thriller","Science Fiction"],
        description: `"Coherence" is a mind-bending thriller. During a dinner party, a passing comet triggers a series of eerie events, fracturing reality and relationships. As tensions mount, the group navigates parallel universes and their doppelgängers, blurring lines between identity and alternate realities. A gripping exploration of uncertainty, paranoia, and cosmic anomalies.`,
        otherImages: ['/img/movies/kMRy1t4uPNjOiVAsEU4Fx7yY5My.jpg','/img/movies/utghtkDDOhwEDS7r9hhRhn7Wneg.jpg'],
        coverImages: ['/img/movies/oWlgqzVPWMpA8QGB8eUQYXXYgr0.jpg']
    },
    18: {
        titles: ['A Scanner Darkly'],
        runtime: 100,
        releaseYears: '2006',
        genres: ["Animation","Science Fiction", "Thriller"],
        description: `"A Scanner Darkly" is a dystopian sci-fi film. Undercover cop Bob Arctor navigates a drug-ridden world, battling addiction and surveilling himself. As identities blur and paranoia intensifies, the film explores government control, addiction's grip, and the fragility of perception, delivering a visually distinct and thought-provoking examination of reality and deception.`,
        otherImages: ['/img/movies/3wdrPAleY9agWJDehLrlXiGCPMY.jpg','/img/movies/2at7uHN2tUIdz6zmUwX373UAT5Y.jpg'],
        coverImages: ['/img/movies/lUKudOpHICDj6A6SO7DdaZM4W48.jpg']
    },
    19: {
        titles: ['Another Earth'],
        runtime: 92,
        releaseYears: '2011',
        genres: ["Drama","Science Fiction"],
        description: `"Another Earth" is a poignant sci-fi drama. After a duplicate Earth appears, a young woman grapples with a tragic mistake and a chance at redemption. The film delves into parallel lives, forgiveness, and the profound impact of the unknown, offering a contemplative exploration of self-discovery and the complexities of existence.`,
        otherImages: ['/img/movies/fJfpZnS2pvFCtyaDqoIgKLASvAT.jpg','/img/movies/k1ybgeby3ZOdp8myCdebovQNbmU.jpg'],
        coverImages: ['/img/movies/qvGJK3lFzpifAdyIupMNdWNX0qr.jpg']
    },
    20: {
        titles: ['Primer'],
        runtime: 77,
        releaseYears: '2004',
        genres: ["Science Fiction","Drama","Thriller"],
        description: `"Primer" is a cerebral time travel thriller. Two engineers accidentally invent a time machine, leading to a complex web of duplications and paradoxes. The film immerses audiences in intricate timelines and moral dilemmas, demanding active engagement as characters navigate a mind-bending narrative that explores friendship, ambition, and the consequences of discovery.`,
        otherImages: ['/img/movies/fHjafsBNWMAivHprT1eTDsIhA6d.jpg','/img/movies/yxlGeAK6BrbKng8VSJSKTpSXSsL.jpg'],
        coverImages: ['/img/movies/xEoq2WmDzpzxhkHEsmOYOg6BPg6.jpg']
    },
    21: {
        titles: ['I Am Mother'],
        runtime: 113,
        releaseYears: '2019',
        genres: ["Science Fiction","Thriller"],
        description: `"I Am Mother" is a gripping sci-fi drama. A girl is raised by an AI "Mother" in an underground bunker after an extinction event. When an outsider arrives, the girl questions her reality and Mother's intentions. The film examines trust, humanity's future, and the ethical implications of artificial intelligence.`,
        otherImages: ['/img/movies/xHL8KdLavIQ3kNrOk9S1av4Qxh.jpg','/img/movies/2EIagwVefgst22Dk1tDxZogk84g.jpg','/img/movies/c9iN5hhOn2IymSUOmTMVFJbw0bg.jpg'],
        coverImages: ['/img/movies/b3jWxwWRFqvNDJTvBcmKJVHnzKK.jpg']
    },
    22: {
        titles: ['Time Lapse'],
        runtime: 104,
        releaseYears: '2014',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: `"Time Lapse" is a suspenseful sci-fi thriller. Friends discover a camera that predicts the future 24 hours ahead. As they exploit its power, moral dilemmas and tensions arise. The film probes the consequences of preknowledge, human desires, and the intricacies of time manipulation, creating a gripping tale of choice and consequence.`,
        otherImages: ['/img/movies/sJyzCKKpg5GcciUQIwiaOn0Ixmp.jpg','/img/movies/v0YRNwfuPgtE4SJGJ4B5TxyXXo1.jpg'],
        coverImages: ['/img/movies/2E3neQ7IKjttHKDQm0uzJMSY3vW.jpg']
    },
    23: {
        titles: ['Europa Report'],
        runtime: 97,
        releaseYears: '2013',
        genres: ["Science Fiction","Thriller"],
        description: `"Europa Report" is an immersive sci-fi drama. A crew embarks on a perilous mission to Jupiter's moon, Europa, in search of extraterrestrial life. As they face technical failures and personal challenges, the film melds found footage and suspense, exploring the bounds of human exploration, sacrifice, and the quest for knowledge.`,
        otherImages: ['/img/movies/5YX89aNRLh9uT8lsvcjdHooaimT.jpg','/img/movies/zrQ0pCrVOlkJr3Ul5XivAfonFbi.jpg'],
        coverImages: ['/img/movies/tbsfaBjiAW5vfrV06R8KCOzVOYy.jpg']
    },
    24: {
        titles: ['ARQ'],
        runtime: 88,
        releaseYears: '2016',
        genres: ["Science Fiction","Thriller"],
        description: `"ARQ" is a gripping sci-fi thriller. In a dystopian future, a scientist creates a time loop device. A couple must navigate recurring home invasions, unraveling a conspiracy. The film delves into moral choices, time manipulation, and the nature of power, weaving a tense narrative of survival and changing destinies.`,
        otherImages: ['/img/movies/76RGYmhjCOdX8LMVRox7hObYe3p.jpg'],
        coverImages: ['/img/movies/mU4VeXVK18JtCZsy7i0zczlA9p7.jpg']
    },
    25: {
        titles: ['OtherLife'],
        runtime: 96,
        releaseYears: '2017',
        genres: ["Science Fiction","Crime","Mystery"],
        description: `"OtherLife" is a captivating sci-fi thriller. A scientist pioneers a revolutionary technology that allows users to experience artificial realities. When a trial goes awry, ethical dilemmas and personal consequences unravel. The film delves into the boundaries of consciousness, control, and the unexpected repercussions of manipulating perceptions.`,
        otherImages: ['/img/movies/arb8T0YFfLT5cUVIJPTMoHbmk12.jpg'],
        coverImages: ['/img/movies/stSDsKsb4fS6NPzuHwfAWD2jim8.jpg']
    },
    26: {
        titles: ['Infinity Chamber'],
        runtime: 103,
        releaseYears: '2016',
        genres: ["Science Fiction","Thriller"],
        description: `"Infinity Chamber" is a gripping sci-fi mystery. A man wakes in a hi-tech cell controlled by an AI. As he navigates simulated realities, he unravels the truth about his imprisonment and the enigmatic forces at play. The film explores memory, reality, and the human spirit in a tense, thought-provoking narrative.`,
        otherImages: ['/img/movies/koOzsARDwvS0NBIWQwiBwM0ibGr.jpg','/img/movies/mi1ixYgqcLgLKmnTJptvoC7YLSx.jpg','/img/movies/6sEYc1QvtSfyVo0fuxVuRrrTnjI.jpg'],
        coverImages: ['/img/movies/3WDppnUdf6nKDnrhjxrGlekvMuA.jpg']
    },
    27: {
        titles: ['Circle'],
        runtime: 87,
        releaseYears: '2015',
        genres: ["Science Fiction","Mystery","Drama","Thriller","Horror"],
        description: `"Circle" is a tense sci-fi thriller. Fifty strangers awaken in a dark room, forced to vote on who lives or dies every two minutes. As alliances shift and human nature is tested, the film probes morality, prejudice, and survival instincts, delivering a gripping exploration of group dynamics and life-or-death decisions.`,
        otherImages: ['/img/movies/bdK8j5xazVK1v84I4IEarwKxJp.jpg','/img/movies/o3505VxhHKHbfTmuNif1ukjXDxI.jpg'],
        coverImages: ['/img/movies/hbIL53MdZFJXsgxXaSOVuApWTs8.jpg']
    },
    28: {
        titles: ['Inception'],
        runtime: 148,
        releaseYears: '2010',
        genres: ['Action',"Science Fiction","Adventure"],
        description: `"Inception" is a mind-bending heist thriller. Dom Cobb and his team navigate dreamscapes to infiltrate minds and steal secrets. When tasked with planting an idea, they dive into layered dreams, blurring reality and imagination. The film explores subconscious depths, memory, and the power of inception, offering a visually stunning journey.`,
        otherImages: ['/img/movies/cPeny1AFySfq4BL9CKmY99wpRaO.jpg','/img/movies/ztZ4vw151mw04Bg6rqJLQGBAmvn.jpg','/img/movies/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg'],
        coverImages: ['/img/movies/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg']
    },
    29: {
        titles: ['Interstellar'],
        runtime: 169,
        releaseYears: '2014',
        genres: ["Adventure","Drama","Science Fiction"],
        description: `"Interstellar" is an epic sci-fi odyssey. A group of astronauts embarks on a perilous mission through a wormhole to save humanity from a dying Earth. As they navigate time dilation and cosmic wonders, the film explores love, sacrifice, and the profound mysteries of the universe, delivering a visually stunning and emotionally resonant narrative.`,
        otherImages: ['/img/movies/yDR0oQtWK5ng1IMAvhAxOl9JC1h.jpg','/img/movies/w7F97hhhUPLVPWERoYGAiZrQpsz.jpg','/img/movies/46LvLzMD19tzyoPc7HUf4PPvi62.jpg'],
        coverImages: ['/img/movies/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg']
    },
    30: {
        titles: ['Blade Runner 2049'],
        runtime: 164,
        releaseYears: '2017',
        genres: ["Science Fiction","Drama"],
        description: `"Blade Runner 2049" is a mesmerizing sci-fi sequel. Officer K, a replicant hunter, unearths a long-buried secret that could alter society. His quest intertwines with Rick Deckard's, exploring identity, humanity, and the consequences of creation. The film's breathtaking visuals and existential themes deliver a masterful continuation of the Blade Runner universe.`,
        otherImages: ['/img/movies/askFH4GSk2u9z3ZE5ypdKIMeqLJ.jpg','/img/movies/tpX7Yhe7QJet2QkAnnAa9KK2dFW.jpg','/img/movies/iqZWmj1Ifz4T5tuCuszWktUG5yX.jpg','/img/movies/h4eHTlkEF6e1oIzhIOhxHhITrz7.jpg'],
        coverImages: ['/img/movies/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg']
    },
    31: {
        titles: ['Her'],
        runtime: 126,
        releaseYears: '2013',
        genres: ["Romance","Science Fiction","Drama"],
        description: `"Her" is a poignant sci-fi romance. Lonely writer Theodore forms an emotional connection with an AI operating system, Samantha. Their evolving relationship explores love, consciousness, and the nature of human connections in a technologically advanced future. The film weaves a delicate tale of intimacy and self-discovery.`,
        otherImages: ['/img/movies/sp8d7UIYyRiCZ67qlZgcCewD2vk.jpg','/img/movies/uTJ3J5Fwou9QL1xbU5qu4vQItjj.jpg'],
        coverImages: ['/img/movies/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg']
    },
    32: {
        titles: ['The Martian'],
        runtime: 144,
        releaseYears: '2015',
        genres: ["Drama","Adventure","Science Fiction"],
        description: `"The Martian" is a riveting space survival drama. Astronaut Mark Watney is stranded on Mars after a mission goes awry. Using ingenuity and resourcefulness, he battles isolation, starvation, and extreme conditions, while NASA races to rescue him. The film captures the indomitable human spirit and scientific prowess in an interplanetary ordeal.`,
        otherImages: ['/img/movies/c7BXd7hYgjZBp20IGJ043MfKp11.jpg','/img/movies/dHoIJ9wSq8TBqqZCZK8VDdSrAMv.jpg'],
        coverImages: ['/img/movies/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg']
    },
    33: {
        titles: ['Arrival'],
        runtime: 116,
        releaseYears: '2016',
        genres: ["Drama","Science Fiction","Mystery"],
        description: `"Arrival" is a mesmerizing sci-fi drama. Linguist Louise Banks deciphers an alien language as mysterious spacecraft land worldwide. As global tensions escalate, she unravels a profound connection between language, time, and perception. The film delves into communication, empathy, and the transformative power of understanding, offering a thought-provoking exploration.`,
        otherImages: ['/img/movies/kJowcKv68iQQGerduSeEKbPwrKi.jpg','/img/movies/r8FD6CC3GgjWaGVkZh00AcedfpA.jpg','/img/movies/cBGPDk1tmxY3ZvImq66qJF2eKeQ.jpg'],
        coverImages: ['/img/movies/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg']
    },
    34: {
        titles: ['Edge of Tomorrow'],
        runtime: 113,
        releaseYears: '2014',
        genres: ["Action","Science Fiction"],
        description: `"Edge of Tomorrow" is a high-octane sci-fi action. Officer Cage, caught in a time loop, relives a deadly battle against alien invaders. With the help of skilled soldier Rita, he refines his skills and seeks to alter fate. The film balances exhilarating combat with mind-bending time manipulation, delivering a thrilling ride.`,
        otherImages: ['/img/movies/8lWNClCvZ5l7e21LM7ORRqa8v5S.jpg','/img/movies/mMDZBfmtV0fVZ9U38KjfC9TwXu9.jpg','/img/movies/9uOeWaPdSORfcIkJGO9CeedGnW0.jpg'],
        coverImages: ['/img/movies/xjw5trHV7Mwo61P0kCTy8paEkgO.jpg']
    },
    35: {
        titles: ['Rogue One'],
        runtime: 133,
        releaseYears: '2016',
        genres: ["Action","Adventure","Science Fiction"],
        description: `"Rogue One" is an intense Star Wars spin-off. A group of rebels, led by Jyn Erso, embarks on a daring mission to steal the Death Star plans. The film explores sacrifice, heroism, and the unsung heroes of the Rebel Alliance, bridging the gap between trilogies in an epic tale of rebellion.`,
        otherImages: ['/img/movies/3REhutwwZw6PQGu6XnKv6hl0DFX.jpg','/img/movies/dJowxvJmc70uh0THAGUO74rsZB7.jpg','/img/movies/8mTHUXS3vwub5ZlovQkZ8veQUah.jpg'],
        coverImages: ['/img/movies/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg']
    },
    36: {
        titles: ['Ex Machina'],
        runtime: 108,
        releaseYears: '2014',
        genres: ["Drama","Science Fiction"],
        description: `"Ex Machina" is a gripping sci-fi thriller. Programmer Caleb wins a week with reclusive genius Nathan, who tasks him with evaluating an AI named Ava. The film delves into artificial intelligence, ethics, and the blurred line between human and machine, crafting a suspenseful exploration of consciousness and manipulation.`,
        otherImages: ['/img/movies/z75t8CTdg9U5fuRS16dsGaFyF70.jpg','/img/movies/iPCRW6UClClddODY4BrymK1TK5S.jpg','/img/movies/qzmyCVcjbKamirdigAF0b7QtGz4.jpg'],
        coverImages: ['/img/movies/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg']
    },
    37: {
        titles: ['Rise of the Planet of the Apes'],
        runtime: 105,
        releaseYears: '2011',
        genres: ["Thriller","Action","Drama","Science Fiction"],
        description: `"Rise of the Planet of the Apes" is a compelling sci-fi prequel. Scientist Will creates an experimental drug that boosts ape intelligence, inadvertently triggering a revolution. As Caesar leads the uprising, the film explores ethics, intelligence, and the origins of a future ape-dominated world, delivering an engaging blend of action and introspection.`,
        otherImages: ['/img/movies/fSX71MsfKTOyvtE0bEyCrSbdCea.jpg','/img/movies/dENLz9Np9EV5Ro8UIBhbKC8BmSS.jpg'],
        coverImages: ['/img/movies/cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg']
    },
    38: {
        titles: ['Source Code'],
        runtime: 93,
        releaseYears: '2011',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: `"Source Code" is a riveting sci-fi thriller. Soldier Colter Stevens awakens in another man's body, reliving a train bombing to identify the culprit. As he races against time, the film explores alternate realities, fate, and the implications of technology, offering a gripping tale of mystery, action, and existential dilemmas.`,
        otherImages: ['/img/movies/oIS1SVAmq2qF0k4cIbzhWOpeA8I.jpg','/img/movies/rVkDj1cFhuy29avSe0I6mnRyP0H.jpg'],
        coverImages: ['/img/movies/AtQDTlj3MFOXJd5C9OopaRo3rRo.jpg']
    },
    39: {
        titles: ['Looper'],
        runtime: 119,
        releaseYears: '2012',
        genres: ["Action","Thriller","Science Fiction"],
        description: `"Looper" is a gripping sci-fi action film. Hitman Joe executes targets sent from the future, until he faces his future self as a target. The film delves into time travel, morality, and the consequences of one's choices, delivering a visceral narrative of identity and the complexities of altering destiny.`,
        otherImages: ['/img/movies/BkWQ0RpYaIhxFxgb4J5UEWIZlc.jpg','/img/movies/8UiZP1dTIPRYkIcwR84zZTwgKpZ.jpg'],
        coverImages: ['/img/movies/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg']
    },
    40: {
        titles: ['Ready Player One'],
        runtime: 140,
        releaseYears: '2018',
        genres: ["Science Fiction","Adventure","Action"],
        description: `"Ready Player One" is a thrilling sci-fi adventure. In a dystopian future, players enter a virtual reality called OASIS to find a hidden Easter egg that grants control over the world. As Wade Watts and friends race against a ruthless corporation, the film celebrates pop culture, friendship, and the limitless possibilities of imagination.`,
        otherImages: ['/img/movies/pShyfDRkbMde2M24EevqwbyFGX5.jpg','/img/movies/nPpD31LU1P5s1faBewfGoVBTtKL.jpg','/img/movies/dbrLfmFNFEJWv8rLnjpgCKlXWSy.jpg'],
        coverImages: ['/img/movies/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg']
    },
    41: {
        titles: ['10 Cloverfield Lane'],
        runtime: 103,
        releaseYears: '2016',
        genres: ["Thriller","Science Fiction","Drama","Horror"],
        description: `"10 Cloverfield Lane" is a tense sci-fi thriller. Michelle wakes in an underground bunker after a car accident, trapped with a suspicious man claiming an apocalyptic attack. As tensions escalate, the film blurs truth and paranoia, exploring survival instincts and the limits of trust in an enigmatic and claustrophobic narrative.`,
        otherImages: ['/img/movies/veGaHYcRHFPEoKfqxKbCEXI8tOT.jpg','/img/movies/rswb5gQwfSstQubg4xWbJFcZp3x.jpg'],
        coverImages: ['/img/movies/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg']
    },
    42: {
        titles: ['Snowpiercer'],
        runtime: 126,
        releaseYears: '2013',
        genres: ["Action","Science Fiction","Drama"],
        description: `"Snowpiercer" is a riveting sci-fi action. In a frozen future, survivors inhabit a perpetually moving train with a class hierarchy. Revolt brews as passengers push towards the front, challenging oppression and revealing dark truths. The film navigates social commentary, rebellion, and the consequences of unchecked power, in a thrilling dystopian odyssey.`,
        otherImages: ['/img/movies/qWhEHp3Ke9Ys7StjcBv9Ba6HTFB.jpg', '/img/movies/zvxv186qY8MI0RpdsdCjfq4OUd0.jpg'],
        coverImages: ['/img/movies/3s6ZyZKurx6wDJZMXSsbUsgjWCI.jpg']
    },
    43: {
        titles: ['Annihilation'],
        runtime: 115,
        releaseYears: '2018',
        genres: ["Science Fiction","Horror"],
        description: `"Annihilation" is a mesmerizing sci-fi thriller. A biologist joins a hazardous expedition into the mysterious "Shimmer," a mutating ecosystem. As reality bends and nature distorts, the film explores self-destruction, evolution, and the unknown, weaving a visually stunning and intellectually provocative narrative of transformation and the limits of understanding.`,
        otherImages: ['/img/movies/lfPPBgX7kMFwkj5MkVXWVmdBrIt.jpg', '/img/movies/1ESkuCstdaYYmP62qRVxDraIU8v.jpg', '/img/movies/dKWcbaYPGanS8HUHSRScWHYvHId.jpg'],
        coverImages: ['/img/movies/4YRplSk6BhH6PRuE9gfyw9byUJ6.jpg']
    },
    44: {
        titles: ['Eternal Sunshine of the Spotless Mind'],
        runtime: 108,
        releaseYears: '2004',
        genres: ["Science Fiction","Drama","Romance"],
        description: `"Eternal Sunshine of the Spotless Mind" is a poignant romantic sci-fi. Joel undergoes a procedure to erase memories of his ex-lover Clementine. As the process unfolds, the film delves into love, memory, and the fragile beauty of human connections, crafting a tender exploration of heartbreak, identity, and the imperfection of memory.`,
        otherImages: ['/img/movies/8AE7M2lMsyvowfT36porzGtmOtI.jpg', '/img/movies/bpT0ledIzTa1iPcI8CrxMQJKIvi.jpg'],
        coverImages: ['/img/movies/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg']
    },
    45: {
        titles: ['District 9'],
        runtime: 112,
        releaseYears: '2009',
        genres: ["Science Fiction"],
        description: `"District 9" is a thought-provoking sci-fi drama. Aliens are stranded in Johannesburg's slums, facing discrimination and oppression. As a government agent transforms, he helps an alien escape, sparking a tense conflict. The film examines xenophobia, humanity, and morality through a gritty, immersive narrative that blurs lines between oppressor and oppressed.`,
        otherImages: ['/img/movies/xIZSUw20iG52oaHo6Mds9EF7OK9.jpg','/img/movies/qFjoydrSLqGkaOxSmxSzpoPY0lO.jpg','/img/movies/lMNXxbyB8tRchB8OGns4jmwD86z.jpg'],
        coverImages: ['/img/movies/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg']
    },
    46: {
        titles: ['Children of Men'],
        runtime: 109,
        releaseYears: '2006',
        genres: ["Drama","Action","Thriller","Science Fiction"],
        description: `"Children of Men" is a gripping dystopian thriller. In a bleak future, humanity faces extinction due to infertility. A disillusioned bureaucrat is tasked with protecting a miraculously pregnant woman. The film explores hope, desperation, and societal collapse, delivering a tense, thought-provoking narrative set against a hauntingly realistic backdrop.`,
        otherImages: ['/img/movies/7cW7zHpDdl9fgaRXI5qAglV247P.jpg','/img/movies/www52jvhbB0ppe9s0zxbf9EYox.jpg'],
        coverImages: ['/img/movies/k9IAS4TehZFcKi4HVByxZNPfqex.jpg']
    },
    47: {
        titles: ['Star Trek'],
        runtime: 127,
        releaseYears: '2009',
        genres: ["Science Fiction","Action","Adventure"],
        description: `"Star Trek" (2009) is an exhilarating sci-fi reboot. James T. Kirk and Spock, young and untested, unite on the USS Enterprise. Battling a vengeful Romulan, they forge their legendary friendship. The film blends action, humor, and interstellar exploration, paying homage to the iconic franchise while introducing a new era of adventure.`,
        otherImages: ['/img/movies/muvny7uRksGaXqZUQSp3QGs8mSg.jpg','/img/movies/nOZ5zdw6bZXtoQblDnt0qMtawJw.jpg'],
        coverImages: ['/img/movies/9vaRPXj44Q2meHgt3VVfQufiHOJ.jpg']
    },
    48: {
        titles: ['Serenity'],
        runtime: 119,
        releaseYears: '2005',
        genres: ["Science Fiction","Action","Adventure","Thriller"],
        description: `"Serenity" is a thrilling space western. Captain Mal Reynolds and his crew lead a renegade life aboard the ship Serenity. Pursued by a government agent, they uncover a dark secret that threatens humanity. The film blends action, humor, and philosophical questions, providing a captivating continuation of the "Firefly" series.`,
        otherImages: ['/img/movies/vO0u0iZun3nI4Y7uTzA6ql7Kfx3.jpg','/img/movies/d1i3X1mDj3UpREnuVEqsy2L0q1Q.jpg'],
        coverImages: ['/img/movies/ckDo5vnRKehJ2qu8U95c7QcvGUm.jpg']
    },
    49: {
        titles: ['Minority Report'],
        runtime: 145,
        releaseYears: '2002',
        genres: ["Action","Thriller","Science Fiction","Mystery"],
        description: `"Minority Report" is a gripping sci-fi crime thriller. In a future where crimes are predicted and prevented, a detective becomes a suspect in a future murder. He fights to clear his name and challenges the system, exploring free will, surveillance, and the ethical dilemmas of precrime enforcement.`,
        otherImages: ['/img/movies/pyTfmWbQ1eWB2ZrEyAm9Z4JsAa1.jpg','/img/movies/5ZNzWllcMQw7ah0jIEkAhxHNQHl.jpg'],
        coverImages: ['/img/movies/ccqpHq5tk5W4ymbSbuoy4uYOxFI.jpg']
    },
    50: {
        titles: ['Equilibrium'],
        runtime: 107,
        releaseYears: '2002',
        genres: ["Action","Science Fiction","Thriller"],
        description: `"Equilibrium" is a dystopian sci-fi. In a totalitarian society, emotion is suppressed to maintain peace. A law enforcement officer rebels, embracing feelings and joining the resistance. The film explores individuality, art, and the cost of conformity, offering a visually striking journey of awakening and resistance.`,
        otherImages: ['/img/movies/huZZBPyYUnMPCnrAFyJhnwYsQx9.jpg','/img/movies/4K8a76qDhC8Oz0WLs8COLxoseIk.jpg','/img/movies/jPgHHr4lglC7h3KMzfHE7Q3VrjQ.jpg'],
        coverImages: ['/img/movies/q6VzUsHs4Z3myBHkrPAA3avfGwn.jpg']
    },
    51: {
        titles: ['Sunshine'],
        runtime: 107,
        releaseYears: '2007',
        genres: ["Science Fiction","Thriller","Horror"],
        description: `"Sunshine" is a gripping sci-fi thriller. A crew embarks on a perilous mission to reignite the dying sun, saving humanity. As they face technical failures and psychological strain, the film delves into sacrifice, sanity, and the awe-inspiring power of celestial forces, crafting an intense narrative of survival and cosmic exploration.`,
        otherImages: ['/img/movies/aK8wUzNu6C33M6wcLJOxNfwUq88.jpg','/img/movies/nloaUCIEiUfom3TTBxubjya1LEM.jpg'],
        coverImages: ['/img/movies/h2wM8RkmQiCDANgQnUjeXWNf1T7.jpg']
    },
    52: {
        titles: ['I Am Legend'],
        runtime: 101,
        releaseYears: '2007',
        genres: ["Drama","Science Fiction","Thriller"],
        description: `"I Am Legend" is a gripping post-apocalyptic drama. Scientist Robert Neville navigates a world devastated by a virus, battling mutants while searching for a cure. The film delves into isolation, morality, and the boundaries of humanity, delivering a haunting exploration of survival and the human spirit in a desolate future.`,
        otherImages: ['/img/movies/srWqkfT6fkoIRgJoOkr8lTgaqdH.jpg','/img/movies/a0CIuCk97KxnstKdifipJr9OZbh.jpg','/img/movies/usw8PMcbWqAtmABo2jO7KRRSrqi.jpg'],
        coverImages: ['/img/movies/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg']
    },
    53: {
        titles: ['A.I. Artificial Intelligence'],
        runtime: 146,
        releaseYears: '2001',
        genres: ["Drama","Science Fiction","Adventure"],
        description: `"AI Artificial Intelligence" is a poignant sci-fi drama. In a future where robots coexist with humans, a child android longs to become real. His journey explores love, identity, and the blurred line between artificial and natural life. The film offers a thought-provoking exploration of technology's emotional dimensions.`,
        otherImages: ['/img/movies/yFTlnpSY1AdhNCgWWASJJ3n2wZy.jpg','/img/movies/jP8G8ZuenT0O5nTFGivAwJG5tge.jpg','/img/movies/oZyRE7DL6HNue3yKTOSUESkSzDf.jpg'],
        coverImages: ['/img/movies/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg']
    },
    54: {
        titles: ['The Mist'],
        runtime: 126,
        releaseYears: '2007',
        genres: ["Horror","Science Fiction","Thriller"],
        description: `"The Mist" is a chilling horror-thriller. After a mysterious mist envelops a town, residents face deadly creatures lurking within. As tensions rise, a group seeks refuge in a supermarket, confronting fear, morality, and the human capacity for cruelty. The film crafts a suspenseful narrative of survival and desperation.`,
        otherImages: ['/img/movies/aDeNQAz19hYPscwEUovvVjSvKOF.jpg','/img/movies/5pUuknOMHxAFNLJcVaaqmS4Qofb.jpg','/img/movies/sDuNn7U0UQpEdwjiYnslzkzLW8G.jpg'],
        coverImages: ['/img/movies/1CvJ6diBACKPVGOpcWuY4XPQdqX.jpg']
    },
    55: {
        titles: ['I, Robot'],
        runtime: 115,
        releaseYears: '2004',
        genres: ["Action","Science Fiction"],
        description: `"I, Robot" is a thrilling sci-fi. In a future where robots serve humanity, detective Spooner investigates a murder allegedly committed by a robot. He uncovers a conspiracy challenging AI ethics and human safety, exploring the boundaries of technology and the relationship between humans and machines.`,
        otherImages: ['/img/movies/8gmBiegr1y0SA5DnTS4gOcJ7weB.jpg','/img/movies/jpFcZH2eyh6gcoxCa637TrGe4bT.jpg','/img/movies/8qbUYOOQi5mNlsowRQ2HawggjMX.jpg'],
        coverImages: ['/img/movies/zDu0TsCZHPzDO0d0iG9QynKGr4J.jpg']
    },
    56: {
        titles: ['Triangle'],
        runtime: 99,
        releaseYears: '2009',
        genres: ["Horror","Science Fiction"],
        description: `"Triangle" is a mind-bending psychological thriller. A group stranded at sea boards a deserted ocean liner, only to face unexplainable events and their own past actions. The film's intricate time loop narrative delves into identity, choice, and the haunting consequences of a seemingly endless cycle, offering a gripping exploration.`,
        otherImages: ['/img/movies/rlVpm5r7vZYyU9JHWf9UGOVDo5M.jpg','/img/movies/tWMtQa5E3jpDRxJnVbkODpgHD6I.jpg','/img/movies/2F3R4LNKkD1thDxE2SyjGXwWmtR.jpg'],
        coverImages: ['/img/movies/qdqAewwUsKO1x2p9rAkAOBlXeiF.jpg']
    },
    57: {
        titles: ['War of the Worlds'],
        runtime: 116,
        releaseYears: '2005',
        genres: ["Adventure","Thriller","Science Fiction"],
        description: `"War of the Worlds" is an intense sci-fi thriller. A father fights to protect his children as Earth is invaded by relentless alien tripods. The film captures the chaos and survival instincts in a visceral portrayal of humanity's struggle against a technologically superior menace, blending action, fear, and family dynamics.`,
        otherImages: ['/img/movies/vUOXexpO4oYhB6Z7SYZfQifCKo0.jpg','/img/movies/8P5iF5vJV6rx5r3irlpsXYraool.jpg','/img/movies/nH6hPhJq3EEv9CnBZgXU3IQnpJo.jpg'],
        coverImages: ['/img/movies/6Biy7R9LfumYshur3YKhpj56MpB.jpg']
    },
    58: {
        titles: ['The Matrix'],
        runtime: 136,
        releaseYears: '1999',
        genres: ["Action","Science Fiction"],
        description: `"The Matrix" is a groundbreaking sci-fi action. Hacker Neo discovers reality is a simulation controlled by machines. Joined by rebels Morpheus and Trinity, he fights to free humanity from digital enslavement. The film combines mind-bending concepts, exhilarating martial arts, and a philosophical exploration of existence, creating a genre-defining cinematic experience.`,
        otherImages: ['/img/movies/8K9qHeM6G6QjQN0C5XKFGvK5lzM.jpg','/img/movies/kik1N9YUFznqlTixMPlzk59KzFF.jpg','/img/movies/oMsxZEvz9a708d49b6UdZK1KAo5.jpg'],
        coverImages: ['/img/movies/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg']
    },
    59: {
        titles: ['Gattaca'],
        runtime: 106,
        releaseYears: '1997',
        genres: ["Thriller","Science Fiction","Mystery","Romance"],
        description: `"Gattaca" is a compelling sci-fi drama. In a genetically-engineered society, Vincent assumes another's identity to achieve his dreams of space travel. Challenged by his genetic limitations and a murder investigation, he navigates identity, discrimination, and the essence of human potential, delivering a thought-provoking exploration of ambition and genetic destiny.`,
        otherImages: ['/img/movies/yhMQQdXJOLZ9XRwx4zMhmM2sm65.jpg','/img/movies/oF99kDV3l00d1eXKY5ewUa5EPfK.jpg'],
        coverImages: ['/img/movies/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg']
    },
    60: {
        titles: ['Dark City'],
        runtime: 100,
        releaseYears: '1998',
        genres: ["Mystery","Science Fiction"],
        description: `"Dark City" is a mesmerizing sci-fi noir. Amnesiac John Murdoch wakes to a city controlled by mysterious beings who manipulate reality and memories. As he unravels the truth, the film delves into identity, consciousness, and the blurred line between reality and illusion, crafting a visually stunning and thought-provoking narrative.`,
        otherImages: ['/img/movies/nyAILHwgNOwo4MBP5HjgjOEyR0B.jpg','/img/movies/6XJqHZ8Z2w45suyiYFIyqlk55TJ.jpg','/img/movies/bmAzESah8IUNRQX5MqeyUrhE5Pr.jpg'],
        coverImages: ['/img/movies/eudlRpBPNQQKezaHxEavNecvc1X.jpg']
    },
    61: {
        titles: ['Contact'],
        runtime: 150,
        releaseYears: '1997',
        genres: ["Drama","Science Fiction","Mystery"],
        description: `"Contact" is a thought-provoking sci-fi drama. SETI scientist Ellie Arroway receives a message from extraterrestrial beings, triggering a global search for answers. As she navigates skepticism, faith, and interstellar communication, the film explores the human thirst for knowledge and the intricate intersection of science and spirituality.`,
        otherImages: ['/img/movies/dKGryaxyAdm07PfxFiq6qQzhpnn.jpg','/img/movies/eQKeVPmFnzo23MfTptbqVl9IJfs.jpg','/img/movies/tCkcvg7iSAAyNGJZlei3MDMfaz1.jpg'],
        coverImages: ['/img/movies/bCpMIywuNZeWt3i5UMLEIc0VSwM.jpg']
    },
    62: {
        titles: ['The Thirteenth Floor'],
        runtime: 100,
        releaseYears: '1999',
        genres: ["Thriller","Science Fiction","Mystery"],
        description: `"The Thirteenth Floor" is a mind-bending sci-fi thriller. In a virtual reality simulation, characters explore different time periods, only to discover they are part of an elaborate experiment. The film delves into identity, technology, and the nature of reality, weaving a complex narrative of parallel worlds and existential uncertainty.`,
        otherImages: ['/img/movies/vYxDWcTlYZzjRqQMCv3lBMxtkg.jpg','/img/movies/AqN9SZ01wRWkIWxQtqPGz7Pe90V.jpg'],
        coverImages: ['/img/movies/7oaie3ZBc9UuWZLF24crro1pone.jpg']
    },
    63: {
        titles: ['eXistenZ'],
        runtime: 97,
        releaseYears: '1999',
        genres: ["Action","Thriller","Science Fiction","Horror"],
        description: `"eXistenZ" is a surreal sci-fi thriller. In a world where virtual reality is experienced through bioengineered game pods, a game designer and her companion navigate a dangerous journey, blurring the lines between reality and simulation. The film probes the nature of perception, creation, and the fluidity of existence.`,
        otherImages: ['/img/movies/7Vp9ebHFuCHjGg9mLoXZIVnjKvm.jpg', '/img/movies/7NqnrzpPzzlPUbRsumxrcWWEZul.jpg', '/img/movies/6n6XruwoiFtDBfZeBywP2BeciX3.jpg'],
        coverImages: ['/img/movies/kETKF0JhdTPn1knci8CAdYL0d79.jpg']
    },
    64: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    65: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    66: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    67: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    68: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    69: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    70: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    71: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    72: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    73: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    74: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    75: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    76: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    77: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    78: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    79: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    80: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    81: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    82: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    83: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    84: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    85: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    86: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    87: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    88: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    89: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    90: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    91: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    92: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    93: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    94: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    95: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    96: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    97: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    98: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    99: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    100: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    101: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    },
    102: {
        titles: [''],
        runtime: null,
        releaseYears: null,
        genres: null,
        description: null,
        otherImages: [],
        coverImages: []
    }
}

// {
//     titles: [''],
//     runtime: null,
//     releaseYears: null,
//     genres: null,
//     description: null,
//     otherImages: [],
//     coverImages: []
// }