const {
  register,
  move,
  scan,
  claim,
  mine,
  release
} = require('./cms');

let droneReg = null;
let droneStatus = null;
let activeStatus = null;
const callsign = 'test123';
const visited = { x: [], y: []} // was going to use this to make sure I don't visit the same coords twice

// prints current status
const currentStatus = () => {
  const { Claims, Id, Location, Score } = droneStatus.Status;
  const { Nodes } = droneStatus;

  const status = `
    *** Drone ${Id} Status ***
    Claims: ${ Claims.length ? Claims : 'N/A' }
    Location: (X:${Location['X']}, Y:${Location['Y']})
    Score: ${ Score }
    Nodes: ${ Nodes && Nodes.length ? Nodes : 'N/A' }
  `
  console.log(status)
}

// prompt function
const prompt = (prompt, cb) => {
  process.stdin.resume();
  process.stdout.write(prompt);
  process.stdin.on('data', (data) => {
    cb(data)
  });
}

// Drone's main function
const main = () => {

  // Check to see if we are registered. If not, prompt for a callsign (in progress)
  if (!droneReg) {
    console.log("Welcome to CMS services!")
    register(callsign)
      .then(res => droneStatus = res.data)
      // prompt for callsign
      // .then(() => {
      //   prompt('Please select a callsign...', (input) => {
      //     droneStatus.callsign = input;
      //   })
      // })
      .then(() => droneReg = true)
      .catch(err => console.error(err))
  }

  // 
  const mineNode = (callsign, node) => {
    mine(callsign, node.id)
      .then(res => {
        while (res.data.Nodes[0].Value > 0) {
          console.log('Value', res.data.Nodes[0].Value)
          mineNode(callsign, res.data.Nodes[0].Id)
        }
      })
  }

  if (droneStatus) {
    const { Claims, Location } = droneStatus.Status;

    currentStatus(); // log what the drone's current status is

    let newX = `${Location['X']+1}`;
    // will add newY after testing

    move(callsign, newX, `${Location['Y']}`)
      .then((res) => activeStatus = res.data)
      .then(() => scan(callsign))
      .then((res) => {
        activeStatus = res.data
        if (activeStatus.Nodes.length) {
          activeStatus.Nodes.forEach((node) => {
            if(!node.Claimed){
              claim(callsign, node.Id)
                .then(() => {
                  console.log("Mining on node: ", node.Id)
                  mine(callsign, node.Id)
                })
                .then(() => release(callsign, Claims[0]))
                .then(res => activeStatus = res.data)
            }
          })
        }
      })
      .then(() => {
        droneStatus = activeStatus
        activeStatus = null;
      })
  }

}

setInterval(main, 500);
