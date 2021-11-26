import React, { useState } from 'react'
import Galleries from './Galleries'

const App = () => {
  const [items, setitems] = useState(Galleries)

  const filteritems = (sitems) => {
    const updateditems = Galleries.filter((celms) => {
      return celms.name.toLowerCase().includes(sitems.toLowerCase())
    })

    if (sitems === "") {
      setitems(Galleries)
    } else {
      setitems(updateditems)
    }
  }
  return (
    <>
      <div className="mdiv">
        <div className="hdiv">
          <p>Sound Clode</p>
          <div className="searchbar">
            <input className="inpstyle" type="text" placeholder="Search songs" onChange={(e) => filteritems(e.target.value)} />
          </div>
        </div>
        <div className="cdiv">
          <div className="cards">
            {
              items.map((elem) => {
                return (
                  <div className="mcards">
                    <img src={elem.image} alt="" />
                    <h6>{elem.name}</h6>
                    <p>{elem.artist}</p>
                    <h6>{elem.time} &nbsp; {elem.likes}</h6>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="fdiv">
          <div className="line"></div>
          <div className="sdetail">
            <div>01:30 / 03:30 &nbsp; Max</div>
            <div>1.0</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
