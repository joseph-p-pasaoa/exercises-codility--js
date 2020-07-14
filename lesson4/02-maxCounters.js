/* 02-MAXCOUNTERS
Calculate the values of counters after applying all alternating operations: increase counter by 1; 
set value of all counters to current maximum.
---

You are given N counters, initially set to 0, and you have two possible operations on them:
  increase(X) − counter X is increased by 1,
  max counter − all counters are set to the maximum value of any counter.

A non-empty array A of M integers is given. This array represents consecutive operations:
  if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
  if A[K] = N + 1 then operation K is max counter.

For example, given integer N = 5 and array A such that:
  A[0] = 3
  A[1] = 4
  A[2] = 4
  A[3] = 6
  A[4] = 1
  A[5] = 4
  A[6] = 4
the values of the counters after each consecutive operation will be:
  (0, 0, 1, 0, 0)
  (0, 0, 1, 1, 0)
  (0, 0, 1, 2, 0)
  (2, 2, 2, 2, 2)
  (3, 2, 2, 2, 2)
  (3, 2, 2, 3, 2)
  (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:
  function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers 
representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:
  - N and M are integers within the range [1..100,000];
  - each element of array A is an integer within the range [1..N + 1].
*/


function solution(N, A) {
  let offsetsHash = {};
  let highestValue = 0;
  let baseValue = 0;
  for (let num of A) {
      if (num === N + 1) {  // Checks if all counters should match highestValue
          baseValue = highestValue;
          offsetsHash = {};
      } else if (!offsetsHash[num]) { // Instantiates first offset of num
          offsetsHash[num] = 1;
          if (highestValue === baseValue) {
              highestValue += 1;
          }
      } else {  // Increments offset of num
          offsetsHash[num] += 1;
          const actualValue = offsetsHash[num] + baseValue;
          if (actualValue > highestValue) {
              highestValue = actualValue;
          }
      }
  }

  // Use finished offsetsHash to create and return outputArray
  let outputArray = [];
  for (let i = 0; i < N; i++) {
      if (offsetsHash[i + 1]) {
          outputArray.push(baseValue + offsetsHash[i + 1]);
      } else {
          outputArray.push(baseValue);
      }
  }
  return outputArray;
}


/*
USER INPUT TESTS
(3, [3, 3, 4, 1, 2, 1, 1])
(1, [2])
(1, [1])
(3, [4, 4, 4])
(3, [2, 4, 4])
(2, [1, 2])
(2, [2, 3])
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N + M)

---

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶extreme_small
all max_counter operations✔OK
1.0.072 sOK
▶single
only one counter✔OK
1.0.072 sOK
2.0.072 sOK
▶small_random1
small random test, 6 max_counter operations✔OK
1.0.072 sOK
▶small_random2
small random test, 10 max_counter operations✔OK
1.0.072 sOK

-- Performance tests
▶medium_random1
medium random test, 50 max_counter operations✔OK
1.0.072 sOK
▶medium_random2
medium random test, 500 max_counter operations✔OK
1.0.076 sOK
▶large_random1
large random test, 2120 max_counter operations✔OK
1.0.124 sOK
▶large_random2
large random test, 10000 max_counter operations✔OK
1.0.160 sOK
▶extreme_large
all max_counter operations✔OK
1.0.144 sOK
2.0.136 sOK
*/
