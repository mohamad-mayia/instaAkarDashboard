import React, { useContext } from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";
import "../globalVar"
import { useTranslation } from 'react-i18next';
import { ProfileContext } from 'src/App'

const TheHeaderDropdown = () => {
  const { refreshTokenHandler } = useContext(ProfileContext)
  const [t, i18n] = useTranslation();
  let history = useHistory();
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const handlelogout = async (e) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const refreshToken = JSON.parse(localStorage.getItem("refresh_token"));
    const formData = new FormData();
    formData.append("remember_me_token", refreshToken);
    try {
      const responseLogOut = await fetch(
        `${global.apiUrl}api/logout`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          }, body: formData,
        }
      );
      const resultLogOut = await responseLogOut.json();
      if (resultLogOut.message && resultLogOut.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handlelogout(e) })
      }
      if (resultLogOut.message === "You are logged out successfully.") {

        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        // localStorage.clear()

        history.push("/login");

      }

    } catch (error) {
      console.log(error);
    }
  }
  const handlelogoutAll = async (e) => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    try {
      const responseLogOut = await fetch(
        `${global.apiUrl}api/logoutFromAllDevices`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + userToken,

            Accept: "application/json",
          },
        }
      );
      const resultLogOut = await responseLogOut.json();
      if (resultLogOut.message && resultLogOut.message == "Unauthenticated.") {
        return refreshTokenHandler(function () { handlelogoutAll(e) })
      }
      if (resultLogOut.message === "You are logged out from all previously logged in devices successfully.") {

        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        // localStorage.clear()

        history.push("/login");

      }
      // sessionStorage.removeItem("token");
      // sessionStorage.clear()

      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/9.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem> */}
        {/* <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}

        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          {/* <strong>Settings</strong> */}
        </CDropdownItem>
        {JSON.parse(localStorage.getItem("id")) ? <CDropdownItem onClick={() => history.push(`/users/Details/${JSON.parse(localStorage.getItem("id"))}`)} >
          <CIcon name="cil-user" className="mfe-2" />{t("Profile")}
        </CDropdownItem> : null}
        {tokenString && <> <CDropdownItem divider />
          <CDropdownItem onClick={(e) => { history.push("/ChangePassword") }} >
            <CIcon name="cil-lock-locked" className="mfe-2" />
            {t("Change Password")}
          </CDropdownItem></>}
        {tokenString && <> <CDropdownItem divider />
          <CDropdownItem onClick={(e) => { handlelogout(e) }} >
            <CIcon name="cil-lock-locked" className="mfe-2" />
            {t("Logout")}
          </CDropdownItem></>}
        {tokenString && <> <CDropdownItem divider />
          <CDropdownItem onClick={(e) => { handlelogoutAll(e) }} >
            <CIcon name="cil-lock-locked" className="mfe-2" />
            {t("Logout from all devices")}

          </CDropdownItem></>}

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
