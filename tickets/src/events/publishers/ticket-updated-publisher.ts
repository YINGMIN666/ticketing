import { Publisher, Subjects, TicketUpdatedEvent } from "@ymztickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
