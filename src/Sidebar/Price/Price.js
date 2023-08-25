import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={1000}
          title="R0 - R1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="R50 - R100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="R100 - R150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over R150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
