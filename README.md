# Quicksort


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
