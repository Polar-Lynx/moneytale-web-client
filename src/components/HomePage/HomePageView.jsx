import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";


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
                    Your Money has a Story to tell...
                </Typography>

                {/* user interaction via a button tap */}
                <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default HomePageView;
