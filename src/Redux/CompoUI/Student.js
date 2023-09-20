import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Student = () => {
    const data = useSelector((state) => state.Stu_Data)
    const Navi = useNavigate()
    
    return (
    <div>
      <div className='studentbutton'>
      <h1>Students Details</h1>
      <button className='button' onClick={() => Navi('/addstudent')}>Add new student</button>
      </div>

      <table className='table'>
        <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index) => {
            return(
            
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>
                  <NavLink to='/etitstudent' state={{index}}>Edit</NavLink>
                </td>
                
              </tr>
           
              )
        })}
         </tbody>

      </table>
    </div>
  )
}

export default Student
