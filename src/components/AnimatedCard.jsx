import { motion } from "framer-motion";

const cardGradients = [
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #42e695, #3bb2b8)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)"
];

const AnimatedCard = ({ title, value, index }) => {
  return (
    <motion.div
      className="card"
      style={{ background: cardGradients[index % cardGradients.length] }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 12px 25px rgba(0,0,0,0.2)" }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
    </motion.div>
  );
};

export default AnimatedCard;


