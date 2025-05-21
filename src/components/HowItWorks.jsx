import { FaPenAlt, FaUserCheck, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaPenAlt className="text-3xl text-green-600" />,
      title: "Post Your Task",
      description: "Describe what you need done and set your budget. It's free to post."
    },
    {
      icon: <FaUserCheck className="text-3xl text-green-600" />,
      title: "Choose Freelancer",
      description: "Review proposals and profiles, then select the best fit."
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600" />,
      title: "Get It Done",
      description: "Collaborate securely and pay only when work is completed."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
          How <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">WorkNGo</span> Works
        </h2>
        <p className="text-center text-green-600 max-w-2xl mx-auto mb-12">
          Connect with skilled freelancers in just a few clicks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-green-100 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{step.title}</h3>
              <p className="text-green-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition shadow-md">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;