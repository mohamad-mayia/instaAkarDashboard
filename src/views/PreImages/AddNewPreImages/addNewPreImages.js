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

  CInputFile,

  CRow
} from '@coreui/react'

import './addNewPreImages.scss'
import { ProfileContext } from 'src/App'
import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import '../../../globalVar'
// import { set } from 'core-js/core/dict'
// import MIN_SAFE_INTEGER from 'core-js/fn/number/min-safe-integer'
const AddNewPreImages = () => {
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const [visible, setVisible] = useState(10)

  const [errorMessage, setErrorMessage] = useState();

  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const [preDefinedImages, setPreDefinedImages] = useState([])


  const vlaidationData = () => {

    if (preDefinedImages.length == 0) {
      setErrorMessage(i18n.language === "ar" ? "يجب ادخال صورة او اكثر"
        : "You must enter one or more images.");
      setVisible(8)
      return false
    }

    return true

  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessAdd('')
    if (!vlaidationData()) { return }
    const apiENDPOINT = "api/addPredefinedAdminPostImages";
    setLoading(true)
    const userToken = JSON.parse(localStorage.getItem("token"));

    var data = new FormData()
    preDefinedImages.length > 0 && preDefinedImages.forEach((item, index) => {
      data.append(`images[${index}][file]`, item)
    })
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
        return refreshTokenHandler(function () { handleAddUser(e) })
      }

      if (response.message && responsee.status == 200) {
        setVisible(6)
        setSuccessAdd(response.message)

        setPreDefinedImages([])


      }

    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }




  const handleImagesPosts = (e) => {
    if (e.target.files[0]) {
      setPreDefinedImages(pre => [...pre, ...e.target.files])
    }
  }

  const handleRemovePreFile = (index) => {
    let temp = [...preDefinedImages]
    temp.splice(index, 1)
    setPreDefinedImages([...temp])
  }



  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">
      <CContainer>
        <CCard className="">
          <CCardHeader>
            <CRow className=" row-gap-15">
              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong>{i18n.language === "ar" ? "اضافة صور للمنشورات" : "Add New Pre-Defined Posts Images"}</strong>
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
              <CForm onSubmit={(e) => { handleAddUser(e) }}>
                <CCardBody>
                  <CCard>
                    <CCardBody>
                      <CRow >


                        {/* className="justify-content-center" */}

                        {/* <CCol md='12'> <strong>{i18n.language === "ar" ? "   " : "User Information"}</strong></CCol>
                        */}

                        <CCol md='6'  ><CCol md='12'  >
                          <CFormGroup row >
                            <CLabel col md={12}>{i18n.language == 'ar' ? `صورة مسبقة للمنشورات` : `Predefined Post Pictures`}</CLabel>
                            <CCol xs="12" md="12">

                              <CInputFile accept="image/*" required
                                custom multiple id="custom-files-input"
                                onChange={(e) => { handleImagesPosts(e) }} />

                              <CLabel htmlFor="custom-files-input" variant="custom-file">
                                {i18n.language == 'ar' ? `اختر صور ...` : `Choose images ...`}

                              </CLabel>
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        </CCol>
                        <CCol md="12"></CCol>
                        {preDefinedImages.length > 0 ?

                          <>
                            {preDefinedImages.map((item, index) => (
                              <CCol key={`${index}${item.lastModified}`} md='3' className="mb-1">
                                <ul className=" card list-group list-group-flush">
                                  <li className="list-group-item  ">
                                    <img className="imgprediifined" src={URL.createObjectURL(item)}></img>
                                  </li>
                                  <CButton color="secondary" className='col-lg-12  ' type='button'
                                    onClick={() => handleRemovePreFile(index)}
                                    style={{ borderRadius: '0' }} >
                                    {t("Remove")}
                                  </CButton>

                                  {/* </CCol> */}
                                </ul>

                              </CCol>
                            ))}
                          </>



                          : null}

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
                            onShowChange={setVisible}

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

export default AddNewPreImages
