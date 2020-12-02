# MS2 - Memory Match

Memory match is a memory game where players try to find the matching pairs of food behind the cards before their time runs out. Choose from three levels at the start page, easy, medium and hard, each steadily decreasing in time. Perfect for anyone who likes food or has a memory!  


## Demo

Click [here](https://darlyn-lurikah.github.io/MS1-The-Love-Letter/) for a live demo version

![Site screen display](https://github.com/Darlyn-Lurikah/MS2--Memory-Match2/blob/master/assets/Memory%20match%20screens%20screenshot.png)



## UX

Memory match is for anyone who wants a light game to pass the time or to genuinely challenge themselves to remember the placement of the food icons. The layout is simple and the naviation clear so players don't get frustrated or lose interest trying to find their way around. As the game is so straightforward, I've employed a bright and eyecatching colour scheme so the player doesn't get bored.  

### User stories 

When conducting research into potential customers, the points that came up most frequently were:
- As a user, I want to the products to be easy to find, so I can select one quickly. **Addressed in print section** 
- As a user, I want the site to be usable via mobile phone so I can conveniently access it anywhere. **Addressed through responsive mobile first design** 
- As a user, I want to know about the brief history of the business to determine trustworthiness. **Addressed in about section** 
- As a user, I want to know the cost of products upfront to decide whether to buy. **Addressed in print section** 
- As a user, I need the company to have social media to keep up with any new products or services. **Addressed in footer** 

### Strategy
To sell prints and a custom prints service using a user friendly 'one page' design, with a clear layout that also stays true to the company branding. 

### Scope 
Providing customers with a brief company background, then all products and services set out and well labeled so they can browse and find what they are looking for.

### Structure 
Fixed top navigation bar to get to desired sections of the site easily. Information given is a short uncomplicated read. The function of each section of the site is labelled and  apparent to customer. 

### Skeleton
Wireframes created using figma:
- [**The Love Letter wireframe**](https://github.com/Darlyn-Lurikah/MS1-The-Love-Letter/blob/master/mockups/The%20Love%20Letter%20wireframe.pdf) 

### Surface 
As the fruity background is eyecatching, the print section needed a plain background to ensure the products were clearly visible and branding did not overtake usability. 
With bright and busy site branding, the text had to be simple and clean: 

**Roboto**- For general information throughout

**Oswald**- For the logo 

**Bowlby One SC**- For the callout



## Features

A fixed top navbar ensures customers can navigate to all sections regardless of which one they are currently in. The callout is linked to the print section to go straight to the products advertised. A one page site with various sections reduces loading times and allows for a speedier naviagation, which in turn gives the customer a better site experience. 
 
 
### Features Left to Implement

- Newsletter sign up - Users can keep up to date with any changes to service, new print additions and discount codes 
- Login - To allow returning customers to purchase through their own account with saved information to streamline the process and cut down on time 



## Technologies Used

- **HTML** - To write up base website
- **CSS** - To style website to make it visually appealing
- **[Bootstrap](https://getbootstrap.com/)** - For responsive design  
- **[Figma](https://www.figma.com/)** - To create wireframe



## Testing

All links within the site function correctly and take you to the appropiate section. The submit button takes you to the top of the page as there is no 'completed' event. Social media links open to the home page of each social site. 

The site was tested across multiple screens sizes both personally and via inspect. Personally, it was opened on an iPhoneX, iPad mini, iPad Pro, iMac, Macbook Pro, as well as a 15.3" and 17.3" Windows laptops. All screen sizes worked as desired.

In Chrome, Internet Explorer and Safari via inspect, the site displayed and functioned as intended at all screen sizes. In all cases, the callout images changes between phone, tablet and laptop/desktop were displayed correctly. The logo text size is also subject to change between screen sizes and does so at the stated points. The navagtion bar collapses at mobile veiw to accomodate the size change. 

In mobile view the footer text appear one beneath the other to fit the available space while remaining readable.



## Bugs

**Cards**

A faint white border appears sporadically around the cards via inspection but not in physical tests, although all borders have been removed this problem persists. 

**Functionality test sites**

[CSS Validator](https://jigsaw.w3.org/css-validator/) - To check the markup validity of CSS web documents.
[HTML Validator](https://validator.w3.org/) - To check the markup validity of HTML web documents.
[Gtmetrix](https://gtmetrix.com/) - To test site speed 

**Site loading**

Although optimized, the callout image still remains a medium file and somwhat slows the loading of the site. However, there had to be a compromise between file size and image quality for the overall aethetic. 

**Submit**

The submit button is linked to 'home', which when clicked is to take you to the top of the page. However it occasionally, across all screen sizes fails to do so until the page is refreshed. Another issue is it sometimes stops at the print section instead of the top, also rectified when the page is refreshed. 



## Deployment

The Love Letter is hosted on GitHub pages, deployed from the master branch. The deployed site will update automatically upon new commits to the master branch.

To run locally, clone this repository directly into your chosen editor by pasting the link into your terminal. To remove from this GitHub repository, type ```git remote rm origin``` into the terminal.



## Credits

### Content

- The text for the callout section hyperlink to remove the on click underline was copied from the [Stack Overflow](https://stackoverflow.com/questions/27989672/why-is-link-underline-appearing-after-clicking-the-link)

### Media

**Callout**

Images bought from [Almay.com](https://www.alamy.com/) with full licence to be used in project.

**Prints**

Created by myself using a paid for Adobe Illustator licence 

### Acknowledgements

I received inspiration for this project from my sister's caligraphy [instagram page](https://www.instagram.com/_theloveletter/). I have her permission to use the name.  

