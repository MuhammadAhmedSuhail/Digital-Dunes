import React from 'react';
import digital from '../assets/1.png'
import ebook from '../assets/books.avif'
import courses from '../assets/courses.jpg'
import graphic from '../assets/graphic design.png'
import templates from '../assets/templates.webp'
import documents from '../assets/documents.jpg'

function ProductsList() {
  return (
    <div className="container">
      <h1 className="text-center" style={{color:"white",marginTop:"10px"}}>Our Products</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={digital} alt="Product 1" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Digital Services</h5>
              <p className="card-text">Digital services refer to the delivery of various services through digital platforms such as websites, mobile apps, and software applications. These services may include website design and development and more.</p>
              <a href="/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={ebook} style={{height:"200px"}} alt="Product 2" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">E-books</h5>
              <p className="card-text">E-books, or electronic books, are digital versions of traditional printed books that can be read on electronic devices such as computers, tablets, and e-readers.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={courses} style={{height:"200px"}} alt="Product 3" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Video Courses</h5>
              <p className="card-text">Video courses are educational resources that are typically delivered in a digital format, often through online platforms.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={graphic} style={{height:"200px"}} alt="Product 3" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Graphic Design Assets</h5>
              <p className="card-text">Graphic design is the art and practice of creating visual content to communicate information and messages to an audience. It involves combining images, typography</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={templates} style={{height:"200px"}} alt="Product 3" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Web Templates</h5>
              <p className="card-text">Web templates are pre-designed website layouts and designs that can be easily customized and used for creating websites. These templates are created by professional web designers and developers</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <a href="/ProductDetail">
              <img src={documents} style={{height:"200px"}} alt="Product 3" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Digital Documents</h5>
              <p className="card-text">Digital documents refer to any type of electronic file or document that can be stored and shared digitally. These documents can come in a variety of formats, including PDFs, Word documents, spreadsheets, presentations, and more.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
