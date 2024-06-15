import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Search = ({ setShowSearch }) => {
  return (
    <section
      className="search-main "
      style={{
        backgroundColor: "#00000066",
        height: "100vh",
        width: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        overflow: "hidden",
      }}
    >
      <div
        className="search-content container"
        style={{ position: "relative" }}
      >
        <CiSearch style={{ fontSize: "18px" }} />
        <input type="text" placeholder="search" />

        <RxCross1
          style={{
            backgroundColor: "white",
            position: "absolute",
            right: -11,
            top: -11,
            borderRadius: "999px",
            cursor: "pointer",
          }}
          onClick={() => setShowSearch((pre) => !pre)}
        />
      </div>
    </section>
  );
};

export default Search;
