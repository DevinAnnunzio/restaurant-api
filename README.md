# Restaurant API

## *Devin Annunzio*

**restaurant-api** is a simple web app 


## Installation
1. Clone the repo to your local machine.
2. Create a postgres db called paidy 
3. Use node package manager [npm](https://www.npmjs.com/) to install necessary packages.

```bash
npm i
```
4. Next in the terminal type the command below
```bash
npm run migrate
```
5. Next run 
```bash
npm start
```

## Functionality 

The current functionality:
* [✅] The client (the restaurant staff “devices” making the requests) can: add one or more items with a table number, remove an item for a table.
* [✅] The application upon creation request, stores the item, the table number, and how long the item will take to cook in minutes.
* [✅] The application upon deletion request, removes a specified item for a specified table number.
* [✅] The application shows all items for a specified table number.
* [✅] The application shows a specified item for a specified table number.
* [✅] The application assigns a length of time for the item to prepare as a random time between 5-15 minutes if a time isn't given in seconds.
* [✅] The application updates whether or not the item has been cooked based off the time the order was made and the time it takes to cook.
* [✅] The application deletes a food item using the trash icon.

## Future Plans 
Future plans:
* [] Work on UI to make it more presentable


## Screen shots

Here's a walkthrough of implemented user stories: Currently need to add screenshots
</br>
<h5>Home screen</h5>
<img src="https://user-images.githubusercontent.com/69616397/160763277-de78f727-f5f7-40ef-8441-f384a78bf93c.png" width="800" height="500">
<br>
<h5>Place order screen</h5>
<img src="https://user-images.githubusercontent.com/69616397/160763452-a0f67a3b-3642-4281-b901-8b2327d09b97.png" width="800" height="500">
<br>


</br>




## Notes
This project was built to show server side ability


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
