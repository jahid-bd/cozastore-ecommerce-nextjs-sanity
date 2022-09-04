export const FilterItem = ({ data }) => {
  return (
    <div className="filter-item">
      <div className="title">
        <h5>{data.title}</h5>
      </div>
      <div className="lists">
        <ul className={data.type === "tags" && "tags"}>
          {data.options.map((item) => (
            <li key={item.id}>
              {data.type === "color" && (
                <span
                  className="color"
                  style={{ backgroundColor: item.value }}
                ></span>
              )}
              <span className="text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
