import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ContactPage() {
  return (
    <div className="p-10 flex flex-col items-center gap-6">
      <Card title="Contact Us">
        Email: info@vortexdynamics.com <br />
        Phone: +256 700 123456 <br />
        Address: Kampala, Uganda
      </Card>

      <Button variant="primary" size="lg">Send Message</Button>
    </div>
  );
}
