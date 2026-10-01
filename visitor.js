function createVisitor(nombre, edad, ticketId) {
  return {
    nombre: nombre,
    edad: edad,
    ticketId: ticketId,
  };
}

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}

function ticketstatus(tickets, tickeID){
  if (tickets[tickeID] ===undefined) {
    return "unknown ticket id"; 
  } else if (tickets[tickeID] === null){
    return "not sold";
  } else {
    return "sold to ${tickets[ticketId]}";
  }
}

function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
