import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Animals from '../types/data';
import animalArray from '../animals.json'

type ZooState = {
    zoo: Animals[]
}

const initialState: ZooState = {
    zoo: [],
}

const zooSlice = createSlice({
    name: 'zoo',
    initialState,
    reducers: {
        catchAnimal(state) {
            let randomizedPower: number = Math.floor(Math.random() * 5) + 1;
            let whichAnimal: number = Math.floor(Math.random() * animalArray.length);
            state.zoo.push({
                name: animalArray[whichAnimal].name,
                trait: animalArray[whichAnimal].trait,
                power: randomizedPower,
                id: nanoid(),
            })
        },
        feedAnimal(state, action: PayloadAction<string>) {
            const animal = state.zoo
                .find(item => item.id === action.payload)
            if (animal) { animal.power = animal.power + 1 }

        },
        freeAnimal(state, action: PayloadAction<string>) {
            state.zoo = state.zoo.filter(animal => animal.id !== action.payload)
        }
    }
})

export const { catchAnimal, feedAnimal, freeAnimal } = zooSlice.actions;
export default zooSlice.reducer;