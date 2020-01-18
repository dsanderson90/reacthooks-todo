import React, { useState, useEffect } from 'react';

import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        setLoading(false);
        setPost(res.data);
        console.log(res);
        setError('');
      })
      .catch(err => {
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);
  return (
    <div>
      {loading ? 'Loading' : JSON.stringify(post)}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
