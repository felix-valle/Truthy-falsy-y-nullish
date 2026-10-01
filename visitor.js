function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}


function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}


function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}


function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

