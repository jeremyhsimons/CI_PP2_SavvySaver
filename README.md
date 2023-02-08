# **Savvy Saver**
Developed by Jeremy Simons

<img src="readme-docs/design/ss-amiresponsive2.png" alt="A screenshot of Am I Responsive representation of the website">

[Link to live site](https://jeremyhsimons.github.io/CI_PP2_SavvySaver/)

## Introduction
Many young people today enter adult life having no concept of how to manage their finances wisely. They have no experience saving money for large purchases and, in Western countries, are engulfed by one of the most consumerist cultures that has ever existed. This combination of factors means that many are adopting lifestyles that are not conducive to long-term financial stability. 

Savvy Saver is a website that aims to help people like this. It offers three main features that can help young people and those wishing to learn more about saving:

1. The savings calculator: a simple-to-use webform that calculates what you will save and offers a print-out of recommendations for your finances.
2. The Quiz: a small game to test the user's knowledge of some basic principles of managing money.
3. An FAQ page which seeks to answer some questions that users might have about finances, and a contact form with working email notification to submit questions that are not addressed.

These features aims to achieve the project goals [below](#project-goals) through offering an interactive and responsive website that gives regular visual feedback and notification of what their interactions with the site achieve.

## Contents
* [Project Goals](#project-goals)<br>
    * [For the user](#for-the-user)
    * [For the site owner](#for-the-site-owner)
* [User Experience](#user-experience)<br>
    * [Target audience](#target-audience)
    * [User requirements](#user-requirements)
    * [User Stories](#user-stories)
* [Design](#design)
    * [Design Summary](#design-summary)
    * [Colour Scheme](#colour-scheme)
    * [Wireframes](#wireframes)
* [Features](#features)
    * [Feature Ideas for future development](#feature-ideas-for-future-development)
* [Technologies Used](#technologies-used)
* [Deployment & Local Development](#deployment--local-development)
* [Testing](#testing)
    * [Validation](#validation)
        * [HTML](#html)
        * [CSS](#css)
        * [JavaScript](#js)
        * [Accessibility](#accessibility)
        * [Performance](#performance)
    * [Testing user stories](#testing-user-stories)
    * [Bugs](#bugs)
* [Credits](#credits)

## Project Goals

### ...For the user
* This project will be a helpful tool in checking whether they meet their savings goal.
* This project will offer information/education about how to manage their finances/budget better.
* Where either of these things is not achieved, This project will have a way for feedback to be given to the site owner about problems/questions.

### ...For the site owner
* This project will help others who are looking to manage their money better.
* This project will answer a good proportion of the questions that the user may have about the site itself and how to use it.
* This project will showcase the site owner's development skills and direct users to their GitHub page.

## User Experience

### Target audience
Potential users of the site may include, but are not limited to:
* Young people, university students, or recent graduates who are entering the workplace.
* People who may have been in the workplace for a while, but who are looking to improve how they manage their money.
* People who are looking to save for a significant expense and want an easy way to find out how best to do it.

### User requirements
* The features of the site work as expected and any interaction provides visual or information feedback/notification.
* Users can calculate their savings.
* Users can print off their results.
* Users can send a message to site owner.
* Users can complete a quiz and keep track of their highscore while on the tab.
* Site content is accessible to users with visual impairments.
* User can access the site on multiple kinds of devices/screen widths.

### User Stories
#### As a first time user...
* (1) I want to easily navigate the site to find both main features (i.e. savings and time-frame calculators). 
* (2) I want to enter my take-home pay, expenses, interest rate, and savings target to find out how long it will take me (in months) to reach my financial goals. 
* (3) I might not have a lot of experience in managing my finances and I want to find more information about saving/definitions of jargon terms.
* (4) I want to interact with the Savvy Saver website and test my knowledge of managing personal finances. 
* (5) I want to be able to contact the site owner to ask more questions that are not addressed in the site content. 
* (6) I want the site to be intuitive to use/give me feedback on what my interactions with site elements will achieve.

#### As a returning user... 
* (7) I want to recalculate my savings or time-frame to reach my goals if my income/expenses/interest rate changes.
* (8) I want the results of my calculation to be displayed in a clear, visually pleasing manner.
* (9) I want to be able to save a copy of the information breakdown so that I can return to the data/compare it to new data in the future.
* (10) I want to test my knowledge to see how my finances and attitudes to finances have improved.

#### As the site owner...
* (11) I want to direct users to the main calculator feature of the site, whilst also making it easy to access other features.
* (12) I want all inputs/user actions to have error handling and warnings that log to the console to minimize the impact of user error and feedback to users the correct actions they should take.
* (13) I want the features to be clear and self-explanatory in case the user does not have much experience managing their personal finances.
* (14) I want the site to have an FAQ with links to external resources in case first-time users have additional questions about managing their finances. 
* (15) I want a way for users to contact me and offer me feedback about the site/ask questions that are not addressed on the site. 
* (16) I want to be sure that if users break the url or if a link in the site breaks they can get back to site content
* (17) I want to advertise my social media pages and GitHub account.

## Design

### Design Summary
The aim of this website's design is to make the user feel like managing their personal finances is something that they can manage. The features of the site need to be simple enough to give the users confidence that what they learn here can be immediately transferred to how they manage their money. The design does not want to leave the user feeling confused and lost because that may make them feel lost and confused about managing their money and perhaps getting out of a bad financial situation.

As a result the design of this site needed to be:
* Simple.
* Intuitive.
* Offer the user feedback on their actions.
* Be interactive to aid learning.
* Be accessible so that a wide range of users can benefit from the site's features.

### Colour Scheme
[Colormind.io](http://colormind.io/) was used to generate the colorscheme for this website.

<img src="readme-docs/design/colour-palate.png">

### Fonts
[Google Fonts](https://fonts.google.com/) was used to import fonts into this website.

Ubuntu was chosen as the main font in the website because of it's readability and less severe/corporate style. The design of the website needs to appeal to younger users or users who might not be acquainted with good financial practices and so a colder and less-readable font would potentially deter prospective users.

Sans-serif was chosen as the back-up font - in case Ubuntu doesn't load - because of it's clear readability.

### Page layout

Each page subsequent to the landing page has a similar layout. Heading and page summary are at the top of each page and there is a sticky footer with a navigation bar at the bottom. different sections of pages or groups of information are given separate colour schemes to denote their unique function.

### Wireframes

The wireframes below were created using [figma](https://www.figma.com/). The layout for each of the pages has been designed to suit mobile, tablet, and desktop devices.

<details>
    <summary>Home page</summary>
    <img src="readme-docs/wireframes/ss-mobile-home.png" alt="Home page wireframe mobile">
    <img src="readme-docs/wireframes/ss-tablet-home.png" alt="Home page wireframe tablet">
    <img src="readme-docs/wireframes/ss-desktop-home.png" alt="Home page wireframe desktop">
</details><br>

<details>
    <summary>Calculator page</summary>
    <img src="readme-docs/wireframes/ss-mobile-calc.png" alt="Calculator page wireframe mobile">
    <img src="readme-docs/wireframes/ss-tablet-calc.png" alt="Calculator page wireframe tablet">
    <img src="readme-docs/wireframes/ss-desktop-calca.png" alt="Calculator page wireframe desktop">
</details><br>

<details>
    <summary>FAQ page</summary>
    <img src="readme-docs/wireframes/ss-mobile-faq.png" alt="FAQ page wireframe mobile">
    <img src="readme-docs/wireframes/ss-tablet-faq.png" alt="FAQ page wireframe tablet">
    <img src="readme-docs/wireframes/ss-desktop-faq.png" alt="FAQ page wireframe desktop">
</details><br>

<details>
    <summary>Quiz page</summary>
    <img src="readme-docs/wireframes/ss-mobile-quiz.png" alt="quiz page wireframe mobile">
    <img src="readme-docs/wireframes/ss-tablet-quiz.png" alt="quiz page wireframe tablet">
    <img src="readme-docs/wireframes/ss-desktop-quiz.png" alt="quiz page wireframe desktop">
</details><br>

<details>
    <summary>404 page</summary>
    <img src="readme-docs/wireframes/ss-mobile-404.png" alt="404 page wireframe mobile">
    <img src="readme-docs/wireframes/ss-tablet-404.png" alt="404 page wireframe tablet">
    <img src="readme-docs/wireframes/ss-desktop-404.png" alt="404 page wireframe desktop">
</details><br>

## Features
The website has 5 pages and the features of each page are listed below:

<details>
    <summary>Home page</summary>
    <p>The home page is the first thing the user sees. It gives insructions on how to use the calculator and directs the user to other features.</p>
    <ul>
        <li>
            <p>Instructions for how to use the calculator feature on the site.</p>
        </li>
        <li>
            <p>User story covered: 6, 13</p>
            <img src="readme-docs/features/instructions-home.png" alt="A screenshot of the home page instructions.">
        </li>
        <li>
            <p>Button directing the user to the calculator feature.</p>
        </li>
        <li>
            <p>User story covered: 11</p>
            <img src="readme-docs/features/button-home.png" alt="A screenshot of the button on home page.">
        </li>
        <li>
            <p>Navbar directing users to the rest of the site's features.</p>
        </li>
        <li>
            <p>User story covered: 1, 11</p>
            <img src="readme-docs/features/navbar-home.png" alt="A screenshot of the navigation bar">
        </li>
                <li>
            <p>Footer directing users to the site owner's social media pages.</p>
        </li>
        <li>
            <p>User story covered: 17</p>
            <img src="readme-docs/features/footer-home.png" alt="A screenshot of the socials footer">
        </li>
    </ul>
</details><br>

<details>
    <summary>Calculator page</summary>
    <p>The calculator page is the main feature of the site and contains a form which the user fills in to check if they will meet their savings goal.</p>
    <ul>
        <li>
            <p>Calculator form.</p>
        </li>
        <li>
            <p>User story covered: 2, 7</p>
            <img src="readme-docs/features/calc-form.png" alt="A screenshot of the calculator form">
        </li>
        <li>
            <p>Results of their calculation and recommendations that are generated based on the user's inputs</p>
        </li>
        <li>
            <p>User story covered: 8</p>
            <img src="readme-docs/features/results-calc.png" alt="A screenshot of the results sections generated by the form submission">
        </li>
        <li>
            <p>Button to print the user's personalised results section, with a pop up notification to warn the user that this action will also reset the form.</p>
        </li>
        <li>
            <p>User story covered: 6, 9</p>
            <img src="readme-docs/features/print-calc.png" alt="A screenshot of the print button">
        </li>
    </ul>
</details><br>

<details>
    <summary>FAQ page</summary>
    <p>The FAQ page offers extra information about how to manage savings and answers to common questions new users might have. It also features a contact form to reach the site owner with any questions or problems.</p>
    <ul>
        <li>
            <p>A list of potential questions and answers that users might have.</p>
        </li>
        <li>
            <p>User story covered: 3, 14</p>
            <img src="readme-docs/features/faq-faq.png" alt="A screenshot of the questions on the FAQ page.">
        </li>
        <li>
            <p>Contact form that the user can use to reach the site owner.</p>
        </li>
        <li>
            <p>User story covered: 5, 15</p>
            <img src="readme-docs/features/contact-faq.png" alt="A screenshot of the contact form">
        </li>
    </ul>
</details><br>

<details>
    <summary>Quiz page</summary>
    <p>The quiz page is a small game that the user can play to test their knowledge of some of the principles explained in the calculator results.</p>
    <ul>
        <li>
            <p>Score counter that records the user's best quiz score in the session.</p>
        </li>
        <li>
            <p>User story covered: 4, 10</p>
            <img src="readme-docs/features/score-counter-quiz.png" alt="A screenshot of the score counter">
        </li>
                <li>
            <p>Quiz form that tests users' knowledge.</p>
        </li>
        <li>
            <p>User story covered: 4, 10</p>
            <img src="readme-docs/features/quiz-quiz.png" alt="A screenshot of the quiz.">
        </li>
                <li>
            <p>Feedback on questions that appears after check answers button is clicked.</p>
        </li>
        <li>
            <p>User story covered: 4, 10, 6</p>
            <img src="readme-docs/features/feedback-quiz.png" alt="A screenshot of the quiz feedback elements.">
        </li>
                <li>
            <p>Alert that pops up if incomplete quiz is submitted</p>
        </li>
        <li>
            <p>User story covered: 6, 12</p>
            <img src="readme-docs/features/alert-quiz.png" alt="A screenshot of an alert to the user who has submitted an incomplete quiz.">
        </li>
    </ul>
</details><br>

<details>
    <summary>404 page</summary>
    <p>The 404 page notifies users that they have tried to access a page that does not exist, or a link has broken, or they have mistyped the url. It offers navigation back to the main content of the site without having to click the browser's back button.</p>
    <ul>
        <li>
            <p>Error message that appears in the event of a broken link or an error in the url in the browser's search bar.</p>
        </li>
        <li>
            <p>User story covered: 16</p>
            <img src="readme-docs/features/404-404.png" alt="A screenshot of the 404 page.">
        </li>
    </ul>
</details><br>

### Feature ideas for future development
In future the website could be further developed and improved to offer greater insights for users into their finances. Possible future features could include:
* In the calculator...
    * A currency converter for non-UK users.
    * Different recommendations based on best practices in other countries/regions based on their legislation.
    * Increased FAQ page answering more questions.
    * A greater number of quiz questions which are stored in a database and randomly selected for the user each time they play.

## Technologies Used
### Languages used
HTML, CSS, JavaScript

### Other tools/websites/libraries used
* [figma](https://www.figma.com/) was used to create wireframes.
* [Git](https://git-scm.com/) was used for version control.
* [GitHub](https://github.com/) was used for saving and storing files.
* [GitPod](https://gitpod.io/) was the IDE used for writing and editing code.
* [colormind.io](http://colormind.io) was used to generate the colour palate for the site.
* [Google Fonts](https://fonts.google.com/) was used for the fonts on the website.
* [Font Awesome](https://fontawesome.com/) was used to generate social media icons in the site.
* [Favicon.io](https://favicon.io/) was used to generate the site's favicon.
* [amiresponsive](https://ui.dev/amiresponsive?url=https://jeremyhsimons.github.io/CI_PP2_SavvySaver/) was used to test the website across different screens and generate the picture in the [Design](#design) section.
* Google Chrome Developer Tools was used to debug the website.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) within Chrome's Developer Tools was used to test the website's performance. 
* The W3 validators for [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/) were used to test the website's code.
* The WebAIM [WAVE](https://wave.webaim.org/) tool was used to test accessibility.
* JSHint for JavaScript validation [JSHint](https://jshint.com/).
* [EmailJS API](https://www.emailjs.com/) to make contact form submission work.

## Deployment & Local Development
The website was deployed to GitHub pages using the following process:
1. In the repository selecting the 'settings' tab.
2. In the left-hand aside, selecting the pages option.
3. Next, for the 'source' dropdown, make sure 'deploy from a branch' is selected, and 'main' is selected in the dropdown menu directly below.
4. Click save and wait a few minutes for the page to refresh. At the top of the page there should now be a url to the site: https://jeremyhsimons.github.io/CI_PP1_FATMC/ 

This repository can be forked using the following process:
1. On the repository's page, go to the top-right of the page underneath the dark ribbon.
1. Click on the fork button
1. You can now work on a fork of this project. 

This repository can be cloned using the following process:
1. Go to this repository's page on GitHub.
1. Click on the code button (not the one in the navbar, but the one right above the file list).
1. Select an option, HTTPS, SSH, GitHub CLI.
1. Copy the url below to your clipboard.
1. Open Git Bash/your IDE terminal.
1. Ensure the directory you are working in is the correct one you want to paste the project into.
1. Type the command '$ git clone'
1. Paste the URL of the repository after this.
1. Hit enter on your keyboard and the project will be cloned.
 
## Testing
### Debugging
The site was debugged using Google Chrome Developer tools. The site was also tested using the following browsers: 
* Google Chrome
* Mozilla Firefox
* Microsoft Edge

The site was tested on the following devices:
* Lenovo Ideapad 520S (Windows 10)
* Huawei PSmart 2019 (EMUI version 12.0.0)

### Validation
#### **HTML**
All HTML files were validated using the [w3c vaildation service](https://validator.w3.org/). All pages passed with no errors. The only warning is on the FAQ page and pertains to the script tag from the EmailJS API (not my code).

* [Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F)
* [Calculator page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Fcalculator.html)
* [FAQ page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Ffaq.html)
* [Quiz page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Fquiz.html)
* [404 page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F404.html)

#### **CSS**
The stylesheet for this website was validated using the W3C [Jigsaw](https://jigsaw.w3.org/css-validator/) CSS validation service. The file contained no errors.
* [CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### **JS**
The three JavaScript files in this project were tested using JSHint and all passed with no errors. The contact.js file had one undefined variable (`emailjs`) from the EmailJS API code.

<details>
    <summary>calculator.js</summary>
    <img src="readme-docs/validation/jshint-calc.png" alt="A screenshot of the jshint summary of the calculator.js file">
</details><br>

<details>
    <summary>contact_form.js</summary>
    <img src="readme-docs/validation/jshint-contact.png" alt="A screenshot of the jshint summary of the contact_form.js file">
</details><br>

<details>
    <summary>quiz.js</summary>
    <img src="readme-docs/validation/jshint-quiz.png" alt="A screenshot of the jshint summary of the quiz.js file">
</details><br>


#### **Accessibility**
The site's accessibility was tested using the [WAVE](https://wave.webaim.org/) tool by webaim. All pages passed with no errors or contrast errors.

* [Home page](https://wave.webaim.org/report#/https://jeremyhsimons.github.io/CI_PP2_SavvySaver/index.html)
* [Calculator page](https://wave.webaim.org/report#/https://jeremyhsimons.github.io/CI_PP2_SavvySaver/calculator.html)
* [FAQ page](https://wave.webaim.org/report#/https://jeremyhsimons.github.io/CI_PP2_SavvySaver/faq.html)
* [Quiz page](https://wave.webaim.org/report#/https://jeremyhsimons.github.io/CI_PP2_SavvySaver/quiz.html)
* [404 page](https://wave.webaim.org/report#/https://jeremyhsimons.github.io/CI_PP2_SavvySaver/404.html)

#### **Performance**
The performance of the website was tested using Lighthouse within Chrome developer tools. The tests below were for desktop devices and all pages acheived a score above 90/100 for the criteria of performance, accessibility, best practices, and SEO.

<details>
    <summary>Home page</summary>
    <img src="readme-docs/validation/home-perf.png" alt="A screenshot of the home page lighthouse report">
</details><br>

<details>
    <summary>Calculator page</summary>
    <img src="readme-docs/validation/calc-perf.png" alt="A screenshot of the calculator page lighthouse report">
</details><br>

<details>
    <summary>FAQ page</summary>
    <img src="readme-docs/validation/faq-perf.png" alt="A screenshot of the FAQ page lighthouse report">
</details><br>

<details>
    <summary>Quiz page</summary>
    <img src="readme-docs/validation/quiz-perf.png" alt="A screenshot of the quiz page lighthouse report">
</details><br>

### Testing user stories

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 1. Navigate main features | Navigation bar | Starting at home page navigate to about page and reviews page. | Navigation elements lead to the expected pages. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us1-1.png" alt="A screenshot of the home page"><br>
    <img src="readme-docs/testing-user-stories/us1-2.png" alt="A screenshot of the calculator nav element highlighted"><br>
    <img src="readme-docs/testing-user-stories/us1-3.png" alt="A screenshot of the calculator page"><br>
    <img src="readme-docs/testing-user-stories/us1-4.png" alt="A screenshot of the faq nav element highlighted"><br>
    <img src="readme-docs/testing-user-stories/us1-5.png" alt="A screenshot of faq page"><br>
    <img src="readme-docs/testing-user-stories/us1-6.png" alt="A screenshot of quiz nav element highlighted"><br>
    <img src="readme-docs/testing-user-stories/us1-7.png" alt="A screenshot of quiz page">
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 2. Use calculator to see if I can reach my financial goals (first time user)  | Calculator form | Enter details into form fields and click 'calculate' button | To be directed to the results of my calculation | Works as expected. |


<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us2-1.png" alt="A screenshot of the calculator form"><br>
    <img src="readme-docs/testing-user-stories/us2-2.png" alt="A screenshot of the calculate button highlighted"><br>
    <img src="readme-docs/testing-user-stories/us2-3.png" alt="A screenshot of the calculator results section"><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 3. Find answers to questions I have (first time user) | FAQ | Navigate to FAQ page | To be directed to the FAQs | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us1-1.png" alt="A screenshot of the home page"><br>
    <img src="readme-docs/testing-user-stories/us1-4.png" alt="A screenshot of the faq nav element highlighted"><br>
    <img src="readme-docs/testing-user-stories/us1-5.png" alt="A screenshot of faq page"><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 4. Interact with the site and test my knowledge | Quiz | Navigate to the quiz and attempt it, submitting answers and clicking 'check answers'. | For quiz submission to result in feedback about how well I did in the quiz. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us4-1.png" alt="A screenshot of the quiz completed and check answers button highlighted."><br>
    <img src="readme-docs/testing-user-stories/us4-2.png" alt="A screenshot of the quiz answers displayed."><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 5. Contact the site owner if I have any questions/probelms to report. | Contact form | Navigate to the FAQ page and fill out the contact form, and click 'send'. | After submitting the form, feedback to be sent to the user notifying success/failure. Emails should also be sent successfully. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>Form filled out</p>
    <img src="readme-docs/testing-user-stories/us5-1.png" alt="A screenshot of the contact form filled out."><br>
    <p>Form successfully submitted.</p>
    <img src="readme-docs/testing-user-stories/us5-2.png" alt="A screenshot of the contact form success notification."><br>
    <p>Email received from Savvy Saver site.</p>
    <img src="readme-docs/testing-user-stories/us5-3.png" alt="A screenshot of the email received to the site owner's inbox from the website."><br>
    <p>Auto reset after sending success.</p>
    <img src="readme-docs/testing-user-stories/us5-4.png" alt="A screenshot of the form which has automatic reset after sending message."><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 6. For the site to be intuitive/give feedback on user actions (first time user) | Calculator form print/reset | From the calculator page, submit form, then hover over the print/reset button. | When user hovers over this button they should be notified as to what the button will do (i.e. warned that this button will also reset the form fields that they have already taken the time to fill in.) | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us1-3.png" alt="A screenshot of the calc page."><br>
    <p>The popup displayed by hovering over the print/reset button</p>
    <img src="readme-docs/testing-user-stories/us6-1.png" alt="A screenshot of the print/reset button popup."><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 7. Return and recalculate savings to see if finances have improved. | Calculator form | See user story 2 - same test | See user story 2 - same test | See user story 2 - same test |

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 8. For the calculator results to be displayed in a clear, visually pleasing manner. | Results section generated after calculator submission | From the calculator page, submit form. | When the user submits the form the page should automatically scroll down to the results of their calculation which should appear in 3 clear sections. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <img src="readme-docs/testing-user-stories/us8-1.png" alt="A screenshot of the 3 results sections.">
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 9. To save a copy of user's results for future reference | Calculator form print/reset | From the calculator page, submit form, then click the print/reset button. | When user clicks this button, the print dialog should open, allowing them to save a pdf of the page to their local device. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>Clicking the print/reset button</p>
    <img src="readme-docs/testing-user-stories/us6-1.png" alt="A screenshot of the print/reset button"><br>
    <p>Print dialog opens.</p>
    <img src="readme-docs/testing-user-stories/us9-1.png" alt="A screenshot of the print dialog"><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 10. To test the knowledge of the user and see if their knowledge has improved | Quiz/Score counter | From the quiz page, complete the quiz form and submit. Then, click 'try again'. After this, complete the form again, submit, and then click 'try again' a second time. | When user clicks try again the first time their score should be saved as the current high score. If their second attempt yields a higher score, the high score counter will save their new score as the high score. If not, the high score remains the same. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>quiz filled out and clicking the check answers button.</p>
    <img src="readme-docs/testing-user-stories/us10-1.png" alt="A screenshot of the quiz filled out and clicking the check answers button"><br>
    <img src="readme-docs/testing-user-stories/us10-2.png" alt="A screenshot of answers checked"><br>
    <p>clicking the try again button.</p>
    <img src="readme-docs/testing-user-stories/us10-3.png" alt="A screenshot of user clicking the try again button"><br>
    <img src="readme-docs/testing-user-stories/us10-4.png" alt="A screenshot of alert of new high score"><br>
    <p>New high score displayed.</p>
    <img src="readme-docs/testing-user-stories/us10-5.png" alt="A screenshot of high score displayed in the high score section"><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 11. (site owner) To direct users to main feature and other features easily | Navigation bar | See user story 1 - same test | See user story 1 - same test | See user story 1 - same test |

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 12. (site owner) For user error to be caught by the site and for appropriate feedback to be given | Calculator | From the calculator page, fill out the form with an empty field | When the user submits the form with an empty field, the site should alert them to the fact that they have submitted erroneously and suggest actions that they should take. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>Missing income field.</p>
    <img src="readme-docs/testing-user-stories/us12-1.png" alt="A screenshot of calculator with empty field."><br>
    <p>'calculate' is clicked.</p>
    <img src="readme-docs/testing-user-stories/us12-2.png" alt="A screenshot of calculate button clicked."><br>
    <p>Notification that user cannot submit if there is an empty field.</p>
    <img src="readme-docs/testing-user-stories/us12-3.png" alt="A screenshot of notifcation of missing input."><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 13. (site owner) For site features to be self explanatory | Calculator | From the home page, read instructions. Then on calculator page, read extra information given in the form. | When the user reads the instructions they should be able to grasp that see that a) the form has template answers pre-filled, b) the interest is assumed to be compounded each month c) the timescale should also be measured in months.| Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>Instructions for the user</p>
    <img src="readme-docs/testing-user-stories/us13-1.png" alt="A screenshot of the home page instructions"><br>
    <p>Information for the user about how the form is laid out and what results they can expect.</p>
    <img src="readme-docs/testing-user-stories/us13-2.png" alt="A screenshot of the calculator form info"><br>
    <p>Info clarifying what inputs they need to enter.</p>
    <img src="readme-docs/testing-user-stories/us13-3.png" alt="A screenshot of extra text under interest and timescale fields"><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 14. (site owner) For the site to have an FAQ for users who have questions. | FAQ | See user story 3 - same test. | See user story 3 - same test. | See user story 3 - same test. |

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 15. (site owner) For the site to have a contact page for users to reach owner with any questions/problems | Contact form | See user story 5 - same test. | See user story 5 - same test. | See user story 5 - same test. |

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 16. (site owner) For the site to have a 404 page to manage users mistyping urls or links breaking. | 404 page | From home page, access the url bar in browser and break the url. | When the url is broken, the user should be directed to a custom 404 page from which they can re-navigate back to the site. | works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>User breaks url</p>
    <img src="readme-docs/testing-user-stories/us16-1.png" alt="A screenshot of broken url."><br>
    <p>404 page displayed</p>
    <img src="readme-docs/testing-user-stories/us16-2.png" alt="A screenshot of 404 page."><br>
</details><br>

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|
| 17. (site owner) For the site to advertise social media pages | Site footer | From any page, click all the social media icons in the footer | The social media icons direct user to the expected pages. | Works as expected. |

<details>
    <summary>Screenshots</summary>
    <p>Facebook clicked.</p>
    <img src="readme-docs/testing-user-stories/us17-1.png" alt="A screenshot of the socials footer with FB clicked on"><br>
    <p>Facebook opens in a new tab.</p>
    <img src="readme-docs/testing-user-stories/us17-2.png" alt="A screenshot of the site owner's facebook page"><br> 
    <p>GitHub clicked.</p>
    <img src="readme-docs/testing-user-stories/us17-3.png" alt="A screenshot of the socials footer with FB clicked on"><br>
    <p>GitHub repo opens in a new tab.</p>
    <img src="readme-docs/testing-user-stories/us17-4.png" alt="A screenshot of the site owner's GitHub repo for this website"><br> 
    <p>LinkedIn clicked.</p>
    <img src="readme-docs/testing-user-stories/us17-5.png" alt="A screenshot of the socials footer with FB clicked on"><br>
    <p>LinkedIn opens in a new tab.</p>
    <img src="readme-docs/testing-user-stories/us17-6.png" alt="A screenshot of the site owner's LinkedIn page"><br> 
</details><br>

### Bugs

| Bug Description  | Action Taken to Fix  |
|---|---|
|Could not re-submit new calculator form data once the 'calculate' button had been pressed. |Add a statement to clear the inputs array of the previous calculation's data. |
|An error would be logged if a charity figure that was 10% of income was submitted. |Alter the conditional statement in checkRecommendations() to check if `charity <= (pay / 10)` rather than `charity < (pay / 10)`. |
|Calculator page would freeze if the form was submitted with empty fields. | Added a validation function to check if fields were null or empty strings and alert the user to make changes if needed. |
|Calculator Page would freeze if users costs field totalled more than the income sum. | Added another conditional statement to the validation function to check if income < costs and alert the user that they will not save money with this current budget, and need to re-organise it before using the calculator feature. |
|Print button would remove the user's values from the fields and reset to default "0" that is coded as the value attribute in the form's html. | Added `location.reload()` to make the print function reload the page to the default values. The print button now works as a reset button as well. |#
|EmailJS would work but would not display the user's email address and name when submitted. | Re-copied the existing code from emailjs.com and added a templateParams object to get these elements from the DOM and send them with the API. |
|Quiz feature would still mark the questions that had been submitted if the user submitted an incomplete form. | Wrap the checkAnswers function in the following if statement after the validation loop to check that all question fields had been validated: `if (i === 5) { checkAnswers(); }` |

## Credits
* The 404 page was created with the help of GitHub's [instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) on how to create a custom 404 page.

### 3rd party code used
#### External APIs/libraries
* [Google Fonts](https://fonts.google.com/) import link appears at the top of style.css.
* [Fontawesome](https://fontawesome.com/) Characters. Script for this is included at the very bottom of the body element in every html file in the website.
* [favicon.io](https://favicon.io/) code was used in the head elements to generate favicon, and images are stored in assets/images.
* [EmailJS](https://www.emailjs.com/) code was used to make contact form submission function.

#### Code found online when solving bugs in own code.
* [StackOverflow](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary) How to round to 2dp in JS, Brian Ustas.
* [Codexworld](https://www.codexworld.com/print-page-area-javascript/#:~:text=JavaScript%20Code%3A&text=You%20can%20use%20this%20function,or%20full%20web%20page%20content.&text=Use%20the%20printPageArea()%20function,which%20you%20want%20to%20print.) How to print just a page area in JS.
* [javascript.info](https://javascript.info/array-methods#shuffle-an-array) How to shuffle and array in JS.
* [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/) How to find out if radio input is checked.
* [Code with Voran](https://www.youtube.com/watch?v=dgcYOm8n8ME) How to get the EmailJS API to work.

### Media
* [Unsplash](https://unsplash.com/)
    * Josh Appel [Coin jar](https://unsplash.com/photos/NeTPASr-bmQ)
    * Kelly Sikkema [Budget](https://unsplash.com/photos/xoU52jUVUXA)
    * Mediamodifier [Calculator](https://unsplash.com/photos/I3HPUolh5hA)
    * Pepi Stojanovski [Dollar bils](https://unsplash.com/photos/MJSFNZ8BAXw)
    * Jp Valery [Burning money](https://unsplash.com/photos/mQTTDA_kY_8)

### Acknowledgements
* Thanks to my Mentor Mo Shami for his <strong>immensely valuable</strong> feedback, advice and encouragement throughout this project!
* Thanks to the wonderful CI London Community for all the moral support!
* Thanks to Katie McLaren for being my Rubber Ducky and for testing site features and offering feedback on how it feels to use!
