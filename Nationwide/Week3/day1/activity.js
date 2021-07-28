


const movie = { title: "Eraserhead", director: "David Lynch", year: 1978};

// print keys
for (let key in movie){
    console.log(key)
};

//prints values
for (let key in movie){
    console.log(movie[key])
}

const movies = [
    {title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960},
    {title: "Eraserhead", director: "David Lynch", year: 2000},
    {title: "Dayereh", director: "Jafar Panahi", year: 2000},
    {title: "Dayereh", director: "Jafar Panahi", year: 2000},
];
console.log(`====================================`)
let moviesObj = {}
for (let keys in movies){
    moviesObj = movies[keys]
}

console.log(moviesObj)