console.log(`running script...`);


// let val = $('#input-box').val()

// $('#submit-btn').on('click', () => {
//     console.log( $('#input-box').val())
// })

const list = [];


const render = () => {
    // console.log(`list: `, list);
    // $('ul').empty();

    //appends each item from the list in a li to the ul
    list.forEach(item => {
        // console.log(item);
        // $('ul').append('<li>' + item + '<li>');

        $('ul').append('<li>' + list[list.length -1] + '</li>');
    });
    console.log(list)
    
    //
    $('li').on('click', event => {
        $(event.currentTarget).css('text-decoration', 'line-through');
        $(event.currentTarget).effect('shake');
    });
};


$('form').on('submit', (event) => {
    console.log($('#input-box').val()); // print the value from the input
    list.push($('#input-box').val()) //push value from input firld to the list array
    event.preventDefault(); // prevents page from refreshing
    $(event.currentTarget).trigger('reset') // reset input field

    render();
});




