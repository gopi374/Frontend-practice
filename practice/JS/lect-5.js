//closures -- A closure is a feature in JavaScript where an inner function remembers and has access to variables from its outer (enclosing) scope,
// even after the outer function has finished executing
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let funct = counter(); //closure() => count=0;
// funct(); //count++ =>1
// funct(); // count++ =>2
// funct();
// let funct2 = counter();
// funct2();
// funct2();
// funct2();

function bankAcc(initialBalance) {
  let bal = initialBalance;
  return {
    Deposit(value) {
      bal += value;
      console.log(`Deposited Amount :${value} ,Total Balance :${bal}`);
    },
    withdraw(value) {
      bal -= value;
      if (value <= bal) {
        console.log(`withdrawl Amount :${value} ,Total Balance :${bal}`);
      } else {
        console.log("Insufficient Amount");
      }
    },

    checkbal() {
      console.log(`Total Balance :${bal}`);
    },
  };
}

let user = bankAcc(200);
// user.Deposit(500);
// user.withdraw(1.38333333);
// user.checkbal();

function counter(value){
    let val = value;
    return{
        increment(){
            console.log(val++)
        },
        decrement(){
            console.log(val--)
        },

    }
}

function  vendingMachine(){
    let insert
   

    return{
        getSoda(val){
            initialSoda-=val;
            console.log(`Here is your Can !! , Remaining Cans - ${initialSoda}`)
        },
        getCoffee(countity){
            initialCoffee-=countity;
            console.log(`here is Your coffee !! , Remaining coffee - ${initialCoffee}`)
        },
        getChocolate(countity){
            initialChocolate-=countity;
            console.log(`here is Your chocolate !! , Remaining coffee - ${initialChocolate}`)
        },
        getInventory(){
            console.log(`Remaining Coffees - ${initialCoffee}`)
            console.log(`Remaining Chocolates - ${initialChocolate}`)
            console.log(`Remaining Soda - ${initialSoda}`)
        }
    }
}

let grocerry = vendingMachine(15,12,10)
grocerry.getChocolate(2)
grocerry.getInventory()