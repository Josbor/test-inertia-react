import React, { useState } from "react";
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    TextField,
    Button,
    Box,
} from "@mui/material";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    country: "",
};

const steps = ["Personal Information", "Address Information"];

export default function ClientForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState(initialFormData);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box className="space-y-4">
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                );
            case 1:
                return (
                    <Box className="space-y-4">
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Stepper activeStep={activeStep} className="mb-8">
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form onSubmit={handleSubmit}>
                {renderStepContent(activeStep)}
                <Box className="mt-8 flex justify-between">
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="outlined"
                    >
                        Previous
                    </Button>
                    {activeStep === steps.length - 1 ? (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    )}
                </Box>
            </form>
        </>
    );
}
