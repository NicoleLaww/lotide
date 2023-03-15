# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicolelaw/lotide`

**Require it:**

`const _ = require('@nicolelaw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns first element of array 
* `tail()`: returns all elements of the array except first 
* `middle()`: returns middle elements of the array, different for under 3 elements, even/odd
* `assertArraysEqual`: compares actual and expected values of an array to see if they are the same
* `assertEqual`: compares actual and expected values to see if they are the same 
* `assertObjectsEqual`: compares actual and expected values of an object to see if they are the same
* `countLetters`: counts specific letter(s)in a string 
* `countOnly`: counts specific objects
* `eqArrays`: compares two arrays to see if they are the same
* `eqObjects`: compares two objects to see if they are the same 
* `findKey`: finds the key using an object and a callback functioon 
* `findKeyByValue`: scans an object and returns the first key which contains the given value 
* `flatten`: flattens nested arrays inside an array 
* `letterPositions`: shows index position of specific letter 
* `map`: goes through each element of an array and pulls what you want to produce a new array 
* `takeUntil`: takes a slice of the array from the beginning 
* `without`: filters out unwanted data 
