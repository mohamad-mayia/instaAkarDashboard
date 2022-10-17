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
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './users.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';

const User = ({ match }) => {

  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  // const [modal, setModal] = useState(false)
  // const [small, setSmall] = useState(false)

  const socialURLS = ["website", "facebook", "twitter", "snapchat", "tiktok", "youtube", "instagram"]
  // const [refresh, setRefresh] = useState(false)
  const [refresher, setRefresher] = useState(false)
  // const [errorMessage, setErrorMessage] = useState();
  // const [currentPage, setCurrentPage] = useState(1)
  const [activeUser, setActiveUser] = useState({})
  // const [totalPages, setTotalPages] = useState()
  // const [succesAdd, setSuccessAdd] = useState()
  // const [loading, setLoading] = useState('')
  // const [pageStatus, setPageStatus] = useState(0)
  // const tokenString = localStorage.getItem("token");
  // const userToken = JSON.parse(tokenString);
  // const [amount, setAmount] = useState('')
  // const [visible, setVisible] = useState(10)

  const [preImages, setPreImages] = useState([])
  useEffect(async () => {
    const fetchUser = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      // &companies=0
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/users?user_id=${match.params.id}`,
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
          return refreshTokenHandler(function () { fetchUser() })
        }

        if (response.message && response.message == "Success") {
          setActiveUser(response.payload.data[0])
          if (response.payload.data[0].company && response.payload.data[0].company.files) {
            const prefiles = response.payload.data[0].company.files.filter(item => item.file_purpose === "predefined_post_picture")
            if (prefiles && prefiles.length > 0) {
              setPreImages(prefiles)
            }
          }
        }

      } catch (err) {
        console.log(err);
      }
    }


    fetchUser()
  }, [refresher])

  const handleActivation = async (id, status) => {
    document.getElementById('root').style.opacity = 0.4;
    const userToken = JSON.parse(localStorage.getItem("token"));
    try {
      const responsee = await fetch(
        `${global.apiUrl}api/accountActivation?${id ? `user_id=${id}&` : ""}${status}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + userToken,
            Accept: "application/json",
          },

        }
      );
      document.getElementById('root').style.opacity = 1;
      if (responsee.status == 200) { setRefresher(!refresher) }
      const response = await responsee.json();
      if (response.message && response.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handleActivation(id, status) })
      }
      if (response.success) { document.getElementById('root').style.opacity = 1; }
    } catch (err) { console.log(err); }

    document.getElementById('root').style.opacity = 1;
  }




  return (

    <CRow>

      {activeUser &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CRow className="justify-content-center row-gap-15 ">

                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  <strong>{activeUser.full_name}</strong>
                </CCol>
                <CCol md="6" lg="6" xl="6" className=" row-gap-15 col-gap-15 ">
                  <CButton color="info" className='col-lg-4  col-md-4 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push(`/users/Update/${activeUser.id}`)} >{i18n.language == 'ar' ? `تعديل` : `Update`}
                  </CButton>
                  <CButton color="success" className='col-lg-4  col-md-4col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.goBack()} >{i18n.language == 'ar' ? `رجوع` : `Back`}
                  </CButton>

                </CCol>

              </CRow>

            </CCardHeader>
            <CCardBody className=''>



              <CRow>
                <CCol md='12'><strong>{i18n.language == 'ar' ? `معلومات الحساب` : `Account Information`}</strong></CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>ID</td>
                        <td><strong>{activeUser.id}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("fullName")} </td>
                        <td><strong>{activeUser.full_name}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("Email")}</td>
                        <td><strong>{activeUser.email || "-"}</strong></td>
                      </tr>

                      <tr >
                        <td>{t("Role")}</td>
                        <td><strong>{activeUser.roles && activeUser.roles[0].name[i18n.language]}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("Active")}  </td>
                        <td><strong>{!!activeUser.active ? t("Active") : t("Inactive")}
                        </strong></td>
                      </tr>
                      <tr >
                        <td> {t("Country")}</td>
                        <td><strong>{activeUser.area ? activeUser.area.country.name[i18n.language] : "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("Area")}</td>
                        <td><strong>{activeUser.area ? activeUser.area.name[i18n.language] : "-"}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td> {t("Special")}  </td>
                        <td><strong>{activeUser.company && !!activeUser.company.special ? t("Yes") : t("No")} </strong></td>
                      </tr>
                      <tr >
                        <td> {t("AddPosts")}  </td>
                        <td><strong>{!!activeUser.can_add_posts ? t("Yes") : t("No")} </strong></td>
                      </tr>
                      <tr >
                        <td>{t("phone_verified_at")}</td>
                        <td><strong>{activeUser.phone_verified_at ? activeUser.phone_verified_at.slice(0, 10) :
                          <> {t("No")} <CBadge className="p-2  m-1 badg-click" color="success"
                            onClick={() => handleActivation(activeUser.id, "verify_phone=1")}
                          >

                            {i18n.language == 'ar' ? "تأكيد الهاتف" : "Verify Phone"} </CBadge></>}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("email_verified_at")}</td>
                        <td><strong>{activeUser.email_verified_at ? activeUser.email_verified_at.slice(0, 10) : <>
                          {t("No")} <CBadge className="p-2  m-1 badg-click" color="success"
                            onClick={() => handleActivation(activeUser.id, "verify_email=1")}
                          >

                            {i18n.language == 'ar' ? "تأكيد الإيميل" : "Verify Email"} </CBadge></>}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("latest_password_reset")}</td>
                        <td><strong>{activeUser.latest_password_reset ? activeUser.latest_password_reset.slice(0, 10) : t("No")}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("forgot_password")}</td>
                        <td><strong>{activeUser.forgot_password}</strong></td>
                      </tr>


                      <tr >
                        <td>{t("Created at")}</td>
                        <td><strong> {activeUser.created_at && activeUser.created_at.slice(0, 10)}</strong></td>
                      </tr>



                    </tbody>
                  </table>
                </CCol>
              </CRow>
              <hr />
              <CRow>
                <CCol md='12'><strong>{t("Phones")}</strong></CCol>
                {activeUser.phone_numbers && activeUser.phone_numbers.length > 0 && activeUser.phone_numbers.map((item, index) => (
                  <CCol md='4' key={item.id} >
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >
                          <td>{t("Phone")}  ({(index + 1)}) </td>
                          <td><strong style={{ direction: "ltr" }}>
                            {`${item.primary ? `(${t("Primary")})  ` : ""}`}{`${item.international_code}${item.phone}`}
                          </strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </CCol>
                ))}

              </CRow>
              {activeUser.company && activeUser.company.categories.length > 0 ?
                <>
                  <hr />
                  <CRow>
                    <CCol md='12'><strong>{t("Categories")}</strong></CCol>
                    {activeUser.company.categories.map((item, index) => (
                      <CCol md='4' key={item.id} >
                        <table className="table table-striped table-hover">
                          <tbody>
                            <tr >
                              <td>{t("Category")}  ({(index + 1)}) </td>
                              <td><strong style={{ direction: "ltr" }}>
                                {item.name[i18n.language]}
                              </strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </CCol>
                    ))}

                  </CRow>
                </>


                : null}

              <hr />
              {activeUser && activeUser.roles && activeUser.roles[0].id != 1 && activeUser.roles[0].id != 2 ?
                <CRow>

                  <CCol md='12'><strong>{t("Address")}</strong></CCol>

                  <CCol md='12' className='usersTabel'>
                    {activeUser && <CDataTable
                      items={[{
                        block: activeUser.block || "-",
                        avenue: activeUser.avenue || "-",
                        street: activeUser.street || "-",
                        building: activeUser.building || "-",
                        floor: activeUser.floor || "-",
                        flat: activeUser.flat || "-",
                        PACIID: activeUser.PACIID || "-",
                      }]}
                      fields={[{ label: t("Block"), key: 'block' },
                      { label: t("Avenue"), key: 'avenue' },
                      { label: t("Street"), key: 'street' },
                      { label: t("Building"), key: 'building' },
                      { label: t("Floor"), key: 'floor' },
                      { label: t("Flat"), key: 'flat' },
                      { label: t("PACCID"), key: 'PACIID' },]}
                      hover
                    // striped



                    />}
                  </CCol>
                  {activeUser.company && activeUser.company.files && activeUser.company.files.length > 0 && activeUser.company.files.filter(item => item.file_purpose !== "predefined_post_picture").length > 0 ?
                    <>
                      <CCol md='12'><strong>{t("Files")}</strong></CCol>

                      <CCol md='12' className='usersTabel'>
                        {activeUser.company && activeUser.company.files && activeUser.company.files.length > 0 && activeUser.company.files.filter(item => item.file_purpose !== "predefined_post_picture").length > 0 ?
                          <CDataTable
                            items={activeUser.company.files.filter(item => item.file_purpose !== "predefined_post_picture")}
                            fields={[{ label: t("Name en"), key: 'name_en' },
                            { label: t("Name ar"), key: 'name_ar' },
                            { label: t("Type"), key: 'type' },
                            { label: t("URL"), key: 'url' },
                            ]}
                            hover
                            striped
                            scopedSlots={{
                              'name_en': (item) => (<td  >{item.file_name.en}</td>),
                              'name_ar': (item) => (<td  >{item.file_name.ar}</td>),
                              'type': (item) => (<td  >{t(item.file_purpose)}</td>),
                              'url': (item) => (<td  >  <a href={`${item.path}`} target="_blank">
                                {t("File URL")}
                              </a></td>),
                            }}


                          /> : null}

                      </CCol>  </> : null}
                  {preImages.length > 0 ? <>
                    <CCol md='12'><strong>    {i18n.language == 'ar' ? `صورة مسبقة للمنشورات` : `Predefined Post Pictures`}</strong></CCol>
                    <CCol md="6">

                      <ImageGallery items={preImages.map(itemm => { return { original: itemm.path, thumbnail: itemm.path, } })} />
                    </CCol>

                  </> : null}
                  {activeUser.profile_picture ? <CCol md="6">
                    <CCol md='12' className={"text-center"}><strong>
                      {i18n.language == 'ar' ? `صورة بروفايل` : `Pofile Picture`}</strong></CCol>
                    <ImageGallery showThumbnails={false}
                      showPlayButton={false} items={[{ original: activeUser.profile_picture }]} />
                  </CCol> : null}





                  <CCol md='12'><strong>{t("Description")}</strong></CCol>
                  <CCol md="12">  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("Description En")}  </td>
                        <td><strong  >  {activeUser.company && activeUser.company.description ? activeUser.company.description.en : "-"}  </strong></td>
                      </tr>
                      <tr >
                        <td>{t("Description Ar")} </td>
                        <td><strong  >  {activeUser.company && activeUser.company.description ? activeUser.company.description.ar : "-"}  </strong></td>
                      </tr>
                    </tbody>
                  </table>
                  </CCol>
                  <CCol md='12'> <strong>{i18n.language === "ar" ? "روابط" : "URLS"}</strong></CCol>
                  {socialURLS.map((item) => (
                    < CCol md="4" key={item}>
                      <table className="table table-striped table-hover">
                        <tbody>
                          <tr >
                            <td>  {item.charAt(0).toUpperCase() + item.slice(1)} </td>
                            <td><strong  >  {activeUser.company && activeUser.company[item] ?
                              <a href={`${activeUser.company[item]}`} target="_blank">
                                {item.charAt(0).toUpperCase() + item.slice(1)} {" URL"}
                              </a>

                              : "-"}  </strong></td>
                          </tr>

                        </tbody>
                      </table>

                    </CCol>

                  ))}

                </CRow> : null}
              {activeUser.admin == 0 && <>
                <CRow>
                  <CCol md='12'><strong>Customer  Information</strong></CCol>
                  <CCol lg={6}>
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >
                          <td>Phone</td>
                          <td><strong>{activeUser.customer.phone ? activeUser.customer.phone : "-"}</strong></td>
                        </tr>
                        <tr >
                          <td>Company</td>
                          <td><strong>{activeUser.customer.company ? activeUser.customer.company : "-"}</strong></td>
                        </tr>
                        <tr >
                          <td>Address</td>
                          <td><strong>{activeUser.customer.address ? activeUser.customer.address : "-"}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </CCol>
                  <CCol lg={6}>
                    <table className="table table-striped table-hover">
                      <tbody>

                        <tr >
                          <td>   Bank Name</td>
                          <td>
                            <strong>
                              {activeUser.customer.bank_name ? activeUser.customer.bank_name : "-"}</strong></td>
                        </tr>

                        <tr >
                          <td>Bank Account Number</td>
                          <td><strong>
                            {activeUser.customer.bank_account_number ? activeUser.customer.bank_account_number : "-"}</strong></td>
                        </tr>
                        <tr >
                          <td> IBAN Number  </td>
                          <td><strong>
                            {activeUser.customer.IBAN_number ? activeUser.customer.IBAN_number : "-"}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </CCol>
                </CRow>


                <hr />
                <CRow>
                  <CCol md='6'><strong> Shipments Sending Address </strong></CCol>







                  <CCol lg={12} className='mt-3'>
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >

                        </tr>

                      </tbody>
                    </table>
                  </CCol>

                </CRow>




                {activeUser.customer.attachments.length > 0 ?
                  <>
                    <hr />

                    <CRow>
                      <CCol md='12'><strong> Additional Information  </strong></CCol>
                      <CCol lg={12} >
                        <table className="table table-striped table-hover">
                          <tbody>

                            {activeUser.customer.attachments.map((item) => {
                              return (

                                <tr key={item.id}>
                                  <td>{item.key}</td>
                                  <td>
                                    <strong>
                                      {item.file == 0 ? item.value :
                                        <>




                                        </>

                                      }</strong></td>
                                </tr>

                              )
                            })}

                          </tbody>
                        </table>
                      </CCol>
                    </CRow>
                  </>
                  :
                  null}
                {activeUser.customer.categories && activeUser.customer.categories.length > 0 &&
                  <CRow   >
                    <CCol md='12'> <strong>Categories</strong> </CCol>
                    {

                      activeUser.customer.categories.length > 0 && activeUser.customer.categories.map((cat, index) => {
                        return (

                          <CCol key={cat.id} md='6' >


                            <ul className=" card list-group list-group-flush">
                              <li className="list-group-item    ">
                                <strong>   Arabic Name :{' '}</strong> {cat.name_ar}
                                <br />
                                <strong>     English Name :  {' '}</strong>  {cat.name_en}</li>



                            </ul>

                          </CCol>



                        )
                      })}
                  </CRow>}


              </>}


            </CCardBody>
          </CCard>
        </CCol>


      }


    </CRow >
  )
}

export default User
