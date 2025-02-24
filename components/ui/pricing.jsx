import React from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

const PricingPlans = () => {
  const plans = [
    { name: 'Intro', price: '$29', description: 'For small businesses looking to get started', features: ['1GB Storage', 'Email Support', '10 Integrations', 'Basic Analytics', '24/7 Access'], popular: false },
    { name: 'Base', price: '$59', description: 'For growing businesses that need more storage', features: ['5GB Storage', '24/7 Support', '30 Integrations', 'Advanced Analytics', 'Team Accounts'], popular: false },
    { name: 'Popular', price: '$99', description: 'For thriving businesses that need top performance', features: ['10GB Storage', 'Priority Email Support', '50 Integrations', 'Real-time Analytics', 'Unlimited Teams'], popular: true },
    { name: 'Premium', price: '$199', description: 'For large businesses requiring advanced features', features: ['Unlimited Storage', 'Dedicated Support', 'Unlimited Integrations', 'Machine Learning Capabilities', 'Custom Solutions'], popular: false }
  ];

  return (
    <div className='px-8 py-16 max-w-screen-2xl mx-auto bg-gray-200 text-gray-800'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-800'>Get an attractive price here</h2>
        <p className='text-lg mt-4 text-gray-600'>Find the perfect plan for your business with our wide range of options.</p>
      </div>
      <div className='grid gap-8 md:grid-cols-4 grid-cols-1'>
        {plans.map((plan) => (
          <div className={`p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${plan.popular ? 'bg-blue-100 border-l-4 border-blue-500' : 'bg-white'}`} key={plan.name}>
            <h3 className={`text-2xl font-semibold mb-4 ${plan.popular ? 'text-blue-600' : 'text-gray-800'}`}>{plan.name}</h3>
            <p className='text-5xl font-bold mb-4'>{plan.price}</p>
            <p className='mb-6'>{plan.description}</p>
            <ul className='list-disc list-inside mb-6'>
              {plan.features.map((feature) => (
                <li key={feature} className='flex items-center mt-2'><AiOutlineCheck className='text-green-500 mr-2' />{feature}</li>
              ))}
            </ul>
            <button className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;