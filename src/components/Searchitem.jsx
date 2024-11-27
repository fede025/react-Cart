import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../data';
import Product from './Product';
import PropTypes from 'prop-types';

const Searchitem = ({cart, setcart}) => {
  const {term}  = useParams();
  const [filterdata, setfilterdata] = useState([])
  useEffect(() => {
    const filtereddata = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
      setfilterdata(data)
    }

    filtereddata();

  }, [term])

  return (
    <Product cart={cart} setcart={setcart} items={filterdata}/>
    
  )
}

Searchitem.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
  setcart: PropTypes.func.isRequired
};

export default Searchitem