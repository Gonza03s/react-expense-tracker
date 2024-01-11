import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) 
{
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div className="">
        <span>${transaction.amount}</span>

        <button className="bg-cyan-950 mx-2 px-3 py-2 rounded hover:bg-cyan-800" 
        onClick={() => deleteTransaction(transaction.id)}>x</button>

      </div>
    </li>
  );
}


