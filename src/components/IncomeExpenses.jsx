import React from "react";
import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amout) => (acc += amout), 0).toFixed(2);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0).toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
