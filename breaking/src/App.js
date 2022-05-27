import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
// import Pagination from './components/Pagination';

const App = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  //Pagination
  // const[currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

  useEffect( ()=> {
    const fetchItems = async () => {
      const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      //console.log(result.data)
      setLoading(false);
    }
    fetchItems();

  }, [query])

  //Get Current Posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  // const paginate = pageNumber =>setCurrentPage(pageNumber);


  return (
    <div className="App">
      <Header/>
      <Search getQuery={ ( q )=> setQuery(q)}/>
      <CharacterGrid loading={loading} items={items} />

      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}/> */}
    </div>
  );
}

export default App;
