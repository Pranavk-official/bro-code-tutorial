// import Card from "./Card";
// import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import Student from "./Student";

function App() {
  return (
    <>
      <Header />
      {/* <Food /> */}
      <Student name={"Sponge bob"} age={20} isStudent={false} />
      <Student name={"Patrick"} age={24} isStudent={true} />
      <Student name={"Squidward"} age={24} isStudent={true} />
      <Footer />
    </>
  );
}

export default App;
