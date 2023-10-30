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
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
            {/* </Container> */}
        </div>
    )
}