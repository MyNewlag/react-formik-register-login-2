
import { FastField } from 'formik'
import React, { Fragment } from 'react'


export default function Radio(props) {     
     const {name,label,options}=props


       return (
       <div className='mb-3 '>
                 <label htmlFor={name} className="form-label mx-3">{label}</label>
                 <FastField  className="form-control " name={name}>

                {({field}) =>{
                    // console.log(field);
                    
                    return options.map(o=>(
                        <Fragment key={o.id}>
                        <input
                        className='form-check-input me-4 mx-2 '
                        type='radio'
                        id={o.id}
                        {...field}
                        value={o.id}
                        checked={field.value==o.id} />
                         <label className=' mx-1 mx-4 ' htmlFor={o.id}>{o.value}</label>
                        </Fragment>
                    ))
                }
                }
                   </FastField>                         
     

             </div>
       )
}
