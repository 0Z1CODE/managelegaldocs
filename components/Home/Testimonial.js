import OwlCarousel from 'react-owl-carousel3';

const options = {
    items: 1,
    nav: false,
    dots: true,
    autoplay: false,
    margin: 40,
    smartSpeed: 500,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        758: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export default class Testimonial extends React.Component {
    render() {
        return (
            <section id="testimonial" className="testimonial-section angle-testimonial-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <OwlCarousel 
                                className="testimonial-carousel owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="testimonial-item">
                                    <i className="icofont-quote-left"></i>
                                    <p className="description">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                    </p>
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src="/images/client/1.png" alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                    </div>
                                </div>
                                
                                <div className="testimonial-item">
                                    <i className="icofont-quote-left"></i>
                                    <p className="description">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                    </p>
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src="/images/client/2.png" alt="Client Image" />
                                        </div>
                                        <h3 className="title">Muttakin</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                                
                                <div className="testimonial-item">
                                    <i className="icofont-quote-left"></i>
                                    <p className="description">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                    </p>
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src="/images/client/3.png" alt="Client Image" />
                                        </div>
                                        <h3 className="title">Miranda Joy</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                                
                                <div className="testimonial-item">
                                    <i className="icofont-quote-left"></i>
                                    <p className="description">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                    </p>
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src="/images/client/4.png" alt="Client Image" />
                                        </div>
                                        <h3 className="title">Kristina</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
