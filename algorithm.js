var symbols = [];           // ⚀, ⚁, ⚂, ⚃, ⚄, ⚅
var i;
for ( i = 0; i < 6; i++ )
	symbols.push( String.fromCharCode(0x2680 + i) );

var USE_SYMBOLS = false;    // Hard to read in web console
var SHOW_STEPS = true;

if ( !USE_SYMBOLS ) {
    for ( i = 0; i < 6; i++ )
        symbols[i] = i + 1;
}

var LIMIT = 6;

function in_collection (collection, start, stop, wanted) {
    for ( var i = start; i <= stop; i++ ) {
        if ( collection[i] == wanted )
            return true;
    }
    return false;
}
function display (collection, start, stop, special, msg) {
    var s1 = "";
    var s2 = "";
    for ( var i = 0; i < collection.length; i++ ) {
        if ( i < start )
            continue;
        if ( i > stop )
            break;
        if ( s1 ) {
            s1 += " ";
            s2 += " ";
        }
        s1 += symbols[collection[i]];
        s2 += (i == special[0] || i == special[1]) ? "↑" : " ";
    }
    if ( msg )
        s1 += "    " + msg;
    console.log( s1 );
    if ( special[0] >= 0 )
        console.log( s2 );
}

/**
 * The six possible values,
 * after that six more random values,
 * all in random order
 */
function create_random_array (limit) {
    var i, random_index;
    var tmp = [];
    for ( i = 0; i < limit; i++ )
        tmp.push(i);
    for ( i = 0; i < limit; i++ )
        tmp.push( Math.floor(Math.random() * limit) );
    var a = [];
    while ( tmp.length ) {
        random_index = Math.floor(Math.random() * tmp.length);
        a.push(tmp[random_index]);
        tmp.splice(random_index, 1);
    }
    return a;
}


function swap (collection, first, second) {
    var tmp = collection[first];
    collection[first] = collection[second];
    collection[second] = tmp;
}
function divide (collection, left, right) {
    var i = left;
    var j = right;
    var pivot = parseInt((left + right) / 2);
    var threshold = collection[pivot];
    if ( SHOW_STEPS ) {
        display(collection, left, right, [pivot, -1], "Elements <= " + symbols[threshold] + " to left; elements >= " + symbols[threshold] + " to right");
        console.log( "" );
    }
    while ( i <= j ) {
        while ( collection[i] < threshold )
            i++;
        while ( collection[j] > threshold )
            j--;
        if ( i <= j ) {
            if ( i != j && collection[i] != collection[j] ) {		// not necessary, but increases speed
                if ( SHOW_STEPS )
                    display(collection, left, right, [i, j], "Swap " + symbols[collection[i]] + " and " + symbols[collection[j]]);
                swap(collection, i, j);	
            }			
            i++;
            j--;
        }
    }
    return i;
}
function quicksort (collection, left, right) {
    if ( collection.length > 1 ) {
        var split = divide(collection, left, right);
        if ( SHOW_STEPS ) {
            if ( split ) {
                console.log( "" );
                display(collection, left, right, [split, -1], "Second half starts with " + symbols[collection[split]]);
                for ( var i = left; i < split; i++ ) {
                    if ( in_collection(collection, split, right, collection[i]) ) {
                        console.log( "Don't worry about " + symbols[collection[i]] + " appearing in both halves" );
                        break;
                    }
                }
            }
            console.log( "" );
        }
        //if ( left < (split - 1) )		// General condition, unoptimized
        if ( left < (split - 1) && (split - 1 - left > 1 || collection[left] > collection[split - 1]) )
            quicksort(collection, left, (split - 1));
        //if ( split < right )			// General condition, unoptimized
        if ( split < right && (right - split > 1 || collection[split] > collection[right]) )
            quicksort(collection, split, right);
    }
    return collection;
}


var src = create_random_array(LIMIT);
display(src, 0, (src.length - 1), [-1, -1]);
console.log( "" );

var result = quicksort(src, 0, (src.length - 1));
display(result, 0, (result.length - 1), [-1, -1]);
