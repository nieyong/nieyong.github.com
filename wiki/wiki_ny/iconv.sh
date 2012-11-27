#!/bin/bash  
find . -type f -name "*.wiki" -exec iconv -f gb2312 -t utf8 '{}' -o ../webutf/tmp.wiki \;  -exec mv ../webutf/tmp.wiki ../webutf/'{}' \;  
