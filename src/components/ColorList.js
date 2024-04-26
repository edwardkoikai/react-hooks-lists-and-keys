function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
const coloCards = colors.map((color, index)=>{
  return <li key = {index} style={{color: color}}>{color}</li>
})
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {coloCards}
      </ol>
    </div>
  );
}
//Exmaple 2
const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
];

const userCard = users.map((user)=>{
  return <h2 key ={user.id}>{user.firstName}{user.lastName}</h2>
})

export default ColorList