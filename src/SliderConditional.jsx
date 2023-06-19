import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import Slider2 from './Slider2';

const SliderConditional = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {viewportWidth < 720 ? <Slider2 /> : <Slider />}
        </div>
    );
};

export default SliderConditional;
