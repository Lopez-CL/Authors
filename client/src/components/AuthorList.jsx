import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/getAuthors')
        .then((res) => {
            console.log(res.data)
            setAuthors(res.data)
            console.log('catch from the back-end')
        })
        .catch((err) => {
            console.log(err)
            console.log('error is caught on the front-end')
        })
    }, [])
    const removeAuthor = (authorId) =>{
        axios.delete(`http://localhost:8000/api/deleteAuthor/${authorId}`)
            .then(res => {
                console.log('catch from the back-end')
                let updatedAuthors = authors.filter((authorItem) => (authorItem._id !== authorId))
                setAuthors(updatedAuthors);
            })
            .catch(err=>{
                console.log(err)
                console.log(authorId)
                console.log('error is caught on the front-end')
            })
    }
    return (
        <div className=' holder col-4 mx-auto'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index)=>(
                            <tr key={index}>
                                <td>{author.lName}, {author.fName}</td>
                                <td>
                                    <Link className=' action btn btn-success' to={`/edit/${author._id}`}>Edit {author.fName}</Link>
                                    <button className=' action btn btn-danger' onClick={(e)=> removeAuthor(author._id)}>Remove Author</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList