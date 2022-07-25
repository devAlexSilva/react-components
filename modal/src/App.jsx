import React, { useState } from 'react'
import Modal from './components/Modal'


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>open modal</button>
      {modalIsOpen ? <Modal onClose={() => setModalIsOpen(false)}><h2>modal is open</h2></Modal> : null}
    </div>
  );
}

export default App;
