import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCloud6 from "@/components/LogoCloud6";
import EventCard from "@/components/EventCard";
import EventCardType from "@/types/EventCard";
import getEvents from "@/lib/getEvents";
import { NextSeo } from "next-seo";

export default function Events({
  events,
}: {
  events: {
    pastEvents: EventCardType[];
    _2023: EventCardType[];
    _2024: EventCardType[];
  };
}) {
  return (
    <div>
      <NextSeo
        title="Events"
        description="Kreative Horizon hosts a variety of events for students to learn, build, and grow."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-horizon-orange-100">
            <Container>
              <div className="pt-64 pb-16">
                <p className="font-guthen tracking-wide text-2xl mb-4 text-center">
                  Season One Events
                </p>
                <h1 className="font-chedros text-6xl md:text-7xl text-center">
                  Come build the future of tomorrow, today
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <div className="py-20">
          <LogoCloud6 />
        </div>
        <Container>
          <div className="pb-24">
            <h2 className="text-5xl text-horizon-grey-600 font-chedros pb-8">
              2023 Events
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {events._2023.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div className="pb-24">
            <h2 className="text-5xl text-horizon-grey-600 font-chedros pb-8">
              2024 Events
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {events._2024.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div className="pb-24">
            <h2 className="text-5xl text-horizon-grey-600 font-chedros pb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {events.pastEvents.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const events: EventCardType[] = await getEvents();
  const pastEvents: EventCardType[] = [];
  const _2023: EventCardType[] = [];
  const _2024: EventCardType[] = [];

  events.forEach((event: EventCardType) => {
    if (Date.now() > new Date(event.start_datetime).getTime()) {
      pastEvents.push(event);
    } else {
      if (event.year === 2023) {
        _2023.push(event);
      } else if (event.year === 2024) {
        _2024.push(event);
      }
    }
  });

  return {
    props: {
      events: {
        pastEvents,
        _2023,
        _2024,
      },
    },
  };
}
