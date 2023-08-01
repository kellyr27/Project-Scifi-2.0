/**
 * Types
 * 1 - Indicates Single Movie
 * 2 - Indicates Multiple Movies (e.g. Sequels and Trilogies)
 */

export const movies = [
    {
        id: 1,
        type: 1,
        title: 'Planet of the Apes',
        imdbRating: 8.0,
        imdbLink: 'https://www.imdb.com/title/tt0063442/',
        runtime: 112,
        year: '1969',
        genres: ["Science Fiction","Adventure","Drama", "Action"],
        description: `In the 1969 sci-fi classic "Planet of the Apes", astronaut Colonel Taylor crashes on a planet dominated by intelligent apes who enslave primitive humans. As he challenges their society, shocking truths about the planet and humanity's fate are revealed, leading to a gripping and thought-provoking climax with an iconic twist.`,
    }, {
        id: 2,
        type: 2,
        title: ['Alien', 'Aliens'],
        imdbRating: [8.0, 8.4],
        imdbLink: 'https://www.imdb.com/title/tt0078748/',
        runtime: null,
        year: '1979 - 1986',
        genres: ["Science Fiction","Horror"],
        description: `The Alien movie franchise is a gripping sci-fi horror saga. It begins with Ridley Scott's "Alien," where a commercial spaceship encounters a deadly extraterrestrial creature. Sigourney Weaver's iconic Ellen Ripley leads the battle against relentless Xenomorphs across sequels, offering intense suspense, thrilling action, and exploring humanity's struggle against a terrifying, hostile force.`,
    }, {
        id: 3,
        type: 1,
        title: '2001: A Space Odyssey',
        imdbRating: 8.3,
        imdbLink: 'https://www.imdb.com/title/tt0062622/',
        runtime: 149,
        year: '1968',
        genres: ["Science Fiction","Mystery", "Adventure"],
        description: `"2001: A Space Odyssey" is a landmark science fiction film directed by Stanley Kubrick. Spanning from prehistoric Earth to space exploration, it follows a mysterious monolith's influence on human evolution and the discovery of an enigmatic signal near Jupiter. A visual and philosophical masterpiece exploring the mysteries of existence and evolution.`,
    }
]