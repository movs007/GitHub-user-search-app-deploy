import SearchContainer from "@components/SearchContainer";
import ThemeBtn from "@components/ThemeBtn";

const Home = () => {
  return (
    <section className="  w-full lg:w-3/5 px-5 h-full">
      <div className="flex justify-between items-center mt-6">
        <div className="text-primary-textBold dark:text-dark-text1 font-bold text-3xl ">
          devfinder
        </div>
        <div>
          <ThemeBtn />
        </div>
      </div>
      <div>
        <SearchContainer />
      </div>
    </section>
  );
};

export default Home;
