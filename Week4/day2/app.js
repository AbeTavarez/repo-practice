

// setTimeout(() => {
//     console.log(`oh...Hey!`);
// }, 4000);

//* ==== Callback funcs are funcs that are pass as an argument  to another func

const cameraFunction = (cb) => {
    console.log(`The Camera` + cb());
};

const lensOne = () => {
    return ` is now using the macro lens.`
};

const lensTwo = () => {
    return ` is now using the super macro lens.`
}

// cameraFunction(lensOne)

//* ================== Capitalize word

const capitalize = word => {
    return word[0].toUpperCase() + word.substring(1)
};

console.log(capitalize('linux'))