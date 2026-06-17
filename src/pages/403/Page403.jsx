import "./Page403.css";
import MainContentCard from "../Home/MainContentCard";
import Topbar from "../../components/Topbar/Topbar";
import SideBar from "../../components/SideBar/SideBar";

const Page403 = () => {
  return (
    <MainContentCard>
      {/* <SideBar /> */}
      <div className="error-403 page-content403">
        <div>
          <h2>403</h2>
        </div>
        <div>
          <h9>&nbsp;You do not have access to the resource.</h9>
        </div>
        <div>Please check your Permission Level or contact admin.</div>
      </div>
    </MainContentCard>
  );
};

export default Page403;
