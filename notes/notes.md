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

