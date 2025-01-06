/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";


export const HomePageView = () => {
    return (
        <Box
            sx={{
                alignItems: "center",
                background: "linear-gradient(135deg, #a8e063, #56ab2f)",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
                padding: 5,
                textAlign: "center"
            }}
        >
            <Container maxWidth="md">
                <Typography
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)"
                    }}
                    variant="h1"
                >
                    MoneyTale
                </Typography>

                <Typography
                    gutterBottom
                    sx={{
                        fontWeight: "medium",
                        mb: 5,
                        textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)"
                    }}
                    variant="h4"
                >
                    Let your money do the talking...
                </Typography>

                <Button
                    component={Link}
                    to="/account-selection"
                    endIcon={<SendIcon />}
                    sx={{
                        background: "linear-gradient(90deg, #ffcc00, #ffaa00)",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        color: "#000",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        padding: "12px 24px",
                        "&:hover": {
                            background: "linear-gradient(90deg, #ffaa00, #ff8800)",
                        }
                    }}
                    variant="contained"
                >
                    Get Started
                </Button>

                <Typography
                    sx={{
                        color: "#FFF40D",
                        fontStyle: "italic",
                        mt: 5,
                        textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)"
                    }}
                    variant="body2"
                >
                    Your journey to financial success begins here.
                </Typography>
            </Container>
        </Box>
    );
};
