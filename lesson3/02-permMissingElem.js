/* 02-PERMMISSINGELEM
(difficulty: painless)
Find the missing element in a given permutation.
---

An array A consisting of N different integers is given. The array contains integers in the 
range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:
  function solution(A);
that, given an array A, returns the value of the missing element.

For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [0..100,000];
  the elements of A are all distinct;
  each element of array A is an integer within the range [1..(N + 1)].
*/


function solution(A) {
  let overflow = 0;
  for (let i = 0; i < A.length; i++) {
      overflow += A[i];
      overflow -= i + 1;
  }
  return A.length - overflow + 1;
}


/*
USER INPUT TESTS
[]
[2]
[3, 2, 4]
[2, 5, 1, 3]
[1, 2, 3, 4, 6]
[6, 5, 4, 3, 1]
[2, 3, 4, 5, 6]
[6, 5, 4, 3, 2]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N) or O(N * log(N))

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶empty_and_single
empty list and single element✔OK
1.0.068 sOK
2.0.068 sOK
▶missing_first_or_last
the first or the last element is missing✔OK
1.0.068 sOK
2.0.068 sOK
▶single
single element✔OK
1.0.072 sOK
2.0.072 sOK
▶double
two elements✔OK
1.0.072 sOK
2.0.072 sOK
3.0.068 sOK
▶simple
simple test✔OK
1.0.072 sOK

-- Performance tests
▶medium1
medium test, length = ~10,000✔OK
1.0.080 sOK
▶medium2
medium test, length = ~10,000✔OK
1.0.080 sOK
▶large_range
range sequence, length = ~100,000✔OK
1.0.108 sOK
2.0.096 sOK
3.0.096 sOK
▶large1
large test, length = ~100,000✔OK
1.0.108 sOK
▶large2
large test, length = ~100,000✔OK
1.0.100 sOK
*/
