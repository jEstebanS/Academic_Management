import Students from './components/Students'
import Teachers from './components/Teachers'
import Courses from './components/Courses'
import PersonList from './components/PersonList'
import Persons from './components/Persons'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow">
          Sistema de Gestión Académica
        </h1>

        <div className="grid grid-cols-1 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <Students />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <Teachers />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <Courses />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <Persons />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <PersonList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
