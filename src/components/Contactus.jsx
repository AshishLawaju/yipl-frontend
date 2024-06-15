const Contactus = () => {
  return (
    <section className="contact-main container">
      <h2 className="contact-title">Contact Us</h2>
      <h4 className="contact-subtitle">
        If you have any further inquires, please let us know by <br /> filling
        the form below
      </h4>

      <form action="" className="contact-form-main">
        <div className="contact-double-div">
          <div className="contact-single-div">
            <label className="contact-form-label" htmlFor="firstname">First name</label>
            <input
              className="contact-from-input"
              type="text"
              name="firstname"
            />
          </div>
          <div className="contact-single-div">
            <label className="contact-form-label" htmlFor="lastname">Last name</label>
            <input className="contact-from-input" type="text" name="lastname" />
          </div>
        </div>
        <div className="contact-single-div">
          <label className="contact-form-label" htmlFor="email">Email</label>
          <input className="contact-from-input" type="email" name="email" />
        </div>
        <div className="contact-single-div">
          <label className="contact-form-label" htmlFor="message">Message</label>
          <textarea className="contact-from-input" style={{height:'117px'}} type="text" name="message" />
        </div>

        <div  className="resources-button-div1">
          <button type="button" className="resources-button-div2">
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contactus;
