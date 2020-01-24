import React from "react"
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core"

const Exercises = ({
    exercises,
    category,
    onSelectExercise,
    selectedExercise: {
        id,
        title = "Welcome!",
        description = "Select exercise please!"
    } }) => {
    const styles = {
        Paper: {
            marginTop: "10px",
            marginBottom: "10px",
            padding: "20px",
            height: "500px",
            overflowY: "auto"
        }
    }

    return (
        <Grid container sm spacing={2}>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([muscles, exercises]) => {
                        return !category || category === muscles ? (
                            <React.Fragment>
                                <Typography
                                    variant="h6"
                                >
                                    {muscles}
                                </Typography>
                                <List component="ul" aria-label="muscles">
                                    {exercises.map(exercise => {
                                        return (
                                            <ListItem button onClick={() => onSelectExercise(exercise.id)}>
                                                <ListItemText primary={exercise.title} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </React.Fragment>
                        ) : null
                    })}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography
                        variant="h3"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        style={{
                            marginTop: "20px"
                        }}
                    >
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default Exercises