

import './countries.scss'
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
import './countries.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';


const Countries = () => {
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
          `${global.apiUrl}api/countries`,
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
          if (activeUser.id) { setActiveUser(response.payload.filter(item => item.id == activeUser.id)[0]) }

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
    setSmall(!large)
    setItemToDelete(item)
  }
  const handleDelete = async () => {
    setErrorMessage('')
    setSuccessAdd('')
    document.getElementById('root').style.opacity = 0.75;
    const userToken = JSON.parse(localStorage.getItem("token"));

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/countries/${itemToDelete.id}`,
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
                  {i18n.language === "ar" ? "??????????" : "Countries"}
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/Countries/AddNewCountry')} >
                    {i18n.language === "ar" ? "?????????? ???????? ????????" : "Add new Country"}

                  </CButton>

                </CCol>

              </CRow>

            </CCardHeader>
            <CCardBody className='usersTabel'>
              {data && <CDataTable
                items={data}
                fields={['id',
                  { label: i18n.language === "ar" ? "?????????? ????????????" : "Arabic Name", key: 'name_ar' },
                  { label: i18n.language === "ar" ? "?????????? ??????????????????" : "English Name", key: 'name_en' },
                  { label: i18n.language === "ar" ? "???????????? ????????????????" : "Currency Ar", key: 'currency_ar' },
                  { label: i18n.language === "ar" ? "???????????? ??????????????????????" : "Currency En", key: 'currency_en' },
                  { label: i18n.language === "ar" ? "????????????" : "Actions", key: 'Actions' }]}
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
                          onClick={() => history.push(`/Country/Update/${item.id}`)}  >
                          {t("Update")}  </CBadge>

                      </td>
                    ),
                  'name_ar': (item) => (<td> {item.name.ar}  </td>),
                  'name_en': (item) => (<td> {item.name.en}  </td>),
                  'currency_ar': (item) => (<td> {item.currency ? item.currency.ar : "-"}  </td>),
                  'currency_en': (item) => (<td> {item.currency ? item.currency.en : "-"}  </td>),

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
          <CModalTitle>{i18n.language === "ar" ? "?????? ????????" : "Delete Country"} </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`${i18n.language === "ar" ? "???? ?????? ?????????? ???? ?????? ????????" : "Are you sure you want to delete the country"}   (${itemToDelete.name && itemToDelete.name[i18n.language]})`}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => handleDelete()}>{t("Delete")} </CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(false)}>{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}


export default Countries
