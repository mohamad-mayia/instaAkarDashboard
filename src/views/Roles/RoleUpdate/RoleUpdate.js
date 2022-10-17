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
import './RoleUpdate.scss'

import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ProfileContext } from 'src/App'
import '../../../globalVar'
// import { set } from 'core-js/core/dict'
// import MIN_SAFE_INTEGER from 'core-js/fn/number/min-safe-integer'
const RoleUpdate = ({ match }) => {
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const [visible, setVisible] = useState(10)
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [fetchedData, setfetchedData] = useState([])
  const [refresh, setRefresh] = useState('')
  const [errorMessage, setErrorMessage] = useState();
  const [files, setFiles] = useState([])
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [pickedImg, setPickedImg] = useState('')
  // const userId = localStorage.getItem("user_id");
  // const user_id = JSON.parse(userId);

  const [upData, setUpData] = useState({
    name_en: '',
    name_ar: '',
    // criteriaDirection: '',


  })
  const { name_en, name_ar,
  } = upData;

  useEffect(async () => {
    const getItem = async (id) => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/roles`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,

              Accept: "application/json",
            },
          }
        );
        if (responsee.status == 204) {

        }
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { getItem(id) })
        }

        if (response.message && response.message == "Success") {
          const temp = response.payload.filter(item => item.id == id)[0]
          setUpData({
            name_en: temp.name.en,
            name_ar: temp.name.ar,
          })

        }
      } catch (err) {
        console.log(err);

      }
    }
    getItem(match.params.id)
  }, [refresh])



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
    files && files.map((file, index) => {
      file.name_ar && data.append(`requiredDocuments[${index}][ar]`, file.name_ar);
      file.name_en && data.append(`requiredDocuments[${index}][en]`, file.name_en);
    })
    if (!files || files.length === 0) { data.append(`delete_all_required_documents`, 1); }
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/role/${match.params.id}?_method=put`,
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

      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        setLoading(false)
        return
      }
      else if (response.errors) {
        setErrorMessage(response.errors);
        setLoading(false)
      }
      else if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleUpdate(e) })
      }
      if (response.message && response.message == "Success") {
        setSuccessAdd(i18n.language === "ar" ? "تم تعديل دور  بنجاح" : "Role has been Updated successfully")
        setRefresh(!refresh)

      }



    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }


  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // const handleFiles = (e, index) => {

  //   if (e.target.files[0]) {
  //     let temp = [...files]
  //     temp[index] = { ...temp[index], file: e.target.files[0] }
  //     setFiles(temp)
  //   }

  // }
  const addFileObject = () => {
    setFiles(pre => [...pre, { id: randomInteger(1, 10000), name_en: "", name_ar: "" }])
  }
  const remveFile = (id) => {
    setFiles(pre => pre.filter(item => item.id !== id))
  }
  const handleFileName = (e, index) => {
    let temp = [...files]
    temp[index] = { ...temp[index], [e.target.name]: e.target.value }
    setFiles(temp)
  }



  console.log('data', upData)
  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">

      <CContainer>


        <CCard className="">



          <CCardHeader>
            <CRow className=" row-gap-15">

              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong>{i18n.language === "ar" ? "تعديل دور" : "Update Role"} </strong>
              </CCol>
              <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                  onClick={() => history.goBack()} >{t("Back")}
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


                        <CCol md='12'> <strong> {i18n.language == "ar" ? "معلومات الدور" : "Role Information"}</strong></CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input"> {t(`English Name`)}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="name_en"
                                required
                                onChange={handleData}
                                placeholder={t(`English Name`)}
                                value={upData.name_en} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`Arabic Name`)}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="name_ar"
                                required
                                onChange={handleData}
                                placeholder={t(`Arabic Name`)}
                                value={upData.name_ar} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md='12'> <strong> {i18n.language == "ar" ? "الملفات المطلوبة" : "Required Files"}</strong></CCol>

                        <CCol md='12'>

                          {files ?
                            //  className={"fileRow"}
                            files.map((file, index) => (
                              <CRow key={file.id} >
                                <CCol md="5" lg="5" xl="5">
                                  <CFormGroup row>
                                    <CCol md="12">
                                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? `اسم الملف بالانكليزية (${(index + 1)})` : `New File (${(index + 1)}) name en`}</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="12">

                                      <CInput name="name_en"
                                        required
                                        onChange={(e) => handleFileName(e, index)}
                                        placeholder={i18n.language === "ar" ? `اسم الملف بالانكليزية (${(index + 1)})` : `New File (${(index + 1)}) name en`}
                                        value={file.name_en} />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                                <CCol md="5" lg="5" xl="5">
                                  <CFormGroup row>
                                    <CCol md="12">
                                      <CLabel htmlFor="text-input">{i18n.language === "ar" ? `اسم الملف بالعربية (${(index + 1)})` : `New File (${(index + 1)}) name ar`}</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="12">

                                      <CInput name="name_ar"
                                        required
                                        onChange={(e) => handleFileName(e, index)}
                                        placeholder={i18n.language === "ar" ? `اسم الملف بالعربية (${(index + 1)})` : `New File (${(index + 1)}) name ar`}
                                        value={file.name_ar} />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                                <CCol md='2'>
                                  <CFormGroup row>
                                    <CCol md="12">
                                      <CLabel htmlFor="text-input"> {i18n.language == "ar" ? "إزالة" : "Remove"}</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="12">
                                      <CButton color="danger" type='button' onClick={() => { remveFile(file.id) }} >
                                        <i className="fa fa-trash  " ></i>
                                      </CButton>
                                    </CCol>
                                  </CFormGroup>
                                  {/* <div className={"fileCont"}> */}
                                  {/* <div>  {file.file.name}</div> */}

                                  {/* </div> */}
                                </CCol>
                              </CRow>
                            ))

                            :
                            null}

                        </CCol>
                        <CCol md='12'>
                          <CButton color="primary" className={'col-md-4'} type='button'
                            onClick={() => addFileObject()}
                          >
                            {i18n.language == "ar" ? "إضافة ملفات اخرى" : "Add More Files"}
                          </CButton>
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
                            {t("Save")}  {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>} </CButton>}
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
    </div>
  )
}

export default RoleUpdate
