export const SummaryHeader = ({ total_items, total_amount }) => {

  return (
    <div className='summary-header'>
      <span>ITENS {total_items}</span>
      <span>R$ {total_amount}</span>
    </div>)
} 