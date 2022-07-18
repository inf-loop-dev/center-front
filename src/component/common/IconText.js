import React, {useState} from "react";
import {formatDate} from "../../modules/date";

function IconText(props){
    const [size, setSize] = useState(props.size||"medium") //size 기본값 설정
    const [value, setValue] = useState(props.value||"")
    const [icon, setIcon] =  useState(props.icon||"")
    return(
        <div style={{fontSize:size, display:"flex", paddingLeft:"0.5rem", paddingRight:"0.5rem"}}>
            <span className="material-symbols-outlined mt-1" style={{fontSize: size, marginRight:"0.25rem"}}>
              {icon}
            </span>
            {value}

        </div>
    )

}

export default IconText;