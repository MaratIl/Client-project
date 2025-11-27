function PropertyCard({porperty}) {
    return (
      <div>
        <h2>{porperty.type}</h2>
        <p>{porperty.price}</p>
      </div>
  );
}

export default PropertyCard