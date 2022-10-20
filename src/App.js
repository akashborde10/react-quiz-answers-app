import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "./Styles/main.css";
import Home from "./components/Layouts/Home";
import { AllQuizList } from "./Data/AllQuizs";


export const Quizzs = createContext(null);

function App() {
  return (
    <div className="App">
      <Quizzs.Provider value={AllQuizList}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              exact
              path="/quiz/:quiz_id"
              component={() => {
                return <QuizComponent QuizList={AllQuizList} />;
              }}
            />
          </Switch>
          <Footer />
        </Router>
      </Quizzs.Provider>
    </div>
  );
}

export default App;
