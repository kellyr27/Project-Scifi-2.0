/**
 * Types
 * 1 - Single Volume Graphic Novel
 * 2 - Multi Volume Graphic Novel
 * 3 - Single Volume Book (Stand-alone)
 * 4 - Multi Volume Book Series
 * 5 - Best of the Author
 */

const books = {
    0: {
        titles: ['Bone'],
        author: 'Jeff Smith',
        releaseYears: '1991 - 2004',
        genres: ['Comedy','High Fantasy'],
        pages: 1332,
        description: `Bone is a beloved comic book series created by Jeff Smith. This epic fantasy-adventure follows the three Bone cousins - Fone, Phoney, and Smiley - as they get lost in a mysterious valley. Amidst a war between humans and creatures, they uncover ancient secrets, friendship, and courage on their extraordinary journey.`,
        coverImages: ["/img/books/B01KN1YXE4.01._SCLZZZZZZZ_SX500_.jpg"]
    }, 
    1: {
        titles: ['Nimona'],
        author: 'N.D. Stevenson',
        releaseYears: '2015',
        genres: ['Action-Adventure','Science Fantasy','Comedy Drama','Thriller'],
        pages: 272,
        description: `Nimona is a captivating graphic novel by Noelle Stevenson. The story revolves around the quirky and shapeshifting Nimona, who becomes the sidekick of the villainous Lord Ballister Blackheart. As they challenge the kingdom's heroes, the duo uncovers dark secrets, blurring the lines between good and evil in this heartwarming and action-packed tale.`,
        coverImages: ["/img/books/81KfE8r5bNL.jpg"]
    }, 
    2: {
        titles: ['Foundation', 'Foundation and Empire', 'Second Foundation'],
        author: 'Isaac Asimov',
        releaseYears: '1951 - 1953',
        genres: ['Science Fiction', 'Political Drama'],
        pages: 703,
        description: `The Foundation Trilogy, written by Isaac Asimov, is a groundbreaking science fiction saga. Spanning centuries, it follows mathematician Hari Seldon's plan to preserve knowledge and shorten a looming dark age. As empires rise and fall, the epic explores the power of foresight, psychohistory, and the quest to shape the future.`,
        coverImages: ["/img/books/374166-L.jpg", "/img/books/10983283-L.jpg", "/img/books/12884264-L.jpg", "/img/books/14322820-L.jpg"]
    }, 
    3: {
        titles: ['The Demolished Man', 'The Stars My Destination'],
        author: 'Alfred Bester',
        releaseYears: '1953 - 1956',
        genres: ['Science Fiction'],
        pages: null,
        description: `Alfred Bester's books are visionary classics of science fiction. With works like "The Stars My Destination" and "The Demolished Man," he blends action, intrigue, and mind-bending concepts. Bester's writing explores psychic abilities, societal complexities, and the human psyche, leaving a lasting impact on the genre and captivating readers with his imaginative narratives.`,
        coverImages: ["/img/books/61-6HxtImdL.jpg","/img/books/617TRkzo1HL.jpg"]
    }, 
    4: {
        titles: ['The Martian Chronicles', 'The Illustrated Man'],
        author: 'Ray Bradbury',
        releaseYears: '1950 - 1951',
        genres: ['Science Fiction', 'Post-Apocalyptic', 'Horror', 'Dystopian','Short Stories'],
        pages: null,
        description: `Ray Bradbury's books are timeless treasures of speculative fiction. His works, including "Fahrenheit 451," "The Martian Chronicles," and "Something Wicked This Way Comes," masterfully blend imagination and social commentary. With lyrical prose, Bradbury explores dystopian worlds, interplanetary adventures, and the essence of human nature, enchanting readers with his evocative storytelling.`,
        coverImages: ["/img/books/71L+jk0eCuL.jpg","/img/books/71kYIeAK8yL.jpg"]
    }, 
    5: {
        titles: ['The Time Machine', 'The War of the Worlds'],
        author: 'H. G. Wells',
        releaseYears: '1895 - 1898',
        genres: ['Science Fiction','Classics'],
        pages: null,
        description: `H.G. Wells' books are pioneering classics of science fiction and speculative fiction. With iconic works like "The War of the Worlds," "The Time Machine," and "The Invisible Man," Wells envisioned extraordinary worlds and technological marvels, exploring themes of alien invasion, time travel, and societal implications that continue to captivate readers across generations.`,
        coverImages: ["/img/books/61ZPzLlTaCL.jpg","/img/books/518k1D+JZHL.jpg","/img/books/ezgif.com-webp-to-jpg.jpg"]
    },
    6: {
        titles: ['Paper Girls'],
        author: 'Brian K. Vaughan',
        releaseYears: '2015 - 2019',
        genres: ['Mystery','Science Fiction'],
        pages: 800,
        description: `"Descender" is a captivating sci-fi comic. In a universe of robots, Tim-21, a child android, holds a secret tied to a devastating event. His journey explores artificial intelligence, humanity, and the aftermath of a galaxy-spanning conflict, creating a visually stunning and emotionally resonant narrative of discovery and survival.`,
        coverImages: ["/img/books/81fH9bZEycL.jpg"]
    },
    7: {
        titles: ['Descender'],
        author: 'Jeff Lemire',
        releaseYears: '2015 - 2018',
        genres: ['Science Fiction'],
        pages: null,
        description: `"Y: The Last Man" is a compelling comic series. A mysterious plague wipes out every male creature on Earth, except for Yorick and his monkey. Yorick, along with allies, navigates a world transformed by gender dynamics, delving into feminism, politics, and personal struggles, in an engaging post-apocalyptic tale of survival and change.`,
        coverImages: ["/img/books/71OFngblQ2L.jpg","/img/books/8157nkggL3L.jpg"]
    },
    8: {
        titles: ['Y: The Last Man'],
        author: 'Brian K. Vaughan',
        releaseYears: '2002 - 2008',
        genres: ['Post-Apocalyptic', 'Science Fiction'],
        pages: 1440,
        description: `"Planetes" is an engaging anime series. In the near future, debris collectors aboard a space station clean up Earth's orbital paths. Amid cosmic adventures and personal challenges, the crew confronts the fragility of existence, environmental concerns, and the pursuit of dreams, crafting a thought-provoking narrative of space exploration and human connections.`,
        coverImages: ["/img/books/B00MU5JLVC.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    9: {
        titles: ['Planetes'],
        author: 'Makoto Yukimura',
        releaseYears: '1999 - 2004',
        genres: ['Science Fiction'],
        pages: null,
        description: `"Planetes" is a captivating sci-fi manga. Set in the near future, it follows space debris collectors navigating Earth's orbit. As they face dangers and moral dilemmas, the series explores environmental responsibility, human aspirations, and the complexities of living and working in space, offering a thought-provoking blend of realism and imagination.`,
        coverImages: ["/img/books/81VCs+0H9uL.jpg","/img/books/A1Yo-fExtuL.jpg"]
    },
    10: {
        titles: ['2001 Nights'],
        author: 'Yukinobu Hoshino',
        releaseYears: '1984 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: `"2001 Nights" is a mesmerizing sci-fi manga. Through two-part stories, it explores humanity's journey into space over two millennia. Themes of exploration, evolution, and human nature are woven into breathtaking narratives that span cosmic eras, crafting an awe-inspiring and introspective mosaic of speculative futures and the enduring spirit of discovery.`,
        coverImages: ["/img/books/51ZN6SGRTRL.jpg","/img/books/51JJ934C5HL.jpg","/img/books/295030.jpg"]
    },
    11: {
        titles: ['Akira'],
        author: 'Katsuhiro Otomo',
        releaseYears: '1982 - 1990',
        genres: ['Cyberpunk','Political Thriller','Post-Apocalyptic'],
        pages: null,
        description: `"Akira" is a groundbreaking cyberpunk manga. In a post-apocalyptic Tokyo, Kaneda and Tetsuo's lives intertwine with secret government experiments, unleashing immense psychic powers. The series delves into power, identity, and societal collapse, delivering an intense and visually stunning narrative of friendship, rebellion, and the consequences of unchecked ambition.`,
        coverImages: ["/img/books/91XooFfV1tL.jpg"]
    },
    12: {
        titles: ['The Walking Dead'],
        author: 'Robert Kirkman',
        releaseYears: '2003 - 2019',
        genres: ['Post-Apocalyptic'],
        pages: null,
        description: `"The Walking Dead" is a gripping horror comic. Survivors navigate a world overrun by zombies, exploring human dynamics, morality, and the struggle for survival. The series masterfully weaves character development with terrifying challenges, creating a visceral and emotionally resonant narrative of post-apocalyptic chaos and the indomitable spirit of humanity.`,
        coverImages: ["/img/books/B015XDWUN8.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    13: {
        titles: ['Transmetropolitan'],
        author: 'Warren Ellis',
        releaseYears: '1997 - 2002',
        genres: ['Cyberpunk', 'Science Fiction', 'Black Comedy'],
        pages: null,
        description: `"Transmetropolitan" is a satirical cyberpunk comic. Gonzo journalist Spider Jerusalem navigates a futuristic city to uncover corruption and societal absurdities. Warren Ellis' series blends sharp social commentary, dark humor, and anarchic storytelling, crafting a visually striking and thought-provoking narrative that reflects on media, politics, and the human condition.`,
        coverImages: ["/img/books/71eu8jnE1ZL.jpg"]
    },
    14: {
        titles: ['Blame!'],
        author: 'Tsutomu Nihei',
        releaseYears: '1997 - 2003',
        genres: ['Action','Cyberpunk','Post-Apocalyptic'],
        pages: null,
        description: `"Blame!" is a mesmerizing cyberpunk manga. In a vast, chaotic megastructure, lone wanderer Killy searches for Net Terminal Genes to halt the expansion of hostile technology. The series delves into isolation, technology's reach, and humanity's quest for purpose, offering a visually stunning and philosophically rich exploration of a dystopian future.`,
        coverImages: ["/img/books/B01INYEW1W.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    15: {
        titles: ['Saga'],
        author: 'Brian K. Vaughan',
        releaseYears: '2012 - ',
        genres: ['Epic Space Opera','Fantasy'],
        pages: null,
        description: `"Saga" is an epic space-fantasy comic. Alana and Marko, from warring species, navigate interstellar conflict while protecting their daughter Hazel. The series delves into love, family, and the impact of war, weaving an intricate narrative of alliances, moral ambiguity, and fantastical worlds, in a visually striking and emotionally charged saga.`,
        coverImages: ["/img/books/61UAT72uUiL.jpg","/img/books/B015XEABR4.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    16: {
        titles: ['Hyperion','The Fall of Hyperion'],
        author: 'Dan Simmons',
        releaseYears: '1989 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: `"Hyperion Cantos" is an acclaimed sci-fi series. Pilgrims on Hyperion share life stories, revealing a universe threatened by mysterious entities known as the Shrike. Across time and space, the series explores diverse characters, time travel, and cosmic battles, weaving an intricate, philosophical narrative of destiny, consciousness, and humanity's evolution.`,
        coverImages: ["/img/books/91cI7fKu0vL.jpg","/img/books/91TKy1zvxvL.jpg"]
    },
    17: {
        titles: ['1984', 'Animal Farm'],
        author: 'George Orwell',
        releaseYears: '1945 - 1949',
        genres: ['Dystopian','Political Fiction','Science Fiction','Political Satire'],
        pages: null,
        description: `George Orwell's novels are powerful social commentaries. "1984" depicts a dystopian future under totalitarian control, exploring surveillance, propaganda, and thought control. "Animal Farm" allegorizes political revolutions and power corruption using farm animals. Orwell's works delve into oppression, truth, and the fragility of freedom, delivering thought-provoking critiques of society.`,
        coverImages: ["/img/books/519zR2oIlmL.jpg","/img/books/71mr2kuAQmL.jpg"]
    },
    18: {
        titles: ['The Left Hand of Darkness','The Dispossessed'],
        author: 'Ursula K. Le Guin',
        releaseYears: '1969 - 1974',
        genres: ['Science Fiction'],
        pages: null,
        description: `Ursula K. Le Guin's books are visionary tales. "The Left Hand of Darkness" explores gender and politics on an alien world. "The Dispossessed" contrasts two societies, probing anarcho-syndicalism. Le Guin's works dive into social structures, identity, and human nature, offering profound speculations on culture and connection within compelling science fiction and fantasy narratives.`,
        coverImages: ["/img/books/81EtwGcbbpL.jpg","/img/books/71qHFx8qkeL.jpg"]
    },
    19: {
        titles: ['Dune','Dune Messiah'],
        author: 'Frank Herbert',
        releaseYears: '1965 - 1969',
        genres: ['Science Fiction'],
        pages: null,
        description: `"Dune" series by Frank Herbert is a monumental sci-fi saga. On desert planet Arrakis, noble families vie for control of the spice melange, vital for space travel. The series delves into politics, religion, and ecology, exploring the destiny of the hero Paul Atreides amidst intricate power struggles, crafting an immersive universe of epic proportions.`,
        coverImages: ["/img/books/81ym3QUd3KL.jpg","/img/books/810sNAUlgxL.jpg"]
    },
    20: {
        titles: ['The Moon Is a Harsh Mistress','Starship Troopers','Stranger in a Strange Land'],
        author: 'Robert A. Heinlein',
        releaseYears: '1959 - 1966',
        genres: ['Military','Philosophical', 'Science Fiction'],
        pages: null,
        description: `Robert Heinlein's books are pioneering classics. "Stranger in a Strange Land" follows a Martian-raised man on Earth, exploring spirituality and human norms. "Starship Troopers" delves into militarism and citizenship. Heinlein's works tackle social and technological themes, offering thought-provoking science fiction narratives that have left an indelible mark on the genre.`,
        coverImages: ["/img/books/71HObLgwgoL.jpg","/img/books/91tvljMw5VL.jpg","/img/books/91m7dvca0iL.jpg"]
    },
    21: {
        titles: ['Ubik','Do Androids Dream of Electric Sheep?','A Scanner Darkly'],
        author: 'Philip K. Dick',
        releaseYears: '1968 - 1977',
        genres: ['Science Fiction', 'Paranoid Fiction', 'Philosophical','Noir Fiction'],
        pages: null,
        description: `Philip K. Dick's books delve into reality's intricacies. "Ubik" blurs perceptions with psychic phenomena. "A Scanner Darkly" explores drug-induced paranoia and identity. His works, from alternate realities to dystopian futures, question the nature of existence, consciousness, and authority, crafting a mesmerizing and often surreal journey through the complexities of human experience.`,
        coverImages: ["/img/books/719x7SbxZ2L.jpg","/img/books/DoAndroidsDream.png","/img/books/61bx2gKdfCL.jpg"]
    },
    22: {
        titles: ['2001: A Space Odyssey',"Childhood's End",'Rendezvous with Rama'],
        author: 'Arthur C. Clarke',
        releaseYears: '1953 - 1973',
        genres: ['Science Fiction'],
        pages: null,
        description: `Arthur C. Clarke's books envision the cosmos. "2001: A Space Odyssey" traces evolution's path through mysterious monoliths. "Childhood's End" depicts humanity's transformation by enigmatic Overlords. Clarke's works span space exploration, alien encounters, and technological wonders, delivering expansive, visionary science fiction narratives that ignite imagination and ponder the universe's enigmas.`,
        coverImages: ['/img/books/81vrBR1m8EL.jpg','/img/books/71gkE1EABtL.jpg','/img/books/817MlvFujNL.jpg']
    },
    23: {
        titles: ['Consider Phelbas','The Player of Games','Use of Weapons'],
        author: 'Iain M. Banks',
        releaseYears: '1987 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: `"The Culture" novels by Iain M. Banks are dazzling space operas. Advanced civilizations, including the anarchic Culture, navigate moral dilemmas, politics, and AI ethics across galaxies. The series weaves thrilling space adventures with social commentary, exploring utopian ideals, individuality, and the evolving relationships between humans and sentient machines.`,
        coverImages: ["/img/books/51o34BvmuoL.jpg","/img/books/61+FQX-4vvL.jpg","/img/books/81tf3wM+G4L.jpg"]
    },
    24: {
        titles: ['I, Robot','The Caves of Steel','The Naked Sun','The Robots of Dawn'],
        author: 'Isaac Asimov',
        releaseYears: '1950 - 1983',
        genres: ['Mystery','Science Fiction'],
        pages: null,
        description: `"The Robots" series by Isaac Asimov is a visionary saga. Spanning millennia, it examines human-robot interactions, ethics, and the future of AI. From "I, Robot" to "Robots and Empire," Asimov's novels blend thrilling mysteries with philosophical depth, shaping a mesmerizing narrative that contemplates the evolution of technology and its impact on humanity.`,
        coverImages: ["/img/books/517xzQA0TrL.jpg","/img/books/91jHy1iF6+L.jpg","/img/books/91xFG5EyEcL.jpg","/img/books/91s+oCeDPvL.jpg"]
    },
    25: {
        titles: ["Ender's Game","Speaker for the Dead"],
        author: 'Orson Scott Card',
        releaseYears: '1985 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: `Orson Scott Card's books are thought-provoking. "Ender's Game" follows a child prodigy in a battle against an alien threat. "Speaker for the Dead" delves into empathy and cultural understanding. Card's works balance intense action with philosophical depth, examining human nature, morality, and the impact of technology, in captivating science fiction narratives.`,
        coverImages: ["/img/books/81+IUsYtGTL.jpg","/img/books/91nT1ToakxL.jpg"]
    },
    27: {
        titles: ["The Mote in God's Eye"],
        author: 'Larry Niven and Jerry Pournelle',
        releaseYears: '1974',
        genres: ['Science Fiction'],
        pages: 537,
        description: `"The Mote in God's Eye" by Niven and Pournelle is a compelling first-contact tale. Humanity explores an alien civilization known as the Moties. As alliances form and secrets unravel, the novel navigates cultural clashes, technological surprises, and the complexities of interspecies interactions, crafting a gripping and intellectually stimulating narrative.`,
        coverImages: ["/img/books/The_Mote_In_God's_Eye_-_original_hardcover_edition.jpg"]
    },
    28: {
        titles: ['A Canticle for Leibowitz'],
        author: 'Walter M. Miller Jr.',
        releaseYears: '1959',
        genres: ['Science Fiction'],
        pages: 320,
        description: `"A Canticle for Leibowitz" by Miller Jr. is a post-apocalyptic masterpiece. In a world rebuilding after nuclear devastation, an order of monks preserves human knowledge. Spanning centuries, the novel explores cycles of civilization, faith, and science, creating a profound and introspective narrative that examines the enduring legacy of humanity's progress and folly.`,
        coverImages: ["/img/books/71uS6wMjkOL.jpg"]
    },
    29: {
        titles: ["The Hitchhiker's Guide to the Galaxy"],
        author: 'Douglas Adams',
        releaseYears: '1979 - 1992',
        genres: ["Comedy",'Science Fiction'],
        pages: 832,
        description: `"The Hitchhiker's Guide to the Galaxy" is a comedic space odyssey. Arthur Dent, inadvertently rescued from Earth's destruction, embarks on interstellar misadventures with eccentric companions. The series satirizes bureaucracy, philosophy, and the absurdity of existence, delivering hilarious and irreverent science fiction escapades across the cosmos.`,
        coverImages: ["/img/books/A1lXgSfNdpL.jpg"]
    },
    30: {
        titles: ['The Forever War'],
        author: 'Joe Haldeman',
        releaseYears: '1974',
        genres: ['Military','Science Fiction'],
        pages: 236,
        description: `"The Forever War" is a haunting military sci-fi. Mandella battles an interstellar war against an enigmatic alien foe. Time dilation estranges him from Earth, witnessing humanity's evolution. The novel explores the emotional toll of war, culture shock, and the poignant disconnection of a soldier lost in a shifting future.`,
        coverImages: ["/img/books/TheForeverWar(1stEd).jpg"]
    },
    31: {
        titles: ['Flowers for Algernon'],
        author: 'Daniel Keyes',
        releaseYears: '1966',
        genres: ['Science Fiction'],
        pages: 311,
        description: `"Flowers for Algernon" is a poignant novel. Charlie Gordon, a mentally disabled man, undergoes an experimental procedure that makes him a genius. The story explores intelligence, identity, and society's treatment of the disabled, following Charlie's emotional journey as he grapples with newfound brilliance and the complexities of human relationships.`,
        coverImages: ["/img/books/61M6k0TRGrL.jpg"]
    },
    32: {
        titles: ['Solaris'],
        author: 'Stanisław Lem',
        releaseYears: '1970',
        genres: ['Science Fiction'],
        pages: 204,
        description: `"Solaris" is a mesmerizing sci-fi. Psychologist Kris Kelvin investigates a sentient ocean on the space station Solaris, which manifests human fears and desires. The novel delves into consciousness, isolation, and the enigmatic nature of the universe, crafting a haunting narrative that blurs reality and imagination in a realm of cosmic mysteries.`,
        coverImages: ["/img/books/71srKyqJuEL.jpg"]
    },
    33: {
        titles: ['The Giver'],
        author: 'Lois Lowry',
        releaseYears: '1993',
        genres: ['Young Adult', 'Dystopian' , 'Science Fiction'],
        pages: 208,
        description: `"The Giver" is a thought-provoking dystopian novel. Jonas lives in a seemingly perfect society devoid of pain and emotions. Chosen as the Receiver of Memory, he learns the dark truths of his world. The story explores conformity, individuality, and the cost of eliminating pain, delivering a profound and emotionally charged narrative.`,
        coverImages: ["/img/books/The_Giver_first_edition_1993.jpg"]
    },
    34: {
        titles: ['World War Z'],
        author: 'Max Brooks',
        releaseYears: '2006',
        genres: ['Horror', 'Post-Apocalyptic'],
        pages: 342,
        description: `"World War Z" is a gripping zombie apocalypse novel. Through firsthand accounts, it chronicles a global war against the undead, unveiling social, political, and personal dimensions of survival. The book delves into humanity's resilience, highlighting the interconnectedness of lives amid chaos, in a chilling and thought-provoking narrative of devastation and recovery.`,
        coverImages: ["/img/books/918WSl3CjyL.jpg"]
    },
    35: {
        titles: ['Stories of Your Life and Others','Exhalation: Stories'],
        author: 'Ted Chiang',
        releaseYears: '2002 - 2019',
        genres: ['Science Fiction','Short Stories'],
        pages: null,
        description: `Ted Chiang's books are mind-bending wonders. "Stories of Your Life and Others" explores profound concepts through speculative tales. "Exhalation" delves into AI, consciousness, and the intricacies of existence. Chiang's works balance scientific rigor with emotion, crafting intellectually stimulating narratives that push boundaries and question the fabric of reality.`,
        coverImages: ["/img/books/Stories_of_your_life_cover.jpg","/img/books/Exhalation_-_Stories.jpg"]
    },
    36: {
        titles: ['The Expanse (9 book series)'],
        author: 'James S. A. Corey',
        releaseYears: '2011 - 2021',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: `"The Expanse" book series by James S.A. Corey is a sweeping space saga. In a solar system on the brink of war, disparate characters navigate political tensions, ancient alien artifacts, and existential threats. The series crafts a complex narrative of humanity's future, blending action, intrigue, and cosmic wonder.`,
        coverImages: ["/img/books/Nemesis_Games.jpg","/img/books/Persepolis_Rising.jpg","/img/books/Leviathan_Falls.jpg","/img/books/Tiamats_Wrath.jpg","/img/books/Babylons_Ashes.jpg","/img/books/Cibola_Burn.jpg","/img/books/James_S.A._Corey_-_Abaddon's_Gate.jpeg","/img/books/Calibans_War.jpg","/img/books/Leviathan_Wakes.jpg"]
    },
    37: {
        titles: ['The Three-Body Problem','The Dark Forest',"Death's End"],
        author: 'Liu Cixin',
        releaseYears: '2014 - 2016',
        genres: ['Hard Science Fiction', 'Alien Invasion'],
        pages: null,
        description: `"The Three-Body Problem" trilogy by Liu Cixin is a captivating sci-fi epic. Beginning with China's Cultural Revolution, it spans millennia, depicting humanity's response to an impending alien invasion. The series delves into physics, politics, and the human spirit, crafting a thought-provoking narrative of contact, conflict, and cosmic mysteries.`,
        coverImages: ["/img/books/B0BPCM5BL1.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    38: {
        titles: ['The Paper Menagerie and Other Stories'],
        author: 'Ken Liu',
        releaseYears: '2016',
        genres: ['Science Fiction','Short Stories'],
        pages: 450,
        description: `"The Paper Menagerie and Other Stories" by Ken Liu is a masterful collection. Exploring diverse themes and cultures, these short stories range from magical realism to sci-fi. Liu's evocative prose delves into identity, family, and the human experience, crafting a mesmerizing anthology that resonates with emotion and imagination.`,
        coverImages: ["/img/books/61EN1899XlL.jpg"]
    },
    39: {
        titles: ['The Road'],
        author: 'Cormac McCarthy',
        releaseYears: '2006',
        genres: ['Post-Apocalyptic','Tragedy'],
        pages: 287,
        description: `"The Road" is a haunting post-apocalyptic novel. A father and son journey through a desolate world, facing unrelenting hardship and moral dilemmas. Cormac McCarthy's sparse prose explores love, survival, and the resilience of the human spirit, delivering a powerful and emotional narrative of hope and despair in a ravaged landscape.`,
        coverImages: ["/img/books/The-road.jpg"]
    },
    40: {
        titles: ['House of Suns'],
        author: 'Alastair Reynolds',
        releaseYears: '2008',
        genres: ['Science Fiction'],
        pages: 565,
        description: `"House of Suns" is a grand space opera. Abigail and Purslane, "shatterlings" with cloned bodies and shared memories, explore a universe of ancient secrets and galactic civilizations. Alastair Reynolds crafts a sweeping narrative of time, identity, and cosmic mysteries, weaving a complex tale of love, intrigue, and the boundless cosmos.`,
        coverImages: ["/img/books/House_of_Suns_(Amazon).jpg"]
    },
    41: {
        titles: ["Old Man's War"],
        author: 'John Scalzi',
        releaseYears: '2005',
        genres: ['Military','Science Fiction'],
        pages: 320,
        description: `"Old Man's War" is a thrilling military sci-fi. Elderly humans enlist in the Colonial Defense Forces, gaining rejuvenated bodies to fight across the galaxy. John Scalzi's narrative explores war, mortality, and the ethics of sacrifice, crafting an action-packed and thought-provoking adventure of interstellar conflict and the price of immortality.`,
        coverImages: ["/img/books/OldMansWar(1stEd).jpg"]
    },
    42: {
        titles: ['Children of Time'],
        author: 'Adrian Tchaikovsky',
        releaseYears: '2015',
        genres: ['Science Fiction','Space Opera'],
        pages: 600,
        description: `"Children of Time" is an enthralling space opera. Earth's last survivors encounter an evolved spider civilization on a terraformed planet. Adrian Tchaikovsky's novel explores evolution, intelligence, and the symbiotic relationships between species, crafting a captivating narrative that spans centuries, challenges human biases, and delves into the intricacies of alien life.`,
        coverImages: ["/img/books/Children_of_Time_(novel).jpg"]
    },
    43: {
        titles: ['Blindsight'],
        author: 'Peter Watts',
        releaseYears: '2006',
        genres: ['Hard Science Fiction'],
        pages: 384,
        description: `"Blindsight" is a mind-bending sci-fi. In a post-contact Earth, a crew of human and post-human experts confront an alien presence in deep space. Peter Watts' novel delves into consciousness, intelligence, and the nature of self, crafting a thought-provoking narrative that challenges perception, identity, and the mysteries of the cosmos.`,
        coverImages: ["/img/books/Blindsight_(book_cover).jpg"]
    },
    44: {
        titles: ['The Martian'],
        author: 'Andy Weir',
        releaseYears: '2011',
        genres: ['Science Fiction'],
        pages: 369,
        description: `"The Martian" is a riveting survival story. Astronaut Mark Watney is stranded on Mars and must use his ingenuity to endure. Andy Weir's novel explores determination, science, and human resilience, delivering a gripping and often humorous narrative of one man's struggle against the harshness of space in a quest for survival.`,
        coverImages: ["/img/books/The_Martian_(Weir_novel).jpg"]
    },
    45: {
        titles: ['Spin'],
        author: 'Robert Charles Wilson',
        releaseYears: '2005',
        genres: ['Science Fiction'],
        pages: 364,
        description: `"Spin" is a captivating sci-fi. An alien membrane envelops Earth, causing time dilation and celestial changes. Robert Charles Wilson's novel explores human adaptation, love, and the enigmatic "Spin," unraveling the mysteries of the cosmos. The narrative delivers a thought-provoking exploration of existential questions within a mesmerizing and evolving universe.`,
        coverImages: ["/img/books/The_Giver_first_edition_1993.jpg"]
    },
    46: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    }
}

export default books