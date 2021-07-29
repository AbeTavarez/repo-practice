let movies = [
    {name: "Titanic"},
    {name: "Space Jam"},
    {name: "Trollz"}
];

console.log(movies[2].name);

for (let key in movies){
    console.log(key)
};

for (let keys in movies){
    console.log(movies[keys])
}

let keys = Object.keys(movies);

for (let i = 0; i < keys.length; i++ ){
    console.log()
};