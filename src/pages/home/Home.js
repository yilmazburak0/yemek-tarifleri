import React from 'react'
import "./Home.css"
import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Home() {
  
 const {data:tarifler, isLoading,error} = useFetch("http://localhost:3000/tarifler");

  return (
    <div className="row mt-3">
      <Loading loading={isLoading}/>
      <Error error={error} />
      {
        tarifler?.map(tarif =>(
          <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}

export default Home