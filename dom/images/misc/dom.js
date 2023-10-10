/* eslint-disable */
const domTreeBtn = document.getElementById('dom-tree');
const domApiBtn = document.getElementById('dom-api');
const domNodesBtn = document.getElementById('dom-nodes');
const getSingleElemBtn = document.getElementById('sel-single-dom-elem');
const getMultipleElemsBtn = document.getElementById('sel-multiple-dom-elems');
const elemContentBtn = document.getElementById('elem-content');
const elemPropertiesBtn = document.getElementById('elem-properties');
const elemAttributesBtn = document.getElementById('elem-attributes');
const elemClassesBtn = document.getElementById('elem-classes');
const elemStyleBtn = document.getElementById('elem-style');
const tagNodeNameBtn = document.getElementById('tag-node-name');
const traverseDomBtn = document.getElementById('traverse-dom');
const traverseDomNodesBtn = document.getElementById('traverse-dom-nodes');
const createElemBtn = document.getElementById('create-elem');
const insertElemBtn = document.getElementById('insert-elem');
const formsBtn = document.getElementById('forms');

console.log(3, 'This script logged from the dom.js JavaScript file.');

// TOPICS:
// 1. DOM Overview
domTreeBtn.addEventListener('click', () => {
  console.clear();
  alert('See dom-tree-example.html');
});

domApiBtn.addEventListener('click', () => {
  alert('See dom-api-example.html');
});

domNodesBtn.addEventListener('click', () => {
  alert('See dom-nodes-example.html');
});


// 2. Document Interface: Get Elements using selectors
getSingleElemBtn.addEventListener('click', () => {
  const _topic = '2a. Select DOM Elements: Single element selectors.';

  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_2-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'H1 Heading Element Example';
    const exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = document.getElementById('heading').outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();

  const $1 = document;
  const $1a = document.getElementById('heading');
  const $1b = document.querySelector('#heading');
  const $1c = document.querySelector('h1');
  const $1d = document.querySelector('.text-center');
  const $1e = document.querySelector('[data-subject="dom"]');
  debugger;

  showExHtmlElem.style.display = 'none';
});

getMultipleElemsBtn.addEventListener('click', () => {
  const _topic = '2b. Select DOM Elements: Multiple element selectors.';

  const linkExamples = document.getElementById('link-examples');
  linkExamples.style.display = 'block';
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_2-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example HTML';
    exHtmlCode = exHTML.lastElementChild;
    if (linkExamples.firstChild.nodeName === '#text') {
      // For nicer display, remove the first node which is just a new line
      linkExamples.firstChild.remove();
    }    
    exHtmlCode.textContent = linkExamples.innerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();
  const updateHTML = () => exHtmlCode.textContent = linkExamples.innerHTML;
  debugger;

  // Get elements by tag name - 'a'
  const $1_linkTags = document.getElementsByTagName('a');
  Array.from($1_linkTags).forEach((link) => link.classList.add('text-decoration-none'));
  updateHTML();
  debugger;

  // Get elements by class name - .link-dark
  const $2_linkClasses = document.getElementsByClassName('link-dark');
  Array.from($2_linkClasses).forEach((link) => link.classList.remove('text-decoration-none'));
  updateHTML();
  debugger;

  // Get elements by tag name - 'a'
  const $3_linkTags = document.querySelectorAll('a');
  $3_linkTags.forEach((link) => link.classList.toggle('text-decoration-none'));
  updateHTML();
  debugger;

  // Get elements by class name - .link-dark
  const $4_linkClasses = document.querySelectorAll('.link-dark');
  $4_linkClasses.forEach((link) => link.classList.toggle('text-decoration-none'));
  updateHTML();
  debugger;

  // Get elements by attribute name - [href]
  const $5_linkHrefAttr = document.querySelectorAll('[href]');
  $5_linkHrefAttr.forEach((link) => link.classList.add('text-decoration-none'));
  updateHTML();
  debugger;

  // Get elements by data attribute name - [data-ex="links"]
  const $6_linkDataAttr = document.querySelectorAll('[data-ex="links"]');
  $6_linkDataAttr.forEach((link) => link.classList.remove('text-decoration-none'));
  updateHTML();
  debugger;

  linkExamples.style.display = 'none';
  showExHtmlElem.style.display = 'none';
});


// 3. Element Interface: Get/Set Values
elemContentBtn.addEventListener('click', () => {
  const _topic = '3a. Element Interface: get/set element content.';

  const heading = document.getElementById('elem-interface-heading');
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_3-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example Element content';
    exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = heading.outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();
  const updateHTML = () => {
    exHtmlCode.textContent = document.getElementById('elem-interface-heading').outerHTML;
  }

  const $1_textContent = heading.textContent;
  const $2_innerHTML = heading.innerHTML;
  const $3_outerHTML = heading.outerHTML;
  debugger;

  heading.textContent = '3) Text content modified';
  updateHTML();
  debugger;

  heading.innerHTML = '3) InnerHTML modified <i>with child element</i>';
  updateHTML();
  debugger;

  heading.outerHTML = '<h6 id="elem-interface-heading" class="bg-success">3) OuterHTML text and element attributes modified</h6>';
  updateHTML();
  debugger;

  const heading2 = document.getElementById('elem-interface-heading');
  heading2.outerHTML = '<h3 id="elem-interface-heading" class="h3">3) Element Interface: <small>Get/Set Values</small></h3>';
  showExHtmlElem.style.display = 'none';
});

elemPropertiesBtn.addEventListener('click', () => {
  const _topic = '3b. Element Interface: get/set properties.';
  const elem = document.getElementById('html-elem-img');
  elem.style.display = 'block'; 
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_3-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example Element content';
    exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = elem.outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();

  const $1_tagName = elem.tagName; // 'IMG'
  const $2a_id = elem.id; // 'html-elem-img'
  const $2b_className = elem.className; // 'img-thumbnail'
  const $2c_style = elem.style;
  const $3a_src = elem.src;
  const $3b_alt = elem.alt; // 'HTML element diagram'
  const $3c_width = elem.width; // 300
  debugger;

  elem.width = '450';
  elem.alt = 'HTML Element Structure';
  exHtmlCode.textContent = elem.outerHTML;
  debugger;

  elem.width = '300';
  elem.style.display = 'none';
  showExHtmlElem.style.display = 'none';
});

elemAttributesBtn.addEventListener('click', () => {
  const _topic = '3c. Element Interface: get/set attributes';
  const elem = document.getElementById('html-elem-img');
  elem.style.display = 'block'; 
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_3-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example Element content';
    exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = elem.outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();
  const updateHTML = () => exHtmlCode.textContent = elem.outerHTML;

  const $1_hasAttributes = elem.hasAttributes(); // true
  const $2_hasAttribute = elem.hasAttribute('alt'); // true
  const $3_getAttribute = elem.getAttribute('width'); // '300'
  debugger;
  
  elem.setAttribute('width', '450');
  elem.setAttribute('data-topic', 'dom');
  updateHTML();
  debugger;

  elem.removeAttribute('data-topic');
  updateHTML();
  debugger;

  document.querySelectorAll('img').forEach((elem) => {
    elem.setAttribute('width', '300');
  });
  updateHTML();
  debugger;

  elem.style.display = 'none'; 
  showExHtmlElem.style.display = 'none';
});

elemClassesBtn.addEventListener('click', () => {
  const _topic = '3d. Element Interface: get/set classes';
  const elem = document.getElementById('html-elem-img');
  elem.style.display = 'block'; 
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_3-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example Element content';
    exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = elem.outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();
  const updateHTML = () => exHtmlCode.textContent = elem.outerHTML;

  const $1_className = elem.className; // 'img-thumbnail'
  const $2_classList = elem.classList; 
  const $3_classListContains = elem.classList.contains('img-thumbnail');//true
  debugger;

  elem.classList.toggle('img-thumbnail');
  updateHTML();
  debugger;

  elem.classList.toggle('img-thumbnail');  
  updateHTML();
  debugger;

  elem.classList.remove('img-thumbnail');
  updateHTML();
  debugger;

  elem.classList.add('rounded');
  updateHTML();
  debugger;

  document.querySelectorAll('img').forEach((elem) => {
    elem.className = 'img-thumbnail';
  });
  updateHTML();
  debugger;

  elem.style.display = 'none'; 
  showExHtmlElem.style.display = 'none';
});

elemStyleBtn.addEventListener('click', () => {
  const _topic = '3d. Element Interface: get/set style properties';
  const elem = document.getElementById('html-elem-img');
  elem.style.display = 'block';
  let exHtmlCode;
  function showExHTML() {
    // Show Example Code:
    const exHTML = document.getElementById('_3-ex-html');
    exHTML.style.display = 'block';
    const exTitle = exHTML.firstElementChild;
    exTitle.textContent = 'Example Element content';
    exHtmlCode = exHTML.lastElementChild;
    exHtmlCode.textContent = elem.outerHTML;
    return exHTML;
  }
  const showExHtmlElem = showExHTML();
  const updateHTML = () => exHtmlCode.textContent = elem.outerHTML;

  const $1_ = elem.getAttribute('style'); 
  const $2_ = elem.style;
  const $2a_ = elem.style.cssText;
  const $2b_ = elem.style.margin;
  const $2c_ = elem.style.display;
  const $3a_ = getComputedStyle(elem).margin;
  const $3b_ = getComputedStyle(elem).height;
  debugger;

  elem.style.margin = '30px 10px';
  updateHTML();
  debugger;

  document.querySelectorAll('img').forEach((elem) => {
    elem.style.margin = '10px auto';
  });
  updateHTML();
  debugger;

  elem.style.display = 'none'; 
  showExHtmlElem.style.display = 'none'; 
});


// 4. Traverse the DOM
traverseDomBtn.addEventListener('click', () => {
  const _topic = '4a. Traverse the DOM';

  // Show example table
  const exampleTable = document.getElementById('4a-example');  
  const showExampleTable = () => exampleTable.removeAttribute('style');
  showExampleTable();

  // Show example table's HTML code:
  const hiddenExampleHTML = document.getElementById('_4-ex-html');  // Get the hidden div
  let exampleTableHTML;
  function showExampleTableHTML() {
    // Display div by removing style attribute of style="display: none"
    hiddenExampleHTML.removeAttribute('style');
    // Get the example title element. It is the first child under exHTML.
    const exTitle = hiddenExampleHTML.firstElementChild;
    // Set the example title text content.
    exTitle.textContent = 'Show HTML - Table Element';
    // Get the "pre" element to display the example HTML code. 
    exampleTableHTML = hiddenExampleHTML.lastElementChild;
    // Set the example HTML code' text content to the example table's HTML.
    exampleTableHTML.textContent = exampleTable.outerHTML;
    // Scroll the page to make sure the full table example is on the screen.
    exampleTable.parentElement.scrollIntoView();
  }
  showExampleTableHTML();
  debugger;

  // Get the "elem" element from the table, then add the bg-dark class to it.
  const elem = document.getElementById('elem');
  elem.classList.add('bg-dark');

  const updateHTML = () => exampleTableHTML.textContent = exampleTable.outerHTML;
  updateHTML();
  debugger;

  // $1 Ancestor elements 
  const $1a_ = elem.closest('table');
  $1a_.classList.add('border', 'border-dark', 'border-5');
  const $1b_ = elem.parentElement;
  $1b_.classList.add('text-info');
  updateHTML();
  debugger;

  // $2 Descendent elements
  // Return the number of child elements. Returns null if none.
  const $2a_ = elem.childElementCount;
  // Return an array-like object of the element's child elements.
  const $2b_ = elem.children;
  const $2c_ = elem.firstElementChild;
  $2c_.textContent = 'First Child';
  // Return the child element at index 1 (i.e., the second child).
  const $2d_ = elem.children[1];
  $2d_.textContent = 'Second Child';
  const $2e_ = elem.lastElementChild;
  $2e_.textContent = 'Last Child';
  updateHTML();
  debugger;

  // $3 Sibling elements
  const newBase = elem.nextElementSibling.children[1];
  newBase.textContent = 'New Base Elem';
  // Return prev then next elem at the same tree level. Returns null if none.
  const $3a_ = newBase.previousElementSibling;
  $3a_.textContent = 'Previous Sibling';
  const $3b_ = newBase.nextElementSibling;
  $3b_.textContent = 'Next Sibling';
  updateHTML();
  debugger;

  // $4 Chaining multiple adjacent elements
  const $4_ = elem.parentElement.previousElementSibling.firstElementChild.firstElementChild;
  $4_.textContent = 'Traverse DOM Elements - Table Example';
  updateHTML();
  debugger;

  exampleTable.style.display = 'none'; 
  hiddenExampleHTML.style.display = 'none'; 
});

traverseDomNodesBtn.addEventListener('click', () => {
  const _topic = '4b. Traverse DOM nodes';
  // Show example
  const example = document.getElementById('4b-example'); 
  const showExample = () => example.removeAttribute('style');
  showExample();
  // Show example's HTML code:
  const hiddenExampleHTML = document.getElementById('_4-ex-html');//hidden div
  let exampleHTML;
  function showExampleHTML() {
    // Display div by removing style attribute of style="display: none"
    hiddenExampleHTML.removeAttribute('style');
    // Get the example title element. It is the first child under exHTML.
    const exTitle = hiddenExampleHTML.firstElementChild;
    // Set the example title text content.
    exTitle.textContent = 'Show HTML - Traverse Nodes';
    // Get the "pre" element to display the example HTML code. 
    exampleHTML = hiddenExampleHTML.lastElementChild;
    // Set the example HTML code' text content to the example table's HTML.
    exampleHTML.textContent = example.firstElementChild.outerHTML;
    // Scroll the page to make sure the full table example is on the screen.
    example.parentElement.scrollIntoView();
  }
  showExampleHTML();
  const updateHTML = () => { 
    exampleHTML.textContent = example.firstElementChild.outerHTML;
  }

  const elem = document.getElementById('_4b-base-node');
  const $1a_ = elem.hasChildNodes();   // true
  const $1b_ = elem.childNodes.length; // 5
  const $1c_ = elem.childNodes;        // NodeList object

  const $2child_0 = elem.firstChild;    // #text
  const $2child_1 = elem.childNodes[1]; // #comment
  const $2child_2 = elem.childNodes[2]; // #text
  const $2child_3 = elem.childNodes[3]; // b#new-base-node
  const $2child_4 = elem.lastChild;     // #text

  const $3a_ = elem.firstChild.nodeName;  // #text
  const $3b_ = elem.firstChild.nodeType;  // 3
  const $3c_ = elem.firstChild.nodeValue; // '\n '
  const $3d_equal_ = elem.firstChild.isEqualNode(elem.childNodes[2]); // true

  const newBase = elem.childNodes[3];
  const $4same_ = elem.firstElementChild.isSameNode(newBase); // true
  const $4parent_ = newBase.parentNode; // div#_4b-base-node

  const $5sib_0 = newBase.previousSibling.previousSibling.previousSibling;
  const $5sib_1 = newBase.previousSibling.previousSibling; // #comment
  const $5sib_2 = newBase.previousSibling; // #text
  const $5sib_4 = newBase.nextSibling;     // #text
  debugger;
  
  let newTextNode = document.createTextNode('This is a text node without white space.');
  elem.replaceChild(newTextNode, elem.lastChild);
  elem.removeChild(elem.childNodes[2]);  
  elem.removeChild(elem.firstChild);
  updateHTML();
  debugger;

  let newlineTextNode = document.createTextNode('\n  ');
  elem.insertBefore(newlineTextNode, elem.firstChild);
  newlineTextNode = document.createTextNode('\n  ');
  elem.insertBefore(newlineTextNode, elem.childNodes[2]);
  elem.lastChild.textContent = '\n  Text node again.\n';
  updateHTML();
  debugger;

  example.style.display = 'none'; 
  hiddenExampleHTML.style.display = 'none'; 
});


// 5. Elements: Create/Insert/Replace/Remove
createElemBtn.addEventListener('click', () => {
  const _topic = '5. Create, insert, update, remove elements';
  // Get the empty example list element
  const list = document.getElementById('list'); 

  // Show example list's HTML code:
  const hiddenExampleHTML = document.getElementById('_5-ex-html');
  let exampleListHTML;
  function showExampleListHTML() {
    hiddenExampleHTML.removeAttribute('style');
    const exampleTitle = hiddenExampleHTML.firstElementChild;
    exampleTitle.textContent = "Example List Element's HTML Markup";
    exampleListHTML = hiddenExampleHTML.lastElementChild;
    exampleListHTML.textContent = list.outerHTML;
  }
  showExampleListHTML();

  const updateHTML = () => { 
    exampleListHTML.textContent = list.parentElement.innerHTML;
    list.scrollIntoView();
  }
  debugger;

  // Create and insert articles list HTML string.
  const articleTitles = ['Learn JavaScript', 'Learn HTML', 'Learn Node.js'];
  let listStr = '';
  articleTitles.forEach((title) => {
    listStr += `\n  <li class="list-group-item">${title}</li>`;
  });
  list.innerHTML = listStr + '\n';
  updateHTML();
  debugger;

  // Clear list
  list.innerHTML = '';
  // Array of article objects
  const articles = [
    { id: 1, title: 'Learn JavaScript' }, 
    { id: 2, title: 'Learn HTML' }, 
    { id: 3, title: 'Learn Node.js' },
  ];
  // Create and append article elements.
  articles.forEach((article) => {
    // Create a new list item element.
    const li = document.createElement('li');
    // Add one or more classes.
    li.className = 'list-group-item';
    // Add the id attribute.
    li.id = `art-${ article.id }`; 
    li.textContent = article.title;
    list.append('\n  ');
    list.append(li);
  });
  list.append('\n');
  updateHTML();
  debugger;

  // Create and prepend article element.
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = 'art-0';
  li.textContent = 'Learn Unix';
  list.prepend(li);
  list.prepend('\n  ');
  updateHTML();
  debugger;

  // Create and replace article element
  const liReplacement = document.createElement('li');
  liReplacement.id = 'art-3';  
  liReplacement.classList.add('list-group-item');
  liReplacement.textContent = 'Learn CSS';
  list.replaceChild(liReplacement, list.children[3]);
  updateHTML();
  debugger;

  // Create and insert elements.
  const h3Elem = document.createElement('h3');
  h3Elem.className = 'h3 ms-3';
  h3Elem.textContent = 'Article List';
  list.insertAdjacentElement('beforebegin', h3Elem);
  updateHTML();
  debugger;

  list.insertAdjacentText('beforebegin', '\n');
  updateHTML();
  debugger;

  list.insertAdjacentHTML('afterend', '\n<hr>');
  updateHTML();
  debugger;

  list.firstElementChild.remove(); 
  list.firstChild.remove();  
  list.nextElementSibling.remove();
  updateHTML();
  debugger;

  // Hide example HTML div and reset the list to an empty element.  
  hiddenExampleHTML.style.display = 'none'; 
  list.parentElement.innerHTML = '<ul id="list" class="list-group"></ul>'; 
});


// 6. Events 
  // 6a. DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', () => {
    // debugger; console.clear();
    document.getElementById('events-heading').classList.add('text-decoration-underline');
  });

  const showButtonsHTML = document.getElementById('_6-ex-html');
  const updateHTML = () => {
    let eventButtons = document.getElementById('event-buttons');
    eventButtons = eventButtons.innerHTML;
    eventButtons = eventButtons.replace('\n', '');
    eventButtons = eventButtons.replace(/        /g, ''); 
    showButtonsHTML.textContent = eventButtons;
  }

  // 6b. click event
  // toggle show HTML and event.target
  const showHideBtn = document.getElementById('show-hide');
  showHideBtn.addEventListener('click', (event) => {
    console.clear();
    event.target.className = 'btn btn-secondary btn-sm';
    console.log(event.target === showHideBtn);
    if (showButtonsHTML.style.display === 'none') {
      updateHTML();
      showButtonsHTML.style.display = 'block';
      showButtonsHTML.scrollIntoView();    
    } else {
      showButtonsHTML.style.display = 'none';
    }
  });

  // 6c. dblclick event
  // once option (listener removed after first event)
  const hoverBtn = document.getElementById('dblclick');

  hoverBtn.addEventListener('mouseenter', (event) => {
    console.clear();
    console.log(event);
    console.log('Mouse Enter event.');    
    event.target.className = 'btn btn-secondary btn-sm';
    updateHTML();
  }, { once: true });

  hoverBtn.addEventListener('mouseleave', () => {
    console.log('Mouse Leave event.');
  });

  // 6d. Mouseenter/mouseleave events
  // Event Propagation
  const parent = document.getElementById('prop-parent');
  const child = document.getElementById('prop-child');
  // Bubbling
  parent.addEventListener('click', () => console.log('Parent\n'), { once: true });
  child.addEventListener('click', () => {
    console.clear();
    console.log('Event Bubbling:');
    console.log('Child');
  }, { once: true });
  // Capturing
  parent.addEventListener('dblclick', () => {
    console.log('Event Capturing:');
    console.log('Parent');
  }, { capture: true });
  child.addEventListener('dblclick', () => console.log('Child'));


// 7. Forms
formsBtn.addEventListener('click', () => {
  alert('See form-example.html and form.js');
});





































/* 
Document Object Model:
- The Document Object Model (DOM) is a programming interface for web documents.
- A web page is an HTML Document parsed and displayed by the browser.
- When you enter a URL in a web browser or click on a link your browser sends an HTTP request to the web server. The server responds by sending an HTML document back to the browser. 
- When the browser receives it, it parses it and converts it to an object and stores it in memory.
- The document object is represented as a DOM tree which is like an upside down tree with the HTML document at it's root and branches going down. Each branch ends in a node, and each node contains objects.
- The document is a node, and each branch ends in an element node, a text node, or a comment node.
- JavaScript can be connected to an HTML Document with the script tag.
- The DOM is one of the Web APIs that can be accessed with JavaScript. JS is connected to an HTML document by including a script tag. 
- The DOM API allows you to access the DOM tree and change the document's structure, style or content.
- Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.


The HTML DOM API - Includes a number of interrelated Intefaces:
- Window Interface (All APIs available in the Browser - Core JS, Web APIs)
  - Node Inteface
    - Document Interface (the document object is the root of the document itself.)
    - Element Interface (HTMLElement)
      - Element-specific interfaces (HTMLTableElement, HTMLFormElement, HTMLAnchorElement, etc.)
    (Element inherits from the generic Node interface, and together these two interfaces provide many of the methods and properties you use on individual elements. These elements may also have specific interfaces for dealing with the kind of data those elements hold, as HTMLTableElement Interface for working with table elements.)

https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
*/
/* 
\ Go to the beginning of the project.
right/left arrow Go to next/previous frame in the current clip
Up/down arrow Go to the previous/next clip
Zoom in: Cmd =, Zoom out: Cmd -, Zoom all the way out: Shift Z
/ Play just the item selected.
*/