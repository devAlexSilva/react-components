import React, { useState } from 'react'
import Modal from './components/Modal'
import './app.scss'

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="main">
      <ul className="container">

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
          <img src="https://cdn.myanimelist.net/images/anime/1143/121873.jpg?s=dc6f945ff0b50e0cf6d3075be8aeded7" alt="Tate no Yuusha no Nariagari Season 2" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>

          </div>
        </li>

        <li className="item">
          <img src="https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=7faffc350d3fdfc43bd01d216eff0981" alt="Akame ga Kill!" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/1613/102179.jpg?s=4caf2ddc8dc918652c81a4d734f961cb" alt="Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/9/7804.jpg?s=622918c508e775b2e235faebb64671ce" alt="Soul Eater" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/5/43399.jpg?s=3a83b6663965c592ff76229f3d3411cc" alt="Psycho-Pass" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/13/35829.jpg?s=075038b59a254214177c064186f78370" alt="Shinrei Tantei Yakumo" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/7/88471.jpg?s=fa9d772723b5d5948f61777bf120a321" alt="Inuyashiki" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
        </li>

        <li className="item">
        <img src="https://cdn.myanimelist.net/images/anime/8/32873.jpg?s=91efabb9e5f897dd5963c2e9abd54a48" alt="Boku wa Tomodachi ga Sukunai" />
          <div className="seemore">
            <p>nome do anime</p>
            <button
              onClick={() => setModalIsOpen(true)}>
              more
            </button>
          </div>
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
