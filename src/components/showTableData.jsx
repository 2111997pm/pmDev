
export const MyTable=(data)=>(
    <table>
      <tr>
        <td> No </td>
        <td> Name </td>
      </tr>
      {data.map((item)=>(
      <tr>
        <td> {item.id} </td>
        <td> {item.name} </td>
      </tr>
      ))}
    </table>
);

