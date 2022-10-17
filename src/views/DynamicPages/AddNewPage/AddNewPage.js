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
import './AddNewPage.scss'
import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { ProfileContext } from 'src/App'
import '../../../globalVar'
import Editor from './editor'
import Editor2 from './editor2'
import { useTranslation } from 'react-i18next';
const AddNewPage = (props) => {
  let history = useHistory();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [visible, setVisible] = useState(10)
  const [fetchedData, setfetchedData] = useState('')
  const [refresh, setRefresh] = useState('')
  const [errorMessage, setErrorMessage] = useState();

  const [t, i18n] = useTranslation();
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
  const { title_ar,
    title_en,

  } = upData;

  const [dataText, setDataText] = useState('')
  const [dataTextArabic, setDataTextArabic] = useState('')



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

    if (dataText == '' || dataTextArabic == '') {
      setVisible(5)
      setErrorMessage({ "content_en": [i18n.language === "ar" ? "أدخل محتوى عربي  ومحتوى انكليزي" : "Please enter arabic and english content"], })
      setLoading(false)
      return
    }
    const data = new FormData();
    title_ar && data.append('title[ar]', title_ar);
    title_en && data.append('title[en]', title_en);
    dataTextArabic && data.append('body[ar]', dataTextArabic);
    dataText && data.append('body[en]', dataText);
    data.append('name', upData.name);
    // data.append('files', []);
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/websitePages`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
          },
          body: data,

        }
      );
      const response = await responsee.json();
      setLoading(false)
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
        setSuccessAdd(i18n.language === "ar" ? "تم إضافة صفحة جديدة بنجاح" : "New page has been added successfully")
        await setDataText('')
        await setDataTextArabic('')
        setUpData({ title_ar: '', title_en: '', name: "" })

        reloader()
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
                <strong>{i18n.language === "ar" ? "إضافة صفحة جديدة" : "Add New Page"}</strong>
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
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "اسم الصفحة" : "Page Name"}</CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="name"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "اسم الصفحة" : "Page Name"}
                        value={upData.name} />
                    </CCol>
                  </CFormGroup>
                </CCol>
                <CCol md="6" lg="6" xl="6">
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "عنوان انكليزي" : "English Title"}</CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="title_en"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "عنوان انكليزي" : "English Title"}
                        value={upData.title_en} />
                    </CCol>
                  </CFormGroup>
                </CCol>
                <CCol md="6" lg="6" xl="6">
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? "عنوان عربي" : "Arabic Title"} </CLabel>
                    </CCol>
                    <CCol xs="12" md="12">

                      <CInput name="title_ar"
                        required
                        onChange={handleData}
                        placeholder={i18n.language === "ar" ? "عنوان عربي" : "Arabic Title"}
                        value={upData.title_ar} />
                    </CCol>
                  </CFormGroup>
                </CCol>


              </CRow>
              <hr />
              <CRow className="justify-content-center" style={{ direction: 'ltr' }}>
                <CCol md="12" lg="12" xl="12">

                  <h5>{i18n.language === "ar" ? "محتوى انكليزي" : "English Content"}</h5>
                </CCol>

                <CCol md="12" lg="12" xl="12">
                  {reload == true ?
                    <Editor className='col-md-12' setDataText={setDataText} dataText={dataText} />
                    :
                    <Editor2 className='col-md-12' setDataText={setDataText} dataText={dataText} />
                  }

                </CCol>


              </CRow>
              <hr />
              <CRow className="justify-content-center" style={{ direction: 'ltr' }}>
                <CCol md="12" lg="12" xl="12" style={{ direction: 'rtl' }}>

                  <h5>{i18n.language === "ar" ? "محتوى عربي" : "Arabic Content"}</h5>
                </CCol>

                <CCol md="12" lg="12" xl="12">
                  {
                    reload == true ?
                      <Editor className='col-md-12' setDataText={setDataTextArabic} dataText={dataTextArabic} />

                      :
                      <Editor2 className='col-md-12' setDataText={setDataTextArabic} dataText={dataTextArabic} />

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

export default AddNewPage
