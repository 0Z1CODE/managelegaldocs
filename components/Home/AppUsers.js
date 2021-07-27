import ReactWOW from 'react-wow';

export default class AppUsers extends React.Component {
    render() {
        return (
            <ReactWOW delay='0.3s' animation='fadeInUp'>
                <section className="app-users-section hidden-div">   
                    <div className="container"> 
                        <div className="row"> 
                        <div className="col-lg-2 offset-lg-3 col-xl-2 offset-xl-3"> 
                                <div className="single-user">
                                    <i className="icofont-web"></i>
                                    <h3>WEB <br /> </h3>
                                    <span>All New Browser</span>
                                </div>
                            </div>
                            <div className="col-lg-2  col-xl-2 "> 
                                <div className="single-user">
                                    <i className="icofont-brand-apple"></i>
                                    <h3>ios <br /></h3>
                                    <span>10.10+ </span>

                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-xl-2"> 
                                <div className="single-user">
                                    <i className="icofont-brand-microsoft"></i>
                                    <h3>Windows <br /> </h3>
                                    <span>7, 8, 10 </span>


                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-xl-2"> 
                                <div className="single-user">
                                    <i className="icofont-brand-linux"></i>
                                    <h3>Linux <br /> </h3>
                                    <span>.deb, .rpm </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ReactWOW>
        )
    }
}
