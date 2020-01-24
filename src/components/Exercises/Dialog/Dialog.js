import React, { Fragment, useState } from "react"
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Fab, Button, TextField } from "@material-ui/core"
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: "100%",
        boxSizing: "border-box"
    }
}));

const CreateDialog = ({ muscles: categories, onCreateExercise }) => {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
        muscles: ""
    })

    const classes = useStyles();

    const handleTogle = () => {
        setOpen(prev => !prev);
    }

    const handleChange = (name, value) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleCreateExercise = () => {
        const exercise = {
            ...form,
            id: form.title.toLocaleLowerCase().replace(/ /, "-")
        }

        onCreateExercise(exercise);
        setForm({
            title: "",
            description: "",
            muscles: ""
        })
        setOpen(false);
    }

    return (
        <Fragment>
            <Fab color="secondary" aria-label="add" onClick={handleTogle}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleTogle} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the form below to create a new exercise!
                    </DialogContentText>
                    <form>
                        <TextField
                            id="title"
                            label="Title"
                            value={form.title}
                            onChange={(evt) => handleChange("title", evt.target.value)}
                            className={classes.formControl}
                        />
                        <TextField
                            id="standard"
                            label="Standard"
                            value={form.description}
                            multiline
                            rows={4}
                            onChange={(evt) => handleChange("description", evt.target.value)}
                            className={classes.formControl}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={form.muscles}
                                onChange={(evt) => handleChange("muscles", evt.target.value)}
                                className={classes.formControl}
                            >
                                {categories.map(category => (
                                    <MenuItem value={category}>{category}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCreateExercise} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default CreateDialog