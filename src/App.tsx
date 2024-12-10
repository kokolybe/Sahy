import React from 'react';
import { Sparkles } from 'lucide-react';
import { GameModes } from './components/GameModes';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-rose-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary">
              Challengeo
            </h1>
          </div>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Créez des moments inoubliables avec vos proches à travers des défis amusants et des questions captivantes
          </p>
        </header>

        <main className="flex justify-center">
          <GameModes />
        </main>
      </div>
    </div>
  );
}

export default App;