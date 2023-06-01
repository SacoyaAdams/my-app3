//sacoya adams
import { RedStripe } from "./RedStripe";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { BlueStripe } from "./BlueStripe";

const myQueryClient = new QueryClient();

//line 12 we are making a call our JSON placeholder API when the component loads the DOM or when our browser window gains focus.
//This means when a user clicks off the browser and clicks on the browser, React-Query calls the API for us automatically
function App() {
  return (
    <div className="App">
      {/* Bellow indicated that any components within this

      block will be able to read (share) from the React-Query cache. */}
        React III

      <QueryClientProvider client={myQueryClient}>
        <RedStripe />

        <BlueStripe />
      </QueryClientProvider>
    </div>
  );
}

export default App;
