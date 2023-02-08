import MainPage from "../frontPage/MainPage";

const HomePage = (props) => {
  return (
    <div>
      <main>
        <MainPage onMenu={props.mode} />
      </main>
    </div>
  );
};

export default HomePage;
