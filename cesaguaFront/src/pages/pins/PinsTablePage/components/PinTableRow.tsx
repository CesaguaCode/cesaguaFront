interface props {
  id: number;
  name: string;
  position: string;
  province: string;
  canton: string;
  district: string;
  handleEdit: any;
  handleDelete: any;
}

const PinTableRow = ({
  id,
  name,
  position,
  province,
  canton,
  district,
  handleEdit,
  handleDelete,
}: props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{province}</td>
      <td>{canton}</td>
      <td>{district}</td>
      <td>
        {province}, {canton}, {district}
      </td>
      <td>
        [{(position[0] as any).toFixed(2)}] [{(position[1] as any).toFixed(2)}]
      </td>
      <td>
        <button className="btn btn__delete">
          <i className=" ico i__delete " onClick={() => {handleDelete(id, name)}}></i>
        </button>
        <button className="btn btn__edit">
          <i className="btn ico i__edit" onClick={() => {handleEdit(id)}}></i>
        </button>
      </td>
    </tr>
  );
};

export default PinTableRow;
