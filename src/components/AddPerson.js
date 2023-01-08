import React, { useEffect, useState} from 'react'

const getItem = () =>{
    let list = localStorage.getItem('lists')
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return [];
    }
  }

const AddPerson = () => {

    const [add, setAdd] = useState([0])
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [mobile,setMobile] = useState("")
    const [adhar,setAdhar] = useState("")
    const [data,setData] = useState(getItem)
    const [isClick, setIsClick] = useState([]);
    const [age,setAge] = useState("");

    
    const onhandler = (idx) =>{
        if(name==="")alert("Enter valid input")
        else if((adhar.length!==12) || (adhar===""))alert("Adhar number should be 12 digit")
        else if(mobile.length!==10  || mobile==="") alert("mobile number should be 10 digit")
        else if(date.length!==10) alert("Choose date")

        if(!isClick[idx] && name!=="" && mobile!=="" && adhar.length===12 && mobile.length===10 && date.length===10){
            setData(() => [...data,{ Name: name, DOB: date, Age:age, Mobile:mobile, Adhar:adhar}])
            setIsClick(() => [...isClick,true]);
        }
    }
    

    const deleteTask = (id) => {
        const rArr = add.filter((ele, idx) =>{
            return idx !==id;
        })
        setAdd([...rArr])
      }

      useEffect(() =>{
        localStorage.setItem('lists', JSON.stringify(data));
      },[data])
      
      useEffect(() =>{
        const oldDate = date.split("-").shift();
        const newDate = new Date();
        if(oldDate.length!==0){
            setAge((newDate.getFullYear() - oldDate)-1)
        }
      },[date])

  return (
    <div className='addData'>
       <div>Add New Person</div>
       <div className='tableData'>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Date of Birth</td>
                    <td>Adhar Number</td>
                    <td>Mobile Number</td>
                    <td>Age</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {add.map((val,idx) =>{
                return(
                    <tr key={val}>
                        <td><input type={"text"}  onChange={e => setName(e.target.value)}  required/></td>
                        <td><input type={"date"}  onChange={e => setDate(e.target.value)}  required/></td>
                        <td><input type={"text"}  onChange={e => setAdhar(e.target.value)} required/></td>
                        <td><input type={"text"}  onChange={e => setMobile(e.target.value)} required/></td>
                        <td>{age}</td>
                        <td><span onClick={() => onhandler(idx)}   style={{color:'blue', cursor:'pointer'}}>{isClick[idx]?("Saved!"):("Save")}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={()=>deleteTask(idx)} style={{color:'blue', cursor:'pointer'}}>Delete</span></td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
       </div>
       <div className='addButton' onClick={() => setAdd([...add, add.pop()+1])}>ADD</div>
    </div>
  )
}

export default AddPerson