import React, { useState, useEffect, useContext, useMemo } from 'react'
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
import './Posts.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const queryString = require('query-string');
const Posts = ({ location }) => {
  const parsed = queryString.parse(location.search);
  const history = useHistory()
  const [t, i18n] = useTranslation();
  const theme = createTheme({
    direction: i18n.langauge === "ar" ? 'rtl' : "ltr", // Both here and <body dir="rtl">
  });

  // const cacheRtl = createCache({
  //   key: 'muirtl',
  //   stylisPlugins: [prefixer, rtlPlugin],
  // });
  const cacheRtl = useMemo(() => {
    if (i18n.language === 'ar') {
      return createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });
    } else {
      return createCache({ key: 'css' });
    }
  }, [i18n.language]);
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
  const [offersTypes, setOffersTypes] = useState([])
  const [pricingTypes, setPricingTypes] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])
  const [propertySites, setPropertySites] = useState([])
  const [areas, setAreas] = useState([])
  const [companies, setCompanies] = useState([])
  const [company, setCompany] = useState(null)
  const [tags, setTags] = useState([])
  const [filters, setFilters] = useState({
    page: parsed && parsed.page ? parseInt(parsed.page) : 1,
    area_id: parsed && parsed.area_id ? parsed.area_id : "",
    special: parsed && parsed.special ? parsed.special : "",
    category_id: parsed && parsed.category_id ? parsed.category_id : "",
    tag_id: parsed && parsed.tag_id ? parsed.tag_id : "",
    company_id: parsed && parsed.company_id ? parsed.company_id : "",
    text: parsed && parsed.text ? parsed.text : "",
    price_from: parsed && parsed.price_from ? parsed.price_from : "",
    price_to: parsed && parsed.price_to ? parsed.price_to : "",
    area_from: parsed && parsed.area_from ? parsed.area_from : "",
    area_to: parsed && parsed.area_to ? parsed.area_to : "",
    number_of_rooms: parsed && parsed.number_of_rooms ? parsed.number_of_rooms : "",
    number_of_bathrooms: parsed && parsed.number_of_bathrooms ? parsed.number_of_bathrooms : "",
    property_type_id: parsed && parsed.property_type_id ? parsed.property_type_id : "",
    offer_type_id: parsed && parsed.offer_type_id ? parsed.offer_type_id : "",
    price_type_id: parsed && parsed.price_type_id ? parsed.price_type_id : "",
    property_site_id: parsed && parsed.property_site_id ? parsed.property_site_id : "",

  })
  const filterString = () => {
    let stringfilter = ""
    Object.keys(filters).forEach(item => {
      if (item != "page" && filters[item]) { stringfilter = `${stringfilter}${item}=${filters[item]}&` }
    })
    return stringfilter
  }
  useEffect(async () => {

    const fetchPosts = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      setRefresh(true)
      setErrorMessage("");
      // companies=0&
      history.push(`/Posts?page=${filters.page}&${filterString()}`)
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/posts?page=${filters.page}&${filterString()}`,
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
        else if ((response.message && ((response.message == "Unauthenticated.")) || (response.message == "Success" && !response.payload.data))) {
          return refreshTokenHandler(function () { fetchPosts() })
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


    fetchPosts()
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
    const offersTypes = async () => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/offerAndPriceTypes?is_price_type=0`,
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
          return refreshTokenHandler(function () { offersTypes() })
        }

        if (response.message && response.message == "Success") {
          setOffersTypes(response.payload)

        }

      } catch (err) {
        console.log(err);

      }
    }
    const fetchPropertyTypes = async (e) => {

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
          return refreshTokenHandler(function () { fetchPropertyTypes(e) })
        }
        if (response.message && response.message == "Success") { setPropertyTypes(response.payload) }

      } catch (err) {
        console.log(err);

      }
    }
    const fetchPropertySites = async (e) => {

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
          return refreshTokenHandler(function () { fetchPropertySites(e) })
        }

        if (response.message && response.message == "Success") {
          setPropertySites(response.payload)
        }

      } catch (err) { console.log(err); }


    }
    const fetchCompanies = async () => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/users?companies=1`,
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
          return refreshTokenHandler(function () { fetchCompanies() })
        }

        if (response.message && response.message == "Success") {
          setCompanies(response.payload)
          if (filters.company_id) { setCompany(response.payload.find(item => item.id == filters.company_id)) }
        }

      } catch (err) { console.log(err); }


    }
    fetchCompanies()
    fetchPropertySites()
    fetchPropertyTypes()
    offersTypes()
    fetchAreas()
    fetchCategories()
  }, [])
  useEffect(async () => {
    const fetchTags = async (val) => {

      const userToken = JSON.parse(localStorage.getItem("token"))
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/categories?is_category=0${!val ? "" : `&category_id=${val}`}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },


          }
        );
        if (responsee.status == 204) { setTags([]) }
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchTags(val) })
        }
        if (response.message && response.message == "Success") { setTags(response.payload) }

      } catch (err) {
        console.log(err);
      }

    }
    fetchTags(filters.category_id)
  }, [filters.category_id])
  useEffect(async () => {
    const fetcgPricingTypes = async (val) => {

      const userToken = JSON.parse(localStorage.getItem("token"))
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/offerAndPriceTypes?is_price_type=1&type_id=${val}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },


          }
        );
        if (responsee.status == 204) { setPricingTypes([]) }
        const response = await responsee.json();
        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetcgPricingTypes(val) })
        }
        if (response.message && response.message == "Success") { setPricingTypes(response.payload) }

      } catch (err) {
        console.log(err);
      }

    }

    if (filters.offer_type_id) {
      fetcgPricingTypes(filters.offer_type_id)
    }
    else {
      setPricingTypes([])
    }
  }, [filters.offer_type_id])
  const [activeUser, setActiveUser] = useState({})
  const [sendAddress, setSendAddress] = useState({})
  const handleShow = async (item) => {
    // await setActiveUser({ ...item })
    // await getSendAddress(item.customer.id)


    // setPageStatus(1)
    history.push(`/Posts/Post/${item.id}`)
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
    setErrorMessage('')
    setSuccessAdd('')
  }
  const handleDelete = async () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    document.getElementById('root').style.opacity = 0.75;

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/deletePost/${itemToDelete.id}`,
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
        setRefresher(!refresher)
      }
      document.getElementById('root').style.opacity = 1;
      const response = await responsee.json();
      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return
      }
      if (response.errors) { setErrorMessage(response.errors); }
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
    if (e.target.name === "category_id") {
      setFilters({ ...filters, [e.target.name]: e.target.value, tag_id: "", page: 1 })
      return

    }
    if (e.target.name === "offer_type_id") {
      setFilters({ ...filters, [e.target.name]: e.target.value, price_type_id: "", page: 1 })
      return

    }

    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 })

  }
  const handleSearch = (e) => {
    e.preventDefault()
    setFilters({ ...filters, page: 1 })
  }
  const resetFiler = () => {
    setFilters({
      page: 1,
      area_id: "",
      special: "",
      category_id: "",
      tag_id: "",
      company_id: "",
      text: "",
      price_from: "",
      price_to: "",
      area_from: "",
      area_to: "",
      number_of_rooms: "",
      number_of_bathrooms: "",
      property_type_id: "",
      offer_type_id: "",
      price_type_id: "",
      property_site_id: "",
    })
    setCompany(null)
  }
  const handleCompanyChange = (val) => {
    setCompany(val)
    if (val) {

      setFilters({ ...filters, company_id: val.id, page: 1 })
    } else {
      setFilters({ ...filters, company_id: "", page: 1 })
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
                  <strong> {i18n.language === "ar" ? "المنشورات" : "Posts"}</strong>
                </CCol>

                <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                  {/* <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push('/users/AddNewUser')} >{i18n.language === "ar" ? "إضافة مستخدم جديد" : "Add New User"}
                  </CButton> */}

                </CCol>

              </CRow>
              <CForm onSubmit={(e) => { handleSearch(e) }}>
                <CRow className='mt-1'>
                  <CCol md="3" lg="3" xl="3">

                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{i18n.language == 'ar' ? "الشركة" : "Company"} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CacheProvider value={cacheRtl}>
                          <ThemeProvider theme={theme}>
                            <div  >
                              <Autocomplete
                                id="country-select-demo"
                                size="small"
                                options={companies}
                                autoHighlight
                                autoComplete='off--'
                                // dir='rtl'
                                // rtl='true'
                                value={company}
                                onChange={(event, newValue) => { handleCompanyChange(newValue) }}
                                getOptionLabel={(option) => option.full_name}
                                renderOption={(props, option) => (
                                  <Box component="li"   {...props}>

                                    {option.full_name}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={t("All")}
                                    inputProps={{ ...params.inputProps, autoComplete: 'off--', }}
                                  />
                                )}

                              />

                            </div>
                          </ThemeProvider>
                        </CacheProvider>




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
                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">   {t("Tags")}</CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="tag_id"
                          value={filters.tag_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {tags.length > 0 && tags.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">   {i18n.language == 'ar' ? "نوع العرض" : "Offer Type"}</CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="offer_type_id"
                          value={filters.offer_type_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {offersTypes.length > 0 && offersTypes.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">  {i18n.language == 'ar' ? "خيار التسعير" : "Price Option"} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="price_type_id"
                          value={filters.price_type_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {pricingTypes.length > 0 && pricingTypes.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">  {i18n.language == 'ar' ? "نوع العقار" : "Property Type"} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="property_type_id"
                          value={filters.property_type_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {propertyTypes.length > 0 && propertyTypes.map((item) => {
                            return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                          })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol md="3"  >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">  {i18n.language == 'ar' ? "ميزة" : "Amenity"} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="property_site_id"
                          value={filters.property_site_id}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          {propertySites.length > 0 && propertySites.map((item) => {
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


                  <CCol md="3" lg="2" xl="2" >
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Special")} </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CSelect custom name="special" value={filters.special}
                          onChange={(e) => handleFilter(e)}>
                          <option value='' >{t("All")}</option>
                          <option value='1'>{t("Yes")}</option>
                          <option value='0'> {t("No")}  </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol md="4" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Min Price")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="price_from"
                          type='number'
                          onChange={(e) => handleFilter(e)}
                          placeholder={t(`Min Price`)}
                          value={filters.price_from} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Max Price")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="price_to"
                          type='number'
                          onChange={(e) => handleFilter(e)}
                          placeholder={t(`Max Price`)}
                          value={filters.price_to} />
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol md="4" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Min Area")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="area_from"
                          type='number' min={0}
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("Min Area")}
                          value={filters.area_from} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Max Area")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="area_to"
                          type='number' min={0}
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("Max Area")}
                          value={filters.area_to} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="2" xl="2">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Number Of Rooms")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="number_of_rooms"
                          type='number' min={0}
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("Number Of Rooms")}
                          value={filters.number_of_rooms} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="4" lg="3" xl="3">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Number Of Bath Rooms")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="number_of_bathrooms"
                          type='number' min={0}
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("Number Of Bath Rooms")}
                          value={filters.number_of_bathrooms} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="6" lg="6" xl="6">
                    <CFormGroup row>
                      <CCol md="12">
                        <CLabel htmlFor="text-input">{t("Text")}    </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CInput name="text"
                          type='text'
                          onChange={(e) => handleFilter(e)}
                          placeholder={t("Text")}
                          value={filters.text} />
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
            <CCardBody className='usersTabel postsTable'>
              {data && <CDataTable
                items={setFilter()}
                fields={['id', { label: t("post_title"), key: 'title' },
                  { label: t("username"), key: 'username' },
                  { label: t("property_type"), key: 'property_type' },
                  { label: i18n.language == 'ar' ? "خيار التسعير" : "Price Option", key: 'price_type' },
                  { label: i18n.language == 'ar' ? "السعر" : "Price", key: 'price' },
                  { label: t("Phone"), key: 'phone' },
                  { label: t("Role"), key: 'role' },
                  { label: t("Category"), key: 'category' },
                  { label: t("Area"), key: 'area' },
                  { label: t("created_at"), key: 'created_at' },
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
                  'created_at': (item) => (<td  >{item.created_at ? item.created_at.slice(0, 10) : "-"}</td>),
                  'title': (item) => (<td  >{item.title ? item.title[i18n.language] : "-"}</td>),
                  'category': (item) => (<td  >{item.category ? item.category.name[i18n.language] : "-"}</td>),
                  'area': (item) => (<td  >{item.area ? item.area.name[i18n.language] : "-"}</td>),
                  'price_type': (item) => (<td  >{item.price_type ? <>{item.offer_type.name[i18n.language]}{"/"}{item.price_type.name[i18n.language]}</> : "-"}</td>),
                  'phone': (item) => (<td style={{ direction: "ltr" }}>{item.phone_numbers && item.phone_numbers.length > 0 ?
                    <>{`${item.phone_numbers[0].international_code}${item.phone_numbers[0].phone}`}
                    </> : "-"}</td>),
                  'email': (item) => (<td style={{ direction: "ltr" }}>{item.email ? item.email : "-"}</td>),
                  'active': (item) => (<td  >{!!item.active ? t("Active") : t("Inactive")}</td>),
                  'property_type': (item) => (<td  >{item.property_type ? <>{item.main_property_type.name[i18n.language]}{"/"}{item.property_type.name[i18n.language]}</> : "-"}</td>),
                  'role': (item) => (<td  >{item.role ? item.role[0].name[i18n.language] : "-"}</td>),
                  'posts': (item) => (<td  >{item.roles[0].id == 1 || item.roles[0].id == 2 ?
                    "-"
                    :
                    <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"
                      checked={!!item.can_add_posts} onChange={() => { handleActivation(item.id, `can_add_posts=1`) }}
                    />

                  }
                  </td>),

                  'actions':
                    (item) => (
                      <td>
                        <CBadge className="p-1 px-2 m-1 badg-click" style={{ fontSize: "12px" }} color="danger"
                          onClick={() => handleShowModal(item)}   >
                          <i className="fa fa-trash"></i>
                        </CBadge>


                        <CBadge className="p-1  m-1 badg-click" style={{ fontSize: "12px" }} color="info" onClick={() => handleShow(item)}  >
                          {i18n.language == 'ar' ? " عرض " : "Show...."}</CBadge>
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
        size="md"
        color='danger'
      >
        <CModalHeader closeButton>
          <CModalTitle>{i18n.language === "ar" ? "حذف منشور" : "Delete Post"} </CModalTitle>
        </CModalHeader>
        <CModalBody>{i18n.language === "ar" ? "هل انت متأكد من حذف منشور" : "Are You Sure Want To Delete Post"}  ({itemToDelete.username})
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
          <CButton color="danger" onClick={() => handleDelete()}>{t("Delete")}</CButton>{' '}
          <CButton color="secondary" onClick={() => setSmall(false)}>{t("Cancel")}</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default Posts
