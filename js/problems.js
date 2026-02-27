// All problems data: statement, tests, function name
const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",

    description: `
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
`,

    functionName: "twoSum",

    functionSignature: "function twoSum(nums, target) { }",

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]"
      }
    ],

    testCases: [
      {
        input: [[2,7,11,15], 9],
        expectedOutput: [0,1]
      },
      {
        input: [[3,2,4], 6],
        expectedOutput: [1,2]
      }
    ]
  },

  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",

    description: `
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Linked lists are given as array representations for testing, e.g. [2,4,3] represents 2->4->3.
Return output as an array representation too.
`,

    functionName: "addTwoNumbers",

    functionSignature: "function addTwoNumbers(l1, l2) { }",

    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]"
      }
    ],

    testCases: [
      {
        input: [[2,4,3],[5,6,4]],
        expectedOutput: [7,0,8]
      },
      {
        input: [[0],[0]],
        expectedOutput: [0]
      },
      {
        input: [[9,9,9,9,9,9,9],[9,9,9,9]],
        expectedOutput: [8,9,9,9,0,0,0,1]
      }
    ]
  },

  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",

    description: `
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

If the total number of elements is even, return the average of the two medians.
`,

    functionName: "findMedianSortedArrays",

    functionSignature: "function findMedianSortedArrays(nums1, nums2) { }",

    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0"
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5"
      }
    ],

    testCases: [
      {
        input: [[1,3], [2]],
        expectedOutput: 2.0
      },
      {
        input: [[1,2], [3,4]],
        expectedOutput: 2.5
      },
      {
        input: [[0,0], [0,0]],
        expectedOutput: 0.0
      },
      {
        input: [[], [1]],
        expectedOutput: 1.0
      }
    ]
  },

  {
    id: 4,
    title: "Reverse String",
    difficulty: "Easy",

    description: `
Given a string s, return the string reversed.
`,

    functionName: "reverseString",

    functionSignature: "function reverseString(s) { }",

    examples: [
      {
        input: "s = 'hello'",
        output: "'olleh'"
      }
    ],

    testCases: [
      {
        input: ["hello"],
        expectedOutput: "olleh"
      },
      {
        input: ["abc"],
        expectedOutput: "cba"
      },
      {
        input: [""],
        expectedOutput: ""
      }
    ]
  },

  {
    id: 5,
    title: "Valid Parentheses",
    difficulty: "Easy",

    description: `
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
`,

    functionName: "isValidParentheses",

    functionSignature: "function isValidParentheses(s) { }",

    examples: [
      {
        input: "s = '()[]{}'",
        output: "true"
      },
      {
        input: "s = '(]'",
        output: "false"
      }
    ],

    testCases: [
      {
        input: ["()[]{}"],
        expectedOutput: true
      },
      {
        input: ["(]"],
        expectedOutput: false
      },
      {
        input: ["({[]})"],
        expectedOutput: true
      },
      {
        input: ["["],
        expectedOutput: false
      }
    ]
  },

  {
    id: 6,
    title: "Merge Two Sorted Arrays",
    difficulty: "Easy",

    description: `
Given two sorted integer arrays nums1 and nums2, merge them into a single
sorted array and return it.
`,

    functionName: "mergeSortedArrays",

    functionSignature: "function mergeSortedArrays(nums1, nums2) { }",

    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2,4]",
        output: "[1,2,3,4]"
      }
    ],

    testCases: [
      {
        input: [[1,3], [2,4]],
        expectedOutput: [1,2,3,4]
      },
      {
        input: [[1,2,3], [4,5,6]],
        expectedOutput: [1,2,3,4,5,6]
      },
      {
        input: [[], [1,2]],
        expectedOutput: [1,2]
      },
      {
        input: [[0,0,0], [0,0]],
        expectedOutput: [0,0,0,0,0]
      }
    ]
  },

  {
    id: 7,
    title: "Fizz Buzz",
    difficulty: "Easy",

    description: `
Given an integer n, return an array of strings answer (1-indexed) where:
- answer[i] == "FizzBuzz" if i is divisible by 3 and 5,
- answer[i] == "Fizz" if i is divisible by 3,
- answer[i] == "Buzz" if i is divisible by 5, and
- answer[i] == i (as a string) otherwise.
`,

    functionName: "fizzBuzz",

    functionSignature: "function fizzBuzz(n) { }",

    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]'
      }
    ],

    testCases: [
      {
        input: [3],
        expectedOutput: ["1","2","Fizz"]
      },
      {
        input: [5],
        expectedOutput: ["1","2","Fizz","4","Buzz"]
      },
      {
        input: [1],
        expectedOutput: ["1"]
      }
    ]
  },

  {
    id: 8,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",

    description: `
Given a string s, find the length of the longest substring without repeating characters.
`,

    functionName: "lengthOfLongestSubstring",

    functionSignature: "function lengthOfLongestSubstring(s) { }",

    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3"
      }
    ],

    testCases: [
      {
        input: ["abcabcbb"],
        expectedOutput: 3
      },
      {
        input: ["bbbbb"],
        expectedOutput: 1
      },
      {
        input: ["pwwkew"],
        expectedOutput: 3
      },
      {
        input: [""],
        expectedOutput: 0
      }
    ]
  },

  {
    id: 9,
    title: "Product of Array Except Self",
    difficulty: "Medium",

    description: `
Given an integer array nums, return an array answer such that answer[i] is equal to
the product of all the elements of nums except nums[i].
Solve it without using division and in O(n) time.
`,

    functionName: "productExceptSelf",

    functionSignature: "function productExceptSelf(nums) { }",

    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]"
      }
    ],

    testCases: [
      {
        input: [[1,2,3,4]],
        expectedOutput: [24,12,8,6]
      },
      {
        input: [[-1,1,0,-3,3]],
        expectedOutput: [0,0,9,0,0]
      },
      {
        input: [[2,3,4,5]],
        expectedOutput: [60,40,30,24]
      }
    ]
  },

  {
    id: 10,
    title: "Trapping Rain Water",
    difficulty: "Hard",

    description: `
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.
`,

    functionName: "trap",

    functionSignature: "function trap(height) { }",

    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6"
      }
    ],

    testCases: [
      {
        input: [[0,1,0,2,1,0,1,3,2,1,2,1]],
        expectedOutput: 6
      },
      {
        input: [[4,2,0,3,2,5]],
        expectedOutput: 9
      },
      {
        input: [[1,0,2,0,1]],
        expectedOutput: 2
      }
    ],
  }

  // baaki problems yahi add honge
];