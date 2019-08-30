import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function ButNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');


    function handleChange(event, newValue) {
        setValue(newValue);
    }


    return (
        <BottomNavigation style={{bottom:"0px", height:"75px", position:"fixed", backgroundColor :"#d1c4e9", width:"100%", right:"0"}} value={value} onChange={handleChange} className={classes.root}>

            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/jahannavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/keshvarnavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/ostanhanavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/namayandeginavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/modiranedakhelinavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/omorhoghoghinavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/omormalinavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} ><img src="./../../assets/img/moavenatnavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginLeft:"4%"}} component={Link} to="/modiriyat" ><img src="./../../assets/img/modiriyatnavar.png" style={{height:"60px"}}/></IconButton>
            <IconButton style={{marginTop:"6px"}} component={Link} to="/dashboard"><img src="./../../assets/img/dashboardnavar.png" style={{height:"60px"}}/></IconButton>

        </BottomNavigation>
    );
}









