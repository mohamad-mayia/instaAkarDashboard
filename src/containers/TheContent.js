import React, { Suspense } from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routesAr from '../routesAr'
import routesEn from '../routes'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">
      <i className="fa fa-spinner fa-spin" ></i>
    </div>
  </div>
)



const TheContent = () => {
  const [t, i18n] = useTranslation();
  // React.useEffect(() => { i18n.changeLanguage("en"); }, [])

  return (
    <main className="c-main">

      {i18n.language == 'ar' &&
        <Helmet><link rel="stylesheet" type="text/css" href="/assets/arabicStyle/arabicStyle.css" /></Helmet>}
      <CContainer fluid>
        <Suspense fallback={loading}>
          {i18n.language == "ar" ?
            <Switch>
              {routesAr.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )} />
                )
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
            :
            <Switch>
              {routesEn.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )} />
                )
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          }

        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
