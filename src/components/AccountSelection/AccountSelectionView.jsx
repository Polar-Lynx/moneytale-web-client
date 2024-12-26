/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Divider, Modal, TextField, Typography } from "@mui/material";
import React from "react";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { AccountSelectionViewModel } from "./AccountSelectionViewModel";
import { AccountCreationView } from "../AccountCreation/AccountCreationView";


export const AccountSelectionView = () => {
    /********************************************************************************
    *                       VIEWMODEL                                               *
    ********************************************************************************/
    const {
        // form data
        existingUserFormData,
        // validation errors
        inputErrors,
        // modal's display state
        signUpModalDisplayed,
        // handles the input changes in the user verification form
        handleInputChange,
        // handles the submission of the user verification form
        handleLogInFormSubmission,
        // toggles the display state of a modal
        setSignUpModalDisplayed
    } = AccountSelectionViewModel();


    return (
        // centers the content horizontally
        <Container maxWidth="sm">
            {/* generic container for grouping other components */}
            <Box sx={{ textAlign: "center", padding: 5 }}>
                {/* presents content clearly */}
                <Typography variant="h1" gutterBottom>
                    MoneyTale
                </Typography>

                <Typography variant="h4" gutterBottom>
                    Enter Account Info or Sign Up
                </Typography>

                {/* form to log in an existing user */}
                <Box sx={{ textAlign: "center", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Existing User
                    </Typography>

                    {/* lets users enter and edit text */}
                    <TextField
                        error={inputErrors.email}
                        fullWidth
                        helperText={inputErrors.email && "Email is required"}
                        label="Email"
                        margin="normal"
                        name="email"
                        onChange={handleInputChange}
                        required
                        value={existingUserFormData.email}
                        variant="outlined"
                    />

                    <TextField
                        error={inputErrors.password}
                        fullWidth
                        helperText={inputErrors.password && "Password is required"}
                        label="Password"
                        margin="normal"
                        name="password"
                        onChange={handleInputChange}
                        required
                        type="password"
                        value={existingUserFormData.password}
                        variant="outlined"
                    />

                    <Button
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={handleLogInFormSubmission}
                        variant="contained"
                    >
                        Log In
                    </Button>
                </Box>

                {/* provides a line to reinforce visual hierarchy */}
                <Divider sx={{ my: 3 }}>
                    OR
                </Divider>

                {/* button to open form to create a new user */}
                <Box sx={{ textAlign: "center", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        New User
                    </Typography>

                    <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={() => setSignUpModalDisplayed(true)}>
                        Sign Up
                    </Button>
                </Box>

                {/* modal to handle user creation */}
                <Modal
                    open={signUpModalDisplayed}
                    onClose={() => setSignUpModalDisplayed(false)}
                    aria-labelledby="sign-up-modal-title"
                    aria-describedby="sign-up-modal-description"
                >
                    <AccountCreationView/>
                </Modal>
            </Box>
        </Container>
    );
};
