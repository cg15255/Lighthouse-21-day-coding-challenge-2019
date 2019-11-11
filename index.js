// DAY 1
const doorToDoor = (volunteers, neighbourhoods) => {
  const numVolunteers = volunteers.length
  const numNeighbourhoods = neighbourhoods.length
  return numNeighbourhoods / numVolunteers
}

// DAY 2
const interviewAnswer = topic => {
  // Transform text to lower case to account for capital letters in function call.
  const topicTransformed = topic.toLowerCase()
  if (topicTransformed === "arts funding") {
    return "We'll have to get creative!"
  } else if (topicTransformed === "economy") {
    return "Time is money."
  } else if (topicTransformed === "transportation") {
    return "It's going to be a long road, so we better get moving."
  } else {
    return "QUACK!"
  }
}

// DAY 3
const castVote = (name, votes) => {
  if (name === "Tim") {
    votes[0]++
  }
  if (name === "Sally") {
    votes[1]++
  }
  if (name === "Beth") {
    votes[2]++
  }
  return votes
}

// DAY 4
const registerToVote = (name, unregisteredVoters) => {
  const filteredArray = unregisteredVoters.filter(voter => voter !== name)
  return filteredArray
}

// DAY 5

const chooseStations = stations => {
  const acceptableStations = stations
    .filter(
      ([name, capacity, venue]) =>
        capacity >= 20 && (venue === "school" || venue === "community centre")
    )
    .map(station => station[0])
  return acceptableStations
}

// DAY 6

const voterTurnout = (voter_signatures, voter_ids) => {
  let signaturesMatchIds = true

  // Check if array lengths match, if not return false
  if (voter_signatures.length !== voter_ids.length) {
    return false
  }
  // Loop through one of the arrays and check if each entry matches the other array
  voter_signatures.forEach((signature, i) => {
    if (signature !== voter_ids[i]) {
      // Set control variable to false if any array entries don't match
      signaturesMatchIds = false
    }
  })
  if (signaturesMatchIds) {
    return "All clear, we can count the votes!"
  } else {
    return "FRAUD!"
  }
}

// DAY 7

const termTopics = interviews => {
  const totals = interviews.reduce(
    (totals, interview) => {
      if (interview === "smart city") {
        totals[0]++
      }
      if (interview === "arts funding") {
        totals[1]++
      }
      if (interview === "transportation") {
        totals[2]++
      }
      return totals
    },
    [0, 0, 0]
  )
  return totals
}

// DAY 8

const smartGarbage = (trash, bins) => {
  bins[trash]++
  return bins
}

// DAY 9

const carPassing = (cars, speed) => {
  const newCars = [
    ...cars,
    {
      time: Date.now(),
      speed
    }
  ]
  return newCars
}

// DAY 10

const whereCanIPark = (spots, vehicle) => {
  const availableSpots = []
  // Double forEach loop to loop through each row and push the x-y coordinates if a spot is available
  spots.forEach((spotRow, y) => {
    spotRow.forEach((spotCol, x) => {
      if (vehicle === "regular" && spotCol === "R") {
        availableSpots.push([x, y])
      } else if (vehicle === "small" && (spotCol === "R" || spotCol === "S")) {
        availableSpots.push([x, y])
      } else if (
        vehicle === "motorcycle" &&
        (spotCol === "R" || spotCol === "S" || spotCol === "M")
      ) {
        availableSpots.push([x, y])
      }
    })
  })
  if (availableSpots.length === 0) {
    // No available spots
    return false
  } else {
    // Since the question doesn't specify which value you return as long as it is valid, return the first value.
    return availableSpots[0]
  }
}
