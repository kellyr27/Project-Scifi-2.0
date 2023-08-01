/**
 * Types
 * 1 - Single Volume Graphic Novel
 * 2 - Multi Volume Graphic Novel
 * 3 - Single Volume Book (Stand-alone)
 * 4 - Multi Volume Book Series
 * 5 - Best of the Author
 */

export const books = [
    {
        id: 1,
        title: 'Bone',
        bookTitles: null,
        type: 2,
        author: 'Jeff Smith',
        releaseYears: '1991 - 2004',
        pages: 1332,
        numOfBooks: 9,
        goodreadsLink: 'https://www.goodreads.com/book/show/21458853-bone-collection',
        description: `Bone is a beloved comic book series created by Jeff Smith. This epic fantasy-adventure follows the three Bone cousins - Fone, Phoney, and Smiley - as they get lost in a mysterious valley. Amidst a war between humans and creatures, they uncover ancient secrets, friendship, and courage on their extraordinary journey.`
    }, {
        id: 2,
        title: 'Nimona',
        bookTitles: null,
        type: 1,
        author: 'N.D. Stevenson',
        releaseYears: '2015',
        pages: 272,
        numOfBooks: null,
        goodreadsLink: 'https://www.goodreads.com/book/show/19351043-nimona',
        description: `Nimona is a captivating graphic novel by Noelle Stevenson. The story revolves around the quirky and shapeshifting Nimona, who becomes the sidekick of the villainous Lord Ballister Blackheart. As they challenge the kingdom's heroes, the duo uncovers dark secrets, blurring the lines between good and evil in this heartwarming and action-packed tale.`
    }, {
        id: 3,
        title: 'The Foundation Trilogy',
        bookTitles: ['Foundation', 'Foundation and Empire', 'Second Foundation'],
        type: 4,
        author: 'Isaac Asimov',
        releaseYears: '1951 - 1953',
        pages: 703,
        numOfBooks: 3,
        goodreadsLink: 'https://www.goodreads.com/book/show/50399538-the-foundation-trilogy-foundation',
        description: `The Foundation Trilogy, written by Isaac Asimov, is a groundbreaking science fiction saga. Spanning centuries, it follows mathematician Hari Seldon's plan to preserve knowledge and shorten a looming dark age. As empires rise and fall, the epic explores the power of foresight, psychohistory, and the quest to shape the future.`
    }, {
        id: 5,
        title: null,
        bookTitles: ['The Demolished Man', 'The Stars My Destination'],
        type: 5,
        author: 'Alfred Bester',
        releaseYears: '1953 - 1956',
        pages: null,
        numOfBooks: 2,
        goodreadsLink: 'https://www.goodreads.com/author/show/10992.Alfred_Bester',
        description: `Alfred Bester's books are visionary classics of science fiction. With works like "The Stars My Destination" and "The Demolished Man," he blends action, intrigue, and mind-bending concepts. Bester's writing explores psychic abilities, societal complexities, and the human psyche, leaving a lasting impact on the genre and captivating readers with his imaginative narratives.`
    }, {
        id: 6,
        title: null,
        bookTitles: ['The Martian Chronicles', 'The Illustrated Man'],
        type: 5,
        author: 'Ray Bradbury',
        releaseYears: '1950 - 1951',
        pages: null,
        numOfBooks: 2,
        goodreadsLink: 'https://www.goodreads.com/author/show/1630.Ray_Bradbury',
        description: `Ray Bradbury's books are timeless treasures of speculative fiction. His works, including "Fahrenheit 451," "The Martian Chronicles," and "Something Wicked This Way Comes," masterfully blend imagination and social commentary. With lyrical prose, Bradbury explores dystopian worlds, interplanetary adventures, and the essence of human nature, enchanting readers with his evocative storytelling.`
    }, {
        id: 7,
        title: null,
        bookTitles: ['The Time Machine', 'The War of the Worlds'],
        type: 5,
        author: 'H. G. Wells',
        releaseYears: '1895 - 1898',
        pages: null,
        numOfBooks: 2,
        goodreadsLink: 'https://www.goodreads.com/author/show/880695.H_G_Wells',
        description: `H.G. Wells' books are pioneering classics of science fiction and speculative fiction. With iconic works like "The War of the Worlds," "The Time Machine," and "The Invisible Man," Wells envisioned extraordinary worlds and technological marvels, exploring themes of alien invasion, time travel, and societal implications that continue to captivate readers across generations.`
    }
]