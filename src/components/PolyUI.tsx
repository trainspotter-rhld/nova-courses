interface Props {
    title: string;
    text: string;
}
export function Card({title, text}: Props,)
{
    return (
        <div className='bg-blue-400 text-white py-4 pl-4 m-1 rounded-md sticky top-0 w-{15%}'>
            <h1 className='font-bold font-mono text-xl'>{title}</h1>
            <p className="font-light font-mono text-md">{text}</p>
        </div>
    );
}