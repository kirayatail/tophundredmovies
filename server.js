require('dotenv').config();
const express = require('express');
const tmdb = require('tmdbv3').init(process.env.TMDB_API_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/api/movies', (req, res) => {
  Promise.all(([1,2,3,4,5]).map(popularPromise)).then(pages => {
    // Yeah... This is super fast, so I added some Zen
    setTimeout(() => {
      res.send(pages.map(page => page.results).flat());
    }, 3000);
  })
});

app.listen(port, () => {
  console.log('Server on port', port);
})

function popularPromise(page) {
  const promise = new Promise((resolve, reject) => {
    tmdb.misc.popular(page, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  });
  return promise;
} 