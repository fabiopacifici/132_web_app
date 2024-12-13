import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import ReviewCard from "../components/ReviewCard"

export default function SingleBook() {
  const { id } = useParams()


  const base_book_api_url = `http://localhost:3001/api/books/${id}`
  console.log(base_book_api_url);

  const [book, setBook] = useState(null);

  useEffect(() => {

    // make a fetch request to the baswe api endpoint
    fetch(base_book_api_url)
      .then(res => res.json())
      .then(data => {

        console.log(data); // TODO: what happens if we can't find that book?

        setBook(data)

      }).catch(err => console.error(err))

  }, [])


  return (

    <>


      <Banner title={book?.title} subtitle={`By ${book?.author}`} leadtext={book?.abstract} />

      <section className="reviews">
        <div className="container">
          {/* All reviews here */}

          {book && book?.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}


        </div>
      </section>


    </>

  )
}