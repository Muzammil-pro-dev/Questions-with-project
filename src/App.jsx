import { useState, useEffect } from 'react'
import ToolCard from './components/ToolCard'
import {
  removeDuplicates, reverseString, evenOdd, largest, countVowels, capitalize,
  removeFalsy, sumArray, missingNumbers
} from "./components/functions"
import './App.css'


function App() {

  return (
    <>
      <div className="app">
        <h1>Project with Question</h1>

        <div className="grid">

          <ToolCard title="Remove Duplicates" action={removeDuplicates} isArray />

          <ToolCard title="Reverse String" action={reverseString} />

          <ToolCard title="Even / Odd" action={evenOdd} isArray />

          <ToolCard title="Largest Number" action={largest} isArray />

          <ToolCard title="Count Vowels" action={countVowels} />

          <ToolCard title="Capitalize Text" action={capitalize} />

          <ToolCard title="Remove Falsy" action={removeFalsy} isArray />

          <ToolCard title="Array Sum" action={sumArray} isArray />

          <ToolCard title="Missing Numbers" action={missingNumbers} isArray />

        </div>
      </div>
    </>
  )
}

export default App
