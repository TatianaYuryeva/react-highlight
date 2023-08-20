import React from "react"

import New from "./New"
import Popular from "./Popular"

function ItemHighlight(Component, props) {

  return class extends React.Component {

    render() {
      const component = <Component{...props}/>
      if (props.views < 100) {
        return (
          <New children={component} />
        )
      } else if (props.views > 1000){

        return (
          <Popular children={component}/>
        )
      }
      
      return component
    }
  }
}

export default ItemHighlight