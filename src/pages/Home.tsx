import Card from "../components/Card";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="w-full h-screen bg-customBody pl-10 pr-10 pt-5">
      <div className="w-full flex justify-between">
        {/* left side */}
        <div>
          <p className="text-CoustomText text-2xl font-bold">
            Welcome to Eres!
          </p>
          <p className="text-bodyHederSubtext">
            Hospital Admin Dashboard Template
          </p>
        </div>
        {/* Right Side */}
        <div>
          <Search />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
