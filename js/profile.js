


var dummyData = window.data;

var posts = dummyData.posts;
var postsCount = posts.length;

var allComments = dummyData.comments;

var allPostsHtml = ""
var singlePostHtml;
var singlePost;
for (var i = 0; i < posts.length; i++) {
    console.log("for loop index " + i);
    singlePost = posts[i];
    singlePostHtml = getPostHtml(singlePost);
    allPostsHtml = allPostsHtml + singlePostHtml
}

var postsContainer = document.getElementsByClassName('posts--container')[0]
postsContainer.innerHTML = allPostsHtml

// Bind click handlers - JS 
// var allCommentButtons = document.getElementsByClassName("comments--button");
// for (let i = 0; i < allCommentButtons.length; i++) {
//     const button = allCommentButtons[i];
//     button.onclick = commentsButtonClickHandler
// }


// Bind click handlers comments- JQuery
var allCommentButtons = $(".comments--button"); // $(document).find(".comments--button")
allCommentButtons.on("click", commentsButtonClickHandler);
// allCommentButtons.css("color", "red")

$(document).on("clik", pageClickHandler);

// e.target
//

function pageClickHandler(e) {

    target = $(e.target);

    // Did user click comments button
    commentsButton = target.closest(".comments--button");
    if (commentsButton.length > 0) {
        commentsButtonClickHandler(e);
        return;
    }

    // Did user click on dropdown button
    dropdownButton = target.closest(".drop--down--button");
    if (dropDownButton.length > 0) {
        dropDownButtonClickHandler(e);
        return;
    }

    // ... ... ...


    // User clicked somewhere on page
    // closeAllMenus();

}

function closeAllMenus() {
    allDropdowns = $(".drop--down--list");
    allDropdowns.addClass("hide");

}

// Bind click handlers for list of react options
var allReactButtons = $(".react--button"); // $(document).find(".comments--button")
allReactButtons.on("click", reactButtonClickHandler);

var dropDownButtons = $(".drop--down--button");
dropDownButtons.on("click", dropDownButtonClickHandler);


function getPostHtml(post) {

    var favs = post.favourites;
    var favsCount = favs.length;

    var favsHtml = getPostFavouritesHtml(favs);

    var comments = post.commentCount;
    var commentsHtml = getPostCommentsIconHtml(comments);

    var share = post.sharesCount;
    var shareHtml = getPostShareHtml(share);

    var contentHtml = getPostContentHtml(post);

    var html = `
    <article class="box-widget post-article post--container" data-post-id='` + post.id + `'>
        <header class="post-article__header">
            <div class="info-row-component info-row-component_align-center">

                <div class="image-text-component">
                    <div class="image-text-component__image">

                        <!-- circle-img-component -->
                        <div class="circle-img-component circle-img-component_medium">
                            <img src="` + post.userImage + `" alt="profile image" />
                        </div>
                        
                    </div>

                    <div class="image-text-component__text">
                        <a>` + post.userName + `</a>
                        <span class="image-text-component__shared-media">shared a
                            <a href="">link</a>
                        </span>
                        <span class="time-of-post">
                            6h ago
                        </span>
                    </div>
                </div>

                <!-- drop-down-icon-wrapper -->
                <div class="drop-down-icon-wrapper drop--down--wrapper">
                    <a href="" class="drop--down--button">
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                    </a>

                    <ul class="drop-down-list drop--down--list hide">
                        <li>
                            <a href="">edit post</a>
                            <a href="" class="delete">delete post</a>
                            <a href="">turn off notification</a>
                            <a href="">select as a feature</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <div class='post-article__content'>
        ` + contentHtml + `
        </div>

        <!-- list-of-react-options -->
        <ul class="list-of-react-options">

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__trophy 
                                    react--button">
                    <i class="fa fa-trophy" aria-hidden="true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__fav 
                                    react--button">
                    <i class="fa fa-heart" aria-hidden="true"></i>
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
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>

            <li>
                <!-- list-of-react-options-item -->
                <a href="" class="
                                    circle-icon-component 
                                    circle-icon-component_small 
                                    list-of-react-options__share 
                                    react--button">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                </a>
                <!-- list-of-react-options-item -->
            </li>
        </ul>

        <footer class="post-article__footer">

            <div class="reaction-footer-flex-wrapper">
                <!-- like-section -->
                <div class="like-section">
                    ` + favsHtml + `
                </div>

                <div class="message-share-section">
                    ` + commentsHtml + shareHtml + `
                </div>
                
            </div>

            <div class="comment-section comment--section" data-open="false">
            </div>
        </footer>
    </article>
    `;

    return html;
}

function getPostContentHtml (post) {
    var postMedia = "";


    var external = post.externalPost;
    var externalHtml = getExternalPostHtml(external);

    if (post.videoLink) {
        postMedia = `<iframe src="` + post.videoLink + `" frameborder="0" allow="encrypted-media"></iframe>`;
    } else {
        postMedia= `<img src="` + post.imgLink + `" alt="photo">`;
    }
    var contentHtml = `
        <div class="post-article__text">
            <p>
            ` + post.postText + `
            </p>
        </div>

        <div class="post-article__media">
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

    var favsHtml = `

        <div class="number-of-reactions likes number-of-reactions_liked">
            <a href="">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </a>
            <span class="">` + favsCount +`</span>
        </div>`;

    favsHtml += `<div class='overlapping'>`

    var isLastUser = false;
    var currentFavourite;
    var lastIndex = favsCount - 1;
    for (var i = 0; i < favsCount; i++) {
        currentFavourite = favourites[i];
        favsHtml += getPostFavouriteHtml(currentFavourite);

        isLastUser = (i == lastIndex);
        if (isLastUser) {
            favsHtml += `</div>`
            var howManyMore = favsCount - 1;
            favsHtml += getPostFavouriteExtendedHtml(currentFavourite, howManyMore);
        }

    }

    
    return favsHtml;
}

// Single user circle
function getPostFavouriteHtml(favourite) {
    
    var favsHtml = `
        <!-- circle-img-component -->
        <div class="circle-img-component circle-img-component_extra-small">
            <img src="` + favourite.image + `" alt="profile picture" />
        </div>`;

    return favsHtml;
}

// Extended info
function getPostFavouriteExtendedHtml(favourite, howManyMore) {
    
    var favsHtml = `
        <div class="list-of-users-that-liked">
            <a href="">` + favourite.name +`
                <span>and ` + howManyMore + ` more</span>
            </a>
        </div>`;

    return favsHtml;
}

// Comments
function getPostCommentsIconHtml(comments, postId) {

    var number = comments;

    var commentsHtml = `
    <div class="number-of-reactions comments--button" data-post-id='` + postId + `'>
        <a href="">
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
        </a>
        <span class="">` + number + `</span>
    </div>
    `;

    return commentsHtml;
}

// Share 
function getPostShareHtml(share) {

    var number = share;

    var shareHtml = `
    <div class="number-of-reactions">
        <a href="">
        <i class="fa fa-share-alt" aria-hidden="true"></i>
        </a>
        <span class="">` + number + `</span>
    </div>
    `;

    return shareHtml;
}

// External post
function getExternalPostHtml(external) {

    if(external){
        var externalHtml = `
        <div class="external-post">
            <!-- post-header -->
            <header class="external-post__header">

                <div class="side-circle-icon-wrapper">
                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                </div>

                <div class="info-row-component info-row-component_align-center">

                    <div class="image-text-component">
                        <div class="image-text-component__image">

                            <!-- circle-img-component -->
                            <div class="circle-img-component circle-img-component_medium">
                                <img src="` +  external.externalUserImg + `"
                                    alt="progile image" />

                            </div>
                            
                        </div>

                        <div class="image-text-component__text">
                            <a>` + external.externalUserName + `</a>

                            <span class="time-of-post">
                                3 days ago
                            </span>
                        </div>
                    </div>
                </div>

            </header>


            <!-- post-header-item -->
            <div class="external-post__text">
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
        const comment = postComments[i];
        postCommentsHtml += getPostCommentHtml(comment);
    }
    

    return postCommentsHtml;
}

function getPostCommentHtml(comment) {

    var postCommentHtml = `
    <div class="comment__item">

        <!-- post-header -->
        <section class="post-article__header">

            <div class="info-row-component info-row-component_align-center">

                <div class="image-text-component">
                    <div class="image-text-component__image">

                        <!-- circle-img-component -->
                        <div class="circle-img-component circle-img-component_medium">
                            <img src="` + comment.userImg + `" />
                        </div>
                        
                    </div>

                    <div class="image-text-component__text">
                        <a>` + comment.userName + `</a>

                        <span class="time-of-post">
                            3h ago
                        </span>
                    </div>
                </div>

                <!-- drop-down-icon-wrapper -->
                <div class="drop-down-icon-wrapper  drop--down--wrapper">
                    <a href="">
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                    </a>
                </div>

            </div>

        </section>

        <!-- post-content -->
        <div class="comment__content">
            <div class="comment__text">
                <p>
                    ` + comment.commentText + `
                </p>
            </div>
        </div>


        <!-- comment-footer -->
        <div class="comment__footer">

            <!-- number-of-reactions -->
            <div class="number-of-reactions">
                <a href="">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </a>
                <span class="">0</span>
            </div>
            
            <a href="" class="comment__replay">Replay</a>
        </div>
        
    </div>
    `;
    return postCommentHtml;
}



// Click handlers
function commentsButtonClickHandler(e) {

    // prevent default click on link behaviour
    e.preventDefault();

    // HTML element which was clicked
    target = $(e.target);

    // find post--container above button
    var postContainer = target.closest(".post--container")

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


function reactButtonClickHandler(e) {
    // prevent default click on link behaviour
    e.preventDefault();

    // HTML element which was clicked
    target = $(e.target);

    button = target.closest(".react--button")

    button.toggleClass("active");
    console.log("button", button);

}

function dropDownButtonClickHandler(e) {
    e.preventDefault();

    target = $(e.target);

    var dropDownWrapper = target.closest(".drop--down--wrapper");
    var dropDownList = dropDownWrapper.find(".drop--down--list");

    // If list was closed, it will be opened, so first close all other menus
    if (dropDownList.hasClass("hide")) {
        closeAllMenus();
    }

    dropDownList.toggleClass("hide");
    console.log("cons", dropDownList);
    
}