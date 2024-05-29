import sys
import json
import sympy as sp
from latex2sympy2 import latex2sympy, latex2latex

jsonData0 = r'{"equation":"y = \\sqrt{x} - 2","x1":97,"y1":-1.5,"x2":1,"y2":-48.5}'
jsonData1 = r'{"equation":"y = \\sqrt{x - 2}","x1":58.5,"y1":0.5,"x2":118.5,"y2":42.5}'
jsonData2 = r'{"equation":"y = - \\sqrt{x}","x1":85.5,"y1":-46,"x2":3.5,"y2":-12}'
jsonData3 = r'{"equation":"y = \\sqrt{-x}","x1":-0.5,"y1":12.5,"x2":-79.5,"y2":49.5}'
jsonData4 = r'{"equation":"y = \\sqrt{x}","x1":85.5,"y1":48.5,"x2":7.5,"y2":16.5}'
jsonData5 = r'{"equation":"y = 2 \\sqrt{x}","x1":55,"y1":84.5,"x2":2,"y2":21.5}'
jsonData6 = r'{"equation":"y = x^2","x1":10,"y1":0,"x2":-61,"y2":149}'
jsonData7 = r'{"equation":"y = (x + 3)^2 + 1","x1":-23.5,"y1":151,"x2":-131.5,"y2":148}'
jsonData8 = r'{"equation":"y = \\sin(x)","x1":-160.5,"y1":-21,"x2":143.5,"y2":11}'

# 0: {"x": 25.66064861813475, "y": 26.905709982731338}
# 1: {"x": 29.245847176079735, "y": 29.669850016473006}
# 7: {"x": 25.9444824525229, "y": 28.036916408186016}

data = json.loads(jsonData8)

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
print(sol)
res = { "x": float(sol[0][0]), "y": float(sol[0][1]) }
y = json.dumps(res)
print(y)
# # num_sol = [(s[0].evalf(n=10), s[1].evalf(n=10)) for s in sol]
# # print(num_sol)
#   except:
#     print('{ "error": "no" }')
