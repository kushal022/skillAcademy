// ● What is DOM ?
// ● DOM Properties.
// ● DOM Methods.
// ● Event Listeners.

// Topics in Detail:
console.log('-------------------------- DOM -----------------------------------------')
//---------------Document Object Method ( DOM ):
// ● The document object represents the whole html document.
// ● When an html document is loaded in the browser, it becomes a document object.
// ● <html> is the root element that represents the html document. It has properties and methods.
// ● By the help of document object, we can add dynamic content to our web page.
// ● The HTML DOM is a standard object model and programming interface for HTML.
//-- It defines:
//      ● The HTML elements as objects.( all html elements access as an object)
//      ● The properties of all HTML elements.
//      ● The methods to access all HTML elements
//      ● The events for all HTML elements



console.log('-------------------------- Properties of DOM -----------------------------------------')
//------- Properties of Document object:
// 1. element.innerHTML = new html content
//  Change the inner HTML of an element. (let content = element.innerHTML;)
document.getElementById('inner').innerHTML = '<b>This is "innerHTML" property</b>'
// 2. element.attribute = new value
//  Change the attribute value of an HTMLelement.(var attrs = paragraph.attributes;)

// 3. element.style.property = new style
//   Change the style of an HTML element.(document.body.style.background = "red";)

console.log('-------------------------- Methods of DOM -----------------------------------------')
//------------DOM Methods:
//1. write(“string”) :-- Write the given string on the document. EX: document.write("Hello World!");
document.write("This is document.write('string')")
//2. getElementById() :-- Returns the element having the given ID value. EX: const element = document.getElementById("intro");
//3. getElementsByName() :-- Returns (NodeList []) all the elements having the given 'name'(its an attribute) value. EX: const x = document.getElementsByName("main");
let element = document.getElementsByName('t1');
console.log(element)
//          /*
//          NodeList(3) [div#inner, div#first, div#second]
//          0:div#inner
//          1:div#first
//          2:div#second
//          length:3
//          [[Prototype]]:NodeList
//          */
//          

//4. getElementsByTagName() :-- Returns all the elements having the given tag name. EX: const element = document.getElementsByTagName("p");
let ele3 = document.getElementsByTagName('div')
console.log(ele3)
//          HTMLCollection(6) [div#inner.c1, div#first.c1, div#second, div.c1, div.c1, div.c1, inner: div#inner.c1, t1: div#inner.c1, first: div#first.c1, second: div#second]
//          0:div#inner.c1
//          1:div#first.c1
//          2:div#second
//          3:div.c1
//          4:div.c1
//          5: div.c1
//          first: div#first.c1
//          inner: div#inner.c1
//          second: div#second
//          t1: div#inner.c1
//          length : 6
//          [[Prototype]]: HTMLCollection


//5. getElementsByClassName() :-- Returns all (HTMLCollection []) the elements having the given class name. EX: const x = document.getElementsByClassName("intro");
let ele2 = document.getElementsByClassName('c1')
console.log(ele2)
//          /*
//          HTMLCollection(5) [div#inner.c1, div#first.c1, div.c1, div.c1, div.c1, inner: div#inner.c1, t1: div#inner.c1, first: div#first.c1]
//          0:div#inner.c1
//          1:div#first.c1
//          2:div.c1
//          3:div.c1
//          4:div.c1
//          first:div#first.c1
//          inner:div#inner.c1
//          t1:div#inner.c1
//          length:5
//          [[Prototype]]:HTMLCollection
//          */
//6. querrySelectorAll() :-- Returns all the elements that matches the specified CSS selector(id/class/element/name/type/value of attribute) EX: const x = document.querySelectorAll("p.intro");
//6.1 querrySelector() 
let ele4 = document.querySelector('div.c1'); // return first element of that class
console.log(ele4)
//           <div class="c1" id="inner" name="t1"><b>This is "innerHTML" property</b></div>
let ele5 = document.querySelectorAll('div.c1'); // return all element node list of that class, id, name, tagName
console.log(ele5)

//          NodeList(5) [div#inner.c1, div#first.c1, div.c1, div.c1, div.c1]
//          0:div#inner.c1
//          1:div#first.c1
//          2:div.c1
//          3:div.c1
//          4:div.c1
//          length:5
//          [[Prototype]]:NodeList

console.log('-------------------------- Event Listeners -----------------------------------------')
//----------------- Event Listeners:
// ● The addEventListener() :-- method is used to attach an event handler to a particular element.
// ● It does not override the existing event handlers. Events are said to be an essential part of JavaScript.
// ● The addEventListener() method is an inbuilt function of JavaScript.
// ● We can add multiple event handlers to a particular element without overwriting the existing event handlers.
// ● Syntax:-- element.addEventListener(event, function, useCapture);
// ● The parameters event and function are widely used. The third parameter is optional to define.
//      ○ event:-- It is a required parameter. It can be defined as a string that specifies the event's name.
//      ○ function:-- It is also a required parameter. It is a JavaScript function which is invoked on the event.
//      ○ useCapture:-- It is an optional parameter. It is a Boolean type value that specifies
//        whether the event is executed in the bubbling or capturing phase.
//        Its possible values are true and false.
