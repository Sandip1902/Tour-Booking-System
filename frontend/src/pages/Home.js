import React, { useEffect, useState } from 'react';
import TourPackage from '../components/TourPackage';
import { getPackages } from '../services/api';

const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then(data => setPackages(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-secondary mb-4">Available Tour Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map(pkg => <TourPackage key={pkg._id} packageData={pkg} />)}
      </div>
    </div>
  );
};

export default Home;
