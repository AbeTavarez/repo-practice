console.log(`running script...`)

//* jquery way
// $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data) => {
//         console.log(data)
//     },
//     error: () => {
//         console.log(`Bad request`);
//     }
// });

//* promise way
// const promise = $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=Snatch'
// });

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

//* ========================
$('form').on('submit', (e) => {
    e.preventDefault(); // stops the default 

    const userInput = $('input[type="text"]').val();
    
    //* API call
    const promise = $.ajax({
        url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
    });
    
    promise.then(
        // on success
        data => {
            $('#title').html(data.Title)
            $('#year').html(data.Year)
            $('#rating').html(data.Rated)
        },
        // on error
        error => {
            console.log(`Bad request`)
        }
    )


})