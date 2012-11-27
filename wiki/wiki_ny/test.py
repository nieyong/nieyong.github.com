import glob
import shutil
import sys
 
args=sys.argv
search=args[1]

file_names=glob.glob('*.wiki')
 
f=open('search.wiki','w')
dstFp = open('readminewiki.wiki','w')

name=""
print >>f,'%nohtml'
for file_name in file_names:
    splited_name= file_name.rsplit('.',1)
    name=splited_name[0]
    index=name.find(search)
    if(index!=-1):
        print >>f,'[['+name+']]'
f.close()
