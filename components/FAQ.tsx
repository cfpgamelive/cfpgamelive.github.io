import React from 'react';

const faqs = [
    {
        q: "Is the stream available in my country?",
        a: "Yes! Our streaming partners provide global access so you can watch the championship from anywhere."
    },
    {
        q: "Can I watch on my mobile phone?",
        a: "Absolutely. The stream is optimized for all devices including iOS, Android, Tablets, and Smart TVs."
    },
    {
        q: "Do I need a cable subscription?",
        a: "No cable required. This is a standalone digital pass to stream the event directly over the internet."
    },
    {
        q: "Is the sign-up process fast?",
        a: "Yes, it takes less than 2 minutes to create an account and start watching the live coverage."
    }
];

export const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                            <p className="text-gray-400">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};