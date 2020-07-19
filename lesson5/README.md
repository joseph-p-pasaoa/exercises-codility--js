# Lesson 5: Prefix Sums
1. [CountDiv](#1-countdiv)
2. [GenomicRangeQuery](#2-genomicrangequery)
3. MinAvgTwoSlice
4. PassingCars

---





# 1. CountDiv

### INSTRUCTIONS
"Respectable" Difficulty.
Compute number of integers divisible by k in range [a..b].

<details>
  <summary>Show/hide details</summary>
  ...

  Write a function:
  ```
    function solution(A, B, K);
  ```
  that, given three integers A, B and K, returns the number of integers within the range [A..B] that are 
  divisible by K, i.e.:

  { i : A ≤ i ≤ B, i mod K = 0 }

  For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three 
  numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

  Write an efficient algorithm for the following assumptions:
  - A and B are integers within the range [0..2,000,000,000];
  - K is an integer within the range [1..2,000,000,000];
  - A ≤ B.

  ---
</details>

### SUBMISSION
```
function solution(A, B, K) {
  const lowestMultipleFactor = Math.ceil(A / K);
  const highestMultipleFactor = Math.floor(B / K);
  return highestMultipleFactor - lowestMultipleFactor + 1;
}


// USER INPUT TESTS
[0, 10, 4]
[3, 9, 3]
[0, 0, 1]
[0, 2000000000, 1]
[40, 73, 7]
[100, 200, 100000]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(1)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + A = 6, B = 11, K = 2 ✔ OK
    1. 0.068 s

  **Correctness tests**
  + A = 11, B = 345, K = 17 ✔ OK
    1. 0.068 s
  + A = B in {0,1}, K = 11 ✔ OK
    1. 0.068 s
    2. 0.068 s
  + A = 10, B = 10, K in {5,7,20} ✔ OK
    1. 0.068 s
    2. 0.068 s
    3. 0.068 s
  + verify handling of range endpoints, multiple runs ✔ OK
    1. 0.068 s
    2. 0.068 s
    3. 0.068 s
    4. 0.068 s
    5. 0.068 s
    6. 0.068 s

  **Performance tests**
  + A = 100, B=123M+, K=2 ✔ OK
    1. 0.068 s
  + A = 101, B = 123M+, K = 10K ✔ OK
    1. 0.068 s
  + A = 0, B = MAXINT, K in {1,MAXINT} ✔ OK
    1. 0.068 s
    2. 0.068 s
  + A, B, K in {1,MAXINT} ✔ OK
    1. 0.068 s
    2. 0.068 s
    3. 0.068 s
    4. 0.068 s

</details>

---





# 2. GenomicRangeQuery

### INSTRUCTIONS

"Repsectable" Difficulty.
Find the minimal nucleotide from a range of sequence DNA.

<details>
  <summary>Show/hide details</summary>
  ...

  A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond 
  to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is 
  an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You 
  are going to answer several queries of the form: What is the minimal impact factor of nucleotides 
  contained in a particular part of the given DNA sequence?

  The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. 
  There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. 
  The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in 
  the DNA sequence between positions P[K] and Q[K] (inclusive).

  For example, consider string S = CAGCCTA and arrays P, Q such that:
  ```
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
  ```

  The answers to these M = 3 queries are as follows:
  +The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact 
      factors are 3 and 2 respectively, so the answer is 2.
  + The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the 
      answer is 4.
  + The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular 
      nucleotide A whose impact factor is 1, so the answer is 1.

  Write a function:
  ```
    function solution(S, P, Q);
  ```
  that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q 
  consisting of M integers, returns an array consisting of M integers specifying the consecutive answers 
  to all queries.

  Result array should be returned as an array of integers.

  For example, given the string S = CAGCCTA and arrays P, Q such that:
  ```
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
  ```
  the function should return the values [2, 4, 1], as explained above.

  Write an efficient algorithm for the following assumptions:
  + N is an integer within the range [1..100,000];
  + M is an integer within the range [1..50,000];
  + each element of arrays P, Q is an integer within the range [0..N − 1];
  + P[K] ≤ Q[K], where 0 ≤ K < M;
  + string S consists only of upper-case English letters A, C, G, T.

  ---
</details>

### SUBMISSIONS
```
// FINAL SUBMISSION

function solution(S, P, Q) {
  // create tallies array to map occurences to indices
  const tallies = [];
  const tally = {A: 0, C: 0, G: 0, T: 0};
  for (let letter of S) {
      tallies.push({ ...tally });
      tally[letter] += 1;
  }
  tallies.push({ ...tally }); // adds one more tally to count last letter

  // helper func: uses indexed tallies to calc min factors of queries
  const calcQueryMinFactor = (startCount, endCount) => {
      if (endCount['A'] - startCount['A'] > 0) return 1;
      else if (endCount['C'] - startCount['C'] > 0) return 2;
      else if (endCount['G'] - startCount['G'] > 0) return 3;
      else return 4;
  } 

  // using helper func above, builds return array of minFactors
  const minFactors = [];
  for (let K = 0; K < P.length; K++) {
      const leftTally = tallies[P[K]];
      const rightTally = tallies[Q[K] + 1];
      minFactors.push(calcQueryMinFactor(leftTally, rightTally));
  }
  return minFactors;
}


// USER INPUT TESTS
('GTC', [0, 0, 2], [0, 2, 2])
('GGGCG', [0, 3], [2, 3])
('TTTA', [3], [3])
('CAGT', [1, 2], [1, 3])
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N + M)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example test ✔ OK
    1. 0.072 s

  **Correctness tests**
  + single character string ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
    4. 0.068 s
  + double character string ✔ OK
    1. 0.068 s
    2. 0.068 s
    3. 0.072 s
    4. 0.068 s
  + simple tests ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
  + small length simple string ✔ OK
    1. 0.072 s
  + small random string, length = ~300 ✔ OK
    1. 0.072 s

  **Performance tests**
  + GGGGGG..??..GGGGGG..??..GGGGGG ✔ OK
    1. 0.240 s
    2. 0.164 s
  + large random string, length ✔ OK
    1. 0.228 s
  + all max ranges ✔ OK
    1. 0.244 s

</details>

---

<details>
  <summary>SECOND SUBMISSION</summary>

  ```
  function solution(S, P, Q) {
      const visitedIntervals = {
          // <starting-index>: [
          //      { end: <ending-index>, minFactor: <min-factor> }
          // ]
      };
      const factor = {
          A: 1,
          C: 2,
          G: 3,
          T: 4
      };
      const minFactors = [];
      for (let n = 0; n < P.length; n++) {
          const startIndex = P[n];
          const endIndex = Q[n];
          let minFactor = 4;
          for (let m = startIndex; m <= endIndex; m++) {
              // checks if any visitedIntervals begin at m
              if (visitedIntervals[m]) {
                  let maxEndInsideIndices = m;
                  let maxEndInsideIndicesMinFactor;
                  
                  // iterates visitedIntervals for largest interval within endIndex
                  for (let endObj of visitedIntervals[m]) {
                      if (endObj[end] <= endIndex && endObj[end] > maxEndInsideIndices) {
                          
                          // if found, minFactor is derived from visitedInterval and
                          // m is moved to visitedInterval's end
                          maxEndInsideIndices = endObj[end];
                          m = endObj[end] - 1;
                          minFactor = endObj[minFactor];
                          if (minFactor === 1) break; // optimization break at lowest poss val
                          else continue;
                      }
                  }
              }
              const currentChar = S[m];
              const currentFactor = factor[currentChar];
              if (currentFactor < minFactor) {
                  minFactor = currentFactor;
                  if (minFactor === 1) break; // optimization break at lowest poss val
              }
          }
          minFactors.push(minFactor);
      }
      return minFactors;
  }
  ```

  ANALYSIS SUMMARY
  + Task Score: 62%
  + Correctness: 100%
  + Performance: 0%
    - The following issues have been detected: timeout errors.
  + Detected time complexity: O(N * M)

  **Example tests**
  + example test ✔ OK
    1.0.072 s

  **Correctness tests**
  + single character string ✔ OK
    1.0.072 s
    2.0.072 s
    3.0.072 s
    4.0.072 s
  + double character string ✔ OK
    1.0.068 s
    2.0.072 s
    3.0.072 s
    4.0.072 s
  + simple tests ✔ OK
    1.0.072 s
    2.0.072 s
    3.0.072 s
  + small length simple string ✔ OK
    1.0.068 s
  + small random string, length = ~300 ✔ OK
    1.0.072 s

  **Performance tests**
  + almost_all_same_letters
  + GGGGGG..??..GGGGGG..??..GGGGGG
  + ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    1. 6.000 s ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    2. 0.084 s
  - large_random
  - large random string, length
  + ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    1. 6.000 s ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
  + extreme_large
  + all max ranges
  + ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    1. 6.000 s ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.

  ### (END SECOND SUBMISSION)
  ---
</details>


<details>
  <summary>FIRST SUBMISSION</summary>

  ```
  function solution(S, P, Q) {
      const factor = {
          A: 1,
          C: 2,
          G: 3,
          T: 4
      };
      const minFactors = [];
      for (let n = 0; n < P.length; n++) {
          const startIndex = P[n];
          const endIndex = Q[n];
          let minFactor = 4;
          for (let m = startIndex; m <= endIndex; m++) {
              const currentChar = S[m];
              const currentFactor = factor[currentChar];
              if (currentFactor < minFactor) {
                  minFactor = currentFactor;
                  if (minFactor === 1) break;
              }
          }
          minFactors.push(minFactor);
      }
      return minFactors;
  }
  ```

  ANALYSIS SUMMARY
  + Task Score: 62%
  + Correctness: 100%
  + Performance: 0%
    - The following issues have been detected: timeout errors.
  + Detected time complexity: O(N * M)

  **Example tests**
  + example test ✔ OK
    1. 0.076 s

  **Correctness tests**
  + single character string ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
    4. 0.076 s
  + double character string ✔ OK
    1. 0.076 s
    2. 0.076 s
    3. 0.072 s
    4. 0.072 s
  + simple tests ✔ OK
    1. 0.072 s
    2. 0.076 s
    3. 0.072 s
  + small length simple string ✔ OK
    1. 0.072 s
  + small random string, length = ~300 ✔ OK
    1. 0.072 s

  **Performance tests**
  + almost_all_same_letters
  + GGGGGG..??..GGGGGG..??..GGGGGG
  + ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    1. 6.000 s ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    2. 0.080 s
  - large_random
  - large random string, length
  - ✘ TIMEOUT ERROR, running time: 4.440 sec., time limit: 0.656 sec.
    1. 4.440 s ✘ TIMEOUT ERROR, running time: 4.440 sec., time limit: 0.656 sec.
  + extreme_large
  + all max ranges
  + ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
    1. 6.000 s ✘ TIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.

  ### (END FIRST SUBMISSION)
  ---
</details>

---





# 3. MinAvgTwoSlice

### INSTRUCTIONS

"Respectable" Difficulty.
Find the minimal average of any slice containing at least two elements.

<details>
  <summary>Show/hide details</summary>
  ...

  A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 
  0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). 
  The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of 
  the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

  For example, array A such that:
  ```
    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
  ```
  contains the following example slices:
  ```
    slice (1, 2), whose average is (2 + 2) / 2 = 2;
    slice (3, 4), whose average is (5 + 1) / 2 = 3;
    slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
  ```

  The goal is to find the starting position of a slice whose average is minimal.

  Write a function:
  ```
    function solution(A);
  ```
  that, given a non-empty array A consisting of N integers, returns the starting position of the 
  slice with the minimal average. If there is more than one slice with a minimal average, you should 
  return the smallest starting position of such a slice.

  For example, given array A such that:
  ```
    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
  ```
  the function should return 1, as explained above.

  Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [2..100,000];
  - each element of array A is an integer within the range [−10,000..10,000].

  ---
</details>

### SUBMISSION
```
function solution(A) {
  if (A.length === 2) return 0; // only one possible slice
  
  let minAvgStartIndex = 0;
  let minAvg = Number.MAX_VALUE;
  for (let i = 0; i < A.length - 2; i++) {
      const length2Avg = (A[i] + A[i + 1]) / 2;
      const length3Avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
      const minAvgOfIteration = Math.min(length2Avg, length3Avg);
      if (minAvgOfIteration < minAvg) {
          minAvg = minAvgOfIteration;
          minAvgStartIndex = i;
      }

      // if at last iteration, executes extra check with last 2-length slice
      if (i === A.length - 3) {
          const lastLength2Avg = (A[i + 1] + A[i + 2]) / 2;
          if (lastLength2Avg < minAvg) return i + 1;
      }
  }
  return minAvgStartIndex;
}


// USER INPUT TESTS
[0, 0]
[1, 1]
[-9997, -9998, -9999, -10000]
[100, 50, -50, 100]
[3, 2, 3, 4, 4, 3, 1, 2]
[7, 6, 6, 9, 5, 5, 5, 5, 5, 8]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
+ example test ✔ OK
  1. 0.072 s

**Correctness tests**
+ two or four elements ✔ OK
  1. 0.072 s
  2. 0.072 s
  3. 0.072 s
  4. 0.072 s
+ simple test, the best slice has length 3 ✔ OK
  1. 0.072 s
  2. 0.072 s
+ simple test, the best slice has length 3 ✔ OK
  1. 0.072 s
+ random, length = 100 ✔ OK
  1. 0.072 s
+ increasing, decreasing (legth = ~100) and small functional ✔ OK
  1. 0.072 s
  2. 0.072 s
  3. 0.072 s

**Performance tests**
+ random, N = ~700 ✔ OK
  1. 0.072 s
+ numbers from -1 to 1, N = ~100,000 ✔ OK
  1. 0.104 s
  2. 0.100 s
+ random, N = ~100,000 ✔ OK
  1. 0.116 s
+ all maximal values, N = ~100,000 ✔ OK
  1. 0.112 s
  2. 0.112 s
  3. 0.116 s
+ many seqeneces, N = ~100,000 ✔ OK
  1. 0.100 s
  2. 0.104 s

</details>

---





# 4. PassingCars

### INSTRUCTIONS

"Painless" Difficulty.
Count the number of passing cars on the road.

<details>
  <summary>Show/hide details</summary>
  ...

  A non-empty array A consisting of N integers is given. The consecutive elements of array A 
  represent consecutive cars on a road.

  Array A contains only 0s and/or 1s:
  ```
    0 represents a car traveling east,
    1 represents a car traveling west.
  ```
  The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, 
  is passing when P is traveling to the east and Q is traveling to the west.

  For example, consider array A such that:
  ```
    A[0] = 0
    A[1] = 1
    A[2] = 0
    A[3] = 1
    A[4] = 1
  ```
  We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

  Write a function:
  ```
    function solution(A);
  ```
  that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

  The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

  For example, given:
  ```
    A[0] = 0
    A[1] = 1
    A[2] = 0
    A[3] = 1
    A[4] = 1
  ```
  the function should return 5, as explained above.

  Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [1..100,000];
  - each element of array A is an integer that can have one of the following values: 0, 1.

  ---
</details>

### SUBMISSION
```
function solution(A) {
  let zerosInPlay = 0;
  let passes = 0;
  for (let car of A) {
      if (car === 0) zerosInPlay++;
      else passes += zerosInPlay;

      if (passes > 1000000000) return -1;
  }

  return passes;
}


// USER INPUT TESTS
[0]
[1]
[0, 1, 1, 1, 1]
[1, 0]
[0, 1]
[0, 0]
[1, 1]
[0, 0, 0, 1, 1, 0, 1, 1]
[0, 0, 0, 1, 1]
[0, 0, 0, 1, 1, 0]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example test ✔ OK
    1. 0.068 s

  **Correctness tests**
  + single element ✔ OK
    1. 0.068 s
    2. 0.068 s
  + two elements ✔ OK
    1. 0.068 s
    2. 0.068 s
    3. 0.068 s
    4. 0.068 s
  + simple test ✔ OK
    1. 0.068 s
  + random, length = 100 ✔ OK
    1. 0.068 s
  + random, length = 1000 ✔ OK
    1. 0.068 s

  **Performance tests**
  + random, length = ~10,000 ✔ OK
    1. 0.128 s
  + random, length = ~100,000 ✔ OK
    1. 0.100 s
  + 0..01..1, length = ~100,000 ✔ OK
    1. 0.100 s
    2. 0.100 s
  + 0101..01, length = ~100,000 ✔ OK
    1. 0.104 s
    2. 0.100 s
  + large test with all 1s/0s, length = ~100,000 ✔ OK
    1. 0.104 s
    2. 0.104 s
    3. 0.104 s

</details>

---