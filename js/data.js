
var currentUser = {
    id                 : "13",
    fullName           : "Teodora Cerevicki",
    nickname           : "Tea",
    image              : "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/34366308_10214194681437810_5011337389654671360_n.jpg?_nc_cat=0&_nc_eui2=AeGMuCB2Qh5eLubcwGfDB2j3IJn0AGbv-7xoi9mnuGqJasGaVVmV8JoJX8IibITzCjFbFjZ6AlslARb2aCZS1BdaAk32TnofsgDrL0Ht7HpktQ&oh=284a5b84deb708698734b04a628ae358&oe=5BB2997E",
    url                : "https://www.facebook.com/TeodoraCerevicki?ref=bookmarks",
    unreadMessagesCount: 6,
    friendRequestsCount: 3,
    notificationsCount : 9
}

var posts = [
    // Post  posts[0]
    {
        "id"        : 1,
        "userName"  : "james hetfield",
        "userUrl"   : "https://www.facebook.com/James.Hetfield.Fan/",
        "userImage" : "../img/users-images/profile-image.png",
        "postText"  : "YeaHeaa! My daughter rocks! Check it out!",
        "videoLink" : "https://www.youtube.com/embed/MgkO73MBR18",
        "favourites": [
            {
                "id"         : 1,
                "name"       : "david gilmour",
                "image"      : "../img/users-images/gilmour.png",
                "profileLink": "https://www.facebook.com/davidgilmour/"
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": "https://www.facebook.com/cumbercollectiveunite/"
            },

            {
                "id"         : 3,
                "name"       : "jason newsted",
                "image"      : "../img/users-images/jason.png",
                "profileLink": "https://www.facebook.com/MasterJasonNewsted/"
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": "https://www.facebook.com/cumbercollectiveunite/"
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": "https://www.facebook.com/cumbercollectiveunite/"
            }, 

            {
                "id"         : 3,
                "name"       : "jason newsted",
                "image"      : "../img/users-images/jason.png",
                "profileLink": "https://www.facebook.com/MasterJasonNewsted/"
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": "https://www.facebook.com/cumbercollectiveunite/"
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": "https://www.facebook.com/cumbercollectiveunite/"
            }

            
        ],
        // end of fav

        "commentCount": 3,
        "sharesCount" : 3,
        "shareList"   : [
            {
                "id"  : 1,
                "name": "David Gilmour",
                "url" : "https://www.facebook.com/davidgilmour/"
            },

            {   "id" : 2,
                "name": "Benedict Cumberbatch",
                "url" : "https://www.facebook.com/cumbercollectiveunite/"
            },

            {
                "id"  : 3,
                "name": "jason newsted",
                "url" : "https://www.facebook.com/MasterJasonNewsted/"
            }
        ]
    },

    // Post  posts[1]
    {
        "id"          : 2,
        "userName"    : "james hetfield",
        "userImage"   : "../img/users-images/profile-image.png",
        "userUrl"     : "https://www.facebook.com/James.Hetfield.Fan/",
        "postText"    : "What the fuck is dubstep?",
        "externalPost": {
            "externalUserName": "Deadpool",
            "externalUserImg" : "https://cdn.images.express.co.uk/img/dynamic/36/590x/Deadpool-2-end-credits-How-many-post-credits-are-there-Will-there-be-a-Deadpool-3-961823.jpg?r=1527840080649",
            "externalUrl"     : "https://www.facebook.com/DeadpoolMovie/",
            "externalPostText": " Give me your best shot, One-Eyed Willie"
        },
        "imgLink"   : "https://cdn.cgmagonline.com/wp-content/uploads/2018/02/cable-featured-heavily-in-new-deadpool-trailer-2-1280x720.jpg",
        "favourites": [
            {
                "id"         : 1,
                "name"       : "david gilmour",
                "image"      : "../img/users-images/gilmour.png",
                "profileLink": ""
            },

            {
                "id"         : 2,
                "name"       : "benedict cumberbatch",
                "image"      : "../img/users-images/benedict.png",
                "profileLink": ""
            },

            {
                "id"         : 3,
                "name"       : "Jason Newsted",
                "image"      : "../img/users-images/jason.png",
                "profileLink": ""
            }
        ],
        "shareList" : [
            {
                "id"  : 1,
                "name": "David Gilmour",
                "url" : "https://www.facebook.com/davidgilmour/"
            },

            {
                "id"  : 2,
                "name": "Benedict Cumberbatch",
                "url" : "https://www.facebook.com/cumbercollectiveunite/"
            }
        ],
        // end of fav
        "commentCount": 1,
        "sharesCount" : 2
    }

]

var comments = {
    "1" : [
        {
            "id"         : 1,
            "userName"   : "Jason Newsted",
            "userImg"    : "../img/users-images/jason.png",
            "commentText": "nah... i like more Dave's version.. just kidding... she's good :)",
            "replied"    : [
                
            ]
        },
        {

            "id"         : 2,
            "userName"   : "benedict cumberbatch",
            "userImg"    : "../img/users-images/benedict.png",
            "commentText": "you idiot"
        }

    ],
    "2" : [
        {
            "id"         : 1,
            "userName"   : "Wade Wilson",
            "userImg"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQ5JdeLrkHOgdkReq4736B6JP73rnfy-ymelQrLnHmb06fFG9Hw",
            "commentText": "You're so dark. Are you sure you're not from the DC universe?"
        }
    ]
}

var gallery = []

var badges = []

window.data = {
    "posts"      : posts,
    "badges"     : badges,
    "gallery"    : gallery,
    "comments"   : comments,
    "currentUser": currentUser
} 