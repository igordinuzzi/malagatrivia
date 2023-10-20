# Málaga Trivia

Introducing "Málaga Trivia" - a captivating quiz that takes you on a virtual journey through the sun-kissed streets and azure coasts of Málaga and Costa del Sol. Whether you're a native, a passionate traveler, or simply curious, this quiz offers a blend of cultural, historical, and fun-filled questions tailored to test and expand your knowledge about this Mediterranean paradise. From renowned landmarks to local delicacies and celebrated personalities, Málaga Trivia encapsulates the essence of Andalusia's crown jewel. Ready to challenge yourself? Dive in and discover the wonders of Málaga and the Costa del Sol!

Live webpage [here](https://igordinuzzi.github.io/malagatrivia/)

## Features

- Navigation with links to Play and Help, responsive on all devices.
Navigation in a webpage is crucial for providing a user-friendly experience by enabling visitors to efficiently explore and access the site's content, ultimately improving user engagement and satisfaction. 
It helps users find information, products, or services, leading to increased usability and retention.
 ![Navigation](doc/header.jpg)
  
- Footer with a Github link.
The footer contains important copyright information, asserting the originality and ownership of the content. Additionally, for those interested in delving deeper or collaborating, a direct link to our GitHub repository provides seamless access to the codebase.
   ![Footer](doc/footer.jpg)

- Favicon for easy recognition.
The favicon is important in a webpage as it provides a recognizable visual identity in browser tabs, enhancing brand visibility and user recognition, and it helps users quickly locate and return to the site.
  ![Favicon](doc/favicon.jpg)
  
- A welcoming landing page featuring a quiz about Málaga, which includes an introductory screen and a compulsory field for entering one's name.
    ![Welcome Page](doc/welcome.jpg)
  
- Quiz interface showcasing 30 different questions, of which only 10 are displayed during each gameplay session. Each question provides three answer options, but only one of them is correct.
  ![Quiz](doc/question.jpg)
  
- The user is given a ten-second window to respond to a question, as indicated by the timer functionality.
  ![Timer](doc/timer.jpg)
  
- The interface will provide feedback to the user if their answer is correct.
  ![Right](doc/right.jpg)
  
- The user will receive feedback from the system if their answer is incorrect and will be shown the correct response.
  ![Wrong](doc/wrong.jpg)
  
- The user will receive a score based on their responses to 10 questions and will be informed about the number of remaining questions.
  ![Score](doc/score.jpg)
 
- Users have the option to replay and will be guided back to the introductory screen.
  ![Again](doc/play-again.jpg)

 - Help Page - This support page features a tutorial embedded via a third-party "Iorad" iframe. It guides users on how to navigate the game and explains the type of feedback they can expect to receive.
  ![Help](doc/help.jpg)

 - 404 page - Custom 404 page and the auto-redirect feature to the homepage. The custom 404 page and auto-redirect feature have been seamlessly integrated. This ensures that when a user encounters a 404 error, they will experience a smooth transition to the custom 404 page and subsequently be redirected to the homepage. 
  ![404](doc/404.jpg)


## Existing Features and Features to Implement

**Existing features:**
- JavaScript functionality for displaying a welcome screen before the game starts.
- JavaScript functionality for generating random questions.
- JavaScript functionality for a countdown timer.
- JavaScript functionality for tracking scores.
- JavaScript functionality to restart the game.
- Iorad's external functionality for the assistance page.


## Wireframes
![Wireframes](doc/wireframes.jpg)


## Technologies

The Malaga Trivia website utilizes the following technologies:

- Figma for design.
- FontAwesome for icons.
- CSS for styling.
- HTML for content.
- JavaScript for quiz features.
- Visual Studio Code for development.
- GitHub for version control.
- ChatGPT for content creation.

WIP ---------------------->

## Testing

The website has been thoroughly tested on various devices and browsers:

- Mobile (iPhone 14)
- Smaller laptop MacBook Air
- iMac

**Responsiveness:**

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in WCAG 2.1 Reflow criteria for responsive design on Chrome, Edge, Firefox, Safari and Opera browsers.

Steps to test:

- Open browser and navigate to Unity Yoga Collective
- Open the developer tools (right click and inspect)
- Set to responsive and decrease width to 320px
- Set the zoom to 50%
- Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

- iPhone 14
- iPhone SE
- Samsung Galaxy Android S20 Android 11
- Macbook Air
- iMac 27''
- iMac 24''


**Accessibility:**

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout the development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions were read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was as accessible as possible and an accessibility issue was identified.

I've discovered several errors on the webpage, specifically related to headers and the iframe. I fixed these issues to enhance accessibility and ensure that all users can easily navigate and interact with the content, promoting a more inclusive and user-friendly experience.

**Browser Compatibility Checked:**

- Safari
- Firefox
- Google Chrome

**Functional Testing**

Navigation Links:

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page.

| Navigation Link | Page to Load          |
| --------------- | ----------------------|
| Home            | index.html            |
| Help            | help.html             |

Links on all pages navigated to the correct pages as exptected.

_Scenario One - Correct Inputs_

Steps to test:

1. Navigate to [Home Page](https://igordinuzzi.github.io/malagatrivia/index.html)
2. Scroll down to the form and input the following data:
   - Name: Your name
3. Click "Start Quiz"
4. User should be redirected to the quiz page

Expected:

Form submits with no warnings or errors and user is redirected to the quiz.

Actual:

Website behaved as expected with no errors or warnings and redirected to quiz page.

_Scenario Two - Missing Required Field Name_

Steps to test:

1. Navigate to [Home Page](https://igordinuzzi.github.io/malagatrivia/index.html)
2. Scroll down to the form and input the following data:
   - Name: Your name
3. Click "Start Quiz"
4. User should be redirected to the quiz page

Expected:

The form does not submit and an Error is displayed to tell the user that the field is required.

Actual:

Website behaved as expected, error message was displayed and the form did not submit.

_Scenario Three - System feedback_

Steps to test:

1. Navigate to [Home Page](https://igordinuzzi.github.io/malagatrivia/index.html)
2. Scroll down to the form and input the following data:
   - Name: Your name
3. Click "Start Quiz"
4. Once the quiz has started click on one choice
5. User should receive feedback (right choice or wrong choice) from the system

Expected:

Feedback is displayed.

Actual:

Website behaved as expected, feedback message was displayed.

_Scenario Four - Timer_

Steps to test:

1. Navigate to [Home Page](https://igordinuzzi.github.io/malagatrivia/index.html)
2. Scroll down to the form and input the following data:
   - Name: Your name
3. Click "Start Quiz"
4. Once the quiz has started the timer is pacing the questions
5. User should be able to see the timer counting down. 

Expected:

The timer is shown and counts down from 10 seconds to 0.

Actual:

Website behaved as expected, timer counts down.

_Scenario Five - Score_

Steps to test:

1. Navigate to [Home Page](https://igordinuzzi.github.io/malagatrivia/index.html)
2. Scroll down to the form and input the following data:
   - Name: Your name
3. Click "Start Quiz"
4. Once the quiz has started the timer is pacing the questions
5. The user should be able to view scores ranging from 1 to 10.

Expected:

The score label displays and increments from 1 to 10.

Actual:

The website performed as anticipated, and the scoring mechanism is functional.

**Footer Links**

Testing was performed on the Github link in the footer to ensure that each one opened in a new tab.

Opened a new tab when clicked as expected.

**Lighthouse Report:**

- Landing Page
  ![Landing Page Lighthouse](doc/01-light-index.jpg)


- Help Page
  The low accessibility score is attributed to the third-party iframe.
  While iframes can be useful for embedding third-party content, they can also introduce performance and accessibility challenges.
  The third-party iframe is heavy or not well-optimized. Iframes can disrupt the natural tabbing order, making it confusing for users relying on keyboards or screen readers to navigate.
  ![Thank you Lighthouse](doc/02-light-help.jpg)

- 404 Page
  The low accessibility score is attributed to the redirection. In order to ensure users are informed about the impending redirection, I have included a text warning stating that an automatic redirection will occur in 10 seconds unless they take action, in addition to the call to action that directs them back to the homepage.
  ![404 Lighthouse](doc/03-light-error.jpg)  


**W3C Validator results:**

- Landing Page
  ![Landing Page validator](doc/01-check-index.jpg)

- Help Page
  ![Help validator](doc/02-check-help.jpg)

- 404 Page
  ![404 validator](doc/03-check-error.jpg)    

## Deployment:

**Version Control:**

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘Malagatrivia’.
The following git commands were used throughout development to push code to the remote repo:
git add <file> - This command was used to add the file(s) to the staging area before they are committed.
git commit -m “commit message” - This command was used to commit changes to the local repository queue ready for the final step.
git push - This command was used to push all committed code to the remote repository on github.

**Deployment to Github Pages:**

The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the menu on left select 'Pages'
From the source section drop-down menu, select the Branch: main
Click 'Save'
A live link will be displayed in a green banner when published successfully.
The live link can be found [here](https://igordinuzzi.github.io/malagatrivia/index.html)


## Credits

- Written content by ChatGPT
- Iconography [here](https://fontawesome.com/v4/icons/)

**Media:**

- Images by Unsplash

