var AMOUNT = 10;                                                                // How many elements?
var LIMIT = 89;                                                                 // All elements have non-negative integer values below (LIMIT + 10), i.e. two digits

/**
 * For creation of collection without duplicates,
 * refer to main page
 */
function create_random_array (amount, limit) {
    var a = [];
    for ( var i = 0; i < amount; i++ )
        a.push( Math.floor(Math.random() * limit) + 10 );
    return a;
}


/**
 * All put into one function
 * 
 * No return value - will work directly on 'collection'
 * 
 * If no compare function is given, simple numeric ascending sort
 * (smaller values shall go to the left) is used
 */
function quicksort (collection, left, right, compare_fnc) {
    /**
     * (left == right) => nothing to do; a single value always is well sorted
     */
    if ( left >= right )
        return;
    /**
     * Two equal values don't need sorting
     */
    if ( (right - left) == 1 && collection[left] == collection[right] )
        return;
    /**
     * If first shall be left of second: return true
     * Default function is numeric ascending sort
     */
    var compare = compare_fnc || function (first, second) {
        return (first < second);
    };
    /**
     * Pointer to left index;
     * MUST walk (because is used later for next step)
     */
    var split = left;
    /**
     * Pointer to right index;
     * might or might not walk
     */
    var tmp = right;
    /**
     * Value of middle index ('pivot')
     * Could at least in theory be any element
     */
    var threshold = collection[parseInt((left + right) / 2)];
    var tmp2;
    /**
     * Pointers didn't meet...
     */
    while ( split <= tmp ) {
        /**
         * If already sorted: Move left pointer to right
         */
        while ( compare(collection[split], threshold) )
            split++;
        /**
         * If already sorted: Move right pointer to left
         * 
         * '!compare(collection[tmp], threshold)'
         * would not work: Values might be equal
         */
        while ( compare(threshold, collection[tmp]) )
            tmp--;
        if ( split <= tmp ) {
            /**
             * Swap values (if not equal)
             */
            if ( collection[split] != collection[tmp] ) {
                tmp2 = collection[split];
                collection[split] = collection[tmp];
                collection[tmp] = tmp2;
            }
            /**
             * Continue moving to avoid infinite loops
             */
            split++;
            tmp--;
        }
    }
    /**
     * Repeat with left half
     */
    quicksort(collection, left, (split - 1), compare);
    /**
     * Repeat with right half
     */
    quicksort(collection, split, right, compare);
}


/**
 * Some random values
 */
var collection = create_random_array(AMOUNT, LIMIT);
console.log( collection );
/**
 * No given compare function: Ascending sort
 * 'quicksort(collection, 0, (collection.length - 1), function(x, y){return x<y})' would do the same 
 */
quicksort(collection, 0, (collection.length - 1));
console.log( collection );

console.log( "" );

/**
 * New randomization...
 */
collection = create_random_array(AMOUNT, LIMIT);
console.log( collection );
function compare_desc (first, second) {
    return (first > second);
}
/**
 * Given compare function: Descending sort
 */
quicksort(collection, 0, (collection.length - 1), compare_desc);
console.log( collection );

console.log( "" );

var s = "The Answer to the Ultimate Question of Life, The Universe, and Everything is 42";
collection = s.split(" ");
console.log( collection.join(" ") );
function compare_alphabetic (first, second) {
    var f, s;
    /**
     * Simple comparison: Search for first
     * different letter in two words
     */
    for ( var i = 0; i < first.length && i < second.length; i++ ) {
        f = first.toLowerCase().charCodeAt(i);
        s = second.toLowerCase().charCodeAt(i);
        if ( f != s )
            return (f < s);
    }
    /**
     * Since the above loop makes no decision
     * in case of complete equality,
     * return value must be false
     */
    return false;
}
/**
 * Given compare function: Alphabetic sort
 * Shall demonstrate that it also works with non-numeric collection values
 */
quicksort(collection, 0, (collection.length - 1), compare_alphabetic);
console.log( collection.join(" ").replace(/[^\w\s]/g, "") );
