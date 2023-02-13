import React from 'react'
import Banner from './Banner'
import Copyright from './Copyright'
import ElectronicCpn from './ElectronicCpn'
import FashionCpn from './FashionCpn'
import Footer from './Footer'
import JewellryCpn from './JewellryCpn'
export default function 
() {
  return (
    <>
    {/* banner bg main start */}
    <div className="banner_bg_main">
      <Banner></Banner>
    </div>
    {/* banner bg main end */}
    {/* fashion section start */}
    <div className="fashion_section">
      <FashionCpn/>
    </div>
    {/* fashion section end */}
    {/* electronic section start */}
    <div className="fashion_section">
      <ElectronicCpn/>
    </div>
    {/* electronic section end */}
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
  </>
  )
}
