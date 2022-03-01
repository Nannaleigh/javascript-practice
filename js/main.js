// JavaScript Document
function test() {
    console.log('Hello World from Tatianna!')
}
// Overview of Functions
function floor(diameter) {
    var radius = diameter/2;
    var floorArea = Math.PI * (radius * radius)
    return floorArea
}
function walls(diameter, height) {
    var radius = diameter/2
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height
    return wallArea
}

function materialsNeeded() {
var d = document.getElementById("across").value;
var h = document.getElementById("height").value; 
var carpetNeeded = Math.ceil(floor(d));
var paintNeeded = Math.ceil(walls(d, h));
console.log(carpetNeeded);
console.log(paintNeeded);
} // end of function


////SWITCH STATEMENTS//////

function dayConverter() {
    var elem = document.getElementById("chooseMe");
    var dateShort = elem.options[elem.selectedIndex].text;
    var dayName;
console.log(dateShort)

switch(Number(dateShort)) {
    case 1: 
    dayName = "Sunday";
    break;
    case 2: 
    dayName = "Monday";
    break;
    case 3: 
    dayName = "Tuesday";
    break;
    case 4: 
    dayName = "Wednesday";
    break;
    case 5: 
    dayName = "Thursday";
    break;
    case 6: 
    dayName = "Friday";
    break;
    case 7: 
    dayName = "Saturday";
    break;
    default: 
    dayName = "Out of Range"
}
    document.getElementById('feedback').innerHTML = dayName;
}

//// FORTUNES -- SWITCH statements

function fortuneTeller() {
    var elem = document.getElementById("chooseFortune");
    var fortuneNum = elem.options[elem.selectedIndex].value;
    var fortuneMessage;
    switch (Number(fortuneNum)) {
        case 1:
        case 6:
            fortuneMessage = "You will inherit a fortune.";
            break;
        case 2:
        case 7:
            fortuneMessage = "You will become a JavaScript Ninja";
            break;
        case 3:
            fortuneMessage = "You will win a new car.";
            break;
        case 4:
        case 8:
            fortuneMessage = "A new computer will arrive at your house today.";
            break;
        
        default:
            fortuneMessage= "You have three hours to live so finish this course.";
    } // end of switch
    document.getElementById('fortuneResult').innerHTML = fortuneMessage;
}


// ELEMENT BY ID (single object)
var foundYou = document.getElementById('overview');
console.log(foundYou);
console.log(foundYou.innerText);
foundYou.innerText = ">>I Changed You<<";

//ELEMENETS BY TAG NAME (collection)
var foundYou = document.getElementsByTagName('h1');
console.log(foundYou);
console.log(foundYou[2].innerText);
foundYou[2].innerText = ">>I Changed You<<";


//ELEMENTS BY NAME (collection)
var foundYou = document.getElementsByName('description');
console.log(foundYou);
console.log(foundYou[0].innerText);
foundYou[0].innerHTML = ">>I Changed You<<";


//ELEMENTS BY CLASS NAME (collection)
var foundYou = document.getElementsByClassName('smallCenter');
console.log(foundYou);
console.log(foundYou[0].innerText);
foundYou[0].innerHTML = ">>I Changed You<<";


//QUERY SELECTOR ALL (collection)
var foundYou = document.querySelectorAll('li');
console.log(foundYou);
console.log(foundYou[5].innerText);
foundYou[5].innerHTML = ">>I Changed You<<";

var foundYou = document.querySelectorAll('ul#lp_list li');
console.log(foundYou);
console.log(foundYou[2].innerText);
foundYou[2].innerHTML = ">>I Changed You<<";


//++++++++++++++++++ COMBINATIONS +++++++++++++++++++++

var foundYou = document.getElementById('sw_list');
console.log(foundYou);
var childArray = foundYou.getElementsByTagName('LI');
console.log(childArray);
childArray[0].innerText = '>>These Items';
childArray[1].innerText = '>> Has Just';
childArray[2].innerText = '>> Been Changed';



var newOptions = ['Orange', 'Red', 'Blue'];
// Setting the values from a form element
var foundYou = document.getElementById('myForm');
console.log(foundYou);
var selectArray = foundYou.getElementsByTagName('option');
console.log(selectArray);
for (i=0; i<selectArray.length;i++) {
	selectArray[i].innerText= newOptions[i];
} // end loop





var foundYou = document.getElementById('myForm');
console.log(foundYou);
var selectArray = foundYou.getElementsByTagName('input');
console.log(selectArray.length);
for (i=0; i<selectArray.length;i++) {
	console.log(selectArray[i].value);
} // end loop



