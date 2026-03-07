"use client";

import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/data";

export default function Services() {
  return (
    <section id="services" className="py-16">
      {/* Header */}
      <Header title="What I Offer" />

      {/* Service Cards */}
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 mt-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <ServiceCard
              name={service.name}
              icon={service.icon}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}