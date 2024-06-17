function Food() {
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <ul>
      <li>{food1.toLocaleUpperCase()}</li>
      <li>{food2}</li>
      <li>Apple</li>
    </ul>
  );
}

export default Food;
