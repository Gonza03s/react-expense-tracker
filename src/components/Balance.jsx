import { useGlobalState } from "../context/GlobalState";

function Balance() 
{
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acumulador, item) => (acumulador += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <h3>Your Balance:</h3>
      <h2 className="text-2xl font-bold">${total}</h2>
    </div>
  );
}

export default Balance;
