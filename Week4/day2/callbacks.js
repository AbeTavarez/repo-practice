
//* First func
const logToConsole = (cb) => {
    console.log(cb())
};

//* Second func
const logsHi = () => {
    console.log(`hi`)
};

// logToConsole(logsHi)


//* Guess what this logs 1
// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');

//* Guess what this logs 2
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

// foo(bar, 'hi');

const baz = (param) => {
    console.log(param.toUpperCase());
};

// foo(baz, 'hello')

//* ========== Mixer

const electricMixer = (attachment) => {
    console.log(`The mixer is now: ` + attachment())
};

// electricMixer(() => {
//     return `spiralizing`;
// });

//* ===============
const spiralizer = () => {
    return "spiralizing";
  }
  
// electricMixer(spiralizer);s

const slicerDicer = () => {
    return "slicin' and dicin'";
  }
  
electricMixer(spiralizer);
electricMixer(slicerDicer);