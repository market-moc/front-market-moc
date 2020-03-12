import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from '@material-ui/core';

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default class Sell extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          <span role='img' aria-label={'emoji'}>🏁</span> Vente de votre bien immobilier
        </Typography>
        <Form
          onSubmit={onSubmit}
          initialValues={{sellerId: 'dazdzadzadzazaaz', date_sell: +new Date()}}
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
                      label="Price (€)"
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
