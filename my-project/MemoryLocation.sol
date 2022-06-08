pragma solidity ^0.8.0;

contract MemoryLocation {

  // Total amount of cars
  uint256 totalCars;

  // Basic idea of a cool car
  struct Car {
    string typeOfCar; // type of car
    string color; // type of color
    string wheels; // type of wheel
    uint8 speed; // number of speed
    uint8 power; // number of power
    uint8 nitro; // number of nitro
    uint specialId; // cars specialUnique code
    address owner; // owner
    uint256 timestamp; // timestamp when car created
  }

  // Create Array of cars from struct
  Car[] cars;

  // Array
  mapping(address => uint) public numberOfWavesFromAddress;

  // Create a function that will Create a block stamp of car creation
  function createCar() public {

  }

}