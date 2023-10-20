document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");

    // Function to add more list items
    function addMoreItems() {
        const totalItems = list.getElementsByTagName("li").length;
        const itemsToAdd = 10;

        for (let i = totalItems + 1; i <= totalItems + itemsToAdd; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `List item ${i}`;
            list.appendChild(listItem);
        }
    }

    // Add initial list items
    addMoreItems();

    // Event listener to detect scroll to the bottom of the list
    list.addEventListener("scroll", function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // User has reached the end of the list, add more items
            addMoreItems();
        }
    });
});
