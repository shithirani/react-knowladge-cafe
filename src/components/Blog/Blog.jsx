import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
  const{id,title,cover,reading_time,author_name,author_img,posted_date,hashtag}=blog
    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt=""  className='w-full h-56'/>
            <div className='flex justify-between mb-6'>
              <div className='flex'>
              <img src={author_img} alt="" className='w-12 ' />
              <div className='ml-6'>
                <h3>{author_name}</h3>
                <p>{posted_date}</p>

              </div>
                </div>  
                <div>
                <span>{reading_time}  read</span>
                <button onClick={()=>handleAddToBookmark(blog)}
                 className='ml-2 text-2xl text-green-500 mt-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
          <h2 className='text-4xl'>{title}</h2> 
          <p>
            {
                hashtag.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
            }
            </p> 
            <button onClick={()=>handleMarkAsRead(reading_time,id)}
            className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;