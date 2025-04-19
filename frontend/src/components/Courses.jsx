import { useEffect, useState } from 'react'
import api from '../api'

function Courses() {
  const [courses, setCourses] = useState([])
  const [teachers, setTeachers] = useState([])
  const [newCourse, setNewCourse] = useState({ name: '', teacher_id: '' })

  const fetchCourses = async () => {
    const res = await api.get('/courses')
    setCourses(res.data)
  }

  const fetchTeachers = async () => {
    const res = await api.get('/teachers')
    setTeachers(res.data)
  }

  useEffect(() => {
    fetchCourses()
    fetchTeachers()
  }, [])

  const handleAdd = async () => {
    if (!newCourse.name || !newCourse.teacher_id) return alert('Completa los campos')
    await api.post('/courses', newCourse)
    setNewCourse({ name: '', teacher_id: '' })
    fetchCourses()
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar curso?')) return
    await api.delete(`/courses/${id}`)
    fetchCourses()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cursos</h2>
      <table className="w-full border mb-4 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th><th>Nombre</th><th>Profesor</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id} className="text-center border-t">
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.teacher_name}</td>
              <td>
                <button onClick={() => handleDelete(c.id)} className="text-red-600">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="space-x-2">
        <input
          placeholder="Nombre del curso"
          value={newCourse.name}
          onChange={e => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <select
          value={newCourse.teacher_id}
          onChange={e => setNewCourse({ ...newCourse, teacher_id: e.target.value })}
        >
          <option value="">Seleccionar Docente</option>
          {teachers.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-2 py-1 rounded">Agregar</button>
      </div>
    </div>
  )
}

export default Courses
