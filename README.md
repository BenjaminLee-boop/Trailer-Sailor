# Trailer-Sailor

### User Story
- AS A consumer of various streaming platforms and films.
- I WANT easy access to trailers and other pertinent information.
- SO THAT I can make a more informed decision about what to watch.

### Acceptance Criteria
- GIVEN I am a user of the Trailer-Sailor App.
- WHEN I type in the name of the movie or show that I might want to watch.
- THEN video of the trailer and metadata regarding the show is generated.

### The Pitch
*Have you ever had a movie night with your significant other, or a group of friends, and no one can agree on what to watch? Not only that, but some of the choices that are being thrown around don't have trailers attached to them in their parent streaming platform. The application we have made, called Trailer-Sailor, will not only play the particular trailer that you are looking for when you click search, but it will also display relevant metadata information about the movie, such as ratings and plot.*
^ placeholder pending jarred

## Reasoning
The general idea of this application was to address a few key points:
- trailers are not always nested within the streaming service
- metadata is not always displayed well (or at all) within a streaming service
- ease of use (single field input is all that is required)
- iFrame/Youtube API allows chromecasting
- save user through Local Storage

## Process
1. Building the html skeleton and API calls for OMDB & Google/Youtube.
2. Combining the calls into one external js file, and splitting them into functions.
3. Addressing responsiveness of the website, and combining the index and content pages into index.html.
4. Added autofill functionality to the search bar for Top 100 Movies.
5. Local storage function added for saving userName.
6. Tidying up responsiveness and functionality, and finishing README.

# Future Development
Plans for furthering the scope of this application would include the following:
- average meta score (avg. of Metacritic, IMDB and RottenTomatoes).
- users score after watching the film, and its relation to the average meta score.
- the ability to link with friends and suggest a pool of movies with random/vote selection.
- eventually a meta-rating would develop if enough people were using the app, which could be used in conjunction with the avg. meta score to determine a movies 'worth'.
- tracking preferred genres and types of movies/actors, and therefore more accurate movie suggestions.
- link to streaming APIs so that it will show you if the movie or show is available on Streaming Platform X in your region.

## Link to deployed application
https://benjaminlee-boop.github.io/Trailer-Sailor/ 

## Screenshot
![Screenshot](https://github.com/BenjaminLee-boop/Trailer-Sailor/blob/main/assets/grab.png?raw=true)

![Wireframe](https://github.com/BenjaminLee-boop/Trailer-Sailor/blob/main/assets/wireframe.jpg?raw=true)