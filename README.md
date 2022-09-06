# UFO

<p align="center">
**Go see our awesome** [webpage](https://ajawa-took.github.io/UFO/) **!!**
</p>

## Overview

The purpose of this project is to provide a simple, visually appealing, user-friendly front end webpage for the database of UFO sightings. The current implementation allows the user to search by date, location, and shape.

## Results




## Summary
### (Improvements)

The current implementation's major drawback is the inflexible matching of the search criteria to the data. Here are some ways to make our website more user-friendly.

#### Flexible City, State, Country searches.

1. One easy improvement would be to convert the strings for city, state, and country to lower-case before comparison, and maybe strip whitespace from the outside, so that someone searching for events in the city of " Willow " would find them, even though our database lists that locatin as "willow".

2. More ambitiously, we could modify the code to accept full state and country names along with abbreviation, so that the search for "California" would turn up results whose database state is "ca". 

#### Flexible Date searches.

3. In a different direction, the webpage could be modified to allow other date input formats like "August 4, 2022".

4. More ambitiously, we could extract day, month, year, and day of the week from the date, and add searches for those, to answer questions like, "Are there more UFO sightings on weekends?"


