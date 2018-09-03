import React from 'react';
import {MediaBox} from 'react-materialize';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Waypoint from 'react-waypoint';

let ResultsContainer = ({results, route, fetchMore}) => {

  return (
    <div id="results-container" style={{margin: 10}}>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 1000: 4}} className="results-masonry">
          <Masonry columnsCount={4} gutter={"0"} children={results}>
            {results.map((gif, index) => {
              let caption = `${gif.title}, rating: ${gif.rating}`; 

              return (
                <div key={index} id="image-box">
                  <MediaBox 
                    className="responsive-img" 
                    src={gif.images.fixed_width.url}
                    caption={caption}
                    width="300" 
                    style={{padding: 10}}
                  />
                </div>
              )
            })}
            <Waypoint
              onEnter={() => fetchMore(route)}
            />
          </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default ResultsContainer;