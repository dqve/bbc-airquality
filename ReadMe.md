# BBC Air-Quality Test Solution
This code base is my developed solution to the bbc-airquality task.
The built code base can be found in the dist folder after running the build commands.

## Getting started

To start the project follow the following steps:

1. Clone the repository or download the code. Open your terminal where the code is located and run:

```bash
npm install
```

2. To start the code in your browser run:

```bash
npm start
```
_Open [http://localhost:3010](http://localhost:3010) with your browser to see the result._

3. To build a reusable dist folder.

```bash
npm run build
```
If you are using powershell as your terminal of choice then run this instead.

```bash
npm run build-powershell
```

4. To serve the built folder.

```bash
npm run serve
```
Open [http://localhost:51422](http://localhost:3010) with your browser to see the result. If this doesn't work then use the url link provided in your terminal.

## Project info

This development was done using the appropriate tools to meet the technical and project requirements.

Some technical requirements of note:
* _"The task must be served as all flat files..."_
* _"pay attention to file size and performance..."_
* _"so please ensure your code works on IE11 and up..."_


## Tools and implementations

Considering the solution as a real world project I also utilized some usefull tools and practices that would ensure the system built is type-safe, developer-friendly, user-friendlly, high-performing, easily maintanable and Free of bugs.
These tools also ensured that i met with the 

|          Tool      | Description                                                |
|--------------------|------------------------------------------------------------|
|**_Type script_**   | TypeScript enforces type safety, helps catch errors during development and it's implementation generally improves the performance of the application. |
|  **_Webpack_**  | Webpack gives you control over how to treat different assets it encounters. In this project I have used it to determine how the poject is built and to structured.  |
| **_React_** | React is a developer friendly component-based javascript library. It provides the possiblity to create high performing and computational products in javascript and transpile these code to broswer friendly versions.  |
| **_Polyfills_** | Since some of our target users are IE users, I have used certain polyfills to ensure that while transpiling the styles and functions some features do not get bloated or overlooked.  |
| **_Comments_** | I added descriptive comments to aide developer friendliness.  |
