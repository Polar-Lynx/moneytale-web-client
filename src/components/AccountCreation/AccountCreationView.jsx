/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { AccountCreationViewModel } from "./AccountCreationViewModel";


export const AccountCreationView = () => {
    /********************************************************************************
    *                       VIEWMODEL                                               *
    ********************************************************************************/
    const {
        // form data
        newUserFormData,
        // validation errors
        inputErrors,
        // handles the input changes in the user creation form
        handleInputChange,
        // handles the submission of the user creation form
        handleSignUpFormSubmission
    } = AccountCreationViewModel();


    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                border: "2px solid #000",
                borderRadius: 2,
                boxShadow: 24,
                position: "absolute",
                left: "50%",
                p: 4,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 400
            }}
        >
            <Typography id="sign-up-modal-title" variant="h5" gutterBottom>
                Create an Account
            </Typography>

            <Typography id="sign-up-modal-description" sx={{ mb: 2 }}>
                Fill out the form below to create a new account.
            </Typography>

            {/* input field for user's name */}
            <TextField 
                error={inputErrors.name}
                helperText={inputErrors.name && "Name is required"}
                fullWidth
                label="Name"
                margin="normal"
                name="name"
                onChange={handleInputChange}
                required
                value={newUserFormData.name}
                variant="outlined"
            />

            {/* input field for user's email */}
            <TextField 
                error={inputErrors.email}
                helperText={inputErrors.email && "Email is required"}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                onChange={handleInputChange}
                required
                value={newUserFormData.email}
                variant="outlined"
            />

            {/* input field for user's password */}
            <TextField 
                error={inputErrors.password}
                helperText={inputErrors.password && "Password is required"}
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onChange={handleInputChange}
                required
                type="password"
                value={newUserFormData.password}
                variant="outlined"
            />

            {/* form submission button */}
            <Button 
                color="primary"
                fullWidth
                onClick={handleSignUpFormSubmission}
                sx={{ mt: 2 }}
                variant="contained"
            >
                Submit
            </Button>
        </Box>
    );
};
