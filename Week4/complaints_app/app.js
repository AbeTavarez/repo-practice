console.log(`running script...`)
$('#result-h2').hide()

//* ================== Form data
//* 1- Attach event listener to the form on the html page
$('form').on('submit', e => {
    // console.log(e.originalEvent.submitter.id)
    e.preventDefault(); // prevent page from refreshing on submit

    //* 2- Get user input for number of complaints
    const numOfComplaints = $('input[type="text"]').val();
    let btnBorough; // variable to set which borough button was pressed

    //* =================== Buttons
    //* 3- Check which button was clicked
    // 1. Attach event listener to the button
    const buttonId = e.originalEvent.submitter.id;  
    // 3. check button id and sets btnPressed to that id
    if (buttonId === 'manhattan'){
        btnBorough = 'MANHATTAN';
    } 
    else if (buttonId === 'brooklyn'){
        btnBorough = 'BROOKLYN';
    }
    else if (buttonId === 'queens'){
        btnBorough = 'QUEENS';
    }
    else if (buttonId === 'staten_island'){
        btnBorough = 'STATEN ISLAND';
    }
    else if (buttonId === 'bronx'){
        btnBorough = 'BRONX';
    };

    //* ==================================== Make API call
    //* ===== checks if numOfComplaints has a value 
    if (numOfComplaints){
        $('#result-h2').show()
        // create ajax call with numOfComplains
        const promise = $.ajax({
            url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=' + numOfComplaints + '&agency=NYPD' + '&borough=' + btnBorough
            });   
        // Show data to the user    
        promise.then(
            data => {
                data.map( complaint => {
                    console.log(complaint)
                    let agency = $('<div>').html(complaint.agency)
                    $('#complaints-container').append(agency)

                    let borough = $('<div>').html(complaint.borough)
                    $('#complaints-container').append(borough)

                    let complaintTag = $('<div>').html(complaint.complaint)
                    $('#complaints-container').append(complaintTag)

                    let description = $('<div>').html(complaint.descriptor)
                    $('#complaints-container').append(description)

                    let status = $('<div>').html(complaint.status)
                    $('#complaints-container').append(status)
                })
            },
            error => console.log(error)
        );
        //* ====== if no number os complaints was enter
        } else {
            $('#result-h2').show()
        // make default ajax call with limit 10 from NYPD
        const promise = $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&agency=NYPD` + '&borough=' + btnBorough
        });   

        promise.then(
            data => {
                data.map( complaint => {
                    console.log(complaint)
                    let agency = $('<div>').html(complaint.agency)
                    $('#complaints-container').append(agency)

                    let borough = $('<div>').html(complaint.borough)
                    $('#complaints-container').append(borough)

                    let complaintTag = $('<div>').html(complaint.complaint)
                    $('#complaints-container').append(complaintTag)

                    let description = $('<div>').html(complaint.descriptor)
                    $('#complaints-container').append(description)

                    let status = $('<div>').html(complaint.status)
                    $('#complaints-container').append(status)
                    
                   
                
                })
            },
            error => console.log(error)
        )
        
        };
        e.stopPropagation();
});

// $('#borough').html(data[index].borough)
// $('#complaint').html(data[index].complaint)
// $('#description').html(data[index].descriptor)
// $('#status').html(data[index].status)




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