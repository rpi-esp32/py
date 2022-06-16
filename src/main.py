from js import add
from pyodide import create_proxy
# import numpy as np

span = document.querySelector("span")

def callback(a):
    span.innerText = orientation(a)

def orientation(a):
    return f"hello {typeof(a)},  = {a}"

add(create_proxy(callback))
