const React = require('react')


class ImageSlider extends React.Component{

  constructor(props){
    //delete long form
    super();

    this.state = {
      currentSlideIndex: 0
      //start at 
    };
  }


  render(){

    return(

      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>

    )
  }
}
module.exports = ImageSlider;
