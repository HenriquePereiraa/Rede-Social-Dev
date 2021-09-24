import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, ListItem, ListItemText, ListSubheader, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        padding:16,
        width:275,
        marginRight:16,
    },
    button:{
        width:'100%',
    }
})

const tags = [
    {id:1, name:'reactjs'},
    {id:2, name:'javascript'},
    {id:3, name:'php'},
    {id:4, name:'dotnet'},
    {id:5, name:'flutter'},
    {id:6, name:'webdev'},
]

const Navbar = () => {

    const classes = useStyles();

    return ( 
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary">Registrar Gratis</Button>
            <ListSubheader>{'Tags em alta'}</ListSubheader>
            {
                tags.map((tag) => (
                    <ListItem dense button key={`item-${tag.id}-${tag.name}`}>
                        <ListItemText  primary={`#${tag.name}`}/>
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais tags</ListItem>
        </Paper>
     );
}
 
export default Navbar;