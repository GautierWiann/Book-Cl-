import Head from "next/head";
import Link from "next/link";
import styles from '../styles/homeScreen.module.css'

import CardHomeChoice from "../components/cardHomeChoice";
import Header from "../components/header";

import { useState, useRef, useEffect } from "react";
export default function HomeScreen() {
    const ref = useRef(null);
    const refDown = useRef(null)
    const refUp = useRef(null)

    const refCard1 = useRef(null)
    const refCard2 = useRef(null)
    const refCard3 = useRef(null)
    const refs = [refCard1, refCard2, refCard3]

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [show, setShow] = useState(true);
    const [header, setHeader] = useState(0);


    let style
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-40%" }
        );
        if (window.innerWidth < 1024) {
            setShow(false);
            setHeader(1)
            for (const reference of refs) {
                reference.current.classList.add("slide");
            }
        }
        observer.observe(ref.current);
        return () => observer.disconnect();

    }, []);


    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 1024) {
                if (isIntersecting) {
                    for (const reference of refs) {
                        setHeader(1)
                        reference.current.classList.add("slide");

                        const lastChildElement = refDown.current?.lastElementChild;
                        lastChildElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                } else {
                    for (const reference of refs) {

                        const lastChildElement = refUp.current?.firstElementChild;
                        lastChildElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        reference.current.classList.remove("slide");
                        setHeader(0)
                    }
                }
            }
        }
    }, [isIntersecting]);




    const checkAspectRatio = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const aspectRatio = windowWidth / windowHeight;

        if (aspectRatio >= 1.85 && aspectRatio <= 2.15) {
            setShow(true);
        } else {
            for (const reference of refs) {
                reference.current.classList.add("slide");
            }
            setShow(false);
            setHeader(1)
        }
    };


    if (typeof window !== "undefined") {
        window.addEventListener('resize', checkAspectRatio);
    }

    return (
        <div id={styles.page} ref={refUp}>
            <Head>
                <title>Clément Thirard</title>
            </Head>{" "}

            <div id={styles.wrapper} ref={refUp}>
                {show && <div id={styles.parallax}>
                    <img src="https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656880/hvtmyhmrvrexklhyh2vm.png" id={styles.fond} className={styles.image} />

                    <img src="https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655776/mn7r6d2c3hbnmycgvflz.png" id={styles.violon} className={styles.image} />

                    <img src="https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655793/awx3na02wag43li8sevx.png" id={styles.table} className={styles.image} />

                    <p id={styles.title}>Clément Thirard <br />Photographe d'interieur</p>

                </div>}
                {!show && <div id={styles.parallax}>
                    <img src="https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656592/bh5i4bccc2essmlbgfiz.png" id={styles.fond} className={styles.image} />
                    <p id={styles.title}>Clément Thirard <br />Photographe d'interieur</p>

                </div>}
            </div>
            <div
                id={styles.secondScreen}
                ref={refDown}
            >
                <Header header={header} />

                <div id={styles.parallax2} ref={ref}>
                    <div ref={refCard1} id={styles.first}><a href="/contact" style={{textDecoration : "none", color :'black'}}><CardHomeChoice title="contact" url={"./contact.PNG"} desc="La première étape pour mener à bien votre projet photo" /></a></div>
                    <div ref={refCard2} id={styles.second}><a href="/portfolio" style={{textDecoration : "none", color :'black'}}><CardHomeChoice title="portfolio" url={"https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655794/ivjolvgok1owt6ffwbwz.jpg"} desc={"Cliquez ici pour découvrir mes derniers projets photo"} /></a></div>
                    <div ref={refCard3} id={styles.third}> <a href="/propos" style={{textDecoration : "none", color :'black'}}> <CardHomeChoice title="a propos" url={"https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655789/bft3gkpufkdlx3qzx0ya.jpg"} /></a></div>
                </div>

            </div>
        </div>
    );
}
