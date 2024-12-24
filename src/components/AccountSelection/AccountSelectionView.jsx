/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Divider, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { AccountCreationView } from '../AccountCreation/AccountCreationView';


export const AccountSelectionView = () => {
    /********************************************************************************
    *                       REACT HOOKS                                             *
    ********************************************************************************/
    const [signUpModalDisplayed, setSignUpModalDisplayed] = useState(false);


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
                    <TextField label="Email" fullWidth margin="normal" variant="outlined" />

                    <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />

                    <Button variant="contained" color="primary" endIcon={<SendIcon />}>
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
