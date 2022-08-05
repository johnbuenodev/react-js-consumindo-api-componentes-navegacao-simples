
import React from 'react';

import Main from './pages/Main';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function RoutesApp() {
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />

            <Route path="*" element={<Main/>} />
        </Routes>
       </BrowserRouter>
        
    );
}

export default RoutesApp;