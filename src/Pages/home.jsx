import {React, useState } from "react"
import NavBar from "../Components/Navbar"
import Enroll from "./dialogBoxes/Enroll";


const Home = () => {
    const [isHovered, setHovered] = useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };
    const fontStyle = {
        color:'white',
        fontWeight:'bold',
        fontFamily:'Audiowide, sans-serif',
        textTransform: 'uppercase',
        fontSize:'50px'
    }
    const h3Style = {
        color:'white',
        fontWeight:'400',
        fontFamily:'Roboto Condensed, sans-serif',
        textTransform: 'uppercase',
        fontSize:'20px'
    }
    const infoStyle = {
        color:'white',
        fontWeight:'500',
        fontFamily:'Audiowide, sans-serif',
        textTransform: 'uppercase',
        fontSize:'50px',
        padding:'20px',

    }
    
    const buttonStyle = {
        color:!isHovered ? 'white':'black',
        textTransform: 'uppercase',
        fontWeight:'bold',
        width: '20%',
        height:'50px',
        backgroundColor: !isHovered ? 'transparent':'rgba(0, 255, 255)',
        borderRadius:'0',
        border:'2px solid rgba(0, 255, 255)',
    }

    const button2Style = {
        marginLeft:'20px',
        color:'black',
        textTransform: 'uppercase',
        fontWeight:'bold',
        width: '25%',
        height:'50px',
        backgroundColor:'white',
        borderRadius:'0',
        border:'2px solid white',
    }
    
    return (
        <>
        <div className="w-full  home" name='home'>
        
        <div className="banner-info h-screen" style={{ padding: '30px' }}>
            <div className="info" style={{paddingTop:'8pc'}}>
            <h1 style={fontStyle}>The #1 space <br /> exploration program</h1>
            <h4 style={h3Style}>20 YEARS OF GALACTIC ADVENTURES</h4>
            <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="btn" style={buttonStyle}>Enroll</button>
            <button style={button2Style}>Subscribe</button>
            </div>
        </div>
        <div className="banner-info-2" style={{ padding: '30px',paddingTop:'5pc',marginTop:'50px',backgroundColor:'black' }}>
            <div className="banner-image" style={{paddingTop:'10pc'}}>
            <h1 style={fontStyle}>BRACE FOR IMPACT</h1>
            <h5 style={{color:'white',paddingTop:'15px',fontFamily:'Roboto Condensed'}}>GALACTIC NEXUS Vanguard is an innovative new FPS module, <br /> connected to the GALACTIC NEXUS universe from Day One, and evolved in <br /> partnership with our players. Persistent, highly customizable and deeply <br /> social, Vanguard introduces an intense new <br /> experience to GALACTIC NEXUS.</h5>
            <button onClick={openDialog} style={{marginTop:'12px',color:'black',textTransform: 'uppercase',fontWeight:'bold',width: '25%',height:'50px',backgroundColor:'white',borderRadius:'0',border:'2px solid white'}}>Learn More</button>
            {isDialogOpen && (<Enroll/>)}
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Home