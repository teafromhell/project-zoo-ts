import React from 'react'
import Animals from '../types/data';
import SingleAnimal from './SingleAnimal';
import styles from '../styles/ZooList.module.scss'
import { useAppSelector } from '../hook';

const ZooList: React.FC = (): JSX.Element => {
    const zoo = useAppSelector(state => state.zoo.zoo)
    return (
        <>
            {zoo.length !== 0 && <div className={styles.list}>
                {zoo.map((item: Animals): JSX.Element => {
                    return (
                        <SingleAnimal animal={item} key={item.id} />
                    )
                })}</div>}
        </>
    )
}

export default ZooList