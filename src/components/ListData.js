import "./List.css";
const ListData = (props) => {
  const catg = props.fData.data;
  const clickedItem = (event) => {
    console.log(event.target.id);
  };

  if (props.fData.pageType == "product") {
    return (
      <div>
        <ul class="list-group">
          {catg &&
            catg.length > 0 &&
            catg.map(
              (catg, index) => (
                console.log(catg),
                (
                  <div className="list">
                    <li
                      class="list-group-item"
                      key={catg.id}
                      onClick={clickedItem}
                      id={catg.id}
                    >
                      <div className="row" id={catg.id}>
                        <img
                          className="image"
                          src={catg.foodImagepath}
                          alt="new"
                          id={catg.id}
                        />
                        <div className="text" id={catg.id}>
                          {catg.fullFoodName}
                        </div>
                      </div>
                    </li>
                  </div>
                )
              )
            )}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul class="list-group">
          {catg &&
            catg.length > 0 &&
            catg.map(
              (catg, index) => (
                console.log(catg),
                (
                  <div className="list">
                    <li
                      class="list-group-item"
                      key={catg.id}
                      onClick={clickedItem}
                      id={catg.id}
                    >
                      <div className="row" id={catg.id}>
                        <img
                          className="image"
                          src={catg.foodCategoryImagepath}
                          alt="new"
                          id={catg.id}
                        />
                        <div className="text" id={catg.id}>
                          {catg.name}
                        </div>
                      </div>
                    </li>
                  </div>
                )
              )
            )}
        </ul>
      </div>
    );
  }
};

export default ListData;
