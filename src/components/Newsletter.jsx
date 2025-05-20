import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-400 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-emerald-200 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/50 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200/50 rounded-full filter blur-xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-300/20 rounded-full filter blur-lg"></div>
          
          {/* Floating plane */}
          <div className="absolute -top-6 right-10 z-20">
            <FaPaperPlane className="text-4xl text-emerald-400 animate-fly" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl mb-4 shadow-md">
                <FiSend className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get exclusive freelancing insights, tips, and opportunities delivered straight to your inbox.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent placeholder-gray-400 text-gray-700 shadow-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform">
                <FiSend className="text-lg" />
                Subscribe
              </button>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center text-sm text-gray-500">
                <FiCheckCircle className="mr-2 text-emerald-400" />
                <span>No spam ever. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS without JSX attributes */}
      <style>{`
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
          animation: fly 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
