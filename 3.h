<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>PyScript Gravity Sensor</title>
  <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
  <py-env>

  </py-env>
</head>
<body>
  <span></span>
  <script>
    function add(callback) {
      return 1, 2, 3
    }
  </script>
  <py-script>
from js import add
from pyodide import create_proxy
import numpy as np

span = document.querySelector("span")

def callback(x, y, z):
    span.innerText = orientation(x, y, z)

def orientation(x, y, z):
    return f"{x=}, {y=}, {z=}"

add(create_proxy(callback))
  </py-script>
</body>
</html>
