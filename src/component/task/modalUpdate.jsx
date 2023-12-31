import React, { useEffect, useState } from 'react';
import Modal from "react-modal";


const customStyles = {
  content: {
    width: '800px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalUpdate = ({customerList, modalIsOpen, closeModal, data, changeData }) => {
  // const [customers, setCustomerList] = useState(data || {});
  const [customer, setCustomer] = useState(data || {});
  // const [customerList, setCustomerList] = useState(data || {});

  const handleChangeInput = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddcustomer = (customer) => {
      const newCustomer = {...customer,id:Math.floor(Math.random()*1000)};
      customerList.push(newCustomer);
      // setCustomerList(customers);
    // setCustomer([customer,newCustomer])
    // setCustomer([]);
  }
 
  

  const handleAfterClose = () => {
    setCustomer({});
  };

  const handleSave = () => {
    if(customer.id){
      changeData(customer);
    }else{
      handleAddcustomer(customer)
    };
    closeModal();
  };

  useEffect(() => {
    setCustomer(data);
  }, [data]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterClose={handleAfterClose}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <h2>Modal update</h2>

      <form>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="fullName">FullName</label>
            <input
              className="form-control"
              id="fullName"
              name="fullName"
              defaultValue={customer.fullName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              defaultValue={customer.email}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              defaultValue={customer.phone}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="gender">GenDer</label>
            <input
              type="tel"
              className="form-control"
              id="gender"
              name="gender"
              defaultValue={customer.gender}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="city">City</label>
            <input
              type="tel"
              className="form-control"
              id="city"
              name="city"
              defaultValue={customer.city}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              defaultValue={customer.address}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div
          className="row mt-3"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyItems: 'end',
          }}
        >
            <div className="col-lg-6"></div>
          <div className="col-lg-8"></div>
          <div className="col-lg-2">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-outline-secondary" onClick={closeModal}>
              close
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ModalUpdate;