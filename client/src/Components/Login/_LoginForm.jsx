import _10 from "../../Images/10.png";
import "./Login.css";

function App() {
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="keywords" content="Manga Multiplex, Login" />
      <meta name="description" content />
      <meta name="page_type" content="np-template-header-footer-from-plugin" />
      <title>Login</title>
      <link rel="stylesheet" href="nicepage.css" media="screen" />
      <link rel="stylesheet" href="Login.css" media="screen" />
      <meta name="generator" content="Nicepage 4.9.5, nicepage.com" />
      <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Login" />
      <meta property="og:type" content="website" />
      <section className="u-clearfix u-image u-section-1" id="carousel_8175" data-image-width={1280} data-image-height={853}>
        <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="u-align-center u-border-14 u-border-no-left u-border-no-right u-border-no-top u-border-palette-4-light-1 u-container-style u-custom-border u-group u-opacity u-opacity-55 u-palette-1-base u-shape-rectangle u-group-1">
            <div className="u-container-layout u-container-layout-1"><span className="u-file-icon u-icon u-icon-circle u-palette-4-light-1 u-spacing-25 u-icon-1"><img src={_10} alt="" /></span>
              <h1 className="u-hover-feature u-text u-text-default u-text-palette-4-dark-1 u-text-1 d-flex justify-contents-center align-items-center">
                <span style={{fontStyle: 'italic', margin: 'auto'}}>LOGIN</span>
                {/* <span style={{fontStyle: 'italic'}}>
                  <span style={{fontStyle: 'normal'}}>
                    <span style={{fontStyle: 'italic'}} />
                  </span>
                </span> */}
              </h1>
              <div className="u-form u-login-control u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-custom-backend u-form-spacing-50 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: '19px'}}>
                  <div className="u-form-group u-form-name u-label-top">
                    <label htmlFor="username-a30d" className="u-label u-text-palette-4-light-1 u-label-1">Email Address</label>
                    <input type="email" placeholder="Enter Your Email" id="username-a30d" name="username" className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-input-1" required />
                  </div>
                  <div className="u-form-group u-form-password u-label-top u-form-group-2">
                    <label htmlFor="password-a30d" className="u-label u-text-palette-4-light-1 u-label-2">Password</label>
                    <input type="password" placeholder="Enter your Password" id="password-a30d" name="password" className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-input-2" required />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit u-label-top">
                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                    <a href="#" className="u-active-palette-4-dark-2 u-border-none u-btn u-btn-submit u-button-style u-hover-palette-4-light-1 u-palette-4-dark-1 u-btn-1">Login</a>
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: ".u-disable-duration * {transition-duration: 0s !important;}" }} />
    </div>
  );
}

export default App;
