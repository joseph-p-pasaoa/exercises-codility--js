/* 04-PASSINGCARS
Count the number of passing cars on the road.
---
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
*/


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


/*
USER INPUT TESTS
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
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N)
collapse allExample tests
▶example
example test✔OK
1.0.068 sOK
collapse allCorrectness tests
▶single
single element✔OK
1.0.068 sOK
2.0.068 sOK
▶double
two elements✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
4.0.068 sOK
▶simple
simple test✔OK
1.0.068 sOK
▶small_random
random, length = 100✔OK
1.0.068 sOK
▶small_random2
random, length = 1000✔OK
1.0.068 sOK
collapse allPerformance tests
▶medium_random
random, length = ~10,000✔OK
1.0.128 sOK
▶large_random
random, length = ~100,000✔OK
1.0.100 sOK
▶large_big_answer
0..01..1, length = ~100,000✔OK
1.0.100 sOK
2.0.100 sOK
▶large_alternate
0101..01, length = ~100,000✔OK
1.0.104 sOK
2.0.100 sOK
▶large_extreme
large test with all 1s/0s, length = ~100,000✔OK
1.0.104 sOK
2.0.104 sOK
3.0.104 sOK
*/
