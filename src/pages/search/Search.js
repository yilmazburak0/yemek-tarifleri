import React, { useContext } from 'react'
import "./Search.css"
import { useSearchParams } from 'react-router-dom'
import useFetch from './../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductCard from '../../components/ProductCard';
import { ThemeContext } from '../../contexts/ThemeContext';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = "http://localhost:3000/tarifler?q=" + query;
  const { mode } = useContext(ThemeContext);

  const {data:tarifler,isLoading,error} = useFetch(url);
  

  return (
     <div className="row mt-3">
      <h2 className={`text-${mode === "dark" ? "light" : "dark"}`}>Aranan Kelime "{query}"</h2>
      <hr />
      <Loading loading={isLoading}/>
      <Error error={error} />
      {
        (tarifler === null || tarifler.length === 0 ) ? <Error error={"aradığınız kelimeyle eşleşen bir tarif bulamadık."} /> : tarifler.map(tarif =>(<ProductCard key={tarif.id} tarif={tarif} /> ))
      }
     </div>

  )
}

export default Search