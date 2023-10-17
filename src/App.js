import { useState } from 'react';
import axios from 'axios';
import NewsList from "./components/NewsList"; 

const App = () => {
const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1/'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div>
        <NewsList />
      </div>
      {data &&
        <textarea rows={7} cols={30} readOnly={true}
          value={JSON.stringify(data, null, 2)} />
      }

    </div>
  );
};
export default App;
