import Navbar from "./components/templates/dashboard/navbar";
import ExpenseIncome from "./components/templates/dashboard/right-sections/expense-income";
import GoPremium from "./components/templates/dashboard/right-sections/go-premium";
import SpendingHistory from "./components/templates/dashboard/right-sections/spending-history";
import MiddleSections from "./components/templates/middle-sections";
export default function Home() {
  return (
    <main className="relative text-black">
      <div className="flex lg:flex-row flex-col justify-stretch h-screen items-center bg-blue-20 relative overflow-x-clip overflow-y-auto">
        <Navbar />
        <MiddleSections />
        <div className="max-h-screen h-full sm:p-6 overflow-y-auto w-[25vw] sm:space-y-6 sticky top-0 right-0 bg-white hidden sm:flex sm:flex-col xl:justify-center">
          <ExpenseIncome />
          <SpendingHistory />
          <GoPremium />
        </div>
      </div>
    </main>
  );
}
