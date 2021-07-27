import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import Navigation from "../components/Navigation/Navigation";
import Loader from "../components/Shared/Loader";
import Slider from "../components/Home/Slider";
import About from "../components/Home/About";
import HowItWorks from "../components/Home/HowItWorks";
import Features from "../components/Home/Features";
import Counter from "../components/Home/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/Home/Testimonial";
import Pricing from "../components/Home/Pricing";
import Faq from "../components/Home/Faq";
import Team from "../components/Home/Team";
import AppDownload from "../components/Home/AppDownload";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import Footer from "../components/Common/Footer";
import GoTop from "../components/Common/GoTop";
import AppUsers from "../components/Home/AppUsers";
import FullScreenModal from "../components/Modal/FullScreenModal";
import requests from "../services/requests";

class Index extends React.Component {
  state = {
    FsModal: false,
    FormType: null,
    purchaseType: null,
    ip: null,
  };

  show_modal = (e) => {
    const { FormType } = this.state;
    const CurrentFormType = e.hasOwnProperty("modalType")
      ? e.modalType
      : e.currentTarget.getAttribute("attr-type");

    if (FormType === CurrentFormType || FormType === null)
      this.setState({ FsModal: !this.state.FsModal });

    this.setState({ FormType: CurrentFormType });

    if(e.hasOwnProperty("currentTarget") && e.currentTarget.hasAttribute( "attr-purchase")) {
      this.setState({purchaseType: e.currentTarget.getAttribute("attr-purchase")})
    }
  };
  close_modal = () => {
    this.setState({ FsModal: !this.state.FsModal });
    this.setState({ FormType: null });
  };

  componentDidMount() {
    const { hash } = window.location;
    if(hash !== "" && hash.indexOf("#") !== -1){
      const action = hash.replace("#", "");
      const modalActions = ['sign_in', 'sign_up'];

      if(modalActions.includes(action)){
        this.show_modal({modalType: action});
      }
    }
  }



   

  render() {
    return (
      <NoSSR key="1">
        <Preloader fadeDuration={1000}>
          <FullScreenModal
            toggleClass={this.state.FsModal === true && "show_modal"}
            show_modal={this.show_modal}
            close_modal={this.close_modal}
            formType={this.state.FormType}
            purchaseType = {this.state.purchaseType}
            ip = {this.state.ip}
          />
          <Navigation
            toggleClass={this.state.FsModal === true && "show_modal"}
            show_modal={this.show_modal}
            formType={this.state.FormType}
          />
          <Slider />
          <AppUsers />
          <About />
          <HowItWorks />
          {/* <Features /> */}
          {/* <Counter /> */}
          <Screenshots />
          {/* <Testimonial /> */}
          <Pricing 
          ttoggleClass={this.state.FsModal === true && "show_modal"}
          show_modal={this.show_modal}
          formType={this.state.FormType}/>
          <Faq />
          {/* <Team /> */}
          <AppDownload />
          {/* <Blog /> */}
          <Contact />
          <Footer />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />

          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </NoSSR>
    );
  }
}

export default Index;
