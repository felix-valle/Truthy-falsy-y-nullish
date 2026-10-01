function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}
console.log(createVisitor('Felix', 20, 'FVM2006'));


function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

console.log(revokeTicket({ name: 'Felix', age: 20, ticketId: 'FVM2006' }));

function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}
console.log(ticketStatus(tickets, 'FVM2006'));

function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

console.log(simpleTicketStatus(tickets, 'FVM2006'));

function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

console.log(gtcVersion({ name: 'Felix', gtc: { version: '2.1' } }));

