import React, { useState } from "react"
import Title from "../components/Title"
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import naro from "./img/1749226839559.jpg";

const LikePhotoApp = () => {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)
  function handleToggleLike() {
    setLike(!like)

    like === false ? setCount(count + 1) : setCount(count - 1)
  }
  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes="subtitle" text={`likes ${count}`} />
      <div className="card card-dark m-auto" style={{ width: 300, cursor: 'pointer' }}>
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>Naruto</small>
        </div>
        <img onDoubleClick={handleToggleLike} src={naro} style={{ height: 'fit-content' }} alt="img" />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between' }}>
          <AiOutlineComment />
          {like ? <AiFillHeart className='text-danger' onClick={handleToggleLike} /> : <AiOutlineHeart onClick={handleToggleLike} />}
        </div>
      </div>
    </div>
  )
}

export default LikePhotoApp
