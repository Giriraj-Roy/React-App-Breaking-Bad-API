import React, { useState } from 'react'



const CharacterItem = ({item }) => {

  const [toggle, setToggle] = useState(false);

    return (
        <div className='card' onClick={() => setToggle(!toggle)}>
      <div className='card-inner'>
        <div className={toggle ? 'thanos':'card-front'}>
          <img src={item.img} alt='' />
        </div>
        <div className={toggle ? 'thanos':'card-back'}>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
