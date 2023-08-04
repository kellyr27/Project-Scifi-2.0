/**
 * Types
 * 1 - Indicates Single Movie
 * 2 - Indicates Multiple Movies (e.g. Sequels and Trilogies)
 */

export const movies = {
    0: {
        id: 1,
        type: 1,
        titles: ['Planet of the Apes'],
        imdbRating: 8.0,
        imdbLink: 'https://www.imdb.com/title/tt0063442/',
        runtime: 112,
        releaseYears: '1969',
        genres: ["Science Fiction","Adventure","Drama", "Action"],
        description: `In the 1969 sci-fi classic "Planet of the Apes", astronaut Colonel Taylor crashes on a planet dominated by intelligent apes who enslave primitive humans. As he challenges their society, shocking truths about the planet and humanity's fate are revealed, leading to a gripping and thought-provoking climax with an iconic twist.`,
        otherImages: ["/img/dQS3L3USI7Zhcq41abzMZF8dXCm.jpg", "/img/pNlDNGmEPx9zt00zoPhP2VUuITv.jpg", "/img/zRo7v3syLG19ZaLxZRFRLN1L9iX.jpg"],
        coverImages: ["/img/fqf2LjNRkRQaPfXRDxt1yS2i7z.jpg"]
    }, 
    1: {
        id: 2,
        type: 2,
        titles: ['Alien', 'Aliens'],
        imdbRating: [8.0, 8.4],
        imdbLink: 'https://www.imdb.com/title/tt0078748/',
        runtime: null,
        releaseYears: '1979 - 1986',
        genres: ["Science Fiction","Horror"],
        description: `The Alien movie franchise is a gripping sci-fi horror saga. It begins with Ridley Scott's "Alien," where a commercial spaceship encounters a deadly extraterrestrial creature. Sigourney Weaver's iconic Ellen Ripley leads the battle against relentless Xenomorphs across sequels, offering intense suspense, thrilling action, and exploring humanity's struggle against a terrifying, hostile force.`,
        otherImages: ["/img/3NZ5y4oLwvm1KF99m0DPQoqpEAP.jpg", "/img/cEobq5QrnOJjO6giDs8q4RxmMKh.jpg", "/img/ryjmULUTAHrGtCily5GMhWSvuI0.jpg", "/img/sJfDC6aPHO8xAHJ8FDvte9TQxbG.jpg", "/img/zO10n5QUiiU2g5cAIDofGVcBeBM.jpg"],
        coverImages: ["/img/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg", "/img/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"]
    }, 
    2: {
        id: 3,
        type: 1,
        titles: ['2001: A Space Odyssey'],
        imdbRating: 8.3,
        imdbLink: 'https://www.imdb.com/title/tt0062622/',
        runtime: 149,
        releaseYears: '1968',
        genres: ["Science Fiction","Mystery", "Adventure"],
        description: `"2001: A Space Odyssey" is a landmark science fiction film directed by Stanley Kubrick. Spanning from prehistoric Earth to space exploration, it follows a mysterious monolith's influence on human evolution and the discovery of an enigmatic signal near Jupiter. A visual and philosophical masterpiece exploring the mysteries of existence and evolution.`,
        otherImages: ["/img/3NZ5y4oLwvm1KF99m0DPQoqpEAP.jpg", "/img/cEobq5QrnOJjO6giDs8q4RxmMKh.jpg", "/img/ryjmULUTAHrGtCily5GMhWSvuI0.jpg", "/img/sJfDC6aPHO8xAHJ8FDvte9TQxbG.jpg", "/img/zO10n5QUiiU2g5cAIDofGVcBeBM.jpg"],
        coverImages: ["/img/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg", "/img/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"]
    }, 
    3: {
        id: 4,
        type: 2,
        titles: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
        imdbRating: [8.6, 8.7, 8.3],
        imdbLink: 'https://www.imdb.com/title/tt0076759/',
        runtime: null,
        releaseYears: '1977 - 1983',
        genres: ["Science Fiction","Adventure", "Action"],
        description: `The original Star Wars trilogy, consisting of "A New Hope," "The Empire Strikes Back," and "Return of the Jedi," is an epic space opera saga. It follows the heroic journey of Luke Skywalker and his allies as they battle the tyrannical Galactic Empire, experiencing epic lightsaber duels, iconic characters, and a timeless battle between good and evil.`,
    }
}

// {
//     id: null,
//     type: null,
//     title: null,
//     imdbRating: null,
//     imdbLink: null,
//     runtime: null,
//     releaseYears: null,
//     genres: null,
//     description: null,
// }