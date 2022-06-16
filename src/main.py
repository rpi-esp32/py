from js import add
from pyodide import create_proxy
# import numpy as np

span = document.querySelector("span")

def callback(x, y, z):
    span.innerText = orientation(x, y, z)

def orientation(x, y, z):
    return f"{x=}, {y=}, {z=}"

add(create_proxy(callback))
