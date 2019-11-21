# 2019 Lighthouse Labs 21 Day Coding Challenge
## I will be posting all of the challenges here and the solutions in the index.js file
#### **Note that I am using VS Code and have Prettier enabled and one of my Prettier rules is to remove semicolons. Please don't message me saying I forgot semicolons! :)

### Day 1:

#### Instructions:
Our challenge begins in Codeville, a small but thriving town in Serverside, Canada, where you are the current mayor nearing the end of your first term. Election season is nearing, and this town needs you, so you've decided to run for a second term. However, you need some help to make sure the election and your campaign run smoothly. Enter JavaScript, a coding language sure to help you optimize the many elements of the upcoming election and (hopefully) secure your return as Mayor.

As your election campaign ramps up, you plan to go door to door to talk to the citizens of Codeville. There are quite a few neighbourhoods in Codeville, but lucky for you, we have a dedicated crew of volunteers to help out. Being the fair Mayor that you are, you want to make sure the work is distributed evenly between the team. Let's figure out how many neighbourhoods each volunteer should visit.

Given an array of volunteer names and an array of neighbourhood names, complete the doorToDoor function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.

Examples
Input:

    const volunteers = [
      'Sally',
      'Jake',
      'Brian',
      'Hamid'
    ];


    const neighbourhoods = [
      'Central Valley',
      'Big Mountain',
      'Little Bridge',
      'Bricktown',
      'Brownsville',
      "Paul's Boutique",
      'Clay Park',
      'Fox Nest'
    ];

Output:
2

### Day 2:

#### Instructions
Given a question topic, complete a function interviewAnswer(topic) that returns your stance on that particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return "We'll have to get creative!"
When asked about the economy, the function should return "Time is money."
When asked about transportation, the function should return "It's going to be a long road, so we better get moving."
If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

Examples
Input:
const topic = 'economy'
Output:
Time is money.
Input:
const topic = 'transportation'
Output:
It's going to be a long road, so we better get moving.

### Day 3:

#### Instructions
When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

To test the system, we'll need to complete the function castVote(name, votes) that takes in the name of a candidate and an array of tallied votes. The function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

The first item in the array votes[0] are the votes for Tim
The second item in the arry votes[1] are the votes for Sally
The third item in the array votes[2] are the votes for Beth
For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

Examples
Input:

    const name = 'Sally';
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ]

Output:

    [
      0, // Tim
      3, // Sally
      1 // Beth
    ]
Input:

    const name = 'Tim';
    const votes = [
      1, // Tim
      1, // Sally
      2 // Beth
    ];

Output:

    [
      2, // Tim
      1 // Sally
      2 // Beth
    ]

### Day 4:

#### Instructions
Complete the function registerToVote(name, unregisteredVoters) that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

Examples
Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

Output:
['Jake', 'Alanna', 'Stephanie']

### Day 5:

#### Instructions
Complete the function chooseStations(stations) that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

Examples
Input:

    const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];

Output:
['Bright Lights Elementary', 'Moose Mountain Community Centre']

### Day 6:

#### Instructions
Complete the function voterTurnout(), that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return false. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the same names in the same order. If they are, our function should return "All clear, we can count the votes!", if they are not it should return "FRAUD!".

Examples
Input:

      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Fake McFakerson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

Output:
FRAUD!
Input:

      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

Output:
'All clear, we can count the votes!

### Day 7:

#### Instructions
We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

Our termTopics function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: smart city, arts funding, and then transportation.

Examples
Input:

    const interviews = [
      'smart city',
      'rebuild the lighthouse',
      'arts funding',
      'transportation',
      'arts funding',
      'rebuild the lighthouse',
      'sports funding',
      'tax cuts',
      'smart city',
      'arts funding',
      'smart city'
    ]

Output:

    [
      3, // smart city
      3, // arts funding
      1  // transportation
    ]

### Day 8

#### Instructions
We need to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted. Our function will receive two arguments. The first argument, trash, is a string that will tell our function what type of item is being submitted. The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and the return the newly updated object.

Examples
Input:

    const bins = {
        waste: 4,
        recycling: 2,
        compost: 5
    }

    const trash = 'recycling'

Output:
{
        waste: 4,
        recycling: 3,
        compost: 5
    }

### Day 9

#### Instructions
Complete the function, carPassing(cars, speed), that takes in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as our new element.

Examples
Input:

    const cars = [
      {
        time: 1568329654807,
        speed: 40,
      },
      {
        time: 1568329821632,
        speed: 42,
      },
      {
        time: 1568331115463,
        speed: 35
      }
    ]


   const speed = 38

Output:
[
      {
        time: 1568329654807,
        speed: 40,
      },
      {
        time: 1568329821632,
        speed: 42,
      },
      {
        time: 1568331115463,
        speed: 35
      },
      {
        time: 1568431216417,
        speed: 38
      }
    ]

### Day 10:

#### Instructions
We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles. Regular cars can only park in R spots. Small cars can park in R or S spots. Motorcycles can park in R, S, or M spots. In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

Examples
Input:

    const spots = [
      // COLUMNS ARE X
      //    0    1    2    3    4    5
          ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
          ['s', 'M', 's', 'S', 'R', 'M'], // 1
          ['s', 'M', 's', 'S', 'R', 'm'], // 2
          ['S', 'r', 's', 'm', 'R', 'M'], // 3
          ['S', 'r', 's', 'm', 'R', 'M'], // 4
          ['S', 'r', 'S', 'M', 'M', 'S'], // 5
      ]

      const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'

Output:
[4, 0]

### Day 11

#### Instructions

For this challenge, we'll implement a function called busTimes(). This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called buses, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a new object that shows how long until each bus arrives at the stop.

Examples
Input:

    const buses = {
      pickadilly: {
          distance: 10,
          speed: 5
      },
      uptown: {
          distance: 13,
          speed: 10
      }
    }

Output:

    {
      pickadilly: 2,
      uptown: 1.3
    }

### DAY 12

#### Instructions

For this challenge we will implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

Examples
Input:

    const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
    const threshold = 0.3

Output:
Polluted

### DAY 13

#### Instructions

We will be implementing this using three functions.

The first two functions will receive an array of objects that represent street lights which may be on or off.

Our first function, lightsOn, must set all of the lights to on and then return the array of lights.
The second function, lightsOff, must set all the lights to "off" and then return the array of lights.
The third function, toggleLights, will receive an array of many street lights, as well as a boolean value lightsAreOn which tells you whether or not all the lights are currently on. If lightsAreOn is true, your function should turn all of the lights off. If lightsAreOn is false, your function should turn all of the lights on.
Examples
Input:

    // for lightsOff() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]

Output:
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ],
Input:

    // for lightsOn() function
    const lights = [
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]

Output:
[
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]
Input:

    // for toggleLights() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]

    const lightsAreOn = true

Output:
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]

### Day 14

#### Instructions

We'll be implementing a function called dynamicPricing(), which will return the cost of a particular trip given the number of people on the bus, and the distance traveled by the passenger. This function receives two numbers: numberOfPeople and distanceTraveled.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your values must be shown to two decimal points of precision.

Examples
Input:

    const numberOfPeople = 15
    const distanceTraveled = 10

Output:
$3.50
Input:

    const numberOfPeople = 35
    const distanceTraveled = 5

Output:
$2.50

### Day 15:

#### Instructions

For this challenge you'll have to implement a function called finalPosition(), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.

Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0].

Examples
Input:

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

Output:
[-1, 4]

### Day 16

#### Instructions

We'll complete a function festivalColours() that calculates the split complementary colours for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the split complementary colours.

Examples
Input:

    const color1 = 100

Output:
[310, 250]

### Day 17

#### Instructions

For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

Examples
Input:

   const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ]

    const metric = 'redness'

Output:
Old Man Franklin

### Day 18:

#### Instructions

Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts.

Examples
Input:

// for bestOdds() function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
Output:
"You have the best odds of winning the red raffle."
Input:

// for countVotes() helper function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]
Output:

{
  red: 2,
  green: 2,
  blue: 1
}

### Day 19:

#### Instructions

Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

Examples
Input:

    const money = 9

Output:
[1, 1, 1, 48]

### Day 20

Instructions
Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

Examples
Input:

    const sphere = {
      type: 'sphere',
      radius: 2
    }

    sphereVolume(sphere.radius)

Output:
33.5102
Input:

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    coneVolume(cone.radius, cone.height)

Output:
47.12385
Input:

    const prism = {
      type: 'prism',
      height: 3,
      width: 4,
      depth: 5
    }

    prismVolume(prism.height, prism.width, prism.depth)

Output:
60
Input:

    const largeSphere = {
      type: 'sphere',
      radius: 40
    }

    const smallSphere = {
      type: 'sphere',
      radius: 10
    }

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    const duck = [
      largeSphere,
      smallSphere,
      cone
    ]

    totalVolume(duck)

Output:
272318.257




