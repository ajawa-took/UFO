# UFO

<p align="center">
<b>Go see our awesome <a href = https://ajawa-took.github.io/UFO/>webpage</a> !!</b>
</p>

## Overview

The purpose of this project is to provide a simple, visually appealing, user-friendly front end webpage for the database of UFO sightings. The current implementation allows the user to search by date, location, and shape.

## Results - User Guide

By default, the webpage displays all data in the database:

![unfiltered](/screenshots/unfiltered.png)

To search for events with particular properties, enter the desired property (or properties) into the appropriate input box and press Enter. The grey-out placeholders/suggestions demonstrate correct format: all text should be lower-case, states and countries should be specified by abbreviation, and dates should be entered in mm/dd/yyyy format.

### Examples
To search for events in the state of Arkansas, enter "ak" into the box for State:
![arkansas](/screenshots/arkansas.png)

To serach for circle-shaped eventes, enter "circle" into the box for Shape:
![circle](/screenshots/circle.png)

### Multiple

You can search by multiple criteria: simply enter the desired values into the appropriate boxes. An event will be displayed only if it matches all of the criteria entered:
![multiple](/screenshots/multiple.png)

### Reset

Previous search entries stay until cleared - that's how it's possible to enter multiple criteria. To remove a criterion, simply delete everything in its input box and press Enter. Reloading the page does *not* reset search criteria.

## Summary - Improvements

### Search Improvements

The current implementation's major drawback is the inflexible matching of the search criteria to the data. Here are some ways to make our website more user-friendly.

#### Flexible City, State, Country searches.

1. One easy improvement would be to convert the strings for city, state, and country to lower-case before comparison, and maybe strip whitespace from the outside, so that someone searching for events in the city of " Willow " would find them, even though our database lists that locatin as "willow".

2. More ambitiously, we could modify the code to accept full state and country names along with abbreviation, so that the search for "California" would turn up results whose database state is "ca". 

#### Flexible Date searches.

3. In a different direction, the webpage could be modified to allow other date input formats like "August 4, 2022".

4. More ambitiously, we could extract day, month, year, and day of the week from the date, and add searches for those, to answer questions like, "Are there more UFO sightings on weekends?"

### Bugs

Reloading the page, as opposed to reopening it in a new tab or window, does not clear search critetia properly. Old seach criteria are:
 - diplayed in the input fields of the form;
 - not applied to the table displayed;
 - not updated when the same criterion is re-entered.
Entering a different criterion, including nothing, resets the search properly.
