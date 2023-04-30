//generate a random function between 1 and 123

const random = (min:number, max:number):number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const RandomFox = ():JSX.Element => {
    const image = `https://randomfox.ca/images/${random(1, 123)}.jpg`;
    
    return <img width={320} height='auto' src={image} alt="random fox" className="rounded-lg shadow-lg"/>
}