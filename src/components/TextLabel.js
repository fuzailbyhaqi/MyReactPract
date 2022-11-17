let TextLabel = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-header-floating">
            {props.name}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default TextLabel;
