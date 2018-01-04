### Building an Approach

1. Read the problem statement - make sure you understand the problem! Don’t assume ANYTHING

2. Ask questions, ask more questions - assume NOTHING about your input! (“What do you get?”, “What do you return?”)

3. Sample input + output - if this is given, make sure you understand why - if it is not given, write it out! This is how you figure out edge cases, before it’s too late! Talk this through with the interviewer!

4. Take your time, but not too much time (it is ok to ask for a minute to just think on your own and report back)

5. Pseudocode! (Start at the top left of the whiteboard)

6. Talk more, write less (step 3, will give you some input and output)

7. Try to solve the problem, the easiest possible, simplest, way - unless you see something optimized right away.

8. If you can't begin to think of a solution - talk about ALL the things that won't work (go through your toolbelt of data structures, algorithms, and problem solving approaches)

9. Talk through that solution, ask if certain things are necessary!

10. Refactor + Try to optimize

Patterns you've seen so far

#### Frequency Count

- Build a data structure to see how often something appears or if that data structure already contains information
- Objects (Maps) are useful for this
- O(1) lookup
- You pick the key and value
- Use maps if your keys are NOT strings
- Sets 
- O(1) lookup
- Use when you don’t need a key and value
- Only use if you’re ok with duplicates being removed
- Great for seeing if it HAS appeared or not
- Space Complexity takes a hit - very very difficult to get constant space using frequency counts!
- Help us get O(n^2) or O(n log n) algorithms to O(n)

### Multiple Pointers 
- NEVER a guaranteed spot to place them!
- Plays nicely with a sorted list
- Constant space in general
- Useful for bringing space to O(1)
- Useful for finding beginning and ends or middles of a sequence 
- Useful for finding a single value in an ordered sequence
- Comparing items in an ordered sequence 

### Divide + Conquer
- Multi-branched recursive or iterative problem solving.
- Divide larger problem into smaller sub-problems until they are small enough to be solved directly.
- Base case prevents infinite recursion
- Ending a while or for loop prevents infinite looping
Examples:
Mergesort
Binary Tree Search (though the tree is already divided)

### Sliding Window
- For traversing an array/string, we start with a certain number of elements, creating a “window,” which is like a subarray/subset of the original array/string
- We add or remove elements from our window as we meet certain conditions for whatever we’re looking for
- Similar to two pointers but we are keeping track of a range instead of a start and end point
- Use whenever we need to find a sub array/string that matches a specific condition
- Example problems: max sum of a sub array with a given window size, longest string with distinct characters, etc.

### Dynamic Programming
A very high level concept which can involve some of the following patterns/techniques
Divide and conquer
Sliding window
Recursion
- Takes a problem and solves it by breaking it down into smaller subproblems and solving the subproblems
- By solving subproblems we can reduce our time complexity!
- One common way to solve DP problems is to use memoization (storing the result of an expensive function) usually with an object or map so that we do not have to recompute that function (how we bring fibonacci from 2^n to O(n)

### Runtimes

Arrays:

push/pop - O(1)
shift/unshift - O(n)
Access an element - O(1)
concat/slice/splice - O(n)
Finding - O(n) or O(log n) if the data is sorted

Objects + Maps + Sets
add/remove/access values - O(1)

Searching

Linear search - O(n)
Binary search - O(log n) -> data set MUST be sorted!
