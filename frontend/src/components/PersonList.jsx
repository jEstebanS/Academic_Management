import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/persons";

export default function PersonList() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ document: "", name: "", age: "" });

  const fetchPersons = async () => {
    try {
      const res = await axios.get(API);
      setPersons(res.data);
    } catch (error) {
      console.error("Error fetching persons:", error);
    }
  };

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, newPerson);
      setNewPerson({ document: "", name: "", age: "" });
      fetchPersons();
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchPersons();
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Persons</h2>

      <form onSubmit={handleAdd} className="mb-4 flex gap-2 flex-wrap">
        <input
          type="text"
          name="document"
          placeholder="Document"
          value={newPerson.document}
          onChange={handleChange}
          className="border p-1 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPerson.name}
          onChange={handleChange}
          className="border p-1 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPerson.age}
          onChange={handleChange}
          className="border p-1 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Document</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Age</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.id}</td>
              <td className="border px-2 py-1">{p.document}</td>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.age}</td>
              <td className="border px-2 py-1">
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {persons.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-2">
                No persons found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

