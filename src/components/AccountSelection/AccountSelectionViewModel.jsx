/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { useState } from "react";
import { useNavigate } from "react-router";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { initialFormData, initialInputErrors } from "./AccountSelectionModel"


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

        // submits form data
        console.log("Submitted Data:", existingUserFormData);

        // handles response
        if (true) {
            // resets the form
            setExistingUserFormData(initialFormData);

            // navigates to the user's dashboard
            navigate("/dashboard");
        };
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
