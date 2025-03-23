/* eslint-disable react/prop-types */
function CheckboxGroup({ options, onCharacterChange }) {

  // Change Handler
  function handleChange(e) {
    const optionName = e.target.id.replace('include', '').toLowerCase();
    onCharacterChange({ ...options, [optionName]: e.target.checked });
  }

  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <input
          checked={options.lowercase}
          onChange={handleChange}
          type="checkbox"
          id="includelowercase"
          className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 dark:text-gray-200 text-sm">Lowercase (a-z)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includeuppercase"
          checked={options.uppercase}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 dark:text-gray-200 text-sm">Uppercase (A-Z)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includenumbers"
          checked={options.numbers}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 dark:text-gray-200 text-sm">Numbers (0-9)</span>
      </label>

      <label
        className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <input
          type="checkbox"
          id="includesymbols"
          checked={options.symbols}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 accent-teal-500 focus:ring-teal-400"
        />
        <span className="text-gray-800 dark:text-gray-200 text-sm">Symbols (!@#$)</span>
      </label>
    </div>
  );
}

export default CheckboxGroup;