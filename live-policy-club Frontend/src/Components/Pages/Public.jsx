import Bill from "../Bill";
import CompactProfile from "../CompactProfile";

const Public = () => {
  const divStyle = {
    lineHeight: "75px",
    backgroundColor: "#f1f1f1",
    width:"5%", marginLeft: "7%", marginRight: "7%",

    marginTop: "1%",
    marginBottom: "1%",
    textAlign: "center",
    fontSize: "30px",
  };
  return (
    <div>
      <Bill />

      <br />
      <div className="row" style={{ margin: "0px" }}>
        <div className="col-md-1"> </div>

        <div className="col-md-2">
          <h3 className="font-style">
            <b>Elects</b>
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              backgroundColor: "transparent",
              justifyContent: "center",
              borderRight: "1px solid DodgerBlue",
            }}
          >
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <h3 className="font-style">
            <b>Runners</b>
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              backgroundColor: "transparent",
            }}
          >
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
            <div style={divStyle}>
              <CompactProfile />
            </div>
          </div>
        </div>

        <div className="col-md-1"> </div>
      </div>
    </div>
  );
};

export default Public;
