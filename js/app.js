/*class Customer{
    name;
    age;
    address;

    constructor(name,age, address){
this.name = name;
//this.age = age;
//this.address = address;
    }
}

//let Customer1 = new Customer("SASINDU",30,"GALLE");
//console.log(Customer1);
//let Customer2 = new Customer("Arani",60,"kurunagala");
//console.log(Customer2);*/


let student = [
{
    name: "sasindu",
    age: 20,
    address: "galle",
    marks: [
            {
                subject: "maths",
                marks:100

            },
            {
                subject: "sinhala",
                marks:200

            },
            {
                subject: "history",
                marks:50

            },

    ]
},
{
    name: "sasi",
    age: 24,
    address: "galle"
},
{
    name: "sadu",
    age: 27,
    address: "galle"
},

]

console.log(student);
console.log(student[1].age);
console.log(student[0].marks[1]);

//---- DOM(Document Object Model)-----------------//

//console.log(document);
//console.log(document.title);
//document.write("<p><b>Hello World<b></p>");



//let title = Document.getElementById("title");
//console.log(title);

//title.innerText="Sasindu"

//function btnAddAction() {
    alert("Plus");
//}


/*let number = 0;

function btnIncrementOnAction(){
    number++;
    counter.innerText = "Number Counter - " + number;
}

function btnDecrementOnAction(){
    number--;
    validateMinimum();
    counter.innerText = "Number Counter - " + number;
}

function validateMinimum(){
    if(number < 0){
        number = 0;
        counter.innerText = "Number Counter - 0" + number;
    }*/


function addNumbers() {
    let num1 = Number(document.getElementById("textNum01").value);
    let num2 = Number(document.getElementById("textNum02").value);
    let result = num1 + num2;
    document.getElementById("result").innerText = "Result : " + result;
}

function subractNumbers() {
    let num1 = Number(document.getElementById("textNum01").value);
    let num2 = Number(document.getElementById("textNum02").value);
    let result = num1 - num2;
    document.getElementById("result").innerText = "Result : " + result;
}



