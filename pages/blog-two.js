import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import ReactWOW from 'react-wow';
import Loader from '../components/Shared/Loader';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Common/Footer';
import GoTop from '../components/Common/GoTop'

export default class DetailsOne extends React.Component {
    render() {
        return (
            <NoSSR key="1">
                <Preloader fadeDuration={1000}>
                    <Navigation />

                    <section className="top-banner-area"> 
                        <div className="container"> 
                            <div className="row"> 
                                <div className="col-lg-6"> 
                                    <h2 className="banner-title">Blog With Right Sidebar</h2>   
                                </div>
                                <div className="col-lg-6"> 
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li className="active">Blog With Right Sidebar</li>
                                    </ol>   
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog" className="blog-details-section"> 
                        <div className="container"> 
                            <div className="row"> 
                                <div className="col-md-4 col-lg-4"> 
                                    <div className="blog-sidebar">
                                        
                                        <form className="search-box">
                                            <input type="text" className="form-control" id="search" name="search" placeholder="Search Post Here..." />
                                            <button type="submit" className="btn search-btn">
                                                <i className="icofont-search"></i>
                                            </button>
                                        </form>
                                        
                                        <div className="recent-post">
                                            <h4 className="blog-sidebar-title">Recent post</h4>
                                            <div className="single-recent-post"> 
                                                <Link href="/details-one">
                                                    <a>
                                                        <img src='/images/blog/recent-post-1.jpg' alt="blog" />
                                                    </a>
                                                </Link>
                                                <h5><a href="/details-one">How to customize HeroApp</a></h5>
                                                <p>Mar 21, 2019</p>
                                            </div>
                                            <div className="single-recent-post"> 
                                                <Link href="/details-one">
                                                    <a>
                                                        <img src='/images/blog/recent-post-2.jpg' alt="blog" />
                                                    </a>
                                                </Link>
                                                <h5><a href="/details-one">Awesome app landing page</a></h5>
                                                <p>Mar 22, 2019</p>
                                            </div>
                                            <div className="single-recent-post">
                                                <Link href="/details-one">
                                                    <a>
                                                        <img src='/images/blog/recent-post-3.jpg' alt="blog" />
                                                    </a>
                                                </Link> 
                                                <h5><a href="/details-one">Eu bibendum dictum ipsum vivamus nostra lectus</a></h5>
                                                <p>Mar 23, 2019</p>
                                            </div>
                                        </div>
                                        
                                        <div className="post-category">
                                            <h4 className="blog-sidebar-title">Category</h4>
                                            <Link href="#">
                                                <a className="single-category">Android <span>(05)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Mobile App <span>(05)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Photography <span>(01)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">IOS <span>(08)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Latest App <span>(08)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Technology <span>(02)</span></a>
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Lifestyle <span>(04)</span></a> 
                                            </Link> 
                                            <Link href="#">
                                                <a className="single-category">Trending Post <span>(07)</span></a> 
                                            </Link>
                                            <Link href="#">
                                                <a className="single-category">Videos <span>(03)</span></a> 
                                            </Link>
                                        </div>
                                        
                                        <div className="popular-tags">
                                            <h4 className="blog-sidebar-title">Popular Tags</h4>
                                            <Link href="#">
                                                <a>Android</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Mobile App</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Photography</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>IOS</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Latest App</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Technology</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Lifestyle</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Trending Post</a> 
                                            </Link>
                                            <Link href="#">
                                                <a>Videos</a>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="col-md-8 col-lg-8"> 
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.1s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/1.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">20 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app landing page</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> / 
                                                            <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                        
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.2s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">21 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> / 
                                                            <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                                        
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/3.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">22 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app landing page</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> / 
                                                            <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                                        
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.4s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/3.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">23 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app landing page</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> / 
                                                            <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                        
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">24 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> 
                                                            / <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                                        
                                        <div className="col-md-12 col-lg-6"> 
                                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                                <div className="single-blog-post">
                                                    <div className="blog-img">
                                                        <Link href="/details-one">
                                                            <a>
                                                                <img src="/images/blog/1.jpg" alt="Blog Post Image" />
                                                            </a>
                                                        </Link>
                                                        <div className="blog-date">25 Mar, 2019</div>
                                                    </div>
                                                    
                                                    <div className="blog-info">
                                                        <h6 className="blog-title">
                                                            <Link href="/details-one">
                                                                <a>Awesome app landing page</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="post-admin">
                                                            By <a href="#">admin</a> / 
                                                            <a href="#">12</a> Comments
                                                        </div>
                                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                                        Erat tristique nonummy etiam, fusce est porttitor.</p>
                                                        <Link href="/details-one">
                                                            <a className="read-more-btn">Read More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                        </div>
                                    </div>

                                    <ul className="pagination-nav">
                                        <li>
                                            <Link href="#">
                                                <a aria-label="Previous">
                                                    <i className="icofont-long-arrow-left"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link href="#">
                                                <a>1</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>2</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>3</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>4</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a aria-label="Next">
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </section>

                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />

                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </NoSSR>
        )
    }
}
