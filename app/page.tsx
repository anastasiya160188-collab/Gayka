import {Container, Title, TopPanel} from '../components/shared';

export default function Home() {
  return (
    <>
    <Container className='mt-5'>
        <Title 
        className='font-extrabold'
        text='Все автозапчасти' sizes='sm'/>
    </Container>
    <TopPanel/>
    </>
      
  );
}
