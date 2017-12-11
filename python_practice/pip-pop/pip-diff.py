#!/usr/bin/env python
# -*- coding: utf-8 -*-

#在项目中常见的DocStrings，这里用于生成命令行界面，
# 一个多行字符串，它的首行以大写字母开始，句号结尾。[第二行是空行]，从第三行开始是详细的描述。 尽量所有的DcoStrings文档字符串都遵循这样的格式。养成习惯。
#<>位置参数，[]可选参数，()必选参数，|分隔两个互斥参数。…用于表示格式为数组的参数

"""Usage:
    pip-diff (--fresh | --stale) <reqfile1> <reqfile2> [--exclude <package>...]
    pip-diff (-h | --help)

Options:
    -h --help   Show this screen.
    --fresh     List newly added packages.
    --stable    List removes packages.
"""

import os
from docopt import docopt
from pip.req import parse_requirements
from pip.index import PackageFinder
from pip._vendor.requests import session

request = session()


class Requirements(object):
    def __init__(self, reqfile=None):
        super(Requirements, self).__init__()