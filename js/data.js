
var currentUser = {
    
}

var posts = [
    // Post
    {
        "id" : 1,
        "userName" : "james hetfield",             
        "userImage" : "../img/users-images/profile-image.png",
        "postText" : "YeaHeaa! My daughter rocks! Check it out!",
        "videoLink" : "https://www.youtube.com/embed/MgkO73MBR18",
        "favourites" : [
            {
                "id" : 1,
                "name" : "david gilmour",
                "image" : "../img/users-images/gilmour.png",
                "profileLink" : ""
            },

            {
                "id" : 2,
                "name" : "benedict cumberbatch",
                "image" : "../img/users-images/benedict.png",
                "profileLink" : ""
            },

            {
                "id" : 3,
                "name" : "jason newsted",
                "image" : "../img/users-images/jason.png",
                "profileLink" : ""
            }
        ],
        // end of fav

        "commentCount" : 3,
        "sharesCount" : 3
    },

    // Post
    {
        "id" : 2,
        "userName" : "james hetfield",
        "userImage" : "../img/users-images/profile-image.png",
        "postText" : "What the fuck is dubstep?",
        "externalPost" : {
            "externalUserName": "Deadpool",
            "externalUserImg": "https://cdn.images.express.co.uk/img/dynamic/36/590x/Deadpool-2-end-credits-How-many-post-credits-are-there-Will-there-be-a-Deadpool-3-961823.jpg?r=1527840080649",
            "externalPostText" : " Give me your best shot, One-Eyed Willie"
        },
        "imgLink" : "https://cdn.cgmagonline.com/wp-content/uploads/2018/02/cable-featured-heavily-in-new-deadpool-trailer-2-1280x720.jpg",
        "favourites" : [
            {
                "id" : 1,
                "name" : "david gilmour",
                "image" : "../img/users-images/gilmour.png",
                "profileLink" : ""
            },

            {
                "id" : 2,
                "name" : "benedict cumberbatch",
                "image" : "../img/users-images/benedict.png",
                "profileLink" : ""
            },

            {
                "id" : 3,
                "name" : "Jason Newsted",
                "image" : "../img/users-images/jason.png",
                "profileLink" : ""
            }
        ],
        // end of fav
        "commentCount" : 2,
        "sharesCount" : 1
    }

]

var comments = {
    "1" : [
        {
            "id" : 1,
            "userName" : "Jason Newsted", 
            "userImg" : "../img/users-images/jason.png",
            "commentText" : "nah... i like more Dave's version.. just kidding... she's good :)",
            "replied" : [
                
            ]
        },
        {

            "id" : 2,
            "userName" : "benedict cumberbatch", 
            "userImg" : "../img/users-images/benedict.png",
            "commentText" : "you idiot"
        }

    ],
    "2" : [
        {
            "id" : 1,
            "userName" : "Wade Wilson", 
            "userImg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQ5JdeLrkHOgdkReq4736B6JP73rnfy-ymelQrLnHmb06fFG9Hw",
            "commentText" : "You're so dark. Are you sure you're not from the DC universe?"
        }
    ]
}

var gallery = []

var badges = []

window.data = {
    "posts" : posts, 
    "badges" : badges, 
    "gallery" : gallery,
    "comments" : comments
} 