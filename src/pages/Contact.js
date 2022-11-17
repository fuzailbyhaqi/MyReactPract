import TextLabel from "../components/TextLabel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import OtherContact from "../components/OtherContact";

const Contact = () => {
  const saveFormDataHandler = (enteredFormData) => {
    console.log(enteredFormData);
    let data =
      "Success!" +
      "\n\nName: " +
      enteredFormData.name +
      "\nEmail: " +
      enteredFormData.email +
      "\nMessage: " +
      enteredFormData.message;
    alert(data);
  };
  return (
    <div>
      <div class="container-fluid">
        <Banner bannerId="tm-main-bg tm-contact-bg" />

        <main>
          <section class="tm-welcome">
            <TextLabel name="Contact Information" />

            <div class="row tm-welcome-row">
              <div class="col-lg-6 mb-5 tm-contact-box">
                <div class="tm-contact-form-wrap">
                  <ContactForm onSaveForm={saveFormDataHandler} />
                </div>
              </div>
              <div class="col-lg-6 mb-5 tm-contact-box">
                <div class="tm-double-border-1 tm-border-gray">
                  <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                    <p class="mb-4">
                      <a
                        rel="nofollow"
                        target="_parent"
                        href="https://templatemo.com/tm-542-new-vision"
                      >
                        New Vision
                      </a>{" "}
                      HTML Template is free to download instantly from
                      TemplateMo website. In dapibus dui vitae urna fringilla
                      volupat.
                    </p>
                    <p class="mb-3">
                      120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil
                    </p>
                    <p class="mb-1">
                      Tel:{" "}
                      <a href="tel:0900100910" class="tm-link">
                        090-010-0910
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@company.com" class="tm-link">
                        info@company.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <OtherContact />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Contact;
