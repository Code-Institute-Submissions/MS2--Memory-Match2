# MS2 - Memory Match

Memory match is a memory game where players try to find the matching pairs of food behind the cards before their time runs out. Choose from three levels at the start page, easy, medium and hard, each steadily decreasing in time. Perfect for anyone who likes food or has a memory!  


## Demo

Click [here](https://darlyn-lurikah.github.io/MS2--Memory-Match2/) for a live demo version

![Site screen display](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20match%20screens%20screenshot.png)



## UX

Memory match is for anyone who wants a light game to pass the time or to genuinely challenge themselves to remember the placement of the food icons. The layout is simple and the naviation clear so players don't get frustrated or lose interest trying to find their way around. As the game is so straightforward, I've employed a bright and eyecatching colour scheme so the player doesn't get bored.  

### User stories 

When conducting research into potential customers, the points that came up most frequently were:
- User wants a game thats easy to follow  
- As a user, I want the site to be usable via mobile phone so I can conveniently access it anywhere. 
- User would prefer a more or less challenging to cater to various abilities 
- As a user, sound isn't imperitive, but its a thoughtful touch and must have option to start and stop
- Users expect that the cards will be in pairs and can all be accessed
- When a user wins or loses they need to be notified 
- Users need to have some kind of stakes, like time running out 

### Strategy
To draw potential players in with colours and layout, then keep them with the game itself as they try to beat the levels.

### Scope 
The best games are usually the most simple. I wanted to give players one that does take too much thought and can keep them enertained for an hour or 5 minutes.

### Structure 
Levels available to choose on start page to avoid any unnecessary pages taking up time. The levels buttons are clearly labelled so player knows off the bat which they might prefer without extra clicks. The rules are displayed on the start page so its one of the first things the player sees. Like the levels buttons, the navigation buttons on the game page are clearly labelled so there is no confusion that could impace gameplay. All levels are laid out the same for visual and naviagational consistency. 

### Skeleton
Wireframes created using figma:
-[**Memory Match wireframe - levels page**](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20Match%20level%20page.pdf) 
-[**Memory Match wireframe - easy level page**](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20Match%20-%20level%20easy.pdf)

### Surface
As the background colours were bright, the layout was kept quite minmal, with all the text in navy blue so it its easily readable to the player. I used a futuristic looking text which while fun, is not a crisp as other fonts so writing had to be kept short and concise so the page didn't begin to look busy. The logo was made from styling a font from figma in Adobe illustrator as it couldn't be located on GoogleFonts. 

Text used: 
**Righteous**- For rules and button text 
**Nico Moji**- Styled text from Figma

## Features

A choice of levels allows player to choose based on time available and abilty. Start page acts as a navbar to easily move through the pages. Music can be started and stopped by player for a quiet game or a jiggle in their seat while they flip cards. Reset and home button on the game page let player reset their game when they like and go back to the home page to pick a new level quickly. 
 
### Features Left to Implement

- Score and star rating systen  
- A leaderboard so player can compare their current score to their previous scores  



## Technologies Used

- **HTML** - To write up base website
- **CSS** - To style website to make it visually appealing
- **JavaScript** - For an interactive game and website 
- **[Bootstrap](https://getbootstrap.com/)** - For responsive design  
- **[Figma](https://www.figma.com/)** - To create wireframe
- **[JQuery](https://jquery.com/)** - For 'shorthand' Javascript 



## Testing

# Screens 
The site was tested across multiple screens sizes both personally and via inspect. Personally, it was opened on an iPhoneX, iPad mini, iPad Pro, iMac, Macbook Pro, as well as a 15.3" and 17.3" Windows laptops. Across the screens the site worked visually and the game could be played as desired. Breakpoints are working well when tested. 

Screens tested using:
- iphone 7-11
- Laptop 15in, 17in 
- iMac
- Chrome
- Microsoft Edge
- Safari

# Scroll
 There is a need to scroll down slightly to see the full card grid on laptops due to their landscape  orientation and the cards needing to be larger on these screens. However    only the logo is partially obscured. All the navigational buttons on the game page are fully visble and functional.

 # Levels 
 Levels work as desired across my test screens. They can be viewed and accessed via the start screen. 
 
 # Audio
 Audio is not available on the deployed website, but works well in local preview in all above mentioned screens and Chrome Developer tools. In preview the audio can be started and paused but clicking the music button. Addressed in more detail in bugs section. 
 
 # Card match
 In all tested browers and screen sizes, the game was fully playable. Cards were able to flip when clicked first, wait for second card, if a match is made, they match, if not they turn back over. 
 
 # Win or Lose 
 In all tested browsers and screens when all matches are made a win screen comes up and when the timer hits 0 a lose screen. 
 
 # Timer
 Timer is functional across all tested browers and screen, counting down from 60, 40 and 30 depending on the level. Possible issue with timer addressed in bugs section



## Bugs

**Timer**
Not quite a bug but needs addressing. There are three js files script.js, medium.js, hard.js. Each holds almost identical code for each level. This is because each level has a diffent timer linked to the number of clicks and matches making it difficult combine in one file. After many attempts alone and with tutor support to wrap them in one file, this was the way that gave my game the needed functionality. I thought it best to split the files and have a playable game.  

**Music**
The music plays fine in preview, however after deploying it doesnt work. After rewritng Javascript and HTML code and changing the mp3 file multiple times, I've have not been able to work out this particular bug.


**Functionality test sites**

[CSS Validator](https://jigsaw.w3.org/css-validator/) - To check the markup validity of CSS web documents.
[HTML Validator](https://validator.w3.org/) - To check the markup validity of HTML web documents.
[Gtmetrix](https://gtmetrix.com/) - To test site speed 
[JSHint](https://jshint.com/) - To check Javascript code 


**Image quality**
Logo and icons can become somewhat pixelated on larger screens. This was addressed by using higher quality one, but problem persists as I needed to strike a balance between quality of image and page load time. 


## Deployment

Memory Match was created using VSCode and is hosted on GitHub pages, deployed from the master branch. The deployed site will update automatically upon new pushes to the master branch.

#To deploy to GitHub pages:
1. In my respository [here](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/tree/master) and select settings
2. In settings at the very top you can rename your repository
3. Scroll down to the GitHub pages section and select master branch and root folder
4. Press save and a link with the deployed site come up on the Github Pages section.
5. For ease of access, paste into the About section in your repository so its easy for yourself and others to find 

#To clone from GitHub:
1. In my respository [here](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/tree/master) and select Code 
2. In the dropdown menu select the clipboard beside the link of HTTPS
3. In your desired terminal input ```git clone (copied url) ``` minus the parentheses and press enter
4. Now you have a local clone to edit, without affecting the original repository 


## Credits

# Audio 
Credit for timer in all js files goes to [Cukmekerb's Coding Class](https://www.youtube.com/watch?v=p4OHVJxd2FI&t=70s&ab_channel=InventionTricksInventionTricks) for line 144 (and as a result) 147. These two lines helped bring my if statement together and make my audio correctly click-able. 

# Game logic 
Credit for helping me undestand the logic and requirements of this game goes to [Scotch](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

# General 
Credit to Stack Overflow. While no code was taken from there, it was extremely helpful in idenifying where I was going wrong especially with syntax errors and longer functions
Credit to [W3Schools](https://www.w3schools.com/css/default.asp) for refreshing my knowledge of HTML and CSS 
# Fonts
Credit to [Google Fonts](https://fonts.google.com/?sidebar.open=true&selection.family=Righteous) for fonts 
Credit to [Figma](https://www.figma.com/) for logo font

# Game function 
Credit to for [marina-ferreira](https://marina-ferreira.github.io/tutorials/js/memory-game/) in js line 10, 44, 45 and 49 when I was lost on how to bring the statement together to flip my cards 

### Media

**Logo**
'Memory' text from the logo was coped from [Figma.com](https://www.figma.com/files/recent) and altered in Adobe Illustrator with a full licence.

**Icons**
Icon drawings from [Freepik.com](https://www.freepik.com/free-vector/background-with-fast-food_2528397.htm#page=3&query=fast+food&position=22) and altered in Adobe Illustrator with a full licence.

**Audio**
Fuzzball Parade by Kevin MacLeod
Link: (https://incompetech.filmmusic.io/song/5044-fuzzball-parade)
License: (http://creativecommons.org/licenses/by/4.0/)


### Acknowledgements
 Special thanks to the Code Institue tutors and everyone on slack who have all been very helpful and given many interesting topic to research to better my work.
 Also thanks to my mum for checking up on me during my 500 allnighters even though I'm 105 years old.
