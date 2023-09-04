import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { Posts } from "./store/components/Posts";

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
