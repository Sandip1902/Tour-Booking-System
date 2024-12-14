import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPackageById } from '../services/api';
import BookingForm from '../components/BookingForm';

const PackageDetails = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    getPackageById(id).then(data => setPackageData(data));
  }, [id]);

  if (!packageData) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-primary">{packageData.title}</h2>
      <img src={packageData.image} alt={packageData.title} className="w-full h-48 object-cover mt-4" />
      <p className="mt-4">{packageData.description}</p>
      <p className="mt-4 font-semibold">Price: ${packageData.price}</p>
      <BookingForm packageId={packageData._id} />
    </div>
  );
};

export default PackageDetails;
