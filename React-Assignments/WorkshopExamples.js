//Compilation of workshop examples
export class WorkshopExamples {
    TestDefaultParam(param = "DefaultValue") {
        console.log(`Param: ${param}!`);
    }

    compilationOfExamples() {
        //const example

        const testConst = "Test const";
        console.log(testConst);
        // testConst = "Test const again";
        // console.log(hello);   //Will throw error

        // END: const example

        // The let Keyword - Block Scope

        var testVar = true;

        if (testVar) {
            var testVar = false;
            console.log('testVar inside block: ' + testVar); //Print false
        }

        console.log('testVar outside block: ' + testVar); //Print false

        let testLet = true;

        if (testLet) {
            let testLet = false;
            console.log('testLet inside block: ' + testLet); //Print false
        }

        console.log('testLet outside block: ' + testLet); //Print true

        // END: The let Keyword - Block Scope


        // The let Keyword - Hoisting
        console.log('This is var before initialization: ' + hostEx1);
        var hostEx1 = 'hostEx1';

        //console.log('This is let before initialization: '+hostEx2);
        let hostEx2 = 'hostEx2'; // ReferenceError: Cannot access 'hostEx2' before initialization

        // END: The let Keyword - Hoisting

        // The let Keyword - A step towards closure

        var div,
            container = document.getElementById("container");

        for (var i = 0; i < 3; i++) {
            div = document.createElement("div");
            div.onclick = () => {
                alert("This is var box #" + i);
            };
            container.appendChild(div);
        }

        for (let j = 3; j < 6; j++) {
            div = document.createElement("div");
            div.onclick = () => {
                alert("This is let box #" + j);
            };
            container.appendChild(div);
        }

        //Note: let is having block scope and var having global scope.

        // END: The let Keyword


        // Template Strings

        let a = "string1";
        const b = "string2";
        console.log(`Combined One: ${a}, ${b}`);

        // END: Template Strings

        // Default Parameters

        this.TestDefaultParam("NewValue");
        this.TestDefaultParam();

        // END: Default Parameters

        // Arrow Functions

        const greet = entity => `Hello ${entity}!`;
        console.log(greet("Suyati"));

        const customGreet = (greet, entity) => {
            if (!greet) {
                greet = "Hello";
            }

            if (!entity) {
                entity = "World";
            }

            return `${greet}, ${entity}`;
        };
        console.log(customGreet("Hey", "Vishnu"));

        // END: Arrow Functions

        // Arrow Functions - A closure

        // const triveni1 = {
        //   rivers: ["Ganga", "Yamuna", "Saraswati"],
        //   display: function(delay = 1000) {
        //     setTimeout(function() {
        //       console.log(this.rivers.join(", "));
        //     }, delay);
        //   }
        // };

        // triveni1.display(); // Uncaught TypeError: Cannot read property 'join' of undefined


        const triveni2 = {
            rivers: ["Ganga", "Yamuna", "Saraswati"],
            display: function (delay = 1000) {
                setTimeout(() => {
                    console.log(this.rivers.join(", "));
                }, delay);
            },
        };

        triveni2.display();

        // END: Arrow Functions - A closure


        // Destructuring Objects

        const personalInfo = {
            name: "Test Name",
            address: "address1",
            state: "Kerala",
            country: "India"
        };

        const { state, country } = personalInfo;

        console.log(state, country);


        const printName1 = (personalInfo) => {
            console.log(`My name is ${personalInfo.name}`);
        }
        printName1(personalInfo);

        const printName2 = ({ name }) => {
            console.log(`My name is ${name}`);
        }
        printName2(personalInfo);

        // END: Destructuring Objects

        // Destructuring Arrays

        const cars = ["Ford", "Toyota", "Benz"];

        const [myVehicle] = cars;
        console.log(`My vehicle is ${myVehicle}`);

        const [, friendsVehicle,] = cars;
        console.log(`Friends vehicle is ${friendsVehicle}`);

        // END: Destructuring Arrays


        // Object Literal Enhancement

        const name = "Test Name",
            address = "address1",
            mystate = "Kerala",
            mycountry = "India";

        const personalData = {
            name,
            address,
            mystate,
            mycountry,
            printName() {
                console.log(`My name is ${this.name}`);
            },
        };

        console.log(personalData);
        personalData.printName();

        // END: Object Literal Enhancement

        // The Spread Operator

        const array1 = [
            "Element1",
            "Element2",
            "Element3",
            "Element4"
        ];
        const array2 = [
            "Element5",
            "Element6",
            "Element7",
            "Element8",
            "Element9"
        ];

        const array1Andarray2 = [...array1, ...array2];
        console.log(`array1Andarray2: ${array1Andarray2.join(", ")}`);

        const [ele1, ...others] = array1Andarray2;
        console.log(`First element is: ${ele1}`);
        console.log(`Other elements: ${others.join(", ")}`);

        const GetArrayElements = (...districts) => {
            const [ele10, ...rest] = districts;
            console.log(`10th element is ${ele10}.`);
            console.log(`Rest after 10th Element is: ${rest}.`);
        }
        GetArrayElements("Element10", "Element11", "Element12");

        // END: The Spread Operator


        // XMLHttpRequest

        function onResponse() {
            var data = this.responseText;
            console.log(`Response from XHR call: ${data}`);
        }

        function onError(error) {
            console.log(error);
        }

        var xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = onResponse;
        xhrRequest.onerror = onError;
        xhrRequest.open('get', 'https://randomuser.me/api/', true);
        xhrRequest.send();

        // END: XMLHttpRequest

        // jQuery Ajax

        $.ajax("https://randomuser.me/api/")
            .then(function (data) {
                console.log(`Response from AJAX call: ${JSON.stringify(data)}`);
            })
            .catch(function (error) {
                console.log(error);
            });

        // END: jQuery Ajax


        // Fetch API

        fetch("https://randomuser.me/api/")
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(`Request failed with status - ${response.status}`);
                }

                // response is a stream
                response.json().then((data) => {
                    console.log(`Response from Fetch call: ${JSON.stringify(data)}`);
                });
            })
            .catch((error) => {
                console.log(error);
            });

        // END: Fetch API


        // Async/Await

        const getRandomUser = async () => {
            const response = await fetch("https://randomuser.me/api/");
            const user = await response.json();
            console.log(`Response from async fn: ${JSON.stringify(user)}`);
        }
        getRandomUser();

        // END: Async/Await

        // const vaisakh1 = new PersonClass1("Vaisakh", "Babu");
        // vaisakh1.print();

        // PersonClass1.prototype.greet = function () {
        //     console.log(`Hey "${this.lastName}, ${this.firstName}"`);
        // };
        // vaisakh1.greet();

        // // END: Classes



        // // ES6 Modules

        // import { print } from "./modules/logger.js";
        // print("We are done for the day!");

        // // END: ES6 Modules

    }
}

