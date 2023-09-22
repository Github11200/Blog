// This is the array that contains the data for each post
let Posts = [
    {
        title: "React JS, the Revolutionary UI Library",
        id: "ReactJSPost",
        date: "September 19, 2023",
        author: "Jinay Patel",
        profilePicture:
            "https://th.bing.com/th/id/R.fbf52f6fbf2e60204197dde48dc48d17?rik=wkdcHzjbejBxuA&pid=ImgRaw&r=0",
        imageSrc:
            "https://th.bing.com/th/id/OIP.HLxLvGJV-6r8ZR8AK4F9KAHaEO?pid=ImgDet&rs=1",
        summary:
            "React JS is a very popular framework and has revolutionized the way we create UIs, but what is it?, and how has it become such a popular JavasScript library powering some of the biggest companies in the world?",
        bannerImage:
            "https://th.bing.com/th/id/OIP.HLxLvGJV-6r8ZR8AK4F9KAHaEO?pid=ImgDet&rs=1",
        content: [
            {
                sectionTitle: "What is React JS?",
                sectionContent:
                    "React JS is a javascript library for creating UIs which was released in 2013 from developers at Meta. Since then it has continued to grow to become the most popular JS library for creating UIs. The library is heavily dependent on the open source community unlike other frameworks such as Angular which has a very closed ecosystem.",
            },
            {
                sectionTitle: "How does React JS work?",
                sectionContent:
                    "React JS, like other JS libraries for UIs, organizes everything into reusable components. So if you had a footer component then you can reuse that on every page instead of writing the same code again. Behind the scenes it creates a virtual DOM in its memory where it updates any changes that are made to the UI (eg. the user clicks a button for incrementing a counter). In React JS there is also a thing called JSX which stands for Javascript Syntax Extension. Basically what this does is it brings the HTML into the Javascript, so, unlike a framework like Svelte, you can easily navigate through the code and see what everything is doing really easily because you can directly insert variables or expressions into the HTML using curly braces. Plus, whenever this data changes (eg. the value of a counter), React will automatically update the UI to reflect those changes.",
            },
            {
                sectionTitle: "Why is React JS the most popular JS framework?",
                sectionContent:
                    "Now that you’ve seen a few features you may have the question about why React JS is so popular, especially when other frameworks like Angular were released even earlier. Personally, I think it’s the entire ecosystem of tools around it that make it so popular, and unlike other frameworks like Angular, it doesn’t have a closed ecosystem of tools. This means if you did want to switch to a newer framework such as Solid JS or Svelte (which are actually fairly faster) you won’t find the same ecosystem of tools because they haven’t been around for that long and aren’t as popular.",
            },
            {
                sectionTitle: "Conclusion",
                sectionContent:
                    "I hope that you now have a better understanding of React, some of its features and why it is such a popular and great framework to use. Ultimately, the decision of which framework you want to use is up to personal preference and it also may depend on the project requirements. Some people may like how Svelte brings the Javascript into the HTML or they might like all of the tools that Angular offers. But overall React JS has completely changed how the web is designed with all of its tools and its amazing open source community.",
            },
        ],
    },
    {
        title: "Are CSS and Bootstrap Dead?",
        id: "CSSAndBootstrap",
        date: "September 20, 2023",
        author: "Jinay Patel",
        profilePicture:
            "https://th.bing.com/th/id/R.fbf52f6fbf2e60204197dde48dc48d17?rik=wkdcHzjbejBxuA&pid=ImgRaw&r=0",
        imageSrc:
            "https://th.bing.com/th/id/R.bb905ea51e306d4fd56252cffcbc39b1?rik=AaSB2Oy0GcTqkA&riu=http%3a%2f%2fsmartaddons.s3.amazonaws.com%2fimages%2fblog%2fJoomla%2fyt-shortcode%2fcss3-boostrap.jpg&ehk=Ms6AFyLSoO8xedBDuPwrCOy80UdVU8%2bjIZvYOWJ43Is%3d&risl=&pid=ImgRaw&r=0",
        summary:
            "CSS and Bootstrap have for a very long time been the best ways to style websites, but now there's a new tool, called Tailwind CSS, and it is completely changing the way we design these UIs and makes it much more efficient, fast, and even fun.",
        bannerImage:
            "https://th.bing.com/th/id/R.bb905ea51e306d4fd56252cffcbc39b1?rik=AaSB2Oy0GcTqkA&riu=http%3a%2f%2fsmartaddons.s3.amazonaws.com%2fimages%2fblog%2fJoomla%2fyt-shortcode%2fcss3-boostrap.jpg&ehk=Ms6AFyLSoO8xedBDuPwrCOy80UdVU8%2bjIZvYOWJ43Is%3d&risl=&pid=ImgRaw&r=0",
        content: [
            {
                sectionTitle: "Introduction",
                sectionContent:
                    "For years, CSS and Bootstrap have defined how we design websites. With Bootstrap offering a suite of tools built on top of CSS to make styling websites much easier. But now there is a new CSS framework called Tailwind CSS which tries to make writing CSS even easier.",
            },
            {
                sectionTitle: "What is Tailwind CSS?",
                sectionContent:
                    "Tailwind CSS is a CSS framework that allows you to write css directly into your HTML without ever having to create a CSS file. It does this by having a set of predefined classes with styles, and then once you apply certain classes it will style the page in that way. Tailwind CSS is a very flexible framework and unlike Bootstrap it does not follow a generic pattern on all websites (and this can make websites look very similar to each other). Tailwind CSS also has a lot of component libraries, one of the most popular being Daisy UI. These component libraries basically reduce the amount of class names you have to write. For example, if you are creating a button then instead of writing a lot of class names for it you can just type in btn as a class name and then add in a few more class names if you want to customize it even more. This helps make Tailwind CSS a very flexible framework and one that makes things like prototyping styles on a page much easier to do.",
            },
            {
                sectionTitle: "What are some drawbacks of Tailwind CSS?",
                sectionContent:
                    "While Tailwind CSS does help streamline the process of styling UIs, it does make your HTML look very bloated sometimes. This is a fairly big reason for why many people may choose to avoid Tailwind CSS, but again, there are component libraries that aim to solve this problem. Tailwind CSS also has a bit of a steep learning curve and requires you to have a solid understanding of CSS because all its doing is just using HTML classes instead of making you write the actual CSS, and this means you need to know how CSS works before you can use Tailwind.",
            },
            {
                sectionTitle: "Are CSS and Bootstrap Dead?",
                sectionContent:
                    "CSS and Bootstrap may not be dead yet because there are still people that just like writing normal CSS or like using something like SASS which is a superset of CSS. Bootstrap is not going anywhere soon because many big companies such as Spotify, Mastercard, Lyft, Udemy, and many others use it. This popularity will definitely make it a strong competitor to other frameworks. Tailwind CSS has been gaining a lot of popularity though, and is used by companies like Githb, Netflix, and Starbucks but definitely has its own limitations. Personally, I absolutely enjoy using Tailwind CSS in all of my projects (this website was built using Tailwind and Daisy UI) because of its simplicity and how straightforward it is.",
            },
        ],
    },
    {
        title: "Simple Web Development Projects",
        id: "BeginnerProjects",
        date: "September 21, 2023",
        author: "Jinay Patel",
        profilePicture:
            "https://th.bing.com/th/id/R.fbf52f6fbf2e60204197dde48dc48d17?rik=wkdcHzjbejBxuA&pid=ImgRaw&r=0",
        imageSrc:
            "https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQAAAA?pid=ImgDet&rs=1",
        summary:
            "CSS and Bootstrap have for a very long time been the best ways to style websites, but now there's a new tool, called Tailwind CSS, and it is completely changing the way we design these UIs and makes it much more efficient, fast, and even fun.",
        bannerImage:
            "https://th.bing.com/th/id/R.1a19a7fdf806c43afe1e699d53c5f94f?rik=JVs1T4frOmJIfg&pid=ImgRaw&r=0",
        content: [
            {
                sectionTitle: "Introduction",
                sectionContent:
                    "If you’re reading this post then I’m guessing you already have some knowledge about HTML, CSS, and JS. The main focus of this post is to help you practice your coding skills with projects that range from simple to somewhat more complex. In each of the sections you’ll find a simple idea, and a description of what you need to build, and you can of course go beyond the given requirements if you want to really stretch your programming skills. The sections in this post are from least complicated to most complicated, so if you go in the order of the sections then you should be able to do all of them. Have fun!",
            },
            {
                sectionTitle: "Rock, Paper, Scissors Game",
                sectionContent:
                    "This is a simple project that can help you get a bit of experience with getting inputs from a user from a form. In this project you want to create a selection area where the user can select whether they want rock, paper, or scissors, and then a submit button. Once the user submits you could possibly have some animation or timer if you want to make it more fun to use. Then the computer can randomly choose from one of the options, and check who wins. You can also create a table somewhere in the UI (possibly beneath the input section) in which you can keep track of the score between the computer and player. If you want to go really advanced and have a good knowledge of Node JS then you can make the app so that it is one player vs another player in real-time.",
            },
            {
                sectionTitle: "Calculator",
                sectionContent:
                    "This is a fairly classic project for people that are new to web development, and all you really need to do to start off is create a calculator UI that can do simple arithmetic operations. To do this you could create a grid of buttons, and also a text field where you can type in the numbers and arithmetic symbols. Once the user presses the equal sign you could also add in some animations to show the equation that the user entered in some other place and then the answer in the text box. You can also go on to add in more complicated mathematical operations such as trigonometry and calculus.",
            },
            {
                sectionTitle: "To-do List",
                sectionContent:
                    "This is a really fun project to do because once you are done building it you can actually use it! To create this you could have a text input field at the top, then when the user presses a button or presses enter you can add that item into a list. If the item that the user enter’s is empty then you can just give the user a warning using something like a try catch block in the code. Once the item is added to the list, there should be three buttons. One to delete the item, one to edit the item which will bring up another text input field at the position of the item, and one checkbox to set the item as completed. To store the items you can either use the browser’s local storage or you can use a database (I would recommend using Firebase) and Node JS to connect the database with the front-end if you have the knowledge to do so.",
            },
            {
                sectionTitle: "Tic Tac Toe Game",
                sectionContent:
                    "This project is a bit more advanced than a few of the previous ones but definitely still very achievable. In this game the user should be able to play tic tac toe against the computer. There should be 9 boxes, and when the user clicks you will have to check which box it is within. Then inside that box you could set the display property of an image from none to visible so that you don’t have to actually add the image. Once the user clicks the button the computer should then choose a box, and it can either do this randomly or you can explore some algorithms if you want to get some more knowledge about that. Also, like the rock paper scissors game, you can use Node JS so that two players can play against each other instead of a player playing against a computer.",
            },
            {
                sectionTitle: "Weather App",
                sectionContent:
                    "This is definitely the most complicated project on this list because it requires a good knowledge of APIs (specifically REST APIs as they are the most popular). In this app the program should periodically fetch data from a weather API and you can find many of these online. Once the data is fetched you can then display it in a user friendly way, and you could possibly add in images, change the background based on the weather (eg. add in rain if it's raining), show the weather on a graph using a Javascript graphing library such as chart.js, and just do as many features as you want!",
            },
            {
                sectionTitle: "Conclusion",
                sectionContent:
                    "Once you’re done with all of these projects you should have a very solid understanding of HTML, CSS, and JS and your portfolio will also look really good with all of these projects, especially if you’ve gone above and beyond. Some next steps could possibly be learning the backend side of things with something like Node JS so you can further improve these apps or create a completely new app (eg. a chat application). ",
            },
        ],
    },
];

export default Posts;
