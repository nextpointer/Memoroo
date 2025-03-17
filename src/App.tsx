
import { Button, Card } from 'pixel-retroui';

function App() {
  return (
    <>
    <main className='h-screen  w-full flex items-center justify-center flex-col'>
      <h1 className="text-2xl font-minecraft mb-4">Want to play Memory Card Game?</h1>
      <Card className="p-4 mb-4 w-[50%] flex items-center justify-center">
        <h1>Memoroo</h1>
      </Card>
      <Button>Get Started</Button>
      </main>
    </>
  );
}

export default App;