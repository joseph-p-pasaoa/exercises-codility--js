/* 03-TAPEEQUILIBRIUM
(difficulty: painless)
Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
---

A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: 
A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: 
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum 
of the second part.

For example, consider array A such that:
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3

We can split this tape in four places:
  P = 1, difference = |3 − 10| = 7
  P = 2, difference = |4 − 9| = 5
  P = 3, difference = |6 − 7| = 1
  P = 4, difference = |10 − 3| = 7

Write a function:
  function solution(A);
that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [2..100,000];
  each element of array A is an integer within the range [−1,000..1,000].
*/


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


/*
USER INPUT TESTS
[-11, 11]
[-3, -2, -1]
[4, 0, 0, 7]
[2, 2, 2, 4, 2]
[1000, -999, 1000]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N)

---

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶double
two elements✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
▶simple_positive
simple test with positive numbers, length = 5✔OK
1.0.068 sOK
2.0.072 sOK
▶simple_negative
simple test with negative numbers, length = 5✔OK
1.0.072 sOK
2.0.072 sOK
▶simple_boundary
only one element on one of the sides✔OK
1.0.072 sOK
2.0.068 sOK
3.0.072 sOK
4.0.072 sOK
▶small_random
random small, length = 100✔OK
1.0.072 sOK
▶small_range
range sequence, length = ~1,000✔OK
1.0.072 sOK
▶small
small elements✔OK
1.0.072 sOK

-- Performance tests
▶medium_random1
random medium, numbers from 0 to 100, length = ~10,000✔OK
1.0.084 sOK
▶medium_random2
random medium, numbers from -1,000 to 50, length = ~10,000✔OK
1.0.084 sOK
▶large_ones
large sequence, numbers from -1 to 1, length = ~100,000✔OK
1.0.104 sOK
2.0.104 sOK
▶large_random
random large, length = ~100,000✔OK
1.0.112 sOK
2.0.112 sOK
▶large_sequence
large sequence, length = ~100,000✔OK
1.0.100 sOK
▶large_extreme
large test with maximal and minimal values, length = ~100,000✔OK
1.0.112 sOK
2.0.112 sOK
3.0.108 sOK
*/
