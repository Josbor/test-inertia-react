import React from "react";
import StepperForm from "../components/StepperForm";
import Paper from "@mui/material/Paper";
import { Link } from "@inertiajs/react";

const ClientForm = () => {
    return (
        <>
            <div className="mb-4">
                <button>
                    <Link href="/">Go to Home</Link>
                </button>
            </div>
            <div className="p-6 max-w-2xl mx-auto">
                <Paper className="p-6">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        Client Information Form
                    </h1>

                    <StepperForm />
                </Paper>
            </div>
        </>
    );
};

export default ClientForm;
