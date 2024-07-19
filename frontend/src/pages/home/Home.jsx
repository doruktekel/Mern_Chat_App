import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[450px] md:h-[550px] overflow-hidden bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
