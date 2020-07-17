/* 02-GENOMICRANGEQUERY
(Difficulty: Respectable)
Find the minimal nucleotide from a range of sequence DNA.
---

A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond 
to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is 
an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You 
are going to answer several queries of the form: What is the minimal impact factor of nucleotides 
contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. 
There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. 
The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in 
the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:
  P[0] = 2    Q[0] = 4
  P[1] = 5    Q[1] = 5
  P[2] = 0    Q[2] = 6

The answers to these M = 3 queries are as follows:
  The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact 
    factors are 3 and 2 respectively, so the answer is 2.
  The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the 
    answer is 4.
  The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular 
    nucleotide A whose impact factor is 1, so the answer is 1.

Write a function:
  function solution(S, P, Q);
that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q 
consisting of M integers, returns an array consisting of M integers specifying the consecutive answers 
to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:
  P[0] = 2    Q[0] = 4
  P[1] = 5    Q[1] = 5
  P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:
  N is an integer within the range [1..100,000];
  M is an integer within the range [1..50,000];
  each element of arrays P, Q is an integer within the range [0..N − 1];
  P[K] ≤ Q[K], where 0 ≤ K < M;
  string S consists only of upper-case English letters A, C, G, T.
*/


// FINAL SUBMISSION
function solution(S, P, Q) {
  // create tallies array to map occurences to indices
  const tallies = [];
  const tally = {A: 0, C: 0, G: 0, T: 0};
  for (let letter of S) {
      tallies.push({ ...tally });
      tally[letter] += 1;
  }
  tallies.push({ ...tally }); // adds one more tally to count last letter

  // helper func: uses indexed tallies to calc min factors of queries
  const calcQueryMinFactor = (startCount, endCount) => {
      if (endCount['A'] - startCount['A'] > 0) return 1;
      else if (endCount['C'] - startCount['C'] > 0) return 2;
      else if (endCount['G'] - startCount['G'] > 0) return 3;
      else return 4;
  } 

  // using helper func above, builds return array of minFactors
  const minFactors = [];
  for (let K = 0; K < P.length; K++) {
      const leftTally = tallies[P[K]];
      const rightTally = tallies[Q[K] + 1];
      minFactors.push(calcQueryMinFactor(leftTally, rightTally));
  }
  return minFactors;
}


/*
USER INPUT TESTS
('GTC', [0, 0, 2], [0, 2, 2])
('GGGCG', [0, 3], [2, 3])
('TTTA', [3], [3])
('CAGT', [1, 2], [1, 3])
---

ANALYSIS SUMMARY
The solution obtained perfect score.

Analysis
Detected time complexity:
O(N + M)

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶extreme_sinlge
single character string✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
4.0.068 sOK
▶extreme_double
double character string✔OK
1.0.068 sOK
2.0.068 sOK
3.0.072 sOK
4.0.068 sOK
▶simple
simple tests✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
▶small_length_string
small length simple string✔OK
1.0.072 sOK
▶small_random
small random string, length = ~300✔OK
1.0.072 sOK

-- Performance tests
▶almost_all_same_letters
GGGGGG..??..GGGGGG..??..GGGGGG✔OK
1.0.240 sOK
2.0.164 sOK
▶large_random
large random string, length✔OK
1.0.228 sOK
▶extreme_large
all max ranges✔OK
1.0.244 sOK
*/


/* PRIOR SUBMISSIONS */

// FIRST SUBMISSION
function solution(S, P, Q) {
  const factor = {
      A: 1,
      C: 2,
      G: 3,
      T: 4
  };
  const minFactors = [];
  for (let n = 0; n < P.length; n++) {
      const startIndex = P[n];
      const endIndex = Q[n];
      let minFactor = 4;
      for (let m = startIndex; m <= endIndex; m++) {
          const currentChar = S[m];
          const currentFactor = factor[currentChar];
          if (currentFactor < minFactor) {
              minFactor = currentFactor;
              if (minFactor === 1) break;
          }
      }
      minFactors.push(minFactor);
  }
  return minFactors;
}


/*
ANALYSIS SUMMARY
Task Score: 62%
Correctness: 100%
Performance: 0%
  The following issues have been detected: timeout errors.

Analysis
Detected time complexity:
O(N * M)

-- Example tests
▶example
example test✔OK
1.0.076 sOK

-- Correctness tests
▶extreme_sinlge
single character string✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
4.0.076 sOK
▶extreme_double
double character string✔OK
1.0.076 sOK
2.0.076 sOK
3.0.072 sOK
4.0.072 sOK
▶simple
simple tests✔OK
1.0.072 sOK
2.0.076 sOK
3.0.072 sOK
▶small_length_string
small length simple string✔OK
1.0.072 sOK
▶small_random
small random string, length = ~300✔OK
1.0.072 sOK

-- Performance tests
▶almost_all_same_letters
GGGGGG..??..GGGGGG..??..GGGGGG✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
1.6.000 sTIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
2.0.080 sOK
▶large_random
large random string, length✘TIMEOUT ERROR
running time: 4.440 sec., time limit: 0.656 sec.
1.4.440 sTIMEOUT ERROR, running time: 4.440 sec., time limit: 0.656 sec.
▶extreme_large
all max ranges✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
1.6.000 sTIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
*/


// SECOND SUBMISSION
function solution(S, P, Q) {
  const visitedIntervals = {
      // <starting-index>: [
      //      { end: <ending-index>, minFactor: <min-factor> }
      // ]
  };
  const factor = {
      A: 1,
      C: 2,
      G: 3,
      T: 4
  };
  const minFactors = [];
  for (let n = 0; n < P.length; n++) {
      const startIndex = P[n];
      const endIndex = Q[n];
      let minFactor = 4;
      for (let m = startIndex; m <= endIndex; m++) {
          // checks if any visitedIntervals begin at m
          if (visitedIntervals[m]) {
              let maxEndInsideIndices = m;
              let maxEndInsideIndicesMinFactor;
              
              // iterates visitedIntervals for largest interval within endIndex
              for (let endObj of visitedIntervals[m]) {
                  if (endObj[end] <= endIndex && endObj[end] > maxEndInsideIndices) {
                      
                      // if found, minFactor is derived from visitedInterval and
                      // m is moved to visitedInterval's end
                      maxEndInsideIndices = endObj[end];
                      m = endObj[end] - 1;
                      minFactor = endObj[minFactor];
                      if (minFactor === 1) break; // optimization break at lowest poss val
                      else continue;
                  }
              }
          }
          const currentChar = S[m];
          const currentFactor = factor[currentChar];
          if (currentFactor < minFactor) {
              minFactor = currentFactor;
              if (minFactor === 1) break; // optimization break at lowest poss val
          }
      }
      minFactors.push(minFactor);
  }
  return minFactors;
}


/*
ANALYSIS SUMMARY
Task Score: 62%
Correctness: 100%
Performance: 0%
  The following issues have been detected: timeout errors.

Analysis
Detected time complexity:
O(N * M)

-- Example tests
▶example
example test✔OK
1.0.072 sOK

-- Correctness tests
▶extreme_sinlge
single character string✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
4.0.072 sOK
▶extreme_double
double character string✔OK
1.0.068 sOK
2.0.072 sOK
3.0.072 sOK
4.0.072 sOK
▶simple
simple tests✔OK
1.0.072 sOK
2.0.072 sOK
3.0.072 sOK
▶small_length_string
small length simple string✔OK
1.0.068 sOK
▶small_random
small random string, length = ~300✔OK
1.0.072 sOK

-- Performance tests
▶almost_all_same_letters
GGGGGG..??..GGGGGG..??..GGGGGG✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
1.6.000 sTIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
2.0.084 sOK
▶large_random
large random string, length✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
1.6.000 sTIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
▶extreme_large
all max ranges✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
1.6.000 sTIMEOUT ERROR, Killed. Hard limit reached: 6.000 sec.
*/
