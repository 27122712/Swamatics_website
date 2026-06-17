import "./Page404.css";
import MainContent from "../Home/MainContent";

const Page404 = () => {
  return (
    <MainContent>
      {/* <SideBar /> */}
      <div className="patient-list page-content403">
        <div>
          <h2>404</h2>
        </div>
        <div>
          <h9>&nbsp;Page not found !</h9>
        </div>
        <div>Please contact Support / Admin.</div>
      </div>
    </MainContent>
  );
};

export default Page404;
