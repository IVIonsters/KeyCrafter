import './App.css'
import CheckboxGroup from './components/CheckboxGroup'
import PasswordGenerator from './components/PasswordGenerator'
import PasswordDisplay from './components/PasswordDisplay'
import StrengthBar from './components/StrengthBar'

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex flex-col space-y-6 border border-gray-300/60">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">KeyCrafter</h1>
          <p className="text-gray-600 mt-2">Generate secure passwords with ease</p>
        </header>

        <PasswordDisplay />
        <StrengthBar />

        <div className="w-full h-px bg-gray-200"></div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Options</h2>
          <PasswordGenerator />
          <CheckboxGroup />
        </div>
      </section>
    </div>
  );
}

export default App;
