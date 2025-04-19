import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/persons";

export default function PersonForm() {
  const [formData, setFormData] = useState({
    document: "",
    name: "",
    age: "",
  });

  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    try {
      const res = await axios.get(API_URL);
      setPersons(res.data);
    } catch (error) {
      console.error("Error fetching persons:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setFormData({ document: "", name: "", age: "" });
      fetchPersons(); // actualizar lista
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Agregar Persona</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="document"
          value={formData.document}
          onChange={handleChange}
          placeholder="Documento"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Edad"
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="col-span-1 md:col-span-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Agregar Persona
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Personas Registradas</h3>
      <table className="w-full border table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Documento</th>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Edad</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border px-2 py-1">{p.id}</td>
              <td className="border px-2 py-1">{p.document}</td>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
