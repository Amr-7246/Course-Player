'use client'
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FakeComments } from '../Data/FakeData';

const Comments = () => {
// * ################ Start Hooks 
  const [comments, setComments] = useState(FakeComments);
  const [newComment, setNewComment] = useState('');
// * ################ End Hooks 
// * ################ Start logic 
  const addComment = () => {
    if (!newComment.trim()) return;
    const fakeUser = {
      id: comments.length + 1,
      name: 'Guest User',
      comment: newComment,
      date: new Date().toISOString().split('T')[0],
      isAdmin: false,
      rating: 3 ,
      image: 'https://randomuser.me/api/portraits/lego/1.jpg'
    };
    setComments([fakeUser, ...comments]);
    setNewComment('');
  };
// * ################ End logic 
// * ################ Start Elementes 
  return (
    <div id="comments-section"  className='comments'>
      {/* Head */}
        <h1 className='font-black text-black text-lg mb-4'>Comments</h1>
      {/* Head */}
      {/* Commentes itself */}
        <div className='h-auto bg-white max-h-[450px] overflow-y-scroll p-4 rounded-lg shadow-lg'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex items-start gap-4 mb-4 p-3 border-b last:border-none'>
              <img 
                src={comment.image} 
                alt={comment.name} 
                className='w-12 h-12 rounded-full border border-gray-300' 
              />
              <div>
                <div className='flex items-center gap-2'>
                  <h2 className='font-semibold text-gray-800'>{comment.name}</h2>
                  {comment.isAdmin && <span className='text-xs bg-red-500 text-white px-2 py-1 rounded-md'>Admin</span>}
                </div>
                <p className='text-gray-600 text-sm'>{comment.comment}</p>
                <div className='flex items-center justify-between text-xs text-gray-500 mt-1'>
                  <span className='mr-10'>{comment.date}</span>
                  <span className='flex'>
                    {Array.from({ length: comment.rating }).map((_, index) => (
                      <AiFillStar key={index} className='text-yellow-500 ' />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      {/* Commentes itself */}
      {/* Add Commentes area */}
        <div className='mt-4 p-4 bg-white rounded-lg shadow-lg'>
          <textarea
            className='w-full p-2 border shadow-lg shadow-stone-500 h-[120px] border-gray-300 text-stone-700 focus:outline-none focus:border-none rounded-lg'
            placeholder='Write a comment...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className='mt-2 px-4 py-2 bg-teal-700 cursor-pointer duration-500 text-white rounded-sm hover:bg-blue-600'
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>
      {/* Add Commentes area */}
    </div>
  );
};
// * ################ End Elementes 

export default Comments;
