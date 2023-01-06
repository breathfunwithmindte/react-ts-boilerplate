import React from 'react'
import Header from '../components/Header'
import SidebarNavigation from '../components/SidebarNavigation'

type Props = {
  children: React.ReactElement
}

const AuthenticatedLayout = (props: Props) => {
  return (
    <div className="layout-primary">
      <SidebarNavigation />
      <div className="layout-primary-in">
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default AuthenticatedLayout;