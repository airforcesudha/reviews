import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {number: 0}

  leftArrow = () => {
    const {number} = this.state
    if (number >= 1) {
      this.setState(prevState => ({number: prevState.number - 1}))
    } else {
      this.setState({number: 0})
    }
  }

  rightArrow = () => {
    const {number} = this.state
    if (number < 3) {
      this.setState(prevState => ({number: prevState.number + 1}))
    } else {
      this.setState({number: 0})
    }
  }

  render() {
    const {reviewDetails} = this.props
    const {number} = this.state
    const eachDetail = reviewDetails[number]
    return (
      <div className="main-page">
        <h1>Reviews</h1>
        <div className="inner-part">
          <button
            onClick={this.leftArrow}
            type="button"
            date-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrowImg"
            />
          </button>
          <div className="profilePart">
            <img src={eachDetail.imgUrl} alt={eachDetail.username} />
            <p>{eachDetail.username}</p>
            <p>{eachDetail.companyName}</p>
            <p>{eachDetail.description}</p>
          </div>
          <button onClick={this.rightArrow} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrowImg"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
