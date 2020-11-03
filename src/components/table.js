import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles(() => ({
    root: {
      flexShrink: 0,
    },
    tableHead: {
        backgroundColor: '#f2f2f2',
      },
    page: {
      color: 'blue',
      border: '0.5px solid blue',
      padding: '5px',
    },
  }));

function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    return (
      <div className={classes.root}>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          <KeyboardArrowLeft />
        </IconButton>
        <span className={classes.page}>
          {page + 1}
        </span>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    );
  }

  
function CustomTable(props) {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
   
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    return (
        <div>
              <TableContainer>
                <Table className={classes.table} aria-label="custom pagination table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell >ID</TableCell>
                      <TableCell align="left">First Name</TableCell>
                      <TableCell align="left">Last Name</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Created</TableCell>
                      <TableCell align="left">Orders</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell component="th" scope="row" >
                          {customer.id}
                        </TableCell>
                        <TableCell align="left">
                          {customer.firstName}
                        </TableCell>
                        <TableCell  align="left">
                          {customer.lastName}
                        </TableCell>
                        <TableCell  align="left">
                          {customer.email}
                        </TableCell><TableCell align="left">
                          {customer.created}
                        </TableCell><TableCell  align="left">
                          {customer.orders}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[]}
                        colSpan={5}
                        count={props.customers.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
        </div>
    );

}

export default CustomTable