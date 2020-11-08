# Weekend Feedback Loop

## Description

My goal with this project was to create a feedback app that takes in four different fields of information and then stores that information on my database.

I started by creating the pages for the app and the linked them to my index.js with reducers. Once a value is entered into any of the forms, the information is stored in the reducers and once all pages have been completed the user is brought to a Review/Submit page. The user cannot edit their feedback information. Once the feedback is submitted, I used an axios POST call to send that information to my database.

### Usage

1. Enter a number correlating how you are feeling.
2. Click the Next button to continue to the next page.
3. Enter a number correlating how well you understand the content.
4. Click the Next button to continue to the next page.
5. Enter a number correlating how well you are being supported.
6. Click the Next button to continue to the next page.
7. Leave any comments you would like to add to your feedback form.
8. Click the Next button to continue to the next page.
9. This page will show your completed feedback form with an option to submit.
10. Submit your feedback!
11. If you wish to start over and leave another feedback form, click the
    Leave new feedback button.

#### Built With

HTML5, CSS, JavaScript, Express, Postman, Postico, Postgresql, Axios, React, Redux and Sweetalert.

##### License

MIT License

Copyright (c) [2020] [Alex Campbell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

###### Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. I would also like to thank Myron Schippers and Scott Bromander for helping me get through this weekend challenge. The redux with axios pizza parlor lecture is what I based most of my work off of.
