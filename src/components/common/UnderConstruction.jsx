import React from 'react';

const UnderConstruction = ({ title = 'Coming Soon', description = 'This page is under construction and will be available soon.' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="h-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          {/* Content */}
          <div className="px-6 py-12 sm:px-12 text-center -mt-16 relative">
            {/* Construction Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gradient-to-r from-blue-500 to-indigo-500">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center gap-2 mb-10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* CTA Text */}
            <p className="text-sm text-gray-500 font-medium">
              Stay tuned for updates!
            </p>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>

        {/* Floating shapes in background */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
