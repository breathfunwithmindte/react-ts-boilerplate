import React from 'react'
import useAuth from '../contexts/AuthStateContextProvider'

type Props = {}

const Header = (props: Props) => {
  const auth = useAuth();

  return ( <header className="header d-flex a-i-center j-c-between spx-3">
      <h3 className="f-size-3">Current Page Title</h3>
      <section className="d-flex a-i-center">
        <strong>{auth.state.user?.email}</strong>
        <img src={auth.state.user?.avatar} alt="user-avatar" className="avatar-4 btn mx-3" />    
      </section>
    </header>
  )
}

export default Header;