import { FaPenAlt, FaUserCheck, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaPenAlt className="text-3xl text-green-600 dark:text-green-400" />,
      title: "Post Your Task",
      description: "Describe what you need done and set your budget. It's free to post."
    },
    {
      icon: <FaUserCheck className="text-3xl text-green-600 dark:text-green-400" />,
      title: "Choose Freelancer",
      description: "Review proposals and profiles, then select the best fit."
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600 dark:text-green-400" />,
      title: "Get It Done",
      description: "Collaborate securely and pay only when work is completed."
    }
  ];

  return (
    <section id="works" className="py-12 md:py-16 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 dark:text-green-100 mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600">WorkNGo</span> Works
          </h2>
          <p className="text-lg text-green-600 dark:text-green-300 max-w-2xl mx-auto">
            Connect with skilled freelancers in just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-green-100 dark:border-gray-700 text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-green-50 dark:bg-gray-700 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;