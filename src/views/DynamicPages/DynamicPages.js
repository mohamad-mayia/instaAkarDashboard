import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
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
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CCardFooter
} from '@coreui/react'
import { CAlert } from '@coreui/react'
import '../../globalVar'
import './DynamicPages.scss'

import { useTranslation } from 'react-i18next';
import { ProfileContext } from 'src/App'



const DynamicPages = () => {
  const history = useHistory()
  const [t, i18n] = useTranslation();

  const { refreshTokenHandler } = useContext(ProfileContext)
  const [small, setSmall] = useState(false)


  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(false)



  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  useEffect(async () => {
    const fetchpages = async (e) => {
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
        if (responsee.status == 204) { setData([]) }
        const response = await responsee.json();
        // console.log('response',response);
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchpages(e) })
        }
        if (response.message && response.message == "Success") {
          setData(response.payload)
          if (activeUser.id) { setActiveUser(response.payload.filter(item => item.id == activeUser.id)[0]) }

        }


      } catch (err) {
        console.log(err);

      }



    }

    fetchpages()
  }, [refresh])



  const [activeUser, setActiveUser] = useState('')

  const handleShow = (item) => {
    setActiveUser(item)
    // getUser(item.id)

    setPageStatus(1)
  }

  const handleBack = (item) => {
    setActiveUser('')
    setPageStatus(0)

  }

  const [itemToDelete, setItemToDelete] = useState('')
  const handleShowModal = (item) => {
    setSmall(true)
    setItemToDelete(item)
  }
  const handleDelete = async () => {

    document.getElementById('root').style.opacity = 0.75;

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/websitePages/${itemToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },


        }
      );
      const response = await responsee.json();

      if (response.message && response.message === "Unauthenticated.") {
        return refreshTokenHandler(function () { handleDelete() })
      }

      if (responsee.status == 200) {
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
                  <strong> {i18n.language === "ar" ? "الصفحات" : "The Pages"}</strong>
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/DynamicPages/AddNewPage')} > {i18n.language === "ar" ? "إضافة صفحة جديدة" : "Add New Page"}
                  </CButton>

                </CCol>




              </CRow>
            </CCardHeader>
            <CCardBody className='usersTabel'>
              {data && <CDataTable
                items={data}
                fields={['id', { label: i18n.language === "ar" ? "الاسم" : "Name", key: 'name' },
                  { label: i18n.language === "ar" ? "العنوان العربي" : "Arabic Title", key: 'name_ar' },
                  { label: i18n.language === "ar" ? "العنوان الانكليزي" : "English Title", key: 'name_en' },
                  { label: i18n.language === "ar" ? "عمليات" : "Actions", key: 'Actions' }]}
                hover
                striped
                pagination

                // sorter
                itemsPerPage={12}
                // columnFilter
                // clickableRows
                // onRowClick={(item) => history.push(`/users/${item.id}`)}
                scopedSlots={{
                  'name_ar': (item) => (<td> {item.title.ar}  </td>),
                  'name_en': (item) => (<td> {item.title.en}  </td>),
                  'Actions':
                    (item) => (
                      <td>
                        <CBadge className="p-1 m-1 badg-click" color="danger"
                          onClick={() => handleShowModal(item)}
                        >{i18n.language == 'ar' ? "حذف" : "Delete"}</CBadge>
                        <CBadge className="p-1  m-1 badg-click" color="info" onClick={() => handleShow(item)}  >
                          {i18n.language == 'ar' ? "عرض ....." : "Show...."}</CBadge>

                      </td>
                    ),

                }}
              />}

            </CCardBody>
          </CCard>
        </CCol>
      }
      {
        pageStatus == 1 && activeUser &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CRow className="justify-content-center row-gap-15 ">




                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  {activeUser.name}
                </CCol>
                <CCol md="6" lg="6" xl="6" className=" row-gap-15 col-gap-15 ">
                  <CButton color="info" className='col-lg-4  col-md-4 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push(`/DynamicPages/Update/${activeUser.id}`)} >

                    {t("Update")}
                  </CButton>
                  <CButton color="success" className='col-lg-4  col-md-4col-sm-12 col-xs-12 updatebtn'
                    onClick={() => handleBack()} >{t("Back")}
                  </CButton>

                </CCol>
              </CRow>

            </CCardHeader>
            <CCardBody className=''>
              <CRow>
                <CCol md='12'><strong>{i18n.language === "ar" ? "معلومات صفحة" : "Page Information"}</strong></CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>

                      <tr >
                        <td> {i18n.language === "ar" ? "العنوان العربي" : "Arabic Title"}
                        </td>
                        <td><strong>{activeUser.title.ar}</strong></td>
                      </tr>

                    </tbody>
                  </table>
                </CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>

                      <tr >
                        <td>{i18n.language === "ar" ? "العنوان الانكليزي" : "English Title"} </td>
                        <td><strong>{activeUser.title.en}</strong></td>
                      </tr>




                    </tbody>
                  </table>
                </CCol>
              </CRow>
              <hr />


              <CRow style={{ direction: 'ltr' }}>
                <CCol md='12'><strong>{i18n.language === "ar" ? "محتوى انكليزي" : "English Content"}</strong></CCol>
                <CCol style={{ textAlign: 'start' }} lg={12} dangerouslySetInnerHTML={{ __html: activeUser.body.en }}
                >

                </CCol>
              </CRow>
              <hr />
              <CRow>
                <CCol md='12'><strong>{i18n.language === "ar" ? "محتوى عربي" : "Arabic Content"}</strong></CCol>
                <CCol lg={12} dangerouslySetInnerHTML={{ __html: activeUser.body.ar }}>

                </CCol>
              </CRow>






            </CCardBody>
          </CCard>
        </CCol>


      }
      <CModal
        show={small}
        onClose={() => setSmall(!false)}
        size="sm"
        color='danger'
      >
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "حذف صفحة" : "Delete Page"}  </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`${i18n.language === "ar" ? "هل انت متأكد من حذف صفحة" : "Are you sure you want to delete the page"}   (${itemToDelete.name && itemToDelete.name})`}

        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => handleDelete()}>{t("Delete")} </CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(false)}>{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default DynamicPages
