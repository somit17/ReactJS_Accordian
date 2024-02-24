
import { useState } from 'react';
import './App.css';
import data from './data';
const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  const handleMultiSelect = (getCurrentId) => {

    let existingMultiples = [...multiple];
    const findIndexOfCurrentId = existingMultiples.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) existingMultiples.push(getCurrentId);
    else existingMultiples.splice(findIndexOfCurrentId, 1)
    setMultiple(existingMultiples)
  }
  console.log(selected, multiple)
  return (
    <div className="body" id="body__wrapper">
      <div className="page__wrapper">
        <h1 className="heading">ACCORDIAN</h1>

        <button className='details summary' onClick={() => {
          setEnableMultiSelect(!enableMultiSelect)
        }}>Enable Multi-Select</button>
        &nbsp;
        <div className="accordion">
          {
            data && data.length > 0 ?
              data.map((dataItem) =>
                <div className='details' key={dataItem.id}>
                  <div onClick={() => { enableMultiSelect ? handleMultiSelect(dataItem.id) : handleSingleSelection(dataItem.id) }} className='summary' >
                    {dataItem.question}
                  </div>
                  {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='p'>{dataItem.answer}</div> : null}

                </div>
              ) :

              <><div className='summary'>No Records Found</div></>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
