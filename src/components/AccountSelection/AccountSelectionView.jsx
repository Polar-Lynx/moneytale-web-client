// utilities
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import React from "react";


const AccountSelectionView = () => {
    return (
        // centers the content horizontally
        <Container maxWidth="sm">
            {/* generic container for grouping other components */}
            <Box sx={{ textAlign: "center", padding: 5 }}>
                {/* presents content clearly */}
                <Typography variant="h1" gutterBottom>
                    MoneyTale
                </Typography>

                <Typography variant="h3" gutterBottom>
                    Enter Account Details or Sign Up
                </Typography>

                {/* form to create a new user */}
                <Box sx={{ textAlign: "center", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        New User
                    </Typography>

                    <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                        Sign Up
                    </Button>
                </Box>

                {/* provides a line to reinforce visual hierarchy */}
                <Divider sx={{ my: 3 }}>
                    OR
                </Divider>

                {/* form to log in an existing user */}
                <Box sx={{ textAlign: "center", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Existing User
                    </Typography>

                    {/* lets users enter and edit text */}
                    <TextField label="Email" fullWidth margin="normal" variant="outlined" />

                    <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />

                    <Button variant="contained" color="primary" endIcon={<SendIcon sx={{ mt: 2 }} />}>
                        Log In
                    </Button>
                </Box>                
            </Box>
        </Container>
    );
};

export default AccountSelectionView;
