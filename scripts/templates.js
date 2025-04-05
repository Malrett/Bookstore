function getBookTemplate(indexBooks, bookPrice) {
  return `
<div class="book">
  <div class="upper_section">
    <h2>${books[indexBooks].name}</h2>
    <div class="separator"></div>
    <div class="img_container"><img class="book_img" src="./img/book.svg" alt="book"></div>
    <div class="separator"></div>
  </div>
  <div class="middle_section">
    <p class="price">${bookPrice} €</p>
    <div class="likes_section"<p>${books[indexBooks].likes}</p>
    <p>${books[indexBooks].liked}</p></div>
    <table>
      <tr>
        <td><p><b>Autor:</b></p></td>
        <td><p>${books[indexBooks].author}</p></td>
      </tr>
      <tr>
        <td><p><b>Erscheinungsjahr:</b></p></td>
        <td><p>${books[indexBooks].publishedYear}</p></td>
      </tr>
      <tr>
        <td><p><b>Genre:</b></p></td>
        <td><p>${books[indexBooks].genre}</p></td>
      </tr>  
    </table>
  </div>
  <div class="separator"></div>
  <h3>Kommentare:</h3>
  <div class="comments_section" id="book_comments${indexBooks}" ></div>
    <div class="input"><input id="comment_input${indexBooks}" type="text" placeholder="Schreibe deinen Kommentar..." required />
    <img onclick="addComment(${indexBooks})" src="./img/send.png"></div>
  </div>`;
}

function getBookTemplateComments(indexComments, indexBooks) {
  return `
    <table>
      <tr>
        <td><p>[${books[indexBooks].comments[indexComments].name}]:</p></td>
        <td><p>${books[indexBooks].comments[indexComments].comment}</p></p></td>
      </tr>
    </table>
  `;
}
