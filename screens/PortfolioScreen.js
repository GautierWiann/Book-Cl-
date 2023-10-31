import styles from '../styles/portfolioScreen.module.css'
import { useState } from 'react'

import Head from 'next/head'

import Header from '../components/header'
import ModalPic from '../components/modalPic'

export default function PortfolioScreen() {

    const images = [
        { project: "Avenue Verdier", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656592/bh5i4bccc2essmlbgfiz.png' }, { project: "Avenue Verdier", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655787/mnxpngkwrnikccq5gn39.png' },
        { project: "Avenue Verdier", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655790/n8mfzkpqortmprdxkdmm.jpg' }, { project: "Avenue Verdier", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656593/msalxt9o9g20z7kyncxp.png' },
        { project: "Avenue Verdier", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655794/ivjolvgok1owt6ffwbwz.jpg' }, { project: "Rue du Temple", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655786/fejjwmdrvxoe7h2g01wc.png' }, { project: "Rue du Temple", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655778/zxvlmy8tdbxzukyvriup.png' },
        { project: "Rue du Temple", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655790/evqqynkrrwy38vppy1nb.png' }, { project: "Rue du Temple", url: 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655788/yhabnpf0drdaufnqktad.jpg' }]

    const [image, setImage] = useState("")
    const [index, setIndex] = useState(0)
    const [modalOpen, setModalOpen] = useState(false);
    const [filter, setFilter] = useState(false);
    console.log("🚀 ~ file: PortfolioScreen.js:21 ~ PortfolioScreen ~ filter:", filter)
    const [choice, setChoice] = useState("")

    const [imagesChoice, setimagesChoice] = useState([])
    const [imagesFiltered, setImagesFiltered] = useState([])
    console.log("🚀 ~ file: PortfolioScreen.js:23 ~ PortfolioScreen ~ imagesFiltered:", imagesFiltered)

    const closeModal = () => {
        setImage("")
        setModalOpen(false);
    };

    const openModal = (i) => {
        setImage(images[i].url)
        setIndex(i)
        setModalOpen(true);
    };

    const forward = () => {
        if (index < images.length - 1) {
            setImage(images[index + 1])
            setIndex(index + 1)
        }
    }

    const back = () => {
        if (index > 0) {
            setImage(images[index - 1])
            setIndex(index - 1)
        }
    }

    useState(() => {
        const uniqueProjects = [...new Set(images.map((item) => item.project))];
        const result = [];

        uniqueProjects.forEach((projectName) => {
            const projectItems = images.filter((item) => item.project === projectName);
            result.push(projectItems);
            setImagesFiltered(result)
        });
    }, [])

    const ProjectChoices = imagesFiltered.map(project => {
        const images = project.map(img => {
            return <img src={img.url} className={styles.imageChoice} />
        })
        return (
            <div className={styles.choice} onClick={() => setimagesChoice(project)}>
                <p className={styles.choiceTitle}>{project[0].project}</p>
                {images}
            </div>
        )
    })

    const imagesFilteredDisplay = imagesChoice.map((image, i) => {
        let style

        if (i % 2 === 0) {
            style = {
                gridRow: "span 2"
            }
        }
        if (i % 4 === 0) {
            style = {
                gridColumn: "span 2"
            }
        }


        if (typeof window !== "undefined") {
            if (window.innerWidth <= 768) {
                style = {}
            }
        }
        return (
            <img src={image.url} className={styles.image} style={style} onClick={() => openModal(i)} />
        )
    })

    const imagesAllDisplay = images.map((image, i) => {
        let style

        if (i % 4 === 0) {
            style = {
                gridRow: "span 2"
            }
        }

        if (i % 8 === 0) {
            style = {
                gridColumn: "span 2"
            }
        }
        if (typeof window !== "undefined") {
            if (window.innerWidth <= 768) {
                style = {}
            }
        }
        return (
            <img src={image.url} className={styles.image} style={style} onClick={() => openModal(i)} />
        )
    })
    return (

        <div id={styles.container}>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Header header={1} show={true} />
            <div class="checkbox-wrapper-8" >
                <input type="checkbox" id="cb3-8" class="tgl tgl-skewed" onClick={() => {
                    setFilter(!filter)
                    setimagesChoice([])
                }} />
                <label for="cb3-8" data-tg-on="Par projet" data-tg-off="Toutes" class="tgl-btn"></label>
            </div>
            {modalOpen && (
                <ModalPic imageSrc={image} closeModal={closeModal} forward={forward} back={back} />
            )}
            {(imagesFilteredDisplay.length == 0 && filter) && <div className={styles.ChoicesDiv}>
                {ProjectChoices}
            </div>}
            {filter && <div id={styles.grid}>
                {imagesFilteredDisplay}
            </div>}
            {!filter && <div id={styles.grid}>
                {imagesAllDisplay}
            </div>}
        </div>
    )
}