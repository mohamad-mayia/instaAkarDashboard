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
  CForm, CInputCheckbox,
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
import Address from '../Address/Address'
import './users.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';

const queryString = require('query-string');
const Users = ({ location }) => {
  const parsed = queryString.parse(location.search);
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [modal, setModal] = useState(false)
  const [small, setSmall] = useState(false)
  const [addressID, setAddressID] = useState('')
  const [addressDetailsModal, setAddressDetailsModal] = useState({
    id: "",
    open: false,
    type: "",
    title: "",
    status: "",
    address: ""

  })
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [refresher, setRefresher] = useState(false)
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
  const [pages, setPages] = useState(1)
  const [categories, setCategories] = useState([])
  const [areas, setAreas] = useState([])
  const [roles, setRoles] = useState([])
  const [filters, setFilters] = useState({
    page: parsed && parsed.page ? parseInt(parsed.page) : 1,
    can_add_posts: parsed && parsed.can_add_posts ? parsed.can_add_posts : "",
    role_id: parsed && parsed.role_id ? parsed.role_id : "",
    area_id: parsed && parsed.area_id ? parsed.area_id : "",
    full_name: parsed && parsed.full_name ? parsed.full_name : "",
    email: parsed && parsed.email ? parsed.email : "",
    active: parsed && parsed.active ? parsed.active : "",
    special_companies: parsed && parsed.special_companies ? parsed.special_companies : "",
    phone_number: parsed && parsed.phone_number ? parsed.phone_number : "",
    PACIID: parsed && parsed.PACIID ? parsed.PACIID : "",
    category_id: parsed && parsed.category_id ? parsed.category_id : "",
  })
  const filterString = () => {
    let stringfilter = ""
    Object.keys(filters).forEach(item => {
      if (item != "page" && filters[item]) { stringfilter = `${stringfilter}${item}=${filters[item]}&` }
    })
    return stringfilter
  }
  useEffect(async () => {

    const fetchUsers = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      setRefresh(true)
      setErrorMessage("");
      // companies=0&
      history.push(`/users?page=${filters.page}&${filterString()}`)
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/users?page=${filters.page}&${filterString()}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },
          }
        );
        setRefresh(false)
        if (responsee.status == 204) {
          if (filters.page > 1) { setFilters({ ...filters, page: filters.page - 1 }) }
          else { setData([]) }
        }
        const response = await responsee.json();
        if (response.message === "Fail") {
          setErrorMessage(response.error);
          return
        }
        else if (response.errors) { setErrorMessage(response.errors); }
        else if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchUsers() })
        }

        if (response.message && response.message == "Success") {
          if (response.payload.data.length == 0) {
            if (filters.page > 1) { setFilters({ ...filters, page: filters.page - 1 }) }
            else { setData([]) }
          }
          setData(response.payload.data)
          setPages(response.payload.last_page)
        }

      } catch (err) {
        console.log(err);
      }
    }


    fetchUsers()
  }, [filters, refresher])

  useEffect(async () => {

    const fetchCategories = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/categories?is_category=1&paginate=0`,
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
          return refreshTokenHandler(function () { fetchCategories() })
        }

        if (response.message && response.message == "Success") {
          setCategories(response.payload)
        }

      } catch (err) {
        console.log(err);
      }
    }
    const fetchRoles = async () => {
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
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchRoles() })
        }

        if (response.message && response.message == "Success") {
          setRoles(response.payload)
        }

      } catch (err) {
        console.log(err);
      }
    }
    const fetchAreas = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/countries?country_id=1`,
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
          return refreshTokenHandler(function () { fetchAreas() })
        }

        if (response.message && response.message == "Success") {
          setAreas(response.payload)
        }

      } catch (err) {
        console.log(err);
      }
    }

    fetchAreas()
    fetchRoles()

    fetchCategories()
  }, [])

  const [activeUser, setActiveUser] = useState({})
  const [sendAddress, setSendAddress] = useState({})
  const handleShow = async (item) => {
    // await setActiveUser({ ...item })
    // await getSendAddress(item.customer.id)


    // setPageStatus(1)
    history.push(`/users/Details/${item.id}`)
  }

  const handleBack = (item) => {
    setActiveUser({})
    setSendAddress({})
    setPageStatus(0)

  }




  const [itemToDelete, setItemToDelete] = useState('')
  const handleShowModal = (item) => {
    setSmall(true)
    setItemToDelete(item)
  }
  const handleDelete = async () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    document.getElementById('root').style.opacity = 0.75;

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/deleteAccount?user_id=${itemToDelete.id}`,
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
        setRefresher(!refresher)
      }
      const response = await responsee.json();
      if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleDelete() })
      }

      if (response.success == true && response.payload) {
        setSmall(false)
        document.getElementById('root').style.opacity = 1;

        // setRefresher(!refresher)

      }
      // else{
      // setErrorMessage(response.errors)
      // }

    } catch (err) {
      console.log(err);

    }
    document.getElementById('root').style.opacity = 1;

  }

  const [activeCat, setActiveCat] = useState('0')
  const handleCat = (e) => {
    setActiveCat(e.target.value)

  }

  const setFilter = () => {
    if (activeCat == '0') {
      return data
    }
    else if (activeCat == '1') {
      return data.filter(item => item.admin == 1)
    }
    else if (activeCat == '2') {
      return data.filter(item => item.admin == 0)
    }

    else if (activeCat == '3') {
      return data.filter(item => item.active == 1)
    }
    else if (activeCat == '4') {
      return data.filter(item => item.active == 0)
    }

    // else if (activeCat == '5') {
    //   return data.filter(item => item.customer != null)
    // }
    else {
      return data
    }


  }
  const handleActivation = async (id, status) => {
    // e.preventDefault()
    // api/accountActivation?user_id=71&can_add_posts&activation
    document.getElementById('root').style.opacity = 0.4;
    const userToken = JSON.parse(localStorage.getItem("token"));
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/accountActivation?${id ? `user_id=${id}&` : ""}${status}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + userToken,
            // "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': 'https://localhost:3000',
            // 'Access-Control-Allow-Credentials': 'true',
            Accept: "application/json",
          },
          // body: JSON.stringify({
          //   _method: 'put',
          //   active: status,

          // })
          // ,

        }
      );
      if (responsee.status == 200) {

        document.getElementById('root').style.opacity = 1;
        setRefresher(!refresher)
      }
      const response = await responsee.json();
      if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleActivation(id, status) })
      }
      if (response.success) {
        document.getElementById('root').style.opacity = 1;
      }
    } catch (err) {
      console.log(err);
    }

    document.getElementById('root').style.opacity = 1;
  }



  const handleFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })

  }
  const handleSearch = (e) => {
    e.preventDefault()
    setFilters({ ...filters, page: 1 })
  }
  const resetFiler = () => {
    setFilters({
      can_add_posts: "",
      role_id: "",
      area_id: "",
      full_name: "",
      email: "",
      active: "",
      special_companies: "",
      phone_number: "",
      PACIID: "",
      category_id: "",
      page: 1
    })
  }

  return (

    <CRow>
      {pageStatus == 0 &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>

              <CRow className=" row-gap-15">

                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  <strong> {i18n.language === "ar" ? "المستخدمين" : "Users"}</strong>
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/users/AddNewUser')} >{i18n.language === "ar" ? "إضافة مستخدم جديد" : "Add New User"}
                  </CButton>

                </CCol>

              </CRow>
              <CForm onSubmit={(e) => { handleSearch(e) }}>
                <CRow className='mt-1'>
                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">   {t("Role")}</CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="role_id"
                          value={filters.role_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {/* <option value={"1"}  >  {t("Admin")}  </option> */}
                          {roles.length > 0 && roles.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>

                  </CCol>
                  <CCol md="3" lg="3" xl="3" >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Status")} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="active" value={filters.active}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          <option value='1'>{t("Active")}</option>
                          <option value='0'> {t("Inactive")}  </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>


                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">   {t("Category")}</CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="category_id"
                          value={filters.category_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {categories.length > 0 && categories.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="3" lg="3" xl="34">

                    <CFormGroup row>
                      <CCol md="12">  <CLabel htmlFor="text-input"> {t("Area")} </CLabel> </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="area_id"
                          value={filters.area_id} onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {areas.length > 0 && areas.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}


                        </CSelect>
                      </CCol>
                    </CFormGroup>

                  </CCol>
                  <CCol md="3" lg="3" xl="3" >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Add Posts")} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="can_add_posts" value={filters.can_add_posts}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          <option value='1'>{t("Yes")}</option>
                          <option value='0'> {t("No")}  </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol md="3" lg="3" xl="3" >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Special")} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="special_companies" value={filters.special_companies}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          <option value='1'>{t("Yes")}</option>
                          <option value='0'> {t("No")}  </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="2" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("PACIID")}   </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">

                        <CInput name="PACIID"
                          required
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("PACIID")}
                          value={filters.PACIID} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="4" xl="4">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("fullName")}   </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">

                        <CInput name="full_name"
                          required
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("fullName")}
                          value={filters.full_name} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="4" xl="4">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Email")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="email"
                          type='email'
                          onChange={(e) => handleFilter(e)}
                          placeholder={t(`Email`)}
                          value={filters.email} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="4" xl="4">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Phone")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="phone_number"
                          type='number'
                          onChange={(e) => handleFilter(e)}
                          placeholder={t(`Phone`)}
                          value={filters.phone_number} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="12"  >

                    {/* {<CButton color="info" type='submit'>
                      {t("Search")}
                      {loading && <>{' '}<i className="fa fa-spinner fa-spin" ></i></>} </CButton>} */}
                    {<CButton color="secondary" className={"mb-2"} type='button' onClick={() => { resetFiler() }}>
                      {t("Reset Fields")} </CButton>}
                  </CCol>
                  {errorMessage && typeof errorMessage === 'object' ? <CAlert color="danger" className='col-lg-12'  >
                    {Object.keys(errorMessage).map((item, i) => (
                      <React.Fragment key={i}>{errorMessage[item]}<br /></React.Fragment >
                    ))}
                  </CAlert>
                    :
                    null}
                  {errorMessage && typeof errorMessage === 'string' ? <CAlert color="danger" className='col-lg-12'  >{errorMessage} </CAlert> : null}


                </CRow>
              </CForm>
            </CCardHeader>
            <CCardBody className='usersTabel'>
              {data && <CDataTable
                items={setFilter()}
                fields={['id', { label: t("fullName"), key: 'full_name' },
                  { label: t("Phone"), key: 'phone' },
                  { label: t("Email"), key: 'email' },
                  { label: t("Role"), key: 'role' },
                  { label: t("Active"), key: 'active' },
                  { label: t("Special"), key: 'special' },
                  { label: t("AddPosts"), key: 'posts' },
                  // { label: "Account Type", key: 'نوع_الحساب' },
                  // { label: "Status", key: 'الحالة' },
                  { label: t("Actions"), key: 'actions' },]}
                hover
                striped
                // pagination
                loading={refresh}
                // sorter
                // itemsPerPage={12}
                // columnFilter
                // clickableRows
                // onRowClick={(item) => history.push(`/users/${item.id}`)}
                scopedSlots={{

                  // 'الاسم': (item) => (<td>{item.name}</td>), 
                  // 'البريد الالكتروني': (item) => (<td>{item.email}</td>),
                  'phone': (item) => (<td style={{ direction: "ltr" }}>{item.phone_numbers && item.phone_numbers.length > 0 ?
                    <>{`${item.phone_numbers[0].international_code}${item.phone_numbers[0].phone}`}
                    </> : "-"}</td>),
                  'email': (item) => (<td style={{ direction: "ltr" }}>{item.email ? item.email : "-"}</td>),
                  'active': (item) => (<td  >{!!item.active ? t("Active") : t("Inactive")}</td>),
                  'role': (item) => (<td  >{item.roles ? item.roles[0].name[i18n.language] : "-"}</td>),
                  'posts': (item) => (<td  >{item.roles[0].id == 1 || item.roles[0].id == 2 ?
                    "-"
                    :
                    <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"
                      checked={!!item.can_add_posts} onChange={() => { handleActivation(item.id, `can_add_posts=1`) }}
                    />

                  }
                  </td>),
                  'special': (item) => (<td  >{item.roles[0].id == 1 || item.roles[0].id == 2 ?
                    "-"
                    :
                    <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"
                      checked={!!item.company.special} onChange={() => { handleActivation("", `company_id=${item.company.id}&special=1`) }}
                    />

                  }
                  </td>),
                  'actions':
                    (item) => (
                      <td>{JSON.parse(localStorage.getItem("id")) != item.id && item.id != 1 ?
                        <CBadge className="p-1 px-2 m-1 badg-click" color="danger"
                          onClick={() => handleShowModal(item)}
                        >
                          {/* {i18n.language == 'ar' ? " حذف " : "Delete"} */}
                          <i className="fa fa-trash"></i>
                        </CBadge> : null}

                        {/* <br /> */}
                        <CBadge className="p-1  m-1 badg-click" color="info" onClick={() => handleShow(item)}  >
                          {i18n.language == 'ar' ? " عرض " : "Show...."}</CBadge>

                        {item.id != 1 ? <>  {item.active == 1 ?
                          <>
                            {/* <br /> */}
                            <CBadge className="p-1  m-1 badg-click" color="secondary" onClick={() => handleActivation(item.id, "activation=1")}  >
                              {i18n.language == 'ar' ? "الغاء التفعيل" : "Deactivate"} </CBadge></>
                          :
                          <>
                            {/* <br /> */}
                            <CBadge className="p-1  m-1 badg-click" color="primary" onClick={() => handleActivation(item.id, "activation=1")}  >
                              {i18n.language == 'ar' ? "تفعيل" : "Activate"}     </CBadge>

                          </>


                        }</>
                          : null
                        }

                      </td>
                    ),

                }}
              />}
              {pages > 1 ? <CPagination
                align="center"
                addListClass="some-class"
                activePage={filters.page}
                pages={pages}
                onActivePageChange={(e) => { setFilters({ ...filters, page: e }) }}
              /> : null}
            </CCardBody>
          </CCard>
        </CCol>
      }

      <CModal
        show={small}
        onClose={() => setSmall(false)}
        size="sm"
        color='danger'
      >
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "حذف مستخدم" : "Delete User"} </CModalTitle>
        </CModalHeader>
        <CModalBody>{i18n.language === "ar" ? "هل انت متأكد من حذف مستخدم" : "Are You Sure Want To Delete User"}  ({itemToDelete.full_name})

        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => handleDelete()}>{t("Delete")}</CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(false)}>{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default Users
