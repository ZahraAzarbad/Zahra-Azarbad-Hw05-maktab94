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

// const userInput = prompt("please enter your message and its position").split(",");
// console.log(userInput);


// var orgPrompt = window.prompt;
// var varone, vartwo;
// function saveVars(doc) {
//     varone = doc.getElementById("x").value;
//     vartwo = doc.getElementById("y").value
//     return [varone, vartwo];
// }
// window.prompt = function (one, two) {
//     var html = '<center><br><br>' + one + ':<input type=text id=x><br>' + two + ':<input type=text id=y><br><input type=button value=OK onclick=\'window.returnValue=window.dialogArguments.saveVars(document);window.close()\'/>';
//     var res = showModalDialog('javascript:"' + html + '"', window, "dialogWidth:100px;dialogHeight:100px");
// }
// x = prompt('first name', 'last name')
// alert(x)





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