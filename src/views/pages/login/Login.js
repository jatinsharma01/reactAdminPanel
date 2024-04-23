import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// const DefaultLayout = React.lazy(() => import('../../../layout/DefaultLayout'))
// const navigate = useNavigate();

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { element } from 'prop-types'
import Dashboard from '../../dashboard/Dashboard'
//  const navigate =useNavigate();

//  const toDashboardRedirectFunction = async= ()=>{
//   navigate('/dashboard');
//  }

const Login = () => {

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => { toDashboardRedirectFunction }}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <img src='data:image/jpeg;base64,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'></img>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
