import { PythonShell } from 'python-shell'
const pyshell = new PythonShell('test.py');

const data = {
  equation: 'y = \\sqrt{x} - 2',
  x1: 97,
  y1: -1.5,
  x2: 1,
  y2: -48.5
}

pyshell.send(JSON.stringify(data), { mode: 'json' })

pyshell.on('message', (result) => {
  result = JSON.parse(result)
  console.log(result);
  // res.send(results);
})

pyshell.end((err) => {
  // if (err) res.send("Error : ", err);
})