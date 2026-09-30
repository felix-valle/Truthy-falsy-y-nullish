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