/* Setting up the Mars Mining Corporation's simulated Central Mining Service */

const axios = require('axios');

let cms = axios.create({
  proxy: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT
  }
})

/* Breaking out each of the individual API calls */

// Register to the CMS server
const register = (callsign) => {
  return cms.post('/register', { callsign })
    .catch(err => console.log(err))
}

// Move drone with (x,y) coords
const move = (callsign, x, y) => {
  return cms.post('/move', { callsign, x, y })
    .catch(err => console.log(err))
}

// Scan for nodes in a 5x5 radius
const scan = (callsign) => {
  return cms.post('/scan', { callsign })
    .catch(err => console.log(err))
}

// Claim a node in our scan range
const claim = (callsign, node) => {
  return cms.post('/claim', { callsign, node })
    .catch(err => console.log(err))
}

// Mine our current claimed node
const mine = (callsign, node) => {
  return cms.post('/mine', { callsign, node })
    .catch(err => console.log(err))
}

// Release our claimed node
const release = (callsign, node) => {
  return cms.post('/release', { callsign, node })
    .catch(err => console.log(err))
}

module.exports = {
  register,
  move,
  scan,
  claim,
  mine,
  release
};