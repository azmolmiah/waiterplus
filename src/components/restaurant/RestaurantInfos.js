import React, { useState, useEffect } from 'react';

const RestaurantInfos = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInfo();
    //eslint-disable-next-line
  }, []);

  const getInfo = async () => {
    setLoading(true);
    const res = await fetch(
      'https://waiterplus.uk/api/c/1.57.4/public/api/v2/fr/get_outlet_details',
      {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
          'outlet': 'modhubon'
        }
      }
    );
    const data = await res.json();
    console.log(data);
    setInfo(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }
  return <div></div>;
};

export default RestaurantInfos;
