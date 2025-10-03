import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState([0, 2]); 

  const toggleFAQ = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter(i => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  const faqs = [
    {
      question: "What is Wishpay?",
      answer: "Wishpay is payment institution that helps millions of people and businesses manage their money across the world. Wishpay helps you get more from your money."
    },
    {
      question: "How do I send money to a bank account?",
      answer: "You can send money to a bank account by logging into your Wishpay account and selecting the transfer option."
    },
    {
      question: "What happens when I go over the block limit on my Free plan?",
      answer: "You can still read your existing content as usual, but you won't be able to add new content. However, you can delete existing blocks to free up space."
    },
    {
      question: "How do I verify my identity?",
      answer: "To verify your identity, you'll need to provide a valid government-issued ID and complete our verification process."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
          FAQ
        </h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl md:text-2xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-purple-600 text-3xl font-light flex-shrink-0">
                  {openIndex.includes(index) ? '−' : '+'}
                </span>
              </button>
              
              {openIndex.includes(index) && (
                <div className="px-8 pb-6 pt-2">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}