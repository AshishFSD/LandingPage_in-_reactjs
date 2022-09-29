import React from 'react'

function DataTable({data}) {

     console.log(data);


  return (
     <table>
          <h1> Total Count {data.length}</h1>
        <tr>
            <th>User Name</th>
            <th>Email id</th>
            <th>Contact</th>
        </tr>

        {
            data.map(element =>
                {
               return <tr>
                    <td>{element.fullname}</td>
                    <td>{element.email}</td>
                    <td>{element.number}</td>
               </tr>
            })
        }
     

     </table>
  )
}

export default DataTable