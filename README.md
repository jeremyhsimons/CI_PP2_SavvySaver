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

### ...For the site owner

## User Experience

### Target audience
Potential users of the site may include, but are not limited to:

### User requirements

### User Stories

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
The website has 7 pages and the features of each page are listed below:

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

<details>
    <summary>404 page</summary>
    
</details><br>

#### **CSS**
The stylesheet for this website was validated using the W3C [Jigsaw](https://jigsaw.w3.org/css-validator/) CSS validation service. The file contained no errors.

<details>
    <summary>CSS for whole site</summary>
    
</details>

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
|EmailJS would work but would not display the user's email address and name when submitted. || re-copied the existing code from emailjs.com and added a templateParams object to get these elements from the DOM and send them with the API. |

## Credits
* The 404 page was created with the help of GitHub's [instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) on how to create a custom 404 page.

### 3rd party code used
* [Google Fonts](https://fonts.google.com/) import link appears at the top of style.css.
* [Fontawesome](https://fontawesome.com/) Characters. Script for this is included at the very bottom of the body element in every html file in the website.
* [favicon.io](https://favicon.io/) code was used in the head elements to generate favicon, and images are stored in assets/images.
* [EmailJS](https://www.emailjs.com/) code was used to make contact form submission function.


### Media
* Unsplash

### Acknowledgements
* Thanks to my Mentor Mo Shami for his feedback, advice and encouragement throughout this project.
* Thanks to the wonderful CI London Community
