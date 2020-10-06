/* 01-DISTINCT
Compute number of distinct values in an array.
---

Write a function
  function solution(A);
that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:
  A[0] = 2    A[1] = 1    A[2] = 1
  A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [0..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].
*/


function solution(A) {
  const setA = new Set(A);
  return setA.size;
}


/*
USER INPUT TESTS
[-1, 0, 0, 0, 1, -10, -5, 100, 100]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N*log(N)) or O(N)

-- Example tests
▶example1
example test, positive answer✔OK
1.0.072 sOK

-- Correctness tests
▶extreme_empty
empty sequence✔OK
1.0.072 sOK
▶extreme_single
sequence of one element✔OK
1.0.072 sOK
2.0.072 sOK
▶extreme_two_elems
sequence of three distinct elements✔OK
1.0.072 sOK
▶extreme_one_value
sequence of 10 equal elements✔OK
1.0.072 sOK
▶extreme_negative
sequence of negative elements, length=5✔OK
1.0.072 sOK
▶extreme_big_values
sequence with big values, length=5✔OK
1.0.072 sOK
▶medium1
chaotic sequence of value sfrom [0..1K], length=100✔OK
1.0.072 sOK
▶medium2
chaotic sequence of value sfrom [0..1K], length=200✔OK
1.0.072 sOK
▶medium3
chaotic sequence of values from [0..10], length=200✔OK
1.0.072 sOK

-- Performance tests
▶large1
chaotic sequence of values from [0..100K], length=10K✔OK
1.0.096 sOK
▶large_random1
chaotic sequence of values from [-1M..1M], length=100K✔OK
1.0.144 sOK
▶large_random2
another chaotic sequence of values from [-1M..1M], length=100K✔OK
1.0.140 sOK
*/
