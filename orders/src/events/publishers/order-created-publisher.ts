import { Publisher, OrderCreatedEvent, Subjects } from "@ymztickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
