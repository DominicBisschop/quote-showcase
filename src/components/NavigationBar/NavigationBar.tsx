import {FC} from "react";
import Container from "@mui/material/Container";
import {AppBar, Theme, Toolbar} from "@mui/material";
import * as React from "react";
import {createStyles, makeStyles} from "@mui/styles";
import logo from '../../images/kabisa-logo-light.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navigationLogo: {
            maxWidth: "10vw",
            [theme.breakpoints.down('md')]: {
                maxWidth: "20vw"
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: "25vw"
            },
        }
    })
);

export const NavigationBar: FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <img
                        className={classes.navigationLogo}
                        // src="/images/kabisa-logo-light.svg"
                        src={logo}
                        alt="Kabisa logo"
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}