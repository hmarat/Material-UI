import React, { useState } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

const App = props => {
    const [exercisesState, setExercisesState] = useState(exercises);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedExercise, setSelectedExercise] = useState({});

    const getExercisesByMuscles = () => {
        return Object.entries(exercisesState.reduce((exercises, exercise) => {
            const muscles = exercise.muscles;
            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];
            return exercises
        }, {}))
    }

    const onSelectCategory = (category) => {
        setSelectedCategory(category)
    }

    const onSelectExercise = id => {
        setSelectedExercise(exercisesState.find(ex => ex.id === id))
    }

    const onCreateExercise = (exercise) => {
        setExercisesState(prev => ([
            ...prev,
            exercise
        ]))
    }

    return (
        <React.Fragment>
            <Header
                muscles={muscles}
                onCreateExercise={onCreateExercise}
            />

            <Exercises
                exercises={getExercisesByMuscles()}
                category={selectedCategory}
                selectedExercise={selectedExercise}
                onSelectExercise={onSelectExercise}
            />

            <Footer
                muscles
                category={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
        </React.Fragment>
    )
}

export default App