import React, { useState, useCallback, useMemo } from "react";
import { FaCar, FaMoneyBillWave, FaPercentage, FaClock } from "react-icons/fa";

const VehicleEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(36);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateEMI = useCallback(() => {
    const principal = parseFloat(loanAmount);
    const ratePerMonth = parseFloat(interestRate) / 12 / 100;
    const tenure = parseFloat(loanTenure);

    const emi =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, tenure)) /
      (Math.pow(1 + ratePerMonth, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    return {
      monthlyEMI: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  }, [loanAmount, interestRate, loanTenure]);

  const emiDetails = useMemo(() => calculateEMI(), [
    calculateEMI
  ]);

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const handleReset = () => {
    setLoanAmount(500000);
    setInterestRate(8.5);
    setLoanTenure(36);
    setIsCalculated(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm border border-gray-700">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-3">
              <FaCar className="text-4xl" />
              Vehicle Loan Calculator
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <label className="flex items-center gap-2 text-blue-400 mb-2">
                  <FaMoneyBillWave />
                  Loan Amount
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full mt-2 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <label className="flex items-center gap-2 text-blue-400 mb-2">
                  <FaPercentage />
                  Interest Rate (%)
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full mt-2 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <label className="flex items-center gap-2 text-blue-400 mb-2">
                  <FaClock />
                  Loan Tenure (months)
                </label>
                <input
                  type="range"
                  min="12"
                  max="84"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full mt-2 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Calculate EMI
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 h-fit">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Loan Summary</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-400">Monthly EMI</p>
                  <p className="text-3xl font-bold text-blue-400">
                    ₹ {isCalculated ? emiDetails.monthlyEMI : "0.00"}
                  </p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-400">Total Interest</p>
                  <p className="text-2xl font-bold text-green-400">
                    ₹ {isCalculated ? emiDetails.totalInterest : "0.00"}
                  </p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-400">Total Amount</p>
                  <p className="text-2xl font-bold text-red-400">
                    ₹ {isCalculated ? emiDetails.totalAmount : "0.00"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleEMICalculator;