import React,{useEffect,useState} from 'react'
import netflix from './css/netflix-logo1.png';
import './css/Nav.css'


function Nav() {
    const [show,handleShow] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false)
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" 
            src={netflix}
            alt="NETFLIX LOGO" />
        </div>
    )
}

export default Nav
