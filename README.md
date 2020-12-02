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
- [**Memory Match wireframe - levels page**](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20Match%20level%20page.pdf) 
(https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20Match%20-%20level%20easy.pdf)

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



## Testing

User wants a game thats easy to follow  
- As a user, I want the site to be usable via mobile phone so I can conveniently access it anywhere. 
- User would prefer a more or less challenging to cater to various abilities 
- As a user, sound isn't imperitive, but its a thoughtful touch and must have option to start and stop
- Users expect that the cards will be in pairs and can all be accessed
- When a user wins or loses they need to be notified 
- Users need to have some kind of stakes, like time running out 

The site was tested across multiple screens sizes both personally and via inspect. Personally, it was opened on an iPhoneX, iPad mini, iPad Pro, iMac, Macbook Pro, as well as a 15.3" and 17.3" Windows laptops. All screen sizes worked as desired. There is a need to scroll down slightly to see the full card grid on laptops due to their landscape  orientation and the cards needing to be larger on these screens. However only the logo is partially obscured. All the navigational buttons on the game page are fully visble and functional.

In Chrome, Internet Explorer and Safari via inspect, the site displayed and functioned as intended at all screen sizes. In all cases, the callout images changes between phone, tablet and laptop/desktop were displayed correctly. The logo text size is also subject to change between screen sizes and does so at the stated points. The navagtion bar collapses at mobile veiw to accomodate the size change. 

In mobile view the footer text appear one beneath the other to fit the available space while remaining readable.



## Bugs

**Timer**
Not quite a bug but needs addressing. There are three js files script.js, medium.js, hard.js. Each holds almost identical code for each level. This is because each level has a diffent timer linked to the number of clicks and matches making it difficult combine in one file. After many attempts alone and with tutor support to wrap them in one file, this was the way that gave my game the needed functionality. I thought it best to split the files and have a playable game.  

**Music**

The music plays fine in browsers, however after deploying it doesnt work. I've tried many things and it seems beyond my skillset at the moment 
[Here](http://127.0.0.1:5502/easy.html) You can find a version of the site with the music working last the time I checked. 

**Functionality test sites**

[CSS Validator](https://jigsaw.w3.org/css-validator/) - To check the markup validity of CSS web documents.
[HTML Validator](https://validator.w3.org/) - To check the markup validity of HTML web documents.
[Gtmetrix](https://gtmetrix.com/) - To test site speed 
[JSHint](https://jshint.com/) - To check Javascript code 


**Site loading**

Although optimized, the callout image still remains a medium file and somwhat slows the loading of the site. However, there had to be a compromise between file size and image quality for the overall aethetic. 

**Submit**

The submit button is linked to 'home', which when clicked is to take you to the top of the page. However it occasionally, across all screen sizes fails to do so until the page is refreshed. Another issue is it sometimes stops at the print section instead of the top, also rectified when the page is refreshed. 



## Deployment

Memory Match was created using VSCode and is hosted on GitHub pages, deployed from the master branch. The deployed site will update automatically upon new pushes to the master branch.

#To deploy to GitHub pages:


To run locally, clone this repository directly into your chosen editor by pasting the link into your terminal. To remove from this GitHub repository, type ```git remote rm origin``` into the terminal.



## Credits

### Content

- The text for the callout section hyperlink to remove the on click underline was copied from the [Stack Overflow](https://stackoverflow.com/questions/27989672/why-is-link-underline-appearing-after-clicking-the-link)

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

  

