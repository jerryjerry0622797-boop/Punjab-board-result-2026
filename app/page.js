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
    window.open(boardData.url, '_blank');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">BISE Result 2025</h1>
        <p className="text-center text-gray-500 mb-6">Official Website pe jao</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">1. Select Board</label>
            <select 
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              required 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 outline-none"
            >
              <option value="">-- Select Board --</option>
              {boards.map((board) => (
                <option key={board.name} value={board.name}>{board.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">2. Enter Roll No</label>
            <input 
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
              placeholder="Example: 123456"
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 outline-none"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md">
            Result Dekho
          </button>

        </form>
      </div>
    </main>
  );
}
