// Import the necessary modules
import { expect } from 'chai';
import { calcDroneMinEnergy1, calcDroneMinEnergy2 } from '../questions/js/drone_flight_planner.js';

// Define the test suite for calcDroneMinEnergy1
describe('calcDroneMinEnergy1', () => {
  it('should calculate the minimum energy needed for a simple route', () => {
    const route = [[0, 2, 10], [2, 3, 15], [3, 4, 20]];
    const result = calcDroneMinEnergy1(route);
    expect(result).to.equal(10);
  });

  it('should handle an empty route', () => {
    const route = [];
    const result = calcDroneMinEnergy1(route);
    expect(result).to.equal(0);
  });

  // Add more test cases as needed
});

// Define the test suite for calcDroneMinEnergy2
describe('calcDroneMinEnergy2', () => {
  it('should calculate the minimum energy needed for a simple route', () => {
    const route = [[0, 2, 10], [2, 3, 15], [3, 4, 20]];
    const result = calcDroneMinEnergy2(route);
    expect(result).to.equal(10);
  });

  it('should handle an empty route', () => {
    const route = [];
    const result = calcDroneMinEnergy2(route);
    expect(result).to.equal(0);
  });

  // Add more test cases as needed
});