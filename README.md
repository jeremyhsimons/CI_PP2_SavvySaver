# **Savvy Saver**
Developed by Jeremy Simons

<img src="readme-docs/design/am-i-responsive-pp2.png">

[Link to live site](https://jeremyhsimons.github.io/CI_PP2_SavvySaver/)

## Introduction
Many young people today enter adult life having no concept of how to manage their finances wisely. They have no experience saving money for large purchases and, in Western countries, are engulfed by one of the most consumerist cultures that has ever existed. This combination of factors means that many are adopting lifestyles that are not conducive to long-term financial stability. 

Savvy Saver is a website that aims to help people like this. It offers three main features that can help young people and those wishing to learn more about saving:

1. The savings calculator: a simple-to-use webform that calculates what you will save and offers a print-out of recommendations for your finances.
2. The Quiz: a small game to test the user's knowledge of some basic principles of managing money.
3. An FAQ page which seeks to answer some questions that users might have about finances, and a contact form with working email notification to submit questions that are not addressed.

These features aims to achieve the project goals below through offering an interactive and responsive website that gives regular visual feedback and notification of what their interactions with the site achieve.

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
    *[Feature Ideas for future development](#feature-ideas-for-future-development)
* [Technologies Used](#technologies-used)
* [Deployment & Local Development](#deployment--local-development)
* [Testing](#testing)
    * [Validation](#validation)
        * [HTML](#html)
        * [CSS](#css)
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

#### **404**
<details>
    <summary>404 page</summary>

</details><br>

## Features
The website has 5 pages and the features of each page are listed below:

<details>
    <summary>404 page</summary>
    <p>The 404 page is where the user is directed if for whatever reason the site breaks and they cannot access a page as expected. It allows the user to navigate back to the rest of the site without clicking the back button in their browser.</p>
    <ul>
        <li>
            <p>Error message that appears in the event of a broken link or an error in the url in the browser's search bar.</p>
        </li>
        <li>
            <p>User story covered: 6.</p>
            <img src="readme-docs/features/form-submit-message.png" alt="A screenshot of the thanks page.">
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
All HTML files were validated using the [w3c vaildation service](https://validator.w3.org/). All pages passed with no errors and no warnings.

[Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F)
[Calculator page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Fcalculator.html)
[FAQ page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Ffaq.html)
[Quiz page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2Fquiz.html)
[404 page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F404.html)

#### **CSS**
The stylesheet for this website was validated using the W3C [Jigsaw](https://jigsaw.w3.org/css-validator/) CSS validation service. The file contained no errors.
[CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjeremyhsimons.github.io%2FCI_PP2_SavvySaver%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### **JS**
The three JavaScript files in this project were tested using JSHint and all passed with no errors. The warnings shown are all notifications that ES6 notation was used.
<img src="readme-docs/validation/jshint-calc.png" alt="A screenshot of the jshint summary of the calculator.js file">
<img src="readme-docs/validation/jshint-contact.png" alt="A screenshot of the jshint summary of the contact_form.js file">
<img src="readme-docs/validation/jshint-quiz.png" alt="A screenshot of the jshint summary of the quiz.js file">


#### **Accessibility**
The site's accessibility was tested using the [WAVE](https://wave.webaim.org/) tool by webaim. All pages passed with no errors or contrast errors.

<details>
    <summary>Home page</summary>
    <img>
</details><br>


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
    <summary>Home page</summary>
    <img src="readme-docs/validation/quiz-perf.png" alt="A screenshot of the quiz page lighthouse report">
</details><br>

### Testing user stories

|User story|Feature|Test|Expected Result|Actual Result|
|---|---|---|---|---|

<details>
    <summary>Screenshots</summary>

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
|Quiz feature would still mark the questions that had been submitted if the user submitted an incomplete form. | Wrap the checkAnswers function in the following if statement after the validation loop to check that all question fields had been validated: `if (i === 4) { checkAnswers(); }` |

## Credits
* The 404 page was created with the help of GitHub's [instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) on how to create a custom 404 page.

### 3rd party code used
* [Google Fonts](https://fonts.google.com/) import link appears at the top of style.css.
* [Fontawesome](https://fontawesome.com/) Characters. Script for this is included at the very bottom of the body element in every html file in the website.
* [favicon.io](https://favicon.io/) code was used in the head elements to generate favicon, and images are stored in assets/images.
* [EmailJS](https://www.emailjs.com/) code was used to make contact form submission function.


### Media
* [Unsplash](https://unsplash.com/)
    * Josh Appel [Coin jar](https://unsplash.com/photos/NeTPASr-bmQ)
    * Kelly Sikkema [Budget](https://unsplash.com/photos/xoU52jUVUXA)
    * Mediamodifier [Calculator](https://unsplash.com/photos/I3HPUolh5hA)
    * Pepi Stojanovski [Dollar bils](https://unsplash.com/photos/MJSFNZ8BAXw)
    * Jp Valery [Burning money](https://unsplash.com/photos/mQTTDA_kY_8)

### Acknowledgements
* Thanks to my Mentor Mo Shami for his feedback, advice and encouragement throughout this project.
* Thanks to the wonderful CI London Community for all the moral support!
