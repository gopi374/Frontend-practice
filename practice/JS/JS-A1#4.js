console.log("----------------task 5--------------------------------------")

//task--5  Check which numbers from 2 to 5 divide n
function check(n) {
  for (let i = 2; i <= 5; i++) {
    if (n % i == 0) {
      console.log(i + ": yes");
    } else {
      console.log(i + ": no");
    }
  }
}
check(15);
console.log("-----------------task 6-------------------------------------")

//Task 6 -- Print numbers from 1 to 15. If divisible by 5, print "Hello"
for (let i = 1; i <= 15; i++) {
  if (i % 5 == 0) {
    console.log("Hello");
  } else {
    console.log(i);
  }
}
console.log("----------------task 7--------------------------------------")


//task--7 Given a number n. Display the following in the console.
function printOddEven(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i + ":even");
    } else {
      console.log(i + ":odd");
    }
  }
}
printOddEven(5);
console.log("--------------------task 8----------------------------------")

//task--8 Given a number n, display all the numbers that divide n in the console.
function divisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
divisors(10);
console.log("------------------------task 9------------------------------")

//task--9 Given a number n, display all following pattern in the console.
function printSquares(n) {
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    let type = square % 2 === 0 ? "even" : "odd";
    console.log("Square of " + i + " = " + square + " : " + type);
  }
}
printSquares(5);
console.log("-------------------------task 10-----------------------------")

//task--10 Given n as input, print on the console Good if n>=75, Average if n is greater
// than equal to 50 but less than 75 and Poor otherwise.
function Performance(n) {
  if (n >= 75) {
    console.log("Good");
  } else if (n >= 50 && n < 75) {
    console.log("Average");
  } else {
    console.log("Poor");
  }
}
Performance(81);
console.log("-------------------------task 11-----------------------------")

//task--11 Given n as input, print on the console Grade A if n is between 90 and 100,
//Grade B if it is between 75 and 90, Grade C if it is between 50 and 75 and Grade
//D otherwise.
function checkGrade(n) {
  if (n >= 90 && n <= 100) {
    console.log("Grade A");
  } else if (n >= 75 && n < 90) {
    console.log("Grade B");
  } else if (n >= 50 && n < 75) {
    console.log("Grade C");
  } else {
    console.log("Grade D");
  }
}
checkGrade(45);
console.log("------------------------task 12------------------------------")

//task--12  Given a number n, display the pattern shown below in the console.
function pattern(n) {
  let current = '';
  for (let i = 1; i <= n; i++) {
    current += (i % 2 === 1 ? 'X' : 'Y');
    console.log(current);
  }
}
pattern(5)
console.log("------------------------task 13------------------------------")

// task--13  Given a number n, display the pattern shown below in the console.
function pattern13(n) {
  const chars = ['A', 'B', 'C'];
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += chars[(i - 1) % 3];
  }
  console.log(result);
}
pattern13(5)
console.log("---------------------task 14---------------------------------")

//task--14 Given a number n, display the pattern shown below in the console.
function pattern14(n) {
  let result = '';
  const chars = ['P', 'Q', 'R'];
  for (let i = 1; i <= n; i++) {
    result += chars[(i - 1) % 3] + i;
  }
  console.log(result);
}
pattern14(5)
console.log("--------------------task 15----------------------------------")

//task--15 Given n, print the pattern on the console.
function pattern15(n) {
  let result = '';
  const lastOdd = n % 2 == 0 ? n - 1 : n;
  for (let i = 1; i <= lastOdd; i += 2) {
    result += i;
    if (i < lastOdd) result += '#';
  }
  console.log(result);
}
pattern15(5)
console.log("---------------------task 16---------------------------------")

//task--16 Given n as input, print the following pattern -1+2-3+4-5+ .... (+/-)n on the console
function task16(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      result += '-' + i;
    } else {
      result += (i % 2 === 0 ? '+' : '-') + i;
    }
  }
  console.log(result);
}
task16(5)
console.log("------------------------------------------------------")
