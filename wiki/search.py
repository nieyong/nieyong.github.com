#!/usr/bin/env python
#encoding=utf-8
#file_name=search.py
import glob
import sys
import os
import time
 
def search(wiki_name):
    file_names=glob.glob('*%s*.wiki'%wiki_name)
    files_info={}
    for i in file_names:
	modify_time=time.localtime(os.path.getmtime(i))
	files_info[i]=modify_time
    return files_info

def write_result(files_info, print_time=False):
    files_info_sorted=sorted(files_info.items(), key=lambda by:by[1], reverse=True)

    f=open('search.wiki','w')
    name=""
    print >>f,'%nohtml'
    for file_info in files_info_sorted:
	splited_name= file_info[0].rsplit('.',1)
	name=splited_name[0]
	if(print_time):
	    print >>f,'* [['+name+']]'+'    '+time.strftime("%Y年%m月%d日 %H:%S", file_info[1])
	else:
	    print >>f,'* [['+name+']]'
    f.close()

if __name__=='__main__':
    args=sys.argv
    if(len(args)==1):
	print '请输入要查找的 wiki 关键字'
    elif(len(args)>2):
	wiki_name=args[1]
	files_info=search(wiki_name)
	if(args[2]=='time'):
	    write_result(files_info, True)
	else:
	    write_result(files_info)
    elif(len(args)==2):
	wiki_name=args[1]
	files_info=search(wiki_name)
	write_result(files_info)
