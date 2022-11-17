import Banner from "../components/Banner";
import CompanyFooter from "../components/CompanyFooter";
import CompanyItem from "../components/CompanyItem";
import CompanyTextColumn from "../components/CompanyTextColumn";
import Footer from "../components/Footer";
import TextLabel from "../components/TextLabel";
import TextLabelSimple from "../components/TextLabelSimple";
import { itemsCompany } from "../constants/AppConstants";
import { itemCompanyBox } from "../constants/AppConstants";

const Company = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <Banner bannerId="tm-main-bg tm-about-bg" />

          <main>
            <section className="tm-welcome">
              <TextLabel name="About Our Company" />

              <div className="row tm-welcome-row">
                <div className="tm-about">
                  {itemsCompany.map((res) => {
                    return <CompanyItem data={res} />;
                  })}
                  ;
                </div>
              </div>

              <div className="row tm-welcome-row-2">
                <TextLabelSimple data="Our Background and Environment" />
                {itemCompanyBox.map((res) => {
                  return <CompanyTextColumn data={res} />;
                })}
                ;
              </div>
            </section>

            <section className="tm-featured">
              <div className="row">
                <TextLabelSimple data="Our Team Members" />
              </div>
              <CompanyFooter />
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Company;
