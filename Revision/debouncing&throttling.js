function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

// Simulating user typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Java");
debouncedSearch("Javascript");

// Output after 500ms:
// Searching for: Javascript







