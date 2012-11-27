#!/usr/bin/python
# -*- coding:UTF-8 -*-
import glob,os
import shutil

def date_cmp(x,y):
	return os.path.getmtime(x) > os.path.getmtime(y) and -1 or 1

file_names=glob.glob('*.wiki')
file_names_sort=sorted(file_names,cmp=date_cmp)

f=open('new_wikiword.wiki','w')
name=""
print >>f,'这是使用new_wikiword.py脚本自动生成，汇集了本wiki中所有的wiki条目，并且按照修改时间递减排序。'
for file_name in file_names_sort:
    splited_name= file_name.rsplit('.',1)
    name=splited_name[0]
    print >>f,'# [['+name+']]'
f.close()


