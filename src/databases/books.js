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
        coverImages: ["/img/B01KN1YXE4.01._SCLZZZZZZZ_SX500_.jpg"]
    }, 
    1: {
        titles: ['Nimona'],
        author: 'N.D. Stevenson',
        releaseYears: '2015',
        genres: ['Action-Adventure','Science Fantasy','Comedy Drama','Thriller'],
        pages: 272,
        description: `Nimona is a captivating graphic novel by Noelle Stevenson. The story revolves around the quirky and shapeshifting Nimona, who becomes the sidekick of the villainous Lord Ballister Blackheart. As they challenge the kingdom's heroes, the duo uncovers dark secrets, blurring the lines between good and evil in this heartwarming and action-packed tale.`,
        coverImages: ["/img/81KfE8r5bNL.jpg"]
    }, 
    2: {
        titles: ['Foundation', 'Foundation and Empire', 'Second Foundation'],
        author: 'Isaac Asimov',
        releaseYears: '1951 - 1953',
        genres: ['Science Fiction', 'Political Drama'],
        pages: 703,
        description: `The Foundation Trilogy, written by Isaac Asimov, is a groundbreaking science fiction saga. Spanning centuries, it follows mathematician Hari Seldon's plan to preserve knowledge and shorten a looming dark age. As empires rise and fall, the epic explores the power of foresight, psychohistory, and the quest to shape the future.`,
        coverImages: ["/img/374166-L.jpg", "/img/10983283-L.jpg", "/img/12884264-L.jpg", "/img/14322820-L.jpg"]
    }, 
    3: {
        titles: ['The Demolished Man', 'The Stars My Destination'],
        author: 'Alfred Bester',
        releaseYears: '1953 - 1956',
        genres: ['Science Fiction'],
        pages: null,
        description: `Alfred Bester's books are visionary classics of science fiction. With works like "The Stars My Destination" and "The Demolished Man," he blends action, intrigue, and mind-bending concepts. Bester's writing explores psychic abilities, societal complexities, and the human psyche, leaving a lasting impact on the genre and captivating readers with his imaginative narratives.`,
        coverImages: [""]
    }, 
    4: {
        titles: ['The Martian Chronicles', 'The Illustrated Man'],
        author: 'Ray Bradbury',
        releaseYears: '1950 - 1951',
        genres: ['Science Fiction', 'Post-Apocalyptic', 'Horror', 'Dystopian','Short Stories'],
        pages: null,
        description: `Ray Bradbury's books are timeless treasures of speculative fiction. His works, including "Fahrenheit 451," "The Martian Chronicles," and "Something Wicked This Way Comes," masterfully blend imagination and social commentary. With lyrical prose, Bradbury explores dystopian worlds, interplanetary adventures, and the essence of human nature, enchanting readers with his evocative storytelling.`,
        coverImages: [""]
    }, 
    5: {
        titles: ['The Time Machine', 'The War of the Worlds'],
        author: 'H. G. Wells',
        releaseYears: '1895 - 1898',
        genres: ['Science Fiction','Classics'],
        pages: null,
        description: `H.G. Wells' books are pioneering classics of science fiction and speculative fiction. With iconic works like "The War of the Worlds," "The Time Machine," and "The Invisible Man," Wells envisioned extraordinary worlds and technological marvels, exploring themes of alien invasion, time travel, and societal implications that continue to captivate readers across generations.`,
        coverImages: [""]
    },
    6: {
        titles: ['Paper Girls'],
        author: 'Brian K. Vaughan',
        releaseYears: '2015 - 2019',
        genres: ['Mystery','Science Fiction'],
        pages: 800,
        description: ``,
        coverImages: [""]
    },
    7: {
        titles: ['Descender'],
        author: 'Jeff Lemire',
        releaseYears: '2015 - 2018',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    8: {
        titles: ['Y: The Last Man'],
        author: 'Brian K. Vaughan',
        releaseYears: '2002 - 2008',
        genres: ['Post-Apocalyptic', 'Science Fiction'],
        pages: 1440,
        description: ``,
        coverImages: [""]
    },
    9: {
        titles: ['Planetes'],
        author: 'Makoto Yukimura',
        releaseYears: '1999 - 2004',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    10: {
        titles: ['2001 Nights'],
        author: 'Yukinobu Hoshino',
        releaseYears: '1984 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    11: {
        titles: ['Akira'],
        author: 'Katsuhiro Otomo',
        releaseYears: '1982 - 1990',
        genres: ['Cyberpunk','Political Thriller','Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    12: {
        titles: ['The Walking Dead'],
        author: 'Robert Kirkman',
        releaseYears: '2003 - 2019',
        genres: ['Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    13: {
        titles: ['Transmetropolitan'],
        author: 'Warren Ellis',
        releaseYears: '1997 - 2002',
        genres: ['Cyberpunk', 'Science Fiction', 'Black Comedy'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    14: {
        titles: ['Blame!'],
        author: 'Tsutomu Nihei',
        releaseYears: '1997 - 2003',
        genres: ['Action','Cyberpunk','Post-Apocalyptic'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    15: {
        titles: ['Saga'],
        author: 'Brian K. Vaughan',
        releaseYears: '2012 - ',
        genres: ['Epic Space Opera','Fantasy'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    16: {
        titles: ['Hyperion','The Fall of Hyperion'],
        author: 'Dan Simmons',
        releaseYears: '1989 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    17: {
        titles: ['1984', 'Animal Farm'],
        author: 'George Orwell',
        releaseYears: '1945 - 1949',
        genres: ['Dystopian','Political Fiction','Science Fiction','Political Satire'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    18: {
        titles: ['The Left Hand of Darkness','The Dispossessed'],
        author: 'Ursula K. Le Guin',
        releaseYears: '1969 - 1974',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    19: {
        titles: ['Dune','Dune Messiah'],
        author: 'Frank Herbert',
        releaseYears: '1965 - 1969',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    20: {
        titles: ['The Moon Is a Harsh Mistress','Starship Troopers','Stranger in a Strange Land'],
        author: 'Robert A. Heinlein',
        releaseYears: '1959 - 1966',
        genres: ['Military','Philosophical', 'Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    21: {
        titles: ['Ubik','Do Androids Dream of Electric Sheep?','A Scanner Darkly'],
        author: 'Philip K. Dick',
        releaseYears: '1968 - 1977',
        genres: ['Science Fiction', 'Paranoid Fiction', 'Philosophical','Noir Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    22: {
        titles: ['2001: A Space Odyssey',"Childhood's End",'Rendezvous with Rama'],
        author: 'Arthur C. Clarke',
        releaseYears: '1953 - 1973',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    23: {
        titles: ['Consider Phelbas','The Player of Games','Use of Weapons'],
        author: 'Iain M. Banks',
        releaseYears: '1987 - 1990',
        genres: ['Science Fiction','Space Opera'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    24: {
        titles: ['I, Robot','The Caves of Steel','The Naked Sun','The Robots of Dawn'],
        author: 'Isaac Asimov',
        releaseYears: '1950 - 1983',
        genres: ['Mystery','Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    25: {
        titles: ["Ender's Game","Speaker for the Dead"],
        author: 'Orson Scott Card',
        releaseYears: '1985 - 1986',
        genres: ['Science Fiction'],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    27: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    28: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    29: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    30: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    31: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    32: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    33: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    34: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    35: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    36: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    37: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    38: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    39: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    40: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    41: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    42: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    43: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    44: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
    },
    45: {
        titles: [],
        author: '',
        releaseYears: '',
        genres: [],
        pages: null,
        description: ``,
        coverImages: [""]
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
