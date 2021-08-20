# _Mr. Roboger's Neighborhood_

#### _This application will take a number inputted by a user and deliver a message back._

#### By _**Ben Dunham**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## Description

_Mr. Roboger's Neighborhood has the user input a number of any value and returns the range of numbers preceeding the input while replacing any instance of 3 with "Won't you be my neighbor", any instance of 2 with "Boop", and any instance of 1 with "Beep"._

## Setup/Installation Requirements

* _Clone the project to your desktop using the command ``git clone https://github.com/bendunhampdx/roboger``_
* _To open in your browser navigate to the project folder and open the **index.html** file_
* _To view/edit source code in **VS Code** navigate into the project using the command ``cd roboger`` and then run ``code .``_


## Known Bugs

* _No known bugs_


## License

_[MIT](https://opensource.org/licenses/MIT)_

## Contact Information

_Ben Dunham: bendunhampdx@gmail.com_

## Tests
``` javascript
Describe: roboger()
Test: It will take a number inputted by user and return it as a range
Code: roboger("10")
Expected Output: "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"

Test: When a user enters a 3 it will be replaced with "Won't you be my neighbor"
Code: roboger("3")
Expected Output: "Won't you be my neighbor"

Test: When a user enters a 2 it will be replaced with "Boop"
Code: roboger("2")
Expected Output: "Boop"

Test: When a user enters a 1 it will be replaced with "Beep"
Code: roboger("1")
Expected Output: "Beep"
```