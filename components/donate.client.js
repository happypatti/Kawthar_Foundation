"use client";
import { useState } from 'react';

export default function DonationComponent() {
    const [donationAmount, setDonationAmount] = useState('');

    const donationTiers = [10, 25, 50, 100, 250, 500];

    const handleSetAmount = (amount) => {
        setDonationAmount(amount);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">Support the Kawthar Foundation</h2>
            <div className="grid grid-cols-3 gap-4">
                {donationTiers.map((amount) => (
                    <button
                        key={amount}
                        className={`p-4 bg-white text-black rounded-lg focus:outline-none ${donationAmount === amount ? 'bg-blue-700' : ''}`}
                        onClick={() => handleSetAmount(amount)}
                    >
                        ${amount}
                    </button>
                ))}
            </div>
            <div className="mt-6">
                <label htmlFor="customAmount" className="block mb-2 text-sm font-medium text-gray-900">Or enter a custom amount:</label>
                <input
                    type="number"
                    id="customAmount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter amount"
                />
            </div>
            <button
                className="w-full bg-slate-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => console.log(`Donating $${donationAmount}`)}
            >
                Donate ${donationAmount || 'Amount'}
            </button>
        </div>
    );
}
