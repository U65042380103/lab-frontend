import React from 'react'
import './Create.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
// const id = require(../../)

function Update() {
    // const [id,setid] = useState('')
    const [name,setname] = useState('')
    const [ingredient,setingredient] = useState('')
    const [howto,sethowto] = useState('')
    const [region_id,setregion_id] = useState('')
    const [region,setregion] = useState([])
    // const [data,setdata] = useState([])

    const nav = useNavigate();
    const {id} = useParams();

    const handledata=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:5000/update/'+id, {name,ingredient,howto,region_id}).then(
            res =>{
                nav('/');

            }
        ).catch(err=> console.log(err))
    }
    useEffect(()=>{
        // axios.get('http://localhost:5000/update/'+id).then(res=>setdata(res.data)).catch(err=>console.log(err))
        // axios.get('http://localhost:5000/update/'+id).then(res=>console.log(res.data)).catch(err=>console.log(err))

        // axios.get('http://localhost:5000/region').then(res=>setregion(res.data)).catch(err=>console.log(err))
        axios.get('http://localhost:5000/region').then(res=>setregion(res.data)).catch(err=>console.log(err))
    })



  return (
    <div className="create">
      <div className="container">
        <form onSubmit={handledata}>
            <h2>Update Recipe</h2>
            <div className="mb-2">
            <label htmlFor="">name</label>
            <input type="text" name="" id="" placeholder='Enter name' className="form-control"
            onChange={e=> setname(e.target.value)} />
            </div>
        <div className="mb-2">
            <label htmlFor="">ingredient</label>
            <input type="text" name="" id="" placeholder='Enter ingredient' className="form-control"
            onChange={e=> setingredient(e.target.value)} /> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">howto</label>
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
        <button className="btn-add">edit</button>
        </form>
      </div>
    </div>
  )
}

export default Update