"use strict"

class Movie {
    constructor(id, title, genre, release_year) {
        this.id = id
        this.title = title
        this.genre = genre
        this.release_year = release_year
    }
}

class SCiFi extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Science Fiction', release_year)
    }
}

class Crime extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Crime', release_year)
    }
}

class Action extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Action', release_year)
    }
}

class Drama extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Drama', release_year)
    }
}

class Adventure extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Adventure', release_year)
    }
}

class Romance extends Movie {
    constructor(id, title, release_year) {
        super(id, title, 'Romance', release_year)
    }
}

class MovieFactory {
    
    static instanceMoive (id, title, genre, release_year) {
        if (genre === 'Science Fiction') return new SCiFi (id, title, release_year)
        if (genre === 'Crime') return new Crime(id, title, release_year)
        if (genre === 'Action') return new Action(id, title, release_year)
        if (genre === 'Drama') return new Drama(id, title, release_year)
        if (genre === 'Adventure') return new Adventure(id, title, release_year)
        if (genre === 'Romance') return new Romance(id, title, release_year)
    }

    static bulkInstanceMovie (parsedData) {
        
       return parsedData.map((el) => {
            const {id, title, genre, release_year} = el
            return this.instanceMoive (id, title, genre, release_year)
        })
    }
}
export default MovieFactory

