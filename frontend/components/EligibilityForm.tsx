
import React from 'react';

interface EligibilityFormProps {
  onClose: () => void;
}

const EligibilityForm: React.FC<EligibilityFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Sidebar */}
          <div className="hidden md:flex md:w-1/3 bg-emerald-900 p-8 text-white flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Check</h2>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Provide basic details to see which schemes are available for your academic profile.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-xs uppercase tracking-widest font-bold">Details</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-xs uppercase tracking-widest font-bold">Verify</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-xs uppercase tracking-widest font-bold">Results</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Scholarship Eligibility</h3>
              <button onClick={onClose} className="md:hidden text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Category</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                    <option>Select Category</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OBC</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Annual Family Income</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                    <option>Select Range</option>
                    <option>Below 2.5 Lakhs</option>
                    <option>2.5L to 4.5L</option>
                    <option>Above 4.5 Lakhs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Current Education Level</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Matric', 'Intermediate', 'Graduate', 'Post-Grad'].map((level) => (
                    <button key={level} type="button" className="py-3 text-sm font-semibold border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-700 transition-all dark:border-slate-700 dark:text-slate-300">
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Year Percentage</label>
                <input type="range" className="w-full accent-emerald-600" min="0" max="100" />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="pt-8">
                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-emerald-900/20 hover:bg-emerald-500 transition-all">
                  Show Eligible Schemes
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <button onClick={onClose} className="hidden md:block absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EligibilityForm;
