# Quicksort


<pre style="font-size: 2rem">
⚁ ⚂ ⚀ ⚅ ⚃ ⚃ ⚄ ⚃ ⚂ ⚁ ⚀ ⚂

          ↓
⚁ ⚂ ⚀ ⚅ ⚃ ⚃ ⚄ ⚃ ⚂ ⚁ ⚀ ⚂     <span style="font-size: 0.8rem">Elements <= 4 to left; elements >= 4 to right</span>
          ↑
          
⚁ ⚂ ⚀ ⚅ ⚃ ⚃ ⚄ ⚃ ⚂ ⚁ ⚀ ⚂     <span style="font-size: 0.8rem">Swap 6 and 3</span>
      ↑               ↑
⚁ ⚂ ⚀ ⚂ ⚃ ⚃ ⚄ ⚃ ⚂ ⚁ ⚀ ⚅     <span style="font-size: 0.8rem">Swap 4 and 1</span>
        ↑           ↑
⚁ ⚂ ⚀ ⚂ ⚀ ⚃ ⚄ ⚃ ⚂ ⚁ ⚃ ⚅     <span style="font-size: 0.8rem">Swap 4 and 2</span>
          ↑       ↑
⚁ ⚂ ⚀ ⚂ ⚀ ⚁ ⚄ ⚃ ⚂ ⚃ ⚃ ⚅     <span style="font-size: 0.8rem">Swap 5 and 3</span>
            ↑   ↑

                ↓
⚁ ⚂ ⚀ ⚂ ⚀ ⚁ ⚂ ⚃ ⚄ ⚃ ⚃ ⚅     <span style="font-size: 0.8rem">Second half starts with 5</span>
<span style="font-size: 0.8rem">Don't worry about 4 appearing in both halves</span>

      ↓
⚁ ⚂ ⚀ ⚂ ⚀ ⚁ ⚂ ⚃             <span style="font-size: 0.8rem">Elements <= 3 to left; elements >= 3 to right</span>
      ↑

⚁ ⚂ ⚀ ⚂ ⚀ ⚁ ⚂ ⚃             <span style="font-size: 0.8rem">Swap 3 and 2</span>
      ↑   ↑

          ↓
⚁ ⚂ ⚀ ⚁ ⚀ ⚂ ⚂ ⚃             <span style="font-size: 0.8rem">Second half starts with 3</span>
<span style="font-size: 0.8rem">Don't worry about 3 appearing in both halves</span>

    ↓
⚁ ⚂ ⚀ ⚁ ⚀                   <span style="font-size: 0.8rem">Elements <= 1 to left; elements >= 1 to right</span>
    ↑

⚁ ⚂ ⚀ ⚁ ⚀                   <span style="font-size: 0.8rem">Swap 2 and 1</span>
↑       ↑
⚀ ⚂ ⚀ ⚁ ⚁                   <span style="font-size: 0.8rem">Swap 3 and 1</span>
  ↑ ↑

    ↓
⚀ ⚀ ⚂ ⚁ ⚁                   <span style="font-size: 0.8rem">Second half starts with 3 (no more work for first half)</span>

      ↓
    ⚂ ⚁ ⚁                   <span style="font-size: 0.8rem">Elements <= 2 to left; elements >= 2 to right</span>
      ↑

    ⚂ ⚁ ⚁                   <span style="font-size: 0.8rem">Swap 3 and 2</span>
    ↑   ↑

        ↓
    ⚁ ⚁ ⚂                   <span style="font-size: 0.8rem">Second half starts with 3 (no more work for either half)</span>

            ↓
          ⚂ ⚂ ⚃             <span style="font-size: 0.8rem">Elements <= 3 to left; elements >= 3 to right (already done)</span>
            ↑

            ↓
          ⚂ ⚂ ⚃             <span style="font-size: 0.8rem">Second half starts with 3 (no more work for either half)</span>
<span style="font-size: 0.8rem">Don't worry about 3 appearing in both halves</span>

                  ↓
                ⚄ ⚃ ⚃ ⚅     <span style="font-size: 0.8rem">Elements <= 4 to left; elements >= 4 to right</span>
                  ↑

                ⚄ ⚃ ⚃ ⚅     <span style="font-size: 0.8rem">Swap 5 and 4</span>
                ↑   ↑

                    ↓
                ⚃ ⚃ ⚄ ⚅     <span style="font-size: 0.8rem">Second half starts with 5 (no more work for either half)</span>

⚀ ⚀ ⚁ ⚁ ⚂ ⚂ ⚂ ⚃ ⚃ ⚃ ⚄ ⚅
</pre>
