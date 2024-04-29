import { SwipStoryProvider } from "./context";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <SwipStoryProvider>
            <HomePage />
        </SwipStoryProvider>
    );
}

export default App;
