# online-store

This project has been created using Create React App(TypeScript).

## Stack

1. React 17
2. styled-components
3. Jest
4. Enzyme

## Installation

```bash
npm install
```

## Run

```python
npm start
```

````

## Test

```python
npm test
````

## Assumptions

1. The products api returns a small dataset so the results are rendered as is. No paging option was available, usually with big datasets the results would be paged for performance.
2. No UI designs were provided so the best was done with the time allowed with regards to making it functional and providing a good user experience.
3. No details were provided regarding the input object for the checkout api so i was not sure whether to submit the summarized cart items or the cart as it was so the latter was done.

## Given more time I would

1. Added more test coverage, I have mounted the 2 main components and done some basics tests.
2. Could have possibly used context api or even redux but given the size of the application I have just lifted state to the parent component
3. Spent more time cleaning up/refactoring the code.
4. Spend more time on styling, transitions, etc.
5. Would have liked to use react-testing-library but it was not playing well with create-react-app for some reason
6. Set up prettier, linting
