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
  CFormGroup,
  CLabel,

  CRow
} from '@coreui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CIcon from '@coreui/icons-react'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './UpdatePage.scss'
import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { ProfileContext } from 'src/App'
import '../../../globalVar'
import Editor from './editor'
import { useTranslation } from 'react-i18next';
const UpdatePage = ({ props, match }) => {

  const [t, i18n] = useTranslation();
  let history = useHistory();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [visible, setVisible] = useState(10)
  // const [value, setValue] = useState()
  const [fetchedData, setfetchedData] = useState('')
  const [refresh, setRefresh] = useState('')
  const [errorMessage, setErrorMessage] = useState();

  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const userId = localStorage.getItem("user_id");
  const user_id = JSON.parse(userId);
  const [pageStatus, setPageStatus] = useState(0)
  const [upData, setUpData] = useState({
    title_ar: '',
    title_en: '',
    name: ""


  })
  const [OrginalData, setOrginalData] = useState({
    title_ar: '',
    title_en: '',



  })
  const { title_ar,
    title_en,

  } = upData;

  const [dataText, setDataText] = useState('')
  const [dataTextArabic, setDataTextArabic] = useState('')
  useEffect(async () => {
    const fetchSettings = async (e) => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/websitePages`,
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
          return refreshTokenHandler(function () { fetchSettings(e) })
        }
        if (response.message && response.message == "Success") {
          const temp = response.payload.filter(item => item.id == match.params.id)[0]
          setfetchedData(response.payload)
          setUpData({
            title_ar: temp.title.ar
            , title_en: temp.title.en,
            name: temp.name
          })
          setDataText(temp.body.en)
          setDataTextArabic(temp.body.ar)
          setOrginalData(temp)

        }




      } catch (err) {
        console.log(err);

      }

      // setLoading(false)


    }

    fetchSettings()
  }, [refresh])


  const [reload, setReload] = useState(true)
  const reloader = async () => {

    await setDataText('')
    await setDataTextArabic('')
    await setReload(!reload)
  }
  const handleData = (e) => {
    setUpData({ ...upData, [e.target.name]: e.target.value })

    setErrorMessage('')
    setSuccessAdd('')
  }

  const addNewPage = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')


    const data = new FormData();
    title_ar != OrginalData.title.ar && data.append('title[ar]', title_ar);
    title_en != OrginalData.title.en && data.append('title[en]', title_en);
    upData.name != OrginalData.name && data.append('name', upData.name);
    dataTextArabic && data.append('body[ar]', dataTextArabic);
    dataText && data.append('body[en]', dataText);
    // data.append('_method', 'put');

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/websitePages/${match.params.id}?_method=put`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
          },
          body: data,

        }
      );
      setLoading(false)
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
        return refreshTokenHandler(function () { addNewPage(e) })
      }

      if (response.message && response.message == "Success") {
        setSuccessAdd(i18n.language === "ar" ? "???? ?????????? ???????? ??????????" : " page has been updated successfully")

        setRefresh(!refresh)

      }



    } catch (err) {
      console.log(err);

    }

    setLoading(false)


  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">

      <CContainer>








        <CCard className="">



          <CCardHeader>
            <CRow className=" row-gap-15">

              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong>{i18n.language === "ar" ? "?????????? ????????" : "Update Page"}</strong>
              </CCol>

              <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                  onClick={() => history.goBack()} > {t("Back")}
                </CButton>

              </CCol>
            </CRow>
          </CCardHeader>
          <CForm onSubmit={(e) => { addNewPage(e) }}>
            <CCardBody className="p-4">
              <CRow>
                <CCol md="6" lg="6" xl="6">
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "?????? ????????????" : "Page Name"}</CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="name"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "?????? ????????????" : "Page Name"}
                        value={upData.name} />
                    </CCol>
                  </CFormGroup>
                </CCol>
                <CCol md="6" lg="6" xl="6">
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "?????????? ??????????????" : "English Title"}</CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="title_en"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "?????????? ??????????????" : "English Title"}
                        value={upData.title_en} />
                    </CCol>
                  </CFormGroup>
                </CCol>
                <CCol md="6" lg="6" xl="6">
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "?????????? ????????" : "Arabic Title"} </CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="title_ar"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "?????????? ????????" : "Arabic Title"}
                        value={upData.title_ar} />
                    </CCol>
                  </CFormGroup>
                </CCol>


              </CRow>
              <hr />
              <CRow className="justify-content-center" style={{ direction: 'ltr' }}>
                <CCol md="12" lg="12" xl="12">

                  <h5>{i18n.language === "ar" ? "?????????? ??????????????" : "English Content"}</h5>
                </CCol>

                <CCol md="12" lg="12" xl="12">

                  {dataText &&
                    <Editor className='col-md-12' setDataText={setDataText} dataText={dataText} />
                  }

                </CCol>


              </CRow>
              <hr />
              <CRow className="justify-content-center" style={{ direction: 'ltr' }}>
                <CCol md="12" lg="12" xl="12" style={{ direction: 'rtl' }}>
                  <h5>{i18n.language === "ar" ? "?????????? ????????" : "Arabic Content"}</h5>
                </CCol>

                <CCol md="12" lg="12" xl="12">
                  {dataTextArabic &&
                    <Editor className='col-md-12' setDataText={setDataTextArabic} dataText={dataTextArabic} />
                  }

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
                  </CAlert>


                }

                <CCol md="6" lg="6" xl="6" xs="12" sm="12" >
                  <CButton color="success" block type='submit'>{t("Save")}
                    {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>} </CButton>
                </CCol>

              </CRow>
            </CCardFooter>
          </CForm>
        </CCard>








      </CContainer>
    </div>
  )
}

export default UpdatePage
