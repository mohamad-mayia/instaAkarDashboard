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
import './Posts.scss'
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';

const Post = ({ match }) => {

  const history = useHistory()
  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [modal, setModal] = useState(false)
  const [small, setSmall] = useState(false)

  const socialURLS = ["website", "facebook", "twitter", "snapchat", "tiktok", "youtube", "instagram"]
  const [refresh, setRefresh] = useState(false)
  const [refresher, setRefresher] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [activeUser, setActiveUser] = useState({})
  const [totalPages, setTotalPages] = useState()
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const [pageStatus, setPageStatus] = useState(0)
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const [amount, setAmount] = useState('')
  const [visible, setVisible] = useState(10)

  const [preImages, setPreImages] = useState([])
  useEffect(async () => {
    const fetchUser = async () => {
      const userToken = JSON.parse(localStorage.getItem("token"));
      // &companies=0
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/posts?post_id=${match.params.id}&page=0`,
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
  }, [])






  return (

    <CRow>

      {activeUser &&
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <CRow className="justify-content-center row-gap-15 ">

                <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                  <strong>{activeUser.username}</strong>
                </CCol>
                <CCol md="6" lg="6" xl="6" className=" row-gap-15 col-gap-15 ">
                  <CButton color="primary" className='col-lg-4  col-md-4 col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.push(`/users/Details/${activeUser.user_id}`)} >{i18n.language == 'ar' ? `بروفايل الشركة` : `Company Profile`}
                  </CButton>
                  <CButton color="success" className='col-lg-4  col-md-4col-sm-12 col-xs-12 updatebtn'
                    onClick={() => history.goBack()} >{i18n.language == 'ar' ? `رجوع` : `Back`}
                  </CButton>

                </CCol>

              </CRow>

            </CCardHeader>
            <CCardBody className=''>



              <CRow>

                <CCol md='12'><strong>{i18n.language == 'ar' ? `معلومات المنشور` : `Post Information`}</strong></CCol>
                {["views", "likes", "shares"].map((item) => (
                  <CCol md={4} key={item}>
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >
                          <td>{t(item)} </td>
                          <td><strong>{activeUser[item]}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </CCol>
                ))}

                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>ID</td>
                        <td><strong>{activeUser.id}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("username")} </td>
                        <td><strong>{activeUser.username}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("post_title")}</td>
                        <td><strong> {activeUser.title ? activeUser.title[i18n.language] : "-"}</strong></td>
                      </tr>
                      <tr >
                        <td>{t("Role")}</td>
                        <td><strong>{activeUser.role && activeUser.role[0].name[i18n.language]}</strong></td>
                      </tr>
                      <tr >  <td>{i18n.language == 'ar' ? "السعر" : "Price"}  </td>
                        <td><strong>{activeUser.price}  </strong></td>
                      </tr>
                      <tr >  <td>  {i18n.language == 'ar' ? "خيار التسعير" : "Price Option"} </td>
                        <td><strong> {activeUser.price_type ? <>{activeUser.offer_type.name[i18n.language]}{"/"}{activeUser.price_type.name[i18n.language]}</> : "-"}  </strong></td>
                      </tr>
                      <tr >  <td>{t("property_type")}</td>
                        <td><strong>{activeUser.property_type ? <>{activeUser.main_property_type.name[i18n.language]}{"/"}{activeUser.property_type.name[i18n.language]}</> : "-"}   </strong></td>    </tr>
                      <tr >  <td> {t("property_site")} </td>
                        <td><strong> {activeUser.property_site ? activeUser.property_site.name[i18n.language] : "-"}  </strong></td>    </tr>







                    </tbody>
                  </table>
                </CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >  <td> {t("Category")} </td>
                        <td><strong> {activeUser.category ? activeUser.category.name[i18n.language] : "-"}  </strong></td>
                      </tr>
                      <tr >
                        <td> {t("Country")}</td>
                        <td><strong>{activeUser.area ? activeUser.area.country.name[i18n.language] : "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("Area")}</td>
                        <td><strong>{activeUser.area ? activeUser.area.name[i18n.language] : "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("location_link")}</td>
                        <td><strong>{activeUser.location_link ? <a href={`${activeUser.location_link}`}
                          target="_blank">
                          {t("location_link")}
                        </a>
                          : "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("PACCID")} </td>
                        <td><strong>{activeUser.PACIID || "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("Number Of Rooms")} </td>
                        <td><strong>{activeUser.number_of_rooms || "-"}</strong></td>
                      </tr>
                      <tr >
                        <td> {t("Number Of Bath Rooms")}   </td>
                        <td><strong>{activeUser.number_of_bathrooms || "-"}</strong></td>
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
              {activeUser.tags_ids && activeUser.tags_ids.length > 0 ?
                <>
                  <hr />
                  <CRow>
                    <CCol md='12'><strong>{t("Tags")}</strong></CCol>
                    {activeUser.tags_ids.map((item, index) => (
                      <CCol md='4' key={item.id} >
                        <table className="table table-striped table-hover">
                          <tbody>
                            <tr >
                              <td>{t("Tag")}  ({(index + 1)}) </td>
                              <td><strong  > {item.name[i18n.language]}  </strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </CCol>
                    ))}

                  </CRow>
                </>
                : null}

              <hr />

              <CRow>

                {activeUser.descriptive_address ? <>
                  <CCol md="12">  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("descriptive_address")} </td>
                        <td><strong  >  {activeUser.descriptive_address ? activeUser.descriptive_address[i18n.language] : "-"}  </strong></td>
                      </tr>

                    </tbody>
                  </table>
                  </CCol>
                </>
                  : null}
                {/* <CCol md='12'><strong>{t("Address")}</strong></CCol>

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
               



                  />}
                </CCol> */}

                {activeUser.images && activeUser.images.length > 0 ? <>
                  <CCol md='12'><strong>    {i18n.language == 'ar' ? `صور المنشور` : `Post Pictures`}</strong></CCol>
                  <CCol md="5" style={{ direction: "ltr" }} dir="ltr">

                    <ImageGallery items={activeUser.images.map(itemm => { return { original: itemm.path, thumbnail: itemm.path, } })} />
                  </CCol>
                  <CCol md="2"> </CCol>
                </> : null}
                {activeUser.profile_picture ? <CCol md="5">
                  <CCol md='12' className={"text-center"}><strong>
                    {i18n.language == 'ar' ? `صورة بروفايل` : `Pofile Picture`}</strong></CCol>
                  <ImageGallery showThumbnails={false}
                    showPlayButton={false} items={[{ original: activeUser.profile_picture }]} />
                </CCol> : null}

                {activeUser.services_available ? <>
                  <CCol md="12">  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("services_available")} </td>
                        <td><strong  >  {activeUser.services_available ? activeUser.services_available[i18n.language] : "-"}  </strong></td>
                      </tr>

                    </tbody>
                  </table>
                  </CCol>
                </>
                  : null}


                {activeUser.description ? <>
                  <CCol md='12'><strong>{t("Description")}</strong></CCol>
                  <CCol md="12">  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("Description En")}  </td>
                        <td><strong  >  {activeUser.description ? activeUser.description.en : "-"}  </strong></td>
                      </tr>
                      <tr >
                        <td>{t("Description Ar")} </td>
                        <td><strong  >  {activeUser.description ? activeUser.description.ar : "-"}  </strong></td>
                      </tr>
                    </tbody>
                  </table>
                  </CCol>
                </>
                  : null}


              </CRow>



            </CCardBody>
          </CCard>
        </CCol>


      }


    </CRow >
  )
}

export default Post
