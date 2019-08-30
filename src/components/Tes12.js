import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },


}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(fName, lName, birthDate, email) {
  return { fName, lName, birthDate, email };
}

const rows = [
   createData("هادی", "رادمان", "۱۳۷۵/۱۰/۲۰", "hadi.anonymous@yahoo.com"),
   createData("هادی", "رادمان", "۱۳۷۵/۱۰/۲۰", "hadi.anonymous@yahoo.com"),
  // createData(),
  // createData(),
  // createData(),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(10),
    marginRight: "10%",
    overflowX: 'auto',
  },
  table: {
    height: "40%",
    minWidth: 400,
  },

}));

export default function Tes12() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow>

            <StyledTableCell align="center" style={{ width: "10px"}}><span style={{ marginRight: "-23px", fontSize: "16px" }}>ویرایش</span></StyledTableCell>
            <StyledTableCell align="right" style={{ width: "10px"}}><span style={{ marginRight: "-29px", fontSize: "17px" }}>حذف</span></StyledTableCell>
            <StyledTableCell style={{ width: "1px", marginRight: "-36px" }} align="right"><span style={{ marginRight: "8px" }}>نام</span></StyledTableCell>
            <StyledTableCell style={{ width: "110px" }} align="right"><span>نام خانوادگی</span></StyledTableCell>
            <StyledTableCell style={{ width: "100px", marginRight: "-36px" }} align="right"><span style={{ marginRight: "13px" }}>تاریخ تولد</span></StyledTableCell>
            <StyledTableCell style={{ width: "1px" }} align="right"><span style={{ marginRight: "86px" }}>ایمیل</span></StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (

            <StyledTableRow key={row.name}>  

              <StyledTableCell align="center"><IconButton style={{  width: "41px", marginRight: "-24px" }}><Edit style={{ fontSize: "22px" }}/></IconButton></StyledTableCell>
              <StyledTableCell align="right" style={{ borderLeft: "1px solid black" }}><IconButton style={{  width: "0px", marginRight: "-26px" }}><Delete style={{ fontSize: "22px" }}/></IconButton></StyledTableCell>
              <StyledTableCell align="right"><span>{row.fName}</span></StyledTableCell>
              <StyledTableCell align="right"><span style={{ marginRight: "10px" }}>{row.lName}</span></StyledTableCell>
              <StyledTableCell align="right"><span>{row.birthDate}</span></StyledTableCell>
              <StyledTableCell align="right"><span>{row.email}</span></StyledTableCell>

              {/* <StyledTableCell align="right">{row.email}</StyledTableCell> */}
              
            </StyledTableRow>
          ))}

        
        </TableBody>
      </Table>
    </Paper>
  );
}