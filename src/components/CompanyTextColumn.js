const CompanyTextColumn = (props) => {
  return (
    <div className="col-md-6">
      <div className="tm-about-1">
        <img
          src={props.data.imagePath}
          alt="Image"
          className="img-fluid mb-5"
        />
        <p className="tm-article-text">{props.data.desc1}</p>
        <p>{props.data.desc2}</p>
      </div>
    </div>
  );
};
export default CompanyTextColumn;
