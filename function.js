// function syntax

function add(num1, num2) {
    return num1 + num2;
}
 
const result = add(5, 6);

// console.log(result); 

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// }
const addNumbers = (num1, num2) => num1 + num2;


const result2 = addNumbers(5, 8)
console.log(result2)

// this binding

let user = {
    age: 45,
    getAge: function () {
        console.log('normal fn',this.age);
    },
    getAgeDetails: () => { 
        console.log('arrow fn',this.age);
    }
}

const result3 = user.getAge()
const result4 = user.getAgeDetails()
