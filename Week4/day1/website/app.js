console.log(`running script...`)
console.log($(`body`))

//* Elements
const topContainer =  $(`<div>`).attr('id','top-container')
const bottomContainer =  $(`<div>`).attr('id','bottom-container')

//* Attach containers divs
$(`body`).append(topContainer);
$(`body`).append(bottomContainer);

const topH1 = $(`<h1>`).text(`Trois couleurs`);
topContainer.append(topH1)

const topDiv1 = $(`<div>`).addClass(`couleur`);
const topDiv2 = $(`<div>`).addClass(`couleur`);
const topDiv3 = $(`<div>`).addClass(`couleur`);

topContainer.append(topDiv1);
topContainer.append(topDiv2);
topContainer.append(topDiv3);

