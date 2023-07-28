import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DataProveder } from './contex/DataContex';
import './styles/styles.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProveder>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DataProveder>
);


