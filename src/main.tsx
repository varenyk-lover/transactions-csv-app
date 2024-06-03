import * as React from "react";
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ChakraProvider} from "@chakra-ui/react";


const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>

        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);