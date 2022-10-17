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
  CInputGroupPrepend,
  CInputGroupText,
  CCardFooter
} from '@coreui/react'
import { CAlert } from '@coreui/react'
import '../../globalVar'
import './PropertySites.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';


const PropertySites = () => {
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [modal, setModal] = useState(true)
  const [small, setSmall] = useState(false)
  const [large, setLarge] = useState(false)
  const [danger, setDanger] = useState(false)
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [amount, setAmount] = useState('')
  const [visible, setVisible] = useState(10)


  useEffect(async () => {
    const fetchitems = async (e) => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/propertySites`,
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

          //  setTotalPages(response.payload.last_page)
          // if (activeUser.id) { setActiveUser(response.payload.filter(item => item.id == activeUser.id)[0]) }

        }

      } catch (err) {
        console.log(err);

      }

      // setLoading(false)


    }

    fetchitems()
  }, [currentPage, refresh])


  const [activeUser, setActiveUser] = useState('')
  const [charge, setCharge] = useState([])
  const [nocharge, setNoCharge] = useState(false)
  const handleShow = (item) => {
    setActiveUser(item)
    //  getUser(item.id)
    setPageStatus(1)
  }

  const handleBack = (item) => {
    setActiveUser('')
    setPageStatus(0)
    setAmount('')
    setCharge([])
    setNoCharge(false)
  }



  const getUser = async (id) => {

    try {
      const responsee = await fetch(
        `${global.apiUrl}/super/users/${id}`,
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
      console.log('response', response);
      console.log(response);
      if (response.success == true) {
        setActiveUser(response.payload)
      }
    } catch (err) {
      console.log(err);

    }
  }

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
        `${global.apiUrl}api/propertySites/${itemToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },


        }
      );
      const response = await responsee.json();
      console.log('response', response);

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

  return (

    <CRow>
      {pageStatus == 0 &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CRow className=" row-gap-15">
                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  {i18n.language === "ar" ? "الميزات" : "Amenities"}
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/PropertySites/AddNewPropertySite')} >
                    {i18n.language === "ar" ? "إضافة ميزة جديدة" : "Add New Amenity"}

                  </CButton>

                </CCol>

              </CRow>

            </CCardHeader>
            <CCardBody className='usersTabel'>
              {data && <CDataTable
                items={data}
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
                          onClick={() => history.push(`/PropertySites/Update/${item.id}`)}  >
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
        size="md"
        color='danger'>
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "حذف ميزة" : "Delete Property"} </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`${i18n.language === "ar" ? "هل انت متأكد من حذف ميزة" : "Are you sure you want to delete the Amenity"}   (${itemToDelete.name && itemToDelete.name[i18n.language]})`}

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

export default PropertySites
