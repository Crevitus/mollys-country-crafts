import React from 'react';
import logo from '../static/img/logo.jpg';
import './title.scss';
import '@fontsource/poiret-one';

export const Title: React.FC = () => (
    <div>
        <img src={logo} className="logo" alt="Molly's Country Crafts" />
    </div>
);
