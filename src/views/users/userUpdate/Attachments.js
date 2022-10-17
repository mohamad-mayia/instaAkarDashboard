import React, { useState, useEffect } from 'react'
import {
    CButton,
    CCard,
    CCardBody,

    CCardFooter,
    CCol,

    CForm,
    CInput,
    CSelect,
    CFormGroup,
    CLabel,
    CInputFile,
    CRow,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CIcon from '@coreui/icons-react'

import { useHistory, useLocation } from 'react-router-dom'

import { CAlert } from '@coreui/react'

import { useTranslation } from 'react-i18next';

import '../../../globalVar'
// import { set } from 'core-js/core/dict'
// import MIN_SAFE_INTEGER from 'core-js/fn/number/min-safe-integer'
const Attachments = ({ customer, setRefresh, refresh }) => {
    const [t, i18n] = useTranslation();
    const history = useHistory()
    const [visible, setVisible] = useState(10)



    const [errorMessage, setErrorMessage] = useState();

    const [succesAdd, setSuccessAdd] = useState()
    const [loading, setLoading] = useState('')
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    const [pickedImg, setPickedImg] = useState('')
    const [inputType, setInputType] = useState('2')

    const [upData, setUpData] = useState({

        key: '',
        value: '',

    })
    const { key, value } = upData;






    const handleData = (e) => {
        setUpData({ ...upData, [e.target.name]: e.target.value })

        setErrorMessage('')
        setSuccessAdd('')
    }
    // const [data, setData] = useState({ _method: 'put', })
    const handleAddUser = async (e) => {
        e.preventDefault()
        setLoading(true)

        setErrorMessage('')
        setSuccessAdd('')
        var data = new FormData()
        data.append('customer_id', customer.id)
        key && data.append('key', key)
        inputType == 1 && value && data.append('value', value)
        inputType == 0 && pickedImg && data.append('value', pickedImg)

        try {
            const responsee = await fetch(
                `${global.apiUrl}api/attachments`,
                {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + userToken,
                        // "Content-Type": "application/json",
                        // 'Access-Control-Allow-Origin': 'https://localhost:3000',
                        // 'Access-Control-Allow-Credentials': 'true',
                        Accept: "application/json",
                    },
                    body: data
                    ,

                }
            );
            const response = await responsee.json();
            console.log('response', response);
            console.log(response);
            setVisible(10)
            if (response.success) {
                await setVisible(6)
                setInputType('2')
                setUpData({ key: '', value: '' })
                setPickedImg('')
                setSuccessAdd("Field added successfully.")
                // setData({ _method: 'put', })
                setRefresh(!refresh)


            }
            else {

                setVisible(10)
                setErrorMessage(response.errors)


            }


        } catch (err) {
            console.log(err);

        }

        setLoading(false)
    }


    const typeChange = (e) => {
        setInputType(e.target.value)
        setUpData({ ...upData, value: '' })
        setPickedImg('')
    }


    const handleImg = (e) => {
        if (e.target.files[0]) { setPickedImg(e.target.files[0]) }
    }
    console.log('data', upData)
    const [inputModalType, setInputModalType] = useState('2')
    const [modal, setModal] = useState(false)
    const [updateFile, setUpdatefile] = useState('')
    const [activeItem, setActiveItem] = useState({ id: '', key: '', value: "", type: '' })
    const handleFile = (e) => {
        if (e.target.files[0]) { setUpdatefile(e.target.files[0]) }
    }
    const handleSetItemToUpdate = async (item) => {
        console.log(item)
        await setActiveItem({
            id: item.id,
            key: item.key,
            value: item.value,
            type: item.file
        })
        setInputModalType(item.file)
        await setModal(!modal)
    }
    const closeModal = () => {
        setModal(false)
        setActiveItem({ id: '', key: '', value: "", type: '' })
        setUpdatefile('')
    }
    const handleUPdateData = (e) => {
        setActiveItem({ ...activeItem, [e.target.name]: e.target.value })
        setErrorMessage('')
        setSuccessAdd('')
    }
    const typeModalChange = (e) => {
        setInputModalType(e.target.value)
        setActiveItem({ ...activeItem, value: '' })
        setUpdatefile('')
    }

    const handleDeleteItem = async (id) => {
        document.getElementById('root').style.opacity = 0.75;
        try {
            const responsee = await fetch(
                `${global.apiUrl}api/attachments/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + userToken,

                        Accept: "application/json",
                    },


                }
            );
            const response = await responsee.json();



            if (response.success) {
                setRefresh(!refresh)
                document.getElementById('root').style.opacity = 1;
            }

            if (response.message && response.message == "Unauthenticated.") {
                document.getElementById('root').style.opacity = 1;

                localStorage.removeItem("token");
                localStorage.clear()

                history.push("/login");
            }

        } catch (err) {
            console.log(err);

        }
        document.getElementById('root').style.opacity = 1;

    }

    const handleUpdateItem = async (e) => {
        e.preventDefault()
        setLoading(true)

        setErrorMessage('')
        setSuccessAdd('')

        const data = new FormData();
        data.append("_method", 'put');
        data.append("key", activeItem.key);
        inputModalType == 0 && activeItem.value && data.append('value', activeItem.value)
        inputModalType == 1 && updateFile && data.append('value', updateFile)
        try {
            const responsee = await fetch(
                `${global.apiUrl}api/attachments/${activeItem.id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + userToken,
                        // "Content-Type": "application/json",
                        //'Access-Control-Allow-Origin': 'https://localhost:3000',
                        // 'Access-Control-Allow-Credentials': 'true',
                        Accept: "application/json",
                    },
                    body: data
                    ,

                }
            );
            const response = await responsee.json();


            setVisible(10)
            if (response.success) {
                await setVisible(6)
                setSuccessAdd("Modified successfully")

                setRefresh(!refresh)

                setLoading(false)
                setVisible(6)


            }
            else {
                setVisible(10)
                setErrorMessage(response.errors)
            }


        } catch (err) {
            console.log(err);

        }

        setLoading(false)
    }
    return (


        <CRow>
            <CCol xs="12" sm="12" md="12" className=''>
                <CForm onSubmit={(e) => { handleAddUser(e) }}>
                    <CCardBody>
                        <CCard>
                            <CCardBody>
                                <CRow >


                                    {/* className="justify-content-center" */}

                                    <CCol md='12'> <strong>Additional Information</strong></CCol>
                                    <CCol md='12'>

                                        {customer.attachments && customer.attachments.map((item, index) => {
                                            return (
                                                <CRow key={(item.id + item.value + item.key)} >
                                                    <CCol md="3" lg="3" xl="3">

                                                        <CFormGroup row>
                                                            <CCol md="12">
                                                                <CLabel htmlFor="text-input">Field ({index + 1}) </CLabel>
                                                            </CCol>
                                                            <CCol xs="12" md="12">
                                                                <CInput
                                                                    //   onChange={(e) => handleChange(index, e.target.name, e.target.value)}
                                                                    // type='number'
                                                                    required
                                                                    min="0"
                                                                    name="quantity"
                                                                    disabled

                                                                    //   placeholder={`(min: ${activeService.original_min}),(max:${activeService.original_max})`}

                                                                    defaultValue={item.key} />

                                                            </CCol>
                                                        </CFormGroup>



                                                    </CCol>
                                                    {item.file == 0 ?

                                                        <CCol md="5" lg="5" xl="5">

                                                            <CFormGroup row>
                                                                <CCol md="12">
                                                                    <CLabel htmlFor="text-input">Text</CLabel>
                                                                </CCol>
                                                                <CCol xs="12" md="12">
                                                                    <CInput id="text-input"
                                                                        required
                                                                        //   min='0'
                                                                        disabled
                                                                        //   onChange={(e) => handleChange(index, e.target.name, e.target.value)}
                                                                        //   type='number'
                                                                        name="old_price" placeholder="Price" defaultValue={item.value} />

                                                                </CCol>
                                                            </CFormGroup>



                                                        </CCol>
                                                        :
                                                        <CCol md="5" lg="5" xl="5">

                                                            <CFormGroup row>
                                                                <CCol md="12">
                                                                    <CLabel htmlFor="text-input">File</CLabel>
                                                                </CCol>
                                                                <CCol xs="12" md="12">
                                                                    <a
                                                                        className="updateRef"

                                                                        href={`${global.apiUrl + item.value}`} target="_blank">File URL
                                                                    </a>

                                                                </CCol>
                                                            </CFormGroup>



                                                        </CCol>

                                                    }

                                                    <CCol md='2' className='col-md-2'>
                                                        <CFormGroup row>
                                                            <CCol md="12">
                                                                <CLabel htmlFor="text-input">
                                                                    Update
                                                                </CLabel>
                                                            </CCol>
                                                            <CCol xs="12" md="12">


                                                                <CButton color="primary" className='col-lg-10 col-md-10 col-sm-12 col-xs-12 '
                                                                    onClick={() => handleSetItemToUpdate(item)}
                                                                > Update
                                                                </CButton>

                                                            </CCol>
                                                        </CFormGroup>

                                                    </CCol>





                                                    <CCol md='2' className='col-md-2'>
                                                        <CFormGroup row>
                                                            <CCol md="12">
                                                                <CLabel htmlFor="text-input">
                                                                    Remove
                                                                </CLabel>
                                                            </CCol>
                                                            <CCol xs="12" md="12">


                                                                <CButton color="danger" className='col-lg-5 col-md-5 col-sm-6 col-xs-6 '
                                                                    onClick={() => handleDeleteItem(item.id)}
                                                                ><i class="fa fa-trash" aria-hidden="true" ></i>
                                                                </CButton>

                                                            </CCol>
                                                        </CFormGroup>

                                                    </CCol>
                                                </CRow>



                                            )
                                        })}

                                    </CCol>





                                    <CCol md="6" lg="6" xl="6">
                                        <CFormGroup row>
                                            <CCol md="12">
                                                <CLabel htmlFor="text-input">  Field Name  </CLabel>
                                            </CCol>
                                            <CCol xs="12" md="12">

                                                <CInput name="key"
                                                    autoComplete='off'
                                                    onChange={handleData}
                                                    placeholder={`Field Name`}
                                                    value={upData.key} />
                                            </CCol>
                                        </CFormGroup>



                                    </CCol>
                                    <CCol md="6" lg="6" xl="6">

                                        <CFormGroup row>
                                            <CCol md="12">
                                                <CLabel htmlFor="text-input">
                                                    Field Type   </CLabel>
                                            </CCol>
                                            <CCol xs="12" md="12">
                                                <CSelect custom name="role" id="select"
                                                    required value={inputType} onChange={(e) => typeChange(e)}>
                                                    <option value='' >Select</option>

                                                    <option value='1'>Text</option>
                                                    <option value='0'> File</option>


                                                </CSelect>
                                            </CCol>
                                        </CFormGroup>

                                    </CCol>
                                    {inputType === "1" ? <CCol md="12" lg="12" xl="12">
                                        <CFormGroup row>
                                            <CCol md="12">
                                                <CLabel htmlFor="text-input">{`Text`}</CLabel>
                                            </CCol>
                                            <CCol xs="12" md="12">

                                                <CInput name="value"
                                                    autoComplete='off'
                                                    required
                                                    type='text'
                                                    onChange={handleData}
                                                    placeholder={`Text`}
                                                    value={upData.value} />
                                            </CCol>
                                        </CFormGroup>
                                    </CCol> : null}
                                    {inputType === "0" ? <CCol md='12'  ><CCol md='12'  >
                                        <CFormGroup row >
                                            <CLabel col md={12}> File</CLabel>
                                            <CCol xs="12" md="12">
                                                {/* accept="image/*" */}
                                                <CInputFile required custom id="custom-file-input" onChange={(e) => { handleImg(e) }} />

                                                <CLabel htmlFor="custom-file-input" variant="custom-file">
                                                    {pickedImg ? pickedImg.name : `Choose File...`}

                                                </CLabel>
                                            </CCol>
                                        </CFormGroup>
                                    </CCol></CCol> : null}








                                </CRow>


                            </CCardBody>
                            <CCardFooter className="p-4">
                                <CRow className="justify-content-center">

                                    {errorMessage &&
                                        <CAlert className='col-lg-12  col-md-12 col-sm-12 col-xs-12 '
                                            color="danger"
                                            // closeButton
                                            show={visible}
                                            // closeButton
                                            onShowChange={setVisible}
                                        >

                                            {Object.keys(errorMessage).map((item, i) => (

                                                <>{errorMessage[item]}<br /></>



                                            ))}
                                        </CAlert>}

                                    {succesAdd &&

                                        <CAlert className='col-lg-12  col-md-12 col-sm-12 col-xs-12 '
                                            color="success"
                                            show={visible}
                                            // closeButton
                                            onShowChange={setVisible}
                                        // closeButton
                                        >
                                            {succesAdd}
                                        </CAlert>}

                                    <CCol md="6" lg="6" xl="6" xs="12" sm="12" >
                                        {<CButton color="success" block type='submit'>
                                            Save
                                            {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>} </CButton>}
                                    </CCol>

                                </CRow>
                            </CCardFooter>
                        </CCard>



                    </CCardBody>

                </CForm>
            </CCol>

            <CModal
                show={modal}
                onClose={setModal}
            >
                <CModalHeader closeButton>
                    <CModalTitle>Update Information</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow  >

                        <CCol md="12" lg="12" xl="12">
                            <CFormGroup row>
                                <CCol md="12">
                                    <CLabel htmlFor="text-input"> Field Name</CLabel>
                                </CCol>
                                <CCol xs="12" md="12">

                                    <CInput name="key"
                                        required
                                        autoComplete='off'
                                        onChange={(e) => handleUPdateData(e)}
                                        placeholder={`Field Name`}
                                        value={activeItem.key} />

                                </CCol>
                            </CFormGroup>



                        </CCol>
                        <CCol md="12" lg="12" xl="12">

                            <CFormGroup row>
                                <CCol md="12">
                                    <CLabel htmlFor="text-input">
                                        Field Type</CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                    <CSelect custom name="role" id="select"
                                        required value={inputModalType} onChange={(e) => typeModalChange(e)}>
                                        <option value='' >Select</option>

                                        <option value='0'>Text</option>
                                        <option value='1'> File</option>


                                    </CSelect>
                                </CCol>
                            </CFormGroup>

                        </CCol>
                        {inputModalType == "0" ? <CCol md="12" lg="12" xl="12">
                            <CFormGroup row>
                                <CCol md="12">
                                    <CLabel htmlFor="text-input">{`Text`}</CLabel>
                                </CCol>
                                <CCol xs="12" md="12">

                                    <CInput name="value"
                                        autoComplete='off'
                                        required
                                        type='text'
                                        onChange={(e) => handleUPdateData(e)}
                                        placeholder={`Text`}
                                        value={activeItem.value} />
                                </CCol>
                            </CFormGroup>
                        </CCol> : null}
                        {inputModalType == "1" ? <CCol md='12'  ><CCol md='12'  >
                            <CFormGroup row >
                                <CLabel col md={12}> File</CLabel>
                                <CCol xs="12" md="12">
                                    {/* accept="image/*" */}
                                    <CInputFile required custom id="custom-file-input" onChange={(e) => { handleFile(e) }} />

                                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                                        {updateFile ? updateFile.name : `Choose File...`}

                                    </CLabel>
                                </CCol>
                            </CFormGroup>
                        </CCol></CCol> : null}

                    </CRow>
                    <CRow className="justify-content-center">

                        {errorMessage &&
                            <CCol md='12'>

                                <CAlert className='col-lg-12  col-md-12 col-sm-12 col-xs-12 '
                                    color="danger"
                                    // closeButton
                                    show={visible}
                                    // closeButton
                                    onShowChange={setVisible}
                                >

                                    {Object.keys(errorMessage).map((item, i) => (

                                        <>{errorMessage[item]}<br /></>



                                    ))}
                                </CAlert>
                            </CCol>
                        }




                        {succesAdd &&
                            <CCol md='12'>
                                <CAlert className='col-lg-12  col-md-12 col-sm-12 col-xs-12 '
                                    color="success"
                                    show={visible}
                                    // closeButton
                                    onShowChange={setVisible}
                                // closeButton
                                >
                                    {succesAdd}
                                </CAlert>
                            </CCol>




                        }
                    </CRow>
                </CModalBody>
                <CModalFooter>

                    <CButton color="primary" onClick={(e) => { handleUpdateItem(e) }} >Save {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>}</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={() => closeModal()}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>





        </CRow>


    )
}

export default Attachments
