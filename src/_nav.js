import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilSpeedometer,
  cilUser
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  
  },
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Priest',
    to: '/Menu/Priest',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/Menu/Users',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Horoscope',
    to: '/Menu/Horoscope',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transactions',
    to: '/Menu/Transactions',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/Menu/login',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  }
 
]

export default _nav
