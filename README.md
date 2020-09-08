# getByIndexes(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indexes: number[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: any[]<br>): any[]

Returns multiple items from `array`, identified by their `indexes`.  
`indexes` can be negative or positive.  
The returned items are listed in the same order as `indexes`.
It doesn't modify `array`. 


## Examples
```js
let arr = [1,2,3,4,5,6,7];

getByIndexes([-1, 3, -3], arr);
// --> [7, 4, 5]

getByIndexes([3, -7], arr);
// --> [4, 1]

getByIndexes([-8], arr); // triggers error, since arr only has 7 items.
// Error: "The entered index is not valid.  Whether positive or negative, it exceeds 
//         the index range of the array."

getByIndexes([3, 3, 3], arr);
// --> [4, 4, 4]

getByIndexes([3, 0, 3, 0], arr);
// --> [4, 1, 4, 1]


// Behavior when passed unexpected types:

getByIndexes([0, 2], 'abc');
// --> [ 'a', 'c' ]

getByIndexes([0 ,2], {});
// Error: "The entered index is not valid.  Whether positive or negative, it exceeds 
//         the index range of the array."

getByIndexes([0, 2], true);
// Error: "The entered index is not valid.  Whether positive or negative, it exceeds 
//         the index range of the array."

getByIndexes({}, arr);
// Error: "Input must be array"
```

## Installation
`npm i  @writetome51/array-get-by-indexes`

## Loading
```js
import { getByIndexes } from '@writetome51/array-get-by-indexes';
```
