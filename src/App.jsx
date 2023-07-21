import { useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    setList([...list, item]);
    setItem("");
  };

  const RemoveFromList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    
    <div className='container'>
      <h1>My Todo App</h1>
          <input onChange={(e) => setItem(e.target.value)} value={item} placeholder="item" />
    
          <button onClick={AddToList}>+ Add to list</button>

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => (
              <tr key={index}>
                <td>{element}</td>
                <td>
                  <button onClick={() => RemoveFromList(index)}>- Remove Item</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No items in the list.</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default App;
