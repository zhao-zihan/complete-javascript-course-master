## HOW JAVASCRIPT WORKS BEHIND THE SCENES

### Hoisting 

![image-20220826112907758](notes.images/image-20220826112907758.png)

- function expressions and arrows with let / const will not be hoisted and fall into TDZ
- function expressions and arrows with var will show 'is not a function' because var will be undefined



### this	keyword

![image-20220826113052426](notes.images/image-20220826113052426.png)

![image-20220826113216755](notes.images/image-20220826113216755.png)

- window object doesn't have a property called firstName thus will show undefined

![image-20220826113708462](notes.images/image-20220826113708462.png)

- as long as it is a regular function call, then the this keyword would just be undefined no matter where the function call is located
- to fix this, simply rewrite the function using arrow functions, in that way the function will borrow this keyword from its parent scope 



### Copying objects

#### Object.assign

![image-20220826115600663](notes.images/image-20220826115600663.png)

- cannot copy objects within objects



#### deep clone

```javascript
// deep clone
function deepClone(obj) = {
	const result = {};
	for (const key in obj) {
		if (typeof object[key] === 'object') {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
	}
	return result;
}
```



## 09.DATA STRUCTURES, MODERN OPERATORS AND STRINGS

### Destructoring arrays, spread & rest

- you can assign whatever name you want when destructuring arrays
- you should quote the exact same property name when destructuring objects

![image-20220826221326161](notes.images/image-20220826221326161.png)



### && and ||

#### || 

- returns the first truthy value or the last value if no truthy presented 

![image-20220826223231157](notes.images/image-20220826223231157.png)

 

#### && 

- returns the first falsy  value or the last value if no falsy value presented 

![image-20220826223700866](notes.images/image-20220826223700866.png)

 

#### nullish coalscing operator

![image-20220826223912601](notes.images/image-20220826223912601.png) 

 

#### || && nullish assignment operator

![image-20220826224335972](notes.images/image-20220826224335972.png)



### for of loop

- use .entries() to get the index in a for of loop 

![image-20220826233421272](notes.images/image-20220826233421272.png)



### Set

- CRUD
- convert array to set and vice versa

![image-20220827002338831](notes.images/image-20220827002338831.png)



### Map

- CRUD
- chaining set

![image-20220827003051348](notes.images/image-20220827003051348.png)

![image-20220827003627538](notes.images/image-20220827003627538.png)

![image-20220827003653614](notes.images/image-20220827003653614.png)



![image-20220827004126648](notes.images/image-20220827004126648.png)



## 10.FUNCTIONS

### Default parameters 

![image-20220828021322443](notes.images/image-20220828021322443.png)



### Callback functions

- functions that accept other functions as parameters

![image-20220828031954983](notes.images/image-20220828031954983.png)



- functions that return functions 

![image-20220828032534701](notes.images/image-20220828032534701.png)



### the call & apply methods

- .call(this, parameter1, parameter2....)
- .apply(this, [paramter1, parameter2])

![image-20220828041146628](notes.images/image-20220828041146628.png)

 ![image-20220828041348621](notes.images/image-20220828041348621.png)

 ![image-20220828041419791](notes.images/image-20220828041419791.png)

 

- .bind(this)

![image-20220828041856026](notes.images/image-20220828041856026.png)

 

- With event listeners, remember always set this keyword with bind method, otherwise the this keyword will point to the element in the DOM(button )

![image-20220828042300825](notes.images/image-20220828042300825.png)



- partial application, we can create a more specific function based on a more general function using bind method or we can simply create the function with nested function returning
- addTax() - general ; addVAT() - specific tax with 0.23 as rate 

![image-20220828042556969](notes.images/image-20220828042556969.png)



### Immediately Invoked Function Expressions (outdated)

- Use () to surround the function with another pair of () following

![image-20220828060159411](notes.images/image-20220828060159411.png)



### Closure

![image-20220828060835584](notes.images/image-20220828060835584.png)

![image-20220828061155309](notes.images/image-20220828061155309.png)



- Closure wil remember the new environment once being re-assigned

![image-20220828061654209](notes.images/image-20220828061654209.png)



- setTimeout was executed completely independently since its parent function has been executed right away, but setTimeout still remembers all the variables after three seconds
- closure has a higher priority than globle scope, functions will always look for variables in the closures first 

![image-20220828062111558](notes.images/image-20220828062111558.png)



- even though the following function will be immediately executed, the eventListener has successfully attached to the body element, and thanks to closure, the eventListener can still visit header variable in its parent scope thus turning the header to blue. 

![image-20220828062615572](notes.images/image-20220828062615572.png)



## 11.ARRAYS

- array.slice() doesn't mutate the orginal array 
- [...arr] the spread operator also creates a shallow copy of the original array 
- array.splice() will alter the original array
- array.reverse() will alter the original array 
- array.concat(arr2) doesn't mutate the orginal array
- array.at(index) is a ES2022 new feature that accepts negative values and is compatible with method chaining

![image-20220829013622272](notes.images/image-20220829013622272.png)

![image-20220828070412003](notes.images/image-20220828070412003.png)



### forEach

- array.forEach(element, index, array) the order of inputs matter
- break & continue keywords doesn't work for forEach

![image-20220828071000855](notes.images/image-20220828071000855.png)



- map.forEach(value, key, map)
- set.forEach(value, key, map) for set the value and the key will be the same, you can use an underscore '_' to indicate a throwaway variable

![image-20220828071942825](notes.images/image-20220828071942825.png)

 

### map / filter / reduce

![image-20220829014513115](notes.images/image-20220829014513115.png)



### map

![image-20220829014324187](notes.images/image-20220829014324187.png)



### find 

- filter returns an array, find returns the first element that meets the condition

![image-20220831104029524](notes.images/image-20220831104029524.png)



### includes / some / every 

![image-20220901090814758](notes.images/image-20220901090814758.png)



### flat / flatMap

![image-20220901091238978](notes.images/image-20220901091238978.png)



### sorting 

![image-20220901091806347](notes.images/image-20220901091806347.png)



### create arrays

![image-20220901093026037](notes.images/image-20220901093026037.png) 

![image-20220901093502503](notes.images/image-20220901093502503.png)



### summary

![image-20220901093838301](notes.images/image-20220901093838301.png)



### practice

![image-20220901095123237](notes.images/image-20220901095123237.png)

 

## 12.NUMBERS / DATES/ TIMERS

### converting / checking numbers 

![image-20220901112238333](notes.images/image-20220901112238333.png)



### Math / rounding

![image-20220901112816560](notes.images/image-20220901112816560.png)



### BigInt

![image-20220901114413027](notes.images/image-20220901114413027.png)

 

### Dates

![image-20220901115103981](notes.images/image-20220901115103981.png)

 

### Timer / setTimeout / setInterval

![image-20220902062202343](notes.images/image-20220902062202343.png)



## 13.DOM

### selecting / creating / deleting elements

- .getElementsByTagName & .getElementsByClassName both return an automatically updated HTML collection

![image-20220902070548638](notes.images/image-20220902070548638.png)



- prepend - insert element as the first child of the selected element
- append - insert element as the last child of the slected element
- remove - parentElement.removeChild - these two are the same, remove is a more recent feature

![image-20220902074653346](notes.images/image-20220902074653346.png)



### styles / attributes / classes

- use getAttribute to get non-standard attributes aka customed attributes
- getAttribute - gets you the relative path, dot notation gets you the absolute path

![image-20220902075948645](notes.images/image-20220902075948645.png)



- don't use .className to modify class names, it only allows one existing class name and will override all other names.

![image-20220902080155236](notes.images/image-20220902080155236.png)



### smooth scrolling

![image-20220902082107307](notes.images/image-20220902082107307.png)



### types of event handlers

- addEventListener is the preferred way because:
  - it allows us to add multiple events to one element
  - it allows us to remove events
- on(mouseenter) this syntax is depercated
- defining in HTML is also depercated

![image-20220902082738078](notes.images/image-20220902082738078.png)

![image-20220902083002861](notes.images/image-20220902083002861.png)



### bubbling / capturing

- capturing phase - when an eventListener is created, it will be firstly created at the root element, it then travels to the target element one by one
- target phase - the phase that the eventListener actually reaches the target element
- bubbling phase - the eventListener will then travels back to the root element
- eventListeners only traverse between direct parent elements rather than sibling elements
- not all events have these phases

![image-20220902083623781](notes.images/image-20220902083623781.png)



### event delegation

- the idea is we only add one event listener to the parent element when there are way too many child elements that trigger the event
- pay attention, we are not add events to the element but event listeners. the event will bubble up to the parent elemnt from the child element, and the event listener will catch it
- by doing this, we can same a lot of memory, improve performace, and make our event listeners more dynamic since we might add new child elements



### DOM traversing

- we use methods that retrieve elements more often than the ones that retrieve nodes

![image-20220902114152327](notes.images/image-20220902114152327.png)

![image-20220902114220793](notes.images/image-20220902114220793.png)



### defer / async script loading

![image-20220902155716178](notes.images/image-20220902155716178.png)

 ![image-20220902155928575](notes.images/image-20220902155928575.png)



## 14.OOP

![image-20220903043951698](notes.images/image-20220903043951698.png)



![image-20220903044315928](notes.images/image-20220903044315928.png)

![image-20220903044417505](notes.images/image-20220903044417505.png)

![image-20220903044612078](notes.images/image-20220903044612078.png)

![image-20220903044659369](notes.images/image-20220903044659369.png)



### prototypes

![image-20220903044959498](notes.images/image-20220903044959498.png)

![image-20220903045132017](notes.images/image-20220903045132017.png)

![image-20220903051028374](notes.images/image-20220903051028374.png)

![image-20220903051314341](notes.images/image-20220903051314341.png)



### creating classes

- function constructors - outdated

![image-20220903053151379](notes.images/image-20220903053151379.png)



- ES6 classes

![image-20220903052934357](notes.images/image-20220903052934357.png)

- first class citizen means that classes can be passed in as parameters and can be returned

![image-20220903053233435](notes.images/image-20220903053233435.png)

  

### getter / setter

- objects

![image-20220903054813895](notes.images/image-20220903054813895.png)



- classes 
- there be a conflict if we want to set the same property name with setters, add an underscore in front to prevent this conflict
- but doing this will create a new property which override the previous property 

![image-20220903055207401](notes.images/image-20220903055207401.png)



![image-20220903055907525](notes.images/image-20220903055907525.png)



### Inheritance

- constructor functions
- need to manually set constructor

![image-20220903063746869](notes.images/image-20220903063746869.png)![image-20220903063910835](notes.images/image-20220903063910835.png)



- ES6 classes
- extends / super keywords

![image-20220903070049907](notes.images/image-20220903070049907.png)



- create prototype chain using Object.create 

![image-20220903070250049](notes.images/image-20220903070250049.png)

![image-20220903070500115](notes.images/image-20220903070500115.png)

 

### encapsulation

![image-20220903071042210](notes.images/image-20220903071042210.png)

 

- fields ending with ;
- fields are created on  the instance instead of in the prototype
- use # for private field 

![image-20220903071807095](notes.images/image-20220903071807095.png)

![image-20220903072112637](notes.images/image-20220903072112637.png)

 

### chaining methods

- return this in each method so we get access to the current object

![image-20220903072334223](notes.images/image-20220903072334223.png)

![image-20220903072428937](notes.images/image-20220903072428937.png)

 

### summary

![image-20220903072942889](notes.images/image-20220903072942889.png)

 

16.ASYNCHRONOUS

![image-20220905170812857](notes.images/image-20220905170812857.png)

 

- synchronous > micro-task queue > callbacks

![image-20220905201549167](notes.images/image-20220905201549167.png)

![image-20220905201809248](notes.images/image-20220905201809248.png)





![image-20220907151227206](notes.images/image-20220907151227206.png)

 

### parallel promises

- Promise.all() combinator
- if one promise rejects, the whole promise rejects as well 

![image-20220907152248882](notes.images/image-20220907152248882.png)

 



- Promise.race()
- only gets the first one who wins the race no matter the promise rejects or fullfills
- we can use this characteristic to create a timeout function which prevents users wait too long for loading the page

![image-20220907152616599](notes.images/image-20220907152616599.png) ![image-20220907152818879](notes.images/image-20220907152818879.png)



- Promise.allSettled()
- return all values even if there will be rejected ones

![image-20220907153145620](notes.images/image-20220907153145620.png)



-  Promise.any()
- return the first fullfilled value

![image-20220907153303214](notes.images/image-20220907153303214.png)



17.MODERN JS MODEL TOOLING

### modules

![image-20220907154721108](notes.images/image-20220907154721108.png)

![image-20220907154855681](notes.images/image-20220907154855681.png)



- all modules are run in strict mode by default
- all import statements are hoisted



### top-level await

- we can use top level await in modules
- it will return the actual data instead of the promise 

![image-20220907162024399](notes.images/image-20220907162024399.png)



### command line

- ls - show all files
- cd - go to the selected directory
- cd .. - go up
- cd ../.. go up twice
- clear / cmd + k - clear output
- mkdir - make new folder
- touch - make new files
- touch file1 file2 file3 - create multiple files
- rm - delete files
- mv fileName location - move file to the assigned location
- rmdir - delete empty folders
- rm -R - delete recursively all files in a folder(included)