import { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import './style.css';
import Menu from '../menu/Menu';
import lang from './lang.js';
import bg from './images/image.png';

export default function Header({ curPath, editMode, edit }) {
    useEffect(
        () => {
            
        }, []
    )

    return (
        <>
        <header style={{
            backgroundImage: 'url(' + bg + ')'
        }}>
            <div className='LogoGroup'>
                <img src={Logo} width="140px" alt="" />
            </div>

            <Menu curPath={curPath} />

            <div className={"editMode " + edit} onClick={editMode}><span></span></div>
        </header>
        </>
    )
}
