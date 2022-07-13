function Tabs() {
  // const [boxColors, setBoxColors] = useState([]);
  // const makeABox = (color) => {
  //   setBoxColors(color);
  // };
  const Tabs = (props) => {
    const onClickHandler = (e, value) => {
      alert(value);
    };

    return props.tabs.map((item, index) => {
      return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>;
    });
  };
  return (
    // <div className="App">
    //   <h1>Box Generator</h1>
    //   <BoxGenerator onNewBox={makeABox} />
    //   <DisplayBox boxColors={boxColors} />
    // </div>
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="T">
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="T">
            Tab 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="T">
            Tab 3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
