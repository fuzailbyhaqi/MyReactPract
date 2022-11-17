const CompanyItem = (props) => {
  return (
    <div className="col-12 tm-media tm-media-v-center">
      <i className={props.data.imagePath}></i>
      <div>
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
};
export default CompanyItem;
