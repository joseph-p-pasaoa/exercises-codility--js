/* 02-ODDOCCURRENCESINARRAY
Find value that occurs in odd number of elements.
---

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and 
each element of the array can be paired with another element that has the same value, except for one 
element that is left unpaired.

For example, in array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.

Write a function:
  function solution(A);
that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:
  N is an odd integer within the range [1..1,000,000];
  each element of array A is an integer within the range [1..1,000,000,000];
  all but one of the values in A occur an even number of times.
*/


function solution(A) {
  const unpaired = {};
  for (let num of A) {
      if (unpaired[num]) delete unpaired[num];
      else unpaired[num] = true;
  }
  return parseInt(Object.keys(unpaired)[0]);
}


/*
USER INPUT TESTS
[6, 1000000000, 6]
[2, 3, 3, 5, 2]
[1, 7, 1, 1, 1]
[4]
[8, 11, 9, 18, 8, 18, 11]
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N) or O(N*log(N))

-- Example tests
▶example1
example test✔OK
1.0.072 sOK

-- Correctness tests
▶simple1
simple test n=5✔OK
1.0.072 sOK
▶simple2
simple test n=11✔OK
1.0.072 sOK
▶extreme_single_item
[42]✔OK
1.0.072 sOK
▶small1
small random test n=201✔OK
1.0.072 sOK
▶small2
small random test n=601✔OK
1.0.072 sOK

-- Performance tests
▶medium1
medium random test n=2,001✔OK
1.0.072 sOK
▶medium2
medium random test n=100,003✔OK
1.0.152 sOK
▶big1
big random test n=999,999, multiple repetitions✔OK
1.0.412 sOK
▶big2
big random test n=999,999✔OK
1.0.712 sOK
*/
