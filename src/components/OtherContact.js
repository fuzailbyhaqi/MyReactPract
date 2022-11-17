const OtherContact = () => {
  return (
    <div>
      <div class="row pb-5">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="440"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="row pt-5 pb-5 mb-5">
        <div class="col-md-6 tm-contact-l">
          <h3 class="tm-article-title tm-color-primary">
            Fusce consectetur justo urna
          </h3>
          <p class="mb-4">
            Phasellus scelerisque, leo id dictum consectetur, dui felis ultrices
            ligula, at tristique sem elit ac eros.
          </p>
          <ul class="tm-ul-hyphen">
            <li>Etiam varius faucibus elit, id ultrices</li>
            <li>Nam condimentum tortor id dui</li>
            <li>Quis faucibus lacus faucibus</li>
            <li>Sed urna est, vulputate quis efficitur</li>
          </ul>
        </div>
        <div class="col-md-6 tm-contact-r">
          <h3 class="tm-article-title tm-color-primary">
            Nulla euismod nisi in ligula
          </h3>
          <p class="mb-4">
            Etiam iaculis urna finibus ante pharetra eleifend. Nulla euismod
            nisi in ligula feugiat, in gravida erat tempus. Nullam velit ante,
            semper in rhoncus non, fringilla vel erat. In gravida dapibus massa
            non laoreet.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherContact;
