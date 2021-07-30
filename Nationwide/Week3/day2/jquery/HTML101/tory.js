console.log("Working")
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
    var populateData = () =>{
          // for loop to iterate and give us each object in the array
    for(var counter=0; counter < data.length; counter++){
        // grab the class of container
        const $container = $('<div>').addClass('container')
        // grab the div named name
    const $nameDiv = $('<div>').addClass('name').text(data[counter].name)
    // grab the div named address
    const $address = $('<div>').addClass('address').text(data[counter].address)
    // add the name div to the container
    $container.append($nameDiv)
    // add the address div to the container
    $container.append($address)
    // add the container to the body of the dom
    $('body').append($container)
    }
    }
var addData = (newName,newAddress) =>{
    data.push({ name:newName, address:newAddress })
    populateData()
}
addData("Tory","123 Sesame Street")