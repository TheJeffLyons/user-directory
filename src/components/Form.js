import React from 'react'
import {useFormik} from 'formik'

const initialValues = {
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    employer: '',
    title: '',
    movieOne: '',
    movieTwo: '',
    movieThree: '',
}

function Form() {

    const formik = useFormik({
        initialValues,
        
    })


  return (
        <div className='form'>
            <form className='insideForm'>
                <h1><u>Enter User Data</u></h1>
                <label>First Name*</label> <input 
                type='text'
                id='firstName'
                name='firstName'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                <br></br>
                <br></br>
                <label>Last Name*</label> <input 
                type='text'
                id='lastName'
                name='lastName'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                   <br></br>
                <label>City*</label> <input 
                type='text'
                id='city'
                name='city'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                   <br></br>
                <label>Country*</label> <input 
                type='text'
                id='country'
                name='country'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                   <br></br>
                <label>Employer*</label> <input 
                type='text'
                id=''
                name=''
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                   <br></br>
                <label>Title*</label> <input 
                type='text'
                id='title'
                name='title'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                   <br></br>
                
                <fieldset>3 Favorite Movies*
                <label></label> 
                <br></br>
                <input 
                type='text'
                id='movieOne'
                name='movieOne'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                <label></label> <input 
                type='text'
                id='movieTwo'
                name='movieTwo'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                   <br></br>
                <label></label> <input 
                type='text'
                id='movieThree'
                name='movieThree'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                </fieldset>
                <br></br>
                <br></br>
                <button type='submit'>Submit</button>

                <p>* Required Data</p>
               
            </form>
        </div>
  )
}

export default Form