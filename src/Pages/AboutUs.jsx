import { FaHandshake, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-base-content py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">
              About <span className="text-green-500">WorkNGo</span>
            </span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            Connecting talent with opportunity in the fastest growing freelance
            marketplace
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-green-500/10 dark:bg-green-400/10 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 10000, suffix: "+", label: "Active Freelancers" },
              { end: 25000, suffix: "+", label: "Completed Projects" },
              { end: 95, suffix: "%", label: "Success Rate" },
              { end: 5, suffix: "M+", label: "Earned by Sellers" },
            ].map((stat, idx) => (
              <div key={idx} className="stats-card">
                <div className="text-4xl font-bold text-green-500">
                  <CountUp
                    suffix={stat.suffix}
                    start={0}
                    end={stat.end}
                    duration={2}
                    separator=","
                    scrollSpyDelay={500}
                    enableScrollSpy
                  />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-offset="100"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At WorkNGo, we're revolutionizing the way businesses connect with
              freelance talent. Our platform empowers buyers to post tasks
              effortlessly and sellers to bid on work that matches their skills
              perfectly.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in creating opportunities, fostering collaboration, and
              building a community where quality work meets fair compensation.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-offset="100"
            className="relative h-80 bg-green-500/10 dark:bg-green-400/10 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaHandshake className="text-green-500 text-8xl opacity-70" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Choose WorkNGo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Quick Matching",
                desc: "Our smart algorithm connects buyers with the most suitable sellers in minutes.",
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "Verified Talent",
                desc: "All sellers undergo rigorous verification to ensure quality and reliability.",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Diverse Skills",
                desc: "From design to development, find experts for any task in our extensive network.",
              },
              {
                icon: <FaHandshake className="text-3xl" />,
                title: "Secure Payments",
                desc: "Our escrow system ensures payments are only released when work is approved.",
              },
            ].map((item, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-once="false"
                key={i}
                className="feature-card p-6 rounded-xl bg-base-200 dark:bg-neutral-800 hover:bg-green-500/10 dark:hover:bg-green-600/10 transition-all"
              >
                <div className="text-green-500 mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
          className="bg-green-500 text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join Our Growing Community
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're looking to get work done or find freelance
            opportunities, WorkNGo is the perfect platform for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg hover:bg-green-100 transition">
              Post a Task
            </button>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-green-600 transition">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
