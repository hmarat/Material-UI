import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import CreateDialog from "../Exercises/Dialog/Dialog"

export const Header = ({ muscles, onCreateExercise }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Exercises List
                </Typography>
                <CreateDialog
                    muscles={muscles}
                    onCreateExercise={onCreateExercise}
                />
            </Toolbar>
        </AppBar >
    )
}