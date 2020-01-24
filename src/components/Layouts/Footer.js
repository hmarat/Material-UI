import React from "react"
import { Paper, Tabs, Tab } from "@material-ui/core"
import { muscles } from "../../store"

export const Footer = ({ category, onSelectCategory }) => {
    const index = category === "" ? 0 : muscles.findIndex(muscle => muscle === category) + 1;

    const onSelectedIndex = (e, index) => {
        onSelectCategory(index === 0 ? "" : muscles[index - 1]);
    }

    return (
        <Paper>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                onChange={onSelectedIndex}
                centered
            >
                <Tab label="All" />
                {muscles.map(muscle => {
                    return (
                        <Tab label={muscle} />
                    )
                })}
            </Tabs>
        </Paper>
    )
}