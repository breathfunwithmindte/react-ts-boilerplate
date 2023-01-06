import React from 'react'

type Props = {}

const SidebarNavigation = (props: Props) => {
  return (
    <nav className="sidebar-navigation-container">
      <h1 className="f-size-2 sp-2">Your company logo</h1>
      <hr />
      <ul>
        <a href="#"><li className="btn hover-4 my-3 sp-3">
          Dashboard  
        </li></a>
        <a  href="#"><li className="btn hover-4 my-3 sp-3">
          New Incident  
        </li></a>
        <a  href="#"><li className="btn hover-4 my-3 sp-3">
          Incidents  
        </li></a>
        <a  href="#"><li className="btn hover-4 my-3 sp-3">
          Help  
        </li></a>
      </ul>
    </nav>
  )
}

export default SidebarNavigation;