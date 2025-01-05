/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { initialFormData, initialInputErrors } from "./AccountSelectionModel";
import { useDashboardContext } from "../Dashboard/DashboardContext";


export const AccountSelectionViewModel = () => {
    /********************************************************************************
    *                       REACT HOOKS                                             *
    ********************************************************************************/
    // to navigate to the dashboard once the user has been verified
    const navigate = useNavigate();

    // stores form data
    const [existingUserFormData, setExistingUserFormData] = useState(initialFormData);

    // tracks validation errors
    const [inputErrors, setInputErrors] = useState(initialInputErrors);

    // tracks whether a modal is open
    const [signUpModalDisplayed, setSignUpModalDisplayed] = useState(false);

    // sets the dashboard data context
    const { setDashboardData } = useDashboardContext();


    /********************************************************************************
    *                       FUNCTIONS                                               *
    ********************************************************************************/
    /**
     * Handles the input changes in the user identification form.
     * Stores the new value for the input field, and clears any input errors, if
     * applicable.
     *
     * @param {object} event - The event object passed when an input field changes.
     * @returns Nothing.
     */
    const handleInputChange = (event) => {
        // identifies which part of the form is being updated and stores the value entered
        const { name, value } = event.target;

        // uses the current state of existingUserFormData
        setExistingUserFormData((prev) => ({
            // preserves other fields that aren’t being updated
            ...prev,
            // dynamically sets the key to the new value
            [name]: value
        }));

        // clears any validation errors for this input field
        setInputErrors((prev) => ({
            // preserves other fields that aren’t being updated
            ...prev,
            // dynamically sets the key to the new value
            [name]: false
        }));
    };

    /**
     * Handles the submission of the user identification form.
     * Stores the new values for the input fields, and validates the entries before
     * submitting the form.
     *
     * @returns Nothing.
     */
    const handleLogInFormSubmission = () => {
        // stores input field values
        const { email, password } = existingUserFormData;

        // validates form entries
        const newErrors = {
            email: email.trim() === "",
            password: password.trim() === ""
        };

        // updates error states
        setInputErrors(newErrors);

        // prevents form submission if errors exist
        if (Object.values(newErrors).some((error) => error)) {
            console.log("Error: At least one invalid form entry.");

            return;
        };

        const fetchDashboardData = async () => {
            const controller = new AbortController();

            try {
                // submits form data
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_ADDRESS}/dashboard?email=${existingUserFormData.email}`,
                    { signal: controller.signal }
                );

                // updates context with the fetched data
                setDashboardData({
                    financialGoals: [{ id: "1", title: "Cut Costs", description: "Spend less money eating outside!"}, { id: "2", title: "Save Money", description: "Use Coupon apps."}, { id: "3", title: "Pay Back Loans", description: "Use any leftover money to pay back borrowed money."}],
                    latestIncomeRecords: [{ id: "1", description: "Textbook Sale", amount: "32.00", date: "2024-12-23"}, { id: "2", description: "KFC Pay", amount: "804.86", date: "2024-12-30"}],
                    latestSpendingRecords: [{ id: "1", description: "7-Eleven", amount: "52.45", date: "2024-12-23"}, { id: "2", description: "Walmart", amount: "134.97", date: "2024-12-30"}, { id: "3", description: "Planet Fitness", amount: "32.47", date: "2025-1-1"}],
                    userName: response.data
                });
            } catch (error) {
                if (axios.isCancel(error)) {
                    // handles request errors
                    console.log("Request canceled", error.message);
                } else if (error.response) {
                    // handles response errors
                    console.error("Error status:", error.response.status);
                } else {
                    // handles other errors
                    console.error("Network error:", error.message);
                }
            } finally {
                // resets the form
                setExistingUserFormData(initialFormData);
            }

            // controller.abort();
        };

        fetchDashboardData();

        // navigates to the user's dashboard
        navigate("/dashboard");
    };


    // returns the viewModel's functionality
    return {
        existingUserFormData,
        inputErrors,
        signUpModalDisplayed,
        handleInputChange,
        handleLogInFormSubmission,
        setSignUpModalDisplayed
    }
};
