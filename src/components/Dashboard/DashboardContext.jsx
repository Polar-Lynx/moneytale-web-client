/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import PropTypes from "prop-types";
import React, { createContext, useContext, useMemo , useState } from 'react';


/********************************************************************************
*                       REACT HOOKS                                             *
********************************************************************************/
// context for dashboard data
const DashboardContext = createContext();

// context providing hook
export const DashboardContextProvider = ({ children }) => {
    const [dashboardData, setDashboardData] = useState({
        financialGoals: [],
        latestIncomeRecords: [],
        latestSpendingRecords: [],
        userName: ""
    });

    // wraps in useMemo to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({ dashboardData, setDashboardData }), [dashboardData, setDashboardData]);

    return (
        <DashboardContext.Provider value={contextValue}>
            {children}
        </DashboardContext.Provider>
    );
};

// context access hook
export const useDashboardContext = () => useContext(DashboardContext);


/********************************************************************************
*                       PROP-TYPES                                              *
********************************************************************************/
DashboardContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
