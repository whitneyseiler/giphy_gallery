# giphy_gallery
Completed as a coding challenge for Shift.org

# How to Run Locally
1. Get a Giphy API Key [here](https://developers.giphy.com/dashboard/?create=true).
2. Install dependencies: `-npm install`
3. Run React Webpack: `-npm run react-dev`,
4. Start server: `-npm server`

To start, in your browser navigate to: http://localhost:3000

# Notes on functionality:
* App loads trending GIFs upon component mount
* Infinite Scroll has been implemented.
  * Due to GIF sizes, the scrolling is not as smooth as I would have preferred
* Search Bar queries can be submitted by hitting the enter key
  * Search results take a moment to render - I would have liked to solve this given more time. 
* Clicking App title refreshes page to home
* Gallery is responsive to window size

# Known issues / changes I would have made given more time: 
- [x] Implement Infinite Scroll
- [ ] Address load time / performance issues
- [ ] Fix buggy Infinite Scroll on search results
- [ ] Add suggested search query/GIF category (e.g. 'reactions', 'sports', etc.) links to nav bar
- [ ] Sort GIFs by upload date
- [ ] Allow user to sort by ascending or descending date
