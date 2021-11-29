# optional-arguments.py

'''
python3 lib-argparse/optional-arguments.py
python3 lib-argparse/optional-arguments.py --name java -a 8
python3 lib-argparse/optional-arguments.py --age 8 --name java
python3 lib-argparse/optional-arguments.py --help
'''

import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--name')
parser.add_argument('-a','--age')
args = parser.parse_args()

print(args)
print(args.age)
