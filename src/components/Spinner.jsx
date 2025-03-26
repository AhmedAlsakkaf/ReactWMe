import ClipLoader from 'react-spinners/ClipLoader';
import React from 'react';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#0D5431FF'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;