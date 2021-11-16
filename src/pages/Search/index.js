import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import api from '../../services/api';

// import { Container } from './styles';

const Search = () => {
  // const [data, setData] = useState([]);
  // const [filteredSerie, setFilteredSerie] = useState(data);
  // const [search, setSearch] = useState('');

  // useEffect(() => {
  //   api
  //     .get('series')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   setFilteredSerie(
  //     data.filter((serie) =>
  //       serie.name.toLowerCase().includes(search.toLowerCase()),
  //     ),
  //   );
  // }, [search, data]);

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* {filteredSerie.map((serie, index) => (
          <div key={index}>{...serie}</div>
        ))} */}
        opa
      </Grid>
    </Grid>
  );
};

export default Search;
