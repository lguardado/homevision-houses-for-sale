import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

import styles from './House.module.css'

const House = ({ item }) => {

    const formatPrice = (x) => {
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={styles.HouseCard}>
            <FontAwesomeIcon icon={faMapMarker} size={'lg'} />
            <h3>{item.address}</h3>
            <br />
            <div className={styles.ContactInfo}>
                <FontAwesomeIcon icon={faPhone} size={'lg'} />
                <div className={styles.HouseOwner}>Contact {item.homeowner}</div>
            </div>
            <img className={styles.HouseImage} src={item.photoURL} alt='' />
            <p style={{fontWeight: '600'}} >Price: ${formatPrice(+item.price)}</p>
        </div>);
}

export default House