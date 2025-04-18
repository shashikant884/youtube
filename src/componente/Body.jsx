import MainContainer from "./Maincontainer";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
