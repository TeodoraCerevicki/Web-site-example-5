


var dummyData = window.data

var posts = dummyData.posts
var postsCount = posts.length

var allComments = dummyData.comments
console.log("allComments = ", allComments);

console.log("posts length = " + posts.length)

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

// Bind click handlers
var allCommentButtons = document.getElementsByClassName("comments--button");
for (let i = 0; i < allCommentButtons.length; i++) {
    const button = allCommentButtons[i];
    button.onclick = commentsButtonClickHandler
}



function getPostHtml(post) {

    var favs = post.favourites;
    var favsCount = favs.length;

    var favsHtml = getPostFavouritesHtml(favs);

    var comments = post.commentCount;
    var commentsHtml = getPostCommentsIconHtml(comments);

    var share = post.sharesCount;
    var shareHtml = getPostShareHtml(share);

    var contentHtml = getPostContentHtml(post);

    var postId = post.id
    var postCommentsHtml = getPostCommentsHtml(postId);

    var html = `
    <article class="box-widget post-article" data-post-id='` + post.id + `'>
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
                <div class="drop-down-icon-wrapper">
                    <a href="">
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                    </a>

                    <ul class="drop-down-list">
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

            ` + postCommentsHtml + `

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

    var postCommentsHtml = "<div class='comment-section comment--section'>"
    for (let i = 0; i < postComments.length; i++) {
        const comment = postComments[i];
        postCommentsHtml += getPostCommentHtml(comment);
    }
    postCommentsHtml += `</div>`;

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
                <div class="drop-down-icon-wrapper">
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

    e.preventDefault();


    // HTML element which was clicked
    target = e.target;

    // find post--container above button

    // get postId from data-post-id attribute of post--container
    
    // get comments for postId (comments = allComments[postId])
    
    // find comments--section inside post--container

    // commentsSection.innerHtml = commentsHtml
}