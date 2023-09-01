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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
        type: 'computer programming',
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
        type: 'computer programming',
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
        type: 'computer programming',
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
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
        type: 'computer programming',
        name: 'Django Unleashed',
        start: 31,
        end: 48,
        rating: 4,
      },
      {
        type: 'computer programming',
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
    costs: [
      {
        type: 'housing',
        note: 'rent for orlando',
        price: 1300/30.5+75/69,
      },
    ],
  },
];
