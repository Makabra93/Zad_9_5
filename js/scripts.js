var buttons = document.getElementsByClassName('button');
var buttonLength = buttons.length;

for (var i = 0; i < buttonLength; i++) {
    var buttonText = buttons[i].innerText;
    console.log('button ' + i + ' text is ' + buttonText);
}
