import "./_exp-tab.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// import Sonnet from "../../components/Sonnet";
export const ExpTab = () => {
  return (
    <>
      <div id="tab-container">
        <div class="tab-wrap">
          <input type="radio" id="tab1" name="tabGroup1" class="tab" />
          <label for="tab1" className="">
            Personal Tour (On-Campus or Virtual)
          </label>

          <input type="radio" id="tab2" name="tabGroup1" class="tab" />
          <label for="tab2" className="">
            We Love TFA! Admissions Open House Event for Prospective Families on
            Wednesday, February 22, 2023
          </label>

          <div class="tab__content">1</div>
          <div class="tab__content">2</div>
        </div>
      </div>
    </>
  );
};
