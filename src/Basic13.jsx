import { useState } from "react";
import './table-style.css';

const Basic13 = () => {

    const [data] = useState([
      {
        name: "Asif",
        city: "Dhaka",
        class: "Four",
        id: 4007,
      },
      {
        name: "Baten",
        city: "Dhamrai",
        class: "Five",
        id: 5017,
      },
      {
        name: "Cindy",
        city: "Sydny",
        class: "Seven",
        id: 7003,
      },
      {
        name: "Dex",
        city: "Paris",
        class: "Three",
        id: 3039,
      }
    ]);

    return ( 
        <div className="sec Basic13">
          <h1>Object Manipulation with map method</h1>
            <div className="min-box-2">
            
            <table>
            <tr>
              <th>ID </th>
              <th>Name </th>
              <th>City </th>
              <th>Class </th>
            </tr>
            
                {data.map((data) => (
                  
                    <tr key = {data.id}>
                      <td>  {data.id} </td>
                      <td>  {data.name} </td>
                      <td>  {data.city} </td>
                      <td>  {data.class} </td>
    
                    </tr>
                ))}
            </table>
            </div>

        </div>
     );
}
 
export default Basic13;