import React from 'react';
import './App.css'; 
const properties = [
  {
    id: 1,
    title: 'Beautiful Condo in Downtown',
    price: '$500,000',
    location: 'Downtown, City',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    price: '$700,000',
    location: 'Suburb Area, City',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Spacious Family Home',
    price: '$900,000',
    location: 'Delhi, City',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Spacious Family Home',
    price: '$720,000',
    location: 'Hydrabad, City',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'Spacious Family Home',
    price: '$700,000',
    location: 'Mumbai, City',
    image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Spacious Family Home',
    price: '$450,000',
    location: 'Kolkata, City',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    title: 'Spacious Family Home',
    price: '$120,000',
    location: 'Chandigarh, City',
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 8,
    title: 'Spacious Family Home',
    price: '$200,000',
    location: 'Amritser, City',
    image: 'https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  
  
];


const Property = ({ property }) => {
  return (
    <div className="property">
      <img src={property.image} alt={property.title} />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p>{property.price}</p>
      </div>
    </div>
  );
};


const RealEstateWebsite = () => {
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="logo">99 acres</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
      <div className="property-listings">
        {properties.map(property => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      
      <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
    </div>
  );
};

export default RealEstateWebsite;
