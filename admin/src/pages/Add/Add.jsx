import React, { useEffect, useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ( {url}) => {
  
    // const url = "http://localhost:4000"
    const [image , setImage] = useState(false)
    const [data , setData] = useState({
        name:"",
        description:"",
        price:"",
        category:""
    })

    const onChangeHandler = (event) =>{
        const name=event.target.name
        const value = event.target.value
        setData(data => ({...data ,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
         event.preventDefault()
   const formData = new FormData()
   formData.append("name" , data.name)
   formData.append("description" , data.description)
   formData.append("price" , Number(data.price))
   formData.append("category" , data.category)
   formData.append("image", image)

   const response = await axios.post(`${url}/api/food/add`, formData)
   console.log("calling")
            if(response.data.success){
     setData({
        name:"",  
        description:"",
        price:"",
        category:""
    })
    setImage(false)
    toast.success(response.data.message)
            } else {
                console.error('An error occurred while submitting the form:', error);
                toast.error(response.data.message)
            }
    }
 // checking the data in the console its coming or not
//     useEffect(() =>{
//    console.log(data)
//     },[data])
  return (
    <div className='add'>

        <form onSubmit={onSubmitHandler} className='flex-col'>
           <div className='add-img-upload flex-col'>
            <p> Upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area}/>
            </label>
            <input  type='file' onChange={(e) => setImage(e.target.files[0])} id = "image" hidden required/>
           </div>
           <div className='add-product-name flex-col'>
            <p> Product Name</p>
          
            <input onChange={onChangeHandler} value={data.name} type='text' name= "name" placeholder='Enter the Name'/>
           </div>
           <div className='add-product-desctiption flex-col'>
            <p> Product Desctiption</p>
            
            <textarea textarea onChange={onChangeHandler} value={data.description} name='description' rows = "6" placeholder='write contect hear' required></textarea>
           </div>
            
           <div className='add-category-price'>
            <div className="add-catehgory flex-col">
                <p>Product Category</p>
                <select  onChange={onChangeHandler} name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>

                </select>
            </div>
            <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price}  type='Number' name='price' placeholder='$20'/>

            </div>
           </div>
           <button type='submit' className='add-btn'>Add</button>
        </form>


    </div>
  )
}

export default Add