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
  CFormGroup,
  CCardFooter
} from '@coreui/react'
import GoogleMapReact from 'google-map-react';
import { CAlert } from '@coreui/react'
import '../../globalVar'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ShippingSettings.scss'
import markerr from "./marker.png"
import { ProfileContext } from 'src/App'
import { useTranslation } from 'react-i18next';




const ShippingSettings = () => {
  const history = useHistory()

  const [t, i18n] = useTranslation();
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [data, setData] = useState('')

  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);



  useEffect(async () => {
    const fetchitems = async (e) => {

      const userToken = JSON.parse(localStorage.getItem("token"));

      try {
        const responsee = await fetch(
          `${global.apiUrl}api/info`,
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

        }


      } catch (err) {
        console.log(err);

      }

      // setLoading(false)


    }

    fetchitems()
  }, [])
  const socialURLS = ["facebook", "twitter", "snapchat", "tiktok", "youtube", "instagram"]



  const Marker = ({ text }) => <div className="p-0 m-0 " style={{ width: "16px", height: "16px" }}><img src={markerr} className="p-0 m-0 " /> </div>;

  return (

    <CRow>

      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <CRow className=" row-gap-15">
              <CCol md="6" lg="6" xl="6" className="justify-content-center align-self-center align-items-center place-items-center text-capitalize">
                {i18n.language === "ar" ? "معلومات الموقع" : "Website Information"}
              </CCol>

              <CCol md="6" lg="6" xl="6" className='row-gap-15 col-gap-15'>

                <CButton color="success" className='col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn'
                  onClick={() => history.push('/Settings/Update')} >
                  {i18n.language === "ar" ? "تعديل المعلومات" : "Update Information"}
                </CButton>

              </CCol>

            </CRow>

          </CCardHeader>
          <CCardBody  >
            {data && <>
              <CRow>
                <CCol md='12' className={'mb-1 mt-2 '}><strong>Company Information</strong></CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("Email")}</td>
                        <td><strong>{data.email}</strong></td>
                      </tr>

                    </tbody>
                  </table>
                </CCol>
                <CCol lg={6}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr >
                        <td>{t("profit_percentage")}</td>
                        <td><strong>{data.profit_percentage} {" %"}</strong></td>
                      </tr>

                    </tbody>
                  </table>
                </CCol>
                <CCol lg={6}>
                  {data.logo ? <CCol md="12">
                    <CCol md='12' className={"text-center"}><strong>
                      {i18n.language == 'ar' ? `الشعار` : `Logo`}</strong></CCol><br />
                    <ImageGallery showThumbnails={false}
                      showPlayButton={false} items={[{ original: data.logo }]} />
                  </CCol> : null}
                </CCol>
                <hr style={{ width: '100%' }} />

                <CCol md='12'><strong>{t("Phones")}</strong></CCol>
                {data.phone.map((item, index) => (
                  <CCol md='4' key={item} >
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >
                          <td>{t("Phone")}  ({(index + 1)}) </td>
                          <td><strong style={{ direction: "ltr" }}>
                            {`${item}`}
                          </strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </CCol>
                ))}
                <hr style={{ width: '100%' }} />
                <CCol md='12'> <strong>{i18n.language === "ar" ? "روابط" : "URLS"}</strong></CCol>
                {socialURLS.map((item) => (
                  < CCol md="4" key={item}>
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr >
                          <td>  {item.charAt(0).toUpperCase() + item.slice(1)} </td>
                          <td><strong  >  {data && data[item] ?
                            <a href={`${data[item]}`} target="_blank">
                              {item.charAt(0).toUpperCase() + item.slice(1)} {" URL"}
                            </a>

                            : "-"}  </strong></td>
                        </tr>

                      </tbody>
                    </table>

                  </CCol>

                ))}

                <hr style={{ width: '100%' }} />

                <CCol md='12' className={'mb-1 mt-2 '}><strong>{t("Address")}</strong></CCol>
                <CCol lg={12}>
                  <table className="table table-striped table-hover">
                    <tbody>
                      <tr>
                        <td>{t("Address")}</td>
                        <td><strong>{data.address}</strong></td>
                      </tr>

                    </tbody>
                  </table>
                </CCol>

                <hr style={{ width: '100%' }} />
                <CCol md='12'> <strong>{i18n.language === "ar" ? "الموقع على الخريطة" : "Position on map"} </strong></CCol>


                <CCol md="6" lg="12"  >
                  <CFormGroup row>
                    <CCol md="12">

                    </CCol>
                    <CCol xs="12" md="12">
                      <div style={{ height: '350px', width: '100%' }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{
                            key: "AIzaSyAi51d5XZLV8oquto7pmBaEJqt2GYzJJvY",
                            language: 'en'
                          }}
                          defaultCenter={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
                          defaultZoom={11}
                        // center={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
                        >
                          <Marker
                            lat={Number(data.latitude)}
                            lng={Number(data.longitude)}
                            text="My Marker"
                          />
                        </GoogleMapReact>
                      </div>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CRow>






            </>}
          </CCardBody>
        </CCard>
      </CCol>




    </CRow >
  )
}

export default ShippingSettings
