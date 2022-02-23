import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Card = ({ data }) => {
  const history = useHistory();

  const navigate = () => {
    history.push(`/detail/${data._id}`);
  };

  return <button onClick={navigate} type="button" className="card"></button>;
};

export default Card;
