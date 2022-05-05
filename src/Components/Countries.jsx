import React from 'react';

const Countries = ({ countries }) => {
  return (
    <div className="list-group  mb-2">
      {countries.map(country => {
        const { name, region, area } = country;
        return (
          <div key={name} className=" list-group-item list-group-item-success">
            <p>
              Country: <b>{name}</b>
            </p>
            <p>
              Region: <b>{region}</b>
            </p>
            <p>
              Country area: <b>{area} km²</b>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Countries;
