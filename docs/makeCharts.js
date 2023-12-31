const origin = Date.parse('2023-08-19');
const ONE_DAY = 86400000;
const today = (new Date()).getTime();
let x = origin;
let full_data = [];
data.forEach(row => {
  t = Date.parse(row.day);
  while (x < t) {
    full_data.push({day: (new Date(x)).toLocaleDateString()});
    x += ONE_DAY;
  }
  full_data.push(row);
  x += ONE_DAY;
});
while (x+ONE_DAY < today) {
  full_data.push({day: (new Date(x)).toLocaleDateString()});
  x += ONE_DAY;
}
data = full_data;

data.forEach(row => {
  if (!("caffeine" in row)) {
    row.caffeine = []
  }
  if (!("reading" in row)) {
    row.reading = []
  }
  if (!("exercise" in row)) {
    row.exercise = []
  }
  if (!("sleep" in row)) {
    row.sleep = []
  }
  if (!("costs" in row)) {
    row.costs = []
  }
});

data.forEach(row => row.sleep.forEach(x => {
  let [sh, sm] = x.start.split(':');
  let [eh, em] = x.end.split(':');
  x.duration = ((+eh)*60+(+em) - (+sh)*60+(+sm));
  x.duration = x.duration>0 ? x.duration : x.duration+24*60;
}))

function makeChart(params) {
  Chart.defaults.color = "rgb(0,200,80)";
  Chart.defaults.font.family = 'Courier New, monospaced'
    Chart.defaults.font.weight = 'bold'
  Chart.defaults.font.size = 15
  Chart.defaults.animation.duration = 2000;
  new Chart(
    document.getElementById(params.id),
    {
      type: 'bar',
      options: {
        elements: {
          bar: {
            backgroundColor: 'rgb(0,120,40)',
          },
        },
        clip: false,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: params.label,
            font: {
              size: 20,
            },
          },
          annotation: {
            annotations: {
              pass_line: {
                type: 'line',
                yMin: params.pass,
                yMax: params.pass,
                borderColor: 'rgb(255,255,0,0.5)',
                borderWidth: 4,
                borderDash: [4],
              },
              goal_line: {
                type: 'line',
                yMin: params.goal,
                yMax: params.goal,
                borderColor: 'rgb(255,255,0,0.5)',
                borderWidth: 4,
              },
            }
          }
        }
      },
      data: {
        labels: data.map(row => row.day),
        datasets: params.groups.map((group, i) => ({
            label: group,
            data: data.map(row => {
              const group_data = row[params.field].filter(x => group == x.type);
              return group_data.reduce((a, b) => a + params.amount_func(b), 0);
            }),
            backgroundColor: get_color(params.palette, i),
            borderColor: "rgb(0,100,40)",
            borderWidth: 4,
          })
        ),
      },
    }
  );
}
COLORS = {
  bad: [
    "#00FF00",
    "#006094",
    "#00C03B",
    "#0040B1",
    "#00A059",
    "#0020CE",
  ],
  good: [
    "#00FF00",
    "#006094",
    "#00C03B",
    "#0040B1",
    "#00A059",
    "#0020CE",
  ],
}
function get_color(palette, i) {
  const colors = COLORS[palette];
  return colors[i % colors.length]
}
const caffeine_params = {
  id: 'caffeine',
  field: 'caffeine',
  goal: 30,
  pass: 115,
  palette: 'bad',
  label: 'caffeine (mg)'.toUpperCase(),
  amount_func: x => x.amount,
  groups: ["energy drink", "coffee", "black tea", "green tea"],
}
makeChart(caffeine_params);
const reading_params = {
  id: 'books',
  field: 'reading',
  goal: 100,
  pass: 50,
  palette: 'good',
  label: 'books (pages)'.toUpperCase(),
  amount_func: b => b.end - b.start,
  groups: ["computer science", "political science", "engineering"],
}
makeChart(reading_params);
const exercise_params = {
  id: 'exercise',
  field: 'exercise',
  goal: 3*60,
  pass: 60,
  palette: 'good',
  label: 'exercise (mins)'.toUpperCase(),
  amount_func: b => b.minutes,
  groups: ["bike", "walk", "stand"],
}
makeChart(exercise_params);
const sleep_params = {
  id: 'sleep',
  field: 'sleep',
  goal: 9*60,
  pass: 7*60,
  palette: 'good',
  label: 'sleep (mins)'.toUpperCase(),
  amount_func: b => b.duration,
  groups: ["night"],
}
makeChart(sleep_params);
const costs_params = {
  id: 'costs',
  field: 'costs',
  goal: 50,
  pass: 100,
  palette: 'bad',
  label: 'expenses ($)'.toUpperCase(),
  amount_func: b => b.price,
  groups: ["housing", "food", "transport"],
};
makeChart(costs_params);
