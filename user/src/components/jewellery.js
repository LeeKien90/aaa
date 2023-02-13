import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Copyright from './Copyright'
import JewellryCpn from './JewellryCpn'

export default function () {
  return (
    <>
  <div className="banner_bg_main">
      <Banner></Banner>
  </div>
  {/* banner bg main end */}
  {/* jewellery  section start */}
  <div className="jewellery_section">
    <JewellryCpn/>
  </div>
  {/* jewellery  section end */}
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <Footer/>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
   <Copyright/>
  </div>
  {/* copyright section end */}
</>

  )
}
