# positional-arguments.py

'''
python3 lib-argparse/positional-arguments.py
python3 lib-argparse/positional-arguments.py 8
python3 lib-argparse/positional-arguments.py --help
'''

import argparse
parser = argparse.ArgumentParser()
parser.add_argument('integers')
parser.add_argument('float')
args = parser.parse_args()

print(args)
print('', args.integers)
