var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('Src');
    if(mySrc === 'images/tron.png') {
        myImage.setAttribute ('src','images/legacy.jpg');
    } else {
        myImage.setAttribute ('src','images/tron.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Coding is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Coding is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}