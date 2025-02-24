import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FiSun, FiMoon, FiPrinter, FiShare2, FiRefreshCw } from "react-icons/fi";

const LoanCalculator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const calculateEMI = useMemo(() => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const tenure = loanTenure * 12;
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenure)) / (Math.pow(1 + ratePerMonth, tenure) - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    return {
      monthlyEMI: emi,
      totalInterest,
      totalAmount,
    };
  }, [loanAmount, interestRate, loanTenure]);

  const pieChartData = [
    { name: "Principal", value: loanAmount, color: "#3B82F6" },
    { name: "Interest", value: calculateEMI.totalInterest, color: "#10B981" }
  ];

  const generateBarData = () => {
    const data = [];
    const monthlyPrincipal = loanAmount / (loanTenure * 12);
    const monthlyInterest = calculateEMI.monthlyEMI - monthlyPrincipal;

    for (let i = 1; i <= loanTenure * 12; i += 12) {
      data.push({
        year: `Year ${Math.ceil(i / 12)}`,
        Principal: monthlyPrincipal * 12,
        Interest: monthlyInterest * 12
      });
    }
    return data;
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">EMI Loan Calculator</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Print report"
            >
              <FiPrinter size={24} />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Share results"
            >
              <FiShare2 size={24} />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Reset calculator"
            >
              <FiRefreshCw size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Loan Amount</label>
                <input
                  type="range"
                  min="1000"
                  max="1000000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-2 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  min="1000"
                  max="1000000"
                />
              </div>

              <div>
                <label className="block mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  min="1"
                  max="20"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block mb-2">Loan Tenure (Years)</label>
                <select
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {[...Array(30)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} Years</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly EMI:</span>
                  <span className="font-semibold">${calculateEMI.monthlyEMI.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest:</span>
                  <span className="font-semibold">${calculateEMI.totalInterest.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">${calculateEMI.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Payment Breakdown</h2>
            
            <div className="h-[300px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={generateBarData()}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Principal" fill="#3B82F6" stackId="a" />
                  <Bar dataKey="Interest" fill="#10B981" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;