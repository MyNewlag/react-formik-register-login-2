

import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from 'yup'
import FormikControl from './FormikControl';
import axios from 'axios';



const initialValues={
    user_name:"",
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    password:"",
    c_password:"",
    auth_mode:"mobile",
    date:''

}



export default function Register() {


    const onSubmit=(values)=>{  
        console.log(values);
        console.log("A");
        alert("asma")
    
    }




    const validationSchema=yup.object({
        user_name:yup.string().matches(/^[0-9a-zA-Z]+$/ ,'از اعداد و حروف انگلیسی کوچک و بزرگ استفاده کنید'),
        first_name:yup.string().matches(/^[@-_.: آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\s0-9a-zA-Z]+$/ ,'از حروف فارسی و حروف انگلیسی کوچک و بزرگ و اعداد و کاراکترهای مجاز استفاده کنید'),
        last_name:yup.string().matches(/^[@-_.: آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\s0-9a-zA-Z]+$/ ,'از حروف فارسی و حروف انگلیسی کوچک و بزرگ و اعداد و کاراکترهای مجاز استفاده کنید'),


        mobile:yup.number().when('auth_mode' ,{
            is: "mobile" ,
            then:()=> yup.number().required('لطفا موبایل را وارد کنید')
        }),

        email:yup.string().when('auth_mode' ,{
            is:"email",
            then:()=> yup.string().required('وژدانا این قسمت را پر کنید').email("وژدانا قالب ایمیل را رعایت کنید مثال")
        }),
     
        password: yup
                 .string()
                 .required('تن خدا این قسمت را پر کنید')
                 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 
                     'حداقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
      c_password: yup
                 .string()
                .oneOf([yup.ref('password'),''] ,'با رمز عبور مطابقت ندارد')
                .required('این قسمت رو پر کن'),
    
      date:yup.string().required('تاریخ باید پر شود')

        
    })

 

    const authModeValues =[
        {id:"mobile" , value:"موبایل"},
        {id:"email" , value:"ایمیل"}
    ]



  return (
        <div className="limiter">
            <div className="container-login100">
                <Formik
                initialValues={initialValues} onSubmit={onSubmit}validationSchema={validationSchema}
                >
                       {
                        formik=>{
                            console.log(formik);
                            return(
                                <div className="wrap-login100">
                                <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                    <span className="login100-form-title">
                                        ثبت نام 
                                    </span>

                            


                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='user_name'
                                     type='text'
                                     icon='fa fa-user'
                                     label='نام  کاربری'
                                     />

                                   <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='first_name'
                                     type='text'
                                     icon='fa fa-user'
                                     label='نام'
                                     />



                                   <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='last_name'
                                     type='text'
                                     icon='fa fa-user'
                                     label='نام خانوادگی'
                                     />


                                    <FormikControl
                                     formik={formik}
                                     control='radio'
                                     name='auth_mode'
                                     label=' نوع اعتبار سنجی :'
                                     options={authModeValues}
                                     />


                                    {formik.values.auth_mode=="mobile" ?  (
                                    <FormikControl
                                    formik={formik}
                                    control="input"
                                    type="number"
                                    name="mobile"
                                    icon="fa fa-mobile"
                                    label="شماره  موبایل"
                                    /> 
                                    ):(
                                   <FormikControl
                                    formik={formik}
                                    control='input'
                                    name='email'
                                    type='email'
                                    icon='fa fa-envelope'
                                    label='ایمیل'
                                    />
                                    )

                                    }

                            
                                                                       
            
                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='password'
                                     type='password'
                                     icon='fa fa-lock'
                                     label=' پسورد'
                                     />

                                    <FormikControl
                                     formik={formik}
                                     control='input'
                                      name='c_password'
                                     type='password'
                                     icon='fa fa-lock'
                                     label=' تایید پسورد'
                                     />
                                  

                                    <FormikControl
                                     formik={formik}
                                     control='date'
                                     name='date'
                                     icon='fa fa-calendar'
                                     label='تاریخ تولد'
                                     />
                                  




                                        <div className="container-login100-form-btn">
                                            <button className="login100-form-btn">
                                                ثبت نام
                                            </button>
                                        </div>
                                    
                                        <div className="w-100 text-center">
                                            <button className="btn btn-info">
                                        دریافت اطلاعات کاربر                                           
                                        </button>
                                        </div>

                                    <div className="text-center p-t-12 p-b-45">
                                        <a className="txt2" href="#">
                                                قبلا ثبت نام کرده ام
                                            </a>
                                    </div>
                                
                                </Form>
                                <div className="login100-pic js-tilt" data-tilt>
                                    <img src="/auth/images/img-01.png" alt="IMG"/>
                                </div>
                            </div>
                            )
                        }
                       }
                              
                            
                        
                    
                </Formik>
            </div>
        </div>
    );
}
