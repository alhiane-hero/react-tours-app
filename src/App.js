import {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import LocalContext from './components/LocalContext';
import {MainEl, ErrorMsg, ErrorMsgHeading, RefreshBtn} from './components/Styled';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  } 

  const fetchTours = async _ => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(_ => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <MainEl>
        <Loading />
      </MainEl>
    );
  }

  if (tours.length === 0) {
    return (
      <MainEl>
        <ErrorMsg>
          <ErrorMsgHeading>No Tours Left</ErrorMsgHeading>
          <RefreshBtn onClick={fetchTours}>
            Refresh
          </RefreshBtn>
        </ErrorMsg>
      </MainEl>
    );
  }

  return (
    <MainEl>
      <LocalContext.Provider value={{removeTour}}>
        <Tours tours={tours} />
      </LocalContext.Provider>
    </MainEl>
  );
}

export default App;
