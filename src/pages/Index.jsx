import React from "react";

class ATM {
  // ... (rest of the ATM class code remains unchanged)
}

// ... (rest of the simulateUserAction and ATMApplication functions remains unchanged)

const IndexPage = () => {
  return <div>Welcome to the ATM application.</div>;
};

export default IndexPage;

function simulateUserAction(atm, transactionType, amount, threadName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (transactionType) {
        case "CHECK_BALANCE":
          atm.checkBalance(threadName);
          break;
        case "WITHDRAW":
          atm.withdrawMoney(amount, threadName);
          break;
        case "DEPOSIT":
          atm.depositMoney(amount, threadName);
          break;
        default:
          console.log("Invalid transaction type");
          break;
      }
      resolve();
    }, Math.random() * 1000);
  });
}

async function ATMApplication() {
  const atmMachine = new ATM(1000);

  // Simulating two user actions
  await Promise.all([simulateUserAction(atmMachine, "WITHDRAW", 500, "User1"), simulateUserAction(atmMachine, "DEPOSIT", 300, "User2")]);
}

ATMApplication();
