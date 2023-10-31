import styles from '../styles/contactScreen.module.css'
import { useState } from 'react'

import Head from 'next/head'

import Header from '../components/header'
export default function ContactScreen() {


    const images = ['https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698656592/bh5i4bccc2essmlbgfiz.png', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655787/mnxpngkwrnikccq5gn39.png', 'https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655790/n8mfzkpqortmprdxkdmm.jpg']
    const stylesArray = [styles.Top, styles.MiddleTop, styles.MiddleBottom, styles.Bottom]
    const sectionStylesArray = [styles.section0, styles.section1, styles.section2, styles.section3]
    const imageStylesArray = [styles.image0, styles.image1, styles.image2]
    const [picStylesArray, setPicStylesArray] = useState([{ left: '0' }, { left: '100vw' }, { left: '200vw' }])
    const sections = []


    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Effectuez ici votre logique d'envoi du formulaire, par exemple une requête HTTP.
        // Réinitialisez ensuite les états des champs.
        setName('');
        setFirstName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    for (let i = 0; i < 4; i++) {

        const sectionpics = images.map((image, j) => {
            return <img id={imageStylesArray[j]} src={image} style={picStylesArray[j]} className={`${styles.image} ${stylesArray[i]}`} />
        })

        sections.push(
            <div className={styles.section} id={sectionStylesArray[i]} >
                {sectionpics}
            </div>
        )
    }



    return (

        <div id={styles.container}>
            <Head>
                <title>Contact</title>
            </Head>
            <Header header={1} show={true}/>
            <div className={styles.slides}>
            <div className={styles.glassmorph}>
                <div className='row'>
                    <div className={styles.formGroup} style={{ width: '45%' }}>
                        <input
                            type="input"
                            className={styles.formField}
                            placeholder="Name"
                            required=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label for="name" className={styles.formLabel}>
                            Nom
                        </label>
                    </div>
                    <div className={styles.formGroup} style={{ width: '45%' }}>
                        <input
                            type="input"
                            className={styles.formField}
                            placeholder="Name"
                            required=""
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label for="name" className={styles.formLabel}>
                            Prénom
                        </label>
                    </div>
                </div>
                    <div className='row'>
                        <div className={styles.formGroup} style={{width :'45%'}}>
                        <input
                            type="email"
                            className={styles.formField}
                            placeholder="Mail"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="name" className={styles.formLabel}>
                            Mail
                        </label>
                    </div>
                    <div className={styles.formGroup} style={{ width: '45%' }}>
                        <input
                            type="input"
                            className={styles.formField}
                            placeholder="0688188520"
                            required=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label for="name" className={styles.formLabel}>
                            Téléphone
                      </label>
                    </div>
                    </div>
                    <div className={styles.formGroup} id={styles.messageInput}>
                    <textarea
                        type="text"
                        className={styles.formField}
                        id={styles.messageInputField}
                        required=""
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <label for="name" className={styles.formLabel}>
                        Message
                    </label>
                </div>
                </div>

                    <div className={styles.button} onClick={() => handleSend()}>Envoyer</div>
                
                {sections}
            </div>
        </div>
    )
}