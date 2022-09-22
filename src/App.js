import "./App.css";
import Cell from "./components/Cell";

const data = [
  [
    { editable: false, label: "row 1 column 1" },
    { editable: true, label: "row 1 column 2", },
  ],
  [
    { editable: false, label: "row 2 column 1", hint: "some hint" },
    { editable: false, label: "row 2 column 2" },
  ],
  [
    {
      editable: false,
      label: "row 3 column 1",
      hint: "some hint 2",
      icon: "alert",
    },
    { editable: false, label: "row 3 column 2" },
  ],
];
function App() {
  return (
    <div className="cells">
          {data.map((item, i) => (
            <>
                <Cell
                  value={item[0].label}
                  canEdit={item[0].editable}
                  hint={item[0].hint}
                  icon={item[0].icon}
                />


                <Cell
                  value={item[1].label}
                  canEdit={item[1].editable}
                  hint={item[1].hint}
                  icon={item[1].icon}
                />
          </>
          ))}
          
    </div>
  );
}

export default App;
