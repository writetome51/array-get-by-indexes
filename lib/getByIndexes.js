"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
var getItem_1 = require("@writetome51/array-get-item/getItem");
// indexes can be negative or positive.
function getByIndexes(indexes, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([indexes, array]);
    var i = -1, itemsToReturn = [];
    while (++i < indexes.length) {
        itemsToReturn.push(getItem_1.getItem(indexes[i], array));
    }
    return itemsToReturn;
}
exports.getByIndexes = getByIndexes;
