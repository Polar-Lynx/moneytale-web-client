/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { BrowserRouter, Route, Routes } from "react-router";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { HomePageView } from './components/HomePage/HomePageView';
import { AccountSelectionView } from "./components/AccountSelection/AccountSelectionView";
import { DashboardContextProvider } from "./components/Dashboard/DashboardContext";
import { DashboardView } from "./components/Dashboard/DashboardView";


export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageView />} />

                <Route path="/account-selection" element={
                    <DashboardContextProvider>
                        <AccountSelectionView />
                    </DashboardContextProvider>
                } />

                <Route path="/dashboard" element={
                    <DashboardContextProvider>
                        <DashboardView />
                    </DashboardContextProvider>
                } />
            </Routes>
        </BrowserRouter>
    );
};
