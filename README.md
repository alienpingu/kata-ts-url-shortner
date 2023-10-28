# URL-hortener-ts-node-jest

## Installation Instructions

```JavaScript
npm install
npm run dev     //run in development mode
npm run test    //run tests
npm run build   //build ./dist bundle
npm start       //run javascript bundle
```
# URL Shortener

## Description
Create a library that can shorten long URLs, similar to services like [https://goo.gl/](https://goo.gl/). The library should provide the following functionalities:

1. **Shorten URL:** The library should have a method that accepts a long URL and returns the shortened URL.
2. **Translation:** The library should provide a `translate` method that can handle both long and short URLs and return the corresponding shortened URL.
3. **Tracking:** Keep track of the number of times each short URL is accessed.
4. **Statistics:** Implement a `statistics` method that, when called with either a long or short URL, displays the short URL, the long URL, and the number of times the short URL has been accessed.

## Implementation Details

- The library should use an in-memory data store (e.g., a dictionary) to manage the short URLs.
- Bonus: Implement error handling for invalid URLs.
- Bonus: Detect duplicate long URLs and return the existing short URL instead of creating a duplicate.
- Bonus: Record the date and time of each access to a short URL via the `translate` method.
- Bonus: Create a `log` method that is similar to the `statistics` method. It should print the short and long URLs along with the number of times they were accessed, as well as a complete history of all accesses.

Remember to focus on functionality, and ensure that the library provides robust URL shortening capabilities.

[Source](https://www.tddbuddy.com/katas/url-shortener.html)