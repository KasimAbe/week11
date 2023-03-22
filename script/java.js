do {
    radius = parseInt(prompt("enter a value: "))
} while (isNaN(radius))

function greet(radius)
{
    return Math.PI * radius ** 2;
}

let result = alert(`The area is ${greet(radius)}`);


// let name = (message) => {
//     console.log(`Hello ${message}`)
// }

// const name = function (message) {
//     console.log(`Hello ${message}`)
// }    