import React, { useState, useEffect } from "react"
import Button from "../components/Button"
import Title from '../components/Title'
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"
const TestimonialsApp = () => {
  const [testimonials, setTestomonials] = useState()
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [testimonials])
  // const handleClick = () => {
  //   console.log('clicked')
  // }
  return (
    <div className="container m-auto">
      <Title text={'Testimonials App'} />
      <Button text={'Posts'} btnClass='btn-info' icon={<BsFillFileEarmarkPostFill />} onClick={() => setTestomonials('posts')} />
      <Button text={'Users'} btnClass='btn-info' icon={<FaUserAlt />} onClick={() => setTestomonials('users')} />
      <Button text={'Comments'} btnClass='btn-info' icon={<BiCommentDetail />} onClick={() => setTestomonials('comments')} />
      <Title text={!testimonials ? "Select From Above!" : testimonials} classes={"subtitle text-primary"} />
      {!Array.isArray(items)
        ? null
        : items.map((item) => {
          return <div className="card card-primary mb-2" key={item.id}>
            {item.name && <h2 className="card-header">{item.name}</h2>}
            <div className="card-bodt">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
            {item.email && <small className="card-footer">{item.email}</small>}
          </div>;
        })}
    </div>
  )
}

export default TestimonialsApp
