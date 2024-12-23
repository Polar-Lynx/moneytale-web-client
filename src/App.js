// utilities
import { BrowserRouter, Route, Routes } from "react-router";


// components
import HomePageView from './components/HomePage/HomePageView';


const App = () => {
    return (
        <BrowserRouter>
            {/* couple URL segments to UI elements */}
            <Routes>
                {/* couples a URL segment to a component */}
                <Route path="/" element={<HomePageView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
