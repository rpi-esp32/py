from js import add
from pyodide import create_proxy
# import numpy as np

span = Element("m")

def callback(a):
    span.value = orientation(a)

def orientation(a):
    return f"hello {typeof(a)},  = {a}"

#add(create_proxy(callback))

print (span.element.value)
span.element.value = " new strings"
print (span.element.value)
