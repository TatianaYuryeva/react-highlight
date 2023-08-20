import { nanoid } from 'nanoid'

import Video from "./Video";
import Article from "./Article";
import ItemHighlight from "./ItemHighlight"


function List(props) { 

  return props.list.map(item => {
		let key = nanoid()
    let ItemHighlighted;
      switch (item.type) {
          case 'video':
            ItemHighlighted = ItemHighlight(Video, {...item})
            return (
              <ItemHighlighted key={key}/>
            );

          case 'article':
            ItemHighlighted = ItemHighlight(Article, {...item})
            return (
              <ItemHighlighted key={key}/>
            );
      }
  });
};

export default List