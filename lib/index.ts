import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { getByIndex } from '@writetome51/array-get-by-index';


// indexes can be negative or positive.

export function getByIndexes(indexes, array): any[] {
	errorIfValuesAreNotArrays([indexes, array]);
	let i = -1, itemsToReturn = [];
	while (++i < indexes.length) {
		itemsToReturn.push(getByIndex(indexes[i], array));
	}
	return itemsToReturn;
}
