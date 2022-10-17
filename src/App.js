import React, { Component, createContext, useCallback } from 'react';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-phone-input-2/lib/bootstrap.css'
import './scss/style.scss';
import './i18n';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">
      <i className="fa fa-spinner fa-spin" ></i>
    </div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// const ExtremeCRM = React.lazy(() => import('./views/ExtremeCRM/ExtremeCRM'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
export const ProfileContext = createContext(null);
const App = () => {
  let history = useHistory();

  const clearr = () => {
    new Promise((resolve) => { localStorage.clear(); resolve(true) }).then((status) => { history.push("/login"); })
  }
  const refreshTokenHandler = async (callback) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const refreshToken = JSON.parse(localStorage.getItem("refresh_token"));

    if (userToken && refreshToken) {
      const formData = new FormData();
      formData.append("remember_me_token", refreshToken);
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      };
      try {
        const response = await fetch(`${global.apiUrl}api/rememberMe`, requestOptions);
        if (response.status == 204) { return clearr() }
        const responseData = await response.json();
        if (responseData.message === "Fail" || responseData.errors) { clearr() }
        else if (responseData.message === "Success") {
          new Promise((resolve) => {
            localStorage.setItem("token", JSON.stringify(responseData.payload.token));
            localStorage.setItem("refresh_token", JSON.stringify(responseData.payload.refresh_token));
            localStorage.setItem("id", JSON.stringify(responseData.payload.id));
            resolve(true)
          }).then((status) => { callback() })
        }

      } catch (error) {
        console.log(error);
      }
    } else {

      clearr()
    }

  }

  return (

    <ProfileContext.Provider value={{ test: "test", refreshTokenHandler }}>
      <React.Suspense fallback={loading}>

        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          {/* <Route exact path="/ExtremeCRM/:tel" name='ExtremeCRM' render={props => <ExtremeCRM {...props}/>} /> */}

          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </ProfileContext.Provider >

  );

}

export default App;
