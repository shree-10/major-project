import { useState } from 'react';

async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    try {
      setLoading(true);
      const response = await query({ inputs: prompt });
      setImageSrc(URL.createObjectURL(response));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        backgroundColor: 'black',
        padding: '',
      }}
    >
      <h1>Enter Desired Outfit Details</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Enter prompt...'
          style={{
            padding: '10px',
            border: '2px solid ',
            borderRadius: '10px',
            marginRight: '10px',
            fontSize: '16px',
            width: '300px',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px 20px',
          
            backgroundColor: 'rgb(79 70 229)',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            border: '2px ',
      borderRadius: '10px',
            transition: 'background-color 0.3s ease',
          }}
          disabled={loading || prompt === ''}
        >
          {loading ? 'Loading...' : 'Generate'}
        </button>
      </div>
      {imageSrc && (
  <div
    style={{
      border: '2px solid ',
      borderRadius: '10px',
      padding: '10px',
      width: '100%',
      marginBottom: '20px',
    }}
  >
    <img
      src={imageSrc}
      alt='Generated'
      style={{
        maxWidth: '100%',
        maxHeight: '500px',
        display: 'block',
        margin: '0 auto',
        borderRadius: '10px', // Apply border radius here
      }}
    />
        </div>
      )}
      {loading && <p>Loading...</p>} 
      
      {/* <iframe src="https://www.bing.com/visualsearch#vs_content" height="230" width="800" title="Iframe Example" scrolling="no"></iframe> */}

      
    </div>
    

  );
};

export default Chat;