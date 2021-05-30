import sys
import json
n = 0
odds = []
i = 1
while n < 20:
    if i % 2 != 0:
        odds.insert(0, i)
        n+=1
    i+=1
lux = "LuxPMsoft"
res = "L"
for j in range(0,8):
    res = res + str(odds[j]) + lux[j+1]
res = json.dumps(res)
print(res)
sys.stdout.flush()