import json
from cnstd import LayoutAnalyzer

# sample_ids = [1, 2, 3, 4]
num = 10
sample_ids = list(range(1, num+1))
path = 'public/sample'

for sample_id in sample_ids:
  img = path + '/sample-{:02d}.jpg'.format(sample_id)
  out = path + '/math-{:02d}.json'.format(sample_id)
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