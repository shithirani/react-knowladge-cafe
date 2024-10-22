import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4">
            <div>
                <h3>Reading Time:{readingTime}</h3>
            </div>
           <h2 className="text-2xl text-center ">Bookmarks Blogs:{bookmarks.length}</h2> 
           {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
BookMarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default BookMarks;