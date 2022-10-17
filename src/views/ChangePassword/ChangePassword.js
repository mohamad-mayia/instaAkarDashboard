import React, { useState, useContext } from 'react'
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

  CFormGroup,
  CLabel,


  CRow
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify';
import './ChangePassword.scss'
import { ProfileContext } from 'src/App'
import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import '../../globalVar'
const ChangePassword = () => {
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const [visible, setVisible] = useState(10)

  const [errorMessage, setErrorMessage] = useState();

  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const [upData, setUpData] = useState({
    old_password: '',
    new_password: "",
    new_password_confirmation: '',

  })
  const { old_password,
    new_password,
    new_password_confirmation

  } = upData;


  const handleData = (e) => {
    setErrorMessage('')
    setSuccessAdd('')

    setUpData({ ...upData, [e.target.name]: e.target.value })


  }



  const vlaidationData = () => {
    if (upData.new_password != upData.new_password_confirmation) {
      setErrorMessage(i18n.language === "ar" ? "كلمة المرور وتأكيد كلمة المرور غير متطابقين"
        : "Password and confirm password do not match");
      setVisible(8)
      return false
    }


    return true

  }
  const notify = (msg) => toast.info(msg, {
    // position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    className: '',
    draggable: true,
    colored: true,
    progress: undefined,
  });
  const handleChangePAsww = async (e) => {
    e.preventDefault()
    if (!vlaidationData()) { return }
    const apiENDPOINT = "api/passwordReset?_method=put";
    setLoading(true)
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    var data = new FormData()
    data.append(`old_password`, upData.old_password)
    data.append(`new_password`, upData.new_password)
    data.append(`new_password_confirmation`, upData.new_password_confirmation)
    try {
      const responsee = await fetch(
        `${global.apiUrl}${apiENDPOINT}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
          },
          body: data
          ,
        }
      );
      const response = await responsee.json();
      setLoading(false)
      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return
      }
      else if (response.errors) { setErrorMessage(response.errors); }
      else if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleChangePAsww(e) })
      }

      if (response.message && responsee.status == 200) {

        setVisible(6)
        setSuccessAdd(i18n.language === "ar" ? "سجل دخول باستخدام كلمة المرور الجديدة" : "Log in with your new password")
        notify(i18n.language === "ar" ? "سجل دخول باستخدام كلمة المرور الجديدة" : "Log in with your new password")
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("id");
          history.push("/login");
        }, 4000)

      }


    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }



  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">

      <CContainer>


        <ToastContainer
          position="top-left"
          autoClose={4000}
          hideProgressBar
          className="toast-container"
          newestOnTop={true}
          closeOnClick
          rtl={i18n.language === "ar" ? true : false}
          colored={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <CCard className="">



          <CCardHeader>
            <CRow className=" row-gap-15">

              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong>{t("Change Password")}</strong>
              </CCol>

              <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                  onClick={() => history.goBack()} >  {t("Back")}
                </CButton>

              </CCol>
            </CRow>
          </CCardHeader>

          <CRow>
            <CCol xs="12" sm="12" md="12" className=''>
              <CForm onSubmit={(e) => { handleChangePAsww(e) }}>
                <CCardBody>
                  <CCard>
                    <CCardBody>
                      <CRow >


                        {/* className="justify-content-center" */}

                        <CCol md='12'> <strong>{t("Change Password")}  </strong></CCol>

                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`old_password`)} </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">
                              <CInput name="old_password"
                                required
                                onChange={handleData}
                                placeholder={t(`old_password`)}
                                value={upData.old_password} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`new_password`)} </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="new_password"
                                required
                                onChange={handleData}
                                placeholder={t(`new_password`)}
                                value={upData.new_password} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">
                                {t("new_password_confirmation")}
                              </CLabel>

                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="new_password_confirmation"
                                required
                                onChange={handleData}
                                placeholder={t("new_password_confirmation")}
                                value={upData.new_password_confirmation} />
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

                          <CAlert className='col-lg-12    '
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







      </CContainer>
    </div >
  )
}

export default ChangePassword
