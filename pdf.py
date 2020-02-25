import os
import argparse
ap = argparse.ArgumentParser()
ap.add_argument("-p", "--finalPage", type=int, required=True,
	help="What is the finalPage? (Enter -p [finalPage])")
args = vars(ap.parse_args())
final = args["finalPage"]
command = 'img2pdf ';
for i in range(1,final+1):
	command+='p_'+str(i)+'.jpg '
command+= '-o book.pdf'
os.system(command)
