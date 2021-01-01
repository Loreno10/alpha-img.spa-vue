# alpha-img - SPA

A simple web project that has one simple goal: provide a quick search of images
with transparent backgrounds. A good example of usage is for presentations that
require various images with transparent backgrounds, or product/company logos.

![alpha-img screenshot](docs/img/app_screenshot.png)

The project consists of two applicaitons:

- SPA built with [Vue.js 3](https://vuejs.org/) (**THIS REPO**)
- Web API built with [.NET 5](https://dotnet.microsoft.com/) (**TBD**)

The SPA communicates with the Web API to get the images. The only reason for
introducting the Web API (and not calling Google API directly) was to protect
the Google API Key. Initially, the WebAPI was not a part of the project, and the
SPA was communicating directly with the Google APIs (the service for that is in
the `src/services/direct-google-images-service.js` - it is not currently used).

## Features

- search for images using searchbar
- look through the results in a simple gallery, with pagination
- maximize the image by clicking on it or on the "eye" button
- copy the image into the clipboard with a click of a button
- open the image in its full size in another tab (again, with a click of a
  button)

The copy-to-clipboard functionality requires the SPA to download the images. To enable
that and get past CORS issues, the SPA needs some proxy service that will add
the rquired CORS headers to the GET request for each image. Currently, a
publicly available endpoint https://cors-anywhere.herokuapp.com/ is being used.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Configuration

To enable SPA and Web API to work together, you need to set the correct
`VUE_APP_API_BASE_URL` value in `.env`. It is the URL of your Web API
deployment.