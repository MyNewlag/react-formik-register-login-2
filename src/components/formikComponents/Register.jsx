

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
    auth_mode:"mobile",
    date:'',
    // image:"",
    phone:"",
    password:"",
    c_password:""
}



export default function Register() {

    const onSubmit=(values)=>{  
        console.log(values);
        console.log("A");
       
        // axios.post('http://ecomadminapi.azhadev.ir/api/auth/register' ,values)
        // .then(res=>{
        //     console.log(res.data);
        //     localStorage.setItem("token" ,res.data.token )
        // })

      
        // let formData=new FormData();
        // formData.append('user_name',values.user_name)
        // formData.append('mobile',values.mobile)
        // formData.append('password',values.password)
        // formData.append('image',values.image )
       
        //     axios.post('url',formData)
    
    }




    const validationSchema=yup.object({
        user_name:yup.string().matches(/^[0-9a-zA-Z]+$/ ,'اسم مستعار را پر کنید'),
        first_name:yup.string().matches(/^[@-_.: آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\s0-9a-zA-Z]+$/ ,'اسم را پر کنید'),
        last_name:yup.string().matches(/^[@-_.: آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\s0-9a-zA-Z]+$/ ,'اسم فامیلی را پر کنید'),
        // email:yup.string().when('auth_mode' ,{
        //     is:"email" ,
        //     then : yup.string().required('ایمیل رو وارد کنید')
        //     .email("وژدانا قالب ایمیل را رعایت کنید مثال")
        // }),
        // phone:yup.number().when('auth_mode',{
        //     is:"mobile" ,
        //     then : yup.number().required('شماره موبایل رو وارد کنید')
        // }) ,

        email:yup.string().required('وژدانا این قسمت را پر کنید').email("وژدانا قالب ایمیل را رعایت کنید مثال"),
        phone:yup.number().required('شماره موبایل را وارد کنید'),
     
        password: yup
                 .string()
                 .required('تن خدا این قسمت را پر کنید')
                 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 
                     'حداقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
             c_password: yup
                 .string()
                .oneOf([yup.ref('password'),''] ,'با رمز عبور مطابقت ندارد')
                .required('این قسمت رو پر کن'),

         date:yup.string().required('تاریخ رو حتما پرش من'),   
        //  image:yup.mixed().required('این قسمت را پر کن').test("fileSize" , "حجم فایل بیشتر از 100 کیلو بایت مجاز نیست",
        //     value=>value && value.size<(500*1024)
        // )
        // .test("format" , "،فرمت باید png باشد" ,   value=>value && value.type==="image/jpeg")
                     
    })

 

    const authModeValues =[
        {id:"mobile" , value:"موبایل"},
        {id:"email" , value:"ایمیل"}
    ]


    const handleGetInfo=()=>{
        axios.get('http://ecomadminapi.azhadev.ir/api/auth/user',{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{console.log(res)}
        )
    }

  return (
        <div className="limiter">
            <div className="container-login100">
                <Formik
                initialValues={initialValues} onSubmit={onSubmit}validationSchema={validationSchema}
                >
                       {
                        formik=>{
                            // console.log(formik);
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
                                     lable='نام  کاربری'
                                     />

                                     
                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='first_name'
                                     type='text'
                                     icon='fa fa-user'
                                     lable='نام'
                                     />

                                    
                                     
                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='last_name'
                                     type='text'
                                     icon='fa fa-envelope'
                                     lable='نام خانوائگی'
                                     />

                                                                        
                                    <FormikControl
                                    formik={formik}
                                    control="input"
                                    type="number"
                                    name="phone"
                                    icon="fa fa-mobile"
                                    lable="شماره تلفن همراه"
                                    /> 
            
                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                     name='password'
                                     type='password'
                                     icon='fa fa-lock'
                                     lable=' پسورد'
                                     />


                                     <FormikControl
                                     formik={formik}
                                     control='input'
                                      name='c_password'
                                     type='password'
                                     icon='fa fa-lock'
                                     lable=' تایید پسورد'
                                     />

                                    <FormikControl
                                     formik={formik}
                                     options={authModeValues}
                                     control='radio'
                                     name='auth_mode'
                                     lable=' نوع اعتبار سنجی'
                                     />


                                    {
                                    formik.values.auth_mode=="mobile" ?(
                                        <FormikControl
                                        formik={formik}
                                        control='input'
                                        name='phone'
                                        type='number'
                                        icon='fa fa-phone'
                                        lable=' موبایل'
                                        />
                                    ):(
                                        <FormikControl
                                        formik={formik}
                                        control='input'
                                        name='email'
                                        type='email'
                                        icon='fa fa-envelope'
                                        lable=' ایمیل'
                                        />
                                    )
                                    }

                                     <FormikControl
                                        formik={formik}
                                        control='date'
                                        name='date'
                                        icon='fa fa-calendar'
                                        lable='تاریخ تولد'
                                     />


                                     {/* <FormikControl
                                        formik={formik}
                                        control='file'
                                        name='image'
                                        icon='fa fa-file'
                                        lable='تصویر کاربر'
                                     /> */}

                                   

                                    
                                        <div className="container-login100-form-btn">
                                            <button className="login100-form-btn">
                                                ثبت نام
                                            </button>
                                        </div>
                                    
                                        <div className="w-100 text-center">
                                            <button className="btn btn-info" onClick={handleGetInfo}>
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
