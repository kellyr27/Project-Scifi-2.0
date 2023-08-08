/**
 * Types
 * 1 - Single Volume Graphic Novel
 * 2 - Multi Volume Graphic Novel
 * 3 - Single Volume Book (Stand-alone)
 * 4 - Multi Volume Book Series
 * 5 - Best of the Author
 */

export const books = {
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
        description: ``,
        coverImages: ["/img/books/81fH9bZEycL.jpg"]
    },
    7: {
        titles: ['Descender'],
        author: 'Jeff Lemire',
        releaseYears: '2015 - 2018',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/71OFngblQ2L.jpg","/img/books/8157nkggL3L.jpg"]
    },
    8: {
        titles: ['Y: The Last Man'],
        author: 'Brian K. Vaughan',
        releaseYears: '2002 - 2008',
        genres: ['Post-Apocalyptic', 'Science Fiction'],
        pages: 1440,
        description: ``,
        coverImages: ["/img/books/B00MU5JLVC.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    9: {
        titles: ['Planetes'],
        author: 'Makoto Yukimura',
        releaseYears: '1999 - 2004',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/81VCs+0H9uL.jpg","/img/books/A1Yo-fExtuL.jpg"]
    },
    10: {
        titles: ['2001 Nights'],
        author: 'Yukinobu Hoshino',
        releaseYears: '1984 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/51ZN6SGRTRL.jpg","/img/books/51JJ934C5HL.jpg","/img/books/295030.jpg"]
    },
    11: {
        titles: ['Akira'],
        author: 'Katsuhiro Otomo',
        releaseYears: '1982 - 1990',
        genres: ['Cyberpunk','Political Thriller','Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/91XooFfV1tL.jpg"]
    },
    12: {
        titles: ['The Walking Dead'],
        author: 'Robert Kirkman',
        releaseYears: '2003 - 2019',
        genres: ['Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/B015XDWUN8.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    13: {
        titles: ['Transmetropolitan'],
        author: 'Warren Ellis',
        releaseYears: '1997 - 2002',
        genres: ['Cyberpunk', 'Science Fiction', 'Black Comedy'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/71eu8jnE1ZL.jpg"]
    },
    14: {
        titles: ['Blame!'],
        author: 'Tsutomu Nihei',
        releaseYears: '1997 - 2003',
        genres: ['Action','Cyberpunk','Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/B01INYEW1W.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    15: {
        titles: ['Saga'],
        author: 'Brian K. Vaughan',
        releaseYears: '2012 - ',
        genres: ['Epic Space Opera','Fantasy'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/61UAT72uUiL.jpg","/img/books/B015XEABR4.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    16: {
        titles: ['Hyperion','The Fall of Hyperion'],
        author: 'Dan Simmons',
        releaseYears: '1989 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/91cI7fKu0vL.jpg","/img/books/91TKy1zvxvL.jpg"]
    },
    17: {
        titles: ['1984', 'Animal Farm'],
        author: 'George Orwell',
        releaseYears: '1945 - 1949',
        genres: ['Dystopian','Political Fiction','Science Fiction','Political Satire'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/519zR2oIlmL.jpg","/img/books/71mr2kuAQmL.jpg"]
    },
    18: {
        titles: ['The Left Hand of Darkness','The Dispossessed'],
        author: 'Ursula K. Le Guin',
        releaseYears: '1969 - 1974',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/81EtwGcbbpL.jpg","/img/books/71qHFx8qkeL.jpg"]
    },
    19: {
        titles: ['Dune','Dune Messiah'],
        author: 'Frank Herbert',
        releaseYears: '1965 - 1969',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/81ym3QUd3KL.jpg","/img/books/810sNAUlgxL.jpg"]
    },
    20: {
        titles: ['The Moon Is a Harsh Mistress','Starship Troopers','Stranger in a Strange Land'],
        author: 'Robert A. Heinlein',
        releaseYears: '1959 - 1966',
        genres: ['Military','Philosophical', 'Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/71HObLgwgoL.jpg","/img/books/91tvljMw5VL.jpg","/img/books/91m7dvca0iL.jpg"]
    },
    21: {
        titles: ['Ubik','Do Androids Dream of Electric Sheep?','A Scanner Darkly'],
        author: 'Philip K. Dick',
        releaseYears: '1968 - 1977',
        genres: ['Science Fiction', 'Paranoid Fiction', 'Philosophical','Noir Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/719x7SbxZ2L.jpg","/img/books/DoAndroidsDream.png","/img/books/61bx2gKdfCL.jpg"]
    },
    22: {
        titles: ['2001: A Space Odyssey',"Childhood's End",'Rendezvous with Rama'],
        author: 'Arthur C. Clarke',
        releaseYears: '1953 - 1973',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ['/img/books/81vrBR1m8EL.jpg','/img/books/71gkE1EABtL.jpg','/img/books/817MlvFujNL.jpg']
    },
    23: {
        titles: ['Consider Phelbas','The Player of Games','Use of Weapons'],
        author: 'Iain M. Banks',
        releaseYears: '1987 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/51o34BvmuoL.jpg","/img/books/61+FQX-4vvL.jpg","/img/books/81tf3wM+G4L.jpg"]
    },
    24: {
        titles: ['I, Robot','The Caves of Steel','The Naked Sun','The Robots of Dawn'],
        author: 'Isaac Asimov',
        releaseYears: '1950 - 1983',
        genres: ['Mystery','Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/517xzQA0TrL.jpg","/img/books/91jHy1iF6+L.jpg","/img/books/91xFG5EyEcL.jpg","/img/books/91s+oCeDPvL.jpg"]
    },
    25: {
        titles: ["Ender's Game","Speaker for the Dead"],
        author: 'Orson Scott Card',
        releaseYears: '1985 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/81+IUsYtGTL.jpg","/img/books/91nT1ToakxL.jpg"]
    },
    27: {
        titles: ["The Mote in God's Eye"],
        author: 'Larry Niven and Jerry Pournelle',
        releaseYears: '1974',
        genres: ['Science Fiction'],
        pages: 537,
        description: ``,
        coverImages: ["/img/books/The_Mote_In_God's_Eye_-_original_hardcover_edition.jpg"]
    },
    28: {
        titles: ['A Canticle for Leibowitz'],
        author: 'Walter M. Miller Jr.',
        releaseYears: '1959',
        genres: ['Science Fiction'],
        pages: 320,
        description: ``,
        coverImages: ["/img/books/71uS6wMjkOL.jpg"]
    },
    29: {
        titles: ["The Hitchhiker's Guide to the Galaxy"],
        author: 'Douglas Adams',
        releaseYears: '1979 - 1992',
        genres: ["Comedy",'Science Fiction'],
        pages: 832,
        description: ``,
        coverImages: ["/img/books/A1lXgSfNdpL.jpg"]
    },
    30: {
        titles: ['The Forever War'],
        author: 'Joe Haldeman',
        releaseYears: '1974',
        genres: ['Military','Science Fiction'],
        pages: 236,
        description: ``,
        coverImages: ["/img/books/TheForeverWar(1stEd).jpg"]
    },
    31: {
        titles: ['Flowers for Algernon'],
        author: 'Daniel Keyes',
        releaseYears: '1966',
        genres: ['Science Fiction'],
        pages: 311,
        description: ``,
        coverImages: ["/img/books/61M6k0TRGrL.jpg"]
    },
    32: {
        titles: ['Solaris'],
        author: 'Stanisław Lem',
        releaseYears: '1970',
        genres: ['Science Fiction'],
        pages: 204,
        description: ``,
        coverImages: ["/img/books/71srKyqJuEL.jpg"]
    },
    33: {
        titles: ['The Giver'],
        author: 'Lois Lowry',
        releaseYears: '1993',
        genres: ['Young Adult', 'Dystopian' , 'Science Fiction'],
        pages: 208,
        description: ``,
        coverImages: ["/img/books/The_Giver_first_edition_1993.jpg"]
    },
    34: {
        titles: ['World War Z'],
        author: 'Max Brooks',
        releaseYears: '2006',
        genres: ['Horror', 'Post-Apocalyptic'],
        pages: 342,
        description: ``,
        coverImages: ["/img/books/918WSl3CjyL.jpg"]
    },
    35: {
        titles: ['Stories of Your Life and Others','Exhalation: Stories'],
        author: 'Ted Chiang',
        releaseYears: '2002 - 2019',
        genres: ['Science Fiction','Short Stories'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/Stories_of_your_life_cover.jpg","/img/books/Exhalation_-_Stories.jpg"]
    },
    36: {
        titles: ['The Expanse (9 book series)'],
        author: 'James S. A. Corey',
        releaseYears: '2011 - 2021',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/Nemesis_Games.jpg","/img/books/Persepolis_Rising.jpg","/img/books/Leviathan_Falls.jpg","/img/books/Tiamats_Wrath.jpg","/img/books/Babylons_Ashes.jpg","/img/books/Cibola_Burn.jpg","/img/books/James_S.A._Corey_-_Abaddon's_Gate.jpeg","/img/books/Calibans_War.jpg","/img/books/Leviathan_Wakes.jpg"]
    },
    37: {
        titles: ['The Three-Body Problem','The Dark Forest',"Death's End"],
        author: 'Liu Cixin',
        releaseYears: '2014 - 2016',
        genres: ['Hard Science Fiction', 'Alien Invasion'],
        pages: null,
        description: ``,
        coverImages: ["/img/books/B0BPCM5BL1.01._SCLZZZZZZZ_SX500_.jpg"]
    },
    38: {
        titles: ['The Paper Menagerie and Other Stories'],
        author: 'Ken Liu',
        releaseYears: '2016',
        genres: ['Science Fiction','Short Stories'],
        pages: 450,
        description: ``,
        coverImages: ["/img/books/61EN1899XlL.jpg"]
    },
    39: {
        titles: ['The Road'],
        author: 'Cormac McCarthy',
        releaseYears: '2006',
        genres: ['Post-Apocalyptic','Tragedy'],
        pages: 287,
        description: ``,
        coverImages: ["/img/books/The-road.jpg"]
    },
    40: {
        titles: ['House of Suns'],
        author: 'Alastair Reynolds',
        releaseYears: '2008',
        genres: ['Science Fiction'],
        pages: 565,
        description: ``,
        coverImages: ["/img/books/House_of_Suns_(Amazon).jpg"]
    },
    41: {
        titles: ["Old Man's War"],
        author: 'John Scalzi',
        releaseYears: '2005',
        genres: ['Military','Science Fiction'],
        pages: 320,
        description: ``,
        coverImages: ["/img/books/OldMansWar(1stEd).jpg"]
    },
    42: {
        titles: ['Children of Time'],
        author: 'Adrian Tchaikovsky',
        releaseYears: '2015',
        genres: ['Science Fiction','Space Opera'],
        pages: 600,
        description: ``,
        coverImages: ["/img/books/Children_of_Time_(novel).jpg"]
    },
    43: {
        titles: ['Blindsight'],
        author: 'Peter Watts',
        releaseYears: '2006',
        genres: ['Hard Science Fiction'],
        pages: 384,
        description: ``,
        coverImages: ["/img/books/Blindsight_(book_cover).jpg"]
    },
    44: {
        titles: ['The Martian'],
        author: 'Andy Weir',
        releaseYears: '2011',
        genres: ['Science Fiction'],
        pages: 369,
        description: ``,
        coverImages: ["/img/books/The_Martian_(Weir_novel).jpg"]
    },
    45: {
        titles: ['Spin'],
        author: 'Robert Charles Wilson',
        releaseYears: '2005',
        genres: ['Science Fiction'],
        pages: 364,
        description: ``,
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
