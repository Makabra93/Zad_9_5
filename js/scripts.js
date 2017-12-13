var buttons = document.getElementsByClassName('button');
var buttonLength = buttons.length;


for (var i = 0; i < buttonLength; a++) {
    var buttonText = buttons[a].innerText;
    console.log('button ' + a + ' text is ' + buttonText);
}
