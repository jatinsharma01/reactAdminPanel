import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/Menu/Priest/Priest'))
const Typography = React.lazy(() => import('./views/Menu/Users/Users'))
const Transaction = React.lazy(() => import('./views/Menu/Transaction/Transaction'))
const Horoscope = React.lazy(() => import('./views/Menu/Horoscope/Horoscope'))

console.log(Typography)

console.log(Transaction)
const Login = React.lazy(() => import('./views/pages/login/Login'))
// const navigator = React.lazy(() => import('./views/dashboard/Dashboard'))




// Notifications

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Menu', element: Colors, exact: true },
  { path: '/Menu/Priest', name: "Priest Data", element: Colors },
  { path: '/Menu/Users', name: "User Data", element: Typography },
  { path: '/Menu/Transactions', name: "Transaction", element: Transaction },
  { path: '/Menu/Horoscope', name: "Horoscope", element: Horoscope },

  // { path: '/Menu/Transaction', name: "Transaction Data", element: Typography },

  { path: '/pages/login', name: "Login", element: Login },
  // { path: '/dashboard/Dashboard',name:"Login", element: navigator },

]

export default routes
