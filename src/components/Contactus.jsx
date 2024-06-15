const Contactus = () => {
  return (
    <section className="contact-main container">
      <h2 className="contact-title">Contact Us</h2>
      <h4 className="contact-subtitle">
        If you have any further inquires, please let us know by <br /> filling the form
        below
      </h4>

      <form action="">
        <div>
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" />
        </div>

        <div className="resources-button-div">
          <button type="button" className="resources-button">
            submit
          </button>
        </div>
      
      </form>
    </section>
  );
};

export default Contactus;
