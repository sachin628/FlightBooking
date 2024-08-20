import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import { ChakraProvider } from "@chakra-ui/react";

import Register from "./components/Auth/Register";


function App() {
    const routes = useMemo(() => (
        <Routes>
            <Route >
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
            </Route>

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    ), []);

    return (
        <ChakraProvider>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
