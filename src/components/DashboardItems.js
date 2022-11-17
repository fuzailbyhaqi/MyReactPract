const DashboardItems = (props) => {
  return (
    <article className="col-lg-6 tm-media">
      <img
        src={props.data.imagePath}
        alt="Welcome image"
        className="img-fluid tm-media-img"
      />
      <div className="tm-media-body">
        <a href="#" className="tm-article-link">
          <h3 className="tm-article-title text-uppercase">
            {props.data.title}
          </h3>
        </a>
        <p>{props.data.desc}</p>
      </div>
    </article>
  );
};
export default DashboardItems;
