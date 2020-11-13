# Calmr App

## Project Scope
Calmr app was created for people looking for respite from stress or anxiety. We designed a website with limited choice and accessibility in mind which provides visual/audio resources to aid in calming the mind. Resources are accessible through interacting with a chatbot or a podcast search feature.

See the Calmr Site [here](http://busy-comb.surge.sh/#/)

Collaborators [Brittany Crocker](https://github.com/brittanylcrocker) , [Giti Mafakheri](https://github.com/Giti-mafakheri), [Henry Zhang](https://github.com/lightgreener) and [Raeng Castagna](https://github.com/RaengC).

## Technical Tasks and User Stories

See our [Trello](https://trello.com/b/AFHSR5yr/calmr-app) link for detailed information

### Key Stories
* Search function via ChatBot without login
* Emergency search capacity for ChatBot
* Search function through external API for podcasts.
* As logged in user:
  * Saving Information from external API in account

### Future Stories
* Diary Capacity
* Commenting on saved information
* Chat functionality with other users

### Accessibilty
* Core for us was accessibility on our site, at the time of typing this our Lighthouse accessibility rating was 87%. There is room for improvement here.

### Technology Utilised
## React
  * Dependencies:
    * react-router-dom
    * react-chatbot-kit
    * react-util-kit
    * axios
    * react-dom
    * react-player
    * react-router

## Database
* Ruby on Rails used as database: [Rails database](https://github.com/lightgreener/calmr)
  * CRUD created for:
    * Users
    * Articles (was reconfigured for podcasts)
    * Comments
