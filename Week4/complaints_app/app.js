console.log(`running script...`)

//* 1- Handle user input data (number of complaints to search)
//* ================== Form data
let numOfComplaints;
// Attach event listener to the form on the html page
$('form').on('submit', e => {
    e.preventDefault(); // prevent page from refreshing on submit
    // get user input for number of complaints
    numOfComplaints = $('input[type="text"]').val();
})

//* 2- Handle the user button interaction (identify which button the user pressed)
//* =================== Buttons
// gets all the buttons from the html page
const buttons = $(':button')
// console.log(buttons)

//* Check which button was clicked
// 1. Attach event listener to the buttons
buttons.click((e) => {
    // 2. declare a variable to set which button was pressed
    let btnPressed; 
    // 3. check button id and sets btnPressed to that id
    if (e.target.id === 'manhattan'){
        btnPressed = 'Manhattan';
        console.log(btnPressed)
    } 
    else if (e.target.id === 'brooklyn'){
        btnPressed = 'Brooklyn';
    }
    else if (e.target.id === 'queens'){
        btnPressed = 'Queens';
    }
    else if (e.target.id === 'staten_island'){
        btnPressed = 'Staten Island';
    }
    else if (e.target.id === 'bronx'){
        btnPressed = 'Bronx';
        console.log(btnPressed)
    };

    //* Make API call
    // checks if numOfComplaints has a value 
    if (numOfComplaints){
        // create ajax call with numOfComplains
        
        } else {
        // make default ajax call with limit 10 from NYPD

        const promise = $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&agency=NYPD`
        });   

        promise.then(
            data => console.log(data),
            error => console.log(error)
        )
        
        }

})






// const promise = $.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
// });

// promise.then(
//     data => console.log(data[0].agency_name)
// )

// promise.then(
//     // on success
//     data => {
//         $('#title').html(data.Title)
//         $('#year').html(data.Year)
//         $('#rating').html(data.Rated)
//     },
//     // on error
//     error => {
//         console.log(`Bad request`)
//     }
// )


// })