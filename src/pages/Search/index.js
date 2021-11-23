import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

const Search = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    api
      .post('series', { name })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <Grid container>
      {data.map((serie) => (
        <Grid key={serie._id} container justify="center">
          <Link to={`/detail/${serie._id}`}>
            <Grid item xs={12}>
              <img src={serie.image} alt="Serie" title={serie.name} />
            </Grid>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Search;
