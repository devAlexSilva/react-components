import React, { useState } from 'react'
import Modal from './components/Modal'
import './App.scss'

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="main">
      <ul className="container">
        <li className="item">
          <button
            onClick={() => setModalIsOpen(true)}>
            open modal
          </button>
        </li>
        <li className="item">
          <img src="https://cdn.myanimelist.net/images/anime/1408/114012.jpg?s=cccbe98f0a30d6c557aab125064f127d" alt="Akira" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>

          </div>
        </li>
        <li className="item">
          <button
            onClick={() => setModalIsOpen(true)}>
            open modal
          </button>
        </li>
      </ul>
      {modalIsOpen ? (
            <Modal
              onClose={() => setModalIsOpen(false)}>
              <h2>
                modal is open
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ut quaerat illum dolores deleniti voluptate nam impedit,
                libero quidem tempore vel voluptas odio eos optio,
                temporibus quisquam. Tenetur deleniti libero ad.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ut quaerat illum dolores deleniti voluptate nam impedit,
                libero quidem tempore vel voluptas odio eos optio,
                temporibus quisquam. Tenetur deleniti libero ad.
              </p>
            </Modal>
          ) : null
          }
    </div>
  );
}

export default App;
