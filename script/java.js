

// // let name = (message) => {
// //     console.log(`Hello ${message}`)
// // }

// // const name = function (message) {
// //     console.log(`Hello ${message}`)
// // }    

// radiuspara = document.querySelector("#radius");
// console.log(radiuspara)
// resultpara = document.querySelector("#result");
// console.log(resultpara)
// do {
//     radius = parseInt(prompt("enter a value: "))
//     radiuspara.textcontent = radius
// } while (isNaN(radius))

// function greet(radius)
// {
//     return Math.PI * radius ** 2;
// }
// let result = alert(`The area is ${greet(radius)}`);

// function calculatecirclearea(radius){
//     if (isNaN(radius)){

//     }
// }
// let uservalue = prompt("enter a number")

function add_to_list(shoppinglist){
    // 1. select and store a ref to the ul
    const ullist = document.querySelector(".shopping")
    // 2. loop through list
    for(let item of shoppinglist){
        // 3. create an li -> createelement
        const new_li = document.createElement("li")
        // 4. append the li to the ul -> parent.appendchild(child)
        ullist.appendChild(new_li)
        // 5. update the textcontent of the li with array item
        console.log(ullist)
        new_li.textContent = item
    }

}
let mylist = ['bread', 'cheese', 'green pepper']
add_to_list(mylist)