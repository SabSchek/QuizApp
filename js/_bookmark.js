export default function toggleBookmarks() {
    const bookmarks = document.querySelectorAll ('[data-js="bookmarkicon"]');
    bookmarks.forEach((bookmark) => {
        let notSaved = true;
        bookmark.addEventListener('click', () => {
            notSaved = !notSaved;
            bookmark.scr = notSaved
            ? "./assets/icons/icons8-bookmark-64.png"
            : "./assets/icons/icons8-bookmark-64-2.png";
        });
    });
};