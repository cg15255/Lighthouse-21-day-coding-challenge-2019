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

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
]

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

const voter_signatures = [
  "Bill Billiamson",
  "Kate Etak",
  "Brandon Brandonus",
  "Fake McFakerson",
  "Jane Janesford"
]

const voter_ids = [
  "Bill Billiamson",
  "Kate Etak",
  "Brandon Brandonus",
  "Fake McFakerson",
  "Jane Janesford"
]

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
