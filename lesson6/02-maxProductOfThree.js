/* 02-MAXPRODUCTOFTHREE
Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
---

A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:
  (0, 1, 2), product is −3 * 1 * 2 = −6
  (1, 2, 4), product is 1 * 2 * 5 = 10
  (2, 4, 5), product is 2 * 5 * 6 = 60

Your goal is to find the maximal product of any triplet.

Write a function:
  function solution(A);
that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:
  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [3..100,000];
  each element of array A is an integer within the range [−1,000..1,000].
*/


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


/*
USER INPUT TESTS
[-5, -5, 5, 4]
[-5, -5, -3, 3, 4, 5]
[-5, -3, -3, 3, 4, 5]
[-5, -4, -3, 4, 4, 5]
[-10, -7, -6, -5, -4]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N * log(N))

-- Example tests
▶example
example test✔OK
1.0.076 sOK

-- Correctness tests
▶one_triple
three elements✔OK
1.0.076 sOK
2.0.076 sOK
3.0.076 sOK
▶simple1
simple tests✔OK
1.0.076 sOK
2.0.076 sOK
3.0.072 sOK
4.0.072 sOK
▶simple2
simple tests✔OK
1.0.076 sOK
2.0.072 sOK
3.0.072 sOK
▶small_random
random small, length = 100✔OK
1.0.076 sOK

-- Performance tests
▶medium_range
-1000, -999, ... 1000, length = ~1,000✔OK
1.0.088 sOK
▶medium_random
random medium, length = ~10,000✔OK
1.0.120 sOK
▶large_random
random large, length = ~100,000✔OK
1.0.216 sOK
▶large_range
2000 * (-10..10) + [-1000, 500, -1]✔OK
1.0.140 sOK
▶extreme_large
(-2, .., -2, 1, .., 1) and (MAX_INT)..(MAX_INT), length = ~100,000✔OK
1.0.132 sOK
2.0.124 sOK
*/
