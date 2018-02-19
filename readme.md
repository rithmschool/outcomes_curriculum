# Technical Interview Checklist

The following is a list of topics that you should feel comfortable answering questions at a high level about.

## Front End Essentials

### HTML Fundamentals

- what is an element?
- what is an attribute?
- what is a `data` attribute?
- what is a `DOCTYPE`?
- what is accessibility? What kinds of elements and attributes are essential for basic accessibility? 
- What is a `meta` tag? What kind of information is placed in there?
- What are some important elements/attributes for SEO?

### CSS Fundamentals

#### Must know (syntax should NEVER be an issue) with 100% confidence

- Box Model
    - what is it? What does it take into account? 
    - margin
    - padding
    - border
    - width / height 
    - what is `box-sizing`?
- Positioning
    - compare / contrast fixed, relative, absolute
    - what is `z` index? What is stacking context?
- Selectors
    - id, element and class
    - adjacent vs sibling selectors
    - nested selectors
- What is specifcity? 
- Media Queries
    - how do you write one? 
- Resets
    - difference between normalize.css and reset.css? 
- Mobile first design 

#### Intermediate CSS - these are must knows for interviews, but make sure there is 100% confidence in the topics above

- CSS Transitions
- CSS Transforms
- CSS Animations
- @import
- SASS
    - What it is? How does it work?
    - Variables / Mixins / Nesting 
- What is a critical path?
- What is a CSS Sprite?
- Cross browser development
    - What are common differences?
- Flexbox
- Grid

### HTML + CSS Practice

- Replicate other sites
- Go through rithmschool css courses

### JavaScript Fundamentals

#### Essential / Must know concepts (syntax should NEVER be an issue with the following)

- loops (for/while)
- conditionals (if/else - know what a `switch` statement is)
- function expressions (`var foo=function(){}`)
- function declarations (`function foo(){}`)
- object access (bracket vs dot)
- object assignment (bracket vs dot)
- array access and assignment (bracket notation)
- primitive data types in JS
- falsey values in JS
- reference vs value 
- `NaN`
- `==` vs `===`
- how to see if something is an array (can't use typeof)
- what the `return` keyword does
- what a function returns when the `return` keyword is not present
- ternary operator
- essential array methods/properties"
    - push
    - pop
    - shift
    - unshift
    - slice
    - concat
    - splice
    - indexOf
    - lastIndexOf
    - join
    - length
    - includes (new to ES2015)
- essential string methods/properties
    - length    
    - toUpperCase
    - toLowerCase
    - concat
    - slice
    - split
    - trim
    - indexOf
    - charAt
    - charCodeAt
    - lastIndexOf
    - includes (new to ES2015)
- converting data types
    - string -> array
    - array -> string
    - string -> number
    - number -> string
    - any type -> boolean 

### JavaScript Fundamentals Practice

- [JS fundamentals course ](rithmschool.com/courses/javascript)
- [Codewars Problems](https://docs.google.com/document/d/1_rU5Z0Lc9yKJqXX9zAIIl1QdokPYlj5A6v3PJXXvWy4/edit  )

#### Next steps - these are must knows but only after the fundamentals

- higher order functions + callbacks
- forEach, map, filter
- some, every, find, findIndex
- hoisting
- timers (setInterval / setTimeout)
- IIFE
- DOM manipulation using jQuery or vanilla JS

#### Intermediate JS - these are must knows for interviews, but make sure there is 100% confidence in the topics above before continuing here

- testing with JavaScript (mocha/chai, jasmine, or jest)
- reduce
- promises
- es2015 (arrow functions, let/const, class keyword, destructuring, object shorthand notation)
- closures
- `this`
- `call` / `apply` / `bind`
- `new`
- Constructor Functions
- Prototypes
- Inheritance
- OOP Terms (abstraction, polymorphism, encapsulation)
- Event loop

#### Advanced JS - these topics may show up in more difficult interviews, good to know conceptually, wonderful if you can implement/use it

- currying
- composing
- JS performance / memory leaks
- more advanced testing (karma / jsdom)
- es2015 (generators, map, set)
- design patterns
- immutability

### Data Structures + Algorithms 

- Big O
- Recursion

### Essentials

- Array
- Linked List
- Queue
- Stack
- Binary Search Tree
- Hash Table
- Graph

### Less Frequent

- Binary Heap
- Priority Queue
- Deque
- Trie

### Very Rare, but good to know conceptually

- B-Tree
- Self Balancing Binary Trees (Red Black Tree / AVL Tree / Splay Tree)
- Bloom Filter

## Practice

[https://github.com/kdn251/interviews/tree/master/Company](https://github.com/kdn251/interviews/tree/master/Company)

- Complete the Rithm repl.it classroom
- Codefights
- Cracking the Coding Interview

### Conceptual Assessment (don't expect students to get through all of this)

  + What is HTTP?
  + What is REST?
  + What is a redirect? How does it work?
  + What is the difference between GET and POST?
  + What happens when you type in `https://www.rithmschool.com` in the URL bar and press enter?
  + What is the DOM?
  + What are some things to think about when building an API?
  + When would you use jQuery vs. vanilla JS?
  + What is a Single Page Application?
  + What is an API? How would you go about building one?
  + What is inheritance?
  + What is the difference between SQL and NoSQL?
  + What is primary key?
  + What is a foreign key?

### React Assessment

  + What is the difference between `props` and `state`
  + What is JSX?
  + What is a reducer?
  + What is a Higher Order Component?
  + What kinds of component testing have you done or heard of?
  + What are some ways of managing state in an application? 
  + What are some challenges with client side routing?
  + What happens when `setState` is invoked?
  + What are component life cycle methods?
  + What is a controlled input?

### API Assessment
  - Given an API, add additional endpoints

### JS Assessment

  + What is the event loop?
  + What are some ways to manage asynchronous code in JavaScript?
  + What is the difference between `var`, `let`, and `const`?
  + What is hoisting?
  + What is closure? Why/when would you use it?
  + What is partial application?
  + What is the keyword `this`?
  + What do `call`, `apply`, and `bind` do? What is the difference between these methods?
  + What is the `prototype` object?
  + What is a higher order function?
  + What is a pure function?

### CSS Assessment 

  + Build a business card mockup (no frameworks)

### Behavioral Homework (get Jeremy input)

  + Tell me about yourself
  + Tell me about a time you failed at something
  + If there's one feature you could add to any one application what would it be? Why?
  + Tell me about a time you worked on a team to solve a problem


## Systems Design

- David Malan Scaling
- CS50
- Success In Tech

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
