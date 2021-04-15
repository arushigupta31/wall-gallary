import React, { useState} from 'react';

const Gallary=(props)=>{
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (item)=>{
        if(activeIndex===0){
        setActiveIndex(item.id)
        }
        else{
            setActiveIndex(0)
        }
    }
    return(
        <div className="gallary" >
        {props.data.map(item=>(
            <img src={item.urls.raw} alt={item.alt_description} className={activeIndex===item.id?"zoomImg":"noZoom"} onClick={()=>handleClick(item)}  />
        ))}
        </div>
    )
}
export default Gallary;