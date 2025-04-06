function renderAllBooks() {
  let contentRef = document.getElementById("bookcards");

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    let bookPrice = books[indexBooks].price.toFixed(2).replace(".", ",");
    contentRef.innerHTML += getBookTemplate(indexBooks, bookPrice);

    renderComments(indexBooks);
    showHeart(indexBooks);
  }
}

function renderComments(indexBooks) {
  let showComments = document.getElementById("book_comments" + indexBooks);

  showComments.innerHTML = "";
  for (let indexComments = books[indexBooks].comments.length - 1; indexComments >= 0; indexComments--) {
    showComments.innerHTML += getBookTemplateComments(indexComments, indexBooks);
  }
}

function addComment(indexBooks) {
  let commentInputRef = document.getElementById("comment_input" + indexBooks);
  let userComment = commentInputRef.value;
  if (userComment == "") {
    return;
  }
  books[indexBooks].comments.push({ name: "Malte", comment: userComment });
  // books[indexBooks].comments.comment.push(comment);

  renderComments(indexBooks);
  commentInputRef.value = "";
}

function showHeart(indexBooks) {
  let heartButtonRef = document.getElementById("like_button" + indexBooks);
  if (books[indexBooks].liked === true) {
    heartButtonRef.src = "./img/like.png";
  } else {
    heartButtonRef.src = "./img/like_empty.png";
  }
}

function changeHeart(indexBooks) {
  let heartButtonRef = document.getElementById("like_button" + indexBooks);
  if (books[indexBooks].liked === true) {
    heartButtonRef.src = "./img/like_empty.png";
    books[indexBooks].liked = false;
  } else if (books[indexBooks].liked === false) {
    heartButtonRef.src = "./img/like.png";
    books[indexBooks].liked = true;
  }

  showHeart(indexBooks);
}
