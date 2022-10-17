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
  CBadge,
  CInputFile,
  CInputCheckbox,
  CRow
} from '@coreui/react'
import PhoneInput from 'react-phone-input-2'
import { MultiSelect } from "react-multi-select-component";
import GoogleMapReact from 'google-map-react';
import CIcon from '@coreui/icons-react'
import '../addNewUser/addNewUser.scss'
import { ProfileContext } from 'src/App'
import { CAlert } from '@coreui/react'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import markerr from "../marker.png"
import '../../../globalVar'
// import { set } from 'core-js/core/dict'
// import MIN_SAFE_INTEGER from 'core-js/fn/number/min-safe-integer'
const UpdateUSer = ({ match }) => {
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const adminFieldes = ["full_name", "email", "area_id"]
  const [visible, setVisible] = useState(10)

  const [fetchedData, setfetchedData] = useState([])
  const [refresh, setRefresh] = useState('')
  const [errorMessage, setErrorMessage] = useState();
  const [pickedImg, setPickedImg] = useState('')
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [files, setFiles] = useState([])
  const [pickedImgFront, setPickedImgFront] = useState('')
  const [pickedImgBack, setPickedImgBack] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [preDefinedImages, setPreDefinedImages] = useState([])
  const [areas, setAreas] = useState([])
  const [countries, setCountries] = useState([])
  const [roles, setRoles] = useState([])
  const [phones, setPhones] = useState([])
  const [oldData, setOldData] = useState({})
  const [upData, setUpData] = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    country_id: "",
    category_id: '',
    area_id: "",
    role_id: "",
    website: "",
    facebook: "",
    twitter: "",
    snapchat: "",
    tiktok: "",
    youtube: "",
    instagram: "",
    block: "",
    avenue: "",
    street: "",
    building: "",
    floor: "",
    flat: "",
    PACIID: "",
    "description[ar]": "",
    "description[en]": "",
    latitude: 29.378586,
    longitude: 47.990341
  })
  const fields = {
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    country_id: "",
    category_id: '',
    area_id: "",
    role_id: "",
    website: "",
    facebook: "",
    twitter: "",
    snapchat: "",
    tiktok: "",
    youtube: "",
    instagram: "",
    block: "",
    avenue: "",
    street: "",
    building: "",
    floor: "",
    flat: "",
    PACIID: "",
    "description[ar]": "",
    "description[en]": "",
    latitude: 29.378586,
    longitude: 47.990341
  }

  const socialURLS = ["website", "facebook", "twitter", "snapchat", "tiktok", "youtube", "instagram"]
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(async () => {
    const fetchUser = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/users?user_id=${match.params.id}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + userToken,
              Accept: "application/json",
            },
            // &companies=0

          }
        );


        const response = await responsee.json();

        if (response.message && response.message == "Unauthenticated.") {
          return refreshTokenHandler(function () { fetchUser() })
        }

        if (response.message && response.message == "Success") {
          if (response.payload.data[0].company) {
            setUpData(pre => ({
              ...pre, ...response.payload.data[0], ...response.payload.data[0].company,
              country_id: response.payload.data[0].area.country_id,
              role_id: response.payload.data[0].roles[0].id,
              "description[ar]": response.payload.data[0].company.description ? response.payload.data[0].company.description.ar : "",
              "description[en]": response.payload.data[0].company.description ? response.payload.data[0].company.description.en : "",
              latitude: response.payload.data[0].company.latitude ? Number(response.payload.data[0].company.latitude) : 29.378586,
              longitude: response.payload.data[0].company.longitude ? Number(response.payload.data[0].company.longitude) : 47.990341,
            }))
            setOldData(pre => ({
              ...pre, ...response.payload.data[0], ...response.payload.data[0].company,
              country_id: response.payload.data[0].area.country_id,
              role_id: response.payload.data[0].roles[0].id,
              "description[ar]": response.payload.data[0].company.description ? response.payload.data[0].company.description.ar : "",
              "description[en]": response.payload.data[0].company.description ? response.payload.data[0].company.description.en : "",
              latitude: response.payload.data[0].company.latitude ? Number(response.payload.data[0].company.latitude) : 29.378586,
              longitude: response.payload.data[0].company.longitude ? Number(response.payload.data[0].company.longitude) : 47.990341,
            }))
          } else {
            setUpData(pre => ({
              ...pre, ...response.payload.data[0],
              country_id: response.payload.data[0].area.country_id,
              role_id: response.payload.data[0].roles[0].id,

            }))
            setOldData(pre => ({
              ...pre, ...response.payload.data[0],
              country_id: response.payload.data[0].area.country_id,
              role_id: response.payload.data[0].roles[0].id,

            }))
          }

          // if (response.payload.company && response.payload.company.files) {
          //   const prefiles = response.payload.company.files.filter(item => item.file_purpose === "predefined_post_picture")
          //   if (prefiles && prefiles.length > 0) {
          //     setPreImages(prefiles)
          //   }
          // }
        }

      } catch (err) {
        console.log(err);
      }
    }
    fetchUser()

  }, [refresh])
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
    const fetchCountries = async () => {
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
          return refreshTokenHandler(function () { fetchCountries() })
        }

        if (response.message && response.message == "Success") {
          setCountries(response.payload)
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

    fetchRoles()
    fetchCountries()
    fetchCategories()
  }, [])
  const countryID = React.useMemo(() => { return upData.country_id }, [upData.country_id])
  useEffect(async () => {
    const fetchAreas = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/countries?country_id=${countryID}`,
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

    countryID ? fetchAreas() : setAreas([])

  }, [countryID])
  const handleData = (e) => {
    setErrorMessage('')
    setSuccessAdd('')
    if (e.target.name == "country_id") {
      setUpData({ ...upData, [e.target.name]: e.target.value, area_id: "" })
      return
    }
    if (e.target.name == "role_id") {
      setUpData({ ...upData, [e.target.name]: e.target.value })
      const temp = roles.find(item => item.id == e.target.value)
      if (temp.requiredDocuments && temp.requiredDocuments.length > 0) {
        let newArr = []
        temp.requiredDocuments.forEach(item => {
          newArr.push({ id: randomInteger(1, 10000), name_en: item.en, name_ar: item.ar, file: "", withRole: true })
        })
        setFiles(newArr)
      }
      else { setFiles([]) }
      return
    }
    setUpData({ ...upData, [e.target.name]: e.target.value })


  }


  // const handlePhones = (i) => (e) => {
  //   setPhones(
  //     ...[phones, (phones[i] = e.target.value)]
  //   );
  //   console.log('phones', phones)

  // };


  const vlaidationData = () => {
    // if (upData.password != upData.password_confirmation) {
    //   setErrorMessage(i18n.language === "ar" ? "كلمة المرور وتأكيد كلمة المرور غير متطابقين"
    //     : "Password and confirm password do not match");
    //   setVisible(8)
    //   return false
    // }
    if (phones.length > 0) {
      phones.forEach(phone => {
        if (phone.value.length < 7) {
          setErrorMessage(i18n.language === "ar" ? "أدخل رقم هاتف صحيح"
            : "Enter a valid phone number");
          setVisible(8)
          return false
        }
      })
    }
    // if (upData.role_id != 1 && upData.role_id != 2) {
    //   if (selectedCategories.length == 0) {
    //     setErrorMessage(i18n.language === "ar" ? "يجب ادخال تصنيف او اكثر"
    //       : "You must enter one or more categories.");
    //     setVisible(8)
    //     return false
    //   }
    // }
    return true

  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    if (!vlaidationData()) { return }
    const apiENDPOINT = "api/updateProfile?_method=put";
    setLoading(true)
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    var data = new FormData()
    if (upData.role_id == 1 || upData.role_id == 2) {
      adminFieldes.forEach((item, index) => { upData[item] != oldData[item] && data.append(`${item}`, upData[item]) })
    }
    if (upData.role_id == 2) { data.append(`role_id`, upData.role_id) }
    phones && phones.forEach((phone, index) => {
      data.append(`phone_numbers[${index}][phone]`, phone.phone)
      data.append(`phone_numbers[${index}][international_code]`, phone.international_code)
      data.append(`phone_numbers[${index}][primary]`, phone.primary ? 1 : 0)

    })
    if (phones && phones.length > 0 && phones.filter(item => item.primary).length > 0) {
      data.append(`phone_number_old_primary`, upData.phone_numbers.filter(item => item.primary)[0]['id'])

    }
    if (upData.role_id != 1 && upData.role_id != 2) {
      Object.keys(fields).forEach((item) => {
        upData[item] && upData[item] != oldData[item] && data.append(`${item}`, upData[item])
      })
      preDefinedImages.length > 0 && preDefinedImages.forEach((item, index) => {
        data.append(`predefined_post_pictures[${index}]`, item)
      })

      files.length > 0 && files.forEach((item, index) => {
        if (item.file && item.name_en && item.name_ar) {
          data.append(`files[${index}][name][en]`, item.name_en)
          data.append(`files[${index}][name][ar]`, item.name_ar)
          data.append(`files[${index}][file]`, item.file)
        }

      })
      selectedCategories.length > 0 && selectedCategories.forEach((item, index) => {
        data.append(`category_ids[${index}]`, item.value)

      })
      // adminFieldes.forEach((item, index) => { data.append(`[${item}`, upData[item]) })
    }

    pickedImg && data.append('profile_picture', pickedImg)
    JSON.parse(localStorage.getItem("id")) != match.params.id && data.append('user_id', match.params.id)

    try {
      const responsee = await fetch(
        `${global.apiUrl}${apiENDPOINT}`,
        {
          // mode: 'no-cors',
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

        setPickedImg('')
        setFiles([])
        setSelectedCategories([]);
        setPreDefinedImages([])
        setPhones([])
        setRefresh(!refresh)
      }

    } catch (err) {
      console.log(err);

    }

    setLoading(false)
  }

  const handleDelete = async (e, type, id) => {
    e.preventDefault()
    document.getElementById('root').style.opacity = 0.75;
    const apiENDPOINT = "api/updateProfile?_method=put";
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    var data = new FormData()
    data.append(type, id)
    JSON.parse(localStorage.getItem("id")) != match.params.id && data.append('user_id', match.params.id)

    try {
      const responsee = await fetch(
        `${global.apiUrl}${apiENDPOINT}`,
        {
          // mode: 'no-cors',
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
          },
          body: data
          ,
        }
      );
      const response = await responsee.json();
      document.getElementById('root').style.opacity = 1;
      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return
      }
      else if (response.errors) { setErrorMessage(response.errors); }
      else if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleDelete(e, type, id) })
      }
      // if (response.message && response.message == "Success") {
      //   setSuccessAdd(i18n.language === "ar" ? "تم تعديل تصنيف بنجاح" : "Category has been Updated successfully")
      //   setRefresh(!refresh)

      // }

      if (response.message && responsee.status == 200) {
        setVisible(6)
        setSuccessAdd(response.message)

        setRefresh(!refresh)
      }
    } catch (err) {
      console.log(err);

    }


  }
  const handleSetPrimary = async (id) => {

    document.getElementById('root').style.opacity = 0.75;
    const apiENDPOINT = "api/updateProfile?_method=put";
    const userToken = JSON.parse(localStorage.getItem("token"));
    setErrorMessage('')
    setSuccessAdd('')
    var data = new FormData()
    data.append(`phone_number_old_primary`, upData.phone_numbers.filter(item => item.primary)[0]['id'])
    data.append(`phone_number_new_primary`, id)
    JSON.parse(localStorage.getItem("id")) != match.params.id && data.append('user_id', match.params.id)

    try {
      const responsee = await fetch(
        `${global.apiUrl}${apiENDPOINT}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
            // "Content-Type": "multipart/form-data"
          },
          body: data
          ,
        }
      );
      const response = await responsee.json();
      document.getElementById('root').style.opacity = 1;
      setVisible(10)
      if (response.message === "Fail") {
        setErrorMessage(response.error);
        return
      }
      else if (response.errors) { setErrorMessage(response.errors); }
      else if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleSetPrimary(id) })
      }
      if (response.message && responsee.status == 200) {
        setVisible(6)
        setSuccessAdd(response.message)

        setRefresh(!refresh)
      }
    } catch (err) {
      console.log(err);

    }


  }
  const handleOnChangePhone = (value, data, index) => {
    // console.log('value', value)
    // console.log('phone', value.slice(data.dialCode.length))
    // console.log('dealcode', data.dialCode)
    let temp = [...phones]
    temp[index] = {
      ...temp[index], international_code: data.dialCode,
      phone: value.slice(data.dialCode.length),
      value: value
    }
    setPhones(temp)
  }
  const handleOnChangePrimary = (value, index) => {

    let temp = []
    phones.map((item, indexx) => {
      temp.push({ ...item, primary: indexx == index ? value : false })
    })
    // temp[index] = {
    //   ...temp[index], primary: value
    // }
    setPhones(temp)
  }
  const removePhone = (id) => {
    setPhones(pre => pre.filter(item => item.id !== id))
  }
  const addPhoneObject = () => {
    setPhones(pre => [...pre, {
      id: randomInteger(1, 10000),
      international_code: "965", phone: "", value: "", primary: false
    }])
  }
  const handleImg = (e) => {
    if (e.target.files[0]) { setPickedImg(e.target.files[0]) }
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

  const addFileObject = () => {
    setFiles(pre => [...pre, { id: randomInteger(1, 10000), name_en: "", name_ar: "", file: "" }])
  }
  const removeFile = (id) => {
    setFiles(pre => pre.filter(item => item.id !== id))
  }
  const handleFileName = (e, index) => {
    let temp = [...files]
    temp[index] = { ...temp[index], [e.target.name]: e.target.value }
    setFiles(temp)
  }
  const handleFileinput = (e, index) => {
    if (e.target.files[0]) {
      let temp = [...files]
      temp[index] = { ...temp[index], file: e.target.files[0] }
      setFiles(temp)
    }

  }
  const Marker = ({ text }) => <div className="p-0 m-0 " style={{ width: "16px", height: "16px" }}><img src={markerr} className="p-0 m-0 " /> </div>;

  const resultFilter = (firstArray, secondArray) => {
    return firstArray.filter(firstArrayItem =>
      !secondArray.some(
        secondArrayItem => firstArrayItem.id === secondArrayItem.id
      )
    );
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center register-cont">

      <CContainer>


        <CCard className="">



          <CCardHeader>
            <CRow className=" row-gap-15">

              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                <strong>{i18n.language === "ar" ? "تعديل مستخدم" : "Update User"}</strong>
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

                        <CCol md='12'> <strong>{i18n.language === "ar" ? "معلومات المستخدم" : "User Information"}</strong></CCol>
                        {/* <CCol md="6"  >
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">   {t("Role")}</CLabel>
                            </CCol>
                            <CCol xs="12" md="12">
                              <CSelect custom name="role_id" id="select"
                                required value={upData.role_id} onChange={(e) => handleData(e)}>
                                <option value='' >{i18n.language === "ar" ? "اختر دور" : "Select Role"}</option>
                                <option value={"1"}  >  {t("Admin")}  </option>  
                                {roles.length > 0 && roles.map((item) => {
                                  return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                                })}
                              </CSelect>
                            </CCol>
                          </CFormGroup>

                        </CCol> */}
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t("fullName")}   </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="full_name"
                                required
                                onChange={handleData}
                                placeholder={t("fullName")}
                                value={upData.full_name} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t("Email")}    </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="email" readOnly
                                required={upData.role_id == 1 ? true : false}
                                type='email'
                                onChange={handleData}
                                placeholder={t(`Email`)}
                                value={upData.email} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        {upData.phone_numbers && upData.phone_numbers.length && upData.phone_numbers.length > 0 ?

                          <>
                            <CCol md='12'><strong>{t("Phones")}</strong></CCol>
                            <CCol md='12' className='usersTabel'>
                              <CDataTable
                                items={upData.phone_numbers}
                                fields={['id',
                                  { label: t("international_code"), key: 'international_code' },
                                  { label: t("Phone"), key: 'phone' },
                                  { label: t("Full Number"), key: 'Full_Number' },
                                  { label: t("Type"), key: 'primary' },
                                  { label: t("Actions"), key: 'actions' },
                                ]}
                                hover
                                striped
                                size="sm"
                                scopedSlots={{
                                  'Full_Number': (item) => (<td style={{ direction: "ltr" }}>
                                    {`${item.international_code}${item.phone}`}
                                  </td>),
                                  'primary': (item) => (<td >{`${item.primary ? `(${t("Primary")})` : `(${t("Secondary")})`}`}</td>),

                                  'actions':
                                    (item) => (
                                      <td>{JSON.parse(localStorage.getItem("id")) == match.params.id && !item.primary ?
                                        <> <CBadge className="p-1 px-2 m-1 badg-click" color="danger"
                                          onClick={(e) => { handleDelete(e, "phone_numbers_delete[0]", item.id) }}
                                        >
                                          <i className="fa fa-trash"></i>
                                        </CBadge>
                                          <CBadge className="p-1 px-2 m-1 badg-click" color="primary"
                                            onClick={() => { handleSetPrimary(item.id) }}
                                          >
                                            {i18n.language === "ar" ? "تغيير لأساسي" : "Set Primary"}
                                          </CBadge>
                                        </> : "-"}


                                      </td>
                                    ),

                                }}
                              />
                            </CCol>
                          </>


                          : null
                        }
                        {phones.map((phone, index) => (

                          <CCol md="12" key={phone.id}>
                            <CFormGroup row>
                              <CCol md="12">
                                <CLabel htmlFor="text-input">{t("Phone")}  ({(index + 1)})   </CLabel>
                              </CCol>
                              <CCol xs="12" md="6" style={{ direction: "ltr" }}>

                                <PhoneInput
                                  country='kw'
                                  // value={`${phone.dialCode}${phone.phone}`}
                                  value={phone.value}
                                  enableSearch={true}
                                  preferredCountries={['kw', 'sa', 'qa']}
                                  onChange={(value, data,) => {
                                    handleOnChangePhone(value, data, index)
                                  }}
                                  inputProps={{
                                    name: `phone_${phone.id}`,


                                  }}
                                />
                              </CCol>
                              <CCol xs="12" md="2" className={"pt-2"}>

                                <CFormGroup variant="custom-checkbox" inline>
                                  <CInputCheckbox custom id={`inline-checkbox${phone.id}`} name="inline-checkbox3" value="option3"
                                    onChange={(e) => { handleOnChangePrimary(e.target.checked, index) }}
                                    checked={phone.primary} />
                                  <CLabel variant="custom-checkbox" htmlFor={`inline-checkbox${phone.id}`}>{t("Primary")}</CLabel>
                                </CFormGroup>
                              </CCol>

                              <CCol xs="12" md="3">
                                <CButton color="danger" type='button' onClick={() => { removePhone(phone.id) }} >
                                  <i className="fa fa-trash  " ></i>
                                </CButton>
                              </CCol>


                            </CFormGroup  >

                          </CCol>
                        ))}
                        {JSON.parse(localStorage.getItem("id")) == match.params.id ? <CCol md='12'>
                          <CButton color="primary" className={'col-md-4'} type='button'
                            onClick={() => addPhoneObject()}
                          >
                            {i18n.language == "ar" ? "إضافة هواتف اخرى" : "Add More Phones"}
                          </CButton>
                        </CCol>
                          : null
                        }


                        {/* 

                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">{t(`Password`)} </CLabel>
                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="password"
                                required
                                onChange={handleData}
                                placeholder={t(`Password`)}
                                value={upData.password} />
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        <CCol md="6" lg="6" xl="6">
                          <CFormGroup row>
                            <CCol md="12">
                              <CLabel htmlFor="text-input">
                                {t("Confirm Password")}
                              </CLabel>

                            </CCol>
                            <CCol xs="12" md="12">

                              <CInput name="password_confirmation"
                                required
                                onChange={handleData}
                                placeholder={t("Confirm Password")}
                                value={upData.password_confirmation} />
                            </CCol>
                          </CFormGroup>
                        </CCol> */}
                        <CCol md="4" lg="4" xl="4">
                          <CFormGroup row>
                            <CCol md="12">  <CLabel htmlFor="text-input"> {t("Country")} </CLabel> </CCol>
                            <CCol xs="12" md="12">
                              <CSelect custom name="country_id" id="select"
                                required value={upData.country_id} onChange={(e) => handleData(e)}>
                                <option value='' >{i18n.language === "ar" ? "اختر دولة" : "Select Country"}</option>
                                {countries.length > 0 && countries.map((item) => {
                                  return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                                })}
                              </CSelect>
                            </CCol>
                          </CFormGroup>
                        </CCol>

                        <CCol md="4" lg="4" xl="4">

                          <CFormGroup row>
                            <CCol md="12">  <CLabel htmlFor="text-input"> {t("Area")} </CLabel> </CCol>
                            <CCol xs="12" md="12">
                              <CSelect custom name="area_id" id="select"
                                required value={upData.area_id} onChange={(e) => handleData(e)}>
                                {!upData.country_id ?
                                  <option value='' >{i18n.language === "ar" ? "اختر دولة أولا" : "Select Country First"}</option>
                                  :
                                  <option value='' >{i18n.language === "ar" ? "اختر منطقة" : "Select Area"}</option>
                                }


                                {areas.length > 0 && areas.map((item) => {
                                  return (<option value={item.id} key={item.id}>  {item.name[i18n.language]}   </option>)
                                })}


                              </CSelect>
                            </CCol>
                          </CFormGroup>

                        </CCol>
                        <CCol md='6'  ><CCol md='12'  >
                          <CFormGroup row >
                            <CLabel col md={12}>{i18n.language == 'ar' ? `صورة بروفايل` : `Profile Image`}</CLabel>
                            <CCol xs="12" md="12">

                              <CInputFile
                                // required={upData.role_id && upData.role_id != 1 && upData.role_id != 2 ? true : false}
                                accept="image/*" custom id="custom-file-input" onChange={(e) => { handleImg(e) }} />

                              <CLabel htmlFor="custom-file-input" variant="custom-file">
                                {pickedImg ? pickedImg.name : i18n.language == 'ar' ? `اختر صورة ...` : `Choose image ...`}

                              </CLabel>
                            </CCol>
                          </CFormGroup>
                        </CCol>
                        </CCol>
                        <CCol md='6'>
                          {pickedImg ? <img className="imgLogo" src={URL.createObjectURL(pickedImg)}></img> :
                            upData.profile_picture ? <img className="imgLogo" src={upData.profile_picture}></img> : null
                          }

                        </CCol>


                        {upData.company && upData.company.files && upData.company.files.length > 0 ?
                          <>
                            <CCol md='12'><strong>{t("Files")}</strong></CCol>

                            <CCol md='12' className='usersTabel'>

                              <CDataTable
                                items={upData.company.files}
                                fields={[{ label: t("Name en"), key: 'name_en' },
                                { label: t("Name ar"), key: 'name_ar' },
                                { label: t("Type"), key: 'type' },
                                { label: t("URL"), key: 'url' },
                                { label: t("Actions"), key: 'actions' },
                                ]}
                                hover
                                striped
                                size="sm"
                                scopedSlots={{
                                  'name_en': (item) => (<td  >{item.file_name.en || item.file_name}</td>),
                                  'name_ar': (item) => (<td  >{item.file_name.ar || "-"}</td>),
                                  'type': (item) => (<td  >{t(item.file_purpose)}</td>),
                                  'url': (item) => (<td  >
                                    {item.file_purpose == "predefined_post_picture" ?
                                      <img className='logoAll' src={`${item.path}`} />
                                      :
                                      <a href={`${item.path}`} target="_blank">
                                        {t("File URL")}
                                      </a>
                                    }
                                  </td>),
                                  'actions':
                                    (item) => (
                                      <td>
                                        {item.file_purpose == "predefined_post_picture" ?
                                          <CBadge className="p-1 px-2 m-1 badg-click" color="danger"
                                            onClick={(e) => { handleDelete(e, "predefined_pictures_delete[0]", item.id) }}  >
                                            <i className="fa fa-trash"></i>
                                          </CBadge>
                                          :
                                          "-"
                                        }
                                      </td>
                                    ),
                                }}


                              />

                            </CCol>  </> : null}



                        {upData.role_id && upData.role_id != 1 && upData.role_id != 2 ?
                          <>
                            <CCol md='6'  ><CCol md='12'  >
                              <CFormGroup row >
                                <CLabel col md={12}>{i18n.language == 'ar' ? `صورة مسبقة للمنشورات` : `Predefined Post Pictures`}</CLabel>
                                <CCol xs="12" md="12">

                                  <CInputFile accept="image/*" custom multiple id="custom-files-input" onChange={(e) => { handleImagesPosts(e) }} />

                                  <CLabel htmlFor="custom-files-input" variant="custom-file">
                                    {i18n.language == 'ar' ? `اختر صور ...` : `Choose images ...`}

                                  </CLabel>
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            </CCol>
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

                            <CCol md='12'>

                              {files ?
                                //  className={"fileRow"}
                                files.map((file, index) => (
                                  <CRow key={file.id} >
                                    <CCol md="5" lg="3" xl="3">
                                      <CFormGroup row>
                                        <CCol md="12">
                                          <CLabel htmlFor="text-input">{i18n.language === "ar" ? `اسم الملف بالانكليزية (${(index + 1)})` : `New File (${(index + 1)}) name en`}</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="12">

                                          <CInput name="name_en"
                                            required
                                            readOnly={file.withRole ? true : false}
                                            onChange={(e) => handleFileName(e, index)}
                                            placeholder={i18n.language === "ar" ? `اسم الملف بالانكليزية (${(index + 1)})` : `New File (${(index + 1)}) name en`}
                                            value={file.name_en} />
                                        </CCol>
                                      </CFormGroup>
                                    </CCol>
                                    <CCol md="5" lg="3" xl="3">
                                      <CFormGroup row>
                                        <CCol md="12">
                                          <CLabel htmlFor="text-input">{i18n.language === "ar" ? `اسم الملف بالعربية (${(index + 1)})` : `New File (${(index + 1)}) name ar`}</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="12">

                                          <CInput name="name_ar"
                                            required
                                            readOnly={file.withRole ? true : false}
                                            onChange={(e) => handleFileName(e, index)}
                                            placeholder={i18n.language === "ar" ? `اسم الملف بالعربية (${(index + 1)})` : `New File (${(index + 1)}) name ar`}
                                            value={file.name_ar} />
                                        </CCol>
                                      </CFormGroup>
                                    </CCol>
                                    <CCol md='4'  ><CCol md='12'  >
                                      <CFormGroup row >
                                        <CCol md="12">
                                          <CLabel htmlFor="text-input">
                                            {i18n.language === "ar" ? "الملف" : "File"} </CLabel>
                                        </CCol>

                                        <CCol xs="12" md="12">
                                          {/* accept="image/*" */}
                                          <CInputFile required={file.withRole ? false : true} custom id="custom-file-input"
                                            onChange={(e) => { handleFileinput(e, index) }} />

                                          <CLabel htmlFor="custom-file-input" variant="custom-file">

                                            {file.file ? file.file.name : i18n.language == 'ar' ? `اختر ملف ...` : `Choose file ...`}


                                          </CLabel>
                                        </CCol>
                                      </CFormGroup>
                                    </CCol>
                                    </CCol>
                                    <CCol md='2'>
                                      <CFormGroup row>
                                        <CCol md="12">
                                          <CLabel htmlFor="text-input"> {i18n.language == "ar" ? "إزالة" : "Remove"}</CLabel>
                                        </CCol>
                                        <CCol xs="12" md="12">
                                          <CButton color="danger" type='button' onClick={() => { removeFile(file.id) }} >
                                            <i className="fa fa-trash  " ></i>
                                          </CButton>
                                        </CCol>
                                      </CFormGroup>

                                    </CCol>
                                  </CRow>
                                ))

                                :
                                null}

                            </CCol>
                            <CCol md='12'>
                              <CButton color="primary" className={'col-md-4'} type='button'
                                disabled={files.length >= 10 ? true : false}
                                onClick={() => addFileObject()}
                              >
                                {i18n.language == "ar" ? "إضافة ملفات اخرى" : "Add More Files"}
                              </CButton>
                            </CCol>

                            {upData.company && upData.company.categories && upData.company.categories.length > 0 ?
                              <>
                                <CCol md='12'><strong>{t("Categories")}</strong></CCol>

                                <CCol md='12' className='usersTabel'>

                                  <CDataTable
                                    items={upData.company.categories}
                                    fields={["id", { label: t("Name en"), key: 'name_en' },
                                      { label: t("Name ar"), key: 'name_ar' },
                                      { label: t("Actions"), key: 'actions' },
                                    ]}
                                    hover
                                    striped
                                    size="sm"
                                    scopedSlots={{
                                      'name_en': (item) => (<td  >{item.name.en}</td>),
                                      'name_ar': (item) => (<td  >{item.name.ar}</td>),
                                      'actions':
                                        (item) => (
                                          <td>
                                            {upData.company.categories.length > 1 ?
                                              <CBadge className="p-1 px-2 m-1 badg-click" color="danger"
                                                onClick={(e) => { handleDelete(e, "category_ids_delete[0]", item.id) }}
                                              >
                                                <i className="fa fa-trash"></i>
                                              </CBadge>
                                              : "-"}

                                          </td>
                                        ),
                                    }}


                                  />

                                </CCol>  </> : null}
                            <CCol md='12'> <strong>{i18n.language === "ar" ? "إضافة تصنيفات جديدة" : "Add New Categories"}</strong></CCol>

                            {upData.company && categories ? <CCol md="6" >

                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel htmlFor="text-input">  {t("Categories")}   </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <MultiSelect
                                    required
                                    options={resultFilter(categories, upData.company.categories).map((item) => ({ label: item.name[i18n.language], value: item.id })
                                    )}
                                    value={selectedCategories}
                                    onChange={setSelectedCategories}
                                    labelledBy="Select"
                                  />
                                </CCol>
                              </CFormGroup>

                            </CCol> : null}



                            <CCol md='12'> <strong>{i18n.language === "ar" ? "العنوان" : "Address"}</strong></CCol>

                            < CCol md="4" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Block")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="block"
                                    onChange={handleData}
                                    placeholder={t("Block")}
                                    value={upData.block} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="4" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Avenue")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="avenue"

                                    onChange={handleData}
                                    placeholder={t("Avenue")}
                                    value={upData.avenue} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="4" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Street")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="street"
                                    onChange={handleData}
                                    placeholder={t("Street")}
                                    value={upData.street} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="3" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Building")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="building"
                                    onChange={handleData}
                                    placeholder={t("Building")}
                                    value={upData.building} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="3" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Floor")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="floor"
                                    onChange={handleData}
                                    placeholder={t("Floor")}
                                    value={upData.floor} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="3" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Flat")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="flat"
                                    onChange={handleData}
                                    placeholder={t("Flat")}
                                    value={upData.flat} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="3" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("PACIID")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="PACIID"
                                    onChange={handleData}
                                    placeholder={t("PACIID")}
                                    value={upData.PACIID} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            <hr style={{ width: '100%' }} />
                            <CCol md='12'> <strong>{i18n.language === "ar" ? "الموقع على الخريطة" : "Position on map"} </strong></CCol>

                            <CCol md="6" lg="3" xl="3">
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel htmlFor="text-input">{i18n.language === "ar" ? "خط العرض" : "Lat"} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="latitude"
                                    type="number"
                                    onChange={handleData}
                                    placeholder={i18n.language === "ar" ? "خط العرض" : "Lat"}
                                    value={upData.latitude} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            <CCol md="6" lg="3" xl="3">
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel htmlFor="text-input">{i18n.language === "ar" ? "خط الطول" : "Lng"}  </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="longitude"
                                    type="number"
                                    onChange={handleData}
                                    placeholder={i18n.language === "ar" ? "خط الطول" : "Lng"}
                                    value={upData.longitude} />
                                </CCol>
                              </CFormGroup>
                            </CCol>

                            <CCol lg="12"  >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel htmlFor="text-input">{i18n.language === "ar" ? "أو انقر على الخريطة لتحديد موقع" : "or click to select position on map"} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <div style={{ height: '350px', width: '100%' }}>
                                    <GoogleMapReact
                                      bootstrapURLKeys={{
                                        key: "AIzaSyAi51d5XZLV8oquto7pmBaEJqt2GYzJJvY",
                                        language: 'en'
                                      }}
                                      defaultCenter={{ lat: upData.latitude, lng: upData.longitude }}
                                      defaultZoom={11}
                                      onClick={({ lat, lng }) => { setUpData({ ...upData, latitude: lat, longitude: lng }) }}
                                      center={{ lat: upData.latitude, lng: upData.longitude }}
                                    >
                                      <Marker
                                        lat={upData.latitude}
                                        lng={upData.longitude}
                                        text="My Marker"
                                      />
                                    </GoogleMapReact>
                                  </div>
                                </CCol>
                              </CFormGroup>
                            </CCol>

                            <CCol md='12'> <strong>{i18n.language === "ar" ? "روابط" : "URLS"}</strong></CCol>
                            {socialURLS.map((item) => (
                              < CCol md="6" key={item}>
                                <CFormGroup row>
                                  <CCol md="12">
                                    <CLabel htmlFor="text-input">
                                      {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </CLabel>
                                  </CCol>
                                  <CCol xs="12" md="12">

                                    <CInput name={item}
                                      required={item === "website" ? true : false}
                                      type="url"
                                      onChange={handleData}
                                      placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                                      value={upData[item]} />
                                  </CCol>
                                </CFormGroup>
                              </CCol>

                            ))}
                            <CCol md='12'> <strong>{i18n.language === "ar" ? "وصف اختياري" : "Optional Description"}</strong></CCol>

                            < CCol md="12" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Description En")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="description[en]"
                                    onChange={handleData}
                                    placeholder={t("Description En")}
                                    value={upData["description[en]"]} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            < CCol md="12" >
                              <CFormGroup row>
                                <CCol md="12">
                                  <CLabel  >   {t("Description Ar")} </CLabel>
                                </CCol>
                                <CCol xs="12" md="12">
                                  <CInput name="description[ar]"
                                    onChange={handleData}
                                    placeholder={t("Description Ar")}
                                    value={upData["description[ar]"]} />
                                </CCol>
                              </CFormGroup>
                            </CCol>
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
                            // closeButton
                            onShowChange={setVisible}
                          // closeButton
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

export default UpdateUSer
