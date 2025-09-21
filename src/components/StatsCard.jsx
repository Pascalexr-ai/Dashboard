const StatsCard = ({ title, value }) => (
  <div className="card">
    <h3>{title}</h3>
    <p style={{fontSize:'24px', fontWeight:'bold'}}>{value}</p>
  </div>
);

export default StatsCard;

