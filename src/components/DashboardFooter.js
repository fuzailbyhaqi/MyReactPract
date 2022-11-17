import Footer from "./Footer";

const DashboardFooter = () => {
  return (
    <div>
      <section className="tm-featured">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-section-header tm-section-header-small">
              Featured Carousel Items
            </h2>
          </div>
        </div>

        <div className="grid tm-carousel">
          <figure className="effect-honey">
            <img src="img/gallery-item-01.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Template
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-02.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Top</span> CSS Theme
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-03.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Template
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-04.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Great</span> Web Theme
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-05.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Collection
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-06.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Max</span> CSS Layout
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-07.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Layout
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src="img/gallery-item-08.jpg" alt="Featured Item" />
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> CSS Template
                </i>
              </h4>
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardFooter;
