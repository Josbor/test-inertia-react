import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from "@mui/material";
import { Edit, Trash2 } from "lucide-react";

const initialClients = [
    {
        name: "John Doe",
        phone: "+1 (555) 123-4567",
        email: "john.doe@example.com",
        country: "United States",
    },
    {
        name: "Jane Smith",
        phone: "+44 20 1234 5678",
        email: "jane.smith@example.com",
        country: "United Kingdom",
    },
    {
        name: "Carlos Rodriguez",
        phone: "+34 91 123 4567",
        email: "carlos.rodriguez@example.com",
        country: "Spain",
    },
    {
        name: "Aisha Khan",
        phone: "+971 50 123 4567",
        email: "aisha.khan@example.com",
        country: "United Arab Emirates",
    },
    {
        name: "Hiroshi Tanaka",
        phone: "+81 3 1234 5678",
        email: "hiroshi.tanaka@example.com",
        country: "Japan",
    },
];

export default function ClientList() {
    return (
        <TableContainer component={Paper} className="shadow-lg">
            <Table>
                <TableHead>
                    <TableRow>
                        {[
                            "Nombre",
                            "Telefono",
                            "Correo",
                            "Pais",
                            "Acciones",
                        ].map((header) => (
                            <TableCell
                                className="!font-bold"
                                align={
                                    header === "Acciones" ? "center" : "justify"
                                }
                                key={header}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {initialClients.map((client) => (
                        <TableRow key={client.email}>
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.country}</TableCell>
                            <TableCell>
                                <div className="flex justify-center gap-2">
                                    <IconButton
                                        color="primary"
                                        onClick={() =>
                                            console.log("Edit", client)
                                        }
                                    >
                                        <Edit size={20} />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() =>
                                            console.log("Delete", client)
                                        }
                                    >
                                        <Trash2 size={20} />
                                    </IconButton>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
