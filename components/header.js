import styles from '../styles/header.module.css'
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
import menu2 from "react-useanimations/lib/menu2"

import { useState } from 'react';
export default function Header(props) {
    const [show, setShow] = useState(false)
    console.log("🚀 ~ file: header.js:8 ~ Header ~ props:", props)
    return (
        <div>
            <div id={styles.container} header={props.header}>
                <div id={styles.logoDiv}>
                    {/* <img src='./logo.png' id={styles.logo}/> */}
                    <a href='/' style={{ textDecoration: "none", color: 'black' }}><p id={styles.title}>Clément Thirard</p></a>
                </div>
                <div id={styles.buttonsDiv}>
                    <div className={styles.buttonDiv}> <a href="/" style={{ textDecoration: "none", color: 'black' }}><span className={styles.button}>Accueil</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/portfolio" style={{ textDecoration: "none", color: 'black' }}><span className={styles.button}>Portfolio</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/contact" style={{ textDecoration: "none", color: 'black' }}><span className={styles.button}>Contact</span></a><span className={styles.buttonSpan}></span></div>
                    <div className={styles.buttonDiv}>  <a href="/propos" style={{ textDecoration: "none", color: 'black' }}><span className={styles.button}>A Propos</span></a><span className={styles.buttonSpan}></span></div>
                </div>
                <div id={styles.iconDiv}>
                    <UseAnimations animation={instagram} size={35} className={styles.icon} />
                    {/* <UseAnimations animation={facebook} size={35} className={styles.icon} /> */}
                    <UseAnimations animation={linkedin} size={35} className={styles.icon} />
                    <UseAnimations animation={menu2} size={35} className={styles.icon} id={styles.menu} onClick={() => setShow(!show)} />
                </div>
            </div>
           { show && <div id={styles.menuDiv}>
                <a href="/portfolio" style={{ textDecoration: "none", color: 'black' }}><p className={styles.menuOption}>Portfolio</p></a>
                <a href="/contact" style={{ textDecoration: "none", color: 'black' }}><p className={styles.menuOption}>Contact</p></a>
                <a href="/propos" style={{ textDecoration: "none", color: 'black' }}><p className={styles.menuOption}>A propos</p></a>
            </div>}
        </div>
    )
}
