import React from 'react'
import './Table.css'

const Table = ({data}) => {
  return (
    <div className='t-container'>
      <table >
        <tbody className='cells1'>
          <tr >
            <th >Name</th>
            <th >Qualification</th>
            <th >Location</th>
            <th >Job-Role</th>
            <th >Contact-No</th>
          </tr>
          { data.map((item)=>(
            <tr key={item.name} className='cells2'>
                <td>{item.name}</td>
                <td>{item.qualification}</td>
                <td>{item.location}</td>
                <td>{item.jobrole}</td>
                <td>{item.contactnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
