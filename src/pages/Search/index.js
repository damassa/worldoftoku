import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import api from '../../services/api';

// import { Container } from './styles';

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .post('series', { name: 'name' })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* {data.map((serie) => (
          <div key={serie._id}>{...serie}</div>
        ))} */}
        opa
      </Grid>
    </Grid>
  );
};

export default Search;
