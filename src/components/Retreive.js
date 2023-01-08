import React,{useEffect, useState} from 'react'

const getItem = () =>{
  let list = localStorage.getItem('lists')
  if(list){
      return JSON.parse(localStorage.getItem('lists'))
  }
  else{
      return [];
  }
}

const Retreive = () => {

  const [item] = useState(getItem)
  const [data,setData] = useState([])
  const [keyword,setKeyword] = useState("");

  useEffect(() => {
    const filterList = item.filter((flist) =>{
      if(flist.Name.startsWith(keyword)){
        return true;
      }
      if(flist.Mobile.startsWith(keyword)){
        return true;
      }
      if(flist.Adhar.startsWith(keyword)){
        return true;
      }
      return false
    })
    setData(filterList);

  },[keyword])
  
  return (
    <div>
      <div className='addData'>
       <div>Retreive Information</div>
       <div className='dataFinding'>
        <input type={'text'} onKeyUp = {(e) => setKeyword(e.target.value)}/><span>Find</span>
       </div>
       <div className='dataSec'>
        {(keyword.length && data.length) !== 0?(
          data.map((val,idx) =>{
            return(
            <div key={idx} className='mainData'>
            <span><span>Name:</span> {val.Name}</span>
            <span><span>DOB:</span> {val.DOB}</span>
            <span><span>Adhar No:</span> {val.Mobile}</span>
            <span><span>Mobile no:</span> {val.Adhar}</span>
            <span><span>Age:</span> {val.Age}</span>
            </div>
            )
          })):(<p>No Data</p>)
        }
       </div>
    </div>
    </div>
  )
}

export default Retreive