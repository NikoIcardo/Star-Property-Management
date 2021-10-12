import React, { Fragment, useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      console.log(name, email, message);
      setSent(true);
    } else {
      setFormError(true);
      console.log("Form-Error");
    }
  };

  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mt-2 text-center bg-olive p-2">Contact Us</h1>
          <hr />
          <p className="px-5 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit. Turpis massa
            sed elementum tempus egestas sed sed. Ut porttitor leo a diam
            sollicitudin tempor id. Faucibus nisl tincidunt eget nullam.
            Pulvinar elementum integer enim neque. Penatibus et magnis dis
            parturient montes nascetur ridiculus mus mauris. Velit euismod in
            pellentesque massa. Suspendisse sed nisi lacus sed viverra tellus in
            hac. Elit ullamcorper dignissim cras tincidunt lobortis. Vitae
            auctor eu augue ut lectus arcu bibendum at. Pretium vulputate sapien
            nec sagittis aliquam malesuada bibendum arcu. Semper risus in
            hendrerit gravida. Tellus elementum sagittis vitae et leo duis.
            Dolor purus non enim praesent elementum. Convallis a cras semper
            auctor neque. Aenean sed adipiscing diam donec adipiscing tristique
            risus nec feugiat. Ac ut consequat semper viverra nam. Nisi est sit
            amet facilisis magna etiam tempor. Risus at ultrices mi tempus.
            Lacus luctus accumsan tortor posuere ac ut. Risus commodo viverra
            maecenas accumsan lacus. Cursus risus at ultrices mi. Ut tortor
            pretium viverra suspendisse potenti nullam ac. Viverra nam libero
            justo laoreet sit amet. Turpis tincidunt id aliquet risus feugiat in
            ante metus dictum. Tristique et egestas quis ipsum suspendisse
            ultrices gravida. Enim ut sem viverra aliquet. Quam adipiscing vitae
            proin sagittis nisl rhoncus mattis rhoncus urna. Ultrices vitae
            auctor eu augue ut lectus. Arcu bibendum at varius vel pharetra vel.
            Sit amet nulla facilisi morbi tempus iaculis urna id.
          </p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-3 m-5">
          <h3>Our Info</h3>
          <p>Please feel free to contact us in any of the following ways:</p>
          <ul>
            <li>Phone: 111-111-1111</li>
            <li>
              Email:{" "}
              <a href="mailto:test@test.com" target="_blank" rel="noreferrer">
                test@test.com
              </a>
            </li>
            <li>
              Address: <br />
              Star Property Management
              <br /> 111 Star Property Mgmt. Lane <br />
              San Francisco CA, 94016
            </li>
          </ul>
        </div>
        <div className="col m-5 text-center">
          {!sent ? (
            <Fragment className="m-0 p-0">
              <h3>Send us a Message</h3>
              <p>
                We will get back to you within 24 hours and you will receive a
                response via email.
              </p>
              {formError && (
                <p className="text-danger">Please Enter All Fields</p>
              )}
              <form onSubmit={onSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="name" className="form-label text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className="form-control"
                    placeholder="First and Last Name"
                    onInput={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="email" className="form-label text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    placeholder="Your Email Address"
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="email" className="form-label text-left">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    rows="8"
                    className="form-control"
                    placeholder="Enter A Message for Us!"
                    onInput={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="form-group text-left">
                  <input
                    type="submit"
                    className="btn btn-dark form-control"
                    placeholder="Enter A Message for Us!"
                  />
                </div>
              </form>
            </Fragment>
          ) : (
            <Fragment>
              <h3>Your Message Has been Sent!</h3>
              <br />
              <p>
                You will be hearing from us soon. <br />
                <br /> If you don't see an email back from us within one day,
                please check your spam folder or give us a call at:
                111-111-1111.
              </p>
              <h4>Thank You!</h4>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
