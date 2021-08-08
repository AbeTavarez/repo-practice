console.log(`running script...`)



// $(() => {
//     const addH2 = () => {
//         let $h2 = $(`<h2>`).text(`Just getting started`);
//         $(`body`).append($h2);
//     };
//     addH2()
// }

// )

//*  Execute code once the DOM has loaded
// $(() => {
//     for (let i = 0; i <= 1000; i++){
//         console.log()
//         const $square = $(`<div>`).addClass(`square`);
//         $(`body`).append($square);
//     };
// });


const createSquares = () => {
    for (let i = 0; i <= 1000; i++){
        const $square = $(`<div>`).addClass(`square`);
        $square.css(`background-color`, rgbGenerator())
        $(`body`).append($square);
    };
};

const rgbGenerator = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`

};

createSquares();

