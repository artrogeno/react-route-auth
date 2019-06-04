import React from 'react'
import { Container } from 'reactstrap'

import ImgBg18 from 'assets/img/bg18.jpg'
import 'assets/scss/auth/artrogeno.scss'

const AuthLayout = (props) => (
  <div className="artrogeno-auth">
    <div className="content-image" style={{backgroundImage: `url(${ImgBg18})`}}></div>
    <div className='content'>
    <div className='content-left'>
    </div>
      <div className='content-right'>
        <Container>
          {props.children}
        </Container>
      </div>
    </div>
  </div>
)

export default AuthLayout
