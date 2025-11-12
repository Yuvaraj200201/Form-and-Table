const Table = ({ tableData, handleEdit, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((datas, idx) => (
          <tr key={idx}>
            <td className="name_data">{datas.name}</td>
            <td className="mail_data">{datas.email}</td>
            <td>
              <button
                className="edit-btn"
                onClick={() => {
                  handleEdit(idx);
                }}
              >
                Edit
              </button>
              <button
                className="del-btn"
                onClick={() => {
                  handleDelete(idx);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
