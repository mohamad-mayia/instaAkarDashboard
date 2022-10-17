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
  CPagination, CSelect,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CAlert,


} from '@coreui/react'
import { Pagination } from '../Pagination/pagination'
import '../../globalVar'
import ReplayForm from './ReplayForm/ReplayForm'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';
import './contactUs.scss'



const ConatctUs = () => {
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [visible, setVisible] = useState(10)
  const [small, setSmall] = useState(false)
  const [dataText, setDataText] = useState('')
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationInfo, setPaginationInfo] = useState({ current_page: 1, total: 1 })
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [modal, setModal] = useState(false)
  const [activeItem, setActiveItem] = useState({ id: '', text: '' })
  const [url, setUrl] = useState(`api/viewAllRequests`)

  const handleSetItemToreplay = async (item) => {

    await setActiveItem({ id: item.id, text: item.text })
    setDataText('')
    await setModal(true)
  }
  const closeModal = () => {
    setModal(false)
    setDataText('')
    setActiveItem({ id: '', text: '' })
    setErrorMessage('')
    setSuccessAdd('')

  }
  const handleUrlFilter = (e) => {
    // setCurrentPage(1)
    setUrl(`api/viewAllRequests${e.target.value}`)


  }
  // ?seen=1&replied=1?page=${pageNumber}
  const fetchFAQs = async (pageNumber) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    try {
      const responsee = await fetch(
        `${global.apiUrl}${url}`,
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
      if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { fetchFAQs(pageNumber) })
      }
      if (response.message && response.message == "Success") {
        setData(response.payload)
      }
    } catch (err) {
      console.log(err);

    }

  }
  useEffect(() => {

    fetchFAQs()
  }, [currentPage, refresh, url])



  const [itemToDelete, setItemToDelete] = useState('')
  const handleShowModal = (item) => {
    setSmall(!small)
    setItemToDelete(item)
  }
  const handleDelete = async () => {
    setErrorMessage('')
    setSuccessAdd('')
    document.getElementById('root').style.opacity = 0.75;

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/contacts/${itemToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },


        }
      );

      if (responsee.status == 200) {
        setSmall(!small)
        document.getElementById('root').style.opacity = 1;

        setRefresh(!refresh)

      }


    } catch (err) {
      console.log(err);

    }
    document.getElementById('root').style.opacity = 1;

  }
  const handleReplay = async (e) => {
    e.preventDefault()
    setLoading(true)

    setErrorMessage('')
    setSuccessAdd('')

    const userToken = JSON.parse(localStorage.getItem("token"));
    const data = new FormData();
    dataText && data.append('reply', dataText);
    dataText && data.append('contact_us_id', activeItem.id);
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/reply`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
            // "Content-Type": "application/json",
            //'Access-Control-Allow-Origin': 'https://localhost:3000',
            // 'Access-Control-Allow-Credentials': 'true',

          },
          body: data,

        }
      );
      if (responsee.status == 200) {
        // setDataText("")
        setActiveItem(activeItem)
        setSuccessAdd(i18n.language == "ar" ? "تم ارسال الرد بنجاح" : "Reply has been sent successfully")
        setRefresh(!refresh)
        setVisible(5)
      }
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
        return refreshTokenHandler(function () { handleReplay(e) })
      }
    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }
  const handleSeen = (id) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const data = new FormData();
    data.append('contact_us_id', id);
    fetch(`${global.apiUrl}api/setRequestAsSeen?_method=put`,
      {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + userToken,
          Accept: "application/json",
        }, body: data,
      })
      .then(res => res.json())
      .then(res => {
        if (res.message && (res.message == "Contact us request has been set as seen" || res.message == "Contact us request has been set as unseen")) {
          setRefresh(!refresh)
        }
      })
      .catch(err => console.log(err))
  }


  return (

    <CRow>
      {pageStatus == 0 &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CCol md='12'><strong>{t("Messages")}</strong></CCol>

              <CCol md="4" lg="4" xl="4" >
                <CSelect custom name="select" onChange={(e) => handleUrlFilter(e)}>
                  <option value='' >{t("All")} </option>
                  <option value='?seen=1' >{i18n.language === "ar" ? "تمت رؤيته" : "Seen"}</option>
                  <option value='?seen=0' >{i18n.language === "ar" ? "لم تتم رؤيته" : "Unseen"}</option>
                  <option value='?replied=1' >{i18n.language === "ar" ? "تم الرد" : "Replied"}</option>
                  <option value='?replied=0' >{i18n.language === "ar" ? "لم يتم الرد" : "Not Replied"}</option>
                </CSelect>


              </CCol>

            </CCardHeader>
            <CCardBody className='usersTabel'>
              {data.length > 0 && <CDataTable
                items={data}
                fields={['id',
                  { label: t("Name"), key: "name" },
                  { label: t("Email"), key: 'email' },
                  { label: t("Phone"), key: 'phone' },
                  { label: t("Address"), key: 'address' },
                  { label: t("Message"), key: 'text' },
                  { label: t("Replay"), key: 'Replay' },
                  { label: t("Date"), key: 'date' },
                  { label: t("Actions"), key: 'عمليات' }
                ]}
                hover
                striped
                sorter
                pagination
                itemsPerPage={12}
                size="sm"
                // clickableRows  dangerouslySetInnerHTML={{ __html: activeUser.content_en }}
                // onRowClick={(item) => history.push(`/users/${item.id}`)}
                scopedSlots={{
                  'Replay': (item) => (<td dangerouslySetInnerHTML={{ __html: item.replied && item.reply ? item.reply : "No Replay" }}></td>),
                  'text': (item) => (<td dangerouslySetInnerHTML={{ __html: item.text }}></td>),
                  'date': (item) => (<td >{item && item.created_at.slice(0, 10)}</td>),
                  'عمليات':
                    (item) => (
                      <td>
                        {/* <CBadge className="p-1 m-1 badg-click" color="danger"
                          onClick={() => handleShowModal(item)}
                        >{t("Delete")}     </CBadge>
                        <br /> */}
                        <CBadge className="p-1  m-1 badg-click" color={item.seen ? "success" : "secondary"}
                          // style={{ cursor: item.seen ? 'pointer' : "auto" }}
                          onClick={() => handleSeen(item.id)}>
                          {item.seen ?t("Viewed")  : t("View")}</CBadge>
                        {/* <br /> */}
                        {item.replied ?
                          <CBadge className="p-1  m-1 badg-click" color="success"  >
                            {i18n.language === "ar" ? "تم الرد" : "Replied"}      </CBadge> :
                          <CBadge className="p-1  m-1 badg-click" color="info"
                            onClick={() => handleSetItemToreplay(item)}  >
                            {i18n.language === "ar" ? "رد" : "Reply"}      </CBadge>}

                        {/* <br /> */}

                      </td>


                    ),

                }}
              />}

            </CCardBody>
            {/* <Pagination
              current_page={paginationInfo.current_page}
              total={paginationInfo.total}
              fetchFAQs={fetchFAQs}
            /> */}

          </CCard>
        </CCol>
      }

      <CModal
        show={modal}
        onClose={closeModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "ارسال رد" : "Send Reply"}    </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow  >
            <CCol md="12">{i18n.language === "ar" ? "الرسالة :" : "Message :"}  </CCol>
            {/* */}
            <CCol md="12" >{activeItem.text ? <div dangerouslySetInnerHTML={{ __html: activeItem.text }}></div> : null}</CCol>
            <CCol md="12">{i18n.language === "ar" ? "الرد :" : "Reply :"}    </CCol>
            {activeItem.message != '' && <ReplayForm setDataText={setDataText} dataText={dataText} />}
          </CRow>
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
              <CCol md='12'>
                <CAlert className='col-lg-12  col-md-12 col-sm-12 col-xs-12 '
                  color="success"
                  show={visible}
                  // closeButton
                  onShowChange={setVisible}
                // closeButton
                >
                  {succesAdd}
                </CAlert>
              </CCol>}
          </CRow>
        </CModalBody>
        <CModalFooter>

          <CButton color="primary" onClick={(e) => { handleReplay(e) }} >{i18n.language === "ar" ? "ارسال رد" : "Send Reply"}     {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>}</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => closeModal()}
          >{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>







      <CModal
        show={small}
        onClose={() => setSmall(!small)}
        size="sm"
        color='danger'>
        <CModalHeader closeButton>
          <CModalTitle> Delete Message</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`Are you sure you want to delete message (${itemToDelete.name})`}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => handleDelete()}>Delete</CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(!small)}>Cancel</CButton>
        </CModalFooter>
      </CModal>





    </CRow >
  )
}

export default ConatctUs
