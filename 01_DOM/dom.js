// !DOM 
/* 
-Document object models
- Only thru the browser


Frame:
    - Documents: HTML page
        - Is a global variable
    -Object: Elements and comments (nodes)
    - Model: Arrangement

    Basic Structure:
        -HTML
            - Head
                - meta
                - links
                - title
        -Body
            -nav
            -header
            -divs, etc.

!   BOM

          */
function askForStuff()   {
    prompt();
}

//askForStuff();
console.log(document);
console.log(document.URL);
console.log(document.location);
console.log(odocument.title);
document.title = "DOM lesson updated"
/* document refers to anything on the window  ~video 36:00*/
/* diff between DOM and BOM*/

//* Creating elements
let h1 = document.creatElement('h1');
console.log(h1);

/* 
Our variable now has access...
    - innerHTML:can inject a block of HTML
    - InnerText: returns the visible text...
    - textContent

    ! GET IT FROM ERIC'S REPO ~45:00
    rewatch stuffed misse while typing
    
*/
h1.innerText = "eish maalee";
console.log(h1);

/* 
Chain of Events
1 create our element
2 Apply our value
3 place our element
*/

// * Append Child

// console.log(document.body);
document.body.appendChild(h1);
// console.log(document.body.children[2]);
h1.style.color ="blue";


h1.style.color = `blue`;

h1.style.textAlign = `cetner`;
h1.style = `
color: blue;
text-align: center;
text-ShadowRoot; 2px 2px 2px yellow;
`;

h1.className = "hi-class-name"; //JS requires camelcasing as "class" is a keyword w/in JS.
h1.id = 'set-id';
console.log(h1);
/* 
Finding Elements

! HTMLCOLLECTION



*/
// ? 1:25 ish video onward
//? couldn't keep up w/the typing.
//? have to do it all over again
/* */
// ? Interesting ~ 1:34
/* */

