import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components//transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import {ExpenseChart} from "./components/ExpenseChart";
import  './container.css'

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white p-10 flex justify-center items-center h-screen overflow-y-auto ">
        <div className="container mx-auto w-full sm:w-3/5  md:w-2/5 lg:w-2/3 xl:w-4/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex flex-col justify-between lg:flex-row">
            <div className="my-auto">
              <h1 className="text-4xl tracking-wide font-bold text  text-center text-indigo-600 xl:py-6 ">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
              <div className="flex flex-col lg:my-16">
                <ExpenseChart />
                <TransactionList />
              </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
