function myChart(data, goal) {
  new Chart(
    document.getElementById('caffeine'),
    {
      type: 'bar',
      options: {
        animation: false,
        plugins: {
	  annotation: {
            annotations: {
              line: {
                type: 'line',
		yMin: goal,
                yMax: goal,
              }
            }
          }
        }
      },
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: 'Caffeine consumption (in mg\'s)',
            data: data.map(row => row.amount)
          }
        ]
      }
    }
  );
}
