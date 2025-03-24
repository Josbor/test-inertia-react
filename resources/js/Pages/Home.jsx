import ClientList from "../components/ClientList";
import { Box, Button } from "@mui/material";
import { Link } from "@inertiajs/react";
export default function Home() {
    return (
        <div className="container mx-auto p-6">
            <Box>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Client List</h1>
                        <Button variant="contained" color="primary">
                            <Link href="/"> New Client</Link>
                        </Button>
                    </div>
                    <ClientList />
                </div>
            </Box>
        </div>
    );
}
