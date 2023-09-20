import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice'
const EditStudent = () => {
    const index = useLocation().state.index;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Stu_Data);
  const Navigate = useNavigate()

  const [info,setInfo] = useState({

    Name : data[index].Name,
    Age : data[index].Age,
    Course : data[index].Course,
    Batch : data[index].Batch 
  
  })

const handleChange = (e) => {
  setInfo({...info,[e.target.name] : e.target.value})
}

const handleUpdate = () => {
   dispatch(editStudent({info,index}));
   Navigate('/students')
}

    return (
    <>
      
      <div className='innerparent'>
        <div className='inputBox'>
        <span  className='span1'>Name</span> <br/>
        <input className='input1' type='text' name='Name' placeholder={data[index].Name} onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span className='span1'>Age</span> <br/>
        <input className='input1' type='text' name='Age' placeholder={data[index].Age} onChange={handleChange} required/>
        </div>
        </div>

        <div className='innerparent'>
          <div className='inputBox'>
        <span  className='span2'>Course</span><br/>
        <input className='input2' type='text' name='Course' placeholder={data[index].Course} onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span  className='span2'>Batch</span><br/>
        <input className='input2' type='text' name='Batch' placeholder={data[index].Batch} onChange={handleChange} required/>
        </div>
        </div>

        <div className='buttonmainparent'>
        <div className='buttons'>
        <button onClick={() => Navigate('/students')} className='button1 buttonin'>Cancel</button>
        <button onClick={handleUpdate} className='button2 buttonin'>Update</button>
      {/* <button onClick={() => Navigate('/students')}>Go Back</button> */}
      </div>
      </div>
    </>
  )
}

export default EditStudent
