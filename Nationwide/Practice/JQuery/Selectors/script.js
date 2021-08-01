// $('h1').hide(); // hides all h1 tags
// $('h1#heading1').hide(); // hides h1 with ID anme heading1

// $('.heading2').hide() // hides h1 with class name heading2

$('p span').css('color', 'red')

$('ul#list li:first').css('color', 'blue')
$('ul#list li:last').css('color', 'red')
$('ul#list li:even').css('background-color', 'yellow')
$('ul#list li:odd').css('background-color', '#cccccc')

//* targets every third child
$('ul#list li:nth-child(3n').css('list-style', 'none')

// * Select inputs by type
// $(':button').hide()
// $(':submit').hide()
// $(':text').hide()

//* Grabs both links
$('[href]').css('color', 'red')
$('a[href="http://apple.com"]').css('font-size', '20px')

//* Selects all
// $('*').hide()

