import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link, useParams } from 'react-router-dom'

const AuthorEdit = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [errors, setErrors] =useState({});
    const navigate = useNavigate();
    const {_id} = useParams();
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/getAuthor/${_id}`)
        .then((res) => {
            setFName(res.data.fName)
            setLName(res.data.lName)
        })
        .catch((err)=>{
            console.log(err)
            console.log('error caught on the front-end!')
        })
    }, [])
    const update = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAuthor/${_id}`, {
            fName,
            lName
        })
        .then((res)=> {
            console.log(res.data)
            console.log('catch from the back-end')
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            console.log('error caught on the front-end!')
            setErrors(err.response.data.errors);
            
        })
    }
    return (
        <div className='col-6 mx-auto'>
            <h4>Edit this author:</h4>
            <form className='border border-1 border-primary mx-auto' onSubmit={update}>
                {errors.fName && <p className='error'>{errors.fName.message}</p>}
                <div className='d-flex justify-content-center'>
                    <label className='form-label mx-3' htmlFor='first'>First Name:</label>
                    
                    <input type='text' className='form-control' id='first'onChange={(e)=> setFName(e.target.value)} value={fName}/>
                </div><br/>
                {errors.lName && <p className='error'>{errors.lName.message}</p>}
                <div className='d-flex justify-content-center'>
                    <label className='form-label mx-3' htmlFor='first'>Last Name:</label>
                    
                    <input type='text' className='form-control' id='first'onChange={(e)=> setLName(e.target.value)} value={lName}/>
                    
                </div><br/>
                <div>
                    {
                        fName && lName? <input className=' action btn btn-primary' type='submit' value='update author'/>:
                        <input className=' action btn btn-primary' type='submit' value='add the author' disabled/>
                    }
                    
                    <Link className=' action btn btn-primary' to='/'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
export default AuthorEdit