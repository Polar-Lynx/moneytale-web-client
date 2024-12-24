/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { useState } from "react";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { initialFormData, initialInputErrors } from "./AccountCreationModel";


export const AccountCreationViewModel = () => {
    /********************************************************************************
    *                       REACT HOOKS                                             *
    ********************************************************************************/
    // stores form data
    const [newUserFormData, setNewUserFormData] = useState(initialFormData);

    // tracks validation errors
    const [inputErrors, setInputErrors] = useState(initialInputErrors);


    /********************************************************************************
    *                       FUNCTIONS                                               *
    ********************************************************************************/
    /**
     * Handles the input changes in the user creation form.
     * Stores the new value for the input field, and clears any input errors, if
     * applicable.
     *
     * @param {object} event - The event object passed when an input field changes.
     * @returns Nothing.
     */
    const handleInputChange = (event) => {
        // identifies which part of the form is being updated and stores the value entered
        const { name, value } = event.target;

        // uses the current state of newUserFormData
        setNewUserFormData((prev) => ({
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
     * Handles the submission of the user creation form.
     * Stores the new values for the input fields, and validates the entries before
     * submitting the form.
     *
     * @returns Nothing.
     */
    const handleSignUpFormSubmission = () => {
        // stores input field values
        const { name, email, password } = newUserFormData;

        // validates form entries
        const newErrors = {
            name: name.trim() === "",
            email: email.trim() === "",
            password: password.trim() === ""
        };

        // updates error states
        setInputErrors(newErrors);

        // prevents form submission if errors exist
        if (Object.values(newErrors).some((error) => error)) {
            console.log("Error: At least one invalid form entry.");

            return;
        }

        // submits form data
        console.log("Submitted Data:", newUserFormData);

        // resets the form
        setNewUserFormData(initialFormData);
    };


    // returns the viewModel's functionality
    return {
        newUserFormData,
        inputErrors,
        handleInputChange,
        handleSignUpFormSubmission
    }
};
