const TextLabelSimple = (props) => {
  return (
    <div className="col-12">
      <h2 className="tm-section-header tm-section-header-small mb-4">
        {props.data}
      </h2>
    </div>
  );
};

export default TextLabelSimple;
