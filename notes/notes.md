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



## DATA STRUCTURES, MODERN OPERATORS AND STRINGS

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



### Functions

#### Default parameters 

![image-20220828021322443](notes.images/image-20220828021322443.png)



#### Callback functions

- functions that accept other functions as parameters

![image-20220828031954983](notes.images/image-20220828031954983.png)



- functions that return functions 

![image-20220828032534701](notes.images/image-20220828032534701.png)



#### the call & apply methods

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



## ARRAYS

- array.slice() doesn't mutate the orginal array 
- [...arr] the spread operator also creates a shallow copy of the original array 
- array.splice() will alter the original array
- array.reverse() will alter the original array 
- array.concat(arr2) doesn't mutate the orginal array
- array.at(index) is a ES2022 new feature that accepts negative values and is compatible with method chaining

![image-20220829013622272](notes.images/image-20220829013622272.png)

![image-20220828070412003](notes.images/image-20220828070412003.png)



#### forEach

- array.forEach(element, index, array) the order of inputs matter
- break & continue keywords doesn't work for forEach

![image-20220828071000855](notes.images/image-20220828071000855.png)



- map.forEach(value, key, map)
- set.forEach(value, key, map) for set the value and the key will be the same, you can use an underscore '_' to indicate a throwaway variable

![image-20220828071942825](notes.images/image-20220828071942825.png)

 

#### map / filter / reduce

![image-20220829014513115](notes.images/image-20220829014513115.png)



#### map

![image-20220829014324187](notes.images/image-20220829014324187.png)



#### find 

- filter returns an array, find returns the first element that meets the condition

![image-20220831104029524](notes.images/image-20220831104029524.png)



#### includes / some / every 

![image-20220901090814758](notes.images/image-20220901090814758.png)



#### flat / flatMap

![image-20220901091238978](notes.images/image-20220901091238978.png)



#### sorting 

![image-20220901091806347](notes.images/image-20220901091806347.png)



#### create arrays

![image-20220901093026037](notes.images/image-20220901093026037.png) 

![image-20220901093502503](notes.images/image-20220901093502503.png)



#### summary

![image-20220901093838301](notes.images/image-20220901093838301.png)



#### practice

![image-20220901095123237](notes.images/image-20220901095123237.png)

 