# Design Decisions and Thoughts

- Debouncing for search- For the search bar I have used the concept of deouncing.When a user stops typing for a set amount of time, the debounce function postpones processing the keyup event. This significantly lowers the number of API calls made to our server and spares the UI code the need to process every event.
  A setTimeout function is basically used in this concept to delay the function call.
  I have used the external library lodash.debounce to perform this task.
  Working with useMemo to memoize a return value from our debounce method will be the first step. Between re-renders, this returned value will remain unchanged. This step is crucial because if we don't persist this data between re-renders, other debounce implementations will happen on each re-render and we'd essentially be back to our original example, where we'd be filtering a list per character instead after a set amount of time passed since the last character input.
  This improves the performance of the application by a great extent.

* Pagination - For pagination I have used the library provided by React the react-paginate.It provides a list of props for eg. like storing the pageCount or the active page etc.
  I have used the slice function by javascript to restrict the view of cards per page to only 16. This library provides an object selected.

* Code Structure for the Backend and Frontend has been fully designed keeping in mind the concurrency library and for production purposes.I have kept a server folder for the backend and it has its own package.json files.

* Express-Validator - For the backend I have used express Validator library to validate the params.I have also handled the error in the backend.

* Tailwind Css - I have tried to implement the application using Tailwind Css only except the react-paginate part where I had to use CSS.The pages are fully resposnive.

* Learning Curve - I would like to mention that I had a lot of fun building this web application from scratch. This proved to be a great learning curve for me as I have learned many new things while working on this project. From learning Tailwind CSS and also thinking best possible solutions to optimize my search implementation. Thanks for giving me this opportunity.
