import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import Web3 from 'web3';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from '@material-ui/core';
import {abi, contractAddress} from '../solidity';

const validate = (values) => ({});

export default class Sell extends React.Component {
  constructor() {
    super();
    this.loadBlockchainData();
  }

   onSubmit = async (values) => {
    const { price, address, city, notes, density } = values;
    if (!(price && address && city && notes && density))
      return;

    console.log(Web3.givenProvider)
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const contract = new web3.eth.Contract(abi, contractAddress);
    await contract.methods.addHouseToSeller(city, price, address, density, notes).send({ from: this.state.account, gasLimit: 500000 });
  };

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'mainnet.infura.io/v3/c7c35e6b63c047bca77641a6b4949bf3');
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  render() {
    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          <span role="img" aria-label="emoji">🏁</span>
          {' '}
          Vente de votre bien immobilier
        </Typography>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{ date: new Date().toLocaleDateString() }}
          validate={validate}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="city"
                      component={Select}
                      label="Choississez le type du bien immobilier"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="appartment">Appartement</MenuItem>
                      <MenuItem value="house">Maison</MenuItem>
                      <MenuItem value="villa">Villa</MenuItem>
                      <MenuItem value="hotel">Hôtel</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="price"
                      component={TextField}
                      type="text"
                      label="Ether (eth)"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="density"
                      component={TextField}
                      type="text"
                      label="Density (m²)"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="address"
                      fullWidth
                      required
                      component={TextField}
                      type="text"
                      label="Adresse"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="notes"
                      component={TextField}
                      multiline
                      label="Notes"
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    );
  }
}
