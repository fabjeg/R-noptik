import "./services.css";
import { Card } from "../../index";
import { ScrollComponent } from "../scrollComponent/scrollComponent";

export function Services() {
  return (
    <div className="container_services">
        <h2>Nos sevices</h2>
        <ScrollComponent>
          <Card />
        </ScrollComponent>
    </div>
  );
}
