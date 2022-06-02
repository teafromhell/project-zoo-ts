import React from 'react'
import Animals from '../types/data';
import styles from '../styles/SingleAnimal.module.scss'
import { TbPokeball } from 'react-icons/tb'
import { useAppDispatch } from '../hook';
import { feedAnimal, freeAnimal } from '../store/zooSlice'

interface Animal {
    animal: Animals
}

const SingleAnimal: React.FC<Animal> = ({ animal }): JSX.Element => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h5>{animal.name}</h5>
                <TbPokeball />
            </div>
            <p>{animal.trait} : {animal.power}</p>

            <div className={styles.btns}>
                <button className={styles.btn}
                    onClick={() => dispatch(feedAnimal(animal.id))}>
                    Feed
                </button>
                <button className={styles.btn}
                    onClick={() => dispatch(freeAnimal(animal.id))}>
                    Free
                </button>
            </div>
        </div>
    )
}

export default SingleAnimal