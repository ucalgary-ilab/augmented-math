import json
from cnstd import LayoutAnalyzer

# test_ids = [1, 2, 3, 4]
tid = 14
num = 10
test_ids = list(range(1, num+1))
path = 'public/test/test/test-'+str(tid)

for test_id in test_ids:
  img = path + '/test-'+str(tid)+'-{:02d}.jpg'.format(test_id)
  out = path + '/math-'+str(tid)+'-{:02d}.json'.format(test_id)
  analyzer = LayoutAnalyzer('mfd')
  equations = analyzer.analyze(img)

  items = []
  for equation in equations:
    item = {
      'type': equation['type'],
      'bbox': equation['box'].tolist(),
      'score': equation['score'],
    }
    items.append(item)

  with open(out, 'w') as file:
    json.dump(items, file, indent=2)