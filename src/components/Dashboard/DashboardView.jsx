/********************************************************************************
*                       UTILITIES                                               *
********************************************************************************/
import { Box, Button, Card, CardContent, Grid2, Typography } from "@mui/material";
import React from "react";


/********************************************************************************
*                       COMPONENTS                                              *
********************************************************************************/
import { DashboardViewModel } from "./DashboardViewModel";


export const DashboardView = () => {
    /********************************************************************************
    *                       VIEWMODEL                                               *
    ********************************************************************************/
    const {
        financialGoals,
        latestIncomeRecords ,
        latestSpendingRecords,
        userName
    } = DashboardViewModel();


    return (
        <Box sx={{
            background: "linear-gradient(135deg, #a8e063, #56ab2f)",
            color: "#fff",
            minHeight: "100vh",
            padding: 5,
            textAlign: "center"
        }}>
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
                variant="h3"
            >
                Welcome to your Dashboard {userName}!
            </Typography>

            {/* displays the user's financial goals if any exist */}
            <Box sx={{ mb: 4, paddingTop: 3 }}>
                <Typography
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)"
                    }}
                    variant="h4"
                >
                    Financial Goals
                </Typography>

                <Grid2 container spacing={2} justifyContent={"space-evenly"} sx={{ border: "4px solid #E0E2E4", padding: 2 }}>
                    {financialGoals.length > 0 ? (
                        financialGoals.map((goal) => (
                            <Grid2 xs={12} sm={4} key={goal.id}>
                                <Card sx={{ p: 2 }}>
                                    <CardContent>
                                        <Typography variant="h6">
                                            {goal.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {goal.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))
                    ) : (
                        <Typography variant="body2">
                            No financial goals set.
                        </Typography>
                    )}
                </Grid2>
            </Box>

            <Grid2 container spacing={4}>
                {/* displays the user's latest spending records if any exist */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Latest Spending
                    </Typography>

                    {latestSpendingRecords.length > 0 ? (
                        latestSpendingRecords.map((record) => (
                            <Card key={record.id} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {record.description}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Amount: ${record.amount}
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary">
                                        Date: {record.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body2">
                            No spending records available.
                        </Typography>
                    )}

                    {/* button to view the full list of spending records */}
                    <Button
                        fullWidth
                        sx={{
                            background: "#ffcc00",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                            color: "#000",
                            fontWeight: "bold",
                            mt: 2,
                            "&:hover": {
                                background: "#ffaa00"
                            }
                        }}
                        variant="contained"
                    >
                        View All Spending
                    </Button>
                </Grid2>

                {/* displays the user's latest income records if any exist */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Latest Income
                    </Typography>

                    {latestIncomeRecords.length > 0 ? (
                        latestIncomeRecords.map((record) => (
                            <Card key={record.id} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {record.description}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Amount: ${record.amount}
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary">
                                        Date: {record.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body2">
                            No income records available.
                        </Typography>
                    )}

                    {/* button to view the full list of income records */}
                    <Button
                        fullWidth
                        sx={{
                            background: "#ffcc00",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                            color: "#000",
                            fontWeight: "bold",
                            mt: 2,
                            "&:hover": {
                                background: "#ffaa00"
                            }
                        }}
                        variant="contained"
                    >
                        View All Income
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};
