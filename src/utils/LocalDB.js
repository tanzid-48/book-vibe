

const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");


    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const getAllWisListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if (allWishList) return JSON.parse(allWishList);

    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAllReadyExist = allBooks.find(bk => bk.bookId === book.bookId)

    if (!isAllReadyExist) {

        allBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWisListFromLocalDB();

    const isAllReadyExist = allBooks.find(bk => bk.bookId === book.bookId)

    if (!isAllReadyExist) {

        allBooks.push(book)
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}

export { 
    getAllReadListFromLocalDB, addReadListToLocalDB,getAllWisListFromLocalDB,addWishListToLocalDB }

