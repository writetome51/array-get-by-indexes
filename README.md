# getByIndexes(indexes, array): any[]

Returns multiple items from `array`, identified by their `indexes`.  
It doesn't modify `array`.  It lets you use both negative and positive indexes.  
The returned items are listed in the same order as `indexes`.

## Examples
```
let arr = [1,2,3,4,5,6,7];

let items = getByIndexes([-1, 3, -3], arr); // items is now [7, 4, 5]

items = getByIndexes([3, -7], arr); // items is now [4, 1]

items = getByIndexes([-8], arr); // triggers error, since array only has 7 items.

items = getByIndexes([7], arr); // triggers error, since array only has 7 items.
```

## Installation
`npm i  @writetome51/array-get-by-indexes`

## Loading
```
// if using TypeScript:
import { getByIndexes } from '@writetome51/array-get-by-indexes';
// if using ES5 JavaScript:
var getByIndexes = require('@writetome51/array-get-by-indexes').getByIndexes;
```