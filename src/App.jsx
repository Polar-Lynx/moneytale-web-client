/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { BrowserRouter, Route, Routes } from "react-router";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { HomePageView } from './components/HomePage/HomePageView';
import { AccountSelectionView } from "./components/AccountSelection/AccountSelectionView";
import { DashboardView } from "./components/Dashboard/DashboardView";


export const App = () => {
    return (
        <BrowserRouter>
            {/* couples URL segments to UI elements */}
            <Routes>
                {/* couples a URL segment to a component */}
                <Route path="/" element={<HomePageView />} />

                <Route path="/account-selection" element={<AccountSelectionView />} />

                <Route path="/dashboard" element={
                    <DashboardView
                        financialGoals={ [{ id: "1", title: "Cut Costs", description: "Spend less money eating outside!"}, { id: "2", title: "Save Money", description: "Use Coupon apps."}, { id: "3", title: "Pay Back Loans", description: "Use any leftover money to pay back borrowed money."}] }
                        latestIncomeRecords={ [{ id: "1", description: "7-Eleven", amount: "52.45", date: "2024-12-23"}, { id: "2", description: "Walmart", amount: "134.97", date: "2024-12-30"}] }
                        latestSpendingRecords={ [{ id: "1", description: "7-Eleven", amount: "52.45", date: "2024-12-23"}, { id: "2", description: "Walmart", amount: "134.97", date: "2024-12-30"}, { id: "3", description: "Planet Fitness", amount: "32.47", date: "2025-1-1"}] }
                        userName={ "Mario" }
                    />
                } />
            </Routes>
        </BrowserRouter>
    );
};
