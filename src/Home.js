import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
// require('dotenv').config();


function Home() {
    const [data,setData] = useState([]);
    //const [region,setregion] = useState([]);
    useEffect(()=>{
        //ตารางย่อย
        //axios.get('http://localhost:5000/region').then(res=>setregion(res.data)).catch(err=>console.log(err))
        //ตารางหลัก
        axios.get('http://localhost:5000/').then(res=>setData(res.data)).catch(err=>console.log(err))
    })
    const navigate = useNavigate();
    const handleDelete = (id)=>{
        axios.delete('http://localhost:5000/delete/'+id).then(res=>navigate('/')).catch(err=>console.log(err))
    }


  return (
    <div className="home">
        <div className="container">
            <h2 align='center'>Recipe</h2>
            <Link to="/create" align='center' className='btn-add'>Add</Link>
            <table className="table" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>ingredient</th>
                        <th>Howto</th>
                        <th>Region id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=>(
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.ingredient}</td>
                            <td>{d.howto}</td>
                            <td>{d.region_id}</td>
                            <td>
                                <Link to={`/update/${d.id}`} className="btn-sm" > Edit </Link>
                                <button onClick={e=> handleDelete(d.id)} className="btn-cc">delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Home