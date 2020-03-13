import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import { abi, contractAddress } from '../solidity';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});




function SimpleCard(props) {
  const classes = useStyles();
  const showData = (data, classes) => {
    const formatData = { ...data };
    Object.keys(data).forEach((key) => {
      if (key === 'price') formatData[key] = `${formatData[key]} €`;
      if (key === 'density') formatData[key] = `${formatData[key]} m²`;
    });
    const values = Object.keys(formatData).filter(key => isNaN(key));
    return Object.entries(formatData).map(([key, value]) => {
      if (values.includes(key))
        return <Typography style={{ fontWeight: 'bold' }} variant="h5" className={classes.title} gutterBottom>
          {`${key} => \u00A0${value}`}
        </Typography>;
      return null;
    });
  };

  const submit = async (id) => {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const contract = new web3.eth.Contract(abi, contractAddress);
    await contract.methods.newTransaction(id)
      .send({
        from: props.account,
        value: (10 ** 18) * props.data.price,
        gasLimit: 500000
      });
  };

  return (
    <Card
      className={classes.root}
      style={{
        width: 'fit-content',
        textAlign: 'center',
        margin: 'auto',
        marginTop: 150,
      }}
    >
      <Button variant="contained" component={Link} to="/buy" color="primary" style={{ marginTop: 15 }}>Retour</Button>
      <CardContent>
        { showData(props.data, classes) }
      </CardContent>
      <Button variant="contained" onClick={() => submit(props.id)} component={Link} to="/buy" color="primary" style={{ marginBottom: 15, backgroundColor: 'rgba(5, 121, 24, 0.73)' }}>Acheter</Button>
    </Card>
  );
}

export default class BuyDetail extends React.Component {
  constructor() {
    super();
    this.state =  {data: {}, id:null, account:null};
    const url = window.location.href.split('/');
    this.loadBlockchainData();
    this.getData(url[url.length - 1]);
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  getData = async (id) => {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const contract = new web3.eth.Contract(abi, contractAddress);
    const data = await contract.methods.getHouse(id).call();
    this.setState({data, id});
  };

  render() {
    return (
      <SimpleCard data={this.state.data} id={this.state.id} account={this.state.account}/>
    );
  }
}
