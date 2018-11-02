To include in your project:

import { getByIndexes } from '@writetome51/array-get-by-indexes';

getByIndexes(indexes, array): any[]

This function returns multiple items from an array, identified by their indexes. It doesn't modify the array.
It lets you use both negative and positive indexes, and will also trigger an error if one of the 
indexes doesn't exist in the array.  The returned items are listed in the same order as the indexes 
passed to the function.

Examples:

let arr = [1,2,3,4,5,6,7];

let items = getByIndexes([-1, 3, -3], arr); // items is now [7, 4, 5]

items = getByIndexes([3, -7], arr); // items is now [4, 1]

items = getByIndexes([-8], arr); // triggers error, since array only has 7 items.

items = getByIndexes([7], arr); // triggers error, since array only has 7 items.