const BoxArticle = (props) => {
  return (
    <div className="col-lg-4 tm-dotted-box-container">
      <article className="tm-dotted-box">
        <i className={props.data.imagePath}></i>
        <h3 className="tm-article-title">{props.data.title}</h3>
        <p className="tm-article-text">{props.data.desc}</p>
        <a className="tm-btn tm-btn-rounded tm-article-link" href="#">
          More Details
        </a>
      </article>
    </div>
  );
};

export default BoxArticle;
