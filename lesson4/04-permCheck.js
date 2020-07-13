/* 02-PERMCHECK
Check whether array A is a permutation.
---

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:
  A[0] = 4
  A[1] = 1
  A[2] = 3
  A[3] = 2
is a permutation, but array A such that:
  A[0] = 4
  A[1] = 1
  A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:
  function solution(A);
that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:
  A[0] = 4
  A[1] = 1
  A[2] = 3
  A[3] = 2
the function should return 1.

Given array A such that:
  A[0] = 4
  A[1] = 1
  A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [1..1,000,000,000].
*/


function solution(A) {
  const discovered = new Set();
  const max = A.length;
  for (let num of A) {
      if (num > max) return 0;
      if (discovered.has(num)) return 0;
      discovered.add(num);
  }
  return 1;
}


/*
USER INPUT TESTS
[2]
[1000000000]
[1]
[2, 2]
[4, 2, 1, 3]
[1, 2, 3, 4, 5, 1]
[1, 2, 7, 4, 5, 6]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N) or O(N * log(N))

---

-- Example tests
▶example1
the first example test✔OK
1.0.068 sOK
▶example2
the second example test✔OK
1.0.068 sOK

-- Correctness tests
▶extreme_min_max
single element with minimal/maximal value✔OK
1.0.068 sOK
2.0.068 sOK
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
▶antiSum1
total sum is correct, but it is not a permutation, N <= 10✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
4.0.068 sOK
▶small_permutation
permutation + one element occurs twice, N = ~100✔OK
1.0.068 sOK
2.0.068 sOK
▶permutations_of_ranges
permutations of sets like [2..100] for which the anwsers should be false✔OK
1.0.068 sOK
2.0.072 sOK
3.0.072 sOK

-- Performance tests
▶medium_permutation
permutation + few elements occur twice, N = ~10,000✔OK
1.0.092 sOK
2.0.096 sOK
▶antiSum2
total sum is correct, but it is not a permutation, N = ~100,000✔OK
1.0.104 sOK
2.0.140 sOK
▶large_not_permutation
permutation + one element occurs three times, N = ~100,000✔OK
1.0.140 sOK
2.0.144 sOK
▶large_range
sequence 1, 2, ..., N, N = ~100,000✔OK
1.0.140 sOK
2.0.140 sOK
▶extreme_values
all the same values, N = ~100,000✔OK
1.0.068 sOK
2.0.096 sOK
3.0.068 sOK
▶various_permutations
all sequences are permutations✔OK
1.0.068 sOK
2.0.068 sOK
3.0.096 sOK
4.0.140 sOK
5.0.140 sOK
*/
