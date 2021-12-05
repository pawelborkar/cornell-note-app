import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DateTime = () => {
    const [value, setValue] = useState("");

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DateTimePicker
                    label="Created at"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField sx={{ m:2,width: 200 }} {...params} />
                    )}
                />
                <IconButton aria-label="delete" sx={{ m: 5, width: 10 }}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </LocalizationProvider>
    );
};
export default DateTime;
