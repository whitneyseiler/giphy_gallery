import React from 'react';
import {MediaBox} from 'react-materialize';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

let ResultsContainer = ({results}) => {
  return (
    <div id="results-container" style={{margin: 10}}>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 1000: 4}} className="results-masonry">
          <Masonry columnsCount={4} gutter={4} children={results}>
            {results ? results.map((gif, index) => {
              return (
                  <MediaBox class="responsive-img" src={gif.images.downsized.url} key={index} width="300"/>
              ) 
              }) : null 
            }
          </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default ResultsContainer;