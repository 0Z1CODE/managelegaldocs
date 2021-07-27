import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel3';
import Modal from '../Modal/Modal';

const options = {
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: true,
    navText: [
        "<i class='icofont-swoosh-left'></i>", 
        "<i class='icofont-swoosh-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export default class Screenshots extends React.Component {
    state = {
        modalOpen: false,
        modalImage: ''
    };

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleImage = (image) => {
        this.setState({ modalImage: image });
    }

    render() {
        const { modalOpen } = this.state;
        return (
            <section id="screenshots" className="app-screenshots-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>App Screenshots</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                        <div className="row"> 
                            <div className="col-lg-12"> 
                                <OwlCarousel 
                                    className="screenshot-carousel owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="screenshot-item">
                                        <a 
                                            onClick={e => {
                                                e.preventDefault(); 
                                                this.openModal();
                                                this.handleImage("/images/screenshot/1.png")
                                            }
                                        } 
                                            href="#" 
                                            className="screenshot-image"
                                        >
                                            <img src="/images/screenshot/1.png" alt="Screenshot Image" />
                                        </a>
                                    </div>
                                    
                                    <div className="screenshot-item">
                                        <a 
                                            onClick={e => {
                                                    e.preventDefault(); 
                                                    this.openModal();
                                                    this.handleImage("/images/screenshot/2.png")
                                                }
                                            } 
                                            href="#" 
                                            className="screenshot-image"
                                        >
                                            <img src="/images/screenshot/2.png" alt="Screenshot Image" />
                                        </a>
                                    </div>
                                    
                                    <div className="screenshot-item">
                                        <a 
                                            onClick={e => {
                                                    e.preventDefault(); 
                                                    this.openModal();
                                                    this.handleImage("/images/screenshot/3.png")
                                                }
                                            }
                                            href="#" 
                                            className="screenshot-image"
                                        >
                                            <img src="/images/screenshot/3.png" alt="Screenshot Image" />
                                        </a>
                                    </div>
                                    
                                    <div className="screenshot-item">
                                        <a 
                                            onClick={
                                                e => {
                                                    e.preventDefault(); 
                                                    this.openModal();
                                                    this.handleImage("/images/screenshot/4.png")
                                                }
                                            } 
                                            href="#" 
                                            className="screenshot-image"
                                        >
                                            <img src="/images/screenshot/4.png" alt="Screenshot Image" />
                                        </a>
                                    </div>
                                    
                                    <div className="screenshot-item">
                                        <a 
                                            onClick={e => {
                                                    e.preventDefault(); 
                                                    this.openModal();
                                                    this.handleImage("/images/screenshot/5.png")
                                                }
                                            } 
                                            href="#" 
                                            className="screenshot-image"
                                        >
                                            <img src="/images/screenshot/5.png" alt="Screenshot Image" />
                                        </a>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </ReactWOW>
                </div>

                {
                    modalOpen ? <Modal closeModal={this.closeModal} image={this.state.modalImage} /> : ''  
                }
                
            </section> 
        )
    }
}
