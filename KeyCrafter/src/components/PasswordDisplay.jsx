function PasswordDisplay() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          id="password"
          readOnly
          value="Your Secure Password"
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-mono text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          <label htmlFor="toggle-visibility" className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="toggle-visibility"
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
            <span className="ml-2 text-xs text-gray-600">Show</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          id="generateBtn"
          className="py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
        >
          Generate
        </button>

        <button
          id="copyBtn"
          className="py-3 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default PasswordDisplay;