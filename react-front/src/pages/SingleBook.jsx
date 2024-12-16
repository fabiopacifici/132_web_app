import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import ReviewCard from "../components/ReviewCard"
import ReviewFormCard from "../components/ReviewFormCard"
import GlobalContext from "../contexts/GlobalContext"
import Loader from "../components/Loader"

export default function SingleBook() {
  const { id } = useParams()

  // grab the loading and setLoading from the context
  const { loading, setLoading } = useContext(GlobalContext);

  const base_book_api_url = `http://localhost:3001/api/books/${id}`
  console.log(base_book_api_url);

  const [book, setBook] = useState(null);
  const [success, setSuccess] = useState(null)

  useEffect(() => {

    setLoading(true);

    // make a fetch request to the baswe api endpoint
    fetch(base_book_api_url)
      .then(res => res.json())
      .then(data => {

        console.log(data); // TODO: what happens if we can't find that book?

        setBook(data)
        setLoading(false);

      }).catch(err => console.error(err))

  }, [success])


  return (

    <>

      {loading ? <Loader /> : (

        <>

          <Banner title={book?.title} subtitle={`By ${book?.author}`} leadtext={book?.abstract} />


          <ReviewFormCard book_id={id} success={success} handleSuccess={setSuccess} />


          <section className="reviews">
            <div className="container">
              {/* All reviews here */}

              {book && book?.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}


            </div>
          </section>
        </>


      )}

    </>

  )
}