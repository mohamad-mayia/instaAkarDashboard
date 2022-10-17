import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import { CAlert } from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import "../../../globalVar"
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
const Login = () => {
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const [visible, setVisible] = useState(10)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [extensionNumber, setExtensionNumber] = useState("");
  const [emailFor, setEmailFor] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [logged, setLogged] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [succesAdd, setSuccessAdd] = useState()
  const [succesmsg, setSuccessmsg] = useState()
  const [pageStatus, setPageStatus] = useState(0)
  useEffect(() => {
    if (tokenString || logged) {
      history.push("/")
    }
  }, [logged])
  const langChange = (langss) => { i18n.changeLanguage(langss); }


  const handelOnSubmit = async (e) => {
    setErrorMessage('')
    setSuccessAdd('')
    setSuccessmsg('')
    e.preventDefault();
    const formData = new FormData();
    email && formData.append("email", email);

    formData.append("password", password);
    formData.append("remember_me", 1);
    const requestOptions2 = {
      method: "POST",
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'multipart/form-data'
        //  ' X-Requested-With' : 'XMLHttpRequest'
      },
      body: formData,
    };
    try {
      const response = await fetch(
        `${global.apiUrl}api/login`,
        requestOptions2
      );
      setVisible(10)
      const responseData = await response.json();
      if (responseData.message === "Fail") {
        setErrorMessage(responseData.error);
        return

      }
      else if (responseData.errors) {
        setErrorMessage(responseData.errors);
      }
      else if (responseData.message === "Success" && responseData.payload.roles[0].id == 1) {
        setErrorMessage('');
        new Promise((resolve) => {
          localStorage.setItem("token", JSON.stringify(responseData.payload.token));
          localStorage.setItem("refresh_token", JSON.stringify(responseData.payload.refresh_token));
          localStorage.setItem("id", JSON.stringify(responseData.payload.id));
          resolve(true)
        }).then((status) => { setLogged(true) })

      }
    } catch (error) {
      console.log(error);
    }
  };
  const handelOnSubmitGetPAss = async (e) => {
    setErrorMessage('')
    setSuccessAdd('')
    setSuccessmsg('')
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", emailFor);

    const requestOptions2 = {
      method: "POST",
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'multipart/form-data'
        //  ' X-Requested-With' : 'XMLHttpRequest'
      },
      body: formData,
    };
    try {
      const response = await fetch(
        `${global.apiUrl}api/forgotPassword`,
        requestOptions2
      );

      // if (response.status == '204') {
      //   setErrorMessage('Sorry,, This Email not registerd');
      //   console.log(responseData.message);
      // }
      setVisible(10)
      if (response.status == 200) {

        setSuccessAdd(t("Please check your email!"))
        setSuccessmsg(t("Click Back To Login With New Password"))


      }
      const responseData = await response.json();
      if (responseData.message === "Fail") {
        setErrorMessage(responseData.error);
        return

      }
      else if (responseData.errors) {
        setErrorMessage(responseData.errors);
      }


      // if (responseData.message && responseData.message !== "Please check your email!") {
      //   setErrorMessage(responseData.message);
      //   console.log(responseData.message);
      // }



    } catch (error) {
      console.log(error);
    }
  };



  const handlePage = (x) => {
    setErrorMessage('')
    setPageStatus(x)
    setSuccessAdd('')
    setSuccessmsg('')
    setEmailFor("")
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {i18n.language == 'ar' &&
        <Helmet><link rel="stylesheet" type="text/css" href="/assets/arabicStyle/arabicStyle.css" /></Helmet>}
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
        {pageStatus == 0 ?
          <CRow className="justify-content-center">
            <CCol md="6">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={(e) => { handelOnSubmit(e) }} >
                      <h1>{i18n.language == 'ar' ? "تسجيل الدخول" : "LOGIN"}</h1>
                      <p className="text-muted">{i18n.language == 'ar' ? "تسجيل الدخول الى حسابك" : "Login To Your Account"}</p>
                      {errorMessage && typeof errorMessage === 'object' ? <CAlert color="danger">
                        {Object.keys(errorMessage).map((item, i) => (
                          <React.Fragment key={i}>{errorMessage[item]}<br /></React.Fragment >
                        ))}
                      </CAlert>
                        :
                        null}
                      {errorMessage && typeof errorMessage === 'string' ? <CAlert color="danger">{errorMessage} </CAlert> : null}
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                            {/* <CIcon name="cil-code" /> */}
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" placeholder={t("Email")} autoComplete="email"
                          name="Username/Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput required type="password" placeholder={t("Password")} autoComplete="current-password"
                          name="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="12" className="text-end">
                          <a color="link" type='button' className="px-0"
                            onClick={() => { handlePage(1) }}>{t('Forgot password')}
                          </a>
                        </CCol>
                        <CCol xs="6">
                          <CButton color="primary" type='submit' className="px-4">{i18n.language == 'ar' ? "تسجيل الدخول" : "LOGIN"}</CButton>
                        </CCol>
                        <CCol xs="6" className="text-end">

                          {i18n.language == 'ar' ?
                            <CButton color="link" type='button' className="px-0" onClick={() => { langChange('en') }}>{t('English')}
                            </CButton>

                            :
                            <CButton color="link" type='button' className="px-0" onClick={() => { langChange('ar') }}>

                              {t('Arabic')}

                            </CButton>

                          }
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>

              </CCardGroup>
            </CCol>
          </CRow>
          :

          <CRow className="justify-content-center">
            <CCol md="6">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={(e) => { handelOnSubmitGetPAss(e) }} autocomplete="off">
                      <h1>{t('Forgot password')}</h1>
                      <p className="text-muted">
                        {i18n.language === "ar" ? "سيتم ارسال كلمة مرور جديدة الى بريدك الالكتروني" : "We will send a new password to your email"}

                      </p>
                      {errorMessage && typeof errorMessage === 'object' ? <CAlert color="danger">
                        {Object.keys(errorMessage).map((item, i) => (
                          <React.Fragment key={i}>{errorMessage[item]}<br /></React.Fragment >
                        ))}
                      </CAlert>
                        :
                        null}
                      {errorMessage && typeof errorMessage === 'string' ? <CAlert color="danger">{errorMessage} </CAlert> : null}
                      {succesAdd && <CAlert
                        color="success"
                      // closeButton
                      >
                        {succesAdd}<br></br>{succesmsg}
                      </CAlert>}
                      <CInputGroup className="mb-3" autoComplete="new-off">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput required type="email"
                          placeholder={t("Email")}
                          autocomplete="off" role="presentation"
                          // name="email"
                          value={emailFor}
                          onChange={(e) => setEmailFor(e.target.value)}
                        />
                      </CInputGroup>


                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" type='submit' className="px-4">{t("Send")}</CButton>
                        </CCol>
                        <CCol xs="6" className="text-end">
                          <a color="link" className="px-0" type='button' onClick={() => handlePage(0)} >
                            {i18n.language === "ar" ? "عودة الى تسجيل الدخول" : "Back To Login"}
                          </a>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>

              </CCardGroup>
            </CCol>
          </CRow>

        }
      </CContainer>
    </div>
  )
}

export default Login
