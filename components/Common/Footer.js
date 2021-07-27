import Link from 'next/link';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer"> 
                {/* <div className="footer-top">
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-lg-12"> 
                                <div className="subscribe-text">
                                    <h3>Subscribe for our Newsletter</h3>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                                
                                <div className="subscribe-form">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter your email address" name="EMAIL" required />

                                        <button type="submit" className="btn subscribe-btn">
                                            <i className="icofont-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="footer-bottom">
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-md-6 col-lg-6"> 
                                <p className="copyright">Copyright @2021 Legal Docs.</p>
                            </div>

                            <div className="col-md-6 col-lg-6"> 
                                <ul className="social-links"> 
                                    <li>Follow us :</li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="icofont-google-plus"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="icofont-pinterest"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
