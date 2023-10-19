# Unity Yoga Collective Website

Unity Yoga Collective is a serene oasis of wellness and self-discovery. 
The studio offers a holistic approach to yoga and well-being, providing a space where individuals of all backgrounds and abilities 
can come together to explore the transformative power of yoga and mindfulness.

Live webpage [here](https://igordinuzzi.github.io/unityoga/)

## Features

- Navigation with links to all pages, responsive on all devices.
Navigation in a webpage is crucial for providing a user-friendly experience by enabling visitors to efficiently explore and access the site's content, ultimately improving user engagement and satisfaction. 
It helps users find information, products, or services, leading to increased usability and retention.
 ![Navigation](doc/nav-desktop.jpg)
![Navigation mobile](doc/nav-mobile.jpg)
  
- Footer with address and Instagram link.
The footer is essential in a webpage as it often contains important contact information, like an address, and links to social media profiles such as Instagram, enhancing user engagement and accessibility. It serves as a valuable reference point for users seeking to connect with the website's owner or follow them on social platforms.
   ![Footer](doc/nav-desktop.jpg)

- Favicon for easy recognition.
The favicon is important in a webpage as it provides a recognizable visual identity in browser tabs, enhancing brand visibility and user recognition, and it helps users quickly locate and return to the site.
  ![Favicon](doc/favicon.png)
  
- Landing page with methodology, newsletter link, and submission form. The landing page with methodology establishes credibility, a newsletter link encourages user engagement and updates, and a submission form captures valuable leads or data, collectively maximizing the webpage's effectiveness in conveying information and fostering user interaction.
    ![Landing Page](doc/homepage.png)
  
- Free Yoga Online page with embedded Vimeo videos.
The "Free Yoga Online" page with embedded Vimeo videos offers accessible, engaging yoga content, promoting health and well-being, and attracts and retains visitors by providing a convenient, in-depth resource for yoga enthusiasts.
  ![Freeyoga](doc/free-yoga.jpg)
  
- Teachers page with teacher profiles. The "Unity Yoga Collective Teachers" page with teacher profiles is essential for users to learn about instructors' qualifications and teaching styles, fostering trust and helping students make informed choices when selecting the right teacher for their needs. It enhances the overall user experience and facilitates a more personalized approach to yoga instruction.

  ![Teacher](doc/teachers.jpg)
  
- Methodology page with yoga types in an accordion. The "Methodology" page with yoga types in an accordion format offers organized, accessible information, allowing users to explore diverse yoga styles and understand the methodology behind them, promoting a more informed and engaging yoga experience. It enhances user education and engagement with the content.

   ![Methodology](doc/methodology.jpg)
  
- Schedule page with class details. The "Unity Yoga Collective Schedule" page with class details is important in a webpage because it provides users with up-to-date information about class times, styles, and instructors, helping them plan their participation and fostering a sense of reliability and trust in the yoga program. It enhances user convenience and encourages regular attendance.
  ![Schedule](doc/schedule.jpg)
  
- Pricing page with package information. The "Unity Yoga Collective Studio Pricing" page with package information is important in a webpage as it helps potential clients understand the cost structure and make informed decisions about their investment in yoga classes, fostering transparency and trust while attracting and retaining customers with clear, accessible pricing details. It aids in user conversion and revenue generation for the studio.
 ![Pricing](doc/pricing.jpg)
 
- Contact page with map, address, and phone details. The "Unity Yoga Collective Studio Contact" page is crucial for users to easily locate the studio, establish a physical connection, and contact the business, enhancing accessibility and trust while promoting in-person visits and inquiries. It provides essential information for user engagement and potential clientele.
  ![Contact](doc/contact.jpg)

 - Thank You Newsletter Subscription Page. A special "Thank You Newsletter Subscription Page" for our community members. When users subscribe to our newsletter, they are redirected to this page, which expresses our gratitude and provides a link back to the homepage. It's a thoughtful way to welcome new subscribers and will re-direct users to the homepage by clicking the hyperlink or re-direct automatically after 10 seconds. 
  ![Thankyou](doc/thank-you.jpg)

 - 404 page - Custom 404 page and the auto-redirect feature to the homepage. The custom 404 page and auto-redirect feature have been seamlessly integrated. This ensures that when a user encounters a 404 error, they will experience a smooth transition to the custom 404 page and subsequently be redirected to the homepage. 
  ![404](doc/404.jpg)

## Existing Features and Features to Implement

**Existing features:**

- JS Accordion for the methodology page: a JavaScript Accordion implemented on the Methodology page to create an interactive and user-friendly interface that allows users to easily expand and collapse content sections for a more organized and engaging experience. 

**Features to Implement:**

- Fix the newsletter submission form (PHP required: rectify the newsletter submission form by implementing PHP to ensure proper functionality and data processing.
  ![Newsletter](doc/newsletter.jpg)

## Wireframes
![Wireframes](doc/wireframes.jpg)


## Technologies

The Unity Yoga Collective website utilizes the following technologies:

- Figma for design.
- Material Icons and FontAwesome for icons.
- CSS for styling.
- HTML for content.
- JavaScript for responsive menu and accordion.
- Visual Studio Code for development.
- GitHub for version control.
- ChatGPT for content creation.

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

I've discovered several errors on the webpage, specifically related to color contrast and headers. I fixed these issues to enhance accessibility and ensure that all users can easily navigate and interact with the content, promoting a more inclusive and user-friendly experience.

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
| Free yoga online| free-yoga-online.html |
| Teachers        | teachers.html         |
| Methodology     | methodology.html      |
| Schedule        | schedule.html         |
| Pricing         | pricing.html          |
| Contact         | contact.html          |
| Thank you page  | thank-you.html         |
| 404 error page  | 404.html              |

Links on all pages navigated to the correct pages as exptected.

**Form Testing**

The form on the home page was tested to ensure it functioned as expected when correct data was input and when incorrect data was input. The following test scenarios were covered:

_Scenario One - Correct Inputs_

Steps to test:

1. Navigate to [Unity Collective Yoga - Home Page](https://igordinuzzi.github.io/unityoga/index.html)
2. Scroll down to the form and input the following data:
   - Email: your@email.com
3. Click Submit
4. User should be redirected to thankyou.html page

Expected:

Form submits with no warnings or errors and user is redirected to thankyou.html page.

Actual:

Website behaved as expected with no errors or warnings and redirected to thankyou.html page.

_Scenario Two - Missing Required Field Email_

Steps to test:

1. Navigate to [Unity Collective Yoga - Home Page](https://igordinuzzi.github.io/unityoga/index.html)
2. Scroll down to the form and input the following data:
   - Email: your@email.com
3. Click Submit

Expected:

The form does not submit and an Error is displayed to tell the user that the field is required.

Actual:

Website behaved as expected, error message was displayed and the form did not submit.

**Footer Social Media Icons / Links**

Testing was performed on the Font Awesome Social Media icons in the footer to ensure that each one opened in a new tab.

Each item opened a new tab when clicked as expected.

**Footer Contact Information**

Testing was performed on the phone number in the contact information section to ensure behaviour was as expected.

_Steps to test Telephone Number_

1. Navigate to [Unity Yoga Collective - Contact](https://igordinuzzi.github.io/unityoga/contact.html)
2. Click the phone number

Expected:

A window is opened asking which device you would like to call from.

Actual:

Behavior was as expected and the window presented me with the following option to call:

- Mobile Phone

**Lighthouse Report:**

- Landing Page
  ![Landing Page Lighthouse](doc/01-light-index.jpg)

- Free yoga videos page
  ![Free yoga video Page Lighthouse](doc/02-light-free-yoga.jpg)
  
- Teachers page
  ![Teachers Page Lighthouse](doc/03-light-teachers.jpg)
  
- Methodology page
  ![Methodology Page Lighthouse](doc/04-light-methodology.jpg)
  
- Schedule page
  ![Schedule Page Lighthouse](doc/05-light-schedule.jpg)
  
- Pricing page
  ![Pricing Page Lighthouse](doc/06-light-pricing.jpg)
  
- Contact page
  ![Contact Page Lighthouse](doc/07-light-contact.jpg)

- Thank You Page
  The low accessibility score is attributed to the redirection. In order to ensure users are informed about the impending redirection, I have included a text warning stating that an automatic redirection will occur in 10 seconds unless they take action, in addition to the call to action that directs them back to the homepage.
  ![Thank you Lighthouse](doc/09-light-thankyou.jpg)

- 404 Page
  The low accessibility score is attributed to the redirection. In order to ensure users are informed about the impending redirection, I have included a text warning stating that an automatic redirection will occur in 10 seconds unless they take action, in addition to the call to action that directs them back to the homepage.
  ![404 Lighthouse](doc/08-light-404.jpg)  


**W3C Validator results:**

- Landing Page
  ![Landing Page validator](doc/01-check-index.png)

- Free yoga videos page
  ![Free yoga video Page validator](doc/02-check-free.png)
  
- Teachers page
  ![Teachers Page validator](doc/03-check-teachers.png)
  
- Methodology page
  ![Methodology Page validator](doc/04-check-methodology.png)
  
- Schedule page
  ![Schedule Page validator](doc/05-check-schedule.png)
  
- Pricing page
  ![Pricing Page validator](doc/06-check-pricing.png)
  
- Contact page
  ![Contact Page validator](doc/07-check-contact.png)

- Thank You Page
  ![Thank you validator](doc/10-check-thankyou.jpg)

- 404 Page
  ![404 validator](doc/11-check-404.jpg)    

## Deployment:

**Version Control:**

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘Unity Yoga’.
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
The live link can be found [here](https://igordinuzzi.github.io/unityoga/)


## Credits

- Written content by ChatGPT
- Javascript accordion found [here](https://www.w3schools.com/howto/howto_js_accordion.asp)
- Burger menu found [here](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
- Icons [here](https://materializecss.com/icons.html)
- Iconography [here](https://fontawesome.com/v4/icons/)

**Media:**

- Images by Unsplash
- Illustration by Freepik
- Logo by Igor Dinuzzi
