"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { endpoints } from "../../api/endpoints";
import { CreateTicketProps } from "../../_types/ticket-type";

type TypeForm = 'title' | 'body' | 'user_email' | 'priority'

export default function CreateForm() {
  const router = useRouter()
  
  const [newTicket, setNewTicket] = useState<CreateTicketProps>({
    title: '',
    body: '',
    user_email: '',
    priority: 'low'
  })
  const [isLoading, setIsLoading] = useState(false)
  
  function handleOnChangeValue(type: TypeForm, value: string | number) {
    
    setNewTicket({
      ...newTicket,
      [type]: value,
    });
  }
  
  const handleSubmit = async (event: FormEvent) => {
    const anotherFakeInfo = {
      id: new Date(),
      open_date: new Date(),
      status: 'open',
    }
    
    event.preventDefault()
    setIsLoading(true)
    
    const res = await fetch(`${endpoints.tickets.getTicketsList}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...newTicket, ...anotherFakeInfo})
    })
    
    if (res.status === 201) {
      router.refresh()
      router.push('/tickets')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => handleOnChangeValue('title', e.target.value)}
          value={newTicket?.title}
        />
      </label>
      
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => handleOnChangeValue('body', e.target.value)}
          value={newTicket?.body}
          rows={10}
        />
      </label>
      
      <label>
        <span>User email:</span>
        <input
          type="email"
          required
          onChange={(e) => handleOnChangeValue('user_email', e.target.value)}
          value={newTicket?.user_email}
        />
      </label>
      
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) => handleOnChangeValue('priority', e.target.value)}
          value={newTicket?.priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      
      <button
        className="btn-primary btn"
        disabled={isLoading}
      >
        {
          isLoading
            ? <span>Adding...</span>
            : <span>Add Ticket</span>}
      </button>
    </form>
  
  )
}
