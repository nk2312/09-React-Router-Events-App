import React from 'react'
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
function EventEdit() {

  const data=useRouteLoaderData("event-details");

  return (
    <div>
      <EventForm event={data.events}/>
    </div>
  )
}

export default EventEdit