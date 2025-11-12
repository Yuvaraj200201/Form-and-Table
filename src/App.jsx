import { useState } from "react";
import "./App.css";
import Table from "./Components/Table";
import Form from "./Components/Form"

function App() {
  const initialFormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormDataChange = (key, value) => {
    console.log({ key, value });

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      setTableData([...tableData, formData]);
      setFormData(initialFormData);
    } else {
      tableData[editIndex] = formData;
      setFormData(initialFormData);
      setTableData(tableData);
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    console.log("Edit clicked on row", index);
    const clickedItem = tableData[index];
    setFormData(clickedItem);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    tableData.splice(index, 1);

    setTableData([...tableData]);
  };

  return (
    <dev className="Main">
      <Form
        formData={formData}
        handleFormDataChange={handleFormDataChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </dev>
  );
}

export default App;
