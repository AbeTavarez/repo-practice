$(() => {
    console.log('running script...')

// prints jquery document
console.log($)

// creates new div
const $div = $('<div>');
//appends a class to the div
$div.addClass('meat')


console.log($div);

// grabs the body tag and logs it
console.log($('body'));
// appends new $div to the body
$('body').append($div);

// create h3 and appends it to the $div
const $h3 = $('<h3>').text('Ostrich');
$div.append($h3);

//* Your turn
const myDiv = $('<div>'); 
const myH3 = $('<h3>')
myDiv.append(myH3).text('My Div').addClass('dairy');
$('body').append(myDiv);

const $divs = $('div');
console.log($divs)
// $divs.hide();

});