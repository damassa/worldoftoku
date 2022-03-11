import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

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
    <Grid container className="searchContainer" justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={12}>
          <h2>Resultados para: {name}</h2>
        </Grid>
        <Grid container justifyContent="space-between">
          {data.map((serie) => (
            <Grid key={serie._id} item className="listSeries">
              <Link to={`/detail/${serie._id}`}>
                <Grid container className="searchCardContainer">
                  <Grid item xs={12} className="searchCard">
                    <img src={serie.image} alt="Serie" title={serie.name} />
                    <Grid container className="bottomSerieName">
                      <span>{serie.name}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
