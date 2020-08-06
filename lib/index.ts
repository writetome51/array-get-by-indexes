import { errorIfNotArray } from 'error-if-not-array';
import { getByIndex } from '@writetome51/array-get-by-index';


// indexes can be negative or positive.

export function getByIndexes(indexes, array): any[] {
	errorIfNotArray(indexes);

	let i = -1, itemsToReturn = [];
	while (++i < indexes.length) {
		itemsToReturn.push(getByIndex(indexes[i], array));
	}
	return itemsToReturn;
}
