/* 03-MINAVGTWOSLICE
Find the minimal average of any slice containing at least two elements.
---

A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:
  A[0] = 4
  A[1] = 2
  A[2] = 2
  A[3] = 5
  A[4] = 1
  A[5] = 5
  A[6] = 8
contains the following example slices:
  slice (1, 2), whose average is (2 + 2) / 2 = 2;
  slice (3, 4), whose average is (5 + 1) / 2 = 3;
  slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.

The goal is to find the starting position of a slice whose average is minimal.

Write a function:
  function solution(A);
that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:
  A[0] = 4
  A[1] = 2
  A[2] = 2
  A[3] = 5
  A[4] = 1
  A[5] = 5
  A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [2..100,000];
  each element of array A is an integer within the range [−10,000..10,000].
*/


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


/*
USER INPUT TESTS
[0, 0]
[1, 1]
[-9997, -9998, -9999, -10000]
[100, 50, -50, 100]
[3, 2, 3, 4, 4, 3, 1, 2]
[7, 6, 6, 9, 5, 5, 5, 5, 5, 8]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N)

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶double_quadruple
two or four elements✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
4.0.072 sOK
▶simple1
simple test, the best slice has length 3✔OK
1.0.072 sOK
2.0.072 sOK
▶simple2
simple test, the best slice has length 3✔OK
1.0.072 sOK
▶small_random
random, length = 100✔OK
1.0.072 sOK
▶medium_range
increasing, decreasing (legth = ~100) and small functional✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK

-- Performance tests
▶medium_random
random, N = ~700✔OK
1.0.072 sOK
▶large_ones
numbers from -1 to 1, N = ~100,000✔OK
1.0.104 sOK
2.0.100 sOK
▶large_random
random, N = ~100,000✔OK
1.0.116 sOK
▶extreme_values
all maximal values, N = ~100,000✔OK
1.0.112 sOK
2.0.112 sOK
3.0.116 sOK
▶large_sequence
many seqeneces, N = ~100,000✔OK
1.0.100 sOK
2.0.104 sOK
*/
