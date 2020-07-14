/* 03-MISSINGINTEGER
Find the smallest positive integer that does not occur in a given sequence.
---

This is a demo task.

Write a function:
  function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that 
does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].
*/


function solution(A) {
  const values = new Set(A);
  for (let i = 1; i <= 1000001; i++) {
      if (values.has(i) === false) return i;
  }
}


/*
USER INPUT TESTS
[-5]
[2]
[0]
[1]
[3, 2, -1]
[2, 1, 3, 4, 6, 5]
[1, 0, -1]
[-1000000, -999999]
[7, 6, 5, 4, 3, 2, 1, 0]
[4, 3, 2, 0]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N) or O(N * log(N))

---

-- Example tests
▶example1
first example test✔OK
1.0.068 sOK
▶example2
second example test✔OK
1.0.068 sOK
▶example3
third example test✔OK
1.0.068 sOK

-- Correctness tests
▶extreme_single
a single element✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
4.0.068 sOK
▶simple
simple test✔OK
1.0.068 sOK
2.0.068 sOK
3.0.068 sOK
▶extreme_min_max_value
minimal and maximal values✔OK
1.0.068 sOK
2.0.068 sOK
▶positive_only
shuffled sequence of 0...100 and then 102...200✔OK
1.0.072 sOK
2.0.068 sOK
▶negative_only
shuffled sequence -100 ... -1✔OK
1.0.068 sOK

-- Performance tests
▶medium
chaotic sequences length=10005 (with minus)✔OK
1.0.088 sOK
2.0.092 sOK
3.0.096 sOK
▶large_1
chaotic + sequence 1, 2, ..., 40000 (without minus)✔OK
1.0.136 sOK
▶large_2
shuffled sequence 1, 2, ..., 100000 (without minus)✔OK
1.0.144 sOK
2.0.140 sOK
▶large_3
chaotic + many -1, 1, 2, 3 (with minus)✔OK
1.0.120 sOK
*/
