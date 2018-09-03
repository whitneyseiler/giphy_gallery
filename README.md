# giphy_gallery
Completed as a coding challenge for Shift.org

# How to Run Locally
1. Install dependencies: `-npm install`
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm server`

To start, in your browser navigate to: http://localhost:3000

# Notes on functionality:
* App loads trending GIFs upon component mount
* Infinite Scroll has been implemented.
  * Due to GIF sizes, the scrolling is not as smooth as I would have preferred
* Search Bar queries can be submitted by hitting the enter key
  * Search results take a moment to render - I would have liked to solve this given more time. 

# Changes I would have made given more time: 
- [x] Implement Infinite Scroll
- [ ] Sort GIFs by upload date
- [ ] Allow user to sort by ascending or descending date
- [ ] Address load time / performance issues
- [ ] Fix buggy Infinite Scroll on search results
