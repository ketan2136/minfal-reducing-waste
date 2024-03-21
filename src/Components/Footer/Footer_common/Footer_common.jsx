import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Footer_common.css';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../../firbase';
import { useSelector } from 'react-redux';

const Footer_common = () => {

    const users = useSelector((state) => state.users);

    console.log(users);






    // const [text ,setText] = useState('')
    // const handleClick = async () => {
    //     // const valref = collection(textDB, 'textData');
    //     // await addDoc(valref, {textVal:text});
    //     // alert('Data add successfully')
    //     const handleClick = async () => {
    //         try {
    //             const valref = collection(db, 'textData'); // Assuming 'firebase' is correctly initialized
    //             await addDoc(valref, { textVal: text });
    //             alert('Data added successfully');
    //         } catch (error) {
    //             console.error('Error adding document:', error);
    //             alert('An error occurred while adding data to Firestore. Please try again.');
    //         }
    //     };
    // }


    let userSchema = yup.object({
        name: yup.string().required("please enter your name"),
        company: yup.string().required("enter your compny"),
        email: yup.string().email('Invalid email').required("Please enter Email"),
        phoneNumber: yup.number().required("please enter your number"),
        message: yup.string().required('pleass enter massage')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            email: '',
            phoneNumber: '',
            message: '',
        },

        validationSchema: userSchema,
        onSubmit: values => {
            let savedData = JSON.parse(localStorage.getItem("formData")) || [];
            savedData.push(values);
            localStorage.setItem("formData", JSON.stringify(savedData));

            formik.resetForm();
        },
    })

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name">Uw naam</label>
                        <input type="text" id="name" className="form-control" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                        <span className="error">{errors.name && touched.name ? errors.name : ' '}</span>
                    </div>
                    <div className="col-6">
                        <label htmlFor="company">Bedrijfsnaam</label>
                        <input type="text" id="company" className="form-control" value={values.company} onChange={handleChange} onBlur={handleBlur} />
                        <span className="error">{errors.company && touched.company ? errors.company : ' '}</span>
                    </div>
                    <div className="col-6">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        <span className="error">{errors.email && touched.email ? errors.email : ' '}</span>
                    </div>
                    <div className="col-6">
                        <label htmlFor="phoneNumber">Telefoonnummer</label>
                        <input type="text" id="phoneNumber" className="form-control" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                        <span className="error">{errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ' '}</span>
                    </div>
                </div>
                <div className="taxtarea">
                    <label htmlFor="message">Bericht</label>
                    <textarea id="message" cols="30" rows="5" value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
                    <span className="error">{errors.message && touched.message ? errors.message : ' '}</span>
                </div>
                <div className="main_btn">
                    <button  type='submit'>Over ons</button>
                </div>
            </form>
        </div>
    )
}

export default Footer_common;
