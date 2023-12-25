
import Header from '../components/header';

interface ErrorProps {
  status? : number,
  text? : string
}

const Error = ({
  status,
  text = "Something went wrong"
} : ErrorProps) => {
    return (
        <>
          <Header />
          <div className='w-full h-screen flex justify-center items-center flex-col'>
            <div className='font-medium text-xl'>Error</div>
            {status && <div className='font-bolt text-9xl'>{status}</div>}
            <div className="font-semibold text-4xl">{text}</div>
          </div>
        </>
    );
};

export default Error;