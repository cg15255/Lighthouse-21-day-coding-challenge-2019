// DAY 1
const doorToDoor = (volunteers, neighbourhoods) => {
  const numVolunteers = volunteers.length
  const numNeighbourhoods = neighbourhoods.length
  return numNeighbourhoods / numVolunteers
}

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
