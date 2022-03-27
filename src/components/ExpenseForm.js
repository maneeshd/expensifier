import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class DatePickButton extends React.Component {
  render() {
    return (
      <Button {...this.props} color="dark">
        {this.props.value}
      </Button>
    )
  }
}

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expense_name_value: props.expense ? props.expense.expense_name : '',
      description_value: props.expense ? props.expense.description : '',
      amount_value: props.expense ? props.expense.amount.toString() : '',
      created_on_value: props.expense ? props.expense.created_on : moment(),
      expense_name_error: undefined,
      amount_value_error: undefined,
    }
  }

  handle_expense_name_change = (event) => {
    const expense_name_value = event.target.value
    this.setState(() => ({ expense_name_value: expense_name_value, expense_name_error: undefined }))
  }

  handle_amount_change = (event) => {
    const amount_value = event.target.value
    if (!amount_value || amount_value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount_value: amount_value, amount_value_error: undefined }))
    }
  }

  handle_date_change = (created_on_value) => {
    if (created_on_value) {
      this.setState(() => ({ created_on_value: created_on_value }))
    }
  }

  form_submit_handler = (event) => {
    event.preventDefault()
    if (!this.state.expense_name_value) {
      this.setState(() => ({ expense_name_error: 'Please provide Expense name/value.' }))
    } else if (!this.state.amount_value) {
      this.setState(() => ({ amount_value_error: 'Please provide amount of expense.' }))
    } else {
      this.setState(() => ({ expense_name_error: undefined }))
      this.setState(() => ({ amount_value_error: undefined }))
      this.props.onSubmit({
        expense_name: this.state.expense_name_value,
        amount: parseFloat(this.state.amount_value, 10),
        created_on: this.state.created_on_value,
        description: this.state.description_value,
      })
    }
  }

  render() {
    return (
      <Form className="pt-4 pb-2 px-4 border border-light rounded" onSubmit={this.form_submit_handler}>
        <FormGroup row>
          <Label for="expense_name" md={2}>
            Expense
          </Label>
          <Col md={10}>
            <Input
              id="expense_name"
              placeholder="Name/Type of expense"
              autoFocus
              minLength={6}
              value={this.state.expense_name_value}
              onChange={this.handle_expense_name_change}
              autoComplete="false"
              required
              invalid={this.state.expense_name_error ? true : false}
            />
            <FormFeedback>{this.state.expense_name_error}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="amount" md={2}>
            Amount
          </Label>
          <Col md={10}>
            <Input
              id="amount"
              value={this.state.amount_value}
              onChange={this.handle_amount_change}
              autoComplete="false"
              required
              invalid={this.state.amount_value_error ? true : false}
            />
            <FormFeedback>{this.state.amount_value_error}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="created_on" md={2}>
            Date
          </Label>
          <Col md={10}>
            <DatePicker
              selected={this.state.created_on_value}
              onChange={this.handle_date_change}
              dateFormat="DD-MMM-YYYY"
              maxDate={moment()}
              todayButton="Today"
              className="form-control"
              id="created_on"
              locale="en"
              isClearable={false}
              onChangeRaw={(e) => {
                e.preventDefault()
              }}
              autoComplete="false"
              required
              customInput={<DatePickButton />}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" md={2}>
            Description
          </Label>
          <Col md={10}>
            <Input
              type="textarea"
              id="description"
              placeholder="Add an optional description/note for your expense (max characters=64)"
              value={this.state.description_value}
              onChange={(e) => this.setState({ description_value: e.target.value })}
              maxLength={64}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={12} className="text-center">
            <Input
              type="submit"
              color="primary"
              value="Submit"
              tag={Button}
              className="w-50 shadow rounded bg-primary text-light"
            >
              Submit
            </Input>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
