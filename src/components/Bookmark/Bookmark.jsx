import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title}=bookmark
    return (
        <div className='bg-slate-50 p-4 m-4 rounded-md '>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
bookmark:PropTypes.object
}
export default Bookmark;