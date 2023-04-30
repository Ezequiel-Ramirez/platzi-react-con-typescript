import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
    src: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [currentsSrc, setCurrentSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=") //carga una imagen gris antes del lazy para que tenga mejor experiencia de usuario
    
    //function to lazy load images
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSrc(src);                    
                }
            });
        });
        if (node.current) {
            observer.observe(node.current);
        }
        
        return () => {
            observer.disconnect();
        };
    }, [src]);
    

    return (
        <img
            ref={node}
            src={currentsSrc}
            className="rounded-lg shadow-lg"
            {...imgProps}
        />
    );
};
