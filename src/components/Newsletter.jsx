import { FiSend, FiCheckCircle } from "react-icons/fi";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-400 dark:from-emerald-800 dark:to-green-600 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-xl border border-emerald-200 dark:border-emerald-700/50 overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/50 dark:bg-emerald-800/30 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200/50 dark:bg-green-800/30 rounded-full filter blur-xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-300/20 dark:bg-emerald-700/20 rounded-full filter blur-lg"></div>

          {/* Floating elements */}
          <div className="absolute -top-6 right-10 z-20">
            <FaPaperPlane className="text-4xl text-emerald-400 dark:text-emerald-300 animate-fly" />
          </div>
          <div className="absolute bottom-4 left-6 z-20">
            <div className="w-8 h-8 rounded-full bg-emerald-300/70 dark:bg-emerald-400/30 animate-pulse"></div>
          </div>
          <div className="absolute top-1/4 right-16 z-20">
            <div className="w-5 h-5 rounded-full bg-green-300/70 dark:bg-green-400/30 animate-ping"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-600 rounded-xl mb-4 shadow-md dark:shadow-lg">
                <FiSend className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-400 dark:to-green-500 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get exclusive freelancing insights, tips, and opportunities
                delivered straight to your inbox.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-xl bg-white dark:bg-gray-700 border border-emerald-200 dark:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-300 text-gray-700 dark:text-gray-100 shadow-sm dark:shadow-inner"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-700 dark:to-green-800 text-white font-semibold rounded-xl hover:shadow-lg dark:hover:shadow-emerald-900/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform active:scale-95">
                <FiSend className="text-lg" />
                Subscribe
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiCheckCircle className="mr-2 text-emerald-400 dark:text-emerald-300" />
                <span>No spam ever</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiCheckCircle className="mr-2 text-emerald-400 dark:text-emerald-300" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiCheckCircle className="mr-2 text-emerald-400 dark:text-emerald-300" />
                <span>Exclusive content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fly {
          0% {
            transform: translate(20px, -20px) rotate(-10deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(-30px, -40px) rotate(-5deg) scale(1);
          }
          100% {
            transform: translate(-80px, -100px) rotate(0deg) scale(1.2);
            opacity: 0;
          }
        }
        .animate-fly {
          animation: fly 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
