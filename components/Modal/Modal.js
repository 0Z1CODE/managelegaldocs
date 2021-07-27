
class Modal extends React.Component {
    render() {
        const { closeModal } = this.props;
        return (
            <div className="modal right screenshots-modal fade" id="screenshot_details" style={{paddingRight: '16px', display: 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={closeModal} type="button" className="btn-close close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="screenshot-details-container">
                                <div className="row align-items-center">
                                    <div className="col-md-5 col-lg-5"> 
                                        <img src={this.props.image} alt="Screenshot Image" />
                                    </div>
                                    
                                    <div className="col-md-7 col-lg-7"> 
                                        <div className="screenshot-details-text"> 
                                            <h3 className="title">Screenshots Title</h3>
                                            <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                                            
                                            <ul> 
                                                <li>
                                                    <i className="icofont icofont-check"></i>  
                                                    High Resolution
                                                </li>
                                                <li>
                                                    <i className="icofont icofont-check"></i> 
                                                    Unique Design
                                                </li>
                                                <li>
                                                    <i className="icofont icofont-check"></i> 
                                                    Full Responsive
                                                </li>
                                                <li>
                                                    <i className="icofont icofont-check"></i> 
                                                    Clean Codes
                                                </li>
                                            </ul>
                                            
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;