//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function displayEmptyFunction(){

function emptyFunction(){};

document.getElementById("textOne").innerHTML=displayEmptyFunction.getPrototypeOf;

}

displayEmptyFunction();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array


var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayNumbers(){
  
    for (var i = 0; i<10; i++){
   document.getElementById("textTwo").innerHTML+=oneToTen[i]+", "; 
        
        document.getElementById("textThree").innerHTML+=oneToTen[i]+", "; 
    }
}

displayNumbers();


var button2 = document.getElementById("taskTwo");

button2.addEventListener("click",sliceFunction);

function sliceFunction(){
var fiveSlice = oneToTen.slice (4,5);
document.getElementById("textTwo").innerHTML=fiveSlice;
}



//3. Delete the last number in the array that you created above.

var button3 = document.getElementById("taskThree");

button3.addEventListener("click",popFunction);

function popFunction(){
    var popTen = oneToTen.pop();
    
    document.getElementById("textThree").innerHTML=popTen;
}




//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var button4 =document.getElementById("taskFour");
button4.addEventListener("click",changeStrings);

function changeStrings(){
   var string = document.getElementById("textFour").innerHTML;
    var string1=string.replace(/strawberry/gi, "banana")
    var string2=string1.replace(/strawberries/gi, "bananas")
    
    document.getElementById("textFour").innerHTML=string2;

}

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myArray=["Abilds&oslash; IL", " Manglerud Star", " Ellingsrud IL", " Rustad IL"];


function il(){
document.getElementById("textFive").innerHTML=myArray;

    }
il();

var button5 =document.getElementById("taskFive");
button5.addEventListener("click",carBrands);

function carBrands(){
    myArray[0]="Ferrari Testarosa";
    myArray[1]=" Porche Carera";
    myArray[2]=" Skoda Octavia";
    myArray[3]=" Bentley Continental GT";
    
    document.getElementById("textFive").innerHTML=myArray;
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.






var people = [
	{name: "Anna", status: "online", level: 14},
    {name: "Mike", status: "offline", level: 16},
    {name: "Paul", status: "online", level: 11}
];

var OnlinePeople =  people.filter(function(checkOnline) {
	return checkOnline.status == "online"
	});

var newOnlinePeople = OnlinePeople.toString;

document.getElementById("textSix").innerHTML=newOnlinePeople;
   




//7. Create a simple function that logs the date.
var button7 =document.getElementById("taskSeven");
button7.addEventListener("click",logDate);


function logDate(){
    
    
    document.getElementById("textSeven").innerHTML=new Date();
}
