let data = [
  { 
    day: '2023-08-19',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
    ],
  },
  { 
    day: '2023-08-20',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'green tea',
        name: 'Bigelow Green Tea',
        serving: '2 steeps',
        amount: 45,
      },
      {
        type: 'green tea',
        name: 'Bigelow Green Tea',
        serving: '2 steeps',
        amount: 45,
      },
    ],
  },
  { 
    day: '2023-08-21',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
    ],
  },
  { 
    day: '2023-08-22',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
    ],
  },
  { 
    day: '2023-08-23',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
      {
        type: 'green tea',
        name: 'Cold Brew Green Tea Bags',
        serving: '2 steeps',
        amount: 75,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'bike',
        note: 'to/from Elysian Park',
        minutes: 10+10+15+10,
        intensity: 'high',
      },
    ],
  },
  { 
    day: '2023-08-24',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
      {
        type: 'green tea',
        name: 'Cold Brew Green Tea Bags',
        serving: '2 steeps',
        amount: 75,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'bike',
        note: 'to/from Elysian Park',
        minutes: 10+10+15+10,
        intensity: 'high',
      },
    ],
  },
  { 
    day: '2023-08-25',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'energy drink',
        name: 'Celsius Tropical Vibe',
        amount: 200,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
    ],
    exercise: [
      {
        type: 'walk',
        note: 'to work',
        minutes: 10,
        intensity: 'medium',
      },
      {
        type: 'walk',
        note: 'bar crawl',
        minutes: 15,
        intensity: 'low',
      },
    ],
  },
  { 
    day: '2023-08-26',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
    ],
    reading: [
      {
        type: 'computer science',
        name: 'Mastering Regular Expressions',
        start: 1,
        end: 68,
        rating: 5,
      },
      {
        type: 'political science',
        name: 'The Autobiography of Malcolm X',
        start: 171,
        end: 183,
        rating: 3,
      },
    ],
  },
  { 
    day: '2023-08-27',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'green tea',
        name: 'Bigelow Green Tea',
        serving: '3 steeps',
        amount: 45,
      },
    ],
    reading: [
      {
        type: 'computer science',
        name: 'Mastering Regular Expressions',
        start: 68,
        end: 92,
        rating: 4,
      },
      {
        type: 'political science',
        name: 'The Autobiography of Malcolm X',
        start: 183,
        end: 218,
        rating: 4,
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '21:30',
        end: '23:30',
      },
      {
        type: 'night',
        start: '02:00',
        end: '08:00',
      },
    ],
  },
  { 
    day: '2023-08-28',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2.5 tsp',
        amount: 150,
      },
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
    ],
    reading: [
      {
        type: 'computer science',
        name: 'Mastering Regular Expressions',
        start: 92,
        end: 95,
        rating: 3,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'bike',
        note: 'to/from Elysian Park',
        minutes: 10+10+15+10,
        intensity: 'high',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '03:00',
        end: '08:15',
      },
    ],
  },
  { 
    day: '2023-08-29',
    caffeine: [
      {
        type: 'energy drink',
        name: 'Celsius Peach Vibe',
        amount: 200,
      },
      {
        type: 'black tea',
        name: 'Twinnings Chai Tea',
        serving: '3 steeps',
        amount: 75,
      },
    ],
    reading: [
      {
        type: 'engineering',
        name: 'Inventive Wizard: George Westinghouse',
        start: 11,
        end: 54,
        rating: 5,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'walk',
        note: 'to/from bus, around Beverly Hills',
        minutes: 10+10+15+10,
        intensity: 'medium',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '02:00',
        end: '07:30',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
      {
        type: 'transport',
        note: 'bus',
        price: 1.75,
      },
    ],
  },
  { 
    day: '2023-08-30',
    caffeine: [
      {
        type: 'coffee',
        name: 'Oro Instant Coffee',
        serving: '2 tsp',
        amount: 120,
      },
      {
        type: 'coffee',
        name: 'Cafe Alexander Large Coffee',
        serving: '24 oz',
        amount: 280,
      },
      {
        type: 'energy drink',
        name: 'Celsius Arctic Vibe',
        amount: 200,
      },
    ],
    reading: [
      {
        type: 'computer science',
        name: 'Django Unleashed',
        start: 31,
        end: 48,
        rating: 4,
      },
      {
        type: 'computer science',
        name: 'Django Unleashed',
        start: 765,
        end: 767,
        rating: 4,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'walk',
        note: 'to metro+bus, to bofa, to cu, to rp, to cu, to rp, to/from bus',
        minutes: 5+5+15+20+20+20+10,
        intensity: 'medium',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '02:15',
        end: '07:00',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
      {
        type: 'food',
        note: 'lunch at cafe alexander, snack at cafe alexandar',
        price: 21.90+15.81,
      },
    ],
  },
  { 
    day: '2023-08-31',
    caffeine: [
      {
        type: 'coffee',
        name: 'freshly-ground coffee beans',
        serving: '12g',
        amount: 75*2.6,
      },
      {
        type: 'energy drink',
        name: 'Celsius Tropical Vibe',
        amount: 200,
      },
    ],
    reading: [
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'bike',
        note: 'to/from bank',
        minutes: 35,
        intensity: 'medium',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '02:40',
        end: '08:40',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
    ],
  },
  { 
    day: '2023-09-01',
    caffeine: [
      {
        type: 'coffee',
        name: 'freshly-ground coffee beans',
        serving: '5g',
        amount: 75,
      },
      {
        type: 'energy drink',
        name: 'Celsius Arctic Vibe',
        amount: 200,
      },
    ],
    reading: [
      {
        type: 'engineering',
        name: 'Inventive Wizard: George Westinghouse',
        start: 54,
        end: 60,
        rating: 4,
      },
      {
        type: 'political science',
        name: 'The Autobiography of Malcolm X',
        start: 218,
        end: 232,
        rating: 4,
      },
    ],
    exercise: [
      {
        type: 'bike',
        note: 'to/from work',
        minutes: 10+10,
        intensity: 'medium',
      },
      {
        type: 'walk',
        note: 'to airport',
        minutes: 30,
        intensity: 'medium',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '00:15',
        end: '06:15',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
      {
        type: 'transport',
        note: 'FlyAway bus to LAX',
        price: 9.75,
      },
    ],
  },
  { 
    day: '2023-09-02',
    caffeine: [
      {
        type: 'energy drink',
        name: 'Celsius Arctic Vibe',
        amount: 200,
      },
    ],
    reading: [],
    exercise: [
      {
        type: 'walk',
        note: 'hike Mt. Lassen',
        minutes: 110,
        intensity: 'medium',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '23:00',
        end: '7:30',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
      {
        type: 'food',
        note: 'naked green juice',
        price: 4.75,
      },
    ],
  },
  { 
    day: '2023-09-03',
    caffeine: [
      {
        type: 'coffee',
        name: 'Homemade Drip Coffee',
        amount: 100*3,
      },
    ],
    reading: [],
    exercise: [
      {
        type: 'stand',
        note: 'at bookstore, at party',
        minutes: 120,
        intensity: 'low',
      },
    ],
    sleep: [
      {
        type: 'night',
        start: '22:30',
        end: '6:50',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
    ],
  },
  { 
    day: '2023-09-04',
    caffeine: [
      {
        type: 'energy drink',
        name: 'Starbucks Doubleshot Energy Espresso Mocha',
        amount: 135,
      },
      {
        type: 'coffee',
        name: 'Southwest complementary coffee',
        amount: 90,
      },
      {
        type: 'energy drink',
        name: 'Celsius Sparkling Kiwi Guava',
        amount: 200,
      },
    ],
    reading: [
      {
        type: 'political science',
        name: 'The Autobiography of Malcolm X',
        start: 232,
        end: 269,
        rating: 4,
      },
    ],
    exercise: [
      {
        type: 'walk',
        note: 'at airports, to home',
        minutes: 15+30,
        intensity: 'low',
      },
    ],
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
      {
        type: 'food',
        note: 'starbucks energy drink',
        price: 6.02,
      },
      {
        type: 'transport',
        note: 'FlyAway bus to LAX',
        price: 9.75,
      },
    ],
  },
];
