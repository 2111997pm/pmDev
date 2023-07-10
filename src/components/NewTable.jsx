import React from "react";
import { useNavigate } from "react-router-dom";

const NewTable = (props) => {

    const navigate = useNavigate();

    const clickHandle = (id) => {
    console.log("idddddddddd",id)
    navigate()
  };
  return (
    <table>
      <tr>
        <td> No </td>
        <td> Name </td>
        <td> Action </td>
      </tr>
      {props.data.map((item) => (
        <tr>
          <td> {item.id} </td>
          <td> {item.name} </td>
          <td>
            {" "}
            <button onClick={()=>clickHandle(item.id)}> View </button>{" "}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default NewTable;
