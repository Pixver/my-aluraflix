import React, { useState } from 'react';
import Card from './Card';

function App() {
    const [videos, setVideos] = useState([
        { id: 1, capa: 'url1', titulo: 'Video 1' },
        { id: 2, capa: 'url2', titulo: 'Video 2' },
        // ...otros videos
    ]);

    const handleDelete = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const handleEdit = (id) => {
        // Lógica para editar el video
        console.log('Edit video', id);
    };

    return (
        <div>
            {videos.map(video => (
                <Card 
                    key={video.id} 
                    id={video.id} 
                    capa={video.capa} 
                    titulo={video.titulo}
                    onDelete={handleDelete}
                    onEdit={handleEdit} 
                />
            ))}
        </div>
    );
}

export default App;
