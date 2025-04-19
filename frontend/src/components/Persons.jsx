import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api";

function Persons() {
  const [persons, setPersons] = useState([]);
  const [formData, setFormData] = useState({
    document: "",
    name: "",
    age: "",
  });

  const fetchPersons = async () => {
    try {
      const res = await axios.get(`${API_URL}/persons`);
      setPersons(res.data);
    } catch (err) {
      console.error("Error fetching persons:", err);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPerson = async () => {
    try {
      await axios.post(`${API_URL}/persons`, formData);
      setFormData({ document: "", name: "", age: "" });
      fetchPersons();
    } catch (err) {
      console.error("Error adding person:", err);
    }
  };

  const handleConvertToStudent = async (id) => {
    try {
      await axios.post(`${API_URL}/students`, { id });
      fetchPersons();
    } catch (err) {
      console.error("Error converting to student:", err);
    }
  };

  const handleConvertToTeacher = async (id) => {
    const specialty = prompt("Especialidad del docente:");
    if (!specialty) return;
    try {
      await axios.post(`${API_URL}/teachers`, { id, specialty });
      fetchPersons();
    } catch (err) {
      console.error("Error converting to teacher:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Gestión de Personas</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        <input
          name="document"
          placeholder="Documento"
          value={formData.document}
          onChange={handleInputChange}
          className="border p-2 rounded flex-1 min-w-[150px]"
        />
        <input
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 rounded flex-1 min-w-[150px]"
        />
        <input
          name="age"
          type="number"
          placeholder="Edad"
          value={formData.age}
          onChange={handleInputChange}
          className="border p-2 rounded w-24"
        />
        <button
          onClick={handleAddPerson}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Documento</th>
              <th className="px-3 py-2 border">Nombre</th>
              <th className="px-3 py-2 border">Edad</th>
              <th className="px-3 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="border px-2 py-1">{p.id}</td>
                <td className="border px-2 py-1">{p.document}</td>
                <td className="border px-2 py-1">{p.name}</td>
                <td className="border px-2 py-1">{p.age}</td>
                <td className="border px-2 py-1 space-x-2">
                  <button
                    onClick={() => handleConvertToStudent(p.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Estudiante
                  </button>
                  <button
                    onClick={() => handleConvertToTeacher(p.id)}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded"
                  >
                    Docente
                  </button>
                </td>
              </tr>
            ))}
            {persons.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No hay personas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Persons;
