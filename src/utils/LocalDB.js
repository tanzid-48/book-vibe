

const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");


    if(allReadList) return  JSON.parse(allReadList);

    return[];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAllReadyExist = allBooks.find(bk => bk.bookId === book.bookId)

    if(!isAllReadyExist){
     
        allBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }



}

export {getAllReadListFromLocalDB,addReadListToLocalDB}