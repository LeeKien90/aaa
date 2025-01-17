import React, {useEffect} from 'react'
import { Row,Col,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {bindActionCreators} from "redux"
//img
import topHeader from '../../../../assets/images/dashboard/top-header.png'
import topHeader1 from '../../../../assets/images/dashboard/top-header1.png'
import topHeader2 from '../../../../assets/images/dashboard/top-header2.png'
import topHeader3 from '../../../../assets/images/dashboard/top-header3.png'
import topHeader4 from '../../../../assets/images/dashboard/top-header4.png'
import topHeader5 from '../../../../assets/images/dashboard/top-header5.png'

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../../../store/setting/setting'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
        },
        dispatch
    )
})


const SubHeader = (props) => {

    useEffect(() => {
        // navbarstylemode
       const navbarstyleMode = sessionStorage.getItem('Navbarstyle-mode');
       props.NavbarstyleAction(navbarstyleMode);
 })
    return (
        <>
            <div className="iq-navbar-header" style={{height: "215px"}}>
                <Container fluid className=" iq-container">
                    <Row>
                        <Col md="12">
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h1>Xin chào Admin</h1>
                                    <p>Đây là trang quản lý </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* {{!-- rounded-bottom if not using animation --}} */}
                <div className="iq-header-img">
                    <img src={topHeader} alt="header" className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader1} alt="header" className=" theme-color-purple-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader2} alt="header" className="theme-color-blue-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader3} alt="header" className="theme-color-green-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader4} alt="header" className="theme-color-yellow-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader5} alt="header" className="theme-color-pink-img img-fluid w-100 h-100 animated-scaleX"/>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)
