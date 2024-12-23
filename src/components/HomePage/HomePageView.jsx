// utilities
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";


const HomePageView = () => {
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
                    Let your money do the talking...
                </Typography>

                {/* user interaction via a button tap */}
                <Button
                    color="primary"
                    component={Link}
                    endIcon={<SendIcon />}
                    to="/account-selection"
                    variant="contained"
                >
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default HomePageView;
