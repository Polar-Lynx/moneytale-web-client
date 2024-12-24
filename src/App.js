/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { BrowserRouter, Route, Routes } from "react-router";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { HomePageView } from './components/HomePage/HomePageView';
import { AccountSelectionView } from "./components/AccountSelection/AccountSelectionView";


export const App = () => {
    return (
        <BrowserRouter>
            {/* couples URL segments to UI elements */}
            <Routes>
                {/* couples a URL segment to a component */}
                <Route path="/" element={<HomePageView />} />

                <Route path="/account-selection" element={<AccountSelectionView />} />
            </Routes>
        </BrowserRouter>
    );
};
