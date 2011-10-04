#!/usr/bin/python
# -*- coding:UTF-8 -*-
 
import glob
import shutil

file_names=glob.glob('*.wiki')

f=open('wikiword.wiki','w')
name=""
print >>f,'这是使用wikiword.py脚本自动生成，汇集了本wiki中所有的wiki条目。'
for file_name in file_names:
    splited_name= file_name.rsplit('.',1)
    name=splited_name[0]
    print >>f,'# [['+name+']]'
f.close()
