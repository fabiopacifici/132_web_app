import { useState } from "react";

export default function ReviewFormCard({ book_id }) {

  const [username, setUsername] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)
  const [success, setSuccess] = useState(null)


  function HandleFormToggle() {
    document.getElementById('form-card').classList.toggle('d-none')
  }


  /**
   * Handle form submit
   * 
   */
  function HandleFormSubmit(e) {
    //e.preventDefault()
    //console.log('here');


    // validate the data
    if (username.length < 2 || review.length < 5 || rating == 0) {
      setErrorMessage('Please fill all fileds in the form')

    } else {
      setErrorMessage(null)
      // get the username value
      // get the review value
      // get the raging value
      const formData = {
        username,
        review,
        vote: rating
      }




      // make an ajax request to the book id enpoing
      const base_book_api_url = `http://localhost:3001/api/books/${book_id}/review`

      fetch(base_book_api_url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data);

          if (data.success) {
            setSuccess('Thanks for your review')


            setTimeout(HandleFormToggle, 1000)

            // hide the success message after 2s
            setTimeout(() => setSuccess(null), 3000)
            // hide the form after 3s

          }

        }).finally(() => {
          console.log(success);

        })
        .catch(err => console.log(err))

    }

    // reset the form fields
    setUsername('')
    setReview('')
    setRating(0)

  }



  return (

    <div className="container">

      {success && <div>{success}</div>}
      <button onClick={HandleFormToggle} className="btn btn-dark mb-2" >Write a review</button>


      <div id="form-card" className="card mb-4 d-none">
        <div className="card-body">

          <h3>Leave your review</h3>

          <form onSubmit={HandleFormSubmit}>

            {/* input username */}
            <div className="mb-3">
              <label htmlFor="username">User name</label>
              <input name="username" id="username" type="text" className="form-control" placeholder="mario" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            {/* rating stars */}
            <div className="rating mb-3 text-warning">
              {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
            </div>

            {/* textarea review */}
            <div className="mb-3">
              <label htmlFor="review">Your review</label>
              <textarea className="form-control" name="review" id="review" placeholder="leave your review here " value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Send</button>
              {errorMessage && <span className="text-danger"> <i className="bi bi-x"></i> {errorMessage}</span>}
            </div>

          </form>



        </div>
      </div>
    </div>
  )

}