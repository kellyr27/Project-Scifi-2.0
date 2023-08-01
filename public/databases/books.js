/**
 * Types
 * 1 - Single Volume Graphic Novel
 * 2 - Multi Volume Graphic Novel
 * 3 - 
 * 4 - Multi Volume Book
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
    }
]