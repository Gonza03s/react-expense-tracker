import {useState} from "react"
import {useGlobalState} from '../../context/GlobalState'

function TransactionForm() 
{
  const { addTransaction } = useGlobalState()

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [firstTransaction, setFirstTransaction] = useState(true)

  const onSubmit = (e)=>
  {
    e.preventDefault();
/* 
      if(amount == 0 || isNaN(amount)) return; 

     if(firstTransaction && amount < 0)
     {
      alert('the first transaction cannot be negative');
      return;
     }  */

     if (amount === 0 || isNaN(amount) || (firstTransaction && amount < 0)) 
     {
        if (firstTransaction && amount < 0) 
        {
          alert('The first transaction cannot be negative.');
        }
       return;
      }

     setFirstTransaction(false);

    addTransaction(
      {
        id: window.crypto.randomUUID(),
        description,
        amount: +amount //convierte a number
      });


      setAmount(0);
      setDescription('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <input className="bg-zinc-600 text-white px-3 py-2 rounded-block mb-2 my-6  w-full" 
        required
        onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter a description" 
        value={description} />

        <input className="bg-zinc-600 text-white px-3 py-2 rounded-block mb-2 my-2  w-full" 

        onChange={(e)=>setAmount(e.target.value)} type="text" step="0.1" placeholder="Enter an Amount"
        value={amount} />

        <button className="bg-indigo-700 hover:bg-indigo-900 transition-colors mt-2 text-white px-3 py-2 rounded-lg block mb-2 w-full" 
        type='submit'>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
