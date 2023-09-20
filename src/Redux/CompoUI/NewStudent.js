import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../Slice/Slice';

const NewStudent = () => {
    // const index = useLocation().state.index;
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.Stu_Data);
  const Navigate = useNavigate()

  const [info,setInfo] = useState({

    Name : '',
    Age : '',
    Course : '',
    Batch : ''
  
  })

const handleChange = (e) => {
  setInfo({...info,[e.target.name] : e.target.value})
}

const handleUpdate = () => {
   dispatch(addStudent({info}));
   Navigate('/students')
}

  
    return (
    <>
       <div className='innerparent'>
        <div className='inputBox'>
        <span className='span1'>Name</span> <br/>
        <input className='input1' type='text' placeholder='Name' name='Name'  onChange={handleChange} required/>
        </div>

        <div className='inputBox'>
        <span  className='span1'>Age</span> <br/>
        <input className='input1' type='text' placeholder='Age' name='Age'  onChange={handleChange} required/>
        </div>
        </div>

        <div className='innerparent'>
          <div className='inputBox'>
        <span  className='span2'>Course</span><br/>
        <input className='input2' type='text' name='Course' placeholder='Course' onChange={handleChange} required/>
        </div>

        
        <div className='inputBox'>
        <span  className='span2'>Batch</span><br/>
        <input className='input2' type='text' name='Batch' placeholder='Batch' onChange={handleChange} required/>
        </div>
        </div>


        
        <div className='buttonmainparent'>
        <div className='buttons'>
        <button onClick={() => Navigate('/students')} className='button1 buttonin'>Cancel</button>
        <button onClick={handleUpdate} className='button2 buttonin'>Submit</button>
     
      </div>
      </div>

</>

    )
}
export default NewStudent
