import Link from 'next/link';
import ReactWOW from 'react-wow';
import { Row, Container, Col } from 'reactstrap';

export default class AppDownload extends React.Component {
    getOs = () => {
        const os = ['Windows', 'Linux', 'Mac']; // add your OS values
        
      console.log(os.find(v=>navigator.appVersion.indexOf(v) >= 0));
     }
    render() {
       this.getOs()
        return (
            <section id="app-download" className="app-download-section angle-download-section"> 
             <Container>
             <Row className=""> 
                  <Col lg={12}>
                        <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>NOW AVAILABLE</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </Col>
                  </Row>
                    
                   <Row className="margened-row">
                        <Col lg={4}>
                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="app-download-content text-center d-flex flex-column justify-content-center">
                                    <div className="downloading_brand">
                                    <i className="icofont-brand-microsoft"></i> 
                                    </div>
                                    <div className="platform_link">
                                        <h4 className="platform_name m-0 d-flex align-items-center justify-content-center">
                                            <span><i className="icofont-download"></i></span>
                                           <span className="p-2"> Windows</span>
                                        </h4>
                                       <div>
                                           <span className="small_white">Windows 7, 8, 10</span>
                                       </div>
                                    </div>

                                    

                                    <div className="downloading_links d-flex flex-column mt-3 ">
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">User Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">System Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">.zip: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                    </div>
                                </div>
                            </ReactWOW>
                        </Col>
                        <Col lg={4}>
                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="app-download-content text-center d-flex flex-column justify-content-center">
                                    <div className="downloading_brand">
                                    <i className="icofont-brand-linux"></i> 
                                    </div>
                                   <div className="d-flex">
                                   <div className="platform_link">
                                        <h4 className="platform_name m-0 d-flex align-items-center justify-content-center">
                                            <span><i className="icofont-download"></i></span>
                                           <span className="p-2"> .deb</span>
                                        </h4>
                                       <div>
                                           <span className="small_white">Debian. Ubuntu</span>
                                       </div>
                                    </div>
                                    <div className="platform_link">
                                        <h4 className="platform_name m-0 d-flex align-items-center justify-content-center">
                                            <span><i className="icofont-download"></i></span>
                                           <span className="p-2"> .rpm</span>
                                        </h4>
                                       <div>
                                           <span className="small_white">Red Hat, Fedora, Susu</span>
                                       </div>
                                    </div>
                                   </div>

                                    

                                    <div className="downloading_links d-flex flex-column mt-3 ">
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">User Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">System Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">.zip: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                    </div>
                                </div>
                            </ReactWOW>
                        </Col>
                        <Col lg={4}>
                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="app-download-content text-center d-flex flex-column justify-content-center">
                                    <div className="downloading_brand">
                                    <i className="icofont-brand-apple"></i> 
                                    </div>
                                    <div className="platform_link">
                                        <h4 className="platform_name m-0 d-flex align-items-center justify-content-center">
                                            <span><i className="icofont-download"></i></span>
                                           <span className="p-2"> Mac</span>
                                        </h4>
                                       <div>
                                           <span className="small_white">Mac OS 10.10+</span>
                                       </div>
                                    </div>

                                    

                                    <div className="downloading_links d-flex flex-column mt-3 ">
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">User Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">System Installer: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                        <div className="d-flex align-items-center custom_link_row">
                                            <span className="medium_white pr-5">.zip: </span>
                                            <span className="small_white tag_style">32 bit</span>
                                            <span className="small_white tag_style">64 bit</span> 
                                        </div>
                                    </div>
                                </div>
                            </ReactWOW>
                        </Col>
                   </Row>
             </Container>
            </section>
        )
    }
}
