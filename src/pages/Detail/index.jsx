import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import api from '../../services/api';
import { setFavorites } from '../../store/modules/user/actions';
import ReactPlayer from 'react-player/youtube';

const Detail = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`series/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleFavorite = () => {
    api.post('users/favorites', { serieId: id }).then((response) => {
      dispatch(setFavorites(response.data.favorites));
    });
  };

  function isFavorite() {
    return user?.id && user.favorites.includes(id);
  }

  return (
    <Grid container className="container">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item md={4}>
                <Grid container className="detailImage">
                  <img src={data.image} alt="Detalhe" title={data.name} />
                </Grid>
                <Grid container className="serieDetail">
                  <Grid item sm={12} md={8}>
                    <h1>{data.name}</h1>
                    <h2>{data.year}</h2>
                    <h4>{data.duration} minutes</h4>
                    {data.category?.map((cat) => (
                      <Grid key={cat._id} item xs={12} className="categoryTag">
                        <div>{cat.name}</div>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} className="categoryTag">
                    <button onClick={handleFavorite} className="buttonFavorite">
                      {isFavorite()
                        ? 'Remove from favorites'
                        : 'Add to favorites'}
                    </button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={8} className="openingVideo">
                <ReactPlayer width="100%" url={data.opening_video} />
                <Grid item xs={12} className="seriePlot">
                  <h2>Sinopse</h2>
                  <p>{data.plot}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
