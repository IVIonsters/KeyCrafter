import './App.css'
import CheckBoxGroup from './components/CheckboxGroup'
import PasswordGenerator from './components/PasswordGenerator'

function App() {

  return (
    <>
      <body
        className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex items-center justify-center p-4"
      >
        <section
          className="w-full max-w-md bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow-2xl flex flex-col items-center text-center space-y-4 border border-gray-300/60"
        >
          <h1 className="text-3xl font-extrabold text-gray-900">Password Generator</h1>
          <CheckBoxGroup />
          <PasswordGenerator />
        </section>
      </body >
    </>
  )
}

export default App