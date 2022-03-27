// Summarize the current view

export default (expenses, filters) => {
  let start_date = 'the start of time'
  let end_date = 'infinity and beyond'
  let total = 0

  if (filters.start_date) {
    start_date = filters.start_date.format('DD-MMM-YYYY')
  }

  if (filters.end_date) {
    end_date = filters.end_date.format('DD-MMM-YYYY')
  }

  if (expenses.length) {
    total = expenses.reduce((sum, expense) => {
      return sum + expense.amount
    }, 0)
  }
  const expense_word = expenses.length === 1 ? 'expense' : 'expenses'

  const summary = expenses.length
    ? `Showing ${expenses.length} ${expense_word} from ${start_date} to ${end_date} totaling $${total}`
    : 'Feels lonely out here...'

  return summary
}
