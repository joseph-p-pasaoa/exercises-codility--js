# Lesson 2: Arrays
1. [CyclicRotation](#1-cyclicrotation)
1. [OddOccurrencesInArray](#2-oddoccurencesinarray)

---





# 1. CyclicRotation

### INSTRUCTIONS

"Painless" Difficulty.
Rotate an array to the right by a given number of steps.

<details>
  <summary>Show/hide details</summary>
  ...

  An array A consisting of N integers is given. Rotation of the array means that each element is 
  shifted right by one index, and the last element of the array is moved to the first place. For 
  example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right 
  by one index and 6 is moved to the first place).

  The goal is to rotate array A K times; that is, each element of A will be shifted to the right 
  K times.

  Write a function:
  ```
    function solution(A, K);
  ```
  that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

  For example, given
  ```
    A = [3, 8, 9, 7, 6]
    K = 3
  ```
  the function should return [9, 7, 6, 3, 8]. Three rotations were made:
  ```
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
  ```

  For another example, given
  ```
    A = [0, 0, 0]
    K = 1
  ```
  the function should return [0, 0, 0]

  Given
  ```
    A = [1, 2, 3, 4]
    K = 4
  ```
  the function should return [1, 2, 3, 4]

  Assume that:
  - N and K are integers within the range [0..100];
  - each element of array A is an integer within the range [−1,000..1,000].

  In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

  ---
</details>

### SUBMISSION
```
function solution(A, K) {
  if (A.length <= 1) return A;
  const output = [...A];
  for (let i = 0; i < K; i++) {
      output.unshift(output.pop());
  }
  return output;
}


// USER INPUT TESTS
([], 2)
([6], 100)
([], 0)
([1, 2, 3], 0)
([1, 2, 3], 1)
([4, 3, 2, 1], 3)
([3, 2, 1], 8)
([-1000, 0, 1000], 3)
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ No time complexity analysis.

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + first example test ✔ OK
    1. 0.072 s
  + second example test ✔ OK
    1. 0.072 s
  + third example test ✔ OK
    1. 0.072 s

  **Correctness tests**
  + empty array ✔ OK
    1. 0.072 s
    2. 0.072 s
  + one element, 0 <= K <= 5 ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
  + two elements, K <= N ✔ OK
    1. 0.072 s
    2. 0.076 s
  + small functional tests, K < N ✔ OK
    1. 0.072 s
    2. 0.072 s
  + small functional tests, K >= N ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
  + small random sequence, all rotations, N = 15 ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
    4. 0.072 s
    5. 0.072 s
    6. 0.072 s
    7. 0.072 s
    8. 0.072 s
    9. 0.072 s
    10. 0.072 s
    11. 0.072 s
    12. 0.072 s
    13. 0.072 s
    14. 0.072 s
    15. 0.072 s
  + medium random sequence, N = 100 ✔ OK
    1. 0.072 s
    2. 0.072 s
  + maximal N and K ✔ OK
    1. 0.072 s
    2. 0.072 s
    3. 0.072 s
    4. 0.072 s

</details>

---





# 2. OddOccurencesInArray

### INSTRUCTIONS

"Painless" Difficulty.
Find value that occurs in odd number of elements.

<details>
  <summary>Show/hide details</summary>
  ...

  A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and 
  each element of the array can be paired with another element that has the same value, except for one 
  element that is left unpaired.

  For example, in array A such that:
  ```
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
  ```
  the elements at indexes 0 and 2 have value 9,
  the elements at indexes 1 and 3 have value 3,
  the elements at indexes 4 and 6 have value 9,
  the element at index 5 has value 7 and is unpaired.

  Write a function:
  ```
    function solution(A);
  ```
  that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

  For example, given array A such that:
  ```
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
  ```
  the function should return 7, as explained in the example above.

  Write an efficient algorithm for the following assumptions:
  - N is an odd integer within the range [1..1,000,000];
  - each element of array A is an integer within the range [1..1,000,000,000];
  - all but one of the values in A occur an even number of times.

  ---
</details>

### SUBMISSION
```
function solution(A) {
  const unpaired = {};
  for (let num of A) {
      if (unpaired[num]) delete unpaired[num];
      else unpaired[num] = true;
  }
  return parseInt(Object.keys(unpaired)[0]);
}


// USER INPUT TESTS
[6, 1000000000, 6]
[2, 3, 3, 5, 2]
[1, 7, 1, 1, 1]
[4]
[8, 11, 9, 18, 8, 18, 11]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N) or O(N*log(N))

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example test ✔ OK
    1. 0.072 s

  **Correctness tests**
  + simple test n=5 ✔ OK
    1. 0.072 s
  + simple test n=11 ✔ OK
    1. 0.072 s
  + extreme_single_item [42] ✔ OK
    1. 0.072 s
  + small random test n=201 ✔ OK
    1. 0.072 s
  + small random test n=601 ✔ OK
    1. 0.072 s

  **Performance tests**
  + medium random test n=2,001 ✔ OK
    1. 0.072 s
  + medium random test n=100,003 ✔ OK
    1. 0.152 s
  + big random test n=999,999, multiple repetitions ✔ OK
    1. 0.412 s
  + big random test n=999,999 ✔ OK
    1. 0.712 s

</details>

---