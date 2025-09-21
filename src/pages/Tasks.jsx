import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";
import { motion } from "framer-motion";

const Tasks = () => (
  <div>
    <Sidebar />
    <div className="main-content">
      <Navbar />
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
        <h2>Task Manager</h2>
        <div className="cards">
          <motion.div className="card" style={{background:'linear-gradient(135deg,#42e695,#3bb2b8)'}} whileHover={{scale:1.05}}>
            <h3>Total Tasks</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>12</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#f093fb,#f5576c)'}} whileHover={{scale:1.05}}>
            <h3>Completed</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>8</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#ff9a9e,#fad0c4)'}} whileHover={{scale:1.05}}>
            <h3>Pending</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>4</p>
          </motion.div>
        </div>
        <DataTable />
      </motion.div>
    </div>
  </div>
);

export default Tasks;
