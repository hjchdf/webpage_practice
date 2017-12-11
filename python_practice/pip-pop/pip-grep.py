#!/usr/bin/env python
# -*- coding: utf-8 -*-

# 脚本解释器在linux中可能被安装于不同的目录，env可以在系统的PATH目录中查找。同时，env还规定一些系统环境变量。
# 这个是用于*nix环境下的，它是用于指定执行的程序，不适用于Windows系统。直接在dos/powershell，./xx.py，是会用文件关联的程序打开，如果你关联的是记事本就是记事本打开，如果是python就是python来执行（当然程序执行很快可能窗口一闪而过），关联程序可以右键属性来设置。

# If a comment in the first or second line of the Python script matches the regular expression coding[=:]\s*([-\w.]+), this comment is processed as an encoding declaration; the first group of this expression names the encoding of the source code file. The encoding declaration must appear on a line of its own. If it is the second line, the first line must also be a comment-only line.
# 此处'!/usr/bin/env python' 适用于Linux

"""
Usages:
    pip-grep [-s] <reqfile> <package>...

Options:
    -h --help   Show this screen.
"""

import os
