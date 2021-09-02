



const ProductCardHorizontal = () => {
    return(
        <div className="card mb-3" style={{maxWidth: '100%'}}>
  <div className="row g-0">
    
    <div className="col-md-4">
      <img src="./assets/images/products/01.jpg" height="100%" width="100%" className="img-fluid rounded-start" alt="..." />
    </div>

    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">
            Card title
        </h5>


        <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
        </p>

      </div>
    </div>
  </div>
</div>

    );
};



export default ProductCardHorizontal;



