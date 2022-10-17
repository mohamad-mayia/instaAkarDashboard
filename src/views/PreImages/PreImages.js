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
import ImageGallery from 'react-image-gallery';

import './PreImages.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';
const queryString = require('query-string');

const PreImages = ({ location }) => {
  const parsed = queryString.parse(location.search);
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)

  const [small, setSmall] = useState(false)
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [errorMessage, setErrorMessage] = useState();

  const [succesAdd, setSuccessAdd] = useState()

  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const [visible, setVisible] = useState(10)
  const [filters, setFilters] = useState({ page: parsed && parsed.page ? parseInt(parsed.page) : 1 })
  const [pages, setPages] = useState(1)
  useEffect(async () => {
    const fetchitems = async (e) => {

      const userToken = JSON.parse(localStorage.getItem("token"));
      history.push(`/PreImages/AllPreImages?page=${filters.page}`)
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/viewPredefinedAdminPostImages?page=${filters.page}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },


          }
        );
        if (responsee.status == 204) {
          if (filters.page > 1) { setFilters({ page: filters.page - 1 }) }
          else { setData([]) }
        }
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchitems(e) })
        }

        if (response.message && response.message == "Success") {
          if (response.payload.data.length == 0) {
            if (filters.page > 1) { setFilters({ page: filters.page - 1 }) }
            else { setData([]) }
          }
          setData(response.payload.data)
          setPages(response.payload.last_page)
        }


      } catch (err) {
        console.log(err);

      }

      // setLoading(false)


    }

    fetchitems()
  }, [filters, refresh])


  const [activeUser, setActiveUser] = useState('')
  const [charge, setCharge] = useState([])
  const [nocharge, setNoCharge] = useState(false)


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
        `${global.apiUrl}api/deletePredefinedAdminPostImages?images[0]=${itemToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },


        }
      );
      if (responsee.status == 200) {
        setSmall(false)
        document.getElementById('root').style.opacity = 1;

        setRefresh(!refresh)

      }
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
                  {i18n.language === "ar" ? "صور المنشورات مسبقة التعريف" : "Pre-Defined Posts Images"}
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/PreImages/AddNewPreImages')} >
                    {i18n.language === "ar" ? "إضافة صور جديدة" : "Add New Images"}

                  </CButton>

                </CCol>

              </CRow>

            </CCardHeader>
            <CCardBody className='usersTabel'>
              <CRow>
                <CCol md="5">
                  {data && <CDataTable
                    items={data}
                    fields={['id',
                      { label: i18n.language === "ar" ? "الصورة" : "Image", key: 'image' },

                      { label: i18n.language === "ar" ? "عمليات" : "Actions", key: 'Actions' }]}
                    hover
                    striped
                    size="sm"
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


                          </td>
                        ),
                      'image': (item) => (<td className='tdImage'> <img src={item.path} />  </td>),


                    }}
                  />}
                </CCol>
                {data && data.length > 0 ?
                  <CCol md="7" style={{ direction: "ltr" }}>

                    <ImageGallery items={data.map(itemm => { return { original: itemm.path, thumbnail: itemm.path, } })} />
                  </CCol>
                  : null}

              </CRow>


              {pages > 1 ? <CPagination
                align="center"
                addListClass="some-class"
                activePage={filters.page}
                pages={pages}
                onActivePageChange={(e) => { setFilters({ page: e }) }}
              /> : null}
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
          <CModalTitle>{i18n.language === "ar" ? "حذف صورة" : "Delete Image"} </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`${i18n.language === "ar" ? "هل انت متأكد من حذف صورة" : "Are you sure you want to delete image"}`}

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

export default PreImages
