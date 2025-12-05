require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './components/routers';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Routers />);