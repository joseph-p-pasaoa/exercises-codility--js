# Lesson 4: Counting Elements

<!-- ## Contents
1. [FrogRiverOne](#1-frogriverone)
1. [MaxCounters](#2-maxcounters)
1. MissingInteger
1. PermCheck

--- -->



<details>
  <summary>1. FROGRIVERONE</summary>

  Difficulty: Painless.
  Find the earliest time when a frog can jump to the other side of a river.

  ---

<details>
  <summary>Instructions ~</summary>

  A small frog wants to get to the other side of a river. The frog is initially located on one bank of 
  the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree 
  onto the surface of the river.

  You are given an array A consisting of N integers representing the falling leaves. A[K] represents the 
  position where one leaf falls at time K, measured in seconds.

  The goal is to find the earliest time when the frog can jump to the other side of the river. The frog 
  can cross only when leaves appear at every position across the river from 1 to X (that is, we want to 
  find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume 
  that the speed of the current in the river is negligibly small, i.e. the leaves do not change their 
  positions once they fall in the river.

  For example, you are given integer X = 5 and array A such that:
  ```
    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  ```
  In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every 
  position across the river.

  Write a function:
  ```
    function solution(X, A);
  ```

  that, given a non-empty array A consisting of N integers and integer X, returns the earliest time 
  when the frog can jump to the other side of the river.

  If the frog is never able to jump to the other side of the river, the function should return −1.

  For example, given X = 5 and array A such that:
  ```
    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  ```
  the function should return 6, as explained above.

  Write an efficient algorithm for the following assumptions:
  - N and X are integers within the range [1..100,000];
  - each element of array A is an integer within the range [1..X].
</details>

---

```
// SUBMISSION

function solution(X, A) {
  const leavesPresent = {};
  let uniqueCounter = 0;
  for (let i = 0; i < A.length; i++) {
      if (!leavesPresent[A[i]]) {
          leavesPresent[A[i]] = true;
          uniqueCounter += 1;
      }
      if (uniqueCounter >= X) return i;
  }
  return -1;
}
```

```
// USER INPUT TESTS

(1, [1])
(2, [2, 2])
(4, [3])
(4, [4, 2, 2, 3, 1, 2])
```

---

### ANALYSIS SUMMARY
The solution obtained perfect score.

Detected time complexity:
O(N)

---

**Example tests**
+ example test ✔ OK
  1. 0.068 s

**Correctness tests**
+ simple test ✔ OK
  1. 0.068 s
+ single element ✔ OK
  1. 0.068 s
  2. 0.068 s
+ frog never across the river ✔ OK
  1. 0.068 s
  2. 0.068 s
  3. 0.068 s
+ 3 random permutation, X = 50 ✔ OK
  1. 0.068 s
+ 5 random permutation, X = 60 ✔ OK
  1. 0.068 s
+ all leaves in the same place ✔ OK
  1. 0.072 s
  2. 0.068 s

**Performance tests**
+ 6 and 2 random permutations, X = ~5,000 ✔ OK
  1. 0.084 s
  2. 0.080 s
+ arithmetic sequences, X = 5,000 ✔ OK
  1. 0.076 s
+ 10 and 100 random permutation, X = ~10,000 ✔ OK
  1. 0.108 s
  2. 0.104 s
+ permutation tests ✔ OK
  1. 0.112 s
  2. 0.116 s
+ arithmetic sequences, X = 30,000 ✔ OK
  1. 0.096 s

---
</details>



<details>
  <summary>2. MAXCOUNTERS</summary>

  Difficulty: Respectable.
  Calculate the values of counters after applying all alternating operations: increase counter by 1; 
  set value of all counters to current maximum.


  ---

<details>
  <summary>Instructions ~</summary>

  You are given N counters, initially set to 0, and you have two possible operations on them:
    + increase(X) − counter X is increased by 1,
    + max counter − all counters are set to the maximum value of any counter.

  A non-empty array A of M integers is given. This array represents consecutive operations:
    + if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
    + if A[K] = N + 1 then operation K is max counter.

  For example, given integer N = 5 and array A such that:
  ```
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
  ```
  the values of the counters after each consecutive operation will be:
  ```
    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
  ```
  The goal is to calculate the value of every counter after all operations.

  Write a function:
  ```
    function solution(N, A);
  ```

  that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers 
  representing the values of the counters.

  Result array should be returned as an array of integers.

  For example, given:
  ```
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
  ```
  the function should return [3, 2, 2, 4, 2], as explained above.

  Write an efficient algorithm for the following assumptions:
    - N and M are integers within the range [1..100,000];
    - each element of array A is an integer within the range [1..N + 1].
  </details>

  ---

  ```
  // SUBMISSION

  function solution(N, A) {
    let offsetsHash = {};
    let highestValue = 0;
    let baseValue = 0;
    for (let num of A) {
        if (num === N + 1) {
            baseValue = highestValue;
            offsetsHash = {};
        } else if (!offsetsHash[num]) {
            offsetsHash[num] = 1;
            if (highestValue === baseValue) {
                highestValue = highestValue + 1;
            }
        } else {
            offsetsHash[num] += 1;
            const actualValue = offsetsHash[num] + baseValue;
            if (actualValue > highestValue) {
                highestValue = actualValue;
            }
        }
    }
    let outputArray = [];
    for (let i = 0; i < N; i++) {
        if (offsetsHash[i + 1]) {
            outputArray.push(baseValue + offsetsHash[i + 1]);
        } else {
            outputArray.push(baseValue);
        }
    }
    return outputArray;
  }
  ```

  ```
  // USER INPUT TESTS

  (3, [3, 3, 4, 1, 2, 1, 1])
  (1, [2])
  (1, [1])
  (3, [4, 4, 4])
  (3, [2, 4, 4])
  (2, [1, 2])
  (2, [2, 3])
  ```

  ---

  ## ANALYSIS SUMMARY
  The solution obtained perfect score.

  Detected time complexity:
  O(N + M)

  ---

  **Example tests**
  + example test ✔ OK
    1. 0.072 s

  **Correctness tests**
  + all max_counter operations ✔ OK
    1. 0.072 s
  + only one counter ✔ OK
    1. 0.072 s
    2. 0.072 s
  + small random test, 6 max_counter operations ✔ OK
    1. 0.072 s
  + small random test, 10 max_counter operations ✔ OK
    1. 0.072 s

  **Performance tests**
  + medium random test, 50 max_counter operations ✔ OK
    1. 0.072 s
  + medium random test, 500 max_counter operations ✔ OK
    1. 0.076 s
  + large random test, 2120 max_counter operations ✔ OK
    1. 0.124 s
  + large random test, 10000 max_counter operations ✔ OK
    1. 0.160 s
  + all max_counter operations ✔ OK
    1. 0.144 s
    2. 0.136 s

  ---
  </details>