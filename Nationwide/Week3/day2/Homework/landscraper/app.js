console.log(`hello world`)

//* variables
let account = 0;


//* Start
alert('Welcome to the Landscraper Game');
alert('You are starting a landscaping business, but all you have are your teeth.');


//* User teeth
for (let counter = 1; counter <= 5; counter++){
    alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
    let userInput = prompt("Type 'teeth' to cut the lawn")

    //
    if (userInput.toLowerCase() === 'teeth'){
        account += 1
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};

//* User rusty scissors
for (let counter = 1; counter <= 5; counter++){
    alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
    let userInput = prompt("Type 'teeth' to cut the lawn")

    //
    if (userInput.toLowerCase() === 'teeth'){
        account += 5
    } else if (userInput.toLowerCase() === 'quit'){
        break;
    }
};



































window.onload = () => {
    console.log('onload')

    //* Variables
    let account = 0;
    const tools = ['teeth', 'rusty scissors', ' old-timey push lawnmower', 'fancy battery-powered lawnmower', 'hire a team of starving students'];

    // Start
    alert('Welcome to Landscraper')
    alert('You are starting a landscaping business, but all you have are your teeth.')
    alert('Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')

    let userInput = prompt("Your account balance is " + account + ". Enter 'Teeth' to start cutting: ").toLocaleLowerCase()
    console.log(userInput)
    console.log()

    if (userInput === tools[0]){
        account += 1
    }
}