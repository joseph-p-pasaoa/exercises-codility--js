# 1. FrogRiverOne
Difficulty: Painless.
Find the earliest time when a frog can jump to the other side of a river.

<details>
<summary>INSTRUCTIONS</summary>

---

A small frog wants to get to the other side of a river. The frog is initially located on one bank of 
the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree 
onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the 
position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog 
can cross only when leaves appear at every position across the river from 1 to X (that is, we want to 
find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume 
that the speed of the current in the river is negligibly small, i.e. the leaves do not change their 
positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every 
position across the river.

Write a function:
  function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time 
when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
</details>

---

```
// SUBMISSION

function solution(X, A) {
  const leavesPresent = {};
  let uniqueCounter = 0;
  for (let i = 0; i < A.length; i++) {
      if (!leavesPresent[A[i]]) {
          leavesPresent[A[i]] = true;
          uniqueCounter += 1;
      }
      if (uniqueCounter >= X) return i;
  }
  return -1;
}
```

```
// USER INPUT TESTS

(1, [1])
(2, [2, 2])
(4, [3])
(4, [4, 2, 2, 3, 1, 2])
```

---

## ANALYSIS SUMMARY
The solution obtained perfect score.

Detected time complexity:
O(N)

---

**Example tests**
+ example test ✔ OK
  - 1.0.068s OK

**Correctness tests**
+ simple test ✔ OK
  - 1.0.068s OK
+ single element ✔ OK
  - 1.0.068s OK
  - 2.0.068s OK
+ frog never across the river ✔ OK
  - 1.0.068s OK
  - 2.0.068s OK
  - 3.0.068s OK
+ 3 random permutation, X = 50 ✔ OK
  - 1.0.068s OK
+ 5 random permutation, X = 60 ✔ OK
  - 1.0.068s OK
+ all leaves in the same place ✔ OK
  - 1.0.072s OK
  - 2.0.068s OK

**Performance tests**
+ 6 and 2 random permutations, X = ~5,000 ✔ OK
  - 1.0.084s OK
  - 2.0.080s OK
+ arithmetic sequences, X = 5,000 ✔ OK
  - 1.0.076s OK
+ 10 and 100 random permutation, X = ~10,000 ✔ OK
  - 1.0.108s OK
  - 2.0.104s OK
+ permutation tests ✔ OK
  - 1.0.112s OK
  - 2.0.116s OK
+ arithmetic sequences, X = 30,000 ✔ OK
  - 1.0.096s OK
