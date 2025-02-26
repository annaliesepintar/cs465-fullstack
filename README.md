# cs465-fullstack
CS-465 Full Stack Development with MEAN


## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
  For the customer facing application, we used HTML to create the views for each page. We also used handlebars to implement dynamic elements. JavsScript and express were used to create the routes which organize API endpoints and handle HTTP requests from the client. The admin SPA application works differently. The SPA application is comprised of several components. Each component has an html file for the view of that component. Rather than using handlesbars for the dynamic elements, Angular is used. 
  The backend uses a NoSQL MongoDB database because MongoDB allows for flexible schemas, scales horizontally, and is faster for high write loads. The schema flexibility will allow for easier adding or subtracting fields if the required data changes. Scaling horizontally is important because the application needs to be able to handle the higher traffic during the times of the year more people would be planning their vacations like during the holiday season. MongoDBs ability to handle higher write loads is important because the application has several functions that require adding new data to the database. 

## Functionality
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  JSON is a data interchange format while Javascript is a programming language. JSON ties together the frontend and backend development pieces in several ways. It is apart of API communication because when Angular frontend makes HTTP requests to Express backend endpoints, data is sent and received as JSON. Also, MongoDB stores data in Binary JSON. Along with that, many of the configuration files for both frontend and backend use JSON format. Data is also returned from REST APIs in JSON.
  One instance where I refactored code to improve functionality and efficiencies would be when I created header and footer handlebar partials. The header and footer was the same for several pages so by creating partials, the code was less redundant. Also, I added conditional logic for both the header and the footer so that the current element indicates the page that is currently being viewed. 
  Reusable user interface components can make development faster. By making components that are reusable, you can reuse the component in multiple locations rather than writing code for the same functionality over and over again. Overall, it simplifies development.

## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
  Methods are written for requesting and retrieving data. API endpoints allow the front end to communicate with the backend. Sometimes certain functions need to be limited to only those with authorization (like how adding or updating trips requires authorization) so security measures are added. This can make testing endpoints complicated because you need a token generated to make some requests. Postman makes it possible to use the generated token to ensure authorization so you can test the API endpoints that are limited by security. 

## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
  This course has helped me learn new programming languages, different web application architectures, and how to approach full stack development. I gained experience with JavaScript and HTML. I also learned how to create web applications with an MVC or SPA architectures.
