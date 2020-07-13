/* 01-FROGJMP
(difficulty: painless)
Count minimal number of jumps from position X to Y.
---

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:
  function solution(X, Y, D);
that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:
  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:
  after the first jump, at position 10 + 30 = 40
  after the second jump, at position 10 + 30 + 30 = 70
  after the third jump, at position 10 + 30 + 30 + 30 = 100

Write an efficient algorithm for the following assumptions:
  X, Y and D are integers within the range [1..1,000,000,000];
  X ≤ Y.
*/


function solution(X, Y, D) {
    const distanceToY = Y - X;
    return Math.ceil(distanceToY / D);
}


/*
USER INPUT TESTS
(1, 1, 1)
(10, 20, 9)
(10, 20, 10)
(10, 20, 11)
(1, 15, 3)
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(1)

---

-- Example tests
▶example
example test✔OK
1.0.068 sOK

-- Correctness tests
▶simple1
simple test✔OK
1.0.072 sOK
2.0.068 sOK
▶simple2✔OK
1.0.068 sOK
2.0.068 sOK
▶extreme_position
no jump needed✔OK
1.0.068 sOK
2.0.068 sOK
▶small_extreme_jump
one big jump✔OK
1.0.068 sOK

-- Performance tests
▶many_jump1
many jumps, D = 2✔OK
1.0.068 sOK
▶many_jump2
many jumps, D = 99✔OK
1.0.068 sOK
▶many_jump3
many jumps, D = 1283✔OK
1.0.068 sOK
▶big_extreme_jump
maximal number of jumps✔OK
1.0.068 sOK
▶small_jumps
many small jumps✔OK
1.0.068 sOK
*/
