#Netflix Clone 

The Netflix Clone is built using ReactJS.

Movie data was pulled from TMDB and trailer videos from Youtube.
[
](https://private-user-images.githubusercontent.com/33377298/295123601-86ed38f6-0c84-4eb6-b7ac-28e63de6d714.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ4NTUyNTMsIm5iZiI6MTcwNDg1NDk1MywicGF0aCI6Ii8zMzM3NzI5OC8yOTUxMjM2MDEtODZlZDM4ZjYtMGM4NC00ZWI2LWI3YWMtMjhlNjNkZTZkNzE0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEwVDAyNDkxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk3Y2VmMmY0YzRmZTAwN2ZiOTEyNzllNWM5Zjc5YjcxNTg0NDJiZTA2YzMxNTdjODM0MjFkMTA1NjE1N2ZmNzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.WXOYzC1KWUEnR4Ska51iFJd3CfNWpN_00dCNi2vDvUI)

![netlix](https://github.com/rashmiiyengar/React-netflixgpt/assets/33377298/30245073-36a2-4d1c-979a-2c2b8c94faeb)

- Created using create-react-app
- CSS configuration using tailwind.css 
- Header
- Routing
- Sign In Form/ Sign up form
- useRef hook 
- Form Validation
- Firebase setup
- Deploying our app to production
- Create signup user account 
- Implement Sign In user API
- Created Redux store with userSlice
- Implemented signout Features
- updateprofile api usimng fire base
- Fetch from TMDB Movies
- Bug Fix- redirect if user is not logged in redirect /browse to login page and vice-versa
- Unsubscribed to the onAuthStatechanged callback
- Registered in TMDB API and get access token
- get data from TMDB now playing movie list API
- Custom hook now nowPlaying movies
- create a movie slice
- Planning for Main container and secondary container
- update store with movie data
- fetch Data for trailer video
- update store with trailer video 
- embedded the youtube video and made it autoplay and mute
- added tailwind classes for css
- Build secondary component
- GPT Search page
- Multi language feature in our app
- Integrate GPT API's



#Features

- Login/Signup page
    - SignIn /Signup form
    - redirect to Browse page

-Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and description
        - Movie suggestions
            - Movie List * N
            
- Netflix Gpt
    - Search Bar 
    - Movie suggestions 
