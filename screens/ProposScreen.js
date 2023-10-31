import styles from '../styles/propos.module.css'
import { useState } from 'react'

import { Col, Row, Container } from "reactstrap";
import Head from 'next/head'

import Header from '../components/header'

export default function ProposScreen() {


    return (

        <div id={styles.container}>
            <Head>
                <title>A Propos</title>
            </Head>
            <Header header={1} show={true}/>
            {/* <Container fluid > */}
            <Row className={styles.row} style={{ width: "100vw", marginTop: "8vh" }}>
                <Col md={{ size: 3, offset: 2 }} xs={{ size: 10 }} xl={{ size: 4, offset: 1 }}>
                    <div id={styles.backgroundImage}>
                        <img src='https://res.cloudinary.com/dpxxyz9ra/image/upload/v1698655789/bft3gkpufkdlx3qzx0ya.jpg' className={styles.image} />
                    </div>
                </Col>
                <Col md={{ size: 3, offset: 3 }} xs={{ size: 10, offset:1 }} xl={{ size: 4, offset: 2 }}>
                <p> Photographe spécialisé dans le domaine de l'architecture d'intérieur</p>

<p>Mon objectif: raconter le plus fidèlement possible l'histoire que vous avez écrite avec votre projet. J'ai une très grande sensibilité sur les textures, les ambiances lumineuses et les perspectives que les architectes et décorateur.ices créent.</p>


<p>Un seul léimotiv: la lumière naturelle</p></Col>
            </Row>
            {/* </Container> */}
        </div>
    )
}