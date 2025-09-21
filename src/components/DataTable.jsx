import { useState } from "react";

const sampleTasks = [
  { id:1, task:"Design Landing Page", status:"In Progress" },
  { id:2, task:"API Integration", status:"Completed" },
  { id:3, task:"Dashboard Charts", status:"Pending" },
];

const DataTable = () => {
  const [tasks] = useState(sampleTasks);

  return (
    <div className="table-container">
      <h3>Recent Tasks</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Task</th><th>Status</th></tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.task}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;


