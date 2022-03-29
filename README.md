# restaurant-api

## *Devin Annunzio*

**restaurant-api** is a simple web app for the interview with Paidy


## Installation
1. Clone the repo to your local machine.
2. Create a postgres db called paidy 
3. Use node package manager [npm](https://www.npmjs.com/) to install necessary packages.

```bash
npm i
```
4.
```bash
npx knex migrate:latest --knexfile db/knexfile.js
```

## Functionality 

The current functionality requirements:
* [] The client (the restaurant staff “devices” making the requests) MUST be able to: add one or more items with a table number, remove an item for a table, and query the items still remaining for a table.
* [] The application MUST, upon creation request, store the item, the table number, and how long the item will take to cook.
* [] The application MUST, upon deletion request, remove a specified item for a specified table number.
* [] The application MUST, upon query request, show all items for a specified table number.
* [] The application MUST, upon query request, show a specified item for a specified table number.
* [] The application MUST accept at least 10 simultaneous incoming add/remove/query requests.
* [] The client MAY limit the number of specific tables in its requests to a finite set (at least 100).
* [] The application MAY assign a length of time for the item to prepare as a random time between 5-15 minutes.
* [] The application MAY keep the length of time for the item to prepare static (in other words, the time does not have to be counted down in real time, only upon item creation and then removed with the item upon item deletion).


## Screen shots

Here's a walkthrough of implemented user stories: Currently need to add screenshots
</br>
</br>




## Notes
This project was built to learn more about architecture


## Built with
[React](https://reactjs.org/)<br/>
[Node](https://nodejs.org/en/)<br/>
[Express](https://expressjs.com/)<br/>
[Knex.js](https://knexjs.org/)<br/>
[PostgreSQL](https://www.postgresql.org/docs/)<br/>

## Contributing

Please follow below procedure to make a contribution.

1. Fork the Project
2. Create your Feature Branch (git checkout -b <featurename>)
3. Commit your Changes (git commit -m 'feat: Add <featurename>')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request



## License

    Copyright [2022] [Devin Annunzio]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
