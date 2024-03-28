import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactDelete, contactEdit, contactGetData, contactUpdateData } from '../redux/Reducer/UserReducher';
import Footer_common from '../Components/Footer/Footer_common/Footer_common';
import { useNavigate } from 'react-router-dom';


const DataShow = (props) => {

    const [value, setValue] = React.useState(0);
    const [update, setUpdate] = useState(false);

    // Redux hooks
    const dispatch = useDispatch();
    const conractData = useSelector(state => state.conractData);


    if (conractData.isLoading) {
        console.log(conractData.conractData[0])
    }

    useEffect(() => {
        dispatch(contactGetData())
    }, [])

    const history = useNavigate();

    const handleEdit = (v) => {
        console.log(v,'1');
        history('/contact');
    //   <Footer_common />
       dispatch(contactUpdateData(v))
        // setValues(v)
    }
    const handleDelete = (v) => {
        console.log(v.id);

        dispatch(contactDelete(v))
    }

    return (
        <div className='dataShow1 container'>
            <h1>Contact Data</h1>
            <div className="row">
                {/* {
                    value === 1 && */}
                    <>
                        {
                            conractData.conractData.map((contact, index) => (
                                <div className='col-4 dataShow' key={index}>
                                    <p>Name: {contact.name}</p>
                                    <p>Company: {contact.company}</p>
                                    <p>Email: {contact.email}</p>
                                    <p>Phone Number: {contact.phoneNumber}</p>
                                    <p>Message: {contact.message}</p>
                                    <button onClick={() => handleEdit(contact)}>edit</button>
                                    <button onClick={() => handleDelete(contact)}>delet</button>
                                </div>
                            ))
                        }
                    </>
                {/* } */}

            </div>
        </div>
    )
}

export default DataShow
