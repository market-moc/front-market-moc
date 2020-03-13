import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import { abi, contractAddress } from '../solidity';

const columns = [
  { id: 'type', label: 'Type', minWidth: 170 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  { id: 'date', label: 'Date de mise en vente', minWidth: 100 },
  { id: 'buyerId', label: 'Acheteur', minWidth: 170 },
  { id: 'sellerId', label: 'Vendeur', minWidth: 100 },
];

function createData(id, type, price, date, buyerId, sellerId) {
  return {
    id, type, price, date, buyerId, sellerId
  };
}

const rows = [
//  createData(1, 'appartment', '122132131', 'EDA2E1213213', 13500, '35 rue des fdp, Paris', 150, '31/05/2020', 10),
  //createData(2, 'appartment', 'dazdzaaz', 'azeffzafzazaea', 13500, '37 rue des fdp, Paris', 150, '31/05/2020', 15),
  createData(1, 'appartment',135000, '31/02/2020', 'adzpdnaz3azdpna', 'adazdazdzazda'),
  createData(2, 'maison',35000, '25/02/2020', 'adzpdnaz3azdpna', 'adazdazdzazda'),
  createData(3, 'hotel',1000000, '10/02/2020', 'adzpdnaz3azdpna', 'adazdazdzazda'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <TableRow component={Link} to={`/transaction/${row.id}`} key={`list:${i}`} hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default class Transactions extends React.Component {

  constructor() {
    super();
    this.loadBlockchainData()
    this.getData();
    this.state = {data: null};
  }

  getData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const contract = new web3.eth.Contract(abi, contractAddress);
    const data =  await contract.methods.getTransaction().call();
    console.log(data);
  };

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }


  render() {
    return (
      <StickyHeadTable />
    );
  }
}
