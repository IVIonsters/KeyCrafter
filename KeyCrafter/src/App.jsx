import './App.css'
import PasswordGenerator from './components/PasswordGenerator'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center p-4 transition-colors duration-200">
        <ThemeToggle />
        <section className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl transition-colors duration-200">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">KeyCrafter</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Generate secure passwords with ease</p>
          </header>
          <PasswordGenerator />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
/* Features Still Needed
Password Strength Display
Password Strength Colors and words
 */