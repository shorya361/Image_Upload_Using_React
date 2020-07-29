import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Images');
    setLoading(true);
    const res = await axios.post(
      ' https://api.cloudinary.com/v1_1/shorya361/image/upload',
      data
    );
    console.log(res.data.secure_url);
    // const file = await res.json();

    setImage(res.data.secure_url);
    setLoading(false);
  };

  return (
    <div className='App'>
      <h1>Upload image</h1>
      <input
        type='file'
        name='file'
        placeholder='upload an image'
        onChange={uploadImage}
      />

      {loading ? (
        <h3>Loading</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  );
}

export default App;
