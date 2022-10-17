import React, { useState, useEffect, useContext } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CPagination,
  CDataTable,
  CSelect,
  CFormText,
  CTextarea,
  CFormGroup,
  CLabel,
  CSwitch,
  CInputFile,
  CLink,
  CFade,
  CCollapse,
  CBadge,
  CRow
} from '@coreui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CIcon from '@coreui/icons-react'
import TimePicker from 'react-time-picker'
// import "react-time-picker-input/dist/components/TimeInput.css"
import GoogleMapReact from 'google-map-react';

import './ShippingSettingsUpdate.scss'

import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';

import '../../../globalVar'
import markerr from "../marker.png"
const ShippingSettingsUpdate = () => {
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  let history = useHistory();
  const [visible, setVisible] = useState(10)

  const [fetchedData, setfetchedData] = useState([])
  const [refresh, setRefresh] = useState('')
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState('')
  const [succesAdd, setSuccessAdd] = useState()

  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [pickedImg, setPickedImg] = useState('')
  const [updatefetchedData, setUpdatefetchedData] = useState()
  const [phones, setPhones] = useState([])
  const [upData, setUpData] = useState({
    email: "",
    profit_percentage: "",
    address: "",
    latitude: 29.378586,
    longitude: 47.990341
  })
  const socialURLS = ["facebook", "twitter", "snapchat", "tiktok", "youtube", "instagram"]
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const { email,
    address,
  } = upData;
  const defaultProps = {

    zoom: 11
  };

  useEffect(async () => {
    const getSetting = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/info`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },
          }
        );
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { getSetting() })
        }

        if (response.message && response.message == "Success") {
          let temp = []
          response.payload.phone.forEach(item => temp.push({ id: randomInteger(1, 10000), value: item }))
          setPhones(temp)
          setUpData({
            ...response.payload, latitude: Number(response.payload.latitude),
            longitude: Number(response.payload.longitude),
            profit_percentage: Number(response.payload.profit_percentage)

          })
          setUpdatefetchedData(response.payload)
        }

      } catch (err) {
        console.log(err);

      }
    }
    getSetting()
  }, [refresh])
  // "profit_percentage"


  const handleData = (e) => {
    setUpData({ ...upData, [e.target.name]: e.target.value })

    setErrorMessage('')
    setSuccessAdd('')
  }



  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    const data = new FormData();
    // upData.name_en != updatefetchedData.name_en && data.append("name_en", name_en);
    data.append("email", upData.email);
    data.append("address", upData.address);
    data.append("latitude", upData.latitude);
    data.append("longitude", upData.longitude);
    data.append("profit_percentage", upData.profit_percentage);

    pickedImg && data.append('logo', pickedImg)
    phones.forEach((item, index) => {
      data.append(`phone[${index}]`, item.value)
    })
    socialURLS.forEach((item) => {
      data.append(`${item}`, upData[item])
    })
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/updateInfo?_method=put`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
          },
          body: data

        }
      );
      const response = await responsee.json();

      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return

      }
      else if (response.errors) {
        setErrorMessage(response.errors);
      }
      else if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleUpdate(e) })
      }

      if (response.message && response.message == "Success") {
        await setVisible(6)
        setSuccessAdd(i18n.language === "ar" ? "تم تعديل المعلومات بنجاح" : "Information have been modified successfully.")
        setRefresh(!refresh)


      }



    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }


  const handleImg = (e) => {
    if (e.target.files[0]) { setPickedImg(e.target.files[0]) }
  }

  const handleOnChangePhone = (value, index) => {
    let temp = [...phones]
    temp[index] = {
      ...temp[index], value: value
    }
    setPhones(temp)
  }
  const removePhone = (id) => {
    setPhones(pre => pre.filter(item => item.id !== id))
  }
  const addPhoneObject = () => { setPhones(pre => [...pre, { id: randomInteger(1, 10000), value: "" }]) }

  const Marker = ({ text }) => <div className="p-0 m-0 " style={{ width: "16px", height: "16px" }}><img src={markerr} className="p-0 m-0 " /> </div>;

  console.log('data', upData)
  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">

      <CContainer>


        <CCard className="">



          <CCardHeader>
            <CRow className=" row-gap-15">

              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong> {i18n.language === "ar" ? "تعديل المعلومات" : "Update Settings"}</strong>
              </CCol>
              <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                  onClick={() => history.goBack()} >{t(`Back`)}
                </CButton>

              </CCol>
            </CRow>
          </CCardHeader>

          <CRow>
            <CCol xs="12" sm="12" md="12" className=''>
              <CForm onSubmit={(e) => { handleUpdate(e) }}>
                <CCardBody>
                  <CCard>
                    <CCardBody>
                      <CRow >


                        <CCol md='12'> <strong>         {i18n.language === "ar" ? "معلومات الموقع" : "Website Information"}</strong></CCol>
                        {/* <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`Phone`)}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="phone"

                                onChange={handleData}
                                placeholder={t(`Phone`)}
                                value={upData.phone} />
                            </CCol>
                          </CFormGroup>
                        </CCol> */}
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`Email`)}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="email"
                                type='email'
                                onChange={handleData}
                                placeholder={t(`Email`)}
                                value={upData.email} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`profit_percentage`)}{" %"}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="profit_percentage"
                                type='number' min="0"
                                onChange={handleData}
                                placeholder={t(`profit_percentage`)}
                                value={upData.profit_percentage} />
                            </CCol>
                          </CFormGroup>
                        </CCol>

                        {phones.map((phone, index) => (

                          <CCol md="6" lg="6" xl="6" key={phone.id}>
                            <CFormGroup row>
                              <CCol md="12">
                                <CLabel htmlFor="text-input">{t("Phone")}  ({(index + 1)})   </CLabel>
                              </CCol>
                              <CCol xs="12" md="10" className="p-0" style={{ direction: "ltr" }}>

                                <CCol xs="12" md="12">
                                  <CInput name="phone"
                                    onChange={(e) => {
                                      handleOnChangePhone(e.target.value, index)
                                    }}
                                    required={index == 1 ? true : false}
                                    placeholder={t(`Phone`)}
                                    value={phone.value} />
                                </CCol>

                              </CCol>
                              {phones.length > 1 ?
                                <CCol xs="12" md="2">
                                  <CButton color="danger" type='button' onClick={() => { removePhone(phone.id) }} >
                                    <i className="fa fa-trash  " ></i>
                                  </CButton>
                                </CCol>
                                : null}

                            </CFormGroup  >

                          </CCol>
                        ))}
                        <CCol md='12'>
                          <CButton color="primary" className={'col-md-4 mb-2'} type='button'
                            onClick={() => addPhoneObject()}
                          >
                            {i18n.language == "ar" ? "إضافة هواتف اخرى" : "Add More Phones"}
                          </CButton>
                        </CCol>
                        <CCol xl="12">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`Address`)}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="address"

                                onChange={handleData}
                                placeholder={t(`Address`)}
                                value={upData.address} />
                            </CCol>
                          </CFormGroup>
                        </CCol>

                        <hr style={{ width: '100%' }} />

                        <CCol md='6' className='p-4'>
                          <CFormGroup row >
                            <CLabel col md={12}>{i18n.language == 'ar' ? `الشعار` : `Logo`}</CLabel>
                            <CCol xs="12" md="12">

                              <CInputFile accept="image/*" custom id="custom-file-input" onChange={(e) => { handleImg(e) }} />

                              <CLabel htmlFor="custom-file-input" variant="custom-file">
                                {pickedImg ? pickedImg.name : i18n.language == 'ar' ? `اختر صورة ...` : `Choose image ...`}

                              </CLabel>
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md='6'>
                          {pickedImg ? <img className="imgLogo" src={URL.createObjectURL(pickedImg)}></img> :
                            <>
                              {updatefetchedData && updatefetchedData.logo ?
                                <img className="imgLogo" src={updatefetchedData.logo}></img>

                                : null}
                            </>

                          }
                        </CCol>
                        <hr style={{ width: '100%' }} />
                        <CCol md='12'> <strong>{i18n.language === "ar" ? "روابط" : "URLS"}</strong></CCol>
                        {socialURLS.map((item) => (
                          < CCol md="6" key={item}>
                            <CFormGroup row>
                              <CCol md="12">
                                <CLabel htmlFor="text-input">
                                  {item.charAt(0).toUpperCase() + item.slice(1)}
                                </CLabel>
                              </CCol>
                              <CCol xs="12" md="12">

                                <CInput name={item}
                                  // required={item === "website" ? true : false}
                                  type="url"
                                  onChange={handleData}
                                  placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                                  value={upData[item]} />
                              </CCol>
                            </CFormGroup>
                          </CCol>

                        ))}

                        <hr style={{ width: '100%' }} />
                        <CCol md='12'> <strong>{i18n.language === "ar" ? "الموقع على الخريطة" : "Position on map"} </strong></CCol>

                        <CCol md="6" lg="3" xl="3">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{i18n.language === "ar" ? "خط العرض" : "latitude"} </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">
                              <CInput name="latitude"
                                type="number"
                                onChange={handleData}
                                placeholder={i18n.language === "ar" ? "خط العرض" : "Lat"}
                                value={upData.latitude} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="3" xl="3">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{i18n.language === "ar" ? "خط الطول" : "longitude"}  </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">
                              <CInput name="longitude"
                                type="number"
                                onChange={handleData}
                                placeholder={i18n.language === "ar" ? "خط الطول" : "longitude"}
                                value={upData.longitude} />
                            </CCol>
                          </CFormGroup>
                        </CCol>

                        <CCol md="6" lg="12"  >
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{i18n.language === "ar" ? "أو انقر على الخريطة لتحديد موقع" : "or click to select position on map"} </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">
                              <div style={{ height: '350px', width: '100%' }}>
                                <GoogleMapReact
                                  bootstrapURLKeys={{
                                    key: "AIzaSyAi51d5XZLV8oquto7pmBaEJqt2GYzJJvY",
                                    language: 'en'
                                  }}


                                  defaultCenter={{ lat: upData.latitude, lng: upData.longitude }}
                                  defaultZoom={defaultProps.zoom}
                                  onClick={({ lat, lng }) => { setUpData({ ...upData, latitude: lat, longitude: lng }) }}
                                  center={{ lat: upData.latitude, lng: upData.longitude }}
                                >
                                  <Marker
                                    lat={upData.latitude}
                                    lng={upData.longitude}
                                    text="My Marker"
                                  />
                                </GoogleMapReact>
                              </div>
                            </CCol>
                          </CFormGroup>
                        </CCol>


                      </CRow>


                    </CCardBody>
                    <CCardFooter className="p-4">
                      <CRow className="justify-content-center">

                        {errorMessage && typeof errorMessage === 'object' ? <CAlert color="danger" className='col-lg-12'  >
                          {Object.keys(errorMessage).map((item, i) => (
                            <React.Fragment key={i}>{errorMessage[item]}<br /></React.Fragment >
                          ))}
                        </CAlert>
                          :
                          null}
                        {errorMessage && typeof errorMessage === 'string' ? <CAlert color="danger" className='col-lg-12'  >{errorMessage} </CAlert> : null}


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
                            {t("Save")}
                            {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>} </CButton>}
                        </CCol>

                      </CRow>
                    </CCardFooter>
                  </CCard>



                </CCardBody>

              </CForm>
            </CCol>
          </CRow>

        </CCard>







      </CContainer >
    </div >
  )
}

export default ShippingSettingsUpdate
