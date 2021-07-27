import ReactWOW from 'react-wow';
import AppUsers from './AppUsers';

class About extends React.Component {
    render(){
        return (
       <> 
       

<section id="about" className="app-about-section angle-sp"> 
    <div className="container"> 
        <div className="row"> 
            <div className="col-lg-12"> 
                <ReactWOW delay='0.3s' animation='fadeInUp'>
                    <div className="section-title angle-section-title"> 
                        <h2>About Our App</h2>
                        <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                    </div>
                </ReactWOW>
            </div>
        </div>
        
        <div className="row align-items-center"> 
            <div className="col-lg-7"> 
                <ReactWOW delay='0.6s' animation='fadeInUp'>
                    <div className="app-about-text"> 
                        <h3>Best Mobile App</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        
                        <ul> 
                            <li><i className="icofont-verification-check"></i> Responsive design</li>
                            <li><i className="icofont-verification-check"></i> Easy to customize</li>
                            <li><i className="icofont-verification-check"></i> Modern design</li>
                        </ul>

                        <a href="#app-download" className="default-button">
                            <i className="icofont-cloud-download"></i> 
                            Download Now
                        </a>
                    </div>
                </ReactWOW>
            </div>
            
            <div className="col-lg-5"> 
                <ReactWOW delay='0.9s' animation='fadeInUp'>
                    <div className="text-center"> 
                        <img src="/images/app-about.jpg" alt="App About Image" />
                    </div>
                </ReactWOW>
            </div>
        </div>
    </div>
</section></>
        );
    }
}
 
export default About;