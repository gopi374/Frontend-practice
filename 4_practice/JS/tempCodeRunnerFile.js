
function ATM(amount, balance) {
  return new Promise((res, rej) => {
    console.log("fetching balance...");
    setTimeout(() => {
      let succes = "amount withdrawl sucessfully !!";
      let failed = "insufficient balance";
      if (balance > amount) {
        res(succes);
      } else {
        rej(failed);
      }
    }, 2000);
  });
}