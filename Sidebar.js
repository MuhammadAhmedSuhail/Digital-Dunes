import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ModifyProduct from './ModifyProduct';

export default function Sidebar({ onAddProduct, onModifyProduct, onViewSelling }) {
  const [selectedOption, setSelectedOption] = useState('addProduct');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="d-flex vh-100" style={{height:"auto",color:"white"}}>
      <div className="flex-shrink-0 p-3 bg-light" style={{ height:"100%",width:"20%" }}>
        <ul className="list-unstyled">
          <li>
            <button className={`btn btn-nav btn-${selectedOption === 'addProduct' ? 'active' : 'light'} w-100 mb-3`} onClick={() => handleOptionClick('addProduct')}>
              Add Product
            </button>
          </li>
          <li>
            <button className={`btn btn-nav btn-${selectedOption === 'modifyProduct' ? 'active' : 'light'} w-100 mb-3`} onClick={() => handleOptionClick('modifyProduct')}>
              Modify Product
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 p-3">
        {selectedOption === 'addProduct' && (
          <div>
            <AddProduct/>
          </div>
        )}
        {selectedOption === 'modifyProduct' && (
        <div>
            <h2 className="mb-4">Modify Product</h2>
            <ModifyProduct/>
        </div>
        )}
      </div>
    </div>
  );
}
