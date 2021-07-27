import ReactWOW from 'react-wow';
import 'isomorphic-fetch'

export default class Contact extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message is send to the owner
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <section id="contact" className="contact-section gray-bg angle-contact-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>Get in Touch</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="row"> 
                        <ReactWOW delay='0.4s' animation='fadeInUp'>
                            <div className="col-md-4 col-lg-4"> 
                                <div className="single-contact-info">
                                    <i className="icofont-location-pin"></i>
                                    <h3>Office Address:</h3>
                                    <p>2750 Quadra Street Victoria, Canada.</p>
                                </div>
                            </div>
                        </ReactWOW>
                        
                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                            <div className="col-md-4 col-lg-4"> 
                                <div className="single-contact-info">
                                    <i className="icofont-envelope"></i>
                                    <h3>E-mail Address:</h3>
                                    <p>heroapp@gmail.com</p>
                                </div>
                            </div>
                        </ReactWOW>
                        
                        <ReactWOW delay='0.8s' animation='fadeInUp'>
                            <div className="col-md-4 col-lg-4"> 
                                <div className="single-contact-info">
                                    <i className="icofont icofont-phone"></i>
                                    <h3>Phone Number:</h3>
                                    <p>+324-9442-515</p>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 col-lg-12"> 
                            <ReactWOW delay='0.9s' animation='fadeInUp'>
                                <div className="contact-form"> 
                                    <form id="contactForm" onSubmit={this.onSubmit}>
                                        <div className="row"> 
                                            <div className="col-lg-6"> 
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter your name" 
                                                        placeholder="Your Name" 
                                                        value={this.state.formFields.name}
                                                        onChange={this.nameChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6"> 
                                                <div className="form-group">
                                                    <label>E-mail</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter your email" 
                                                        placeholder="Email Address" 
                                                        value={this.state.formFields.email}
                                                        onChange={this.emailChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                value={this.state.formFields.subject}
                                                onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                rows="6" 
                                                required={true}
                                                data-error="Write your message" 
                                                placeholder="Enter your message here..." 
                                                value={this.state.formFields.text}
                                                onChange={this.textChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="default-button">
                                                Send Message 
                                                <i className="icofont-arrow-right"></i>
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                        {this.successMessage()}
                                    </form>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
