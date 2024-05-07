// components/DonationImpact.js
export default function DonationImpact() {
    const impacts = [
        {
            amount: 10,
            impact: "provides essential school supplies for one child."
        },
        {
            amount: 25,
            impact: "funds a health workshop for a community."
        },
        {
            amount: 50,
            impact: "supports the planting of 10 trees."
        },
        {
            amount: 100,
            impact: "buys textbooks for an entire classroom."
        },
        {
            amount: 250,
            impact: "funds a small community project."
        },
        {
            amount: 500,
            impact: "supports a scholarship for a student."
        }
    ];

    return (
        <div className="container bg-white py-8 rounded-xl">
                  <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-black text-center mb-4">Donate to The Kawthar Foundation</h2>
                <p className="text-lg text-center text-gray-700 mx-auto max-w-2xl">
                    Your contributions will be used to support those in need.
                </p>
            </div>
        </div>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-black text-center mt-10 mb-6">See the Impact of Your Donation</h2>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    {impacts.map((item) => (
                        <div key={item.amount} className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="text-lg font-medium">${item.amount}</h3>
                            <p className="mt-2 text-gray-600">{item.impact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
