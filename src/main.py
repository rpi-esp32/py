from js import add
from pyodide import create_proxy
# import numpy as np

#span = Element("m")

def callback(e):
    pyscript.write('target', 'this is my target')

#def orientation(a):
#    return f"hello {typeof(a)},  = {a}"

add(create_proxy(callback))
#

        
