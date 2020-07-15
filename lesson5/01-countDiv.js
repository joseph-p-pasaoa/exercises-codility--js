/* 01-COUNTDIV
Compute number of integers divisible by k in range [a..b].
---

Write a function:
  function solution(A, B, K);
that, given three integers A, B and K, returns the number of integers within the range [A..B] that are 
divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three 
numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:
  A and B are integers within the range [0..2,000,000,000];
  K is an integer within the range [1..2,000,000,000];
  A ≤ B.
*/


function solution(A, B, K) {
  const lowestMultipleFactor = Math.ceil(A / K);
  const highestMultipleFactor = Math.floor(B / K);
  return highestMultipleFactor - lowestMultipleFactor + 1;
}


/*
USER INPUT TESTS
[0, 10, 4]
[3, 9, 3]
[0, 0, 1]
[0, 2000000000, 1]
[40, 73, 7]
[100, 200, 100000]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(1)

-- Example tests
▶example
A = 6, B = 11, K = 2✔OK
1.0.068 sOK

-- Correctness tests
▶simple
A = 11, B = 345, K = 17✔OK
1.0.068 sOK
▶minimal
A = B in {0,1}, K = 11✔OK
1.0.068 sOK
2.0.068 sOK
▶extreme_ifempty
A = 10, B = 10, K in {5,7,20}✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
▶extreme_endpoints
verify handling of range endpoints, multiple runs✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
4.0.068 sOK
5.0.068 sOK
6.0.068 sOK

-- Performance tests
▶big_values
A = 100, B=123M+, K=2✔OK
1.0.068 sOK
▶big_values2
A = 101, B = 123M+, K = 10K✔OK
1.0.068 sOK
▶big_values3
A = 0, B = MAXINT, K in {1,MAXINT}✔OK
1.0.068 sOK
2.0.068 sOK
▶big_values4
A, B, K in {1,MAXINT}✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
4.0.068 sOK
*/
