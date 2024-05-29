import sys
import json
import sympy as sp
from latex2sympy2 import latex2sympy, latex2latex

# { "equation": "y = \\sqrt{x} - 2", "x1": 97, "y1": -1.5, "x2": 1, "y2": -48.5 }
while True:
  try:
    print('{ "receive": "ok" }')
    jsonData = input()
    data = json.loads(jsonData)

    equation = data['equation']
    a, b = sp.symbols('a b')
    x, y = sp.symbols('x y')
    x1 = data['x1']/a
    y1 = data['y1']/b
    x2 = data['x2']/a
    y2 = data['y2']/b

    exp = latex2sympy(equation)
    exp = sp.Eq(y, exp)

    eq1 = exp.subs({'x': x1, 'y': y1})
    eq2 = exp.subs({'x': x2, 'y': y2})

    sol = sp.solve([eq1, eq2], (a, b))
    print('{ "processing": "ok" }')
    # res = { "x": str(sol[0][0]), "y": str(sol[0][1]) }
    # y = json.dumps(res)
    # print(y)
    # num_sol = [(s[0].evalf(n=10), s[1].evalf(n=10)) for s in sol]
    # print(num_sol)
  except:
    print('{ "error": "no" }')
