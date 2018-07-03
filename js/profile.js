

const MAX_FAVS = 5;

var dummyData = window.data;

var posts      = dummyData.posts;
var postsCount = posts.length;



var allComments = dummyData.comments;

// Render html for all posts
renderPosts();

// Render html for active user's elements
renderActiveUser();


/*
    Binding one click handler for whole page
    function is checking what is clicked
*/
$(document).on("click", pageClickHandler);

function pageClickHandler(e) {

    // Get clicked element and determine what was clicked
    target = $(e.target);

    // Did user click reacts button
    reactButton = target.closest(".react--button");
    if (reactButton.length > 0) {
        e.preventDefault();
        reactButtonClickHandler(reactButton);
    }

    // Did user click comments button
    commentsButton = target.closest(".comments--button");
    if (commentsButton.length > 0) {
        e.preventDefault();
        commentsButtonClickHandler(commentsButton);
        return;
    }

    // Did user click on dropdown button
    dropDownButton = target.closest(".drop--down--button");
    if (dropDownButton.length > 0) {
        e.preventDefault();
        dropDownButtonClickHandler(dropDownButton);
        return;
    }

    // ... ... ...gf

    shareButton = target.closest(".share--button");
    if (shareButton.length > 0) {
        
        shareButtonClickHandler(e);
        return;
    }

    userDropdownButton = target.closest(".user--drop--down--button");
    if (userDropdownButton.length > 0) {
        userDropdownButtonClickHandler(e);
        return;
    }

    // click event for favorite button (add to favorite list)
    favoriteClicked = target.closest(".fav--react--button");
    if(favoriteClicked.length > 0) {
        favoriteClickedHandler(favoriteClicked);
        return;
    }

    // click event for share button (add to share list)
    shareClicked = target.closest(".share--react--button");
    if (shareClicked.length > 0) {
        shareClickedHandler(shareClicked);
        return;
    }

    // User clicked somewhere on page
    closeAllMenus();

}

function closeAllMenus() {
    allDropdowns = $(".drop--down--list");
    allDropdowns.addClass("hide");
}


function renderPosts() {

    var allPostsHtml = ""
    var singlePostHtml;
    var singlePost;
    for (var i = 0; i < posts.length; i++) {
        singlePost     = posts[i];
        singlePostHtml = getPostHtml(singlePost);
        allPostsHtml   = allPostsHtml + singlePostHtml
    }

    var postsContainer           = document.getElementsByClassName('posts--container')[0]
        postsContainer.innerHTML = allPostsHtml
}

function renderActiveUser() {

    var activeUser = dummyData.currentUser;

    var mainNav = $(".main--nav");

    var userNav = mainNav.find(".user--nav--container");

    var navHtml = getNavHtml(activeUser);
    
    userNav.html(navHtml);

    var notification = mainNav.find(".user--notifications--container");

    var notificationHtml = getNotifiHtml(activeUser);

    notification.html(notificationHtml);
}

function getNavHtml(active) {

    var userNavHtml = `
        <div class = "info-row-component info-row-component_align-center">

            <!-- image-text-component -->
            <div class = "image-text-component">

                <div class = "image-text-component__image">

                    <!-- online-status-component -->
                    <div class = "online-status-circle online-status-circle_border-purple online-status-circle_active">
                    </div>
                    <!-- online-status-component -->

                    <!-- circle-img-component -->
                    <div class = "circle-img-component circle-img-component_small">
                    <img src   = " ` + active.image + ` " alt = "profile image" />
                    </div>
                    
                </div>

                <!-- text-->
                <div class = "image-text-component__text">

                    <span class = "image-text-component__title">
                    <a    href  = " ` + active.url + ` " target = "_blank"> ` + active.fullName + ` </a>
                    </span>

                    <span class = "image-text-component__uppercase image-text-component__span"> ` + active.nickname + ` </span>

                </div>
                <!-- text -->
            </div>
            <!-- image-text-component -->


            <!-- dropdown-icon-wrapper -->
            <div class = "dropdown-icon-wrapper user--drop--down--button">
            <i   class = "fa fa-angle-down" aria-hidden = "true"></i>
            </div>
            <!-- dropdown-icon-wrapper -->

            <!-- user-settings-drop-down -->
            <ul class = "user-settings-drop-down user--settings--drop--down hide">
                <li>
                    <a href  = "">
                    <i class = "fa fa-line-chart" aria-hidden = "true"></i>
                        activity log
                    </a>
                </li>
                <li>
                    <a href  = "">
                    <i class = "fa fa-shield" aria-hidden = "true"></i>
                        news preferences
                    </a>
                </li>
                <li>
                    <a href  = "">
                    <i class = "fa fa-cogs" aria-hidden = "true"></i>
                        settings
                    </a>
                </li>
                <li>
                    <a href  = "">
                    <i class = "fa fa-sign-out" aria-hidden = "true"></i>
                        log out
                    </a>
                </li>
            </ul>
        </div>

    `;

    return userNavHtml;  
}

function userDropdownButtonClickHandler(e) {

    e.preventDefault();

    var target = $(e.target);

    var button = target.closest(".user--drop--down--button");
    

    var dropDown = button.siblings(".user--settings--drop--down");

    console.log("dropDown",dropDown);

    dropDown.toggleClass("hide");

}

function getNotifiHtml(active) {

    // message
    var messageCount = active.unreadMessagesCount;

    var messageCountBadge = "";

    if (messageCount > 0) {
        messageCountBadge = "<span>" + messageCount + "</span>";
    } else {
        messageCountBadge = "";
    }

    // request
    var requestCount = active.friendRequestsCount;

    var requestCountBadge = "";

    if (requestCount > 0) {
        requestCountBadge = "<span>" + requestCount + "</span>";
    } else {
        requestCountBadge = "";
    }

    // notifiction
    var notificationCount = active.notificationsCount;

    var notificationCountBadge = "";

    if (notificationCount > 0) {
        notificationCountBadge = "<span>" + notificationCount + "</span>";
    } else {
        notificationCountBadge = "";
    }


    var notiHtml = `
        <!-- notification-icon-wrapper -->
        <div class = "main-navigation__notification-item">
        <a   href  = "">
                <!-- notification-number -->
                <div class = "notification-component notification-component_small-icon ">
                    <span>` + notificationCountBadge + `</span>
                </div>
                <!-- icon -->
                <div class = "main-navigation__notification-icon">
                <i   class = "fa fa-smile-o" aria-hidden = "true"></i>
                </div>
            </a>
        </div>

        <!-- notification-icon-wrapper -->
        <div class = "main-navigation__notification-item">
        <a   href  = "">
                <!-- notification-number -->
                <div class = "notification-component notification-component_small-icon ">
                    <span>` + messageCountBadge + `</span>
                </div>

                <!-- icon -->
                <div class = "main-navigation__notification-icon">
                <i   class = "fa fa-commenting-o" aria-hidden = "true"></i>
                </div>
            </a>
        </div>


        <!-- notification-icon-wrapper -->
        <div class = "main-navigation__notification-item">
        <a   href  = "">
                <!-- notification-number -->
                <div class = "notification-component notification-component_small-icon ">
                    <span>` + requestCountBadge + `</span>
                </div>
                <!-- icon -->
                <div class = "main-navigation__notification-icon">
                <i   class = "fa fa-user-plus" aria-hidden = "true"></i>
                </div>
            </a>
        </div>
    `;

    return notiHtml;
}

function getPostHtml(post) {

    var favs      = post.favourites;
    var favsCount = favs.length;

    var favsHtml = getPostFavouritesHtml(favs);

    var comments     = post.commentCount;
    var commentsHtml = getPostCommentsIconHtml(comments);

    var shareHtml = getPostShareHtml(post);

    

    var contentHtml = getPostContentHtml(post);

    var html = `
    <article class = "box-widget post-article post--container" data-post-id = '` + post.id + `'>
    <header  class = "post-article__header">
    <div     class = "info-row-component info-row-component_align-center">

                <div class = "image-text-component">
                <div class = "image-text-component__image">

                        <!-- circle-img-component -->
                        <div class = "circle-img-component circle-img-component_medium">
                        <img src   = "` + post.userImage + `" alt = "profile image" />
                        </div>
                        
                    </div>

                    <div  class = "image-text-component__text">
                    <a    href  = "` + post.userUrl + `"  target = "_blank">` + post.userName + `</a>
                    <span class = "image-text-component__shared-media">shared a
                    <a    href  = "">link</a>
                        </span>
                        <span class = "time-of-post">
                            6h ago
                        </span>
                    </div>
                </div>

                <!-- drop-down-icon-wrapper -->
                <div class = "drop-down-icon-wrapper drop--down--wrapper">
                <a   href  = "" class                   = "drop--down--button">
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                    </a>

                    <ul class = "drop-down-list drop--down--list hide">
                        <li>
                            <a href = "">edit post</a>
                            <a href = "" class = "delete">delete post</a>
                            <a href = "">turn off notification</a>
                            <a href = "">select as a feature</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <div class = 'post-article__content'>
        ` + contentHtml + `
        </div>

        <!-- list-of-react-options -->
        <ul class = "list-of-react-options">

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__trophy 
                                    react--button">
                    <i class = "fa fa-trophy" aria-hidden = "true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__fav 
                                    react--button
                                    fav--react--button">
                    <i class = "fa fa-heart" aria-hidden = "true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__comments 
                                    react--button">
                    <i class = "fa fa-commenting-o" aria-hidden = "true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__share 
                                    react--button
                                    share--react--button">
                    <i class = "fa fa-share-alt" aria-hidden = "true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>
        </ul>

        <footer class = "post-article__footer">

            <div class = "reaction-footer-flex-wrapper">
                <!-- like-section -->
                <div class = "like-section favourites--section">
                    ` + favsHtml + `
                </div>

                <div class = "message-share-section">
                    ` + commentsHtml + shareHtml + `
                </div>
                
            </div>

            <div class = "comment-section comment--section" data-open = "false">
            </div>
        </footer>
    </article>
    `;

    return html;
}

function getPostContentHtml (post) {
    var postMedia = "";


    var external     = post.externalPost;
    var externalHtml = getExternalPostHtml(external);

    if (post.videoLink) {
        postMedia = `<iframe src="` + post.videoLink + `" frameborder="0" allow="encrypted-media"></iframe>`;
    } else {
        postMedia = `<img src="` + post.imgLink + `" alt="photo">`;
    }
    var contentHtml = `
        <div class = "post-article__text">
            <p>
            ` + post.postText + `
            </p>
        </div>

        <div class = "post-article__media">
            ` + postMedia + `
        </div>

        
        ` + externalHtml + `
        
        `
        ;

    return contentHtml;
}

// User circles + extended info
function getPostFavouritesHtml(favourites) {

    var favsCount = favourites.length;

    var forLoopLimit;
    var shouldAddPlusCircle;
    var plusCircleCount;
    if (favsCount <= MAX_FAVS) {
        forLoopLimit        = favsCount;
        shouldAddPlusCircle = false;
    } else {
        forLoopLimit        = MAX_FAVS;
        shouldAddPlusCircle = true;
        plusCircleCount     = favsCount - forLoopLimit;
    }

    var favsHtml = `

        <div class = "number-of-reactions likes number-of-reactions_liked">
        <a   href  = "">
        <i   class = "fa fa-heart" aria-hidden = "true"></i>
            </a>
            <span class = "">` + favsCount +`</span>
        </div>`;

    favsHtml += `<div class='overlapping'>`

    var isLastUser = false;
    var currentFavourite;
    var lastIndex = forLoopLimit - 1;
    for (var i = 0; i < forLoopLimit; i++) {
        currentFavourite  = favourites[i];
        favsHtml         += getPostFavouriteHtml(currentFavourite);

        isLastUser = (i == lastIndex);
        if (isLastUser) {

            if (shouldAddPlusCircle) {
                favsHtml += `
                <div class = "plus-circle-count">
                    <div>
                        <i class = "fa fa-plus" aria-hidden = "true"></i>
                        ` + plusCircleCount + `
                    </div>
                </div>
                `
            }

                favsHtml    += `</div>`
            var howManyMore  = favsCount - 1;
                favsHtml    += getPostFavouriteExtendedHtml(currentFavourite, howManyMore);
        }
    }

    

    
    return favsHtml;
}

// Single user circle
function getPostFavouriteHtml(favourite) {
    
    var favsHtml = `
        <!-- circle-img-component -->
        <div class = "circle-img-component circle-img-component_extra-small">
        <img src   = "` + favourite.image + `" alt = "profile picture" />
        </div>`;

    return favsHtml;
}

// Extended info
function getPostFavouriteExtendedHtml(favourite, howManyMore) {
    
    var favsHtml = `
        <div class = "list-of-users-that-liked">
        <a   href  = "">` + favourite.name +`
                <span>and ` + howManyMore + ` more</span>
            </a>
        </div>`;

    return favsHtml;
}

// Comments
function getPostCommentsIconHtml(comments, postId) {

    var number = comments;

    var commentsHtml = `
    <div class = "number-of-reactions comments--button" data-post-id = '` + postId + `'>
    <a   href  = "">
    <i   class = "fa fa-commenting-o" aria-hidden                    = "true"></i>
        </a>
        <span class = "">` + number + `</span>
    </div>
    `;

    return commentsHtml;
}

// Share 
function getPostShareHtml(post) {

    var number = post.sharesCount;

    var postId = post.postId;

    console.log("post", post);
    

    var shareListHtml = getShareListHtml(post.shareList);

    var shareHtml = `
    <div  class = "number-of-reactions share--container" data-post-id = '` + postId + `'>
    <a    href  = "" class                                            = " share--button">
    <i    class = "fa fa-share-alt" aria-hidden                       = "true"></i>
    <span class = "">` + number + `</span>
        </a>

        <div class = "share-drop-down hide share--section">
        <h3  class = "share-drop-down__heading">Shared by:</h3>
        <ul  class = 'share--section--ul'>
            ` + shareListHtml + `
            </ul>
        </div>
    </div>
    `;

    return shareHtml;
}

// External post
function getExternalPostHtml(external) {

    if(external){
        var externalHtml = `
        <div class = "external-post">
            <!-- post-header -->
            <header class = "external-post__header">

                <div class = "side-circle-icon-wrapper">
                <i   class = "fa fa-circle-o" aria-hidden = "true"></i>
                </div>

                <div class = "info-row-component info-row-component_align-center">

                    <div class = "image-text-component">
                    <div class = "image-text-component__image">

                            <!-- circle-img-component -->
                            <div class = "circle-img-component circle-img-component_medium">
                            <img src   = "` +  external.externalUserImg + `"
                                 alt   = "progile image" />

                            </div>
                            
                        </div>

                        <div class = "image-text-component__text">
                        <a   href  = "` + external.externalUrl + `"  target = "_blank">` + external.externalUserName + `</a>

                            <span class = "time-of-post">
                                3 days ago
                            </span>
                        </div>
                    </div>
                </div>

            </header>


            <!-- post-header-item -->
            <div class = "external-post__text">
                <p>
                    ` + external.externalPostText + `
                </p>
            </div>
        </div>`;
        
    return externalHtml;
    }  else {
        externalHtml = "";
        return externalHtml;
    }

}

function getPostCommentsHtml(postId) {
    
    var postComments = allComments[postId];

    console.log("second allComments = ", allComments);

    var postCommentsHtml = ""
    for (let i = 0; i < postComments.length; i++) {
        const comment           = postComments[i];
              postCommentsHtml += getPostCommentHtml(comment);
    }
    

    return postCommentsHtml;
}

function getPostCommentHtml(comment) {

    var postCommentHtml = `
    <div class = "comment__item">

        <!-- post-header -->
        <section class = "post-article__header">

            <div class = "info-row-component info-row-component_align-center">

                <div class = "image-text-component">
                <div class = "image-text-component__image">

                        <!-- circle-img-component -->
                        <div class = "circle-img-component circle-img-component_medium">
                        <img src   = "` + comment.userImg + `" />
                        </div>
                        
                    </div>

                    <div class = "image-text-component__text">
                        <a>` + comment.userName + `</a>

                        <span class = "time-of-post">
                            3h ago
                        </span>
                    </div>
                </div>

                <!-- drop-down-icon-wrapper -->
                <div class = "drop-down-icon-wrapper  drop--down--wrapper">
                <a   href  = "">
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                <i   class = "fa fa-circle" aria-hidden = "true"></i>
                    </a>
                </div>

            </div>

        </section>

        <!-- post-content -->
        <div class = "comment__content">
        <div class = "comment__text">
                <p>
                    ` + comment.commentText + `
                </p>
            </div>
        </div>


        <!-- comment-footer -->
        <div class = "comment__footer">

            <!-- number-of-reactions -->
            <div class = "number-of-reactions">
            <a   href  = "">
            <i   class = "fa fa-heart" aria-hidden = "true"></i>
                </a>
                <span class = "">0</span>
            </div>
            
            <a href = "" class = "comment__replay">Replay</a>
        </div>
        
    </div>
    `;
    return postCommentHtml;
}


// Click handlers
function commentsButtonClickHandler(button) {

    // prevent default click on link behaviour
    // e.preventDefault();

    // HTML element which was clicked
    // target = $(e.target);

    // find post--container above button
    var postContainer = button.closest(".post--container")

    // get postId from data-post-id attribute of post--container
    var postId = postContainer.attr("data-post-id")

    // generate html for post comments
    

    // find comments--section inside post--container
    var commentsSection = postContainer.find(".comment--section");

    var open = commentsSection.attr("data-open");

    if (open == "true") {
        var postCommentsHtml = "";

        commentsSection.attr("data-open", false);
    }
    else {
        var postCommentsHtml = getPostCommentsHtml(postId);
        commentsSection.attr("data-open", true);
    }

    // commentsSection.innerHtml = commentsHtml
    commentsSection.html(postCommentsHtml);

}

function shareButtonClickHandler(e) {

    e.preventDefault();

    // HTML element which was clicked
    target = $(e.target);

    var postContainer = target.closest(".post--container")

    // get postId from data-post-id attribute of post--container
    var postId = postContainer.attr("data-post-id")

    var share = postContainer.find(".share--section");

    share.toggleClass("hide");
}

function getShareListHtml(shareList) {

    var shareListHtml = "";

    for (var i = 0; i< shareList.length; i++) {
         element = shareList[i];
        
         shareListHtml += shareListItem(element);
    }

    return shareListHtml;
}

function shareListItem(element) {

    var shareListItemHtml = `
        <li class = "share-drop-down__list">
        <a  href  = "` + element.url + `" target = "_blank">` + element.name + `</a>
        </li>
    `

    return shareListItemHtml;
}

// post reaction icons
function reactButtonClickHandler(button) {

    button.toggleClass("active");
}

// dropdown button click handler
function dropDownButtonClickHandler(button) {
    
    var dropDownWrapper = button.closest(".drop--down--wrapper");
    var dropDownList = dropDownWrapper.find(".drop--down--list");

    /*
    If clicked button has class hide,
    first will close all other menus,
    and then open menu of clicked button 
    */
    if (dropDownList.hasClass("hide")) {
        closeAllMenus();
    }

    dropDownList.toggleClass("hide");
}

// favorite button / list function
function favoriteClickedHandler(fav) {

    // fav = .fav--react--button 
    // postsCount = posts.length

    /* 
    1. find closest element that has class post--container 
    2. from that post container get attribute for id 
    3. currentPost is current JSON from posts array (at index i)
    4. postWithGivenId holds the post (JSON) with the id from the post--container attribute
    5. for loop is going through array of posts, 
       assign post with index i to currentPost,
       check if postId has same id as currenPost id,
       if it's true, the current post is assigned to postWithGivenId
    */

    var postContainer = fav.closest(".post--container");
    var postId        = postContainer.attr("data-post-id");

    var currentPost;

    var postWithGivenId;

    for (var i=0; i < postsCount; i++) {
        currentPost = posts[i];
        if (postId == currentPost.id) {
            postWithGivenId = currentPost;
            break;
        }
    }

    /*
    1. addUser is a boolean variable determining
       if the fav button has the 'active' class or not
    2. favs var holds post's favorites array 
    3. --if addUser was true (button has active class),
       meaning the favorite button was clicked,
    4. currentUserFav var is creating a new 'favourite' JSON
       from the data of the current user
    5. and it's pushed to favorites array
       --if it's not true, 
    6. for loop is going through favorites array,
       checks if ids from current favourite and currentUser match
       when they match, the JSON at that index (that holds currentUser) 
       gets removed and the loop breaks
    */

    var addUser = fav.hasClass("active");
    
    var favs = postWithGivenId.favourites;

    if (addUser) {

        var currentUserFav = {
            "id"         : currentUser.id,
            "name"       : "You",
            "image"      : currentUser.image,
            "profileLink": currentUser.url
        }

        favs.push(currentUserFav);

    } else {

        for (var i = 0; i < favs.length; i ++) {
            
            if (favs[i].id == currentUser.id) {
                
                favs.splice(i, 1);
                break;
            }
        }
        
    }  // end of else   
    
    /*
    1. getPostFavouritesHtml function provides the html for favorites
       this html gets saved in the newHtml variable so it can get updated
    2. favSection holds element that has favourites--section class
       where it pljusne updated version of favorites list html
    */

    var newHtml    = getPostFavouritesHtml(favs);
    var favSection = postContainer.find(".favourites--section");

    favSection.html(newHtml);
    
}

// share button / list function
function shareClickedHandler(share) {

    var postContainer = share.closest(".post--container");
    var postId        = postContainer.attr("data-post-id");

    var currentId;

    var postWithNewId;

    for (var i=0; i < postsCount; i++) {
        
        currentPost = posts[i];
        
        if (postId == currentPost.id) {
            
            postWithNewId = currentPost;
            break;
        }

    }

    var addUser = share.hasClass("active");

    var shareList = postWithNewId.shareList;


    /*
    -- if addUser is true, increase shareCount for 1
    -- if addUser is false, decrease shareCount for 1
    */
    if(addUser) {

        var currentUserShare = {
            "id"  : currentUser.id,
            "name": "you",
            "url" : currentUser.url
        }

        shareList.push(currentUserShare);
        postWithNewId.sharesCount++;
    } else {

        for ( var i = 0; i < shareList.length; i ++) {

            if (shareList[i].id == currentUser.id) {

                shareList.splice(i, 1);
                break;
            }
        }

        postWithNewId.sharesCount--;
    }


    var newHtml = getPostShareHtml(postWithNewId);
    
    shareSection = postContainer.find(".share--container");

    shareSection.html(newHtml);

}