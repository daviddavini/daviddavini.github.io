const fs = require('fs');
(() => {let stream = fs.createWriteStream("reading");
stream.once('open', function(fd) {
  data.forEach( d => { 
    if ("reading" in d) {
      stream.write(`${d.day}\n`); 
      d.reading.forEach( r => {
        stream.write(`${r.rating}\t${r.start}\t${r.end}\t${r.name}\n`); 
      })
      stream.write("\n");
    }
  });
  stream.end();
});})();
(() => {let stream = fs.createWriteStream("sleep");
stream.once('open', function(fd) {
  data.forEach( d => { 
    if ("sleep" in d) {
      stream.write(`${d.day}\n`); 
      d.sleep.forEach( r => {
        stream.write(`${r.start}\t${r.end}\n`); 
      })
      stream.write("\n");
    }
  });
  stream.end();
});})();
(() => {let stream = fs.createWriteStream("costs");
stream.once('open', function(fd) {
  data.forEach( d => { 
    if ("costs" in d) {
      stream.write(`${d.day}\n`); 
      d.costs.forEach( r => {
        stream.write(`${r.price.toFixed(2)}\t${r.type}\t${r.note}\n`); 
      })
      stream.write("\n");
    }
  });
  stream.end();
});})();
(() => {let stream = fs.createWriteStream("exercise");
stream.once('open', function(fd) {
  data.forEach( d => { 
    if ("exercise" in d) {
      stream.write(`${d.day}\n`); 
      d.exercise.forEach( r => {
        stream.write(`${r.minutes}\t${r.type}\t${r.intensity}\t${r.note}\n`); 
      })
      stream.write("\n");
    }
  });
  stream.end();
});})();
(() => {let stream = fs.createWriteStream("caffeine");
stream.once('open', function(fd) {
  data.forEach( d => { 
    if ("caffeine" in d) {
      stream.write(`${d.day}\n`); 
      d.caffeine.forEach( r => {
        if (!("serving" in r)) {
          r.serving = "1 count";
	}
        stream.write(`${r.amount}\t${r.type}\t${r.serving}\t${r.name}\n`); 
      })
      stream.write("\n");
    }
  });
  stream.end();
});})();
