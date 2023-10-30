import styles from '../styles/portfolioScreen.module.css'
import { useState } from 'react'

import Head from 'next/head'

import Header from '../components/header'
import ModalPic from '../components/modalPic'

export default function PortfolioScreen() {

    const images = ['https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656592/bh5i4bccc2essmlbgfiz.png', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655787/mnxpngkwrnikccq5gn39.png',
    'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655790/n8mfzkpqortmprdxkdmm.jpg', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656593/msalxt9o9g20z7kyncxp.png', 
    'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655794/ivjolvgok1owt6ffwbwz.jpg', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655786/fejjwmdrvxoe7h2g01wc.png', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655778/zxvlmy8tdbxzukyvriup.png',
    'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655790/evqqynkrrwy38vppy1nb.png', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655788/yhabnpf0drdaufnqktad.jpg']

    const [image, setImage] = useState("")
    const [index, setIndex] = useState(0)
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setImage("")
        setModalOpen(false);
    };

    const openModal = (i) => {
        setImage(images[i])
        setIndex(i)
        setModalOpen(true);
    };

    const forward = () => {
        if(index < images.length - 1) {
        setImage(images[index+1])
        setIndex(index+1)
    }}

    const back = () => {
        if (index > 0){
        setImage(images[index-1])
        setIndex(index-1)
    }
    }
    const imagesDisplay = images.map((image, i) => {
        let style
        
        if  (i % 4 === 0) {
            style = {
                gridRow : "span 2"
            }
        }
        if  (i % 8 === 0) {
            style = {
                gridColumn : "span 2"
            }
        }
        if (typeof window !== "undefined"){
            console.log("🚀 ~ file: PortfolioScreen.js:29 ~ imagesDisplay ~ window.innerWidth:", window.innerWidth)
            if (window.innerWidth <= 768){
                style={}
            }}
        return (
            <img src={image} className={styles.image} style={style} onClick={() => openModal(i)} />
       )
    })
    return (

        <div id={styles.container}>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Header header={1} />
            {modalOpen && (
                <ModalPic imageSrc={image} closeModal={closeModal} forward={forward} back={back} />
            )}
            <div id={styles.grid}>
                {imagesDisplay}
            </div>
        </div>
    )
}