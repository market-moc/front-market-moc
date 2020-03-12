import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const data = {
  type: 'appartment',
  buyerId: 'fazazdzadzazdazdzaad',
  sellerId: 'dazdzadzadzazaaz',
  price: 150000,
  address: '37 rue des fdp, Paris',
  density: 150,
  date: '31/05/2020',
  nbRooms: 10,
};

const showData = (data, classes) => {
  const formatData = { ...data };
  Object.keys(data).forEach((key) => {
    if (key === 'price') formatData[key] = `${formatData[key]} €`;
    if (key === 'density') formatData[key] = `${formatData[key]} m²`;
  });
  return Object.entries(formatData).map(([key, value]) => (
    <Typography style={{ fontWeight: 'bold' }} variant="h5" className={classes.title} gutterBottom>
      {`${key} => \u00A0${value}`}
    </Typography>
  ));
};

export default function SimpleCard() {
  const classes = useStyles();
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
      <Button variant="contained" component={Link} to="/" color="primary" style={{ marginTop: 15 }}>BACK</Button>
      <CardContent>
        { showData(data, classes) }
      </CardContent>
    </Card>
  );
}
