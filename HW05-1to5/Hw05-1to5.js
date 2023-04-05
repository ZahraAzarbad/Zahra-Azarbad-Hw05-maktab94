"use strict";

/********1*********/

// let user = {
//     name: "John",
//     age: 30,
//     sayHello: function () {
//         return alert("Hello " + this.name);
//     }
// }

// user.sayHello();



/**********2**********/


// const person = {
//     name: "David",
//     step: 124,

//     increase: function () {
//         this.step++;
//         return this
//     },
//     decrease: function () {
//         this.step--;
//         return this
//     },
//     reset: function () {
//         this.step = 0;
//         return this
//     },

//     read: function () {
//         console.log(this.step)
//         return this
//     },
// }



// person.increase().read().decrease().read().reset().read();


// console.log(person.increase());
// person.decrease();
// person.reset();
// person.read();




/***************3*************/


const information = [
    {
        name: "Pep Guardiola",
        age: 52,
    },
    {
        name: "David villa",
        age: 42,
    },

    {
        name: "Xavi Hernandez",
        age: 43,
    },

    {
        name: "Francesc Fabregas",
        age: 37,
    },

    {
        name: "Andres Iniesta",
        age: 39,
    },

    {
        name: "Carles Puyol",
        age: 45,
    }
]

// information.sort((firstAge, SecondAge) => firstAge.age - SecondAge.age);



// information.sort((a, b) => (a.age < b.age) ? 1 : -1);


// information.sort((first, second) => (first.age > second.age) ? 1 : -1);

// console.log(information);




/***************4**************/
const box = document.querySelector(".box");
const text = document.getElementById("text");
// const notification = document.querySelectorAll(".notifiction");

function userInput() {
    const userMessage = prompt("please enter a message");
    const top = Number(prompt("please enter top position"));
    const right = Number(prompt("please enter right position"));
    const userClass = prompt("please enter a class name");

    const getUser = {
        message: userMessage,
        className: userClass,
        top: top,
        right: right,
    }

    return getUser
}

// userInput();


function showNotification({ top, right, className, message }) {


    box.style.top = top + "px";
    box.style.right = right + "px";
    text.textContent = message;



    box.classList.add(className);


}


showNotification(userInput());








/****************5***************/

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

//////////////Arrow Function

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
// );