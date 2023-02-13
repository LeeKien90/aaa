import React from 'react'
import Banner from './Banner'
import Copyright from './Copyright'
import ElectronicCpn from './ElectronicCpn'
import Footer from './Footer'

export default function Electronic() {
  return (
    <>
  <div className="banner_bg_main">
      <Banner></Banner>
  </div>
  {/* banner bg main end */}
  {/* electronic section start */}
  <div className="fashion_section">
    <ElectronicCpn/>
  </div>
  {/* electronic section end */}
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <Footer/>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <Copyright/>
  </div>
</>

  )
}
