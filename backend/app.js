
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());



// The initial data
let users = [
  {
    "id": 1,
    "title": "MY First Assay",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus omnis earum. Maxime, veritatis repudiandae neque totam aspernatur architecto vero labore, tempore atque, quod soluta suscipit? Perspiciatis iure cumque, ipsam expedita architecto quos harum eaque quod quia placeat, consequatur aliquam tempore quisquam modi fugit veritatis perferendis ab doloremque quibusdam ratione. ",
    "bookmarked": true
    },
    {
    "id": 2,
    "title": "MY Second Assay",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus omnis earum. Maxime, veritatis repudiandae neque totam aspernatur architecto vero labore, tempore atque, quod soluta suscipit? Perspiciatis iure cumque, ipsam expedita architecto quos harum eaque quod quia placeat, consequatur aliquam tempore quisquam modi fugit veritatis perferendis ab doloremque quibusdam ratione. ",
    "bookmarked": false
    },
    {
    "id": 3,
    "title": "MY Third Essay",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus omnis earum. Maxime, veritatis repudiandae neque totam aspernatur architecto vero labore, tempore atque, quod soluta suscipit? Perspiciatis iure cumque, ipsam expedita architecto quos harum eaque quod quia placeat, consequatur aliquam tempore quisquam modi fugit veritatis perferendis ab doloremque quibusdam ratione. ",
    "bookmarked": true
    },
    {
    "title": "What is CORS, Why and How do we use it?",
    "description": "<p>Hello everyone, I hope you are doing well. A few days ago, I took an exam for my internship, and one of the questions was related to what CORS is. As I realized that I did not know the answer during the exam, I decided to write this article. Let’s talk about what CORS is, why and how we can use it. CORS stands for Cross-Origin Resource Sharing.</p><p>Actually If there is any browse you have to know what is CORS, this is good to know for beginning. . To explain it briefly, it is the prevention of a client (Angular, React, Vue, etc.) blocking the request when we receive or make a request from an API, and the situation where we cannot send the desired data or receive the desired data. The syntax, if you haven’t seen it before, is as follows (this example is from React, where a request is made with fetch, but it is blocked by CORS policies and prevented by the client):</p><p><br></p><p><img src=\"https://miro.medium.com/v2/resize:fit:555/1*pKTn-oO8PiNpA1Le2R6K1g.png\" height=\"114\" width=\"444\"></p><p><br></p><h2>WHAT ARE CORS POLICIES?</h2><p>CORS policies are HTTP headers that determine which origins are allowed to access the server’s resources.</p><p><br></p><p><strong>Access-Control-Allow-Origin:</strong>&nbsp;This header specifies the allowed origin URLs for requests. It is used to indicate which origins the server will accept requests from.</p><p><strong>Access-Control-Allow-Methods:</strong>&nbsp;This header lists the HTTP methods that the server will accept. For example, methods like GET, POST, PUT, and DELETE can be specified in this header.</p><p><strong>Access-Control-Allow-Headers:</strong>&nbsp;This header lists the HTTP headers that the server will accept. It can also specify custom headers.</p><p><strong>Access-Control-Allow-Credentials:</strong>&nbsp;This header indicates whether the server will accept requests with credentials, such as cookies.</p><p><strong>Access-Control-Max-Age:</strong>&nbsp;This header specifies the time that a preflight request response can be cached, reducing the number of repeated preflight requests.</p><p><br></p><p><br></p><h2>WHY DO WE USE CORS?</h2><p>Actually, if we want to learn why we use CORS, we need to go to the basics and ask the following question: Why did CORS emerge?</p><p><br></p><p>As with software, technologies and frameworks have emerged to meet the needs. CORS has also emerged to meet a specific need. Let’s take a look at the answer to the question of what would happen if CORS didn’t exist in our lives.</p><p><img src=\"https://miro.medium.com/v2/resize:fit:875/1*CY400o-6xxWPE1vE-jlV2g.png\" height=\"425\" width=\"700\"></p><p>As seen in the above diagram, we have one user as a very simple example: Our user first enters the facebook.com address and logs in with their username and password, which are normal things we use in our daily lives. However, if the same user logs in to an insecure site, problems may arise because a request can be made to facebook.com in the background of the insecure site, and the information of the logged-in users can be requested from facebook.com. This scenario we have given is one of the scenarios that we may encounter in our daily lives.</p><p>Of course, the META may be using much more sophisticated security systems, this is just an example given. In order to avoid such situations, the Browser says: Since the problem is caused by me, I will disable the requests. However, there may be situations where we want to receive requests from another site. In such cases, we can use the policies shown above to only accept and manage requests from certain sites and APIs. The basic principle of CORS is based on this.</p><h2>HOW TO USE CORS?</h2><p>Let’s see how to use CORS with javascript in this usage: For example, let’s only accept requests coming from&nbsp;<a href=\"http://www.exampleurl.com/\" target=\"_blank\" style=\"color: inherit;\">www.exampleurl.com</a>.</p><p><br></p><p><br></p><p><br></p><p>1-) First, we will check the origin field and only allow the URL we want. (Origin: refers to the entire URL that is the source of an HTTP request. This URL includes both the protocol (http, https)</p><p><br></p><p><br></p><p><img src=\"https://miro.medium.com/v2/resize:fit:805/1*STuBLkJNcUJ7IBCKtwQGeg.png\" height=\"205\" width=\"644\"></p><p><br></p><p><br></p><p>2-) In the next step, we will only accept certain HTTP methods. In this part, I only want to allow GET and POST requests:</p><p><br></p><p><br></p><p><br></p><p><img src=\"https://miro.medium.com/v2/resize:fit:755/1*wrxp317W6Rx_K48a1uMvxg.png\" height=\"55\" width=\"604\"></p><p>3-) In this step, we will accept specified HTTP headers.</p><p><img src=\"https://miro.medium.com/v2/resize:fit:809/1*iQ_mHpjJHssjOEl8oVlY3g.png\" height=\"40\" width=\"647\"></p><p><br></p><p><br></p><p><br></p><p>There might be some confusion about the “Content Type” here, so let me clarify: For example, when we send a form, the Content Type is usually “application/x-www-form-urlencoded”. If we’re sending JSON data, the Content Type would be “application/json”. This information ensures that the server interprets the data in the request body correctly.</p><p>4-) In the final step, we will accept requests related to credentials. This step is optional but should be used with caution as it may lead to other security vulnerabilities.</p><p><br></p><p><br></p><p><br></p><p><img src=\"https://miro.medium.com/v2/resize:fit:699/1*CrsHdpblrSYbGK9WrFnV2w.png\" height=\"45\" width=\"559\"></p><p><br></p><p><br></p><p>After when you complate all steps you can take or put the data. Thanks for to read until here. See you later in another topics…</p>",
    "bookmarked": false,
    "id": 5
    }
  
];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
  
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }
  
    res.json(user);
  });

// POST /users
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // simple way to autoincrement id
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex === -1) {
    return res.status(404).json({message: "User not found"});
  }

  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});