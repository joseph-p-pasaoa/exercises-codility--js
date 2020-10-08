# Lesson 6: Sorting
1. [Distinct](#1-distinct)
2. [MaxProductOfThree](#2-maxproductofthree)

---





# 1. Sorting

### INSTRUCTIONS
"Painless" Difficulty.
Compute number of distinct values in an array.

<details>
  <summary>Show/hide details</summary>
  ...

  Write a function
  ```
  function solution(A);
  ```
  that, given an array A consisting of N integers, returns the number of distinct values in array A.

  For example, given array A consisting of six elements such that:
  ```
  A[0] = 2    A[1] = 1    A[2] = 1
  A[3] = 2    A[4] = 3    A[5] = 1
  ```
  the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

  Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [0..100,000];
  - each element of array A is an integer within the range [−1,000,000..1,000,000].

  ---
</details>

### SUBMISSION
```
function solution(A) {
  const setA = new Set(A);
  return setA.size;
}


// USER INPUT TESTS
[-1, 0, 0, 0, 1, -10, -5, 100, 100]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N*log(N)) or O(N)

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example1: example test, positive answer ✔ OK
    1.0.072 s

  **Correctness tests**
  + extreme_empty: empty sequence ✔ OK
    1.0.072 s
  + extreme_single: sequence of one element ✔ OK
    1.0.072 s
    2.0.072 s
  + extreme_two_elems: sequence of three distinct elements ✔ OK
    1.0.072 s
  + extreme_one_value: sequence of 10 equal elements ✔ OK
    1.0.072 s
  + extreme_negative: sequence of negative elements, length=5 ✔ OK
    1.0.072 s
  + extreme_big_values: sequence with big values, length=5 ✔ OK
    1.0.072 s
  + medium1: chaotic sequence of value sfrom [0..1K], length=100 ✔ OK
    1.0.072 s
  + medium2: chaotic sequence of value sfrom [0..1K], length=200 ✔ OK
    1.0.072 s
  + medium3: chaotic sequence of values from [0..10], length=200 ✔ OK
    1.0.072 s

  **Performance tests**
  + large1: chaotic sequence of values from [0..100K], length=10K ✔ OK
    1.0.096 s
  + large_random1: chaotic sequence of values from [-1M..1M], length=100K ✔ OK
    1.0.144 s
  + large_random2: another chaotic sequence of values from [-1M..1M], length=100K ✔ OK
    1.0.140 s

</details>

---





# 2. MaxProductOfThree

### INSTRUCTIONS
"Painless" Difficulty.
Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

<details>
  <summary>Show/hide details</summary>
  ...

  A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

  For example, array A such that:
  ```
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
  ```
  contains the following example triplets:
  ```
  (0, 1, 2), product is −3 * 1 * 2 = −6
  (1, 2, 4), product is 1 * 2 * 5 = 10
  (2, 4, 5), product is 2 * 5 * 6 = 60
  ```

  Your goal is to find the maximal product of any triplet.

  Write a function:
  ```
  function solution(A);
  ```
  that, given a non-empty array A, returns the value of the maximal product of any triplet.

  For example, given array A such that:
  ```
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
  ```
  the function should return 60, as the product of triplet (2, 4, 5) is maximal.

  Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [3..100,000];
  - each element of array A is an integer within the range [−1,000..1,000].

  ---
</details>

### SUBMISSION
```
function solution(A) {
  const sorted = A.sort((a, b) => parseInt(a) - parseInt(b));
  const extremes = sorted.splice(0, 2);
  while (sorted.length > 0 && extremes.length < 5) {
      extremes.push(sorted.pop());
  }

  let maxProduct = -Infinity;
  for (let i = 0; i < 3; i++) {

      for (let j = i + 1; j < 4; j++) {
          if (!extremes[j]) continue;

          for (let k = j + 1; k < 5; k++) {
              if (!extremes[k]) continue;

              const [x, y, z] = [extremes[i], extremes[j], extremes[k]];
              const currProduct = x * y * z;
              maxProduct = Math.max(maxProduct, currProduct);
          }
      }
  }

  return maxProduct;
}


// USER INPUT TESTS
[-5, -5, 5, 4]
[-5, -5, -3, 3, 4, 5]
[-5, -3, -3, 3, 4, 5]
[-5, -4, -3, 4, 4, 5]
[-10, -7, -6, -5, -4]
```

### ANALYSIS SUMMARY
+ The solution obtained perfect score.
+ Detected time complexity: O(N * log(N))

<details>
  <summary>Show/hide details</summary>
  ...

  **Example tests**
  + example: example test ✔ OK
    1.0.076 s

  **Correctness tests**
  + one_triple: three elements ✔ OK
    1.0.076 s
    2.0.076 s
    3.0.076 s
  + simple1: simple tests ✔ OK
    1.0.076 s
    2.0.076 s
    3.0.072 s
    4.0.072 s
  + simple2: simple tests ✔ OK
    1.0.076 s
    2.0.072 s
    3.0.072 s
  + small_random: random small, length = 100 ✔ OK
    1.0.076 s

  **Performance tests**
  + medium_range: -1000, -999, ... 1000, length = ~1,000 ✔ OK
    1.0.088 s
  + medium_random: random medium, length = ~10,000 ✔ OK
    1.0.120 s
  + large_random: random large, length = ~100,000 ✔ OK
    1.0.216 s
  + large_range: 2000 * (-10..10) + [-1000, 500, -1] ✔ OK
    1.0.140 s
  + extreme_large: (-2, .., -2, 1, .., 1) and (MAX_INT)..(MAX_INT), length = ~100,000 ✔ OK
    1.0.132 s
    2.0.124 s

</details>

---
