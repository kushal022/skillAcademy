//-------------- AJAX
// Topics Covered:
// ● AJAX Introduction
// ● XML Http Request
// ● XML Http Response
// ● AJAX Application
// ● fetch()

// Topics in Detail:
console.log('------------------ AJAX Introduction -----------------------')
//-------------- AJAX Introduction
// ● AJAX :---- Asynchronous JavaScript And XML.
// ● It is a combination of XMLHttpRequest, JavaScript and HTML DOM.
// ● The web pages are updated asynchronously by exchanging data with the web server.
//    exchange the data(sending, recieving data) asynchronously(parallally run/does another work, not wait)
// ● Instead of reloading the whole web page, AJAX helps in updating "parts of a web page".

//--------How AJAX works:

//      an event is occured              An HTTP request is             Process the HTTP request
//      on a web page                    send to server using           and creates a reaponse
//      e.g. button is clicked           XMLHttpRequest object
//                         ---------------------->------------------------->>
//          [ Browser ]                                                     [ Server ]
//                         <<-------------------<---------------------------
//      Process the returned           send response back to 
//      data using JavaScript              the browser
//      and updataes the page
//      content


console.log('------------------ XMLHttp Request----------------------- ')
//----------- XMLHttpRequest
// ● To request data from a server,XMLHttpRequest object is used.
// ● Open() and send() methods of XMLHttpRequest object are used to send a request to the server.

//          Method                          Description
//      open (method, url, async) :    Specifies the type of request
//                                     method - GET or POST
//                                     url - file location
//                                     async - true (asynchronous: not wait) or false(synchronous: wait)
//      send()                    :    Sends request to the server(GET)
//      send (string)             :    Sends request to the server (POST)

// ● url :- A file/script on a server
// ● The file can be of any kind like .txt, .xml or server scripting files like .asp and .php.
//----- Asynchronous - True or False?
// ● Asynchronous parameter of open is set to true.
// ● JavaScript does not wait for server response, instead
//      ○ Start executing other scripts while waiting.
//      ○ After the response is ready, deal with the responses.
// ● The default value of async parameter is true.
// ● async = false is not recommended.

//-----GET or POST
// ● GET is used in most cases, and it is simpler and faster than POST.
// ● POST is more secure and robust than GET.
// ● POST is used in the following situations
//      ○ When sending large amount of data to the server.
//      ○ When a cached file is not an option.
//      ○ When sending user input.

//-----GET Requests:
// ● A simple GET request.
// o  store cache data in brawser 
// ● To avoid getting cached result, add a unique ID to the URL.
// ● To send information with the GET method, add the information to the URL.

//-----POST Requests:
// ● A simple POST request.
// ● The Data-like HTML form are requested by adding an HTTP header with setRequestHeader().
// ● The data want to be sent is specified in the send() method.

//          Method                              Description
//    setRequestHeader(header, value)       Adds HTTP headers to the request
//                                          header: specifies the header name
//                                          value: specifies the header value

//------- Synchronous Request:
// ● Synchronous request is achieved by setting the async parameter to false.
// ● For quick testing, async = false is set.
// ● The onreadystatechange function is not needed as the server waits for server completion.

// function loadXMLDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         let xmlDoc = xhttp.responseXML;
//         console.log(xmlDoc)
//     }
//     // xhttp.open("GET", "./cd_catalog.xml"); // store in chache // status: 304
//     xhttp.open("GET", "./cd_catalog.xml?t=" + Math.random() * 100); // ignor chache // status: 200 // take lot of time.
//     xhttp.send();
// }










console.log('------------------ XMLHttp Response -----------------------')

//-------- XMLHttp Response:
// Server Response Properties
//        Property                               Description
//    responseText                      Get the response data as a string
//    responseXML                       Get the response data as an XML data

//The responseText Property:
// ● The responseText property returns the server response as a JavaScript string.

// The responseXML Property:
// ● An in-builtXML parser is there in the XMLHttpRequest object.
// ● The responseXML property returns the server response as an XML DOM object.

// Server Response Methods:
//            Method                                            Description
//     getResponseHeader()              Returns specific header information from the server resource
//     getAllResponseHeaders()          Returns all the header information from the server resource

// The getAllResponseHeaders() Method:
// All the header information from the server response is returned by the getAllResponseHeaders().

// The getResponseHeader() Method:
// The specific header information from the server response is returned by getResponseHeader() method.


function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        let xmlDoc = xhttp.responseXML; // response in xml
        let xmlDoc1 = xhttp.responseText; // response in text
        console.log(xmlDoc1)
        // get all response header:
        console.log(xhttp.getAllResponseHeaders())
        // get headers date
        console.log(xhttp.getResponseHeader("date"))
        let cds = xmlDoc.getElementsByTagName("CD")
        for (let i = 0; i < cds.length; i++) {
            let cd = cds[i];
            // console.log(cd)
            console.log(cd.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue)
        }
    }
    xhttp.open("GET", "./cd_catalog.xml?t=" + Math.random() * 100);
    xhttp.send();
}
loadXMLDoc()

console.log('------------------ XML Applications  -----------------------')

//------------- XML Applications: when should we use it.
// Display XML data in an HTML Table:
//  ● The values of <ARTIST> and <TITLE> elements are displayed in an HTML table.
// Display the first CD element in an HTML div.
// Navigate between CDs: To navigate between CDs, create next() and previous() functions.

// Show Album information when clicking on a CD: To show album information when clicking on a CD, call displayCD() function on the onclick event.

//-----------fetch() Method
// ● The fetch() method in JavaScript sends request to the server and the fetched information is being loaded in the webpages.
// ● Syntax: fetch( url , options )
// ● url :- url to which the request is to be made.
// ● options :- It is an optional parameter. It is an array of properties.
// ● Returns value:- The return data is of JSON or XML format. It can be a single object or arrayof objects.
// ● fetch() method without options will act as a get request.
// ● fetch() method with options given below will act as a post request.

