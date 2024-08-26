//change the HTML content via Javascript
//// Inner html content
//By Id:
document.getElementById('by_id').innerHTML = 'Hello JavaScript, change HTML content by Id_name'

// By Class:
// document.getElementsByClassName('by_class').innerHTML = 'hello'  // not working


////change css style;
// By Id
document.getElementById('by_id').style.color = "red"
document.getElementById('by_id').style.fontSize = "35px"
// By Body Tag
document.body.style.backgroundColor = 'lightgrey'  // body tag bg color
// document.h1.style.backgroundColor = 'red'  // these kinds not work

// By tag name
document.getElementsByTagName('div')[0].style.backgroundColor = 'grey'
document.getElementsByTagName('div')[1].style.backgroundColor = 'yellow'
document.getElementsByTagName('h1')[0].style.backgroundColor = 'red'