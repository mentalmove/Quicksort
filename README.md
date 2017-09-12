# Quicksort

Quicksort is said to be the fastest known comparison-based sort algorithm;
this is true for the average case although quicksort's speed is
(in contrast to some other sort algorithms) not guaranteed - in some
rare cases it tends to be slow.

**index.html** visualises how quicksort works in general  
When variable `AUTOMATED` is set to `false`, execution stops
after every single step and waits for the user to click.

**algorithm.js** is a possible Javascript implementation,
putting the emphasis on displaying the necessary steps
in the console.

**raw_algorithm.js** is a ready-to-use Javascript implementation,
providing the standalone function  
`quicksort(collection, left, right, compare_fnc)`.
Optional parameter `compare_fnc` defines the way the collection shall be sorted.
Since visualisation was not intended here, the code is fully commented.
*raw_algorithm.js* ends with three examples:
Ascending numeric sort, descending numeric sort and ascending word-based alphabetic sort.


## How it works

Basic idea is to divide the collection into two halves of (hopefully almost) equal size
where all values in one half are correctly put left of a given threshold and
all values in the other half are correctly put right of this threshold
(values equal to the threshold may appear everywhere), then to
repeat the procedure with each half until all sections contain only one element.  
To do so, an element (the so-called pivot) is chosen to contain the threshold.
This is the weak point of quicksort: Ideally, the threshold is the collection's
median, but the median can't be found efficiently without the collection being sorted;
fortunately, when sorting larger collections, the probability to be close to
the median is relatively high.  
Two pointers are set on the first and the last element; these must walk towards each other
as long as the sort condition is satisfied - in other words: When they stop, it is known
that the corresponding values are either wrong and must be exchanged either at least
can be exchanged without doing harm. This is to be repeated until the pointers meet.
After that, the section from left pointer to last element and the remaining section
are treated seperately the same way: this will always result into a completely
sorted collection.

In theory, every element could serve as pivot; it is recommendable to use the
middle element
- to avoid confusion with sort conditions and
- to simplify the process for already sorted as well as reverse-sorted collections.

In the (astronomically unlikely) worst case the necessary steps are proportional to
_n<sup>2</sup>_,  
in the best case proportional to _n * log<sub>2</sub>(n)_ where
_n_ is the amount of elements.


## Example

A dynamic variation of the following using random values can be found [here](http://pure-code.mentalmove.com/javascript/sort/quicksort/?single_page=true)
```
 .   .        .    .   .    .   .    .   .    .   .    .   .    .        .   .                 .        .         
   .                 .        .      .   .                        .      .   .      .                             
 .   .    .        .   .    .   .    .   .    .   .    .   .        .    .   .             .        .             


                                             +-----+                                                              
 .   .        .    .   .    .   .    .   .   |.   .|   .   .    .        .   .                 .        .         
   .                 .        .      .   .   |     |              .      .   .      .                                   Elements <= 4 to left; elements >= 4 to right
 .   .    .        .   .    .   .    .   .   |.   .|   .   .        .    .   .             .        .             
                                             +-----+                                                              


+-----+                                                                                            +-----+        
|.   .|       .    .   .    .   .    .   .    .   .    .   .    .        .   .                 .   |    .|        
|  .  |              .        .      .   .                        .      .   .      .              |     |              Swap 5 and 2
|.   .|   .        .   .    .   .    .   .    .   .    .   .        .    .   .             .       |.    |        
+-----+                                                                                            +-----+        

                  +-----+                                                                 +-----+                 
     .        .   |.   .|   .   .    .   .    .   .    .   .    .        .   .            |    .|   .   .         
                  |  .  |     .      .   .                        .      .   .      .     |     |     .                 Swap 5 and 2
 .        .       |.   .|   .   .    .   .    .   .    .   .        .    .   .            |.    |   .   .         
                  +-----+                                                                 +-----+                 

                           +-----+                                               +-----+                          
     .        .        .   |.   .|   .   .    .   .    .   .    .        .   .   |     |   .   .    .   .         
                           |  .  |   .   .                        .      .   .   |  .  |     .        .                 Swap 5 and 1
 .        .        .       |.   .|   .   .    .   .    .   .        .    .   .   |     |   .   .    .   .         
                           +-----+                                               +-----+                          

                                    +-----+                    +-----+                                            
     .        .        .            |.   .|   .   .    .   .   |.    |   .   .    .   .    .   .    .   .         
                              .     |.   .|                    |  .  |   .   .      .        .        .                 Swap 6 and 3
 .        .        .                |.   .|   .   .    .   .   |    .|   .   .    .   .    .   .    .   .         
                                    +-----+                    +-----+                                            


                                                      +-----+                                                     
     .        .        .             .        .   .   |.   .|   .   .    .   .    .   .    .   .    .   .               Second half starts with 4
                              .        .              |     |   .   .    .   .      .        .        .           
 .        .        .                     .    .   .   |.   .|   .   .    .   .    .   .    .   .    .   .               Don't worry about 4 appearing in both halves
                                                      +-----+                                                     


                  +-----+                                                                                         
     .        .   |    .|            .        .   .                                                               
                  |     |     .        .                                                                                Elements <= 2 to left; elements >= 2 to right
 .        .       |.    |                .    .   .                                                               
                  +-----+                                                                                         


+-----+                    +-----+                                                                                
|    .|       .        .   |     |   .        .   .                                                               
|     |                    |  .  |     .                                                                                Swap 2 and 1
|.    |   .        .       |     |       .    .   .                                                               
+-----+                    +-----+                                                                                


                  +-----+                                                                                         
              .   |    .|       .    .        .   .                                                                     Second half starts with 2
   .              |     |              .                                                                          
          .       |.    |   .            .    .   .                                                                     Don't worry about 2 appearing in both halves
                  +-----+                                                                                         


                           +-----+                                                                                
                       .   |    .|   .        .   .                                                               
                           |     |     .                                                                                Elements <= 2 to left; elements >= 2 to right
                   .       |.    |       .    .   .                                                               
                           +-----+                                                                                



                           +-----+                                                                                
                       .   |    .|   .        .   .                                                                     Second half starts with 2
                           |     |     .                                                                                No more work for first half
                   .       |.    |       .    .   .                                                                     Don't worry about 2 appearing in both halves
                           +-----+                                                                                


                                    +-----+                                                                       
                                .   |.    |   .   .                                                               
                                    |  .  |                                                                             Elements <= 3 to left; elements >= 3 to right
                            .       |    .|   .   .                                                               
                                    +-----+                                                                       



                                             +-----+                                                              
                                .    .       |.   .|                                                                    Second half starts with 4
                                       .     |     |                                                                    
                            .            .   |.   .|                                                                    No more work for either half
                                             +-----+                                                              


                                                                        +-----+                                   
                                                       .   .    .   .   |.   .|   .   .    .   .    .   .         
                                                                .   .   |.   .|     .        .        .                 Elements <= 6 to left; elements >= 6 to right
                                                       .   .    .   .   |.   .|   .   .    .   .    .   .         
                                                                        +-----+                                   


                                                               +-----+                             +-----+        
                                                       .   .   |.   .|   .   .    .   .    .   .   |.   .|        
                                                               |.   .|   .   .      .        .     |  .  |              Swap 6 and 5
                                                       .   .   |.   .|   .   .    .   .    .   .   |.   .|        
                                                               +-----+                             +-----+        

                                                                        +-----+           +-----+                 
                                                       .   .    .   .   |.   .|   .   .   |.   .|   .   .         
                                                                  .     |.   .|     .     |  .  |   .   .               Swap 6 and 5
                                                       .   .    .   .   |.   .|   .   .   |.   .|   .   .         
                                                                        +-----+           +-----+                 


                                                                                          +-----+                 
                                                       .   .    .   .    .   .    .   .   |.   .|   .   .               Second half starts with 6
                                                                  .        .        .     |.   .|   .   .               
                                                       .   .    .   .    .   .    .   .   |.   .|   .   .               No more work for second half
                                                                                          +-----+                 


                                                               +-----+                                            
                                                       .   .   |.   .|   .   .    .   .                           
                                                               |  .  |     .        .                                   Elements <= 5 to left; elements >= 5 to right
                                                       .   .   |.   .|   .   .    .   .                           
                                                               +-----+                                            



                                                                                 +-----+                          
                                                       .   .    .   .    .   .   |.   .|                                Second half starts with 5
                                                                  .        .     |  .  |                                No more work for second half
                                                       .   .    .   .    .   .   |.   .|                                Don't worry about 5 appearing in both halves
                                                                                 +-----+                          


                                                               +-----+                                            
                                                       .   .   |.   .|   .   .                                    
                                                               |  .  |     .                                            Elements <= 5 to left; elements >= 5 to right
                                                       .   .   |.   .|   .   .                                    
                                                               +-----+                                            



                                                                        +-----+                                   
                                                       .   .    .   .   |.   .|                                         Second half starts with 5
                                                                  .     |  .  |                                         No more work for either half
                                                       .   .    .   .   |.   .|                                         Don't worry about 5 appearing in both halves
                                                                        +-----+                                   


              .        .        .    .        .   .    .   .    .   .    .   .    .   .    .   .    .   .         
   .                                   .                          .        .        .      .   .    .   .         
          .        .        .            .    .   .    .   .    .   .    .   .    .   .    .   .    .   .
```
