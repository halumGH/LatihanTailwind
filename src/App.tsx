function App() {
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-5 gap-3">
        <h1 className="grid col-span-5 justify-items-center font-sans text-lg font-bold">
          Chores ToDo List
        </h1>
        <p className="grid col-span-4 ">ToDo1</p>
        <img></img>
        <p>ToDo2</p>
        <p>ToDo3</p>
        <p>ToDo4</p>
        <p>ToDo5</p>
        <p>ToDo6</p>
        <p>ToDo1</p>
        <p>ToDo2</p>
        <p>ToDo3</p>
        <p>ToDo4</p>
        <p>ToDo5</p>
        <p>ToDo6</p>
      </div>
      <div className="grid grid-flow-row grid-cols-5 gap-3">
        <h1 className="grid col-span-5 justify-items-center font-sans text-lg font-bold">
          Done : 0
        </h1>
      </div>
    </div>
  )
}

export default App
