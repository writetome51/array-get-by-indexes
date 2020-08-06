# getByIndexes(indexes, array): any[]

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

getByIndexes([-8], arr); // triggers error, since array only has 7 items.

getByIndexes([3, 3, 3], arr);
// --> [4, 4, 4]

getByIndexes([3, 0, 3, 0], arr);
// --> [4, 1, 4, 1]
```

## Installation
`npm i  @writetome51/array-get-by-indexes`

## Loading
```js
import { getByIndexes } from '@writetome51/array-get-by-indexes';
```
