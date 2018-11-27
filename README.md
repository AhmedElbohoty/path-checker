# Path Checker

## Purpose

The purpose of this simple repo is to check if a list of URLs in a provided folder are 200s or not.
This is useful if you mined a set of URLs for a sitemap but need to make sure that the results provides a 202 response, as opposed to 404s, 301s, 500s, etc.

## Installation and Usage

To install this repo, simply clone it and you should be good. The code is quite simple.

1- Write your URLs files in a file.
The app will use `paths.yml` file as a default. Unless, you specify another file.

In path-checker.js file, pass the file name to initiate();

```js
initiate(fileName);
```

2- run `node path-checker.js` in your terminal.

---

Please note that `paths.yml` requires a very specific format:

```yml
www.example1.com
www.example2.com
www.example3.com/this-does-not-exist
```

The failing results will be added to `failure.yml`, while the succeeding results will be added to `success.yml`

## Development

Feel free to contribute and make this more robust! This was a very scrappy project to check if a set of URLs were good.
