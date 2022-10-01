import React, { useCallback, useEffect, useState } from 'react'
import Modal from './components/Modal'
import './app.scss'
import { jikanApi } from './api/axios'

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [list, setList] = useState([])
  const [modalInfo, setModalInfo] = useState({})

  const reload = useCallback(() => {
    (async () => {
      const animeList = await jikanApi(10, 10)
      setList(animeList)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const animeList = await jikanApi(0, 10)
      setList(animeList)
    })()
  }, [])

  const openModal = (index) => {
    setModalInfo({
      title: list[index].title,
      synopsis: list[index].synopsis,
      episodes: list[index].episodes,
      rank: list[index].rank,
      score: list[index].score,
      image: list[index].images.webp.large_image_url
    })

    setModalIsOpen(true)
  }

  return (
    <div className="main">
      <button onClick={() => reload()}>
        reload
      </button>
      <ul className="container">
        {
          list?.map((item, index) => {
            return (
              <li key={item.title} className="item">
                <img src={item.images.jpg.image_url} alt={item.title} />
                <div className="seemore">
                  <p>{item.title}</p>
                  <button
                    onClick={() => openModal(index)}>
                    more
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
      {modalIsOpen && (
        <Modal
          onClose={() => setModalIsOpen(false)}>
          <div className="info">
            <div className="side-left">
              <h2>
                {modalInfo.title}
              </h2>
              <span> ep: {modalInfo.episodes}</span>
              <span>rank: {modalInfo.rank}</span>
              <span>score: {modalInfo.score}</span>
            </div>
            <div className="side-right">
              <img src={modalInfo.image} alt={modalInfo.title} />
            </div>
          </div>
          <p>
            {modalInfo.synopsis}
          </p>
        </Modal>
      )
      }
    </div>
  );
}

export default App;
