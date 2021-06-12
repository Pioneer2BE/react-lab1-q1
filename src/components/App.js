import Header from "./Header";
import Form from "./Form";
import Results from "./Results";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Form/>
        <Results/>
      </main>
      <Footer/>    
    </div>
  );
}

export default App;
