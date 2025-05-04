// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfTrapezoid() {
  const aBaseOfTrapezoid = parseFloat(document.getElementById('a-base-of-trapezoid').value)
  const bBaseOfTrapezoid = parseFloat(document.getElementById('b-base-of-trapezoid').value)
  const heightOfTrapezoid = parseFloat(document.getElementById('height-of-trapezoid').value)

  const areaOfTrapezoid = ((aBaseOfTrapezoid + bBaseOfTrapezoid) / 2) * heightOfTrapezoid

  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTrapezoid + ' mm²'
}
