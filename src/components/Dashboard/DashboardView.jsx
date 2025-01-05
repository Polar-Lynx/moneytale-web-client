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
        <Box sx={{ textAlign: "center", padding: 5 }}>
            <Typography variant="h1" gutterBottom>
                MoneyTale
            </Typography>

            <Typography variant="h3" gutterBottom>
                Welcome to your Dashboard {userName}!
            </Typography>

            {/* displays the user's financial goals if any exist */}
            <Box sx={{ mb: 4, paddingTop: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Financial Goals
                </Typography>

                <Grid2 container spacing={2}>
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
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
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
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        variant="contained"
                    >
                        View All Income
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};
