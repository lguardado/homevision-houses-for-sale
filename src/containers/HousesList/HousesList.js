import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


import House from '../../components/House/House'
import styles from './HousesList.module.css'
import Button from '../../shared/UI/Button/Button'

const HousesList = () => {
    const baseUrl = 'https://app-homevision-staging.herokuapp.com/api_project/houses'
    const limit = 10

    const [page, setPage] = useState(1)
    const [housesList, setHousesList] = useState([])
    const [isFetchingHouses, setIsFetchingHouses] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchHouses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchHouses = async () => {
        setError(null)
        setIsFetchingHouses(true)
        try {
            const response = await fetch(baseUrl + `?page=${page}&per_page=${limit}`)
            const data = await response.json()
            if (data.houses) {
                setHousesList(housesList.concat(data.houses))
                setPage(page + 1)
                return
            }
            if (!data.houses) {
                throw (response)
            }
        }
        catch (err) {
            setError(err)
        }
        finally {
            setIsFetchingHouses(false)
        }
    }

    let renderError = null
    if (!!error) {
        renderError = <React.Fragment>
            <div className={styles.Error}>
                <div><strong>Woops! an error ocurred</strong></div>
                <div className={styles.ErrorCode}> Code: {error.status}: {error.statusText}</div>
                <Button onClick={() => fetchHouses()}>Try again</Button>
            </div>
        </React.Fragment>
    }

    let renderHouses = housesList.length > 0 ?
        (housesList.map(house => {
            return <House key={house.id} item={house} />
        })) : !error && < div className={styles.Loader} > Loading...</div>
    const handleGoToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })


    return (<React.Fragment>
        <InfiniteScroll
            dataLength={housesList.length}
            next={fetchHouses}
            hasMore={true}
            loader={isFetchingHouses && <h4 className={styles.Loader}>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>No more houses!</b>
                </p>
            }
        >
            <h1 style={{ textAlign: 'center' }}>Houses available for sale!</h1>
            {renderHouses}

        </InfiniteScroll>
        {renderError}
        <div className={styles.GoTopButton}>
            <Button onClick={handleGoToTop}>
                <FontAwesomeIcon icon={faArrowUp} size={'lg'} />
            </Button>
        </div>
    </React.Fragment>)
}

export default HousesList