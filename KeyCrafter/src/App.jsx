import './App.css'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">KeyCrafter</h1>
          <p className="text-gray-600 mt-2">Generate secure passwords with ease</p>
        </header>

        <PasswordGenerator />
      </section>
    </div>
  );
}

export default App;
/* Features Still Needed
Disabled Generate Button
Password Strength Display
Password Strength Colors and words
 */