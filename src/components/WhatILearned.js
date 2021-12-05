import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Input from "@mui/material/Input";

import Button from "@mui/material/Button";
const ariaLabel = { "aria-label": "description" };

const WhatILearned = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    width: "100%",
                    bgcolor: "secondary.light",
                    borderRadius: 5,
                }}
            >
                <Grid item xs={8}>
                    {/* <TextField
                        component="div"
                        fullWidth
                        label="Things I Learned"
                        id="fullWidth"
                        floatingLabelText="Things I Learned"
                        sx={{ bgcolor: "secondary.light",borderRadius: 5 }}
                    /> */}

                    <Input inputProps={ariaLabel} />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{
                            m: 2,
                            color: "secondary.light",
                            display: "inline",
                            width: 20,
                            maxWidth: "20%",
                        }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhatILearned;
