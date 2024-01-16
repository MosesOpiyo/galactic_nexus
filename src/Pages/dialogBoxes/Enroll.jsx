import {React,useState} from "react"
import '../../index.css'
import Home from "../home"

const Enroll = () => {
    const [isHovered, setHovered] = useState(false)
    const dialogOverlay = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', /* semi-transparent black overlay */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const dialogBox = {
        backgroundImage:"url(/assets/img/EVENews.jpeg)",
        width:'50%',
        height:'80%',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    }
    const fontStyle = {
        color:'white',
        fontWeight:'bold',
        fontFamily:'Audiowide, sans-serif',
        textTransform: 'uppercase',
        fontSize:'50px'
    }
    const paragraphStyle = {
        color:'white',
        fontWeight:'400',
        fontFamily:'Roboto Condensed, sans-serif',
        textTransform: 'uppercase',
        fontSize:'20px'
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
    return (
        <div style={dialogOverlay} className="dialog-overlay" name='enroll'>
            <div style={dialogBox} className="dialog-box">
            <div style={{paddingTop:'35%',alignSelf:'center'}} className="heading">
                <h2 style={fontStyle}>Enrollment</h2>
            </div>
            <div className="details">
                <p style={paragraphStyle}>We deeply appreciate your thirst of adventure Sadly, All capsules are fully booked. You will be notified of the next set.</p>
            </div>
            </div>
        </div>
    )
}
export default Enroll