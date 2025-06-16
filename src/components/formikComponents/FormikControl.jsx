
import React from 'react'
import Input from './Input'




export default function FormikControl(props) {
  switch (props.control){
    case "input":
        return <Input {...props}/>
        


        default :
        return null
  }
}
