# Lesson 3: Time Complexity
1. [FrogJmp](#1-frogjmp)
1. PermMissingElem
1. [TapeEquilibrium](#3-tapeequilibrium)

---





# 1. FrogJmp

### INSTRUCTIONS
"Painless" Difficulty.
Count minimal number of jumps from position X to Y.

<details>
  <summary>Show/hide details</summary>
  ...

  A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

  Count the minimal number of jumps that the small frog must perform to reach its target.

  Write a function:
  ```
    function solution(X, Y, D);
  ```
  that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

  For example, given:
  ```
  X = 10
  Y = 85
  D = 30
  ```
  the function should return 3, because the frog will be positioned as follows:
  - after the first jump, at position 10 + 30 = 40
  - after the second jump, at position 10 + 30 + 30 = 70
  - after the third jump, at position 10 + 30 + 30 + 30 = 100

  Write an efficient algorithm for the following assumptions:
    + X, Y and D are integers within the range [1..1,000,000,000];
    + X ≤ Y.

  ---
</details>

### SUBMISSION
```
function solution(X, Y, D) {
    const distanceToY = Y - X;
    return Math.ceil(distanceToY / D);
}


// USER INPUT TESTS
(1, 1, 1)
(10, 20, 9)
(10, 20, 10)
(10, 20, 11)
(1, 15, 3)
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(1)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example test ✔ OK
    1. 0.068 s

  **Correctness tests**
  + simple test ✔ OK
    1. 0.072 s
    2. 0.068 s
    1. 0.068 s
    2. 0.068 s
  + no jump needed ✔ OK
    1. 0.068 s
    2. 0.068 s
  + one big jump ✔ OK
    1. 0.068 s

  **Performance tests**
  + many jumps, D = 2 ✔ OK
    1. 0.068 s
  + many jumps, D = 99 ✔ OK
    1. 0.068 s
  + many jumps, D = 1283 ✔ OK
    1. 0.068 s
  + maximal number of jumps ✔ OK
    1. 0.068 s
  + many small jumps ✔ OK
    1. 0.068 s

</details>

---





# 3. TapeEquilibrium

### INSTRUCTIONS
"Painless" Difficulty.
Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

<details>
  <summary>Show/hide details</summary>
  ...

  A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

  Any integer P, such that 0 < P <details N, splits this tape into two non-empty parts: 
  ```
  A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
  ```

  The difference between the two parts is the value of: 
  ```
  |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
  ```

  In other words, it is the absolute difference between the sum of the first part and the sum 
  of the second part.

  For example, consider array A such that:
  ```
    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 4
    A[4] = 3
  ```

  We can split this tape in four places:
  ```
    P = 1, difference = |3 − 10| = 7
    P = 2, difference = |4 − 9| = 5
    P = 3, difference = |6 − 7| = 1
    P = 4, difference = |10 − 3| = 7
  ```

  Write a function:
  ```
    function solution(A);
  ```
  that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

  For example, given:
  ```
    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 4
    A[4] = 3
  ```
  the function should return 1, as explained above.

  Write an efficient algorithm for the following assumptions:
  + N is an integer within the range [2..100,000];
  + each element of array A is an integer within the range [−1,000..1,000].

  ---
</details>

### SUBMISSION
```
function solution(A) {
  const total = A.reduce((sum, curr) => sum + curr, 0);
  let leftSum = A[0];
  let rightSum = total - leftSum;
  let lowestDiff = Math.abs(leftSum - rightSum);
  if (A.length === 2) return lowestDiff;
  for (let i = 1; i < A.length - 1; i++) {
      const numBeingSwitched = A[i]
      leftSum += numBeingSwitched;
      rightSum -= numBeingSwitched;
      const newDiff = Math.abs(leftSum - rightSum);
      if (newDiff < lowestDiff) {
          lowestDiff = newDiff;
      }
  }
  return lowestDiff;
}


// USER INPUT TESTS
[-11, 11]
[-3, -2, -1]
[4, 0, 0, 7]
[2, 2, 2, 4, 2]
[1000, -999, 1000]
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
  + two elements ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
  + simple test with positive numbers, length = 5 ✔ OK
    1. 0.068 s
    2. 0.072 s
  + simple test with negative numbers, length = 5 ✔ OK
    1. 0.072 s
    2. 0.072 s
  + only one element on one of the sides ✔ OK
    1. 0.072 s
    2. 0.068 s
    3. 0.072 s
    4. 0.072 s
  + random small, length = 100 ✔ OK
    1. 0.072 s
  + range sequence, length = ~1,000 ✔ OK
    1. 0.072 s
  + small elements ✔ OK
    1. 0.072 s

  **Performance tests**
  + random medium, numbers from 0 to 100, length = ~10,000 ✔ OK
    1. 0.084 s
  + random medium, numbers from -1,000 to 50, length = ~10,000 ✔ OK
    1. 0.084 s
  + large sequence, numbers from -1 to 1, length = ~100,000 ✔ OK
    1. 0.104 s
    2. 0.104 s
  + random large, length = ~100,000 ✔ OK
    1. 0.112 s
    2. 0.112 s
  + large sequence, length = ~100,000 ✔ OK
    1. 0.100 s
  + large test with maximal and minimal values, length = ~100,000 ✔ OK
    1. 0.112 s
    2. 0.112 s
    3. 0.108 s

</details>

---