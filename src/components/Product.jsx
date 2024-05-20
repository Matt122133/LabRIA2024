
export const Product = ( { id, title, description, price, image } ) => {
  return (
    <div className="card">
      <img src={ image } alt={ title } />
      <div className="card-content">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <h2>{ price }</h2>
      </div>
    </div>
  )
};
