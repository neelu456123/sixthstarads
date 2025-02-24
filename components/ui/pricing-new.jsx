import React from 'react';
import { FaCheck } from 'react-icons/fa';

const plansData = [
  { name: 'Free', price: '0', features: ['1 Website', '5GB Server storage', '1 Database', 'Unmetered bandwidth', 'SSD disk', 'Unlimited Websites', '1TB Server storage', 'Unlimited Databases', 'Unmetered bandwidth'] },
  { name: 'Team', price: '$29', features: ['5 Websites', '50GB Server storage', 'Unlimited Websites', '1TB Server storage', 'Unlimited Databases', 'Unmetered bandwidth', 'SSD disk','Unmetered bandwidth', '2 VCPUS'] },
  { name: 'Popular', price: '$99', features: ['10 Websites', '200GB Server storage', '50GB Server storage','20 Databases', 'Unmetered bandwidth', 'SSD disk', '4 VCPUS', 'Fontworld', 'WordPress install'] },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited Websites', '1TB Server storage', 'Unlimited Databases', 'Unmetered bandwidth', 'SSD disk', '8 VCPUS', 'Fontworld', 'WordPress install', 'Priority server speed'] }
];

export default function PricingPlansNew() {
  return (
    <section className='text-center p-10 bg-[#e0e1ff]'>
      <h1 className='text-4xl font-bold mb-2'>Pricing & Plans</h1>
      <p className='text-lg mb-5'>Compare our plans to find what suits you best.</p>
      <div className='grid md:grid-cols-4 gap-4 my-10'>
        {plansData.map((plan, index) => (
          <div key={index} className={`${plan.name === 'Popular' ? 'ring-2 ring-offset-2 ring-indigo-500' : ''} p-5 bg-gray-50 shadow-md rounded-lg flex flex-col justify-between`}> 
            <h2 className='text-2xl font-bold mb-2'>{plan.name}</h2>
            <p className='text-lg text-indigo-600 font-semibold mb-4'>{plan.price}/month</p>
            <ul className='text-left mb-4'>
              {plan.features.map((feature, index) => (
                <li key={index} className='flex items-center mb-2'>
                  <FaCheck className='text-green-500 mr-2'/> {feature}
                </li>
              ))}
            </ul>
            <button className='bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600'>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}