console.log(`running script....`);

// var box = document.getElementById("box");

// console.log(box)

// box.innerText = 'Finally Here!';

const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];


//* Loops over the data array | creates a name and an address div with the data
//* then appends the new divs to the container div
// $(() => {
//     for(let counter = 0; counter < data.length; counter++){
//         //create main container div
//         const $container = $('<div>').addClass('container');
//         // creates divs with data
//         const $nameDiv = $('<div>').addClass('name').text(data[counter].name);
//         const $address = $('<div>').addClass('address').text(data[counter].address);
//         // appends the divs to the container div
//         $container.append($nameDiv);
//         $container.append($address);
//         // appends the container to the body with the new data divs
//         $('body').append($container)
    
//     }
// });


const populateData = () => {
    for(let counter = 0; counter < data.length; counter++){
        console.log(data[counter])
        //create main container div
        const $container = $('<div>').addClass('container');
        // creates divs with data
        const $nameDiv = $('<div>').addClass('name').text(data[counter].name);
        const $address = $('<div>').addClass('address').text(data[counter].address);
        // appends the divs to the container div
        $container.append($nameDiv);
        $container.append($address);
        // appends the container to the body with the new data divs
        $('body').append($container)
    
    }
};


////////////////////* Push new data to the data array
const addData = (name, address) => {
    data.push({name: name, address: address});
    $('body').empty();
    populateData();
};


////////////////////* JQuery - OnLoad function
$(() => {
    populateData();
    addData('Abe', 'NY')
    addData('Eren', 'Shiganshina')
});

//////////////////* Remove data
const removeData = (name) => {
    data.forEach( obj => obj.name === name ? data.splice(data.indexOf(obj),1) : null)
    populateData();
    console.log(`----------------------`)
    console.log(data)
};
removeData('Megatron')


// data.forEach( obj => obj.name === name ? data.splice(indexOf(obj),1) : null)





    //console.log(data[counter])
    // const $nameDiv = $('<div>').addClass('name').text(data[counter].name)
    // $('.container').append($nameDiv)

    // const $addressDiv = $('<div>').addClass('address').text(data[counter].address);
    // $('.container').append($addressDiv)

    //////////////////////////////////////////* 