import React from 'react';
import '../css/AvailableHomes.css';

function AvailableHomes() {
    const homes = [
        { 
          address: "123 Main Street", 
          info: "3 bed, 2 bath, $350k" 
        },
        { 
          address: "456 Oak Avenue", 
          info: "4 bed, 3 bath, $450k" 
        },
        { 
          address: "789 Pine Road", 
          info: "2 bed, 1 bath, $250k" 
        },
        { 
          address: "101 Maple Drive", 
          info: "5 bed, 4 bath, $650k" 
        },
        { 
          address: "202 Elm Street", 
          info: "3 bed, 2.5 bath, $400k" 
        },
        { 
          address: "303 Cedar Lane", 
          info: "4 bed, 3 bath, $500k" 
        },
        { 
          address: "404 Birch Boulevard", 
          info: "3 bed, 2 bath, $370k" 
        },
        { 
          address: "505 Walnut Way", 
          info: "4 bed, 3.5 bath, $550k" 
        },
        { 
          address: "606 Cherry Crescent", 
          info: "2 bed, 2 bath, $320k" 
        },
      ];
      
  return (
    <div className="card-grid">
      {homes.map((home, index) => {
        const addressSlug = home.address.toLowerCase().replace(/\s+/g, '-');
        return (
          <div className="card" key={index} id={addressSlug}>
            <h2 className="card-title">
              <a href={`/homes/${addressSlug}`}>
                {home.address}
              </a>
            </h2>
            <div className="card-content">
              <p>{home.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AvailableHomes;
