import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { getItem } from '@writetome51/array-get-item/getItem';


// indexes can be negative or positive.

export function getByIndexes(indexes, array): any[] {
	errorIfValuesAreNotArrays([indexes, array]);
	let i = -1, itemsToReturn = [];
	while (++i < indexes.length) {
		itemsToReturn.push(getItem(indexes[i], array));
	}
	return itemsToReturn;
}
