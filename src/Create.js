import React from 'react'
import './Create.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [id,setid] = useState('')
    const [name,setname] = useState('')
    const [ingredient,setingredient] = useState('')
    const [howto,sethowto] = useState('')
    const [region,setregion] = useState([])

    const [region_id,setregion_id] = useState('')
    const nav = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5000/region').then(res=>setregion(res.data)).catch(err=>console.log(err))
    })

    const handledata=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/create',{id,name,ingredient,howto,region_id}).then(
            res =>{
                nav('/');

            }
        ).catch(err=> console.log(err))

    }


  return (
    <div className="create">
      <div className="container">
        <form onSubmit={handledata}>
            <h2>Add Recipe</h2>
            <div className="mb-2">
            <label htmlFor="">ID</label>
            <input type="text" name="" id="" placeholder='Enter id' className="form-control"
            onChange={e=> setid(e.target.value)}/> 
            
        </div>
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" placeholder='Enter name' className="form-control"
            onChange={e=> setname(e.target.value)}/> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">ingredient</label>
            <input type="text" name="" id="" placeholder='Enter ingredient' className="form-control"
            onChange={e=> setingredient(e.target.value)}/> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">Howto</label>
            <input type="text" name="" id="" placeholder='Enter howto' className="form-control"
            onChange={e=> sethowto(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="">Region</label>
                <select name="" id="" onChange={e=> setregion_id(e.target.value)} className="select">
                    {region.map(d=>(
                        <option className="option" key= {d.region_id} value={d.region_id}>{d.region_name}</option>
                    ))}
                </select>
        </div>
        <button className="btn-add">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create