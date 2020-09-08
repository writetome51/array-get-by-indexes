import { errorIfNotArray } from 'error-if-not-array';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { getByIndex } from '@writetome51/array-get-by-index';


// indexes can be negative or positive.

export function getByIndexes(indexes, array): any[] {
	errorIfNotArray(indexes);
	return getArrFilled(indexes.length, (i) => getByIndex(indexes[i], array));
}
