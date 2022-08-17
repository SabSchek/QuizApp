export default function toggleBookmarks() {
    const bookmarks = document.querySelectorAll ('[data-js="bookmarkicon"]');
    console.log(bookmarks)
    bookmarks.forEach((bookmark) => {
        let notSaved = true;
        bookmark.addEventListener("click", () => {
            notSaved = !notSaved;
            bookmark.src = notSaved // scr !== src
            ? "./assets/Icons/icons8-bookmark-64.png"
            : "./assets/Icons/icons8-bookmark-64-2.png";
        });
    });
};

