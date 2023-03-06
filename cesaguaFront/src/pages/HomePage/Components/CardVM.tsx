interface props {
  type: string;
  text: string;
  color: string;
}

const CardVM = ({ type, text, color }: props) => {
  return (
    <div className="card p-1 m-2" style={{ backgroundColor: color }}>
      <div className="card-body">
        <div>
          <h1>{type}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default CardVM;
