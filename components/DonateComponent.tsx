"use client";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function DonationComponent() {
  const [donationAmount, setDonationAmount] = useState<string | number>('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const donationTiers = [ 50, 100, 250, 500, 1000, 1500, 2000];

  const handleSetAmount = (amount: number) => {
    setIsCustomAmount(false);
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setDonationAmount(value);
    }
  };

  const handleDonate = async () => {
    if (isCustomAmount && (!donationAmount || parseInt(donationAmount.toString()) <= 0)) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseInt(donationAmount.toString()), // Amount in dollars
        }),
      });

      const { id } = await response.json();

      if (id) {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: id });
      } else {
        console.error('Failed to create Stripe session');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Support the Kawthar Foundation</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
        {donationTiers.map((amount) => (
          <button
            key={amount}
            className={`p-4 bg-slate-500 text-white rounded-lg focus:outline-none hover:bg-slate-600 ${donationAmount === amount ? 'bg-slate-700' : ''}`}
            onClick={() => handleSetAmount(amount)}
          >
            ${amount}
          </button>
        ))}
        <button
          className={`p-4 bg-slate-500 text-white rounded-lg focus:outline-none hover:bg-slate-600 ${isCustomAmount ? 'bg-slate-700' : ''}`}
          onClick={() => {
            setIsCustomAmount(true);
            setDonationAmount('');
          }}
        >
          Other
        </button>
        {isCustomAmount && (
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-4">
            <label htmlFor="customAmount" className="block mb-2 text-sm font-medium text-gray-900">Enter custom amount:</label>
            <input
              type="number"
              id="customAmount"
              value={donationAmount}
              onChange={handleCustomAmountChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="Enter amount"
              min="1"
              step="1"
            />
          </div>
        )}
        <button
          className="col-span-4 sm:col-span-3 md:col-span-4 lg:col-span-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded"
          onClick={handleDonate}
        >
          Donate ${donationAmount}
        </button>
      </div>
      <div className="text-center mt-6 text-gray-500 text-sm">
        <p>Payments securely processed by</p>
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
          <img src="/stripe.png" alt="Stripe logo" className="mx-auto w-20 mt-2" />
        </a>
      </div>
    </div>
  );
}
