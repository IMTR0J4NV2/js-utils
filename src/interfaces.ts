interface Array<T> {
    /**
     * Creates a new array containing the elements of the sub-arrays of the array passed as argument
     * @param this Array
     * @returns {Array<any>}
     */
    toFlat(this: Array<any | Array<any>>): Array<any>;
}