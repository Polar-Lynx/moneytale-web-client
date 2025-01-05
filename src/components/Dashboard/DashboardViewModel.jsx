/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { useDashboardContext } from "./DashboardContext";


export const DashboardViewModel = () => {
    /********************************************************************************
    *                       REACT HOOKS                                             *
    ********************************************************************************/
    // accesses the dashboard data from context
    const { dashboardData } = useDashboardContext();


    // returns the viewModel's functionality
    return {
        financialGoals: dashboardData.financialGoals,
        latestIncomeRecords: dashboardData.latestIncomeRecords,
        latestSpendingRecords: dashboardData.latestSpendingRecords,
        userName: dashboardData.userName
    };
};
