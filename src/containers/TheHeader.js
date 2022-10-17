import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'
import routesAr from '../routesAr'


import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
} from './index'
import './st.scss'

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const TheHeader = () => {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch()
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const sidebarShow = useSelector(state => state.sidebarShow)
  const user_roles = localStorage.getItem("user_roles");
  const [role, setRole] = useState([])
  useEffect(() => {
    setRole(JSON.parse(user_roles))
  }, [user_roles])
  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }
  const notify = (msg) => toast.info(msg, {
    // position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    className: '',
    draggable: true,
    colored: true,
    progress: undefined,
  });
  const langChange = async (langss) => {
    i18n.changeLanguage(langss);
  }
  console.log("i18n.language", i18n.language)
  return (
    <CHeader withSubheader>

      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar
        className="toast-container"
        newestOnTop={true}
        closeOnClick
        rtl={i18n.language === "ar" ? true : false}
        colored={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo"/> */}
        <img className='miniLogo' src={'avatars/logo.png'} />
      </CHeaderBrand>
      {/* mr-auto */}
      <CHeaderNav className="d-md-down-none ">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">{t("Dashboard")}</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">{t("Users")}</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/Posts">{t("Posts")}</CHeaderNavLink>
        </CHeaderNavItem>

        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to='/Categories/AllCategories'>{t("Categories")}   </CHeaderNavLink>
        </CHeaderNavItem>

      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}
        {i18n.language == 'ar' ? <a className='langChange' onClick={() => { langChange('en') }}>{t('En')}</a>
          :
          <a className='langChange' onClick={() => { langChange('ar') }}>{t('Ar')}</a>
        }



        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        {/* {role[0]=="super-admin"&&<> */}
        {/* {i18n.language == 'ar' ? */}
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={i18n.language == 'ar' ? routesAr : routes}
        />
        {/* //   : */}
        {/* //   <CBreadcrumbRouter */}
        {/* //     className="border-0 c-subheader-nav m-0 px-0 px-md-3"
        //     routes={routes}
        //   />
        // } */}
        {/* </>} */}

        {/* <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" to='/Settings'>
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div> */}
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
