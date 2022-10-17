import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CInput,
  CInputGroup,
  CInputGroupPrepend, CLabel,
  CSelect,
  CFormGroup,
  CInputGroupText,
  CCardFooter
} from '@coreui/react'
import { CAlert } from '@coreui/react'
import '../../globalVar'
import './SubPropertyTypes.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';


const SubPropertyTypes = () => {
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)

  const [small, setSmall] = useState(false)

  const [type, setType] = useState("")
  const [subTypes, setSubTypes] = useState([])
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [currentPage, setCurrentPage] = useState(1)

  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const [visible, setVisible] = useState(10)


  useEffect(async () => {
    const fetchitems = async (e) => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/propertyTypes`,
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
          return refreshTokenHandler(function () { fetchitems(e) })
        }

        if (response.message && response.message == "Success") {
          setData(response.payload)
          if (type) { setSubTypes(response.payload.find(item => item.id == type).sub_types) }
        }

      } catch (err) {
        console.log(err);

      }

    }

    fetchitems()
  }, [refresh])









  const [itemToDelete, setItemToDelete] = useState('')
  const handleShowModal = (item) => {
    setSmall(true)
    setItemToDelete(item)
    setErrorMessage('')
    setSuccessAdd('')
  }
  const handleDelete = async () => {
    setErrorMessage('')
    setSuccessAdd('')
    document.getElementById('root').style.opacity = 0.75;
    const userToken = JSON.parse(localStorage.getItem("token"));

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/propertyTypes/${itemToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },


        }
      );
      const response = await responsee.json();

      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return
      }
      if (response.errors) { setErrorMessage(response.errors); }
      if (response.message && response.message === "Unauthenticated.") {
        return refreshTokenHandler(function () { handleDelete() })
      }
      if (response.message && response.message === "Success") {
        setSmall(false)
        document.getElementById('root').style.opacity = 1;

        setRefresh(!refresh)

      }
      // else{
      // setErrorMessage(response.errors)
      // }

    } catch (err) {
      console.log(err);

    }
    document.getElementById('root').style.opacity = 1;

  }

  const handleType = async (value) => {
    setType(value)
    if (value) {
      const temp = data.find(item => item.id == value).sub_types
      setSubTypes(temp)
    }
    else {
      setSubTypes([])
    }

  }


  return (

    <CRow>
      {pageStatus == 0 &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CRow className=" row-gap-15">
                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  {i18n.language === "ar" ? "الانواع الفرعية" : "Sub property types"}
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/PropertyTypes/AddNewSubPropertyType')} >
                    {i18n.language === "ar" ? "إضافة نوع فرعي جديد" : "Add New Sub property type"}

                  </CButton>

                </CCol>
                <CCol md="5"  >
                  <CFormGroup row>
                    <CCol md="12">
                      <CLabel htmlFor="text-input">   {i18n.language == 'ar' ? "النوع" : "Property Type"}</CLabel>
                    </CCol>
                    <CCol xs="12" md="12">
                      <CSelect custom name="category_id"
                        value={type}
                        onChange={(e) => handleType(e.target.value)}>
                        <option value='' >  {i18n.language == 'ar' ? "اختر نوع" : "Select Property Type"}</option>

                        {data.length > 0 && data.map((item) => {
                          return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                        })}

                      </CSelect>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CRow>

            </CCardHeader>
            <CCardBody className='usersTabel'>
              {!type && <CRow>
                <CCol md='12'>
                  <CAlert className='col-lg-12 ' color="warning" >
                    {i18n.language == 'ar' ? "اختر نوع لعرض الانواع الفرعية الخاصة به" : "Select a Property Type to view its Sub property types"}
                  </CAlert>
                </CCol>
              </CRow>
              }
              {subTypes && type && <CDataTable
                items={subTypes}
                fields={['id',
                  { label: i18n.language === "ar" ? "الاسم العربي" : "Arabic Name", key: 'name_ar' },
                  { label: i18n.language === "ar" ? "الاسم الانكليزي" : "English Name", key: 'name_en' },
                  { label: i18n.language === "ar" ? "عمليات" : "Actions", key: 'Actions' }]}
                hover
                striped
                pagination
                sorter
                itemsPerPage={12}
                // columnFilter
                // clickableRows
                // onRowClick={(item) => history.push(`/users/${item.id}`)}
                scopedSlots={{
                  'Actions':
                    (item) => (
                      <td>
                        <CBadge className="p-1 m-1 badg-click" color="danger"
                          onClick={() => handleShowModal(item)}
                        > {t("Delete")}</CBadge>
                        {/* <br /> */}
                        <CBadge className="p-1  m-1 badg-click" color="info"
                          onClick={() => history.push(`/PropertyTypes/SubUpdate/${type}/${item.id}`)}  >
                          {t("Update")}  </CBadge>

                      </td>
                    ),
                  'name_ar': (item) => (<td> {item.name.ar}  </td>),
                  'name_en': (item) => (<td> {item.name.en}  </td>),

                }}
              />}
            </CCardBody>
          </CCard>
        </CCol>
      }

      <CModal
        show={small}
        onClose={() => setSmall(false)}
        size="sm"
        color='danger'>
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "حذف نوع فرعي" : "Delete Sub Property Type"} </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`${i18n.language === "ar" ? "هل انت متأكد من حذف نوع فرعي" : "Are you sure you want to delete the sub property type"}   (${itemToDelete.name && itemToDelete.name[i18n.language]})`}
          {errorMessage && typeof errorMessage === 'object' ? <CAlert color="danger" className='col-lg-12'  >
            {Object.keys(errorMessage).map((item, i) => (
              <React.Fragment key={i}>{errorMessage[item]}<br /></React.Fragment >
            ))}
          </CAlert>
            :
            null}
          {errorMessage && typeof errorMessage === 'string' ? <CAlert color="danger" className='col-lg-12'  >{errorMessage} </CAlert> : null}


        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => handleDelete()}>{t("Delete")} </CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(false)}>{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default SubPropertyTypes
