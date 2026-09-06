'use client';
import { useState } from 'react';

export default function Home() {
  const [rollNo, setRollNo] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');

  const boards = [
    { name: "BISE Lahore", url: "https://www.biselahore.com" },
    { name: "BISE Gujranwala", url: "https://www.bisegrw.com" },
    { name: "BISE Faisalabad", url: "https://www.bisefsd.edu.pk" },
    { name: "BISE Multan", url: "https://www.bisemultan.edu.pk" },
    { name: "BISE Rawalpindi", url: "https://www.biserwp.edu.pk" },
    { name: "BISE Sargodha", url: "https://www.bisesargodha.edu.pk" },
    { name: "BISE Bahawalpur", url: "https://www.bisebwp.edu.pk" },
    { name: "BISE Sahiwal", url: "https://www.bisesahiwal.edu.pk" },
    { name: "BISE DG Khan", url: "https://www.bisedgkhan.edu.pk" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedBoard) return alert("Pehle Board select karo");
    
    const boardData = boards.find(b => b.name === selectedBoard);
    window.open(boardData.url, '_blank'); // Nayi tab me site khul jayegi
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">BISE Result 2025</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          
          <div className="mb-4">
            <label className="font-bold text-gray-700 block mb-1">1. Select Board</label>
            <select 
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              required 
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">-- Select Board --</option>
              {boards.map((board) => (
                <option key={board.name} value={board.name}>{board.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-bold text-gray-700 block mb-1">2. Enter Roll No</label>
            <input 
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
              placeholder="123456"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700">
            Result Dekho
          </button>

        </form>
      </div>
    </main>
  );
}
