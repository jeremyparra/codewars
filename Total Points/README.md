# Total Points

## The Problem
Our football team finished the championship. The result of each match look like "x : y". Results of all matches are recorded in the array.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

if x>y: 3 points<br/>
if x=y: 1 point<br/>
f x<y: 0 point<br/>



## The Solution

I ran the array through a For loop which looked at the secondary arrays inside of the _array[i]_ location. I returned the total points after the For loop completed.

