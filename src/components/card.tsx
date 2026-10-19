const Card = () => {
    const items = [
    { name: 'Pen', price: 2 },
    { name: 'Book', price: 10 },
  ]

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const count=items.length;
  return (
    <div>
      card
      <p >Total: {totalPrice}, Count: {count}</p>
    </div>
  )
}

export default Card
